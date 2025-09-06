'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import type React from 'react'
import { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div
      className="relative -mt-[5.4rem] flex items-center justify-center text-white min-h-screen"
      data-theme="dark"
    >
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {richText && (
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <RichText
                className="text-lg sm:text-xl lg:text-2xl leading-relaxed [&_h1]:text-4xl [&_h1]:sm:text-5xl [&_h1]:lg:text-6xl [&_h1]:font-bold"
                data={richText}
                enableGutter={false}
              />
            </div>
          )}

          {Array.isArray(links) && links.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              {links.map(({ link }, i) => {
                return (
                  <div key={i} className="w-full sm:w-auto">
                    <CMSLink
                      {...link}
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 w-full sm:w-auto"
                    />
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="object-cover object-center" priority resource={media} />
        )}
      </div>
    </div>
  )
}
