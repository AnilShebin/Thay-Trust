'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function LatestNews() {
  const newsItems = [
    {
      slug: 'thaytrust-newsletter-january-march-2025',
      date: { day: '27', month: 'MAR' },
      title: 'ThayTrust Newsletter – January to March 2025',
      excerpt:
        'Kickstarting 2025 with kindness and compassion, making a difference where it matters most. We celebrated...',
      image: '/placeholder.svg',
      fullDate: 'March 27, 2025',
      category: 'Newsletter',
    },
    {
      slug: 'world-cancer-day-2025',
      date: { day: '04', month: 'FEB' },
      title: 'World Cancer Day',
      excerpt:
        "WORLD CANCER DAY 2025, 4TH FEBRUARY 2025, ThayTrust's Nellai Cancer Hospital Tirunelveli Addressing the Rising...",
      image: '/placeholder.svg',
      fullDate: 'February 4, 2025',
      category: 'Health Campaign',
    },
    {
      slug: 'education-scholarship-program-2025',
      date: { day: '15', month: 'JAN' },
      title: 'New Education Scholarship Program Launch',
      excerpt:
        'Launching our expanded scholarship program to support 500 more students in their educational journey...',
      image: '/placeholder.svg',
      fullDate: 'January 15, 2025',
      category: 'Education',
    },
  ]

  const sidebarNews = [
    {
      slug: 'thaytrust-newsletter-january-march-2025',
      title: 'ThayTrust Newsletter – January to March 2025',
      date: 'March 27, 2025',
      image: '/placeholder.svg',
    },
    {
      slug: 'world-cancer-day-2025',
      title: 'World Cancer Day',
      date: 'February 4, 2025',
      image: '/placeholder.svg',
    },
    {
      slug: 'thaytrust-newsletter-november-2024',
      title: 'ThayTrust Newsletter – November 2024',
      date: 'November 21, 2024',
      image: '/placeholder.svg',
    },
    {
      slug: 'thaytrust-newsletter-august-2024',
      title: 'ThayTrust Newsletter – August 2024',
      date: 'September 5, 2024',
      image: '/placeholder.svg',
    },
  ]

  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-24 lg:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Latest news</h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8">
          <div className="xl:col-span-3 space-y-6">
            {newsItems.map((item) => (
              <Card
                key={item.slug}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card border-border p-0 max-w-4xl"
              >
                <div className="md:flex h-full">
                  <div className="md:w-2/5 relative">
                    <div className="relative h-48 md:h-full">
                      <Image
                        src={item.image || '/placeholder.svg'}
                        alt={item.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover md:rounded-r-3xl"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground dark:text-foreground rounded-lg p-2 text-center min-w-[60px] z-10">
                        <div className="text-xl font-bold">{item.date.day}</div>
                        <div className="text-sm font-medium">{item.date.month}</div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="md:w-3/5 p-6 flex flex-col justify-between">
                    <div>
                      <Badge
                        variant="secondary"
                        className="mb-3 bg-secondary text-secondary-foreground"
                      >
                        {item.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-card-foreground mb-3 hover:text-primary transition-colors leading-tight">
                        <Link href={`/news/${item.slug}`}>{item.title}</Link>
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{item.excerpt}</p>
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        {item.fullDate}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary-foreground hover:bg-primary transition-colors"
                        asChild
                      >
                        <Link href={`/news/${item.slug}`} className="flex items-center">
                          Read More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          <div className="xl:col-span-1 space-y-6">
            <div className="sticky top-20">
              <h3 className="text-xl font-bold text-foreground mb-6">Recent Updates</h3>
              <div className="space-y-4">
                {sidebarNews.map((item, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-md transition-shadow duration-300 bg-card border-border p-0"
                  >
                    <div className="flex h-32">
                      <div className="w-32 relative flex-shrink-0">
                        <Image
                          src={item.image || '/placeholder.svg'}
                          alt={item.title}
                          width={120}
                          height={80}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      <CardContent className="flex-1 p-4 flex flex-col justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground text-base mb-2 hover:text-primary transition-colors leading-tight line-clamp-2">
                            <Link href={`/news/${item.slug}`}>{item.title}</Link>
                          </h4>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mt-auto">
                          <Calendar className="w-4 h-4 mr-1" />
                          {item.date}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>

              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-6"
                asChild
              >
                <Link href="/news" className="flex items-center justify-center">
                  View All News
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
