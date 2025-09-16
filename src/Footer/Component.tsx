import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import type React from 'react'

import type { Footer, Header } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { FooterLogoLink } from "./FooterLogoLink"
import { HeaderNav } from '@/Header/Nav'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export async function FooterComponent() {
  try {
    const footerData = (await getCachedGlobal('footer', 1)()) as Footer
    const headerData = (await getCachedGlobal('header', 1)()) as Header

    return <FooterClient footerData={footerData} headerData={headerData} />
  } catch (error) {
    console.error('[v0] Error loading footer data:', error)

    return (
      <footer className="w-full border-t border-border dark:bg-card">
        <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Thay Trust. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }
}

interface FooterClientProps {
  footerData: Footer
  headerData: Header
}

const FooterClient: React.FC<FooterClientProps> = ({ headerData }) => {
  return (
    <footer className="w-full border-t border-border dark:bg-card">
      <div className="mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-8">
        <div className="grid grid-cols-1 gap-10 text-center lg:grid-cols-12 lg:text-left">
          {/* Left column */}
          <div className="flex flex-col items-center space-y-6 lg:col-span-5 lg:items-start">
            <div className="flex items-center justify-center lg:justify-start">
             {/* ✅ Client-side Logo Link */}
              <FooterLogoLink />
            </div>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Taste the difference with fast delivery, smooth pickups, and a dine-in experience
              you&apos;ll crave.
            </p>
            <div className="mt-2 flex justify-center space-x-4 lg:justify-start">
              <SocialLink icon={Facebook} label="Facebook" />
              <SocialLink icon={Instagram} label="Instagram" />
              <SocialLink icon={Twitter} label="Twitter" />
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
              {/* Quick Links + Theme Switcher row for mobile */}
              <div className="flex flex-row justify-center items-start space-x-6 md:hidden w-full">
                {/* Quick Links */}
                <div className="flex flex-col items-center space-y-2 w-1/2">
                  <h3 className="text-base font-semibold text-primary text-center">Quick Links</h3>
                  <HeaderNav
                    data={headerData}
                    vertical
                    hideSearch
                    className="flex flex-col space-y-2 w-full items-center"
                  />
                </div>

                {/* Theme Switcher */}
                <div className="flex flex-col items-center space-y-2 w-1/2 relative z-10">
                  <h3 className="text-base font-semibold text-primary text-center">Theme</h3>
                  <ThemeSelector />
                </div>
              </div>

              {/* Quick Links for desktop */}
              <div className="hidden md:flex flex-col items-start space-y-2 w-full">
                <h3 className="text-base font-semibold text-primary">Quick Links</h3>
                <HeaderNav
                  data={headerData}
                  vertical
                  hideSearch
                  className="flex flex-col space-y-2 w-full md:items-start items-center"
                />
              </div>

              {/* Theme Switcher for desktop */}
              <div className="hidden md:flex flex-col items-start space-y-2 relative z-10">
                <h3 className="text-base font-semibold text-primary">Theme</h3>
                <ThemeSelector />
              </div>

              {/* Newsletter */}
              <div className="flex flex-col items-center space-y-2.5 md:items-start">
                <h3 className="text-base font-semibold text-primary">Get in touch</h3>
                <p className="text-sm text-muted-foreground">
                  Stay updated with our latest offers and updates.
                </p>
                <div className="mt-2 w-full max-w-sm space-y-3">
                  <div className="relative w-full">
                    <Input
                      type="email"
                      placeholder="Your email"
                      className="h-10 w-full rounded-md border-none bg-input/30 pl-3 pr-24 text-foreground placeholder:text-muted-foreground focus:ring-primary/30"
                    />
                    <Button
                      type="submit"
                      className="absolute right-1 top-1 h-8 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground dark:text-foreground hover:bg-primary/90"
                    >
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-center text-xs text-muted-foreground md:text-left">
                    By subscribing you agree to our{' '}
                    <Link href="#" className="text-primary underline hover:text-primary/80">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col items-center justify-center space-y-2.5 border-t border-border pt-6 text-center md:flex-row md:justify-between md:space-y-0">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Pandora Box. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

const SocialLink = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <Link
    href="#"
    className="flex size-9 items-center justify-center rounded-full bg-primary/5 text-primary transition-all hover:bg-primary/10 hover:text-primary/80 dark:bg-secondary dark:text-primary dark:hover:bg-secondary/80 dark:hover:text-primary/80"
  >
    <Icon className="size-4" />
    <span className="sr-only">{label}</span>
  </Link>
)

export { FooterComponent as Footer }
