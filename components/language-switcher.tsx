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
      className="flex items-center space-x-2"
    >
      <Globe className="h-4 w-4" />
      <span>{language === "en" ? "العربية" : "English"}</span>
    </Button>
  )
}
