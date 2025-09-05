import type React from "react"

import type { Page } from "@/payload-types"

import { CMSLink } from "@/components/Link"
import { Media } from "@/components/Media"
import RichText from "@/components/RichText"

export const MediumImpactHero: React.FC<Page["hero"]> = ({ links, media, richText }) => {
  return (
    <div className="bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          {richText && (
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <RichText
                className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-800"
                data={richText}
                enableGutter={false}
              />
            </div>
          )}

          {Array.isArray(links) && links.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center">
              {links.map(({ link }, i) => {
                return (
                  <div key={i} className="w-full sm:w-auto">
                    <CMSLink
                      {...link}
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 w-full sm:w-auto"
                    />
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
        {media && typeof media === "object" && (
          <div className="max-w-7xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Media className="w-full" imgClassName="w-full h-auto object-cover" priority resource={media} />
            </div>
            {media?.caption && (
              <div className="mt-6 text-center">
                <RichText
                  data={media.caption}
                  enableGutter={false}
                  className="text-sm sm:text-base text-gray-600 italic"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
