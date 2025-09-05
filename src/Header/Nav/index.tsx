'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ✅ Dynamic text color (for inactive links)
  const getLinkClasses = (href: string) => {
    const isActive = pathname === href

    if (isActive) {
      return 'text-primary font-bold'
    }

    return isScrolled || pathname !== '/'
      ? 'text-custom-green hover:text-primary'
      : 'text-white hover:text-primary'
  }

  return (
    <nav className="flex flex-col gap-4 md:flex-row md:gap-3 md:items-center">
      {navItems.map(({ link }, i) => (
        <CMSLink
          key={i}
          {...link}
          appearance="link"
          className={`${getLinkClasses(link?.url || '')} px-4 py-2 rounded transition-colors`}
        />
      ))}

      <Link
        href="/search"
        className={`${getLinkClasses('/search')} px-4 py-2 rounded transition-colors`}
      >
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5" />
      </Link>
    </nav>
  )
}
