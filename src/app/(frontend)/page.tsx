import { generateMetadata } from './[slug]/page'

import Content from '@/components/Home/content'
import { FeaturesSectionWithHoverEffects } from '@/components/Home/feature-section-with-hover-effects'
import Featured from '@/components/Home/featured'
import Hero from '@/components/Home/hero'
import LatestNews from '@/components/Home/latest-news'
import Stats from '@/components/Home/stats'
import MissionSection from '@/components/Home/mission-section'

const Home = () => {
  return (
    <div>
      <Hero />
      <MissionSection />
      <Content />
      <Featured />
      <LatestNews />
      <FeaturesSectionWithHoverEffects />
      <Stats />
    </div>
  )
}

export default Home

export { generateMetadata }
