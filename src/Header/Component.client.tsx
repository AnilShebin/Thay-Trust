'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { HandCoins, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { AdminBar } from '@/components/AdminBar'

interface HeaderClientProps {
  data: Header
  adminBarProps?: { preview?: boolean }
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data, adminBarProps }) => {
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Dynamic text color (white on top of homepage, green otherwise)
  const thayTrustTextColor =
    isScrolled || pathname !== '/' ? 'text-custom-green' : 'text-white'

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-muted/70 border-b border-border/50 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
      {...(theme ? { 'data-theme': theme } : {})}
    >
      {/* ✅ Admin bar always rendered at the top */}
      <AdminBar adminBarProps={adminBarProps} />

      <nav className="flex h-18 items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 py-1 sm:py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <Logo
            loading="eager"
            priority="high"
            className="invert dark:invert-0"
          />
          <div className="flex flex-col justify-center">
            <span
              className={`text-xl font-bold italic leading-none ${thayTrustTextColor}`}
            >
              Thay
            </span>
            <span
              className={`text-xl font-bold italic leading-none ${thayTrustTextColor}`}
            >
              Trust
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <HeaderNav data={data} />
          <Button className="shadow-sm hover:shadow-md transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
            <Link href="/donate" className="flex items-center gap-2">
              <HandCoins className="w-4 h-4" />
              Donate
            </Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <div
              role="button"
              tabIndex={0}
              className={`flex items-center justify-center size-10 cursor-pointer transition-colors duration-300 ${
                isScrolled
                  ? 'text-foreground hover:text-primary'
                  : pathname === '/'
                  ? 'text-white hover:text-primary'
                  : 'text-primary hover:text-primary'
              }`}
            >
              <Menu className="size-5" />
              <span className="sr-only">Toggle menu</span>
            </div>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full sm:w-80 p-0 bg-gradient-to-b from-primary/10 to-background backdrop-blur-md"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center p-6 border-b border-border/50">
                <Link href="/" className="flex items-center space-x-2 group">
                  <Logo
                    loading="eager"
                    priority="high"
                    className="invert dark:invert-0"
                  />
                  <div className="flex flex-col justify-center">
                    <span
                      className={`text-xl font-bold italic leading-none ${thayTrustTextColor}`}
                    >
                      Thay
                    </span>
                    <span
                      className={`text-xl font-bold italic leading-none ${thayTrustTextColor}`}
                    >
                      Trust
                    </span>
                  </div>
                </Link>
              </div>

              {/* Mobile Links */}
              <div className="flex-1 py-6">
                <HeaderNav data={data} />
              </div>

              {/* Mobile Footer */}
              <div className="p-6 border-t border-border/50">
                <Button
                  asChild
                  className="w-full text-lg py-6 bg-primary hover:bg-primary/90"
                >
                  <Link href="/donate" onClick={() => setIsOpen(false)}>
                    Donate Now
                  </Link>
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Help us make a difference
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
