import { doctorConfig } from "../config/doctorConfig"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card"
import { Heart, Shield, Activity, TrendingUp, BarChart3, Zap } from "./icons/Icons"

const iconMap = {
  Heart,
  Shield,
  Activity,
  TrendingUp,
  BarChart3,
  Zap,
}

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive cardiovascular care tailored to your individual needs, from prevention to advanced treatment
            options.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorConfig.services.map((service, index) => {
            const IconComponent = iconMap[service.icon]
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
