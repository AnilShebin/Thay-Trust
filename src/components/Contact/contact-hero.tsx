'use client'
import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, WandSparkles, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '../ui/badge'
import Link from 'next/link'
import { useLocale } from '@/contexts/LocaleContext'

export default function ContactHero() {
  const { locale } = useLocale()

  const content = {
    en: {
      badge: "Let's connect!",
      headingIntro: "Let's get",
      titles: ['closer', 'connected', 'better', 'empowered', 'supported'],
      subtitle:
        "Whether you have a question, an idea, or simply want to explore how we can work together - we're here to listen. Our team values meaningful connections, and every message brings us closer to creating something impactful. Reach out today, and let's start building together.",
      sendMessage: "Send Us a Message",
      callUs: "Call Us Directly",
      email: "support@thaytrust.org",
      phone: "+91 98765 43210",
      location: "Chennai, India",
      replyTime: "Replies within 24 hrs",
    },
    ta: {
      badge: "இணைக்கலாம்!",
      headingIntro: "செய்யலாம்",
      titles: ['அருகில்', 'இணைக்கப்பட்ட', 'மிகவும் சிறந்த', 'வலுவூட்டப்பட்ட', 'ஆதரிக்கப்பட்ட'],
      subtitle:
        "உங்களுக்கு கேள்வி, யோசனை, அல்லது எவ்வாறு இணைந்து பணியாற்றலாம் என்பதைக் ஆராய விரும்பினால் - நாங்கள் கேட்க தயார். எங்கள் குழு அர்த்தமுள்ள இணைப்புகளை மதிக்கிறது, மற்றும் ஒவ்வொரு செய்தியும் நமக்கு பாதிப்புள்ள ஒன்றை உருவாக்க நெருக்கமாக சேர உதவுகிறது. இன்று தொடர்புகொள்ளவும், ஒன்றாக கட்டிக்கொள்ள தொடங்குவோம்.",
      sendMessage: "எங்களுக்கு ஒரு செய்தி அனுப்பவும்",
      callUs: "நேரடியாக அழைக்கவும்",
      email: "support@thaytrust.org",
      phone: "+91 98765 43210",
      location: "சென்னை, இந்தியா",
      replyTime: "24 மணிநேரத்தில் பதில்",
    },
  }

  const t = content[locale as 'en' | 'ta']

  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(() => t.titles, [t.titles])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1))
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <section className="bg-gradient-to-b from-primary/10 to-background px-5 sm:px-10 md:px-16 lg:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-10 py-20 lg:py-28">
          {/* Badge */}
          <Badge
            variant="outline"
            className="group mb-3 flex w-fit items-center gap-1.5 border-primary/20 bg-primary/10 px-2.5 py-1.5 text-xs font-medium text-primary hover:bg-primary/20"
          >
            <WandSparkles className="size-3" />
            <span>{t.badge}</span>
          </Badge>

          {/* Heading */}
          <div className="flex flex-col gap-6 text-center">
            <h1 className="font-regular max-w-3xl text-center text-4xl font-medium tracking-tight text-foreground md:text-5xl lg:text-7xl">
              <span className="text-foreground">{t.headingIntro}</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute text-primary"
                    initial={{ opacity: 0, y: '-100' }}
                    transition={{ type: 'spring', stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl mx-auto text-lg leading-relaxed tracking-tight text-gray-600 md:text-xl">
              {t.subtitle}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Button asChild size="lg" variant="secondary" className="bg-primary text-white hover:bg-primary/80 group">
              <Link href="#contact" className="flex items-center">
                {t.sendMessage}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link href={`tel:${t.phone}`}>
                <Phone className="h-5 w-5" /> {t.callUs}
              </Link>
            </Button>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-gray-700">
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-primary" />
              <span>{t.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-primary" />
              <span>{t.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-primary" />
              <span>{t.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-primary" />
              <span>{t.replyTime}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
