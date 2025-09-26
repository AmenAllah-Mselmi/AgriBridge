"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "fr" | "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.solutions": "Solutions",
    "nav.marketplace": "Marketplace",
    "nav.contact": "Contact",
    "nav.signin": "Connexion",
    "nav.signup": "Inscription",

    // Common
    "common.loading": "Chargement...",
    "common.submit": "Envoyer",
    "common.cancel": "Annuler",
    "common.save": "Enregistrer",
    "common.edit": "Modifier",
    "common.delete": "Supprimer",

    // Auth
    "auth.signin": "Connexion",
    "auth.signup": "Inscription",
    "auth.email": "Email",
    "auth.password": "Mot de passe",
    "auth.userType": "Type de compte",
    "auth.farmer": "Agriculteur",
    "auth.company": "Entreprise",

    // Dashboard
    "dashboard.welcome": "Bienvenue",
    "dashboard.orders": "Commandes",
    "dashboard.products": "Produits",
    "dashboard.analytics": "Analyses",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.solutions": "Solutions",
    "nav.marketplace": "Marketplace",
    "nav.contact": "Contact",
    "nav.signin": "Sign In",
    "nav.signup": "Sign Up",

    // Common
    "common.loading": "Loading...",
    "common.submit": "Submit",
    "common.cancel": "Cancel",
    "common.save": "Save",
    "common.edit": "Edit",
    "common.delete": "Delete",

    // Auth
    "auth.signin": "Sign In",
    "auth.signup": "Sign Up",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.userType": "Account Type",
    "auth.farmer": "Farmer",
    "auth.company": "Company",

    // Dashboard
    "dashboard.welcome": "Welcome",
    "dashboard.orders": "Orders",
    "dashboard.products": "Products",
    "dashboard.analytics": "Analytics",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.solutions": "الحلول",
    "nav.marketplace": "السوق",
    "nav.contact": "اتصل بنا",
    "nav.signin": "تسجيل الدخول",
    "nav.signup": "إنشاء حساب",

    // Common
    "common.loading": "جاري التحميل...",
    "common.submit": "إرسال",
    "common.cancel": "إلغاء",
    "common.save": "حفظ",
    "common.edit": "تعديل",
    "common.delete": "حذف",

    // Auth
    "auth.signin": "تسجيل الدخول",
    "auth.signup": "إنشاء حساب",
    "auth.email": "البريد الإلكتروني",
    "auth.password": "كلمة المرور",
    "auth.userType": "نوع الحساب",
    "auth.farmer": "مزارع",
    "auth.company": "شركة",

    // Dashboard
    "dashboard.welcome": "مرحباً",
    "dashboard.orders": "الطلبات",
    "dashboard.products": "المنتجات",
    "dashboard.analytics": "التحليلات",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("AgriBridge-language") as Language
    if (savedLanguage && ["fr", "en", "ar"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
      document.documentElement.lang = savedLanguage
      document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr"
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("AgriBridge-language", lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
