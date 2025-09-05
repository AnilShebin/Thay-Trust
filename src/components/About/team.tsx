import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Mentor {
  name: string
  role: string
  image: string
}

const mentors: Mentor[] = [
  {
    name: "Rayna Torff",
    role: "Lead, Design Systems",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Gustavo Workman",
    role: "Head, Product Design",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Marcus Dorwart",
    role: "VP, Operations",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Casy Camilari Marx",
    role: "Digital Marketing Director",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
]

export default function MentorsSection() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Our Professional <span className="text-primary">Mentors</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 md:[&>*:nth-child(2)]:translate-y-12 md:[&>*:nth-child(4)]:translate-y-12">
          {mentors.map((mentor) => (
            <Card
              key={mentor.name}
              className="flex flex-col items-center bg-card p-6 text-center text-card-foreground transition-shadow hover:shadow-lg"
            >
              <div className="relative mb-6 size-24 overflow-hidden rounded-full">
                <Image src={mentor.image || "/placeholder.svg"} alt={mentor.name} fill className="object-cover" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{mentor.name}</h3>
              <p className="mb-6 text-muted-foreground">{mentor.role}</p>
              <Link href="#" className="inline-flex items-center text-primary transition-colors hover:text-primary/80">
                Read more
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
