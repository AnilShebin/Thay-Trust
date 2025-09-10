import Image from "next/image"
import Link from "next/link"
import { cn } from "@/utilities/ui"
import { parseISO, format } from "date-fns"
import { PhotoIcon } from "@heroicons/react/24/outline"
import type { Post } from "@/payload-types"

interface PostListProps {
  post: Post
  aspect?: "landscape" | "square" | "custom"
  minimal?: boolean
  pathPrefix?: string
  preloadImage?: boolean
  fontSize?: "large" | "normal"
  fontWeight?: "normal" | "semibold"
}

export default function PostList({
  post,
  aspect = "square",
  minimal = false,
  pathPrefix = "",
  preloadImage = false,
  fontSize = "normal",
  fontWeight = "semibold",
}: PostListProps) {
  const imageProps = post?.heroImage && typeof post.heroImage === "object" ? post.heroImage : null

  const authorImageProps =
    post?.populatedAuthors?.[0] && typeof post.populatedAuthors[0] === "object"
      ? null // Author image is not available in the current type structure
      : null

  // Extract excerpt from rich text content
  const getExcerpt = (content: any): string => {
    if (post.meta?.description) return post.meta.description
    if (typeof content === "string") return content
    if (content?.root?.children) {
      const textContent = content.root.children
        .map((child: any) => {
          if (child.children) {
            return child.children.map((c: any) => c.text || "").join(" ")
          }
          return child.text || ""
        })
        .join(" ")
      return textContent.slice(0, 150) + "..."
    }
    return ""
  }

  return (
    <div className={cn("group cursor-pointer max-w-sm", minimal && "grid gap-6 md:grid-cols-2")}>
      <div className={cn("overflow-hidden rounded-lg bg-muted transition-all hover:scale-105", "mb-4")}>
        <Link
          className={cn(
            "relative block",
            aspect === "landscape" ? "aspect-[16/10]" : aspect === "custom" ? "aspect-[4/3]" : "aspect-[16/10]",
          )}
          href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${post.slug}`}
        >
          {imageProps?.url ? (
            <Image
              src={imageProps.url || "/placeholder.svg"}
              alt={imageProps.alt || post.title || "Thumbnail"}
              priority={preloadImage}
              className="object-cover transition-all"
              fill
              sizes="(max-width: 768px) 20vw, 25vw"
            />
          ) : (
            <span className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 text-muted-foreground">
              <PhotoIcon />
            </span>
          )}
        </Link>
      </div>

      <div className={cn(minimal && "flex items-center")}>
        <div>
          {post.categories && post.categories.length > 0 && (
            <div className={cn("flex gap-1", !minimal && "mb-2")}>
              {post.categories.slice(0, 2).map((category, index) => (
                <span
                  key={index}
                  className="py-0.5 text-xs font-medium text-primary uppercase tracking-wide"
                >
                  {typeof category === "object" ? category.title : category}
                </span>
              ))}
            </div>
          )}

          <h2
            className={cn(
              fontSize === "large" ? "text-lg" : minimal ? "text-xl" : "text-sm",
              fontWeight === "normal"
                ? "line-clamp-2 font-medium tracking-normal text-foreground"
                : "font-semibold leading-tight tracking-tight",
              "mt-2 text-foreground",
            )}
          >
            <Link href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${post.slug}`}>
              <span
                className="bg-gradient-to-r from-accent to-secondary bg-[length:0px_10px] bg-left-bottom
                bg-no-repeat
                transition-[background-size]
                duration-500
                hover:bg-[length:100%_3px]
                group-hover:bg-[length:100%_10px]"
              >
                {post.title}
              </span>
            </Link>
          </h2>

          <div className="hidden">
            <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
              <Link href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${post.slug}`}>{getExcerpt(post.content)}</Link>
            </p>
          </div>

          <div className="mt-3 flex items-center space-x-2 text-muted-foreground">
            {post.populatedAuthors?.[0] && (
              <div className="flex items-center gap-2">
                <div className="relative h-5 w-5 flex-shrink-0">
                  <div className="w-5 h-5 bg-muted rounded-full flex items-center justify-center border border-border">
                    <span className="text-xs font-medium text-muted-foreground">
                      {post.populatedAuthors[0].name?.charAt(0) || "A"}
                    </span>
                  </div>
                </div>
                <span className="truncate text-xs">{post.populatedAuthors[0].name}</span>
              </div>
            )}
            {post.populatedAuthors?.[0] && <span className="text-xs text-border">&bull;</span>}
            <time className="truncate text-xs" dateTime={post.publishedAt || post.createdAt}>
              {format(parseISO(post.publishedAt || post.createdAt), "MMMM dd, yyyy")}
            </time>
          </div>
        </div>
      </div>
    </div>
  )
}
