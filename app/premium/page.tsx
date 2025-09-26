"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  Check,
  X,
  Crown,
  Zap,
  BarChart3,
  MessageCircle,
  Shield,
  Truck,
  Brain,
  Users,
  Star,
  Leaf,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

const plans = [
  {
    id: "free",
    name: "Gratuit",
    price: 0,
    period: "mois",
    description: "Parfait pour découvrir AgriBridge",
    features: [
      "Accès au marché de base",
      "Jusqu'à 5 commandes/mois",
      "Support par email",
      "Profil producteur simple",
      "Paiement standard",
    ],
    limitations: [
      "Pas d'analyses avancées",
      "Pas de recommandations IA",
      "Support limité",
      "Pas de priorité livraison",
    ],
    popular: false,
    color: "border-border",
  },
  {
    id: "pro",
    name: "Professionnel",
    price: 29,
    period: "mois",
    description: "Idéal pour les entreprises en croissance",
    features: [
      "Accès complet au marché",
      "Commandes illimitées",
      "Analyses et rapports avancés",
      "Recommandations IA personnalisées",
      "Support prioritaire 24/7",
      "Livraison express gratuite",
      "Profil entreprise premium",
      "Intégration API",
      "Gestionnaire de compte dédié",
    ],
    limitations: [],
    popular: true,
    color: "border-primary",
  },
  {
    id: "enterprise",
    name: "Entreprise",
    price: 99,
    period: "mois",
    description: "Solution complète pour les grandes organisations",
    features: [
      "Tout du plan Professionnel",
      "Tableau de bord personnalisé",
      "Intégrations ERP avancées",
      "Formation équipe incluse",
      "SLA garantie 99.9%",
      "Stockage illimité",
      "Rapports personnalisés",
      "Support téléphonique dédié",
      "Onboarding personnalisé",
    ],
    limitations: [],
    popular: false,
    color: "border-purple-500",
  },
]

const features = [
  {
    icon: Brain,
    title: "IA Recommandations",
    description: "Suggestions personnalisées basées sur vos habitudes d'achat",
    free: false,
    pro: true,
    enterprise: true,
  },
  {
    icon: BarChart3,
    title: "Analyses Avancées",
    description: "Rapports détaillés sur vos achats et tendances du marché",
    free: false,
    pro: true,
    enterprise: true,
  },
  {
    icon: MessageCircle,
    title: "Support Prioritaire",
    description: "Assistance 24/7 avec temps de réponse garanti",
    free: false,
    pro: true,
    enterprise: true,
  },
  {
    icon: Truck,
    title: "Livraison Express",
    description: "Livraison gratuite en 24h pour tous vos produits",
    free: false,
    pro: true,
    enterprise: true,
  },
  {
    icon: Shield,
    title: "Assurance Qualité",
    description: "Garantie satisfaction avec remboursement intégral",
    free: false,
    pro: true,
    enterprise: true,
  },
  {
    icon: Users,
    title: "Gestionnaire Dédié",
    description: "Un expert AgriBridge pour vous accompagner",
    free: false,
    pro: true,
    enterprise: true,
  },
]

export default function Premium() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("pro")

  const getPrice = (basePrice: number) => {
    if (basePrice === 0) return 0
    return isAnnual ? Math.round(basePrice * 12 * 0.8) : basePrice
  }

  const getPeriod = () => {
    return isAnnual ? "an" : "mois"
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-primary">AgriBridge</span>
              </Link>
              <Badge variant="secondary" className="bg-gradient-to-r from-purple-500 to-primary text-white">
                <Crown className="h-3 w-3 mr-1" />
                Premium
              </Badge>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" asChild>
                <Link href="/auth/signin">Se connecter</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/signup">S'inscrire</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Débloquez tout le potentiel d'AgriBridge
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Choisissez votre plan
            <span className="bg-gradient-to-r from-purple-500 to-primary bg-clip-text text-transparent"> Premium</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Accédez aux fonctionnalités avancées d'IA, analyses détaillées et support prioritaire pour optimiser vos
            achats agricoles
          </p>

          {/* Annual/Monthly Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${!isAnnual ? "font-medium" : "text-muted-foreground"}`}>Mensuel</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span className={`text-sm ${isAnnual ? "font-medium" : "text-muted-foreground"}`}>Annuel</span>
            {isAnnual && (
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                -20% de réduction
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative overflow-hidden transition-all hover:shadow-lg ${
                plan.popular ? "ring-2 ring-primary scale-105" : ""
              } ${plan.color}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-primary text-white text-center py-2 text-sm font-medium">
                  <Star className="h-4 w-4 inline mr-1" />
                  Le plus populaire
                </div>
              )}

              <CardHeader className={plan.popular ? "pt-12" : ""}>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  {plan.id === "enterprise" && <Crown className="h-5 w-5 text-purple-500" />}
                  {plan.id === "pro" && <Zap className="h-5 w-5 text-primary" />}
                </div>
                <CardDescription>{plan.description}</CardDescription>

                <div className="flex items-baseline gap-1 mt-4">
                  <span className="text-3xl font-bold">{getPrice(plan.price)}€</span>
                  <span className="text-muted-foreground">/{getPeriod()}</span>
                  {isAnnual && plan.price > 0 && (
                    <Badge variant="outline" className="ml-2 text-xs">
                      {plan.price}€/mois facturé annuellement
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, index) => (
                    <div key={index} className="flex items-center gap-2 opacity-60">
                      <X className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{limitation}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full ${plan.popular ? "bg-gradient-to-r from-purple-500 to-primary" : ""}`}
                  variant={plan.id === "free" ? "outline" : "default"}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.id === "free" ? "Plan actuel" : "Choisir ce plan"}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Comparaison détaillée</h2>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium">Fonctionnalités</th>
                      <th className="text-center p-4 font-medium">Gratuit</th>
                      <th className="text-center p-4 font-medium bg-primary/5">
                        <div className="flex items-center justify-center gap-1">
                          <Zap className="h-4 w-4 text-primary" />
                          Professionnel
                        </div>
                      </th>
                      <th className="text-center p-4 font-medium">
                        <div className="flex items-center justify-center gap-1">
                          <Crown className="h-4 w-4 text-purple-500" />
                          Entreprise
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feature, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <feature.icon className="h-5 w-5 text-primary" />
                            <div>
                              <p className="font-medium">{feature.title}</p>
                              <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center p-4">
                          {feature.free ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground mx-auto" />
                          )}
                        </td>
                        <td className="text-center p-4 bg-primary/5">
                          {feature.pro ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground mx-auto" />
                          )}
                        </td>
                        <td className="text-center p-4">
                          {feature.enterprise ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Questions fréquentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Puis-je changer de plan à tout moment ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Oui, vous pouvez upgrader ou downgrader votre plan à tout moment. Les changements prennent effet
                  immédiatement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Y a-t-il une période d'essai gratuite ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nous offrons 14 jours d'essai gratuit pour tous les plans premium. Aucune carte bancaire requise.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Comment fonctionne la facturation annuelle ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Avec la facturation annuelle, vous économisez 20% et êtes facturé une fois par an. Vous pouvez annuler
                  à tout moment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Le support est-il inclus ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tous les plans incluent le support. Les plans premium bénéficient d'un support prioritaire 24/7.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-500/10 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Prêt à commencer ?</h3>
              <p className="text-muted-foreground mb-6">
                Rejoignez des milliers d'entreprises qui font confiance à AgriBridge pour leurs approvisionnements
                agricoles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-primary">
                  Commencer l'essai gratuit
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  Contacter les ventes
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
