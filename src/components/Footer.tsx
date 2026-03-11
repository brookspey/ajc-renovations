import Link from "next/link";
import { COMPANY_NAME, PHONE, EMAIL, SERVICE_AREAS, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{COMPANY_NAME}</h3>
            <p className="text-gray-300 mb-4">
              Professional home renovation services throughout Palm Beach County. Quality craftsmanship you can trust.
            </p>
            <div className="space-y-2 text-gray-300">
              <a href={`tel:${PHONE.replace(/[^0-9]/g, "")}`} className="block hover:text-accent transition-colors">
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="block hover:text-accent transition-colors">
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-bold mb-4">Service Areas</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-light mt-10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <p className="mt-1">Serving Palm Beach County, Florida</p>
        </div>
      </div>
    </footer>
  );
}
