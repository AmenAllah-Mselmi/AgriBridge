import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, MessageSquare, Lock, Globe, TrendingUp, Headphones } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Users,
      title: "Comptes personnalisés",
      description:
        "Dashboards sur mesure pour chaque agriculteur et société avec visualisation des ventes, commandes et performances.",
    },
    {
      icon: MessageSquare,
      title: "Chatbot intelligent",
      description: "Assistance immédiate, conseils personnalisés et réponses aux questions des utilisateurs 24h/24.",
    },
    {
      icon: Lock,
      title: "Espace client sécurisé",
      description: "Gestion complète des profils, transactions, commandes et communications en toute sécurité.",
    },
    {
      icon: Globe,
      title: "Plateforme multilingue",
      description: "Interface disponible en français, arabe tunisien et anglais pour une accessibilité maximale.",
    },
    {
      icon: TrendingUp,
      title: "Système de commission",
      description: "Modèle économique transparent avec commission sur chaque vente entre producteurs et acheteurs.",
    },
    {
      icon: Headphones,
      title: "Support dédié",
      description:
        "Équipe d'experts disponible pour accompagner vos projets et optimiser votre utilisation de la plateforme.",
    },
  ]

  return (
    <section className="py-20 bg-accent/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 md:text-4xl text-balance">
            Fonctionnalités avancées pour votre réussite
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Profitez d'outils professionnels et d'un accompagnement personnalisé pour développer votre activité
            agricole.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="gap-2">
            Découvrir toutes les fonctionnalités
          </Button>
        </div>
      </div>
    </section>
  )
}
