"use client"

import { doctorConfig } from "@/config/doctor-config"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function BlogSection() {
  const { language, isRTL } = useLanguage()
  const t = doctorConfig.translations[language]

  return (
    <section id="blog" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.blogTitle}</h2>
          <p className="text-lg md:text-xl text-gray-600">{t.blogDescription}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {doctorConfig.blogPosts.map((post, index) => {
            const postTitle = language === "ar" ? post.titleAr : post.title
            const postExcerpt = language === "ar" ? post.excerptAr : post.excerpt
            const postDate = language === "ar" ? post.dateAr : post.date
            const postReadTime = language === "ar" ? post.readTimeAr : post.readTime

            return (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardHeader className="flex-grow">
                  <CardTitle className="text-lg md:text-xl">{postTitle}</CardTitle>
                  <div
                    className={`flex items-center space-x-3 md:space-x-4 text-xs md:text-sm text-gray-500 ${isRTL ? "space-x-reverse" : ""}`}
                  >
                    <div className={`flex items-center space-x-1 ${isRTL ? "space-x-reverse" : ""}`}>
                      <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                      <span>{postDate}</span>
                    </div>
                    <div className={`flex items-center space-x-1 ${isRTL ? "space-x-reverse" : ""}`}>
                      <Clock className="h-3 w-3 md:h-4 md:w-4" />
                      <span>{postReadTime}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col justify-between">
                  <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">{postExcerpt}</p>
                  <Button variant="outline" size="sm" className="w-full md:w-auto">
                    {t.readMore}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="w-full md:w-auto">
            {t.viewAllArticles}
          </Button>
        </div>
      </div>
    </section>
  )
}
