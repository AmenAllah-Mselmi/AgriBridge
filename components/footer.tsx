import { Button } from "@/components/ui/button"
import { Globe, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">A</span>
              </div>
              <span className="text-xl font-bold text-primary">AgriBridge</span>
            </div>
            <p className="text-sm text-muted-foreground">
              La plateforme B2B qui connecte producteurs et acheteurs pour révolutionner les échanges agricoles.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                <Globe className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Mail className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Phone className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Plateforme</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Traçabilité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Logistique
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Paiements
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Pour producteurs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Pour acheteurs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Analytics IA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Centre d'aide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Statut
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 AgriBridge. Tous droits réservés.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Confidentialité
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Conditions
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
