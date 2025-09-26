"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { ArrowLeft, Leaf, Building2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function SignInPage() {
  const [userType, setUserType] = useState<string>("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { t } = useLanguage()

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // TODO: Implement authentication logic
      console.log("[v0] Sign in attempt:", { email, userType })

      // Simulate authentication delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (userType === "farmer") {
        router.push("/dashboard/farmer")
      } else if (userType === "company") {
        router.push("/dashboard/company")
      }
    } catch (error) {
      console.error("[v0] Sign in error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
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
            <CardTitle>{t("auth.signin")}</CardTitle>
            <CardDescription>Connectez-vous à votre compte AgriBridge</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignIn} className="space-y-4">
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

              <div className="space-y-2">
                <Label htmlFor="email">{t("auth.email")}</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">{t("auth.password")}</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={!userType || isLoading}>
                {isLoading ? t("common.loading") : t("auth.signin")}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Pas encore de compte ?{" "}
                <Link href="/auth/signup" className="text-primary hover:underline">
                  {t("nav.signup")}
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
