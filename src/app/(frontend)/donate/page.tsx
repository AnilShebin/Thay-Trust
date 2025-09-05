import { generateMetadata } from '../[slug]/page'

import DonateForm from '@/components/Donate/donate-form'
import DonateHero from '@/components/Donate/donate-hero'
import ImpactSection from '@/components/Donate/impact-section'
import WhyDonateSection from '@/components/Donate/why-donate-section'
import React from 'react'

const Donate = () => {
  return (
    <div>
      <DonateHero />
      <ImpactSection />
      <WhyDonateSection />
      <DonateForm />
    </div>
  )
}

export default Donate

export { generateMetadata }
