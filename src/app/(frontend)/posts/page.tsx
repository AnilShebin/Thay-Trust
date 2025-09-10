import type { Metadata } from 'next/types'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import PostGrid from '@/components/PostGrid'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
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
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background">
      <PageClient />

      {/* Add spacing below fixed navbar */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto max-w-7xl">
          {/* Header: All Posts + PageRange */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-2">All Posts</h2>
            <PageRange
              collection="posts"
              currentPage={posts.page}
              limit={12}
              totalDocs={posts.totalDocs}
              className="justify-center"
            />
          </div>

          {/* Posts Grid */}
          <PostGrid posts={posts.docs} />

          {/* Pagination */}
          {posts.totalPages > 1 && posts.page && (
            <div className="mt-12 flex justify-center">
              <Pagination page={posts.page} totalPages={posts.totalPages} />
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Latest Posts & Insights`,
    description:
      'Discover thought-provoking articles, industry insights, and expert perspectives on technology and innovation.',
  }
}
