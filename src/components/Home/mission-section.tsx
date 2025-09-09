'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function MissionSection() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-24">
      <div className="mx-auto max-w-7xl space-y-12 rounded-xl bg-muted p-6 sm:p-8 md:p-12 lg:p-16 md:space-y-16">
        {/* First Section */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="relative h-[240px] w-full overflow-hidden rounded-xl sm:h-[280px] md:h-[400px] lg:h-[450px]">
            <Image
              src="https://images.unsplash.com/photo-1641538225752-2d996ea204d4"
              alt="People joining hands in trust"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl">
              Empowering Communities Through Education & Healthcare
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed sm:text-lg">
              ThayTrust is dedicated to transforming lives through quality education, accessible
              healthcare, and sustainable development programs. We believe in creating opportunities
              that foster growth, dignity, and self-reliance in underserved communities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="group dark:text-foreground">
                <Link href="/education" className="flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Second Section (Inverted on large screens) */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="order-1 flex flex-col justify-center space-y-4 sm:space-y-6 lg:order-none">
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-5xl">
              Driving Change Through Service
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed sm:text-lg">
              ThayTrust operates comprehensive programs focused on education, healthcare, and
              community development. Our initiatives are designed to address the root causes of
              poverty and create lasting positive change in rural and urban communities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="group dark:text-foreground">
                <Link href="/programs" className="flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[240px] w-full overflow-hidden rounded-xl sm:h-[280px] md:h-[400px] lg:h-[450px]">
            <Image
              src="https://images.unsplash.com/photo-1646579886135-068c73800308"
              alt="Volunteer offering help"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
