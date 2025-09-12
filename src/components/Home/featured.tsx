import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import configPromise from "@payload-config"
import { getPayload } from "payload"

export const revalidate = 600 // ISR for 10 minutes

interface FeaturedProps {
  locale?: "en" | "ta"
}

interface RichTextNode {
  type: string
  text?: string
  children?: RichTextNode[]
}

interface PayloadPage {
  slug: string
  title: string
  hero?: {
    media?: {
      url: string
    }
    richText?: {
      root?: {
        children: RichTextNode[]
      }
    }
  }
  meta?: {
    description?: string
    image?: {
      url: string
    }
  }
}

export default async function Featured({ locale = "en" }: FeaturedProps) {
  const translations = {
    en: {
      title: "What We Do",
      subtitle:
        "We partner with like-minded individuals, corporations, and networks to develop and implement high-impact projects across Tamil Nadu.",
      readMore: "Read More",
      fallbackSections: [
        {
          title: "Education",
          desc: "Empowering communities through quality education and skill development programs.",
        },
        {
          title: "Health",
          desc: "Providing accessible healthcare services and promoting wellness in rural areas.",
        },
        {
          title: "Women Empowerment",
          desc: "Supporting women through entrepreneurship and leadership development initiatives.",
        },
        {
          title: "Community Development",
          desc: "Building stronger communities through sustainable development projects.",
        },
      ],
    },
    ta: {
      title: "நாம் என்ன செய்கிறோம்",
      subtitle:
        "தமிழ்நாடு முழுவதும் அதிக தாக்கம் கொண்ட திட்டங்களை உருவாக்கி செயல்படுத்த ஒத்த எண்ணம் கொண்ட தனிநபர்கள், நிறுவனங்கள் மற்றும் நெட்வொர்க்குகளுடன் நாங்கள் கூட்டாளியாக செயல்படுகிறோம்.",
      readMore: "மேலும் படிக்க",
      fallbackSections: [
        {
          title: "கல்வி",
          desc: "தரமான கல்வி மற்றும் திறன் மேம்பாட்டு திட்டங்கள் மூலம் சமூகங்களை வலுப்படுத்துதல்.",
        },
        {
          title: "சுகாதாரம",
          desc: "கிராமப்புறங்களில் அணுகக்கூடிய சுகாதார சேவைகளை வழங்குதல் மற்றும் நலவாழ்வை மேம்படுத்துதல்.",
        },
        {
          title: "பெண்கள் வலுவூட்டல்",
          desc: "தொழில்முனைவு மற்றும் தலைமைத்துவ மேம்பாட்டு முயற்சிகள் மூலம் பெண்களை ஆதரித்தல்.",
        },
        {
          title: "சமூக மேம்பாடு",
          desc: "நிலையான மேம்பாட்டு திட்டங்கள் மூலம் வலுவான சமூகங்களை உருவாக்குதல்.",
        },
      ],
    },
  }

  const t = translations[locale]

  const fallbackSections = t.fallbackSections.map((section, index) => ({
    ...section,
    img: "/placeholder.svg?height=250&width=350",
    link: ["education", "health", "women-empowerment", "community-development"][index],
  }))

  let sections = fallbackSections

  try {
    const payload = await getPayload({ config: configPromise })

    const queryPromise = payload.find({
      collection: "pages",
      locale: locale,
      fallbackLocale: "en",
      depth: 2,
      limit: 4,
      sort: "-createdAt",
      overrideAccess: false,
      where: {
        slug: {
          in: ["education", "health", "women-empowerment", "community-development"],
        },
      },
    })

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Database query timeout")), 5000),
    )

    const pages = await Promise.race([queryPromise, timeoutPromise])

    if (pages && typeof pages === "object" && "docs" in pages && Array.isArray(pages.docs) && pages.docs.length > 0) {
      const baseURL = process.env.NEXT_PUBLIC_SERVER_URL || process.env.__NEXT_PRIVATE_ORIGIN || "http://localhost:3000"

      sections = pages.docs.map((page: PayloadPage) => {
        let imageUrl = "/placeholder.svg?height=250&width=350"

        // Extract image from hero section or meta image
        if (page.hero?.media?.url) {
          imageUrl = page.hero.media.url.startsWith("http") ? page.hero.media.url : `${baseURL}${page.hero.media.url}`
        } else if (page.meta?.image?.url) {
          imageUrl = page.meta.image.url.startsWith("http") ? page.meta.image.url : `${baseURL}${page.meta.image.url}`
        }

        // Extract description from hero or meta description
        let description = page.meta?.description || ""
        if (!description && page.hero?.richText) {
          // Extract plain text from rich text content
          const extractText = (content: NonNullable<PayloadPage["hero"]>["richText"]): string => {
            if (!content?.root?.children) return ""
            let text = ""
            function extractFromNode(node: RichTextNode): void {
              if (node.type === "text") {
                text += node.text || ""
              } else if (node.children) {
                node.children.forEach(extractFromNode)
              }
            }
            content.root.children.forEach(extractFromNode)
            return text.trim()
          }
          description = extractText(page.hero.richText).substring(0, 150) + "..."
        }

        return {
          title: page.title,
          desc: description || `Learn more about ${page.title} and how we make a difference in the community.`,
          img: imageUrl,
          link: `/${page.slug}?locale=${locale}`,
        }
      })
    }
  } catch (error) {
    console.error("[v0] Database query failed in Featured component:", error)
    sections = fallbackSections.map((section, index) => ({
      ...section,
      img: "/placeholder.svg?height=250&width=350",
      link: `/${["education", "health", "women-empowerment", "community-development"][index]}?locale=${locale}`,
    }))
  }

  return (
    <section className="px-4 py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{t.title}</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-4xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {sections.map((section, idx) => (
            <Card key={idx} className="overflow-hidden group flex flex-col h-full rounded-2xl max-w-md mx-auto">
              <div className="relative h-48 rounded-2xl overflow-hidden group">
                <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                  <Image src={section.img || "/placeholder.svg"} alt={section.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 rounded-2xl" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold">{section.title}</h3>
                </div>
              </div>
              <CardContent className="bg-card p-4 flex-grow">
                <p className="text-sm text-card-foreground">{section.desc}</p>
              </CardContent>
              <CardFooter className="bg-card p-4 justify-end">
                <Button asChild variant="ghost" size="sm" className="hover:text-primary">
                  <Link href={section.link}>
                    {t.readMore}
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
