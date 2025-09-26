"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  ShoppingCart,
  Eye,
  Star,
  MapPin,
  Calendar,
  CheckCircle,
  Award,
  TrendingUp,
  Package,
} from "lucide-react"
import Link from "next/link"

const mockProducts = [
  {
    id: 1,
    name: "Tomates Bio Premium",
    supplier: "Ferme Bio Martin",
    location: "Provence, France",
    category: "Légumes",
    price: "3.50€/kg",
    originalPrice: "4.20€/kg",
    available: "2,500 kg",
    minOrder: "50 kg",
    quality: "Premium",
    certification: "Bio EU",
    harvest: "2024-01-10",
    rating: 4.8,
    reviews: 124,
    image: "/organic-tomatoes.png",
    verified: true,
    discount: 17,
    trending: true,
    inStock: true,
    stockLevel: "high",
  },
  {
    id: 2,
    name: "Blé Tendre de Qualité",
    supplier: "Coopérative Céréales Sud",
    location: "Occitanie, France",
    category: "Céréales",
    price: "0.25€/kg",
    originalPrice: "0.28€/kg",
    available: "50,000 kg",
    minOrder: "1000 kg",
    quality: "Standard",
    certification: "Agriculture Raisonnée",
    harvest: "2023-08-15",
    rating: 4.6,
    reviews: 89,
    image: "/single-wheat-grain.png",
    verified: true,
    discount: 11,
    trending: false,
    inStock: true,
    stockLevel: "high",
  },
  {
    id: 3,
    name: "Pommes de Terre Label Rouge",
    supplier: "Maraîchage Dupont",
    location: "Bretagne, France",
    category: "Légumes",
    price: "1.20€/kg",
    originalPrice: "1.35€/kg",
    available: "8,200 kg",
    minOrder: "100 kg",
    quality: "Premium",
    certification: "Label Rouge",
    harvest: "2024-01-05",
    rating: 4.9,
    reviews: 156,
    image: "/pile-of-potatoes.png",
    verified: true,
    discount: 11,
    trending: true,
    inStock: true,
    stockLevel: "medium",
  },
  {
    id: 4,
    name: "Carottes Bio Fraîches",
    supplier: "Ferme Bio Martin",
    location: "Provence, France",
    category: "Légumes",
    price: "2.80€/kg",
    originalPrice: "3.10€/kg",
    available: "1,200 kg",
    minOrder: "25 kg",
    quality: "Premium",
    certification: "Bio EU",
    harvest: "2024-01-12",
    rating: 4.7,
    reviews: 78,
    image: "/fresh-organic-carrots.jpg",
    verified: true,
    discount: 10,
    trending: false,
    inStock: true,
    stockLevel: "low",
  },
  {
    id: 5,
    name: "Avoine Complète",
    supplier: "Coopérative Céréales Sud",
    location: "Occitanie, France",
    category: "Céréales",
    price: "0.32€/kg",
    originalPrice: "0.38€/kg",
    available: "25,500 kg",
    minOrder: "500 kg",
    quality: "Standard",
    certification: "Agriculture Raisonnée",
    harvest: "2023-09-20",
    rating: 4.5,
    reviews: 67,
    image: "/oats-grain-cereal.jpg",
    verified: true,
    discount: 16,
    trending: false,
    inStock: true,
    stockLevel: "high",
  },
  {
    id: 6,
    name: "Courgettes de Saison",
    supplier: "Maraîchage Dupont",
    location: "Bretagne, France",
    category: "Légumes",
    price: "2.10€/kg",
    originalPrice: "2.40€/kg",
    available: "3,800 kg",
    minOrder: "30 kg",
    quality: "Standard",
    certification: "Agriculture Raisonnée",
    harvest: "2024-01-08",
    rating: 4.4,
    reviews: 92,
    image: "/fresh-zucchini-vegetables.jpg",
    verified: true,
    discount: 13,
    trending: true,
    inStock: true,
    stockLevel: "medium",
  },
  {
    id: 7,
    name: "Pommes Golden Bio",
    supplier: "Vergers des Alpes",
    location: "Rhône-Alpes, France",
    category: "Fruits",
    price: "2.90€/kg",
    originalPrice: "3.20€/kg",
    available: "4,500 kg",
    minOrder: "40 kg",
    quality: "Premium",
    certification: "Bio EU",
    harvest: "2023-10-15",
    rating: 4.6,
    reviews: 134,
    image: "/golden-apples.png",
    verified: true,
    discount: 9,
    trending: false,
    inStock: true,
    stockLevel: "high",
  },
  {
    id: 8,
    name: "Lentilles Vertes du Puy",
    supplier: "Coopérative Auvergne",
    location: "Auvergne, France",
    category: "Légumineuses",
    price: "4.50€/kg",
    originalPrice: "5.00€/kg",
    available: "1,800 kg",
    minOrder: "20 kg",
    quality: "Premium",
    certification: "AOC",
    harvest: "2023-09-05",
    rating: 4.9,
    reviews: 203,
    image: "/green-lentils.jpg",
    verified: true,
    discount: 10,
    trending: true,
    inStock: true,
    stockLevel: "low",
  },
]

