'use client'

import { useLocale } from '@/contexts/LocaleContext'

const translations = {
  en: {
    ourMission: 'Our Mission',
    title: 'Empowering communities through education, healthcare & sustainable development',
    description:
      'ThayTrust creates lasting positive change in underserved communities across India, offering education, healthcare, and opportunities for growth.',
    paragraph1:
      'We tackle inequality through mobile health clinics, scholarships, and community programs, breaking the cycle of poverty and creating pathways to prosperity.',
    paragraph2:
      'By partnering with local communities, government agencies, and like-minded organizations, ThayTrust ensures sustainable impact long after our direct involvement.',
    testimonial:
      'ThayTrust provides free meals, supports children’s education, offers medical aid, empowers women, and assists visually challenged individuals. During natural calamities, we stand by affected communities with care and support.',
    testimonialAuthor: 'Sirnivasan P',
    testimonialRole: 'President, ThayTrust',
    stats: {
      years: 'Years of Service',
      families: 'Families Supported',
      programs: 'Active Programs',
      villages: 'Villages Reached',
    },
  },
  ta: {
    ourMission: 'எங்கள் நோக்கம்',
    title: 'கல்வி, சுகாதாரம் மற்றும் நிலையான வளர்ச்சியின் மூலம் சமுதாயங்களை வலுப்படுத்துதல்',
    description:
      'தாய்ட்ரஸ்ட் இந்தியாவின் பின்தங்கிய சமுதாயங்களில் நிலைத்த நேர்மறை மாற்றத்தை உருவாக்கி, கல்வி, சுகாதாரம் மற்றும் வளர்ச்சிக்கான வாய்ப்புகளை வழங்குகிறது.',
    paragraph1:
      'நடமாடும் மருத்துவமனைகள், உதவித்தொகை திட்டங்கள் மற்றும் சமூக முயற்சிகளின் மூலம் வறுமைச் சுழற்சியை உடைத்து செழிப்புக்கு வழிவகுக்கிறது.',
    paragraph2:
      'உள்ளூர் சமுதாயங்கள், அரசு மற்றும் ஒத்த எண்ணமுள்ள அமைப்புகளுடன் இணைந்து, தாய்ட்ரஸ்ட் நீடித்த தாக்கத்தை உருவாக்குகிறது.',
    testimonial:
      'தாய்ட்ரஸ்ட் இலவச உணவு வழங்கல், குழந்தைகளுக்குக் கல்வி ஆதரவு, மருத்துவ உதவி, பெண்கள் முன்னேற்றம் மற்றும் பார்வையற்றோருக்கு உதவி செய்கிறது. இயற்கை பேரிடர்களில் பாதிக்கப்பட்டவர்களுக்கு நிவாரணம் மற்றும் ஆதரவு வழங்குகிறது.',
    testimonialAuthor: 'Sirnivasan P',
    testimonialRole: 'President, ThayTrust',
    stats: {
      years: 'சேவை ஆண்டுகள்',
      families: 'ஆதரவளித்த குடும்பங்கள்',
      programs: 'செயலில் உள்ள திட்டங்கள்',
      villages: 'அடைந்த கிராமங்கள்',
    },
  },
}

export default function Content() {
  const { locale } = useLocale()
  const t = translations[locale]

  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12">
      <div className="mx-auto max-w-7xl grid items-start gap-8 lg:grid-cols-2">
        {/* Testimonial Card */}
        <div className="relative h-full overflow-hidden rounded-xl bg-accent p-6 md:p-8">
          <div className="mb-6 flex items-center gap-3 text-primary">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="text-xl font-semibold">ThayTrust</span>
          </div>
          <blockquote className="mb-4 text-lg md:text-xl font-medium leading-relaxed">
            {t.testimonial}
          </blockquote>
          <footer>
            <cite className="not-italic">
              <span className="font-semibold">{t.testimonialAuthor}</span>
              <span className="ml-2 text-muted-foreground">{t.testimonialRole}</span>
            </cite>
          </footer>
        </div>

        {/* Company Info */}
        <div className="space-y-6">
          <div>
            <div className="mb-2 text-sm font-medium text-primary uppercase tracking-wide">
              {t.ourMission}
            </div>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-balance md:text-3xl lg:text-4xl">
              {t.title}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">{t.description}</p>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">{t.paragraph1}</p>
            <p className="text-muted-foreground leading-relaxed">{t.paragraph2}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 border-t border-border pt-6 md:grid-cols-4">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground font-medium">{t.stats.years}</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-primary">25K+</div>
              <div className="text-sm text-muted-foreground font-medium">{t.stats.families}</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground font-medium">{t.stats.programs}</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground font-medium">{t.stats.villages}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
