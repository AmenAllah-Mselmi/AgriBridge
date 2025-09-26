"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Leaf,
  Building2,
  ShoppingCart,
  Shield,
  Zap,
  Users,
  BarChart3,
  MessageSquare,
  CreditCard,
  Truck,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function SolutionsPage() {
  const solutions = [
    {
      id: "farmers",
      title: "Pour les Agriculteurs",
      description: "Vendez directement vos produits aux acheteurs professionnels",
      icon: Leaf,
      color: "bg-green-500",
      features: [
        "Catalogue produits personnalisé",
        "Gestion des stocks en temps réel",
        "Suivi des commandes et livraisons",
        "Analyses de performance",
        "Support client dédié",
        "Formation et accompagnement",
      ],
      benefits: [
        "Augmentation des revenus de 25-40%",
        "Réduction des intermédiaires",
        "Accès direct aux marchés",
        "Visibilité accrue",
      ],
    },
    {
      id: "exporters",
      title: "Pour les Exportateurs",
      description: "Trouvez des fournisseurs fiables et gérez vos approvisionnements",
      icon: Building2,
      color: "bg-blue-500",
      features: [
        "Réseau de fournisseurs vérifiés",
        "Outils de négociation avancés",
        "Gestion des contrats",
        "Traçabilité complète",
        "Logistique intégrée",
        "Reporting détaillé",
      ],
      benefits: [
        "Réduction des coûts d'approvisionnement",
        "Amélioration de la qualité",
        "Optimisation des délais",
        "Conformité garantie",
      ],
    },
    {
      id: "supermarkets",
      title: "Pour les Supermarchés",
      description: "Approvisionnez-vous directement auprès des producteurs",
      icon: ShoppingCart,
      color: "bg-purple-500",
      features: [
        "Marketplace B2B dédiée",
        "Commandes groupées",
        "Planification des approvisionnements",
        "Contrôle qualité",
        "Gestion des promotions",
        "Intégration ERP",
      ],
      benefits: ["Fraîcheur garantie", "Meilleurs prix", "Traçabilité totale", "Différenciation concurrentielle"],
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "Sécurité & Confiance",
      description: "Transactions sécurisées et fournisseurs vérifiés",
    },
    {
      icon: Zap,
      title: "Efficacité",
      description: "Processus automatisés et interface intuitive",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Tableaux de bord et rapports détaillés",
    },
    {
      icon: MessageSquare,
      title: "Communication",
      description: "Chat intégré et support multilingue",
    },
    {
      icon: CreditCard,
      title: "Paiements",
      description: "Solutions de paiement flexibles et sécurisées",
    },
    {
      icon: Truck,
      title: "Logistique",
      description: "Suivi des livraisons et optimisation des transports",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-accent/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Nos Solutions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des solutions sur mesure pour chaque acteur de la chaîne agricole
            </p>
          </div>
        </section>

        {/* Solutions by User Type */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {solutions.map((solution) => {
                const IconComponent = solution.icon
                return (
                  <Card key={solution.id} className="shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-lg ${solution.color} flex items-center justify-center mb-4`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{solution.title}</CardTitle>
                      <CardDescription>{solution.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Fonctionnalités clés</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Bénéfices</h4>
                        <div className="flex flex-wrap gap-2">
                          {solution.benefits.map((benefit, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full" asChild>
                        <Link href="/auth/signup">Commencer maintenant</Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Fonctionnalités Avancées</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Une plateforme complète avec tous les outils nécessaires pour optimiser vos échanges commerciaux
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <Card className="max-w-2xl mx-auto shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-4">Prêt à transformer votre activité ?</h2>
                <p className="text-muted-foreground mb-6">
                  Rejoignez des milliers d'agriculteurs et d'entreprises qui font déjà confiance à AgriBridge
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/auth/signup">
                      <Users className="h-4 w-4 mr-2" />
                      Créer un compte
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Nous contacter
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
