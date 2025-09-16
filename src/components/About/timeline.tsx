"use client"

import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  GraduationCap,
  Users,
  Home,
  Handshake,
  Globe,
  Award,
  Leaf,
} from "lucide-react"
import { useLocale } from "@/contexts/LocaleContext"

const hideScrollbarClass = "scrollbar-none"

export default function Timeline() {
  const { locale } = useLocale()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // --- Translations ---
  const content = {
    en: {
      heading: "Our Journey",
      description:
        "Since 2018, Thay Trust has been working to uplift marginalized communities through education, healthcare, rehabilitation, and empowerment programs — creating pathways for dignity and independence.",
      milestones: [
        { date: "2018", title: "Thay Trust Founded – A Vision for Inclusion", icon: Heart },
        { date: "2019", title: "First 100 Students Supported with Education Aid", icon: GraduationCap },
        { date: "2020", title: "Community Health Programs Reached 1,000+ Families", icon: Users },
        { date: "2021", title: "Shelter & Rehabilitation Homes Established", icon: Home },
        { date: "2022", title: "Strategic Partnerships with Local NGOs", icon: Handshake },
        { date: "2023", title: "Expanded Outreach to 50+ Villages and Communities", icon: Globe },
        { date: "2024", title: "Recognized with Social Impact Excellence Award", icon: Award },
        { date: "2025", title: "Launched Sustainability & Green Initiatives", icon: Leaf },
      ],
    },
    ta: {
      heading: "எங்கள் பயணம்",
      description:
        "2018 முதல், தாய் டிரஸ்ட் கல்வி, சுகாதாரம், மறுவாழ்வு மற்றும் அதிகாரமளிப்பு திட்டங்கள் மூலம் புறக்கணிக்கப்பட்ட சமூகங்களை முன்னேற்றம் செய்வதில் பணியாற்றி வருகிறது — மரியாதை மற்றும் சுயநிறைவு நோக்கி பாதைகளை உருவாக்குகிறது.",
      milestones: [
        { date: "2018", title: "Thay Trust நிறுவப்பட்டது – உள்ளடக்கத்தின் பார்வை", icon: Heart },
        { date: "2019", title: "முதல் 100 மாணவர்களுக்கு கல்வி உதவி", icon: GraduationCap },
        { date: "2020", title: "சமூக சுகாதார திட்டங்கள் 1,000+ குடும்பங்களை சென்றடைந்தது", icon: Users },
        { date: "2021", title: "தங்கும் & மறுவாழ்வு இல்லங்கள் நிறுவப்பட்டது", icon: Home },
        { date: "2022", title: "உள்ளூர் என்.ஜி.ஓக்களுடன் கூட்டாண்மை", icon: Handshake },
        { date: "2023", title: "50+ கிராமங்கள் மற்றும் சமூகங்களுக்கு விரிவடைந்தது", icon: Globe },
        { date: "2024", title: "சமூக தாக்க சிறப்புத் தகுதி விருது வழங்கப்பட்டது", icon: Award },
        { date: "2025", title: "நிலைத்தன்மை & பசுமை முயற்சிகள் தொடங்கப்பட்டது", icon: Leaf },
      ],
    },
  }

  const t = content[locale as "en" | "ta"] || content.en

  // --- Scroll logic ---
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      checkScroll()
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = isMobile
        ? scrollContainerRef.current.clientWidth
        : scrollContainerRef.current.clientWidth / 3
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="bg-background px-4 sm:px-8 md:px-16 lg:px-24 py-12 md:py-16 lg:py-20">
      <div className="mx-auto">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.heading}</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">{t.description}</p>
          </div>

          <div className="relative mt-16">
            {/* Timeline line */}
            <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-border" />

            {/* Timeline content */}
            <div
              ref={scrollContainerRef}
              className={`relative flex overflow-x-hidden pb-8 ${hideScrollbarClass}`}
              onScroll={checkScroll}
            >
              {t.milestones.map((milestone, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4 md:w-1/3">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="z-10 flex size-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                      <milestone.icon className="size-6 text-primary" />
                    </div>
                    <span className="font-mono text-sm font-medium text-muted-foreground">{milestone.date}</span>
                    <Card className="w-full">
                      <CardContent className="p-4">
                        <h3 className="mb-2 text-lg font-semibold">{milestone.title}</h3>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="mt-8 flex justify-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="size-10 rounded-full bg-transparent"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
              >
                <ArrowLeft className="size-4" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="size-10 rounded-full bg-transparent"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
              >
                <ArrowRight className="size-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
