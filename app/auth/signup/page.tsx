"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { ArrowLeft, Leaf, Building2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function SignUpPage() {
  const [userType, setUserType] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    company: "",
    phone: "",
    address: "",
    description: "",
    acceptTerms: false,
  })
  const router = useRouter()
  const { t } = useLanguage()

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // TODO: Implement registration logic
      console.log("[v0] Sign up attempt:", { ...formData, userType })

      if (formData.password !== formData.confirmPassword) {
        alert("Les mots de passe ne correspondent pas")
        return
      }

      // Simulate registration delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      if (userType === "farmer") {
        router.push("/dashboard/farmer")
      } else if (userType === "company") {
        router.push("/dashboard/company")
      }
    } catch (error) {
      console.error("[v0] Sign up error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">{t("nav.home")}</span>
          </Link>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">AgriBridge</span>
            </div>
            <CardTitle>{t("auth.signup")}</CardTitle>
            <CardDescription>Rejoignez la plateforme AgriBridge et connectez-vous au marché agricole</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignUp} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="userType">{t("auth.userType")}</Label>
                <Select value={userType} onValueChange={setUserType} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez votre type de compte" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="farmer">
                      <div className="flex items-center gap-2">
                        <Leaf className="h-4 w-4" />
                        {t("auth.farmer")}
                      </div>
                    </SelectItem>
                    <SelectItem value="company">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        {t("auth.company")}
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{userType === "farmer" ? "Nom complet" : "Nom du contact"}</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t("auth.email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>

              {userType === "company" && (
                <div className="space-y-2">
                  <Label htmlFor="company">Nom de l'entreprise</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Nom de votre entreprise"
                    required
                  />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+33 1 23 45 67 89"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Adresse</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Votre adresse"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">
                  {userType === "farmer" ? "Description de votre exploitation" : "Description de votre activité"}
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder={
                    userType === "farmer"
                      ? "Décrivez vos cultures, votre superficie, vos méthodes..."
                      : "Décrivez votre activité, vos besoins en produits agricoles..."
                  }
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">{t("auth.password")}</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => handleInputChange("acceptTerms", checked as boolean)}
                  required
                />
                <Label htmlFor="terms" className="text-sm">
                  J'accepte les{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    conditions d'utilisation
                  </Link>{" "}
                  et la{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    politique de confidentialité
                  </Link>
                </Label>
              </div>

              <Button type="submit" className="w-full" disabled={!userType || !formData.acceptTerms || isLoading}>
                {isLoading ? t("common.loading") : "Créer mon compte"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Déjà un compte ?{" "}
                <Link href="/auth/signin" className="text-primary hover:underline">
                  {t("nav.signin")}
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
