import { generateMetadata } from '../[slug]/page'

import Impact from '@/components/About/impact'
import MentorsSection from '@/components/About/team'
import TestimonialShowcase from '@/components/About/testimonial-showcase'
import Timeline from '@/components/About/timeline'
import React from 'react'

const About = () => {
  return (
    <div>
      <Impact />
      <Timeline />
      <TestimonialShowcase />
      <MentorsSection />
    </div>
  )
}

export default About

export { generateMetadata }
