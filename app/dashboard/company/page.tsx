"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart3,
  Package,
  TrendingUp,
  Users,
  Euro,
  Search,
  Filter,
  ShoppingCart,
  Eye,
  Star,
  MapPin,
  Calendar,
  Truck,
  Bell,
  MessageCircle,
  Settings,
  LogOut,
  Building2,
  CheckCircle,
} from "lucide-react"
import { SpendingChart } from "@/components/charts/spending-chart"
import { OrdersChart } from "@/components/charts/orders-chart"
import { ThemeToggle } from "@/components/theme-toggle"

// Mock data for company dashboard
const mockSuppliers = [
  {
    id: 1,
    name: "Ferme Bio Martin",
    location: "Provence, France",
    rating: 4.8,
    products: 12,
    verified: true,
    specialties: ["Bio", "Légumes"],
    image: "/farm-landscape.png",
  },
  {
    id: 2,
    name: "Coopérative Céréales Sud",
    location: "Occitanie, France",
    rating: 4.6,
    products: 8,
    verified: true,
    specialties: ["Céréales", "Grains"],
    image: "/wheat-field.png",
  },
  {
    id: 3,
    name: "Maraîchage Dupont",
    location: "Bretagne, France",
    rating: 4.9,
    products: 15,
    verified: false,
    specialties: ["Légumes", "Fruits"],
    image: "/vegetable-garden.png",
  },
]

const mockProducts = [
  {
    id: 1,
    name: "Tomates Bio",
    supplier: "Ferme Bio Martin",
    category: "Légumes",
    price: "3.50€/kg",
    available: "500 kg",
    quality: "Premium",
    certification: "Bio EU",
    harvest: "2024-01-10",
    image: "/organic-tomatoes.png",
  },
  {
    id: 2,
    name: "Blé Tendre",
    supplier: "Coopérative Céréales Sud",
    category: "Céréales",
    price: "0.25€/kg",
    available: "2000 kg",
    quality: "Standard",
    certification: "Agriculture Raisonnée",
    harvest: "2023-08-15",
    image: "/single-wheat-grain.png",
  },
  {
    id: 3,
    name: "Pommes de Terre",
    supplier: "Maraîchage Dupont",
    category: "Légumes",
    price: "1.20€/kg",
    available: "1200 kg",
    quality: "Premium",
    certification: "Label Rouge",
    harvest: "2024-01-05",
    image: "/pile-of-potatoes.png",
  },
]

const mockOrders = [
  {
    id: "CMD-001",
    supplier: "Ferme Bio Martin",
    products: "Tomates Bio (100kg)",
    total: "350€",
    status: "En transit",
    date: "2024-01-15",
    delivery: "2024-01-18",
  },
  {
    id: "CMD-002",
    supplier: "Coopérative Céréales Sud",
    products: "Blé Tendre (500kg)",
    total: "125€",
    status: "Livré",
    date: "2024-01-12",
    delivery: "2024-01-14",
  },
]

