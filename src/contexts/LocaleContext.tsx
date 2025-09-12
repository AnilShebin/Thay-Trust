"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

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

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale

    if (savedLocale && ["en", "ta"].includes(savedLocale)) {
      setLocaleState(savedLocale)
    } else {
      setLocaleState("en")
      localStorage.setItem("locale", "en")
    }

    setIsLoading(false)
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("locale", newLocale)
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
