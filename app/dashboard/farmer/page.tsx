"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  Package,
  TrendingUp,
  Users,
  Euro,
  Plus,
  Eye,
  Edit,
  Trash2,
  MessageCircle,
  Bell,
  Settings,
  LogOut,
  Leaf,
  Calendar,
  Star,
} from "lucide-react"
import { SalesChart } from "@/components/charts/sales-chart"
import { OrdersChart } from "@/components/charts/orders-chart"
import { ThemeToggle } from "@/components/theme-toggle"

// Mock data for farmer dashboard
const mockProducts = [
  {
    id: 1,
    name: "Tomates Bio",
    category: "Légumes",
    quantity: "500 kg",
    price: "3.50€/kg",
    status: "Disponible",
    image: "/organic-tomatoes.png",
    orders: 12,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Pommes de Terre",
    category: "Légumes",
    quantity: "1200 kg",
    price: "1.20€/kg",
    status: "Disponible",
    image: "/pile-of-potatoes.png",
    orders: 8,
    rating: 4.6,
  },
  {
    id: 3,
    name: "Blé Tendre",
    category: "Céréales",
    quantity: "2000 kg",
    price: "0.25€/kg",
    status: "Épuisé",
    image: "/single-wheat-grain.png",
    orders: 15,
    rating: 4.9,
  },
]

const mockOrders = [
  {
    id: "CMD-001",
    buyer: "SuperMarché Bio+",
    product: "Tomates Bio",
    quantity: "100 kg",
    total: "350€",
    status: "En cours",
    date: "2024-01-15",
  },
  {
    id: "CMD-002",
    buyer: "Export Fruits SA",
    product: "Pommes de Terre",
    quantity: "500 kg",
    total: "600€",
    status: "Livré",
    date: "2024-01-12",
  },
]

export default function FarmerDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">AgriBridge</span>
            </div>
            <Badge variant="secondary">Agriculteur</Badge>
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
                variant={activeTab === "products" ? "default" : "ghost"}
                className="whitespace-nowrap md:w-full md:justify-start"
                onClick={() => setActiveTab("products")}
              >
                <Package className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">Mes Produits</span>
              </Button>
              <Button
                variant={activeTab === "orders" ? "default" : "ghost"}
                className="whitespace-nowrap md:w-full md:justify-start"
                onClick={() => setActiveTab("orders")}
              >
                <Users className="h-4 w-4 md:mr-2" />
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
                <p className="text-muted-foreground">Bienvenue sur votre espace agriculteur</p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Produits Actifs</CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-muted-foreground">+2 ce mois</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Commandes</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">35</div>
                    <p className="text-xs text-muted-foreground">+12% ce mois</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Revenus</CardTitle>
                    <Euro className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8,450€</div>
                    <p className="text-xs text-muted-foreground">+18% ce mois</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Note Moyenne</CardTitle>
                    <Star className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4.7</div>
                    <p className="text-xs text-muted-foreground">Excellent</p>
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
                      {mockOrders.slice(0, 3).map((order) => (
                        <div key={order.id} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{order.buyer}</p>
                            <p className="text-sm text-muted-foreground">{order.product}</p>
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
                    <CardTitle>Produits Populaires</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockProducts.slice(0, 3).map((product) => (
                        <div key={product.id} className="flex items-center gap-4">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <p className="font-medium">{product.name}</p>
                            <p className="text-sm text-muted-foreground">{product.orders} commandes</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{product.rating}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "products" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">Mes Produits</h1>
                  <p className="text-muted-foreground">Gérez vos produits agricoles</p>
                </div>
                <Button className="w-full sm:w-auto">
                  <Plus className="h-4 w-4 mr-2" />
                  Ajouter un produit
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {mockProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <Badge
                        className="absolute top-2 right-2"
                        variant={product.status === "Disponible" ? "default" : "secondary"}
                      >
                        {product.status}
                      </Badge>
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                          <CardDescription>{product.category}</CardDescription>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{product.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Quantité:</span>
                          <span className="text-sm font-medium">{product.quantity}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Prix:</span>
                          <span className="text-sm font-medium">{product.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Commandes:</span>
                          <span className="text-sm font-medium">{product.orders}</span>
                        </div>
                      </div>

                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          <Eye className="h-4 w-4 mr-1" />
                          Voir
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          <Edit className="h-4 w-4 mr-1" />
                          Modifier
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
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
                            <Badge variant={order.status === "Livré" ? "default" : "secondary"}>{order.status}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {order.buyer} • {order.product} • {order.quantity}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {order.date}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold">{order.total}</p>
                          <Button variant="outline" size="sm">
                            Détails
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
                <p className="text-muted-foreground">Analysez vos performances et tendances</p>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <SalesChart />
                <OrdersChart />
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Produits les Plus Vendus</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockProducts.map((product, index) => (
                      <div key={product.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-lg font-bold text-muted-foreground">#{index + 1}</span>
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <p className="text-sm text-muted-foreground">{product.orders} commandes</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{product.price}</p>
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
