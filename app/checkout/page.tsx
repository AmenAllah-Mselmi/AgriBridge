"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, Truck, Shield, ArrowLeft, Euro, CheckCircle, AlertCircle, Leaf } from "lucide-react"
import Link from "next/link"

// Mock cart data
const mockCartItems = [
  {
    id: 1,
    name: "Tomates Bio Premium",
    supplier: "Ferme Bio Martin",
    quantity: 50,
    unit: "kg",
    price: 3.5,
    image: "/organic-tomatoes.png",
    certification: "Bio EU",
  },
  {
    id: 2,
    name: "Pommes de Terre Label Rouge",
    supplier: "Maraîchage Dupont",
    quantity: 100,
    unit: "kg",
    price: 1.2,
    image: "/pile-of-potatoes.png",
    certification: "Label Rouge",
  },
]

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [deliveryMethod, setDeliveryMethod] = useState("standard")
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [processing, setProcessing] = useState(false)

  const subtotal = mockCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = deliveryMethod === "express" ? 15 : 5
  const total = subtotal + deliveryFee

  const handlePayment = async () => {
    setProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setProcessing(false)
    // Redirect to success page
    window.location.href = "/checkout/success"
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/marketplace" className="flex items-center gap-2 text-sm hover:text-primary">
              <ArrowLeft className="h-4 w-4" />
              Retour au marché
            </Link>
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">AgriBridge</span>
            </div>
            <Badge variant="secondary">Commande</Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Finaliser votre commande</h1>
            <p className="text-muted-foreground">Vérifiez vos produits et procédez au paiement sécurisé</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    Récapitulatif de commande
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockCartItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.supplier}</p>
                          <Badge variant="outline" className="text-xs mt-1">
                            {item.certification}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">
                            {item.quantity} {item.unit}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {item.price}€/{item.unit}
                          </p>
                          <p className="font-bold text-primary">{(item.price * item.quantity).toFixed(2)}€</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-primary" />
                    Informations de livraison
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Prénom</Label>
                      <Input id="firstName" placeholder="Jean" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nom</Label>
                      <Input id="lastName" placeholder="Dupont" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Entreprise</Label>
                    <Input id="company" placeholder="Supermarché Central" />
                  </div>

                  <div>
                    <Label htmlFor="address">Adresse</Label>
                    <Input id="address" placeholder="123 Rue de la République" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">Ville</Label>
                      <Input id="city" placeholder="Paris" />
                    </div>
                    <div>
                      <Label htmlFor="postal">Code postal</Label>
                      <Input id="postal" placeholder="75001" />
                    </div>
                    <div>
                      <Label htmlFor="country">Pays</Label>
                      <Input id="country" value="France" disabled />
                    </div>
                  </div>

                  <div>
                    <Label>Mode de livraison</Label>
                    <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod} className="mt-2">
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard" className="flex-1 cursor-pointer">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Livraison standard</p>
                              <p className="text-sm text-muted-foreground">3-5 jours ouvrés</p>
                            </div>
                            <span className="font-medium">5€</span>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="express" id="express" />
                        <Label htmlFor="express" className="flex-1 cursor-pointer">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Livraison express</p>
                              <p className="text-sm text-muted-foreground">24-48h</p>
                            </div>
                            <span className="font-medium">15€</span>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Méthode de paiement
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4" />
                          <span>Carte bancaire</span>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border rounded-lg">
                      <RadioGroupItem value="transfer" id="transfer" />
                      <Label htmlFor="transfer" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <Euro className="h-4 w-4" />
                          <span>Virement bancaire</span>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "card" && (
                    <div className="space-y-4 mt-4 p-4 bg-muted/50 rounded-lg">
                      <div>
                        <Label htmlFor="cardNumber">Numéro de carte</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Date d'expiration</Label>
                          <Input id="expiry" placeholder="MM/AA" />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="cardName">Nom sur la carte</Label>
                        <Input id="cardName" placeholder="Jean Dupont" />
                      </div>
                    </div>
                  )}

                  {paymentMethod === "transfer" && (
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5" />
                        <div className="text-sm">
                          <p className="font-medium">Virement bancaire</p>
                          <p className="text-muted-foreground mt-1">
                            Vous recevrez les détails bancaires par email après validation de la commande. La livraison
                            sera effectuée après réception du paiement.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Résumé de la commande</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Sous-total</span>
                    <span>{subtotal.toFixed(2)}€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Livraison</span>
                    <span>{deliveryFee}€</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary">{total.toFixed(2)}€</span>
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" checked={acceptTerms} onCheckedChange={setAcceptTerms} />
                      <Label htmlFor="terms" className="text-sm">
                        J'accepte les{" "}
                        <Link href="/terms" className="text-primary hover:underline">
                          conditions générales
                        </Link>
                      </Label>
                    </div>

                    <Button className="w-full" size="lg" disabled={!acceptTerms || processing} onClick={handlePayment}>
                      {processing ? (
                        "Traitement en cours..."
                      ) : (
                        <>
                          <Shield className="h-4 w-4 mr-2" />
                          Payer {total.toFixed(2)}€
                        </>
                      )}
                    </Button>

                    <div className="text-center text-xs text-muted-foreground">
                      <div className="flex items-center justify-center gap-1">
                        <Shield className="h-3 w-3" />
                        Paiement sécurisé SSL
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Pourquoi choisir AgriBridge ?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Produits certifiés et traçables</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Livraison fraîcheur garantie</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Support client 24/7</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Paiement 100% sécurisé</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
