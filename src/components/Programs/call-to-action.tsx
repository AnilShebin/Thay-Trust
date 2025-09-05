import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"

export default function CallToAction() {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto">
        <div className="mx-auto flex flex-col justify-between gap-20 rounded-lg border bg-[radial-gradient(ellipse_30%_60%_at_100%_50%,hsla(var(--primary)_/_20%),#ffffff00)] p-8 md:p-12 lg:flex-row lg:bg-[radial-gradient(ellipse_50%_50%_at_50%_120%,hsla(var(--primary)_/_20%),#ffffff00)]">
          <div className="lg:texlf mx-auto max-w-md text-center lg:mx-0 lg:pb-20 lg:text-left">
            <p className="mb-6 font-medium">Ready to get started?</p>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">Start your free trial today.</h2>
            <p className="text-lg text-muted-foreground">
              Start with a 14-day free trial. No credit card required. No setup fees. Cancel anytime.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button>Get Started</Button>
              <Button variant="outline">
                <Play className="mr-1 h-full w-4" />
                Watch demo
              </Button>
            </div>
          </div>
          <div className="w-full">
            <Image
              src="/programs-cta.png"
              alt="Programs Call to Action"
              className="size-full rounded-lg object-cover"
              height={400}
              width={800}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
