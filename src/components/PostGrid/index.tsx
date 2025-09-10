import Link from "next/link"
import PostList from "@/components/PostList"
import type { Post } from "@/payload-types"

interface PostGridProps {
  posts: Post[]
}

export default function PostGrid({ posts }: PostGridProps) {
  return (
    <>
      {posts && posts.length > 0 && (
        <div className="container mx-auto">
          {/* All posts in a 3-column grid with uniform size */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-center">
            {posts.slice(0, 14).map((post) => (
              <PostList
                key={post.id}
                post={post}
                aspect="square"        // Uniform aspect
                preloadImage={true}    // Preload all images
                fontSize="large"       // Uniform font size
              />
            ))}
          </div>

          {/* View all link if more than 14 posts */}
          {posts.length > 14 && (
            <div className="mt-10 flex justify-center">
              <Link
                href="/posts/page/2"
                className="relative inline-flex items-center gap-1 rounded-md border border-border bg-card px-3 py-2 pl-4 text-sm font-medium text-muted-foreground hover:bg-muted focus:z-20 disabled:pointer-events-none disabled:opacity-40"
              >
                <span>View all Posts</span>
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  )
}