export default function CompanyDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.supplier.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">AgriBridge</span>
            </div>
            <Badge variant="secondary">Entreprise</Badge>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <MessageCircle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:inline-flex">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-64 border-b md:border-r md:border-b-0 bg-card">
          <nav className="p-4 space-y-2">
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible">
              <Button
                variant={activeTab === "overview" ? "default" : "ghost"}
                className="whitespace-nowrap md:w-full md:justify-start"
                onClick={() => setActiveTab("overview")}
              >
                <BarChart3 className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">Vue d'ensemble</span>
              </Button>
              <Button
                variant={activeTab === "marketplace" ? "default" : "ghost"}
                className="whitespace-nowrap md:w-full md:justify-start"
                onClick={() => setActiveTab("marketplace")}
              >
                <Package className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">Marché</span>
              </Button>
              <Button
                variant={activeTab === "suppliers" ? "default" : "ghost"}
                className="whitespace-nowrap md:w-full md:justify-start"
                onClick={() => setActiveTab("suppliers")}
              >
                <Users className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">Fournisseurs</span>
              </Button>
              <Button
                variant={activeTab === "orders" ? "default" : "ghost"}
                className="whitespace-nowrap md:w-full md:justify-start"
                onClick={() => setActiveTab("orders")}
              >
                <ShoppingCart className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">Commandes</span>
              </Button>
              <Button
                variant={activeTab === "analytics" ? "default" : "ghost"}
                className="whitespace-nowrap md:w-full md:justify-start"
                onClick={() => setActiveTab("analytics")}
              >
                <TrendingUp className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">Analyses</span>
              </Button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Tableau de bord</h1>
                <p className="text-muted-foreground">Bienvenue sur votre espace entreprise</p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Fournisseurs Actifs</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">+3 ce mois</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Commandes</CardTitle>
                    <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">156</div>
                    <p className="text-xs text-muted-foreground">+23% ce mois</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Dépenses</CardTitle>
                    <Euro className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">45,230€</div>
                    <p className="text-xs text-muted-foreground">+8% ce mois</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Économies</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12,450€</div>
                    <p className="text-xs text-muted-foreground">vs prix marché</p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Commandes Récentes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{order.supplier}</p>
                            <p className="text-sm text-muted-foreground">{order.products}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{order.total}</p>
                            <Badge variant={order.status === "Livré" ? "default" : "secondary"}>{order.status}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Fournisseurs Recommandés</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockSuppliers.slice(0, 3).map((supplier) => (
                        <div key={supplier.id} className="flex items-center gap-4">
                          <img
                            src={supplier.image || "/placeholder.svg"}
                            alt={supplier.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p className="font-medium">{supplier.name}</p>
                              {supplier.verified && <CheckCircle className="h-4 w-4 text-primary" />}
                            </div>
                            <p className="text-sm text-muted-foreground">{supplier.location}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{supplier.rating}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "marketplace" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">Marché des Produits</h1>
                  <p className="text-muted-foreground">Découvrez et commandez des produits agricoles</p>
                </div>
              </div>

              {/* Search and Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Rechercher des produits ou fournisseurs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-full sm:w-48">
                      <SelectValue placeholder="Toutes catégories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes catégories</SelectItem>
                      <SelectItem value="Légumes">Légumes</SelectItem>
                      <SelectItem value="Fruits">Fruits</SelectItem>
                      <SelectItem value="Céréales">Céréales</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" className="whitespace-nowrap bg-transparent">
                    <Filter className="h-4 w-4 mr-2" />
                    Filtres
                  </Button>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-2 right-2" variant="secondary">
                        {product.quality}
                      </Badge>
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                          <CardDescription>{product.supplier}</CardDescription>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-primary">{product.price}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Disponible:</span>
                          <span className="font-medium">{product.available}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Certification:</span>
                          <span className="font-medium">{product.certification}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Récolte:</span>
                          <span className="font-medium">{product.harvest}</span>
                        </div>
                      </div>

                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          <Eye className="h-4 w-4 mr-1" />
                          Détails
                        </Button>
                        <Button size="sm" className="flex-1">
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Commander
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "suppliers" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Fournisseurs</h1>
                <p className="text-muted-foreground">Gérez vos relations avec les producteurs</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {mockSuppliers.map((supplier) => (
                  <Card key={supplier.id} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <img
                        src={supplier.image || "/placeholder.svg"}
                        alt={supplier.name}
                        className="w-full h-full object-cover"
                      />
                      {supplier.verified && (
                        <Badge className="absolute top-2 right-2" variant="default">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Vérifié
                        </Badge>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{supplier.name}</CardTitle>
                          <CardDescription className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {supplier.location}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{supplier.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Produits:</span>
                          <span className="font-medium">{supplier.products}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {supplier.specialties.map((specialty) => (
                            <Badge key={specialty} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          <Eye className="h-4 w-4 mr-1" />
                          Profil
                        </Button>
                        <Button size="sm" className="flex-1">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Contacter
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">Commandes</h1>
                <p className="text-muted-foreground">Suivez vos commandes et livraisons</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Toutes les commandes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <div className="flex items-center gap-4">
                            <span className="font-medium">{order.id}</span>
                            <Badge
                              variant={order.status === "Livré" ? "default" : "secondary"}
                              className="flex items-center gap-1"
                            >
                              {order.status === "En transit" && <Truck className="h-3 w-3" />}
                              {order.status === "Livré" && <CheckCircle className="h-3 w-3" />}
                              {order.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {order.supplier} • {order.products}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              Commandé: {order.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Truck className="h-4 w-4" />
                              Livraison: {order.delivery}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold">{order.total}</p>
                          <Button variant="outline" size="sm">
                            Suivre
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Analyses</h1>
                <p className="text-muted-foreground">Analysez vos achats et performances</p>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <SpendingChart />
                <OrdersChart />
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Fournisseurs Principaux</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockSuppliers.map((supplier, index) => (
                      <div key={supplier.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-bold text-muted-foreground">#{index + 1}</span>
                          <div>
                            <p className="font-medium">{supplier.name}</p>
                            <p className="text-sm text-muted-foreground">{supplier.products} produits</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{supplier.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
