"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Download, Eye, MessageCircle, Leaf, Calendar, Truck, Euro } from "lucide-react"
import Link from "next/link"

export default function CheckoutSuccess() {
  const orderNumber = "CMD-" + Math.random().toString(36).substr(2, 6).toUpperCase()
  const estimatedDelivery = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString("fr-FR")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-primary">AgriBridge</span>
            <Badge variant="secondary">Commande confirmée</Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Commande confirmée !</h1>
            <p className="text-muted-foreground text-lg">
              Merci pour votre confiance. Votre commande a été traitée avec succès.
            </p>
          </div>

          {/* Order Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <span>Commande #{orderNumber}</span>
              </CardTitle>
              <CardDescription>Vous recevrez un email de confirmation avec tous les détails</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <Euro className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="font-medium">Montant payé</p>
                  <p className="text-2xl font-bold text-primary">295.00€</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <Calendar className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="font-medium">Livraison prévue</p>
                  <p className="text-lg font-semibold">{estimatedDelivery}</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="font-medium">Mode de livraison</p>
                  <p className="text-lg font-semibold">Standard</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-left">Produits commandés :</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                    <span>Tomates Bio Premium (50kg)</span>
                    <span className="font-medium">175.00€</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                    <span>Pommes de Terre Label Rouge (100kg)</span>
                    <span className="font-medium">120.00€</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Télécharger la facture
            </Button>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Eye className="h-4 w-4" />
              Suivre ma commande
            </Button>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <MessageCircle className="h-4 w-4" />
              Contacter le support
            </Button>
          </div>

          {/* Next Steps */}
          <Card>
            <CardHeader>
              <CardTitle>Prochaines étapes</CardTitle>
            </CardHeader>
            <CardContent className="text-left space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <p className="font-medium">Préparation de votre commande</p>
                  <p className="text-sm text-muted-foreground">Nos producteurs préparent vos produits avec soin</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <p className="font-medium">Expédition</p>
                  <p className="text-sm text-muted-foreground">Vous recevrez un numéro de suivi par email</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <p className="font-medium">Livraison</p>
                  <p className="text-sm text-muted-foreground">Réception de vos produits frais à l'adresse indiquée</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Return to marketplace */}
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/marketplace">Continuer mes achats</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
