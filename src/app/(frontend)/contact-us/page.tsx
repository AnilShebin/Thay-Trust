import { generateMetadata } from '../[slug]/page'

import Contact from '@/components/Contact/contact'
import ContactHero from '@/components/Contact/contact-hero'
import CTA from '@/components/Contact/cta'
import FAQ from '@/components/Contact/faq'
import LocationMap from '@/components/Contact/location-map'
import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <ContactHero />
      <Contact />
      <LocationMap />
      <FAQ />
      <CTA />
    </div>
  )
}

export default ContactUs

export { generateMetadata }
