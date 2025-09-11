'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface HeaderNavProps {
  data: HeaderType
  vertical?: boolean
  className?: string
  hideSearch?: boolean
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  data,
  vertical = false,
  className,
  hideSearch = false,
}) => {
  const navItems = data?.navItems || []
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getLinkClasses = (href: string) => {
    const isActive = pathname === href
    return isActive
      ? 'text-primary font-bold'
      : 'text-foreground hover:text-primary'
  }

  return (
    <nav
      className={cn(
        vertical
          ? 'flex flex-col gap-1 items-start' // vertical spacing only
          : 'flex flex-col gap-4 md:flex-row md:gap-3 md:items-center',
        className
      )}
    >
      {navItems.map(({ link }, i) => (
        <CMSLink
          key={i}
          {...link}
          appearance="link"
          className={cn(
            getLinkClasses(link?.url || ''),
            vertical
              ? 'inline-flex px-0 py-1 gap-1 rounded transition-colors' // only text clickable
              : 'inline-flex px-4 py-2 rounded transition-colors'
          )}
        />
      ))}

      {!hideSearch && (
        <Link
          href="/search"
          className={cn(
            getLinkClasses('/search'),
            vertical
              ? 'inline-flex px-0 py-1 gap-1 rounded transition-colors'
              : 'inline-flex px-4 py-2 rounded transition-colors'
          )}
        >
          <span className="sr-only">Search</span>
          <SearchIcon className="w-5" />
        </Link>
      )}
    </nav>
  )
}
