"use client"

import { doctorConfig } from "@/config/doctor-config"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Mail, Clock, CreditCard } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ContactSection() {
  const { language, isRTL } = useLanguage()
  const t = doctorConfig.translations[language]

  return (
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.contactTitle}</h2>
          <p className="text-lg md:text-xl text-gray-600">{t.contactDescription}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className={`flex items-center space-x-2 text-lg md:text-xl ${isRTL ? "space-x-reverse" : ""}`}>
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                <span>{t.contactInfo}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4">
              <a
                href={`tel:${doctorConfig.phone}`}
                className={`flex items-center space-x-3 hover:text-blue-600 transition-colors ${isRTL ? "space-x-reverse" : ""}`}
              >
                <Phone className="h-3 w-3 md:h-4 md:w-4 text-gray-400 flex-shrink-0" />
                <span className="text-sm md:text-base">{doctorConfig.phone}</span>
              </a>
              <a
                href={`mailto:${doctorConfig.email}`}
                className={`flex items-center space-x-3 hover:text-blue-600 transition-colors ${isRTL ? "space-x-reverse" : ""}`}
              >
                <Mail className="h-3 w-3 md:h-4 md:w-4 text-gray-400 flex-shrink-0" />
                <span className="text-sm md:text-base break-all">{doctorConfig.email}</span>
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(doctorConfig.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-start space-x-3 hover:text-blue-600 transition-colors ${isRTL ? "space-x-reverse" : ""}`}
              >
                <MapPin className="h-3 w-3 md:h-4 md:w-4 text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-sm md:text-base">
                  {language === "ar" ? doctorConfig.arabic.address : doctorConfig.address}
                </span>
              </a>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4" asChild>
                <a href={`tel:${doctorConfig.phone}`}>
                  <Phone className={`h-3 w-3 md:h-4 md:w-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                  {t.callToBook}
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <CardTitle className={`flex items-center space-x-2 text-lg md:text-xl ${isRTL ? "space-x-reverse" : ""}`}>
                <Clock className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                <span>{t.officeHours}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {doctorConfig.officeHours.map((schedule, index) => {
                  const day = language === "ar" ? schedule.dayAr : schedule.day
                  const hours = language === "ar" ? schedule.hoursAr : schedule.hours

                  return (
                    <div key={index} className="flex justify-between text-sm md:text-base">
                      <span className="font-medium">{day}</span>
                      <span className={`text-gray-600 ${isRTL ? "text-left" : "text-right"}`}>{hours}</span>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <CardTitle className={`flex items-center space-x-2 text-lg md:text-xl ${isRTL ? "space-x-reverse" : ""}`}>
                <CreditCard className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                <span>{t.insuranceAccepted}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {doctorConfig.acceptedInsurance.map((insurance, index) => (
                  <div key={index} className={`flex items-center space-x-2 ${isRTL ? "space-x-reverse" : ""}`}>
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-xs md:text-sm">{insurance}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs md:text-sm text-gray-600 mt-3 md:mt-4">{t.insuranceNote}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
