import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Shield, Truck, CreditCard, BarChart3, Sparkles } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: ShoppingCart,
      title: "Marketplace B2B agricole",
      description:
        "Connecte directement producteurs et acheteurs pour faciliter les ventes et optimiser les échanges commerciaux.",
    },
    {
      icon: Shield,
      title: "Traçabilité et certification",
      description: "Garantit qualité et conformité aux normes agricoles avec un système de certification complet.",
    },
    {
      icon: Truck,
      title: "Services logistiques intégrés",
      description: "Stockage, transport et suivi en temps réel pour une chaîne d'approvisionnement optimisée.",
    },
    {
      icon: CreditCard,
      title: "Solutions financières sécurisées",
      description: "Transactions simples et sûres avec des paiements sécurisés et gestion des commissions.",
    },
    {
      icon: BarChart3,
      title: "Tableaux de bord et analyses",
      description: "Optimisation des ventes et prévision des récoltes avec des analyses de données avancées.",
    },
    {
      icon: Sparkles,
      title: "Producteurs premium IA",
      description:
        "Modèle AI fournissant analyses et recommandations pour maximiser les ventes vers sociétés et supermarchés.",
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 md:text-4xl text-balance">
            Une plateforme complète pour l'agriculture moderne
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Découvrez nos services intégrés conçus pour révolutionner les échanges agricoles et optimiser votre chaîne
            d'approvisionnement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
