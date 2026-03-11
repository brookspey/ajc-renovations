import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { PHONE, EMAIL, SERVICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Renovation Estimate",
  description:
    "Contact AJC Renovations for a free home renovation estimate in Palm Beach County. Call us or fill out our form for kitchen, bathroom, painting, and drywall services.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact AJC Renovations"
        subtitle="Get in touch for a free estimate on your next renovation project."
        showCTA={false}
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
                Request a Free Estimate
              </h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="kitchen">Kitchen Renovation</option>
                    <option value="bathroom">Bathroom Renovation</option>
                    <option value="floor">Floor Renovation</option>
                    <option value="indoor-painting">Indoor Painting</option>
                    <option value="outdoor-painting">Outdoor Painting</option>
                    <option value="drywall">Drywall</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project — what you're looking to do, approximate timeline, budget range, etc."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors resize-vertical"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-light text-primary-dark font-bold px-8 py-4 rounded-lg text-lg transition-colors"
                >
                  Send Request
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
                Get In Touch
              </h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-bold text-primary">Phone</h3>
                    <a href={`tel:${PHONE.replace(/[^0-9]/g, "")}`} className="text-gray-600 hover:text-accent transition-colors text-lg">
                      {PHONE}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <h3 className="font-bold text-primary">Email</h3>
                    <a href={`mailto:${EMAIL}`} className="text-gray-600 hover:text-accent transition-colors text-lg">
                      {EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-bold text-primary">Location</h3>
                    <p className="text-gray-600 text-lg">Palm Beach County, Florida</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🕐</div>
                  <div>
                    <h3 className="font-bold text-primary">Hours</h3>
                    <p className="text-gray-600">Monday – Friday: 7:00 AM – 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 8:00 AM – 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary rounded-xl p-6 sm:p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Areas We Serve</h3>
                <p className="text-gray-200 mb-4">
                  We proudly serve homeowners throughout Palm Beach County:
                </p>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREAS.map((area) => (
                    <span
                      key={area}
                      className="bg-white/10 text-white text-sm px-3 py-1 rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
