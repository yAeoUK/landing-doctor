import { doctorConfig } from "../config/doctorConfig"
import { Button } from "./ui/Button"
import { Phone, Award, Users, Clock } from "./icons/Icons"

export function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Expert {doctorConfig.specialty} Care in {doctorConfig.location}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {doctorConfig.doctorName} provides comprehensive cardiovascular care with a focus on prevention, early
              detection, and personalized treatment plans for optimal heart health.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" href={`tel:${doctorConfig.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call {doctorConfig.phone}
              </Button>
              <Button size="lg" variant="outline">
                Learn More About Our Services
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div className="text-center">
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">5000+</div>
                <div className="text-sm text-gray-600">Patients Treated</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Emergency Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=600"
              alt={`${doctorConfig.doctorName} - ${doctorConfig.specialty} Specialist`}
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
