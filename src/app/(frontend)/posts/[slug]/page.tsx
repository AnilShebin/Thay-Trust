import type { Metadata } from "next"
import Image from "next/image"

import { PayloadRedirects } from "@/components/PayloadRedirects"
import configPromise from "@payload-config"
import { getPayload } from "payload"
import { draftMode } from "next/headers"
import { cache } from "react"
import RichText from "@/components/RichText"

import { PostHero } from "@/heros/PostHero"
import { generateMeta } from "@/utilities/generateMeta"
import PageClient from "./page.client"
import { LivePreviewListener } from "@/components/LivePreviewListener"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// ----------------- Static Params -----------------
export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: "posts",
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: { slug: true },
  })

  return posts.docs.map(({ slug }) => ({ slug }))
}

// ----------------- Types -----------------
type Args = {
  params: Promise<{ slug?: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

// ----------------- Page Component -----------------
export default async function Post({ params, searchParams }: Args) {
  const resolvedParams = await params
  const resolvedSearchParams = await searchParams

  const slug = resolvedParams?.slug || ""
  const locale = (resolvedSearchParams?.locale as "en" | "ta") || "en"

  const { isEnabled: draft } = await draftMode()
  const url = `/posts/${slug}?locale=${locale}`

  const post = await queryPostBySlug({ slug, locale })
  if (!post) return <PayloadRedirects url={url} />

  return (
    <main className="bg-background text-foreground">
      <PageClient />
      <PayloadRedirects disableNotFound url={url} />
      {draft && <LivePreviewListener />}

      {/* Hero/Header */}
      <PostHero post={post} />

      {/* Main layout with content + sidebar */}
      <div className="relative z-20 mx-4 -mt-36 flex max-w-screen-xl justify-between rounded bg-background p-6 xl:mx-auto xl:-mt-32 xl:p-9">
        <Card className="w-full max-w-none xl:w-[828px]">
          <CardContent className="p-6">
            <article className="prose dark:prose-invert max-w-none">
              <RichText data={post.content} enableGutter={false} />
            </article>
          </CardContent>
        </Card>

        <Sidebar locale={locale} />
      </div>

      {/* Related Articles */}
      <RelatedArticles locale={locale} />
    </main>
  )
}

// ----------------- Metadata -----------------
export async function generateMetadata({ params, searchParams }: Args): Promise<Metadata> {
  const resolvedParams = await params
  const resolvedSearchParams = await searchParams

  const slug = resolvedParams?.slug || ""
  const locale = (resolvedSearchParams?.locale as "en" | "ta") || "en"
  const post = await queryPostBySlug({ slug, locale })
  return generateMeta({ doc: post })
}

// ----------------- Helper -----------------
const queryPostBySlug = cache(async ({ slug, locale = "en" }: { slug: string; locale?: "en" | "ta" }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: "posts",
    locale,
    fallbackLocale: "en",
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: { slug: { equals: slug } },
  })

  return result.docs?.[0] || null
})

// ---------------- Sidebar ----------------
function Sidebar({ locale }: { locale: "en" | "ta" }) {
  return (
    <aside className="hidden xl:block" aria-labelledby="sidebar-label">
      <div className="sticky top-24 xl:w-[336px]">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase">
              {locale === "ta" ? "குவாண்டம் லீப் AI தினசரி அறிக்கை" : "QuantumLeap AI Daily Brief"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              {locale === "ta"
                ? "சமீபத்திய AI முன்னேற்றங்களும் பார்வைகளும் பற்றிய தகவல்களைப் பெறுங்கள்."
                : "Stay updated with the latest AI breakthroughs and insights."}
            </p>
            <Button className="w-full">{locale === "ta" ? "சந்தா" : "Subscribe"}</Button>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-sm font-bold uppercase">
              {locale === "ta" ? "சமீபத்திய செய்திகள்" : "Recent News"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  title:
                    locale === "ta" ? "நியூரல் நெட்வொர்க்குகளில் புதிய முன்னேற்றம்" : "New Breakthrough in Neural Networks",
                  image: "https://placehold.co/900x600",
                  time: "15 minutes",
                },
                {
                  title: locale === "ta" ? "AI ஒழுக்க முன்முயற்சி தொடங்கப்பட்டது" : "AI Ethics Initiative Launched",
                  image: "https://placehold.co/900x600",
                  time: "20 minutes",
                },
                {
                  title: locale === "ta" ? "குவாண்டம் AI ஆராய்ச்சி புதுப்பிப்பு" : "Quantum AI Research Update",
                  image: "https://placehold.co/900x600",
                  time: "10 minutes",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={96}
                    height={96}
                    className="mr-4 rounded-lg object-cover"
                  />
                  <div>
                    <h5 className="mb-2 text-lg font-bold leading-tight">{item.title}</h5>
                    <Button variant="link" className="p-0 text-primary" asChild>
                      <a href={`/posts/sample-slug?locale=${locale}`}>
                        {locale === "ta" ? "படிக்க" : "Read in"} {item.time}
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </aside>
  )
}

// ---------------- Related Articles ----------------
function RelatedArticles({ locale }: { locale: "en" | "ta" }) {
  const articles = [
    {
      title: locale === "ta" ? "காலநிலை மாற்றத்தைக் குறைக்கும் AI இன் பங்கு" : "AI's Role in Climate Change Mitigation",
      image: "https://placehold.co/900x600",
      time: "18 minutes",
    },
    {
      title: locale === "ta" ? "சுகாதாரத்தில் AI இன் எதிர்காலம்" : "The Future of AI in Healthcare",
      image: "https://placehold.co/900x600",
      time: "25 minutes",
    },
    {
      title: locale === "ta" ? "நிதியில் AI மாற்றம்" : "How AI is Transforming Finance",
      image: "https://placehold.co/900x600",
      time: "14 minutes",
    },
    {
      title: locale === "ta" ? "பொறுப்பான AI அபிவிருத்தி" : "Responsible AI Development",
      image: "https://placehold.co/900x600",
      time: "17 minutes",
    },
  ]

  return (
    <section className="bg-background py-8 lg:py-24">
      <div className="mx-auto max-w-screen-xl px-4">
        <h2 className="mb-6 text-2xl font-bold text-foreground lg:mb-8">
          {locale === "ta" ? "தொடர்புடைய கட்டுரைகள்" : "Related articles"}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
          {articles.map((article, index) => (
            <Card key={index}>
              <CardContent className="p-0">
                <div className="flex flex-col xl:flex-row">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={192}
                    height={192}
                    className="h-48 w-full rounded-t-lg object-cover xl:w-48 xl:rounded-l-lg xl:rounded-tr-none"
                  />
                  <div className="p-4">
                    <h3 className="mb-2 text-xl font-bold">{article.title}</h3>
                    <p className="mb-4 text-muted-foreground">
                      {locale === "ta"
                        ? "AI தொழில்நுட்பத்தின் தாக்கத்தைப் பற்றி மேலும் அறிக."
                        : "Explore insights on how AI impacts industries and life."}
                    </p>
                    <Button variant="link" className="p-0" asChild>
                      <a href={`/posts/sample-slug?locale=${locale}`}>
                        {locale === "ta" ? "படிக்க" : "Read in"} {article.time}
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
