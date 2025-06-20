import { doctorConfig } from "../config/doctorConfig"
import { Phone, MapPin } from "./icons/Icons"
import { Button } from "./ui/Button"

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-blue-900">{doctorConfig.clinicName}</h1>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(doctorConfig.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              <MapPin className="h-4 w-4" />
              <span>{doctorConfig.location}</span>
            </a>
            <a
              href={`tel:${doctorConfig.phone}`}
              className="flex items-center space-x-2 hover:text-blue-800 transition-colors"
            >
              <Phone className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-blue-900">{doctorConfig.phone}</span>
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700" href={`tel:${doctorConfig.phone}`}>
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
