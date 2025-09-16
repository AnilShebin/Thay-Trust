"use client"

import Image from "next/image"
import { /* Play, X, */ Calendar, Users, Eye, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { useLocale } from "@/contexts/LocaleContext"

/* 
// 🔒 Commented out video modal code for now
function VideoModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-3xl">
        <Button
          variant="ghost"
          size="icon"
          className="absolute -top-10 right-0 text-white"
          onClick={onClose}
        >
          <X className="size-6" />
          <span className="sr-only">Close video</span>
        </Button>
        <div className="aspect-video rounded-lg">
          <iframe
            width="100%"
            className="rounded-lg"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Company Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
*/

const translations = {
  en: {
    heading: "Uncover Our Journey",
    sectionTitle: "Our Passion, Our Purpose",
    para1:
      "We're not just a company; we're a collective of passionate individuals driven by the desire to challenge the status quo and create a lasting impact. Our journey began with a simple idea - to solve complex problems with elegant solutions. We believe in the power of collaboration, the strength of innovation, and the importance of community.",
    para2:
      "We are more than the tools we build, we are the people behind them. Our team is our heartbeat, and we infuse our values of creativity, integrity, and customer focus in everything we do. We invite you to join us on our journey, where we always strive for better, and where every step we take is a step forward for our users.",
    milestones: [
      {
        icon: Building,
        title: "Our Foundation",
        description:
          "Established in '88, fueled by a passion for innovation and a vision to transform our industry.",
        value: "1988",
      },
      {
        icon: Eye,
        title: "Global Reach",
        description:
          "Connecting with hundreds of thousands of people monthly, sharing our story and our solutions.",
        value: "500k",
      },
      {
        icon: Users,
        title: "Community of Users",
        description:
          "A vibrant community of hundreds of thousands of active users enjoying the benefits of our platform",
        value: "200k",
      },
      {
        icon: Calendar,
        title: "Team of Experts",
        description:
          "A dedicated team of over 200 professionals driven to push boundaries and achieve exceptional results.",
        value: "200+",
      },
    ],
  },
  ta: {
    heading: "எங்கள் பயணத்தை அறியுங்கள்",
    sectionTitle: "எங்கள் ஆர்வம், எங்கள் நோக்கம்",
    para1:
      "நாங்கள் ஒரு நிறுவனம் மட்டுமல்ல; நிலையான தாக்கத்தை உருவாக்கும் விருப்பத்தால் இயக்கப்படும் தீவிரமான நபர்களின் கூட்டமைப்பாக இருக்கிறோம். எங்கள் பயணம் ஒரு எளிய யோசனையுடன் தொடங்கியது - சிக்கலான பிரச்சனைகளை அழகான தீர்வுகளுடன் தீர்ப்பது. ஒத்துழைப்பின் சக்தி, புதுமையின் வலிமை மற்றும் சமூகத்தின் முக்கியத்துவத்தில் நாங்கள் நம்புகிறோம்.",
    para2:
      "நாங்கள் உருவாக்கும் கருவிகளை விட அதிகமாக, அவற்றின் பின்னால் உள்ள மக்களே நாங்கள். எங்கள் குழுவே எங்கள் இதயத் துடிப்பு, மேலும் படைப்பாற்றல், நேர்மை மற்றும் வாடிக்கையாளர் கவனம் ஆகிய எங்கள் மதிப்புகளை நாம் செய்யும் எல்லாவற்றிலும் ஊற்றுகிறோம். எங்களுடன் சேர்ந்து எங்கள் பயணத்தில் பங்கேற்க உங்களை அழைக்கிறோம், எங்கு எப்போதும் சிறப்பை நோக்கி பாடுபடுகிறோம், எங்கு எடுக்கும் ஒவ்வொரு படியும் எங்கள் பயனர்களுக்கான முன்னேற்றமாகும்.",
    milestones: [
      {
        icon: Building,
        title: "எங்கள் நிறுவல்",
        description:
          "1988-இல் நிறுவப்பட்டது, புதுமைக்கான ஆர்வம் மற்றும் தொழில்துறையை மாற்றும் பார்வையால் ஊக்குவிக்கப்பட்டது.",
        value: "1988",
      },
      {
        icon: Eye,
        title: "உலகளாவிய சென்றடைவு",
        description:
          "எங்கள் கதை மற்றும் எங்கள் தீர்வுகளை பகிர்ந்து கொண்டு மாதந்தோறும் நூற்றுக்கணக்கான மக்களுடன் இணைவது.",
        value: "500k",
      },
      {
        icon: Users,
        title: "பயனாளர்கள் சமூகம்",
        description:
          "நூற்றுக்கணக்கான செயல்பாட்டு பயனர்களின் உயிர்ப்புடன் கூடிய சமூகம் எங்கள் தளத்தின் நன்மைகளை அனுபவிக்கிறது.",
        value: "200k",
      },
      {
        icon: Calendar,
        title: "நிபுணர்கள் குழு",
        description:
          "எல்லைகளை தாண்டி சிறந்த முடிவுகளை அடைய ஊக்கமூட்டப்பட்ட 200-க்கும் மேற்பட்ட தொழில்முறை நிபுணர்களின் அர்ப்பணிப்பு குழு.",
        value: "200+",
      },
    ],
  },
}

export default function About() {
  // const [isVideoOpen, setIsVideoOpen] = useState(false) // 🔒 Not needed now
  const { locale } = useLocale()
  const t = translations[locale]

  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background px-4 sm:px-8 md:px-16 lg:px-24 py-24 sm:py-32">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src="/programs-hero.jpg"
          alt="Team collaboration"
          fill
          className="rounded-lg object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="mb-8 text-4xl font-bold md:text-5xl lg:text-6xl">
            {t.heading}
          </h1>
          {/* 🔒 Video Play button removed */}
        </div>
      </div>

      {/* Content */}
      <div className="mt-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Side */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {t.sectionTitle}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>{t.para1}</p>
              <p>{t.para2}</p>
            </div>
          </div>

          {/* Right Side (Milestones) */}
          <div className="grid gap-6 sm:grid-cols-2">
            {t.milestones.map((milestone, index) => (
              <Card
                key={index}
                className="relative flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm"
              >
                <div className="absolute -top-3 left-6 rounded-full bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
                  {milestone.value}
                </div>
                <div className="mb-6 flex size-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                  <milestone.icon className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{milestone.title}</h3>
                <p className="text-center text-sm text-muted-foreground">
                  {milestone.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} /> */}
    </section>
  )
}
