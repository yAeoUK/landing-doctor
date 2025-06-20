import { doctorConfig } from "../config/doctorConfig"
import { Phone, MapPin, Mail } from "./icons/Icons"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{doctorConfig.clinicName}</h3>
            <p className="text-gray-300 mb-4">
              Providing exceptional {doctorConfig.specialty.toLowerCase()} care with compassion, expertise, and the
              latest medical advances.
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${doctorConfig.phone}`}
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{doctorConfig.phone}</span>
              </a>
              <a
                href={`mailto:${doctorConfig.email}`}
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{doctorConfig.email}</span>
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(doctorConfig.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                <MapPin className="h-4 w-4" />
                <span>{doctorConfig.location}</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors cursor-pointer">
                  About Dr. {doctorConfig.doctorName.split(" ")[1]}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors cursor-pointer">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors cursor-pointer">
                  Patient Reviews
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors cursor-pointer">
                  Health Tips
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Emergency</h4>
            <p className="text-gray-300 mb-4">
              For medical emergencies, please call 911 or go to your nearest emergency room.
            </p>
            <p className="text-gray-300">
              For urgent cardiac concerns outside office hours, call our emergency line:
              <a
                href="tel:(555)911-4327"
                className="font-semibold text-white block hover:text-blue-400 transition-colors"
              >
                (555) 911-HEART
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {doctorConfig.clinicName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
