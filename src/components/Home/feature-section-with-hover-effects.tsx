"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react"
import { useLocale } from "@/contexts/LocaleContext"

export function FeaturesSectionWithHoverEffects() {
  const { locale } = useLocale()

  const translations = {
    en: {
      features: [
        {
          title: "Built for developers",
          description: "Built for engineers, developers, dreamers, thinkers and doers.",
        },
        {
          title: "Ease of use",
          description: "It's as easy as using an Apple, and as expensive as buying one.",
        },
        {
          title: "Pricing like no other",
          description: "Our prices are best in the market. No cap, no lock, no credit card required.",
        },
        {
          title: "100% Uptime guarantee",
          description: "We just cannot be taken down by anyone.",
        },
        {
          title: "Multi-tenant Architecture",
          description: "You can simply share passwords instead of buying new seats",
        },
        {
          title: "24/7 Customer Support",
          description: "We are available a 100% of the time. Atleast our AI Agents are.",
        },
        {
          title: "Money back guarantee",
          description: "If you donot like EveryAI, we will convince you to like us.",
        },
        {
          title: "And everything else",
          description: "I just ran out of copy ideas. Accept my sincere apologies",
        },
      ],
    },
    ta: {
      features: [
        {
          title: "டெவலப்பர்களுக்காக உருவாக்கப்பட்டது",
          description: "பொறியாளர்கள், டெவலப்பர்கள், கனவு காண்பவர்கள், சிந்தனையாளர்கள் மற்றும் செயல்படுபவர்களுக்காக உருவாக்கப்பட்டது.",
        },
        {
          title: "பயன்படுத்த எளிது",
          description: "ஆப்பிளைப் பயன்படுத்துவது போல் எளிது, ஆனால் அதை வாங்குவது போல் விலை உயர்ந்தது.",
        },
        {
          title: "தனித்துவமான விலை நிர்ணயம்",
          description: "எங்கள் விலைகள் சந்தையில் சிறந்தவை. வரம்பு இல்லை, பூட்டு இல்லை, கிரெடிட் கார்டு தேவையில்லை.",
        },
        {
          title: "100% அப்டைம் உத்தரவாதம்",
          description: "எங்களை யாராலும் கீழே இறக்க முடியாது.",
        },
        {
          title: "மல்டி-டெனன்ட் கட்டமைப்பு",
          description: "புதிய இடங்களை வாங்குவதற்கு பதிலாக நீங்கள் கடவுச்சொற்களை பகிர்ந்து கொள்ளலாம்",
        },
        {
          title: "24/7 வாடிக்கையாளர் ஆதரவு",
          description: "நாங்கள் 100% நேரம் கிடைக்கிறோம். குறைந்தபட்சம் எங்கள் AI ஏஜென்ட்கள் கிடைக்கின்றன.",
        },
        {
          title: "பணம் திரும்ப உத்தரவாதம்",
          description: "நீங்கள் EveryAI ஐ விரும்பவில்லை என்றால், உங்களை விரும்பும்படி நாங்கள் சமாதானப்படுத்துவோம்.",
        },
        {
          title: "மற்றும் எல்லாம்",
          description: "எனக்கு நகல் யோசனைகள் தீர்ந்துவிட்டன. என் மன்னிப்பை ஏற்றுக்கொள்ளுங்கள்",
        },
      ],
    },
  }

  const features = translations[locale].features.map((feature, index) => ({
    ...feature,
    icon: [
      <IconTerminal2 key="terminal" />,
      <IconEaseInOut key="ease" />,
      <IconCurrencyDollar key="currency" />,
      <IconCloud key="cloud" />,
      <IconRouteAltLeft key="route" />,
      <IconHelp key="help" />,
      <IconAdjustmentsBolt key="adjustment" />,
      <IconHeart key="heart" />,
    ][index],
  }))

  return (
    <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800",
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-secondary dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-secondary dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-primary dark:text-neutral-400">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-accent transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-primary dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">{description}</p>
    </div>
  )
}
