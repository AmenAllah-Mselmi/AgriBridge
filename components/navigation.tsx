"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Leaf, Home, ShoppingCart, Users, BarChart3, MessageCircle } from "lucide-react"

export function Navigation() {
  return (
    <nav className="border-b bg-card">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              
              <span className="text-xl font-bold text-primary">AgriBridge</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-primary">
                <Home className="h-4 w-4" />
                Accueil
              </Link>
              <Link href="/marketplace" className="flex items-center gap-2 text-sm font-medium hover:text-primary">
                <ShoppingCart className="h-4 w-4" />
                Marché
              </Link>
              <Link href="/dashboard/farmer" className="flex items-center gap-2 text-sm font-medium hover:text-primary">
                <Users className="h-4 w-4" />
                Producteurs
              </Link>
              <Link
                href="/dashboard/company"
                className="flex items-center gap-2 text-sm font-medium hover:text-primary"
              >
                <BarChart3 className="h-4 w-4" />
                Entreprises
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-4 w-4" />
            </Button>
            <Button variant="outline" asChild>
              <Link href="/auth/signin">Se connecter</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/signup">S'inscrire</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
