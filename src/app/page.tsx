import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";
import { SERVICES, COMPANY_NAME } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Hero
        title="Expert Home Renovations in Palm Beach County"
        subtitle="From kitchens and bathrooms to painting and drywall — AJC Renovations delivers quality craftsmanship that transforms your home."
      />

      {/* Services Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold uppercase tracking-[0.2em] text-sm mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Renovation Services
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              {COMPANY_NAME} offers a full range of home renovation services to homeowners throughout Palm Beach County.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                name={service.name}
                slug={service.slug}
                shortDescription={service.shortDescription}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-semibold uppercase tracking-[0.2em] text-sm mb-3">Why Choose Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Built on Quality, Trust & Results
              </h2>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                With over a decade of experience serving Palm Beach County, AJC Renovations has earned a reputation for exceptional craftsmanship and reliable service.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Licensed & Insured", desc: "Fully licensed and insured for your complete peace of mind." },
                  { title: "Free Estimates", desc: "Detailed, no-obligation estimates before any work begins." },
                  { title: "Premium Materials", desc: "Only the best materials from trusted, proven suppliers." },
                  { title: "Local Experts", desc: "We know Palm Beach County homes inside and out." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-accent rounded-full" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt="Modern home renovation by AJC Renovations"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-primary-dark p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm font-semibold uppercase tracking-wider">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold uppercase tracking-[0.2em] text-sm mb-3">Our Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              A simple, transparent process from start to finish.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We visit your home, discuss your vision, and understand your needs." },
              { step: "02", title: "Estimate", desc: "You receive a detailed, transparent estimate with no hidden fees." },
              { step: "03", title: "Build", desc: "Our expert team brings your vision to life with quality craftsmanship." },
              { step: "04", title: "Walkthrough", desc: "We do a final walkthrough to ensure every detail meets your standards." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-accent/20 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreaSection />
      <TestimonialSection />
      <CTASection />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: "AJC Renovations",
            description:
              "Professional home renovation services in Palm Beach County, FL. Kitchen renovation, bathroom renovation, flooring, painting, and drywall.",
            areaServed: [
              {
                "@type": "County",
                name: "Palm Beach County",
                containedInPlace: {
                  "@type": "State",
                  name: "Florida",
                },
              },
              ...["Jupiter", "Jupiter Farms", "Lantana", "Westlake", "Greenacres", "Wellington", "Delray Beach", "Boynton Beach", "West Palm Beach", "Royal Palm Beach", "Palm Beach Gardens", "Palm Beach"].map((city) => ({
                "@type": "City",
                name: city,
              })),
            ],
            serviceType: [
              "Kitchen Renovation",
              "Bathroom Renovation",
              "Floor Renovation",
              "Indoor Painting",
              "Outdoor Painting",
              "Drywall Installation and Repair",
              "Pool Enclosure Restoration",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "West Palm Beach",
              addressRegion: "FL",
              addressCountry: "US",
            },
            telephone: "+15617566224",
            priceRange: "$$",
          }),
        }}
      />
    </>
  );
}
