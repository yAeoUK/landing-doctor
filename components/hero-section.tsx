"use client"

import { doctorConfig } from "@/config/doctor-config"
import { Button } from "@/components/ui/button"
import { Phone, Award, Users, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function HeroSection() {
  const { language, isRTL } = useLanguage()
  const t = doctorConfig.translations[language]

  const doctorName = language === "ar" ? doctorConfig.arabic.doctorName : doctorConfig.doctorName
  const specialty = language === "ar" ? doctorConfig.arabic.specialty : doctorConfig.specialty
  const location = language === "ar" ? doctorConfig.arabic.location : doctorConfig.location

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isRTL ? "lg:grid-flow-col-dense" : ""}`}>
          <div className={isRTL ? "lg:col-start-2" : ""}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              {t.expertCare} {specialty} {t.careIn} {location}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
              {doctorName} {t.heroDescription}
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8 ${isRTL ? "sm:flex-row-reverse" : ""}`}
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto" asChild>
                <a href={`tel:${doctorConfig.phone}`}>
                  <Phone className={`h-5 w-5 ${isRTL ? "ml-2" : "mr-2"}`} />
                  {t.callNow} {doctorConfig.phone}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                {t.learnMore}
              </Button>
            </div>

            {/* Mobile-optimized stats section */}
            <div className="pt-6 md:pt-8 border-t">
              {/* Mobile: Single column layout */}
              <div className="grid grid-cols-1 gap-4 sm:hidden">
                <div
                  className={`flex items-center justify-center space-x-3 p-3 bg-white rounded-lg shadow-sm ${isRTL ? "space-x-reverse" : ""}`}
                >
                  <Award className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">15+ {t.yearsExperience}</div>
                  </div>
                </div>
                <div
                  className={`flex items-center justify-center space-x-3 p-3 bg-white rounded-lg shadow-sm ${isRTL ? "space-x-reverse" : ""}`}
                >
                  <Users className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">5000+ {t.patientsTreated}</div>
                  </div>
                </div>
                <div
                  className={`flex items-center justify-center space-x-3 p-3 bg-white rounded-lg shadow-sm ${isRTL ? "space-x-reverse" : ""}`}
                >
                  <Clock className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900">24/7 {t.emergencySupport}</div>
                  </div>
                </div>
              </div>

              {/* Tablet and Desktop: Three column layout */}
              <div className="hidden sm:grid sm:grid-cols-3 gap-4 md:gap-6">
                <div className="text-center">
                  <Award className="h-6 w-6 md:h-8 md:w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-xl md:text-2xl font-bold text-gray-900">15+</div>
                  <div className="text-xs md:text-sm text-gray-600">{t.yearsExperience}</div>
                </div>
                <div className="text-center">
                  <Users className="h-6 w-6 md:h-8 md:w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-xl md:text-2xl font-bold text-gray-900">5000+</div>
                  <div className="text-xs md:text-sm text-gray-600">{t.patientsTreated}</div>
                </div>
                <div className="text-center">
                  <Clock className="h-6 w-6 md:h-8 md:w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-xl md:text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-xs md:text-sm text-gray-600">{t.emergencySupport}</div>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative ${isRTL ? "lg:col-start-1" : "order-first lg:order-last"}`}>
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt={`${doctorName} - ${specialty} Specialist`}
              width={500}
              height={600}
              className="rounded-lg shadow-xl w-full h-auto max-w-md mx-auto lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
