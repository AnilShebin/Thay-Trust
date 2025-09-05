"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Featured() {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 md:py-20 lg:py-24 bg-muted">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What we do</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-4xl mx-auto">
            We partner with like-minded individuals, corporations and networks to develop and implement high-impact
            projects across Tamil Nadu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Education Section */}
          <div className="group flex flex-col h-full">
            <div className="mb-4 overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=250&width=350"
                alt="Children participating in ThayTrust education programs"
                width={350}
                height={250}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Education</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed flex-grow text-sm">
              Quality education can transform a child&apos;s life. We provide financial assistance and mentorship
              support to well-deserving children and youth to bridge this education gap.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-auto bg-transparent"
              asChild
            >
              <Link href="/education">
                Read More
                <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Health Section */}
          <div className="group flex flex-col h-full">
            <div className="mb-4 overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=250&width=350"
                alt="ThayTrust health camp providing medical care"
                width={350}
                height={250}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Health</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed flex-grow text-sm">
              Our multi-pronged approach to fighting cancer has benefitted nearly 2 lakh people in and around
              Tirunelveli through mobile clinics and awareness programs.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-auto bg-transparent"
              asChild
            >
              <Link href="/programs">
                Read More
                <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Women Empowerment Section */}
          <div className="group flex flex-col h-full">
            <div className="mb-4 overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=250&width=350"
                alt="Women participating in ThayTrust empowerment programs"
                width={350}
                height={250}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Women Empowerment</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed flex-grow text-sm">
              Our skill development programmes provide women with opportunities to become financially independent and
              lead self-sufficient lives through vocational training.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-auto bg-transparent"
              asChild
            >
              <Link href="/programs">
                Read More
                <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Community Development Section */}
          <div className="group flex flex-col h-full">
            <div className="mb-4 overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=250&width=350"
                alt="ThayTrust community development initiatives"
                width={350}
                height={250}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Community Development</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed flex-grow text-sm">
              Building stronger communities through infrastructure development, clean water initiatives, and sustainable
              livelihood programs that create lasting positive impact.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground mt-auto bg-transparent"
              asChild
            >
              <Link href="/programs">
                Read More
                <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
