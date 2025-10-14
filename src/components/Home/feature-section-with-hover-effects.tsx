'use client'

import type React from 'react'

import { cn } from '@/lib/utils'
import {
  IconBook,
  IconCloudStorm,
  IconEyeOff,
  IconHeart,
  IconMedicalCross,
  IconSoup,
  IconStar,
  IconWoman,
} from '@tabler/icons-react'
import { useLocale } from '@/contexts/LocaleContext'

export function FeaturesSectionWithHoverEffects() {
  const { locale } = useLocale()

  const translations = {
    en: {
      features: [
        {
          title: 'Annadhanam',
          description: 'Providing free meals to the needy with love and care.',
        },
        {
          title: 'Education',
          description:
            'Supporting education for underprivileged children to build a brighter future.',
        },
        {
          title: 'Helps to Blinds',
          description: 'Extending support and assistance to visually challenged individuals.',
        },
        {
          title: 'Medical Aid',
          description: 'Offering medical assistance and financial help for treatments.',
        },
        {
          title: 'Natural Calamities',
          description: 'Helping people affected by floods, cyclones, and other natural disasters.',
        },
        {
          title: 'Women Empowerment',
          description: 'Encouraging and supporting women through education and opportunities.',
        },
        {
          title: 'Orphan Support',
          description: 'Providing care, education, and support for orphans and destitute children.',
        },
        {
          title: 'Other Activities',
          description: 'Conducting social welfare programs for the betterment of society.',
        },
      ],
    },
    ta: {
      features: [
        {
          title: 'அன்னதானம்',
          description: 'அன்பும் அக்கறையும் கொண்டு தேவையுள்ளவர்களுக்கு இலவச உணவு வழங்குதல்.',
        },
        {
          title: 'கல்வி',
          description:
            'குழந்தைகளுக்கு கல்வியால் சிறந்த எதிர்காலம் உருவாக்குதல்.',
        },
        {
          title: 'பார்வையற்றோருக்கு உதவி',
          description: 'பார்வையற்றவர்களுக்கு உதவி மற்றும் ஆதரவு வழங்குதல்.',
        },
        {
          title: 'மருத்துவ உதவி',
          description: 'சிகிச்சைக்கான மருத்துவ மற்றும் நிதி உதவிகளை வழங்குதல்.',
        },
        {
          title: 'இயற்கை பேரிடர்கள்',
          description:
            'வெள்ளம், புயல் போன்ற பேரிடரில் பாதிக்கப்பட்டவர்களுக்கு உதவி.',
        },
        {
          title: 'பெண்களின் முன்னேற்றம்',
          description: 'கல்வி மற்றும் வாய்ப்புகள் மூலம் பெண்களை ஊக்குவித்து ஆதரித்தல்.',
        },
        {
          title: 'ஆதரவற்ற குழந்தைகளுக்கு உதவி',
          description:
            'ஆதரவற்ற குழந்தைகளுக்கு கல்வி மற்றும் பராமரிப்பு.',
        },
        {
          title: 'பிற செயல்பாடுகள்',
          description: 'சமூக நலத்திற்கான பல்வேறு திட்டங்களை மேற்கொள்வது.',
        },
      ],
    },
  }

  const features = translations[locale].features.map((feature, index) => ({
    ...feature,
    icon: [
      <IconSoup key="annadhanam" />, // Annadhanam (food donation)
      <IconBook key="education" />, // Education
      <IconEyeOff key="blind" />, // Helps to Blinds
      <IconMedicalCross key="medical" />, // Medical Aid
      <IconCloudStorm key="calamities" />, // Natural Calamities
      <IconWoman key="women" />, // Women Empowerment
      <IconStar key="support" />, // Social Support / New Added Title
      <IconHeart key="others" />, // Other Activities
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
        'flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800',
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
        index < 4 && 'lg:border-b dark:border-neutral-800',
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
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  )
}
