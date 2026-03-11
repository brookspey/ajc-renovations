import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { SERVICES, SERVICE_AREAS } from "@/lib/constants";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.name} in Palm Beach County | AJC Renovations`,
    description: `Professional ${service.name.toLowerCase()} services in Palm Beach County, FL. ${service.shortDescription} Free estimates from AJC Renovations.`,
    openGraph: {
      title: `${service.name} | AJC Renovations`,
      description: service.shortDescription,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== slug);

  return (
    <>
      <Hero
        title={`${service.name} in Palm Beach County`}
        subtitle={service.shortDescription}
      />

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
                Professional {service.name} Services
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                {service.description}
              </p>

              <h3 className="text-xl font-bold text-primary mb-4">What We Offer</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-primary mb-4">Service Areas</h3>
              <p className="text-gray-700 mb-4">
                We provide {service.name.toLowerCase()} services throughout Palm Beach County, including:
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {SERVICE_AREAS.map((area) => (
                  <span
                    key={area}
                    className="bg-primary/5 text-primary text-sm font-medium px-3 py-1 rounded-full border border-primary/10"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-primary text-white rounded-xl p-6 sm:p-8 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Get a Free Estimate</h3>
                <p className="text-gray-200 mb-6">
                  Ready to start your {service.name.toLowerCase()} project? Contact us today for a free, no-obligation estimate.
                </p>
                <Link
                  href="/contact"
                  className="bg-accent hover:bg-accent-light text-primary-dark font-bold px-6 py-3 rounded-lg transition-colors block text-center mb-4"
                >
                  Contact Us
                </Link>
                <a
                  href="tel:5615550123"
                  className="border-2 border-white hover:bg-white hover:text-primary font-bold px-6 py-3 rounded-lg transition-colors block text-center"
                >
                  (561) 555-0123
                </a>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-bold text-primary mb-4">Other Services</h3>
                <ul className="space-y-2">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="text-gray-600 hover:text-accent transition-colors"
                      >
                        {s.name} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      {/* JSON-LD for this service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            description: service.description,
            provider: {
              "@type": "HomeAndConstructionBusiness",
              name: "AJC Renovations",
              areaServed: "Palm Beach County, FL",
            },
            areaServed: {
              "@type": "County",
              name: "Palm Beach County",
            },
          }),
        }}
      />
    </>
  );
}
