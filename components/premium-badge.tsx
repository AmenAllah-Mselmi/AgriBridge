"use client"

import { Badge } from "@/components/ui/badge"
import { Crown, Sparkles } from "lucide-react"

interface PremiumBadgeProps {
  variant?: "default" | "small" | "icon"
  className?: string
}

export function PremiumBadge({ variant = "default", className = "" }: PremiumBadgeProps) {
  if (variant === "icon") {
    return (
      <div
        className={`inline-flex items-center justify-center w-6 h-6 bg-gradient-to-r from-purple-500 to-primary rounded-full ${className}`}
      >
        <Crown className="h-3 w-3 text-white" />
      </div>
    )
  }

  if (variant === "small") {
    return (
      <Badge className={`bg-gradient-to-r from-purple-500 to-primary text-white text-xs ${className}`}>
        <Crown className="h-3 w-3 mr-1" />
        Premium
      </Badge>
    )
  }

  return (
    <Badge className={`bg-gradient-to-r from-purple-500 to-primary text-white ${className}`}>
      <Sparkles className="h-4 w-4 mr-1" />
      Premium
    </Badge>
  )
}
