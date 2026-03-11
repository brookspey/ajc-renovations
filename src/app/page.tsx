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
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Renovation Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {COMPANY_NAME} offers a full range of home renovation services to homeowners throughout Palm Beach County.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                name={service.name}
                slug={service.slug}
                shortDescription={service.shortDescription}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
              Why Choose AJC Renovations?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { title: "Licensed & Insured", desc: "Fully licensed and insured for your peace of mind on every project.", icon: "✓" },
              { title: "Free Estimates", desc: "Get a detailed, no-obligation estimate before any work begins.", icon: "📋" },
              { title: "Quality Materials", desc: "We use only premium materials from trusted suppliers for lasting results.", icon: "⭐" },
              { title: "Local Experts", desc: "Born and raised in Palm Beach County — we know the homes and the community.", icon: "📍" },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
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
            areaServed: {
              "@type": "County",
              name: "Palm Beach County",
              containedInPlace: {
                "@type": "State",
                name: "Florida",
              },
            },
            serviceType: [
              "Kitchen Renovation",
              "Bathroom Renovation",
              "Floor Renovation",
              "Indoor Painting",
              "Outdoor Painting",
              "Drywall Installation and Repair",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "West Palm Beach",
              addressRegion: "FL",
              addressCountry: "US",
            },
            telephone: "+15615550123",
            priceRange: "$$",
          }),
        }}
      />
    </>
  );
}
