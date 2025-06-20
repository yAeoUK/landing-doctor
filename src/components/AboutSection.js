import { doctorConfig } from "../config/doctorConfig"
import { Card, CardContent } from "./ui/Card"
import { CheckCircle } from "./icons/Icons"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">About {doctorConfig.doctorName}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A leading {doctorConfig.specialty.toLowerCase()} specialist dedicated to providing exceptional
            cardiovascular care with the latest medical advances and personalized treatment approaches.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Specializations</h3>
            <div className="grid gap-4">
              {doctorConfig.specializations.map((specialization, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{specialization}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-10">Special Programs</h3>
            <div className="space-y-4">
              {doctorConfig.specialPrograms.map((program, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{program.name}</h4>
                    <p className="text-gray-600 text-sm">{program.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Credentials & Achievements</h3>
            <div className="space-y-3">
              {doctorConfig.credentials.map((credential, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
