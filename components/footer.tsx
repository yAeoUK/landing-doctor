"use client"

import { doctorConfig } from "@/config/doctor-config"
import { Phone, MapPin, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { language, isRTL } = useLanguage()
  const t = doctorConfig.translations[language]

  const clinicName = language === "ar" ? doctorConfig.arabic.clinicName : doctorConfig.clinicName
  const specialty = language === "ar" ? doctorConfig.arabic.specialty : doctorConfig.specialty
  const location = language === "ar" ? doctorConfig.arabic.location : doctorConfig.location
  const doctorName = language === "ar" ? doctorConfig.arabic.doctorName : doctorConfig.doctorName

  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{clinicName}</h3>
            <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
              {t.footerDescription.replace(
                "care",
                `${specialty.toLowerCase()} ${t.footerDescription.split("care")[1]}`,
              )}
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${doctorConfig.phone}`}
                className={`flex items-center space-x-2 hover:text-blue-400 transition-colors text-sm md:text-base ${isRTL ? "space-x-reverse" : ""}`}
              >
                <Phone className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                <span>{doctorConfig.phone}</span>
              </a>
              <a
                href={`mailto:${doctorConfig.email}`}
                className={`flex items-center space-x-2 hover:text-blue-400 transition-colors text-sm md:text-base break-all ${isRTL ? "space-x-reverse" : ""}`}
              >
                <Mail className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                <span>{doctorConfig.email}</span>
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(doctorConfig.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 hover:text-blue-400 transition-colors text-sm md:text-base ${isRTL ? "space-x-reverse" : ""}`}
              >
                <MapPin className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                <span>{location}</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
              <li>
                <a href="#home" className="hover:text-white transition-colors cursor-pointer">
                  {t.home}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors cursor-pointer">
                  {t.about} {doctorName.split(" ")[1] || doctorName}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors cursor-pointer">
                  {t.services}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors cursor-pointer">
                  {t.testimonials}
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors cursor-pointer">
                  {t.blog}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors cursor-pointer">
                  {t.contact}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">{t.emergency}</h4>
            <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">{t.emergencyText}</p>
            <p className="text-gray-300 text-sm md:text-base">
              {t.urgentCare}
              <a
                href="tel:(555)911-4327"
                className="font-semibold text-white block hover:text-blue-400 transition-colors mt-1"
              >
                {t.emergencyNumber}
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400 text-sm md:text-base">
          <p>
            &copy; {new Date().getFullYear()} {clinicName}. {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
