"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"

type Locale = "en" | "ta"

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  isLoading: boolean
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Initialize locale from URL params or localStorage
  useEffect(() => {
    const urlLocale = searchParams.get("locale") as Locale
    const savedLocale = localStorage.getItem("locale") as Locale

    if (urlLocale && ["en", "ta"].includes(urlLocale)) {
      setLocaleState(urlLocale)
      localStorage.setItem("locale", urlLocale)
    } else if (savedLocale && ["en", "ta"].includes(savedLocale)) {
      setLocaleState(savedLocale)
      const url = new URL(window.location.href)
      url.searchParams.set("locale", savedLocale)
      router.replace(url.pathname + url.search)
    } else {
      setLocaleState("en")
      localStorage.setItem("locale", "en")
    }

    setIsLoading(false)
  }, [searchParams, router])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("locale", newLocale)

    const url = new URL(window.location.href)
    url.searchParams.set("locale", newLocale)
    router.push(url.pathname + url.search)
  }

  return <LocaleContext.Provider value={{ locale, setLocale, isLoading }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
