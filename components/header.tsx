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
      <div className="container mx-auto px-3 sm:px-4">
        {/* Main Header Row */}
        <div className={`flex items-center justify-between h-14 sm:h-16 ${isRTL ? "flex-row-reverse" : ""}`}>
          {/* Logo/Clinic Name - Flexible width */}
          <div className="flex-1 min-w-0">
            <h1 className="text-base sm:text-lg md:text-xl font-bold text-blue-900 truncate pr-2">{clinicName}</h1>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className={`hidden lg:flex items-center space-x-4 xl:space-x-6 ${isRTL ? "space-x-reverse" : ""}`}>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(doctorConfig.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors ${isRTL ? "space-x-reverse" : ""}`}
            >
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span className="whitespace-nowrap">{location}</span>
            </a>
            <a
              href={`tel:${doctorConfig.phone}`}
              className={`flex items-center space-x-2 hover:text-blue-800 transition-colors ${isRTL ? "space-x-reverse" : ""}`}
            >
              <Phone className="h-4 w-4 text-blue-600 flex-shrink-0" />
              <span className="font-semibold text-blue-900 whitespace-nowrap">{doctorConfig.phone}</span>
            </a>
            <LanguageSwitcher />
            <Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap" asChild>
              <a href={`tel:${doctorConfig.phone}`}>{t.bookAppointment}</a>
            </Button>
          </div>

          {/* Mobile Controls - Compact layout */}
          <div className={`lg:hidden flex items-center space-x-2 ${isRTL ? "space-x-reverse" : ""}`}>
            {/* Language Switcher - Compact version for mobile */}
            <div className="flex-shrink-0">
              <LanguageSwitcher />
            </div>

            {/* Menu Toggle Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 flex-shrink-0"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Improved layout */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            {/* Contact Information Section */}
            <div className="py-4 space-y-3">
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">{t.contactInfo}</div>

              <a
                href={`tel:${doctorConfig.phone}`}
                className={`flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50 transition-colors ${isRTL ? "space-x-reverse" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-900">{t.callNow}</div>
                  <div className="text-sm text-gray-600">{doctorConfig.phone}</div>
                </div>
              </a>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(doctorConfig.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50 transition-colors ${isRTL ? "space-x-reverse" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-900">Visit Us</div>
                  <div className="text-sm text-gray-600 truncate">{location}</div>
                </div>
              </a>
            </div>

            {/* Action Buttons Section */}
            <div className="pb-4 space-y-2">
              <Button className="bg-blue-600 hover:bg-blue-700 w-full justify-center" asChild>
                <a href={`tel:${doctorConfig.phone}`} onClick={() => setIsMenuOpen(false)}>
                  <Phone className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                  {t.bookAppointment}
                </a>
              </Button>

              <Button
                variant="outline"
                className="w-full justify-center"
                onClick={() => {
                  setIsMenuOpen(false)
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t.learnMore || "Learn More"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
