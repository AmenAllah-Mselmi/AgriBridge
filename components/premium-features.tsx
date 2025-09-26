"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, BarChart3, MessageCircle, Truck, Shield, Users, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

const premiumFeatures = [
  {
    icon: Brain,
    title: "IA Recommandations",
    description: "Suggestions personnalisées basées sur vos habitudes d'achat et les tendances du marché",
    benefit: "Économisez jusqu'à 15% sur vos achats",
  },
  {
    icon: BarChart3,
    title: "Analyses Avancées",
    description: "Rapports détaillés sur vos performances, prévisions de demande et optimisation des coûts",
    benefit: "Optimisez vos approvisionnements",
  },
  {
    icon: MessageCircle,
    title: "Support Prioritaire",
    description: "Assistance 24/7 avec temps de réponse garanti et gestionnaire de compte dédié",
    benefit: "Résolution en moins de 2h",
  },
  {
    icon: Truck,
    title: "Livraison Express Gratuite",
    description: "Livraison gratuite en 24h pour tous vos produits, partout en France",
    benefit: "Économisez jusqu'à 200€/mois",
  },
  {
    icon: Shield,
    title: "Assurance Qualité Premium",
    description: "Garantie satisfaction avec remboursement intégral et assurance produits",
    benefit: "100% de vos achats protégés",
  },
  {
    icon: Users,
    title: "Accès Producteurs VIP",
    description: "Accès prioritaire aux meilleurs producteurs et produits en avant-première",
    benefit: "Les meilleurs produits en premier",
  },
]

export function PremiumFeatures() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <Badge className="bg-gradient-to-r from-purple-500 to-primary text-white mb-4">
          <Zap className="h-4 w-4 mr-1" />
          Fonctionnalités Premium
        </Badge>
        <h2 className="text-3xl font-bold mb-4">Débloquez tout le potentiel d'AgriBridge</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Accédez aux fonctionnalités avancées pour optimiser vos achats agricoles et développer votre activité
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {premiumFeatures.map((feature, index) => (
          <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-primary/10 rounded-bl-full" />
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-primary rounded-lg flex items-center justify-center">
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{feature.description}</CardDescription>
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                {feature.benefit}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Card className="max-w-lg mx-auto bg-gradient-to-r from-purple-500/5 to-primary/5 border-primary/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">Prêt à passer au Premium ?</h3>
            <p className="text-muted-foreground mb-4">
              Essayez toutes les fonctionnalités gratuitement pendant 14 jours
            </p>
            <Button asChild className="bg-gradient-to-r from-purple-500 to-primary">
              <Link href="/premium">
                Voir les plans Premium
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
