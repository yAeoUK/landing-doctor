"use client"

import { doctorConfig } from "@/config/doctor-config"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function TestimonialsSection() {
  const { language, isRTL } = useLanguage()
  const t = doctorConfig.translations[language]

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.testimonialsTitle}</h2>
          <p className="text-lg md:text-xl text-gray-600">{t.testimonialsDescription}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {doctorConfig.testimonials.map((testimonial, index) => {
            const testimonialName = language === "ar" ? testimonial.nameAr : testimonial.name
            const testimonialText = language === "ar" ? testimonial.textAr : testimonial.text

            return (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-4 md:p-6">
                  <div className={`flex mb-3 md:mb-4 ${isRTL ? "justify-end" : ""}`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 italic">"{testimonialText}"</p>
                  <div className="font-semibold text-gray-900 text-sm md:text-base">- {testimonialName}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
