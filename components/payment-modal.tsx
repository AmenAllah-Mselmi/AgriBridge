"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Euro, Shield, Loader2 } from "lucide-react"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  product: {
    name: string
    price: number
    supplier: string
    image: string
  }
  quantity: number
}

export function PaymentModal({ isOpen, onClose, product, quantity }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [processing, setProcessing] = useState(false)

  const total = product.price * quantity

  const handlePayment = async () => {
    setProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setProcessing(false)
    onClose()
    // Redirect to success page or show success message
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Paiement rapide</DialogTitle>
          <DialogDescription>Finalisez votre achat en quelques clics</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Product Summary */}
          <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-12 h-12 rounded object-cover"
            />
            <div className="flex-1">
              <p className="font-medium text-sm">{product.name}</p>
              <p className="text-xs text-muted-foreground">{product.supplier}</p>
              <p className="text-sm">
                {quantity} kg × {product.price}€ = <span className="font-bold text-primary">{total.toFixed(2)}€</span>
              </p>
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <Label className="text-sm font-medium">Méthode de paiement</Label>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="mt-2">
              <div className="flex items-center space-x-2 p-2 border rounded">
                <RadioGroupItem value="card" id="modal-card" />
                <Label htmlFor="modal-card" className="flex items-center gap-2 cursor-pointer">
                  <CreditCard className="h-4 w-4" />
                  <span className="text-sm">Carte bancaire</span>
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-2 border rounded">
                <RadioGroupItem value="transfer" id="modal-transfer" />
                <Label htmlFor="modal-transfer" className="flex items-center gap-2 cursor-pointer">
                  <Euro className="h-4 w-4" />
                  <span className="text-sm">Virement bancaire</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Card Details */}
          {paymentMethod === "card" && (
            <div className="space-y-3">
              <div>
                <Label htmlFor="modal-cardNumber" className="text-sm">
                  Numéro de carte
                </Label>
                <Input id="modal-cardNumber" placeholder="1234 5678 9012 3456" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="modal-expiry" className="text-sm">
                    MM/AA
                  </Label>
                  <Input id="modal-expiry" placeholder="12/25" />
                </div>
                <div>
                  <Label htmlFor="modal-cvv" className="text-sm">
                    CVV
                  </Label>
                  <Input id="modal-cvv" placeholder="123" />
                </div>
              </div>
            </div>
          )}

          <Separator />

          {/* Total and Pay Button */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Total à payer</span>
              <span className="text-xl font-bold text-primary">{total.toFixed(2)}€</span>
            </div>

            <Button className="w-full" disabled={processing} onClick={handlePayment}>
              {processing ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Traitement...
                </>
              ) : (
                <>
                  <Shield className="h-4 w-4 mr-2" />
                  Payer {total.toFixed(2)}€
                </>
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Paiement sécurisé par SSL. Vos données sont protégées.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
