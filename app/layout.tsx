import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Chatbot } from "@/components/chatbot"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"
import { ThemeProvider } from "@/contexts/theme-context"

export const metadata: Metadata = {
  title: "AgriBridge - Plateforme B2B Agricole",
  description: "Connectez directement producteurs et acheteurs pour faciliter les ventes agricoles",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider defaultTheme="system" storageKey="agribridge-ui-theme">
          <LanguageProvider>
            <Suspense fallback={null}>{children}</Suspense>
            <Chatbot />
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
