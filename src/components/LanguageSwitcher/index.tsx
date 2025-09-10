"use client"

import type React from "react"
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe, ChevronDown } from "lucide-react"

interface LanguageSwitcherProps {
  className?: string
  variant?: "desktop" | "mobile"
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = "", variant = "desktop" }) => {
  const router = useRouter()
  const pathname = usePathname()
  const [currentLocale, setCurrentLocale] = useState("en")

  const languages = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "ta", label: "தமிழ்", flag: "🇮🇳" },
  ]

  const handleLanguageChange = (locale: string) => {
    setCurrentLocale(locale)
    // For now, we'll use URL parameters since full i18n routing isn't set up
    const url = new URL(window.location.href)
    url.searchParams.set("locale", locale)
    router.push(url.pathname + url.search)
  }

  const currentLanguage = languages.find((lang) => lang.code === currentLocale) || languages[0]

  if (variant === "mobile") {
    return (
      <div className={`flex flex-col gap-2 ${className}`}>
        <span className="text-sm font-medium text-muted-foreground px-4">Language</span>
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`flex items-center gap-3 px-4 py-2 text-left hover:bg-muted/50 rounded-md transition-colors ${
              currentLocale === language.code ? "bg-muted text-primary font-medium" : ""
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <span>{language.label}</span>
          </button>
        ))}
      </div>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className={`flex items-center gap-2 ${className}`}>
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{currentLanguage.label}</span>
          <ChevronDown className="w-3 h-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`flex items-center gap-2 cursor-pointer ${currentLocale === language.code ? "bg-muted" : ""}`}
          >
            <span>{language.flag}</span>
            <span>{language.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
