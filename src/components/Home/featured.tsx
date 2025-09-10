import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import configPromise from "@payload-config"
import { getPayload } from "payload"

export const revalidate = 600 // ISR for 10 minutes

export default async function Featured() {
  const payload = await getPayload({ config: configPromise })

  const pages = await payload.find({
    collection: "pages",
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

  const baseURL = process.env.NEXT_PUBLIC_SERVER_URL || process.env.__NEXT_PRIVATE_ORIGIN || "http://localhost:3000"

  const sections = pages.docs.map((page: any) => {
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
      const extractText = (content: any): string => {
        if (!content?.root?.children) return ""
        let text = ""
        function extractFromNode(node: any): void {
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
      link: `/${page.slug}`,
    }
  })

  return (
    <section className="px-4 py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">What We Do</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-4xl mx-auto">
            We partner with like-minded individuals, corporations, and networks to develop and implement high-impact
            projects across Tamil Nadu.
          </p>
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
                    Read More
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
