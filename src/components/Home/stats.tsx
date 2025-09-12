"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"
import { useLocale } from "@/contexts/LocaleContext"

const translations = {
  en: {
    title: "Let's take your digital experience to",
    titleHighlight: "the next level.",
    description:
      "With over twenty years of experience and many successful projects completed, we know how to help you design the best version of your product yet. We don't bite.",
    descriptionHighlight: "Let's get started.",
    stats: {
      projects: "Successful projects",
      experience: "Design experience",
      kickoff: "Time to kick-off",
    },
    emailPlaceholder: "Your email address",
    buttonText: "Let's get started",
  },
  ta: {
    title: "உங்கள் டிஜிட்டல் அனுபவத்தை",
    titleHighlight: "அடுத்த நிலைக்கு கொண்டு செல்வோம்.",
    description:
      "இருபது ஆண்டுகளுக்கும் மேலான அனுபவம் மற்றும் பல வெற்றிகரமான திட்டங்களை முடித்துள்ளதால், உங்கள் தயாரிப்பின் சிறந்த பதிப்பை வடிவமைக்க உங்களுக்கு எவ்வாறு உதவுவது என்ப���ு எங்களுக்குத் தெரியும். நாங்கள் கடிக்க மாட்டோம்.",
    descriptionHighlight: "தொடங்குவோம்.",
    stats: {
      projects: "வெற்றிகரமான திட்டங்கள்",
      experience: "வடிவமைப்பு அனுபவம்",
      kickoff: "தொடங்க நேரம்",
    },
    emailPlaceholder: "உங்கள் மின்னஞ்சல் முகவரி",
    buttonText: "தொடங்குவோம்",
  },
}

export default function Stats() {
  const { locale } = useLocale()
  const t = translations[locale]

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-24 lg:py-24 text-center bg-muted/30">
      <div className="mx-auto max-w-7xl ">
        <div className="mx-auto max-w-3xl space-y-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t.title} <span className="text-primary">{t.titleHighlight}</span>
          </h1>

          <p className="text-lg text-muted-foreground">
            {t.description} <span className="font-semibold text-foreground">{t.descriptionHighlight}</span>
          </p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                <Check className="size-5 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">150+</div>
              <div className="text-sm text-muted-foreground">{t.stats.projects}</div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                <Check className="size-5 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">20 years</div>
              <div className="text-sm text-muted-foreground">{t.stats.experience}</div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                <Check className="size-5 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">1 week</div>
              <div className="text-sm text-muted-foreground">{t.stats.kickoff}</div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Input type="email" placeholder={t.emailPlaceholder} className="max-w-sm" />
            <Button size="lg" className="dark:text-foreground">
              {t.buttonText}
              <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
