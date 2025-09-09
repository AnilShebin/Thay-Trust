'use client'
import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, WandSparkles, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '../ui/badge'
import Link from 'next/link'

const ContactHero = () => {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(() => ['closer', 'connected', 'better', 'empowered', 'supported'], [])

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
            <span>Let&apos;s connect!</span>
          </Badge>

          {/* Heading */}
          <div className="flex flex-col gap-6 text-center">
            <h1 className="font-regular max-w-3xl text-center text-4xl font-medium tracking-tight text-foreground md:text-5xl lg:text-7xl">
              <span className="text-foreground">Let&apos;s get</span>
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
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl mx-auto text-lg leading-relaxed tracking-tight text-gray-600 md:text-xl">
              Whether you have a question, an idea, or simply want to explore how we can work
              together - we&apos;re here to listen. Our team values meaningful connections, and
              every message brings us closer to creating something impactful. Reach out today, and
              let&apos;s start building together.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-primary text-white hover:bg-primary/80 group"
            >
              <Link href="#contact" className="flex items-center">
                Send Us a Message
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link href="tel:+1234567890">
                <Phone className="h-5 w-5" /> Call Us Directly
              </Link>
            </Button>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-gray-700">
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-primary" />
              <span>support@thaytrust.org</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-primary" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-primary" />
              <span>Chennai, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-primary" />
              <span>Replies within 24 hrs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHero
