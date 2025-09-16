"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLocale } from "@/contexts/LocaleContext"

export default function Impact() {
  const { locale } = useLocale()

  const content = {
    en: {
      since: "Empowering Communities Since 2018",
      heading: (
        <>
          Creating a <span className="text-primary">Future of Inclusion</span>
        </>
      ),
      description: (
        <>
          Thay Trust is dedicated to transforming lives by supporting individuals with
          disabilities and those from disadvantaged backgrounds. We believe in building
          pathways to education, employment, and independence, while nurturing dignity and
          equality.
          <br />
          <br />
          Through inclusive programs, compassionate care, and community-driven initiatives,
          we are shaping a society where everyone has the opportunity to thrive and belong.
        </>
      ),
      button: "Explore Our Impact",
      stats: {
        lives: "Lives Empowered",
        communities: "Communities Reached",
        volunteers: "Volunteers Engaged",
      },
    },
    ta: {
      since: "2018 முதல் சமூகங்களை வலுப்படுத்துதல்",
      heading: (
        <>
          உள்ளடக்கத்தின் <span className="text-primary">எதிர்காலத்தை உருவாக்குதல்</span>
        </>
      ),
      description: (
        <>
          Thay Trust உடல் ஊனமுற்றவர்களையும், பின்தங்கிய சமூகங்களில் இருந்து வரும்
          நபர்களையும் ஆதரித்து வாழ்க்கையை மாற்ற முயற்சிக்கிறது. கல்வி, வேலைவாய்ப்பு,
          சுயநிறைவு ஆகியவற்றுக்கான பாதைகளை உருவாக்குவதோடு, கண்ணியமும் சமத்துவமும்
          வளரும் சூழலை நாங்கள் நம்புகிறோம்.
          <br />
          <br />
          ஒற்றுமையை மையமாகக் கொண்ட திட்டங்கள், கருணையுள்ள பராமரிப்பு மற்றும்
          சமூக சார்ந்த முயற்சிகள் மூலம், ஒவ்வொருவருக்கும் வளரவும், உடன்படிக்கவும்
          வாய்ப்பு உள்ள சமூகத்தை நாங்கள் உருவாக்குகிறோம்.
        </>
      ),
      button: "எங்கள் தாக்கத்தை அறிய",
      stats: {
        lives: "வாழ்க்கைகள் வலுப்பெற்றது",
        communities: "சென்றடைந்த சமூகங்கள்",
        volunteers: "ஈடுபட்ட தன்னார்வலர்கள்",
      },
    },
  }

  const t = content[locale as "en" | "ta"] || content.en

  return (
    <section className="relative w-full bg-gradient-to-b from-primary/10 to-background flex items-center px-4 sm:px-8 md:px-12 lg:px-20 pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6 relative z-10">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-border bg-background/80 backdrop-blur-md px-4 py-1.5 text-sm shadow-sm">
                <span className="h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                <span className="text-muted-foreground font-medium">{t.since}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200">
                {t.heading}
              </h1>

              <p className="max-w-[600px] text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl">
                {t.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button asChild className="bg-primary text-white hover:bg-primary/90 group">
                <Link href="#our-impact" className="flex items-center">
                  {t.button}
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200 dark:border-gray-800 mt-6">
              <div>
                <p className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  10,000+
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {t.stats.lives}
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  120+
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {t.stats.communities}
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  500+
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {t.stats.volunteers}
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative group max-w-[500px] mx-auto w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl -rotate-6 group-hover:rotate-0 transition-transform duration-300"></div>
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-2xl rotate-3 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-primary/10">
              <Image
                src="/about-hero.png"
                width={500}
                height={500}
                alt="Thay Trust Impact"
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