const categories = ["Tous", "Légumes", "Fruits", "Céréales", "Légumineuses"]
const certifications = ["Toutes", "Bio EU", "Label Rouge", "Agriculture Raisonnée", "AOC"]
const qualities = ["Toutes", "Premium", "Standard"]

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("Tous")
  const [certificationFilter, setCertificationFilter] = useState("Toutes")
  const [qualityFilter, setQualityFilter] = useState("Toutes")
  const [sortBy, setSortBy] = useState("trending")

  const filteredProducts = mockProducts
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.location.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = categoryFilter === "Tous" || product.category === categoryFilter
      const matchesCertification = certificationFilter === "Toutes" || product.certification === certificationFilter
      const matchesQuality = qualityFilter === "Toutes" || product.quality === qualityFilter
      return matchesSearch && matchesCategory && matchesCertification && matchesQuality
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return Number.parseFloat(a.price) - Number.parseFloat(b.price)
        case "price-high":
          return Number.parseFloat(b.price) - Number.parseFloat(a.price)
        case "rating":
          return b.rating - a.rating
        case "trending":
        default:
          return b.trending ? 1 : -1
      }
    })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <img src="/AgriBridge-logo.png" alt="AgriBridge Logo" className="h-6 w-6" />
                <span className="text-xl font-bold text-primary">AgriBridge</span>
              </div>
              <Badge variant="secondary">Marché</Badge>
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

      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Marché Agricole AgriBridge</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Découvrez des produits agricoles frais, traçables et de qualité directement des producteurs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1,200+</div>
              <div className="text-sm text-muted-foreground">Producteurs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15,000+</div>
              <div className="text-sm text-muted-foreground">Produits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Livraison</div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-card p-6 rounded-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher des produits..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={certificationFilter} onValueChange={setCertificationFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Certification" />
              </SelectTrigger>
              <SelectContent>
                {certifications.map((cert) => (
                  <SelectItem key={cert} value={cert}>
                    {cert}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={qualityFilter} onValueChange={setQualityFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Qualité" />
              </SelectTrigger>
              <SelectContent>
                {qualities.map((quality) => (
                  <SelectItem key={quality} value={quality}>
                    {quality}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="trending">Tendances</SelectItem>
                <SelectItem value="price-low">Prix croissant</SelectItem>
                <SelectItem value="price-high">Prix décroissant</SelectItem>
                <SelectItem value="rating">Mieux notés</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">Produits disponibles</h2>
            <p className="text-muted-foreground">{filteredProducts.length} produits trouvés</p>
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filtres avancés
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {product.trending && (
                    <Badge variant="default" className="bg-orange-500">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Tendance
                    </Badge>
                  )}
                  {product.discount > 0 && <Badge variant="destructive">-{product.discount}%</Badge>}
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      product.stockLevel === "high"
                        ? "bg-green-100 text-green-800"
                        : product.stockLevel === "medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    Stock:{" "}
                    {product.stockLevel === "high" ? "Élevé" : product.stockLevel === "medium" ? "Moyen" : "Faible"}
                  </Badge>
                </div>
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-white/90">
                    {product.quality}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg line-clamp-1">{product.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <span>{product.supplier}</span>
                      {product.verified && <CheckCircle className="h-3 w-3 text-primary" />}
                    </CardDescription>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <MapPin className="h-3 w-3" />
                      {product.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-primary">{product.price}</span>
                        {product.originalPrice !== product.price && (
                          <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">Disponible: {product.available}</div>
                      <div className="text-xs text-muted-foreground">Commande min: {product.minOrder}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Certification:</span>
                      <Badge variant="outline" className="text-xs">
                        <Award className="h-3 w-3 mr-1" />
                        {product.certification}
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Récolte:</span>
                      <span className="font-medium flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {product.harvest}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Eye className="h-4 w-4 mr-1" />
                      Détails
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Commander
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Package className="h-4 w-4 mr-2" />
            Charger plus de produits
          </Button>
        </div>
      </div>
    </div>
  )
}
