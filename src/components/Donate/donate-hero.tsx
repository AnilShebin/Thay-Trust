'use client'
import { Button } from '@/components/ui/button'
import { HeartHandshake } from 'lucide-react'
import Image from 'next/image'
import { useLocale } from '@/contexts/LocaleContext'

export default function DonateHero() {
  const { locale } = useLocale()

  const content = {
    en: {
      title: (
        <>
          Your Support, Our <span className="text-primary">Impact</span>
        </>
      ),
      description:
        'Every contribution helps us continue our mission of serving humanity with compassion and commitment. Join us in making a lasting difference.',
      buttons: {
        donate: 'Donate',
        learn: 'Our Impact',
      },
    },
    ta: {
      title: (
        <>
          உங்கள் ஆதரவு, எங்கள் <span className="text-primary">விளைவு</span>
        </>
      ),
      description:
        'ஒவ்வொரு பங்களிப்பும் கருணை மற்றும் அர்ப்பணிப்புடன் மனிதகுலத்திற்கு சேவை செய்வதற்கான எங்கள் பணியை தொடர உதவுகிறது. நீண்டநாள் மாற்றத்தை உருவாக்க எங்களுடன் சேருங்கள்.',
      buttons: {
        donate: 'நன்கொடை',
        learn: 'எங்கள் தாக்கம்',
      },
    },
  }

  const t = content[locale as 'en' | 'ta']

  return (
    <section className="bg-gradient-to-b from-primary/10 to-background px-5 sm:px-10 md:px-16 lg:px-20 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            {t.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {t.description}
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Button
              size="default"
              className="px-5 sm:px-6 py-2.5 text-sm sm:text-base font-medium"
            >
              {t.buttons.donate}
              <HeartHandshake className="ml-2 size-4 shrink-0" />
            </Button>
            <Button
              size="default"
              variant="outline"
              className="px-5 sm:px-6 py-2.5 text-sm sm:text-base font-medium"
            >
              {t.buttons.learn}
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/hands-holding-plant-donation.png"
            width={500}
            height={500}
            alt="Hands holding a plant, symbolizing growth and donation"
            className="rounded-xl shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto"
          />
        </div>
      </div>
    </section>
  )
}
