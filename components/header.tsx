"use client"

import { doctorConfig } from "@/config/doctor-config"
import { Phone, MapPin, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, isRTL } = useLanguage()
  const t = doctorConfig.translations[language]

  const clinicName = language === "ar" ? doctorConfig.arabic.clinicName : doctorConfig.clinicName
  const location = language === "ar" ? doctorConfig.arabic.location : doctorConfig.location

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between h-16 ${isRTL ? "flex-row-reverse" : ""}`}>
          <div className={`flex items-center space-x-4 ${isRTL ? "space-x-reverse" : ""}`}>
            <h1 className="text-lg md:text-xl font-bold text-blue-900 truncate">{clinicName}</h1>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center space-x-6 ${isRTL ? "space-x-reverse" : ""}`}>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(doctorConfig.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors ${isRTL ? "space-x-reverse" : ""}`}
            >
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </a>
            <a
              href={`tel:${doctorConfig.phone}`}
              className={`flex items-center space-x-2 hover:text-blue-800 transition-colors ${isRTL ? "space-x-reverse" : ""}`}
            >
              <Phone className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-blue-900">{doctorConfig.phone}</span>
            </a>
            <LanguageSwitcher />
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <a href={`tel:${doctorConfig.phone}`}>{t.bookAppointment}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <Button variant="outline" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white py-4 space-y-4">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(doctorConfig.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors ${isRTL ? "space-x-reverse" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </a>
            <a
              href={`tel:${doctorConfig.phone}`}
              className={`flex items-center space-x-2 hover:text-blue-800 transition-colors ${isRTL ? "space-x-reverse" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-blue-900">{doctorConfig.phone}</span>
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700 w-full" asChild>
              <a href={`tel:${doctorConfig.phone}`} onClick={() => setIsMenuOpen(false)}>
                {t.bookAppointment}
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
