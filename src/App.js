import { HeroSection } from "./components/HeroSection"
import { ServicesSection } from "./components/ServicesSection"
import { AboutSection } from "./components/AboutSection"
import { TestimonialsSection } from "./components/TestimonialsSection"
import { BlogSection } from "./components/BlogSection"
import { ContactSection } from "./components/ContactSection"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { ScrollHandler } from "./components/ScrollHandler"
import "./App.css"

function App() {
  return (
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
  )
}

export default App
