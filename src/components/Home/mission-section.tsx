"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLocale } from "@/contexts/LocaleContext"

const translations = {
  en: {
    title1: "Empowering Communities Through Education & Healthcare",
    description1:
      "ThayTrust is dedicated to transforming lives through quality education, accessible healthcare, and sustainable development programs. We believe in creating opportunities that foster growth, dignity, and self-reliance in underserved communities.",
    title2: "Driving Change Through Service",
    description2:
      "ThayTrust operates comprehensive programs focused on education, healthcare, and community development. Our initiatives are designed to address the root causes of poverty and create lasting positive change in rural and urban communities.",
    learnMore: "Learn More",
  },
  ta: {
    title1: "கல்வி மற்றும் சுகாதாரத்தின் மூலம் சமுதாயங்களை வலுப்படுத்துதல்",
    description1:
      "தாய்ட்ரஸ்ட் தரமான கல்வி, அணுகக்கூடிய சுகாதாரம் மற்றும் நிலையான வளர்ச்சித் திட்டங்கள் மூலம் வாழ்க்கையை மாற்றுவதற்கு அர்பணிக்கப்பட்டுள்ளது. பின்தங்கிய சமுதாயங்களில் வளர்ச்சி, கண்ணியம் மற்றும் சுய நம்பிக்கையை வளர்க்கும் வாய்ப்புகளை உருவாக்குவதில் நாங்கள் நம்புகிறோம்.",
    title2: "சேவையின் மூலம் மாற்றத்தை உந்துதல்",
    description2:
      "தாய்ட்ரஸ்ட் கல்வி, சுகாதாரம் மற்றும் சமுதாய வளர்ச்சியில் கவனம் செலுத்தும் விரிவான திட்டங்களை நடத்துகிறது. எங்கள் முன்முயற்சிகள் வறுமையின் மூல காரணங்களை நிவர்த்தி செய்து கிராமப்புற மற்றும் நகர்ப்புற சமுதாயங்களில் நீடித்த நேர்மறையான மாற்றத்தை உருவாக்க வடிவமைக்கப்பட்டுள்ளன.",
    learnMore: "மேலும் அறிய",
  },
}

export default function MissionSection() {
  const { locale } = useLocale()
  const t = translations[locale]

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-24">
      <div className="mx-auto max-w-7xl space-y-12 rounded-xl bg-muted p-6 sm:p-8 md:p-12 lg:p-16 md:space-y-16">
        {/* First Section */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="relative h-[240px] w-full overflow-hidden rounded-xl sm:h-[280px] md:h-[400px] lg:h-[450px]">
            <Image
              src="https://images.unsplash.com/photo-1641538225752-2d996ea204d4"
              alt="People joining hands in trust"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl">
              {t.title1}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed sm:text-lg">{t.description1}</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="group dark:text-foreground">
                <Link href="/education" className="flex items-center">
                  {t.learnMore}
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Second Section (Inverted on large screens) */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="order-1 flex flex-col justify-center space-y-4 sm:space-y-6 lg:order-none">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl">
              {t.title2}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed sm:text-lg">{t.description2}</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="group dark:text-foreground">
                <Link href="/programs" className="flex items-center">
                  {t.learnMore}
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[240px] w-full overflow-hidden rounded-xl sm:h-[280px] md:h-[400px] lg:h-[450px]">
            <Image
              src="https://images.unsplash.com/photo-1646579886135-068c73800308"
              alt="Volunteer offering help"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
