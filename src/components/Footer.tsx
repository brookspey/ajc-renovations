import Link from "next/link";
import { COMPANY_NAME, PHONE, EMAIL, SERVICE_AREAS, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-5">
              <span className="text-accent">AJC</span> Renovations
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional home renovation services throughout Palm Beach County. Quality craftsmanship you can trust.
            </p>
            <div className="space-y-3 text-gray-400">
              <a href={`tel:${PHONE.replace(/[^0-9]/g, "")}`} className="flex items-center gap-3 hover:text-accent transition-colors">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-accent transition-colors">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-5">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-5">Service Areas</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-5">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>

            <div className="mt-8 p-5 bg-accent/10 border border-accent/20 rounded-xl">
              <p className="text-accent font-bold text-sm mb-1">Free Estimates</p>
              <p className="text-gray-400 text-xs mb-3">Get started on your project today.</p>
              <Link href="/contact" className="text-accent hover:text-accent-light text-sm font-semibold transition-colors">
                Request a Quote &rarr;
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <p>Proudly serving Palm Beach County, Florida</p>
        </div>
      </div>
    </footer>
  );
}
