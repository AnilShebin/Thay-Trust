import { Button } from "@/components/ui/button"
import { HeartHandshake } from 'lucide-react'
import Image from "next/image"

export default function DonateHero() {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background px-5 sm:px-10 md:px-16 lg:px-20 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Your Support, Our <span className="text-primary">Impact</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
            Every contribution helps us continue our mission of serving humanity with compassion and commitment. Join us in making a lasting difference.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <Button size="lg" className="px-8 py-3 text-lg">
              Donate Now <HeartHandshake className="ml-2 size-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg group">
              Learn About Our Impact
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/hands-holding-plant-donation.png"
            width={500}
            height={500}
            alt="Hands holding a plant, symbolizing growth and donation"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
