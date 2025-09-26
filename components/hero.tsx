import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-accent/20 py-20 md:py-32">
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Plateforme B2B agricole nouvelle génération
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
            Connectez directement <span className="text-primary">producteurs</span> et{" "}
            <span className="text-primary">acheteurs</span>
          </h1>

          <p className="mb-8 text-lg text-muted-foreground text-pretty md:text-xl max-w-2xl mx-auto">
            AgriBridge facilite les ventes agricoles avec une marketplace B2B, traçabilité complète, services logistiques
            intégrés et solutions financières sécurisées.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/auth/signup">
                Commencer gratuitement
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
              <Link href="/marketplace">
                <Play className="h-4 w-4" />
                Voir la démo
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </section>
  )
}
