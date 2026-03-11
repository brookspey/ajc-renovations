import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services | Home Renovation in Palm Beach County",
  description:
    "AJC Renovations offers kitchen renovation, bathroom renovation, floor renovation, indoor & outdoor painting, and drywall services throughout Palm Beach County, FL.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Our Renovation Services"
        subtitle="Comprehensive home renovation solutions for every room in your Palm Beach County home."
        showCTA={false}
        backgroundImage="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80"
      />

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <CTASection />
    </>
  );
}
