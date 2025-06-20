import { doctorConfig } from "../config/doctorConfig"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card"
import { Button } from "./ui/Button"
import { Phone, MapPin, Mail, Clock, CreditCard } from "./icons/Icons"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Schedule Your Appointment</h2>
          <p className="text-xl text-gray-600">
            Ready to take control of your heart health? Contact us today to book your consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-600" />
                <span>Contact Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <a
                href={`tel:${doctorConfig.phone}`}
                className="flex items-center space-x-3 hover:text-blue-600 transition-colors"
              >
                <Phone className="h-4 w-4 text-gray-400" />
                <span>{doctorConfig.phone}</span>
              </a>
              <a
                href={`mailto:${doctorConfig.email}`}
                className="flex items-center space-x-3 hover:text-blue-600 transition-colors"
              >
                <Mail className="h-4 w-4 text-gray-400" />
                <span>{doctorConfig.email}</span>
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(doctorConfig.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:text-blue-600 transition-colors"
              >
                <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                <span>{doctorConfig.address}</span>
              </a>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4" href={`tel:${doctorConfig.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call Now to Book
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span>Office Hours</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {doctorConfig.officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5 text-blue-600" />
                <span>Insurance Accepted</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {doctorConfig.acceptedInsurance.map((insurance, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">{insurance}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">Don't see your insurance? Call us to verify coverage.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
