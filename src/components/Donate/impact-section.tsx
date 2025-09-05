import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, HeartPulse, Leaf, Users } from 'lucide-react'

export default function ImpactSection() {
  const impacts = [
    {
      icon: <GraduationCap className="size-8 text-primary" />,
      title: "Education for All",
      description: "Providing access to quality education for underprivileged children and adults.",
    },
    {
      icon: <HeartPulse className="size-8 text-primary" />,
      title: "Healthcare Initiatives",
      description: "Supporting health camps, medical aid, and awareness programs in rural areas.",
    },
    {
      icon: <Leaf className="size-8 text-primary" />,
      title: "Environmental Sustainability",
      description: "Promoting eco-friendly practices and community-led environmental protection.",
    },
    {
      icon: <Users className="size-8 text-primary" />,
      title: "Community Development",
      description: "Empowering communities through skill development and livelihood programs.",
    },
  ]

  return (
    <section className="px-5 sm:px-10 md:px-16 lg:px-20 py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Where Your <span className="text-primary">Donation Goes</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Your generous contributions directly fund our core programs, creating tangible and lasting change in the lives of those we serve.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                {impact.icon}
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <CardTitle className="text-xl font-semibold text-foreground mb-2">{impact.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{impact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
