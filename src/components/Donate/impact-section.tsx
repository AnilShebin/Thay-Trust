'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, HeartPulse, Leaf, Users } from "lucide-react"
import { useLocale } from "@/contexts/LocaleContext"

export default function ImpactSection() {
  const { locale } = useLocale()

  const content = {
    en: {
      heading: (
        <>
          Where Your <span className="text-primary">Donation Goes</span>
        </>
      ),
      description:
        "Your generous contributions directly fund our core programs, creating tangible and lasting change in the lives of those we serve.",
      impacts: [
        {
          icon: <GraduationCap className="size-8 text-primary" />,
          title: "Education for All",
          description:
            "Providing access to quality education for underprivileged children and adults.",
        },
        {
          icon: <HeartPulse className="size-8 text-primary" />,
          title: "Healthcare Initiatives",
          description:
            "Supporting health camps, medical aid, and awareness programs in rural areas.",
        },
        {
          icon: <Leaf className="size-8 text-primary" />,
          title: "Environmental Sustainability",
          description:
            "Promoting eco-friendly practices and community-led environmental protection.",
        },
        {
          icon: <Users className="size-8 text-primary" />,
          title: "Community Development",
          description:
            "Empowering communities through skill development and livelihood programs.",
        },
      ],
    },
    ta: {
      heading: (
        <>
          உங்கள் <span className="text-primary">நன்கொடை எங்கே செல்கிறது</span>
        </>
      ),
      description:
        "உங்கள் தாராள பங்களிப்புகள் எங்கள் முக்கிய திட்டங்களுக்கு நேரடியாக நிதியளிக்கின்றன, நாம் சேவை செய்பவர்களின் வாழ்க்கையில் உண்மையான மற்றும் நீண்டநாள் மாற்றத்தை ஏற்படுத்துகின்றன.",
      impacts: [
        {
          icon: <GraduationCap className="size-8 text-primary" />,
          title: "அனைவருக்கும் கல்வி",
          description:
            "பாதுகாப்பற்ற குழந்தைகள் மற்றும் பெரியவர்களுக்கு தரமான கல்வியை வழங்குதல்.",
        },
        {
          icon: <HeartPulse className="size-8 text-primary" />,
          title: "சுகாதார முயற்சிகள்",
          description:
            "சுகாதார முகாம்கள், மருத்துவ உதவி மற்றும் விழிப்புணர்வு திட்டங்களை ஆதரித்தல்.",
        },
        {
          icon: <Leaf className="size-8 text-primary" />,
          title: "சுற்றுச்சூழல் நிலைத்தன்மை",
          description:
            "சுற்றுச்சூழல் நட்பு நடைமுறைகள் மற்றும் சமூகத்தின் முன்னிலையில் சுற்றுச்சூழல் பாதுகாப்பை ஊக்குவித்தல்.",
        },
        {
          icon: <Users className="size-8 text-primary" />,
          title: "சமூக மேம்பாடு",
          description:
            "திறன் மேம்பாடு மற்றும் வாழ்வாதார திட்டங்களின் மூலம் சமூகங்களை அதிகாரமளித்தல்.",
        },
      ],
    },
  }

  const t = content[locale as "en" | "ta"]

  return (
    <section className="px-5 sm:px-10 md:px-16 lg:px-20 py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          {t.heading}
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          {t.description}
        </p>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.impacts.map((impact, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="pb-4">{impact.icon}</CardHeader>
              <CardContent className="flex flex-col items-center">
                <CardTitle className="text-xl font-semibold text-foreground mb-2">
                  {impact.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {impact.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
