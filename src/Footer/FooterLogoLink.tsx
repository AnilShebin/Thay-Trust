"use client"

import Link from "next/link"
import { Logo } from "@/components/Logo/Logo"
import { useEffect, useState } from "react"

export function FooterLogoLink() {
  const [locale, setLocale] = useState("en")

  useEffect(() => {
    const stored = localStorage.getItem("locale")
    if (stored) setLocale(stored)
  }, [])

  return (
    <Link href={`/?locale=${locale}`} className="flex items-center space-x-2 group">
      <Logo loading="eager" priority="high" />
      <div className="flex flex-col justify-center">
        <span className="text-xl font-bold italic leading-none">Thay</span>
        <span className="text-xl font-bold italic leading-none">Trust</span>
      </div>
    </Link>
  )
}
