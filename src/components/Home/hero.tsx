"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

interface Slide {
  id: number
  image: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

const slides: Slide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1600&q=80",
    title: "Building Trust, Empowering Communities",
    description:
      "We are dedicated to fostering a foundation of trust and creating opportunities that uplift every individual.",
    buttonText: "Our Mission",
    buttonLink: "/about",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1659451336016-00d62d32f677?auto=format&fit=crop&w=1600&q=80",
    title: "Your Support, Our Shared Future",
    description:
      "Join us in making a tangible difference. Every contribution helps us expand our reach and impact lives.",
    buttonText: "Support Our Cause",
    buttonLink: "/donate",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?auto=format&fit=crop&w=1600&q=80",
    title: "Transparency and Integrity at Our Core",
    description:
      "We operate with complete openness, ensuring every action aligns with our commitment to those we serve.",
    buttonText: "Learn About Our Values",
    buttonLink: "/connect",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-scroll
  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((i) => (i === slides.length - 1 ? 0 : i + 1)), 6000)
    return () => clearInterval(timer)
  }, [])

  const handlePrev = () => setCurrentSlide((i) => (i === 0 ? slides.length - 1 : i - 1))
  const handleNext = () => setCurrentSlide((i) => (i === slides.length - 1 ? 0 : i + 1))

  const slide = slides[currentSlide]

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background image with animation */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }} // Animation duration matches slide change interval
        className="absolute inset-0 z-0"
      >
        <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill priority className="object-cover" />
      </motion.div>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Slide content - Added pt-16 to account for fixed navbar height */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pb-20 lg:pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id} // This key is crucial for AnimatePresence to animate content changes
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8 text-center text-white md:space-y-12"
          >
            <Badge variant="secondary" className="mx-auto flex w-fit items-center gap-2 px-4 py-2 text-sm">
              <span>Discover Our Impact</span>
              <span className="font-semibold">Read Our Story</span>
              <ArrowRight className="size-4" />
            </Badge>

            <h1 className="mx-auto max-w-xl text-4xl font-bold tracking-tight md:text-5xl lg:max-w-3xl lg:text-6xl">
              {slide.title}
            </h1>

            <p className="mx-auto max-w-lg text-lg text-white/80 md:max-w-2xl md:text-xl">{slide.description}</p>

            <div className="flex justify-center">
              <Button size="lg" asChild>
                <Link href={slide.buttonLink}>{slide.buttonText}</Link>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={handlePrev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 text-white hover:bg-white/20 md:left-8"
      >
        <ChevronLeft className="size-6 md:size-8" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={handleNext}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 text-white hover:bg-white/20 md:right-8"
      >
        <ChevronRight className="size-6 md:size-8" />
        <span className="sr-only">Next slide</span>
      </Button>
    </section>
  )
}
