import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"

export function CTA() {
  const benefits = [
    "Accès gratuit pendant 30 jours",
    "Configuration personnalisée",
    "Support dédié inclus",
    "Formation complète",
  ]

  return (
    <section className="py-20">
      <div className="container">
        <Card className="relative overflow-hidden bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-12 md:p-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4 md:text-4xl text-balance">
                Prêt à révolutionner votre activité agricole ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Rejoignez des centaines d'agriculteurs et d'acheteurs qui font déjà confiance à AgriBridge pour optimiser
                leurs échanges commerciaux.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  Commencer maintenant
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Planifier une démo
                </Button>
              </div>
            </div>
          </CardContent>

          <div className="absolute inset-0 -z-10 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-[shimmer_3s_ease-in-out_infinite]"></div>
        </Card>
      </div>
    </section>
  )
}
