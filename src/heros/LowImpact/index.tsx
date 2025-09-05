import type React from "react"

import type { Page } from "@/payload-types"

import RichText from "@/components/RichText"

type LowImpactHeroType =
  | {
      children?: React.ReactNode
      richText?: never
    }
  | (Omit<Page["hero"], "richText"> & {
      children?: never
      richText?: Page["hero"]["richText"]
    })

export const LowImpactHero: React.FC<LowImpactHeroType> = ({ children, richText }) => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg sm:prose-xl lg:prose-2xl max-w-none">
            {children ||
              (richText && <RichText data={richText} enableGutter={false} className="text-gray-800 leading-relaxed" />)}
          </div>
        </div>
      </div>
    </div>
  )
}
