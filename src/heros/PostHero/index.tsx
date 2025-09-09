'use client'

import React from 'react'
import { formatDateTime } from 'src/utilities/formatDateTime'

import type { Post } from '@/payload-types'
import { Media } from '@/components/Media'
import { formatAuthors } from '@/utilities/formatAuthors'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const PostHero: React.FC<{ post: Post }> = ({ post }) => {
  const { categories, heroImage, populatedAuthors, publishedAt, title } = post

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

  return (
    <header className="relative h-[540px] w-full bg-background xl:h-[620px]">
      {/* Background Image */}
      {heroImage && typeof heroImage !== 'string' ? (
        <Media
          resource={heroImage}
          fill
          priority
          imgClassName="object-cover"
          className="absolute inset-0"
        />
      ) : (
        <div className="absolute inset-0 bg-muted" />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/100 via-black/30 to-transparent dark:from-black/100 dark:via-black/30 dark:to-transparent pointer-events-none" />

      {/* Content */}
      <div className="absolute left-1/2 top-1/2 mx-auto w-full max-w-screen-xl -translate-x-1/2 -translate-y-1/2 px-4 xl:px-0">
        {/* Categories */}
        {categories && categories.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {categories.map((category, index) => {
              if (typeof category === 'object' && category !== null) {
                const { title: categoryTitle } = category
                const titleToUse = categoryTitle || 'Untitled category'

                return (
                  <Badge
                    key={index}
                    variant="outline"
                    className="group flex w-fit items-center gap-1.5 border-white/40 bg-transparent px-2.5 py-1.5 text-xs font-medium text-white hover:bg-white/10"
                  >
                    <span>{titleToUse}</span>
                  </Badge>
                )
              }
              return null
            })}
          </div>
        )}

        {/* Title */}
        <h1 className="mb-4 max-w-4xl text-2xl font-extrabold leading-none text-white sm:text-3xl lg:text-5xl">
          {title}
        </h1>

        {/* Metadata */}
        <div className="flex flex-col gap-2 text-gray-300 sm:flex-row sm:items-center sm:gap-6">
          {hasAuthors && (
            <p>
              By{' '}
              <Button variant="link" className="p-0 font-semibold text-white">
                {formatAuthors(populatedAuthors)}
              </Button>
            </p>
          )}
          {publishedAt && (
            <time dateTime={publishedAt} className="text-gray-300">
              {formatDateTime(publishedAt)}
            </time>
          )}
        </div>
      </div>
    </header>
  )
}
