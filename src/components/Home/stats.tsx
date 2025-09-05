import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-24 lg:py-24 text-center">
      <div className="mx-auto max-w-3xl space-y-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Let&apos;s take your digital experience to <span className="text-primary">the next level.</span>
        </h1>

        <p className="text-lg text-muted-foreground">
          With over twenty years of experience and many successful projects completed, we know how to help you design
          the best version of your product yet. We don&apos;t bite.{" "}
          <span className="font-semibold text-foreground">Let&apos;s get started.</span>
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
              <Check className="size-5 text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground">150+</div>
            <div className="text-sm text-muted-foreground">Successful projects</div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
              <Check className="size-5 text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground">20 years</div>
            <div className="text-sm text-muted-foreground">Design experience</div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
              <Check className="size-5 text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground">1 week</div>
            <div className="text-sm text-muted-foreground">Time to kick-off</div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Input type="email" placeholder="Your email address" className="max-w-sm" />
          <Button size="lg">
            Let&apos;s get started
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
