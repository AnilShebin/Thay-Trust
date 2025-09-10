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
        <div className="container">
          {/* Reduced gap between cards to make layout more compact */}
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {posts.slice(0, 2).map((post) => (
              <PostList key={post.id} post={post} aspect="landscape" preloadImage={true} fontSize="large" />
            ))}
          </div>

          {/* Reduced gaps and margins for tighter layout */}
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
            {posts.slice(2, 14).map((post) => (
              <PostList key={post.id} post={post} aspect="square" />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/posts/page/2"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
            >
              <span>View all Posts</span>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
