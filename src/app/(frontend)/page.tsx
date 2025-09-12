import { generateMetadata } from './[slug]/page'

import Content from '@/components/Home/content'
import { FeaturesSectionWithHoverEffects } from '@/components/Home/feature-section-with-hover-effects'
import Hero from '@/components/Home/hero'
import Stats from '@/components/Home/stats'
import MissionSection from '@/components/Home/mission-section'
import Featured from '@/components/Home/featured'
import LatestNews from '@/components/Home/latest-news'

type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const Home = async ({ searchParams }: PageProps) => {
  const params = await searchParams
  const locale = (params.locale as 'en' | 'ta') || 'en'

  return (
    <>
      <Hero />
      <MissionSection />
      <Featured locale={locale} />
      <Content />
      <LatestNews locale={locale} />
      <FeaturesSectionWithHoverEffects />
      <Stats />
    </>
  )
}

export default Home

export { generateMetadata }
