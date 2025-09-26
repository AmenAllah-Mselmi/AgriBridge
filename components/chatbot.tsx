"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Send, X, Bot, User, Minimize2, Maximize2, Leaf } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
  suggestions?: string[]
}

const chatbotTranslations = {
  fr: {
    greeting: "Bonjour ! Je suis l'assistant AgriBridge. Comment puis-je vous aider aujourd'hui ?",
    placeholder: "Tapez votre message...",
    online: "En ligne",
    suggestions: {
      findBio: "Trouver des produits bio",
      certifications: "Informations sur les certifications",
      orderHelp: "Aide pour passer commande",
      contactProducer: "Contacter un producteur",
    },
  },
  en: {
    greeting: "Hello! I'm the AgriBridge assistant. How can I help you today?",
    placeholder: "Type your message...",
    online: "Online",
    suggestions: {
      findBio: "Find organic products",
      certifications: "Certification information",
      orderHelp: "Help with ordering",
      contactProducer: "Contact a producer",
    },
  },
  ar: {
    greeting: "مرحباً! أنا مساعد AgriBridge. كيف يمكنني مساعدتك اليوم؟",
    placeholder: "اكتب رسالتك...",
    online: "متصل",
    suggestions: {
      findBio: "العثور على المنتجات العضوية",
      certifications: "معلومات الشهادات",
      orderHelp: "مساعدة في الطلب",
      contactProducer: "الاتصال بالمنتج",
    },
  },
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { language, t } = useLanguage()

  // Initialize messages when language changes
  useEffect(() => {
    const initialMessage: Message = {
      id: "1",
      content: chatbotTranslations[language].greeting,
      sender: "bot",
      timestamp: new Date(),
      suggestions: Object.values(chatbotTranslations[language].suggestions),
    }
    setMessages([initialMessage])
  }, [language])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateBotResponse = (userMessage: string): { content: string; suggestions?: string[] } => {
    const lowerMessage = userMessage.toLowerCase()

    // Simple multilingual responses
    if (language === "fr") {
      if (lowerMessage.includes("bio") || lowerMessage.includes("organique")) {
        return {
          content:
            "Je peux vous aider à trouver des produits biologiques certifiés. Nous avons des légumes, fruits, céréales et légumineuses bio.",
          suggestions: ["Légumes bio", "Fruits bio", "Céréales bio", "Voir tous les produits bio"],
        }
      }
      if (lowerMessage.includes("prix") || lowerMessage.includes("coût")) {
        return {
          content:
            "Nos prix sont compétitifs : Tomates bio 3.50€/kg, Blé 0.25€/kg, Pommes de terre 1.20€/kg. Commande minimum variable selon le produit.",
          suggestions: ["Voir tous les prix", "Calculer ma commande", "Remises en gros"],
        }
      }
    } else if (language === "en") {
      if (lowerMessage.includes("organic") || lowerMessage.includes("bio")) {
        return {
          content:
            "I can help you find certified organic products. We have organic vegetables, fruits, cereals and legumes.",
          suggestions: ["Organic vegetables", "Organic fruits", "Organic cereals", "View all organic products"],
        }
      }
      if (lowerMessage.includes("price") || lowerMessage.includes("cost")) {
        return {
          content:
            "Our competitive prices: Organic tomatoes €3.50/kg, Wheat €0.25/kg, Potatoes €1.20/kg. Minimum order varies by product.",
          suggestions: ["View all prices", "Calculate my order", "Bulk discounts"],
        }
      }
    } else if (language === "ar") {
      if (lowerMessage.includes("عضوي") || lowerMessage.includes("طبيعي")) {
        return {
          content: "يمكنني مساعدتك في العثور على المنتجات العضوية المعتمدة. لدينا خضروات وفواكه وحبوب وبقوليات عضوية.",
          suggestions: ["خضروات عضوية", "فواكه عضوية", "حبوب عضوية", "عرض جميع المنتجات العضوية"],
        }
      }
      if (lowerMessage.includes("سعر") || lowerMessage.includes("تكلفة")) {
        return {
          content:
            "أسعارنا تنافسية: طماطم عضوية 3.50€/كغ، قمح 0.25€/كغ، بطاطس 1.20€/كغ. الحد الأدنى للطلب يختلف حسب المنتج.",
          suggestions: ["عرض جميع الأسعار", "حساب طلبي", "خصومات الجملة"],
        }
      }
    }

    return {
      content:
        language === "fr"
          ? "Je ne suis pas sûr de comprendre. Pouvez-vous reformuler ?"
          : language === "en"
            ? "I'm not sure I understand. Could you rephrase?"
            : "لست متأكداً من فهمي. هل يمكنك إعادة الصياغة؟",
      suggestions: Object.values(chatbotTranslations[language].suggestions),
    }
  }

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const botResponse = generateBotResponse(content)
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: botResponse.content,
      sender: "bot",
      timestamp: new Date(),
      suggestions: botResponse.suggestions,
    }

    setIsTyping(false)
    setMessages((prev) => [...prev, botMessage])
  }

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage(inputValue)
    }
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 animate-pulse"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    )
  }

  return (
    <Card className={`fixed bottom-6 right-6 w-80 shadow-xl z-50 transition-all ${isMinimized ? "h-16" : "h-96"}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-primary text-primary-foreground rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-sm">
          <Leaf className="h-4 w-4" />
          Assistant AgriBridge
          <Badge variant="secondary" className="text-xs bg-primary-foreground/20 text-primary-foreground">
            {chatbotTranslations[language].online}
          </Badge>
        </CardTitle>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-primary-foreground hover:bg-primary-foreground/20"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 text-primary-foreground hover:bg-primary-foreground/20"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="flex flex-col h-80 p-0">
          {/* Messages */}
          <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${language === "ar" ? "text-right" : "text-left"}`}>
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`flex items-start gap-2 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {message.sender === "user" ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                  </div>
                  <div
                    className={`rounded-lg p-3 ${
                      message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    {message.suggestions && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {message.suggestions.map((suggestion, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="text-xs h-6 bg-background/50 hover:bg-background"
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            {suggestion}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center">
                    <Bot className="h-3 w-3" />
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={chatbotTranslations[language].placeholder}
                className="flex-1"
                dir={language === "ar" ? "rtl" : "ltr"}
              />
              <Button size="icon" onClick={() => handleSendMessage(inputValue)} disabled={!inputValue.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
