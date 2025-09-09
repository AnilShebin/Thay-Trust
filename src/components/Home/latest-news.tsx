import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import configPromise from "@payload-config"
import { getPayload } from "payload"
import RichText from "@/components/RichText"
import type { DefaultTypedEditorState } from "@payloadcms/richtext-lexical"

export const revalidate = 600 // ISR for 10 minutes

type NewsItem = {
  slug: string
  title: string
  excerpt?: string
  fullDate: string
  date: { day: string; month: string }
  category?: string
  image?: string
  author?: string
  content?: DefaultTypedEditorState
}

function extractTextFromLexical(content: DefaultTypedEditorState): string {
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

export default async function LatestNews() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: "posts",
    depth: 2,
    limit: 10,
    sort: "-createdAt",
    overrideAccess: false,
  })

  const baseURL = process.env.NEXT_PUBLIC_SERVER_URL || process.env.__NEXT_PRIVATE_ORIGIN || "http://localhost:3000"

  const newsItems: NewsItem[] = posts.docs.map((doc: any) => {
    let imageUrl = "/placeholder.svg?height=300&width=400"
    if (doc.heroImage?.url) {
      imageUrl = doc.heroImage.url.startsWith("http") ? doc.heroImage.url : `${baseURL}${doc.heroImage.url}`
    }

    const categoryName =
      doc.categories && doc.categories.length > 0
        ? typeof doc.categories[0] === "object"
          ? doc.categories[0].title
          : doc.categories[0]
        : "General"

    let excerpt = doc.excerpt || doc.meta?.description || ""
    if (!excerpt && doc.content) {
      const plainText = extractTextFromLexical(doc.content)
      excerpt = plainText.substring(0, 150) + (plainText.length > 150 ? "..." : "")
    }

    const authorName =
      doc.populatedAuthors && doc.populatedAuthors.length > 0 ? doc.populatedAuthors[0].name : undefined

    return {
      slug: doc.slug,
      title: doc.title,
      excerpt: excerpt,
      fullDate: new Date(doc.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      date: {
        day: new Date(doc.createdAt).getDate().toString().padStart(2, "0"),
        month: new Date(doc.createdAt).toLocaleString("en-US", { month: "short" }).toUpperCase(),
      },
      category: categoryName,
      image: imageUrl,
      author: authorName,
      content: doc.content,
    }
  })

  const sidebarNews = newsItems.slice(0, 4)

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-24 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Latest Articles</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8">
          {/* Main News Cards */}
          <div className="xl:col-span-3 space-y-6">
            {newsItems.map((item) => (
              <Card
                key={item.slug}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card border-border p-0 max-w-4xl"
              >
                <div className="md:flex h-full">
                  <div className="md:w-2/5 relative">
                    <div className="relative h-48 md:h-full">
                      <Image
                        src={item.image || "/placeholder.svg?height=300&width=400&query=news article image"}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover md:rounded-r-3xl"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground dark:text-foreground rounded-lg p-2 text-center min-w-[60px] z-10">
                        <div className="text-xl font-bold">{item.date.day}</div>
                        <div className="text-sm font-medium">{item.date.month}</div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="md:w-3/5 p-6 flex flex-col justify-between">
                    <div>
                      <Badge variant="secondary" className="mb-3 bg-secondary text-secondary-foreground">
                        {item.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-card-foreground mb-3 hover:text-primary transition-colors leading-tight">
                        <Link href={`/posts/${item.slug}`}>{item.title}</Link>
                      </h3>
                      {item.excerpt ? (
                        <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">{item.excerpt}</p>
                      ) : item.content ? (
                        <div className="text-muted-foreground mb-4 leading-relaxed line-clamp-3 prose prose-sm max-w-none">
                          <RichText data={item.content} enableGutter={false} enableProse={false} />
                        </div>
                      ) : null}
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {item.fullDate}
                        {item.author && (
                          <>
                            <span className="mx-2">•</span>
                            <span>By {item.author}</span>
                          </>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary-foreground hover:bg-primary transition-colors"
                        asChild
                      >
                        <Link href={`/posts/${item.slug}`} className="flex items-center">
                          Read More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="xl:col-span-1 space-y-6">
            <div className="sticky top-24">
              <h3 className="text-xl font-bold text-foreground mb-6">Recent Updates</h3>
              <div className="space-y-4">
                {sidebarNews.map((item) => (
                  <Card
                    key={item.slug}
                    className="overflow-hidden hover:shadow-md transition-shadow duration-300 bg-card border-border p-0"
                  >
                    <div className="flex h-32">
                      <div className="w-32 relative flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg?height=120&width=120&query=news thumbnail"}
                          alt={item.title}
                          width={120}
                          height={80}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      <CardContent className="flex-1 p-4 flex flex-col justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground text-base mb-2 hover:text-primary transition-colors leading-tight line-clamp-2">
                            <Link href={`/posts/${item.slug}`}>{item.title}</Link>
                          </h4>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mt-auto">
                          <Calendar className="w-4 h-4 mr-1" />
                          {item.fullDate}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-6" asChild>
                <Link href="/posts" className="flex items-center justify-center">
                  View All Posts
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
