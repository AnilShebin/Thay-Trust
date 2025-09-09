'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Featured() {
  const sections = [
    {
      title: 'Education',
      desc: "Quality education can transform a child's life. We provide financial assistance and mentorship support to well-deserving children and youth.",
      img: '/placeholder.svg?height=250&width=350',
      link: '/education',
    },
    {
      title: 'Health',
      desc: 'Our multi-pronged approach to fighting cancer has benefitted nearly 2 lakh people through mobile clinics and awareness programs.',
      img: '/placeholder.svg?height=250&width=350',
      link: '/programs',
    },
    {
      title: 'Women Empowerment',
      desc: 'Our skill development programmes provide women with opportunities to become financially independent and lead self-sufficient lives.',
      img: '/placeholder.svg?height=250&width=350',
      link: '/programs',
    },
    {
      title: 'Community Development',
      desc: 'Building stronger communities through infrastructure, clean water initiatives, and sustainable livelihood programs.',
      img: '/placeholder.svg?height=250&width=350',
      link: '/programs',
    },
  ]

  return (
    <section className="px-4 py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">What We Do</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-4xl mx-auto">
            We partner with like-minded individuals, corporations, and networks to develop and
            implement high-impact projects across Tamil Nadu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {sections.map((section, idx) => (
            <Card
              key={idx}
              className="overflow-hidden group flex flex-col h-full rounded-2xl max-w-md mx-auto"
            >
              <div className="relative h-48 rounded-2xl overflow-hidden group">
                <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                  <Image src={section.img} alt={section.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 rounded-2xl" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold">{section.title}</h3>
                </div>
              </div>
              <CardContent className="bg-card p-4 flex-grow">
                <p className="text-sm text-card-foreground">{section.desc}</p>
              </CardContent>
              <CardFooter className="bg-card p-4 justify-end">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="hover:text-primary"
                >
                  <Link href={section.link}>
                    Read More
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
