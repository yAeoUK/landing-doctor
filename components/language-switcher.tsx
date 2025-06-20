"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "ar" : "en")}
      className="flex items-center space-x-1.5 px-2.5 py-1.5 h-8 text-xs font-medium border-gray-300 hover:border-blue-300 hover:bg-blue-50 transition-colors"
      aria-label={`Switch to ${language === "en" ? "Arabic" : "English"}`}
    >
      <Globe className="h-3.5 w-3.5 flex-shrink-0" />
      <span className="hidden xs:inline whitespace-nowrap">{language === "en" ? "عربي" : "EN"}</span>
      <span className="xs:hidden">{language === "en" ? "ع" : "EN"}</span>
    </Button>
  )
}
