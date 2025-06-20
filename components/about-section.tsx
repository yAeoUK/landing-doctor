"use client"

import { doctorConfig } from "@/config/doctor-config"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function AboutSection() {
  const { language, isRTL } = useLanguage()
  const t = doctorConfig.translations[language]

  const doctorName = language === "ar" ? doctorConfig.arabic.doctorName : doctorConfig.doctorName
  const specialty = language === "ar" ? doctorConfig.arabic.specialty : doctorConfig.specialty

  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t.aboutTitle} {doctorName}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.aboutDescription.replace(
              "specialist",
              `${specialty.toLowerCase()} ${t.aboutDescription.split("specialist")[1]}`,
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">{t.specializations}</h3>
            <div className="grid gap-3 md:gap-4">
              {(language === "ar" ? doctorConfig.specializationsAr : doctorConfig.specializations).map(
                (specialization, index) => (
                  <div key={index} className={`flex items-center space-x-3 ${isRTL ? "space-x-reverse" : ""}`}>
                    <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm md:text-base text-gray-700">{specialization}</span>
                  </div>
                ),
              )}
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 mt-8 md:mt-10">
              {t.specialPrograms}
            </h3>
            <div className="space-y-3 md:space-y-4">
              {doctorConfig.specialPrograms.map((program, index) => {
                const programName = language === "ar" ? program.nameAr : program.name
                const programDescription = language === "ar" ? program.descriptionAr : program.description

                return (
                  <Card key={index}>
                    <CardContent className="p-3 md:p-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">{programName}</h4>
                      <p className="text-gray-600 text-xs md:text-sm">{programDescription}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">{t.credentialsTitle}</h3>
            <div className="space-y-2 md:space-y-3">
              {(language === "ar" ? doctorConfig.credentialsAr : doctorConfig.credentials).map((credential, index) => (
                <div key={index} className={`flex items-start space-x-3 ${isRTL ? "space-x-reverse" : ""}`}>
                  <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-gray-700">{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
