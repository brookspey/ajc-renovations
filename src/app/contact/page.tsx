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
        title="Get In Touch"
        subtitle="Ready to start your renovation? Contact us for a free, no-obligation estimate."
        showCTA={false}
        backgroundImage="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600&q=80"
      />

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <p className="text-accent font-semibold uppercase tracking-[0.2em] text-sm mb-3">Free Estimate</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                Request a Quote
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all bg-gray-50 hover:bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all bg-gray-50 hover:bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all bg-gray-50 hover:bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all bg-gray-50 hover:bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all bg-gray-50 hover:bg-white"
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
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project — what you're looking to do, approximate timeline, budget range, etc."
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all resize-vertical bg-gray-50 hover:bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-light text-primary-dark font-bold px-8 py-4 rounded-xl text-base uppercase tracking-wider transition-all hover:shadow-xl"
                >
                  Send Request
                </button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gray-900 text-white rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <a href={`tel:${PHONE.replace(/[^0-9]/g, "")}`} className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors group">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-semibold">{PHONE}</p>
                    </div>
                  </a>
                  <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors group">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-semibold">{EMAIL}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-semibold">Palm Beach County, FL</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 mt-8 pt-8">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">Hours</h4>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex justify-between"><span>Monday – Friday</span><span className="text-white">7:00 AM – 6:00 PM</span></div>
                    <div className="flex justify-between"><span>Saturday</span><span className="text-white">8:00 AM – 2:00 PM</span></div>
                    <div className="flex justify-between"><span>Sunday</span><span className="text-gray-500">Closed</span></div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Areas We Serve</h3>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREAS.map((area) => (
                    <span
                      key={area}
                      className="bg-white text-gray-600 text-sm px-3 py-1.5 rounded-full border border-gray-200"
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
