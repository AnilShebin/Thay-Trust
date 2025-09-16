"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"
import { useLocale } from "@/contexts/LocaleContext"

const translations = {
  en: {
    smallTitle: "Ready to get started?",
    heading: "Start your free trial today.",
    description:
      "Start with a 14-day free trial. No credit card required. No setup fees. Cancel anytime.",
    getStarted: "Get Started",
    watchDemo: "Watch demo",
  },
  ta: {
    smallTitle: "தொடங்க தயாரா?",
    heading: "இன்று உங்கள் இலவச முயற்சியை தொடங்குங்கள்.",
    description:
      "14 நாட்கள் இலவச முயற்சியுடன் தொடங்குங்கள். கிரெடிட் கார்டு தேவையில்லை. அமைப்பு கட்டணங்கள் இல்லை. எப்போது வேண்டுமானாலும் ரத்து செய்யலாம்.",
    getStarted: "தொடங்குங்கள்",
    watchDemo: "டெமோ பார்க்க",
  },
}

export default function CallToAction() {
  const { locale } = useLocale()
  const t = translations[locale]

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto">
        <div className="mx-auto flex flex-col justify-between gap-20 rounded-lg border bg-[radial-gradient(ellipse_30%_60%_at_100%_50%,hsla(var(--primary)_/_20%),#ffffff00)] p-8 md:p-12 lg:flex-row lg:bg-[radial-gradient(ellipse_50%_50%_at_50%_120%,hsla(var(--primary)_/_20%),#ffffff00)]">
          {/* Left side */}
          <div className="lg:texlf mx-auto max-w-md text-center lg:mx-0 lg:pb-20 lg:text-left">
            <p className="mb-6 font-medium">{t.smallTitle}</p>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">{t.heading}</h2>
            <p className="text-lg text-muted-foreground">{t.description}</p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button>{t.getStarted}</Button>
              <Button variant="outline">
                <Play className="mr-1 h-full w-4" />
                {t.watchDemo}
              </Button>
            </div>
          </div>

          {/* Right side */}
          <div className="w-full">
            <Image
              src="/programs-cta.png"
              alt="Programs Call to Action"
              className="size-full rounded-lg object-cover"
              height={400}
              width={800}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
