import type { Metadata } from "next/types"
import { PageRange } from "@/components/PageRange"
import { Pagination } from "@/components/Pagination"
import PostGrid from "@/components/PostGrid"
import configPromise from "@payload-config"
import { getPayload } from "payload"
import PageClient from "./page.client"

export const dynamic = "force-static"
export const revalidate = 600

type PageProps = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page({ searchParams }: PageProps) {
  const locale = (searchParams.locale as string) || "en"

  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: "posts",
    locale: locale as "en" | "ta",
    fallbackLocale: "en",
    depth: 2,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
      heroImage: true,
      populatedAuthors: true,
      publishedAt: true,
      createdAt: true,
      updatedAt: true,
      content: true,
    },
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Pass locale if PageClient needs it */}
      <PageClient />

      <section className="pt-24 pb-16">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <div className="flex-1">
              <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-2">
                    {locale === "ta" ? "அனைத்து பதிவுகள்" : "All Posts"}
                  </h2>
                  <PageRange
                    collection="posts"
                    currentPage={posts.page}
                    limit={12}
                    totalDocs={posts.totalDocs}
                  />
                </div>
              </div>

              <PostGrid posts={posts.docs} />

              {posts.totalPages > 1 && posts.page && (
                <div className="mt-12 flex justify-center">
                  <Pagination page={posts.page} totalPages={posts.totalPages} />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:w-80">
              <div className="sticky top-24 space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-4">
                    {locale === "ta" ? "எங்கள் வலைப்பதிவைப் பற்றி" : "About Our Blog"}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {locale === "ta"
                      ? "புதிய போக்குகள், பார்வைகள் மற்றும் புதுமைகளை பற்றி புதுப்பித்துக் கொள்ளுங்கள். எங்கள் நிபுணர் ஆசிரியர்கள் உங்களை முன்னேற்றுவதற்கான மதிப்புமிக்க அறிவை பகிர்கிறார்கள்."
                      : "Stay updated with the latest trends, insights, and innovations. Our expert authors share valuable knowledge to help you stay ahead in the rapidly evolving digital landscape."}
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-4">
                    {locale === "ta" ? "விரைவான புள்ளிவிவரங்கள்" : "Quick Stats"}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">
                        {locale === "ta" ? "மொத்த கட்டுரைகள்" : "Total Articles"}
                      </span>
                      <span className="font-medium text-foreground">{posts.totalDocs}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">
                        {locale === "ta" ? "பக்கங்கள்" : "Pages"}
                      </span>
                      <span className="font-medium text-foreground">{posts.totalPages}</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Latest Posts & Insights`,
    description:
      "Discover thought-provoking articles, industry insights, and expert perspectives on technology and innovation.",
  }
}
