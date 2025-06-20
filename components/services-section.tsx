"use client"

import { doctorConfig } from "@/config/doctor-config"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Activity, TrendingUp, BarChart3, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const iconMap = {
  Heart,
  Shield,
  Activity,
  TrendingUp,
  BarChart3,
  Zap,
}

export function ServicesSection() {
  const { language, isRTL } = useLanguage()
  const t = doctorConfig.translations[language]

  return (
    <section id="services" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.servicesTitle}</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{t.servicesDescription}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {doctorConfig.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            const serviceName = language === "ar" ? service.nameAr : service.name
            const serviceDescription = language === "ar" ? service.descriptionAr : service.description

            return (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader className="pb-4">
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 md:mb-4 ${isRTL ? "ml-auto" : ""}`}
                  >
                    <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg md:text-xl">{serviceName}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm md:text-base text-gray-600">{serviceDescription}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
