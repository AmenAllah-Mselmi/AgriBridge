"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/agribridge-logo.png" alt="AgriBridge Logo" width={32} height={32} className="h-8 w-8" />
          <span className="text-xl font-bold text-primary">AgriBridge</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.home")}
          </Link>
          <Link href="/solutions" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.solutions")}
          </Link>
          <Link href="/marketplace" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.marketplace")}
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            {t("nav.contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeToggle />

          <Button variant="outline" size="sm" className="hidden md:inline-flex bg-transparent" asChild>
            <Link href="/auth/signin">{t("nav.signin")}</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/auth/signup">{t("nav.signup")}</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-4">
            <Link
              href="/"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/solutions"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.solutions")}
            </Link>
            <Link
              href="/marketplace"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.marketplace")}
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
            <div className="pt-4 border-t space-y-2">
              <div className="flex justify-center pb-2">
                <ThemeToggle />
              </div>
              <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                <Link href="/auth/signin">{t("nav.signin")}</Link>
              </Button>
              <Button size="sm" className="w-full" asChild>
                <Link href="/auth/signup">{t("nav.signup")}</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
