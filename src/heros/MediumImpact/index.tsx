'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import type React from 'react'
import { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const MediumImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden py-48">
      {media && typeof media === 'object' && (
        <Media
          resource={media}
          className="absolute inset-0 h-full w-full object-cover"
          imgClassName="w-full h-full object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent dark:from-background"></div>

      <div className="container relative z-10 mx-auto flex h-full flex-col justify-center items-center text-center px-8">
        <div className="max-w-3xl space-y-8">
          {richText ? (
            <RichText
              className="
                text-white
                text-4xl font-semibold lg:text-6xl 
                [&_h1]:text-white [&_h1]:text-4xl [&_h1]:lg:text-6xl [&_h1]:font-semibold [&_h1]:mb-0 [&_h1]:max-w-2xl [&_h1]:mx-auto [&_h1]:text-balance
                [&_p]:text-white [&_p]:text-lg [&_p]:font-light [&_p]:mt-4 [&_p]:max-w-2xl [&_p]:mx-auto
                [&_p>span]:block
              "
              data={richText}
              enableGutter={false}
            />
          ) : (
            <>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Streamline,{' '}
                <span className="text-primary">optimize and enhance business processes</span> with
                the world's most scalable AI platform.
              </h1>
              <p className="text-xl text-white md:text-2xl">
                AI + data, online. At any scale.
              </p>
            </>
          )}

          {Array.isArray(links) && links.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4">
              {links.map(({ link }, i) => (
                <Button
                  key={i}
                  asChild
                  variant={i === 0 ? 'default' : 'outline'}
                  size="lg"
                  className="rounded-full group"
                >
                  <CMSLink
                    {...link}
                    className={`flex items-center gap-2 ${i !== 0 ? 'text-primary' : ''}`}
                  >
                    {i !== 0 && (
                      <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                    )}
                  </CMSLink>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function BackgroundDecoration() {
  return (
    <>
      <div className="absolute -right-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
      <div className="absolute -left-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
    </>
  )
}