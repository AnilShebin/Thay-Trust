"use client"

import Link from "next/link"
import { useLocale } from "@/contexts/LocaleContext"

const translations = {
  en: {
    ourMission: "Our Mission",
    title: "Empowering communities through education, healthcare & sustainable development",
    description:
      "ThayTrust is dedicated to creating lasting positive change in underserved communities across India. We believe that every individual deserves access to quality education, healthcare, and opportunities for growth.",
    paragraph1:
      "Our comprehensive approach addresses the root causes of inequality through targeted interventions. From mobile health clinics reaching remote villages to scholarship programs supporting bright minds, we work tirelessly to break the cycle of poverty and create pathways to prosperity.",
    paragraph2:
      "We partner with local communities, government agencies, and like-minded organizations to maximize our impact. Every program is designed with sustainability in mind, ensuring that the communities we serve can continue to thrive long after our direct involvement.",
    testimonial:
      "ThayTrust has been a beacon of hope for our community. Their educational programs helped my children access quality learning, and their healthcare initiatives ensured our family stayed healthy during difficult times.",
    testimonialAuthor: "Priya Sharma",
    testimonialRole: "Community Member & Beneficiary",
    stats: {
      years: "Years of Service",
      families: "Families Supported",
      programs: "Active Programs",
      villages: "Villages Reached",
    },
    learnMore: "Learn more about our impact",
  },
  ta: {
    ourMission: "எங்கள் நோக்கம்",
    title: "கல்வி, சுகாதாரம் மற்றும் நிலையான வளர்ச்சியின் மூலம் சமுதாயங்களை வலுப்படுத்துதல்",
    description:
      "தாய்ட்ரஸ்ட் இந்தியா முழுவதும் உள்ள பின்தங்கிய சமுதாயங்களில் நீடித்த நேர்மறையான மாற்றத்தை உருவாக்க அர்பணிக்கப்பட்டுள்ளது. ஒவ்வொரு தனிநபரும் தரமான கல்வி, சுகாதாரம் மற்றும் வளர்ச்சிக்கான வாய்ப்புகளுக்கு தகுதியானவர் என்று நாங்கள் நம்புகிறோம்.",
    paragraph1:
      "எங்கள் விரிவான அணுகுமுறை இலக்கு வைக்கப்பட்ட தலையீடுகள் மூலம் சமத்துவமின்மையின் மூல காரணங்களை நிவர்த்தி செய்கிறது. தொலைதூர கிராமங்களை அடையும் நடமாடும் சுகாதார மருத்துவமனைகள் முதல் பிரகாசமான மனங்களை ஆதரிக்கும் உதவித்தொகை திட்டங்கள் வரை, வறுமையின் சுழற்சியை உடைத்து செழிப்புக்கான பாதைகளை உருவாக்க நாங்கள் அயராது உழைக்கிறோம்.",
    paragraph2:
      "எங்கள் தாக்கத்தை அதிகரிக்க உள்ளூர் சமுதாயங்கள், அரசு நிறுவனங்கள் மற்றும் ஒத்த எண்ணம் கொண்ட அமைப்புகளுடன் நாங்கள் கூட்டாளியாக செயல்படுகிறோம். ஒவ்வொரு திட்டமும் நிலைத்தன்மையை மனதில் கொண்டு வடிவமைக்கப்பட்டுள்ளது, நாங்கள் சேவை செய்யும் சமுதாயங்கள் எங்கள் நேரடி ஈடுபாட்டிற்குப் பிறகும் தொடர்ந்து செழிக்க முடியும் என்பதை உறுதி செய்கிறது.",
    testimonial:
      "தாய்ட்ரஸ்ட் எங்கள் சமுதாயத்திற்கு நம்பிக்கையின் கலங்கரை விளக்கமாக இருந்துள்ளது. அவர்களின் கல்வித் திட்டங்கள் என் குழந்தைகளுக்கு தரமான கற்றலை அணுக உதவியது, மேலும் அவர்களின் சுகாதார முன்முயற்சிகள் கடினமான காலங்களில் எங்கள் குடும்பம் ஆரோக்கியமாக இருப்பதை உறுதி செய்தது.",
    testimonialAuthor: "பிரியா சர்மா",
    testimonialRole: "சமுதாய உறுப்பினர் மற்றும் பயனாளி",
    stats: {
      years: "சேவை ஆண்டுகள்",
      families: "ஆதரவளித்த குடும்பங்கள்",
      programs: "செயலில் உள்ள திட்டங்கள்",
      villages: "அடைந்த கிராமங்கள்",
    },
    learnMore: "எங்கள் தாக்கத்தைப் பற்றி மேலும் அறியுங்கள்",
  },
}

export default function Content() {
  const { locale } = useLocale()
  const t = translations[locale]

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl grid items-center gap-12 lg:grid-cols-2">
        {/* Testimonial Card */}
        <div className="relative h-full overflow-hidden">
          <div className="absolute inset-0 rounded-xl bg-accent" />
          <div className="relative p-8 md:p-12">
            <div className="mb-8 flex items-center gap-3 text-primary">
              <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="text-xl font-semibold">ThayTrust</span>
            </div>
            <blockquote className="mb-6 text-xl font-medium leading-relaxed md:text-2xl">{t.testimonial}</blockquote>
            <footer>
              <cite className="not-italic">
                <span className="font-semibold">{t.testimonialAuthor}</span>
                <span className="ml-2 text-muted-foreground">{t.testimonialRole}</span>
              </cite>
            </footer>
          </div>
        </div>

        {/* Company Info */}
        <div className="space-y-8">
          <div>
            <div className="mb-3 text-sm font-medium text-primary uppercase tracking-wide">{t.ourMission}</div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">{t.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.description}</p>
          </div>

          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">{t.paragraph1}</p>
            <p className="text-muted-foreground leading-relaxed">{t.paragraph2}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4">
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground font-medium">{t.stats.years}</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-primary">25K+</div>
              <div className="text-sm text-muted-foreground font-medium">{t.stats.families}</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground font-medium">{t.stats.programs}</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground font-medium">{t.stats.villages}</div>
            </div>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            {t.learnMore}
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
