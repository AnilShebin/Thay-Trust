import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { HandHelping, Users, WandSparkles, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '../ui/badge'

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary/10 to-background pt-28 sm:pt-30 md:pt-32 lg:pt-30 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
      <div className="container mx-auto max-w-7xl overflow-hidden">
        <div className="mb-20 flex flex-col items-center gap-6 text-center">
          <Badge
            variant="outline"
            className="group mb-3 flex w-fit items-center gap-1.5 border-primary/20 bg-primary/10 px-2.5 py-1.5 text-xs font-medium text-primary hover:bg-primary/20"
          >
            <WandSparkles className="size-3" />
            <span>Your Kindness, Their Hope</span>
          </Badge>

          <h1 className="text-primary dark:text-foreground text-4xl font-semibold lg:text-6xl">
            <span className="text-foreground">Together We </span>
            <span className="text-primary">
              Can <br /> Uplift Lives
            </span>
          </h1>
          <div className="flex gap-4 mt-4">
            <Link href="/donate">
              <Button size="lg" className="rounded-full dark:text-foreground">
                Donate Now
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="rounded-full">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative mx-auto max-w-screen-lg">
          <Image
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb"
            alt="placeholder"
            width={1920}
            height={1080}
            className="aspect-video max-h-[500px] w-full rounded-xl object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent dark:from-background"></div>
          <BackgroundDecoration />
        </div>

        <div className="mx-auto mt-10 flex max-w-screen-lg flex-col md:flex-row">
          <FeatureCard
            icon={<HandHelping className="h-auto w-5" />}
            title="Supporting Education"
            description="Helping underprivileged students with scholarships, books, and guidance to secure a brighter future."
          />
          <Separator
            className="mx-6 hidden h-auto w-[2px] bg-gradient-to-b from-muted via-transparent to-muted md:block"
            orientation="vertical"
          />
          <FeatureCard
            icon={<Users className="h-auto w-5" />}
            title="Empowering Women"
            description="Providing unmarried women with skills, resources, and financial support to live with dignity and independence."
          />
          <Separator
            className="mx-6 hidden h-auto w-[2px] bg-gradient-to-b from-muted via-transparent to-muted md:block"
            orientation="vertical"
          />
          <FeatureCard
            icon={<Zap className="h-auto w-5" />}
            title="Medical Relief"
            description="Offering healthcare aid, medicines, and emergency support to save lives and bring hope to vulnerable families."
          />
        </div>
      </div>
    </section>
  )
}

function BackgroundDecoration() {
  return (
    <>
      <div className="absolute -right-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
      <div className="absolute -left-28 -top-28 -z-10 aspect-video h-72 w-96 opacity-40 [background-size:12px_12px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)] sm:bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)]"></div>
    </>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex grow basis-0 flex-col rounded-md p-4 md:items-center lg:items-center">
      <div className="mb-6 flex size-10 items-center justify-center rounded-full bg-background dark:bg-secondary drop-shadow-lg">
        {icon}
      </div>
      <h3 className="mb-2 font-semibold md:text-center lg:text-center">{title}</h3>
      <p className="text-sm text-muted-foreground md:text-center lg:text-center">{description}</p>
    </div>
  )
}
