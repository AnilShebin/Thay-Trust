'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import type React from 'react'
import { useEffect } from 'react'
import { ArrowRight, WandSparkles } from 'lucide-react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button' // ✅ import shadcn button

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  })

  return (
    <section className="bg-gradient-to-b from-primary/10 to-background pt-28 sm:pt-30 md:pt-32 lg:pt-30 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      <div className="container mx-auto max-w-7xl overflow-hidden">
        <div className="mb-20 flex flex-col items-center gap-2 text-center">
          <Badge
            variant="outline"
            className="group mb-3 flex w-fit items-center gap-1.5 border-primary/20 bg-primary/10 px-2.5 py-1.5 text-xs font-medium text-primary hover:bg-primary/20"
          >
            <WandSparkles className="size-3" />
            <span>Your Kindness, Their Hope</span>
          </Badge>

          {richText ? (
            <RichText
              className="
                text-primary dark:text-foreground 
                text-4xl font-semibold lg:text-6xl 
                [&_h1]:text-4xl [&_h1]:lg:text-6xl [&_h1]:font-semibold [&_h1]:text-foreground [&_h1]:mb-0 [&_h1]:max-w-2xl [&_h1]:mx-auto [&_h1]:text-balance
                [&_p]:text-lg [&_p]:text-muted-foreground [&_p]:font-light [&_p]:mt-4 [&_p]:max-w-2xl [&_p]:mx-auto
                [&_p>span]:block
              "
              data={richText}
              enableGutter={false}
            />
          ) : (
            <h1 className="text-primary dark:text-foreground text-4xl font-semibold lg:text-6xl">
              <span className="text-foreground">Together We </span>
              <span className="text-primary">
                Can <br /> Uplift Lives
              </span>
            </h1>
          )}

          {Array.isArray(links) && links.length > 0 && (
            <div className="flex gap-4 mt-4">
              {links.map(({ link }, i) => (
                <Button
                  key={i}
                  asChild
                  variant={i === 0 ? 'default' : 'outline'}
                  size="lg"
                  className={i !== 0 ? 'text-primary' : ''}
                >
                  <CMSLink
                    {...link}
                    className={i !== 0 ? 'flex items-center gap-2 group' : undefined}
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

        <div className="relative mx-auto max-w-screen-lg">
          {media && typeof media === 'object' && (
            <div className="relative max-h-[500px] w-full rounded-xl overflow-hidden">
              <Media resource={media} className="aspect-video w-full object-cover" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent dark:from-background"></div>
          <BackgroundDecoration />
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
