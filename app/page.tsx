import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollHandler } from "@/components/scroll-handler"
import { LanguageProvider } from "@/contexts/language-context"
import { doctorConfig } from "@/config/doctor-config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `${doctorConfig.doctorName} - ${doctorConfig.specialty} | ${doctorConfig.clinicName}`,
  description: `Expert ${doctorConfig.specialty.toLowerCase()} care with ${doctorConfig.doctorName} in ${doctorConfig.location}. Comprehensive cardiovascular services, preventive care, and personalized treatment plans.`,
  keywords: `${doctorConfig.doctorName}, ${doctorConfig.specialty}, cardiologist, heart doctor, ${doctorConfig.location}, cardiovascular care, heart health`,
  authors: [{ name: doctorConfig.clinicName }],
  openGraph: {
    title: `${doctorConfig.doctorName} - ${doctorConfig.specialty}`,
    description: `Expert ${doctorConfig.specialty.toLowerCase()} care in ${doctorConfig.location}`,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${doctorConfig.doctorName} - ${doctorConfig.specialty}`,
    description: `Expert ${doctorConfig.specialty.toLowerCase()} care in ${doctorConfig.location}`,
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
}

export default function DoctorLandingPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <ScrollHandler />
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <TestimonialsSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
