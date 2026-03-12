import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import LocationConsiderations from "@/components/LocationConsiderations";
import { SERVICES } from "@/lib/constants";
import { LOCATIONS, getLocationBySlug } from "@/lib/locations";
import { SERVICE_LOCATION_DATA } from "@/lib/service-location-data";
import {
  generateServiceLocationSchemas,
  getServiceLocationSlug,
  getNearbyServiceLinks,
  getOtherServicesInLocation,
} from "@/lib/location-utils";

export function generateStaticParams() {
  const params: { slug: string; location: string }[] = [];
  for (const service of SERVICES) {
    for (const location of LOCATIONS) {
      params.push({ slug: service.slug, location: location.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; location: string }>;
}): Promise<Metadata> {
  const { slug, location: locationSlug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  const location = getLocationBySlug(locationSlug);
  if (!service || !location) return {};

  const key = getServiceLocationSlug(slug, locationSlug);
  const content = SERVICE_LOCATION_DATA[key];
  const description = content
    ? content.intro.slice(0, 155) + "..."
    : `Professional ${service.name.toLowerCase()} services in ${location.name}, FL. ${service.shortDescription}`;

  return {
    title: `${service.name} in ${location.name}, FL`,
    description,
    alternates: {
      canonical: `https://ajcrenovations.com/services/${slug}/${locationSlug}`,
    },
    openGraph: {
      title: `${service.name} in ${location.name}, FL`,
      description,
      url: `https://ajcrenovations.com/services/${slug}/${locationSlug}`,
      type: "website",
      siteName: "AJC Renovations",
      locale: "en_US",
    },
  };
}

const NEARBY_ANCHORS = [
  (service: string, city: string) => `${service} in ${city}`,
  (_service: string, city: string) => `Get a quote in ${city}`,
  (_service: string, city: string) => `Serving ${city}`,
  (service: string, city: string) => `${city} ${service.toLowerCase()}`,
];

export default async function ServiceLocationPage({
  params,
}: {
  params: Promise<{ slug: string; location: string }>;
}) {
  const { slug, location: locationSlug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  const location = getLocationBySlug(locationSlug);
  if (!service || !location) notFound();

  const key = getServiceLocationSlug(slug, locationSlug);
  const content = SERVICE_LOCATION_DATA[key];
  if (!content) notFound();

  const schemas = generateServiceLocationSchemas(service, location, content.faqs);
  const nearbyLinks = getNearbyServiceLinks(slug, [...location.nearbyLocations]);
  const otherServices = getOtherServicesInLocation(locationSlug, slug);

  return (
    <>
      <Hero
        title={`${service.name} in ${location.name}, FL`}
        subtitle={service.shortDescription}
        backgroundImage={service.heroImage}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href={`/services/${slug}`} className="hover:text-accent transition-colors">
                {service.name}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-gray-900 font-medium">{location.name}</li>
          </ol>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Content */}
            <article className="lg:col-span-2">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden mb-10 shadow-lg">
                <Image
                  src={service.image}
                  alt={`Professional ${service.name.toLowerCase()} service in ${location.name}, FL`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>

              {/* Intro */}
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Professional {service.name} Services in {location.name}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-10">
                {content.intro}
              </p>

              {/* Location Context Card */}
              <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 sm:p-8 mb-12">
                <h3 className="text-lg font-bold text-primary mb-4">
                  About {location.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5 text-sm">
                  <div>
                    <span className="text-gray-500 block">Population</span>
                    <span className="font-semibold text-gray-900">{location.population}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Typical Home Age</span>
                    <span className="font-semibold text-gray-900">{location.medianHomeAge}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Home Values</span>
                    <span className="font-semibold text-gray-900">{location.medianHomeValue}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  <strong className="text-gray-800">Housing:</strong> {location.housing}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong className="text-gray-800">Climate:</strong> {location.climate}
                </p>
              </div>

              {/* Considerations */}
              <LocationConsiderations
                considerations={content.considerations}
                serviceName={service.name}
                locationName={location.name}
              />

              {/* What We Offer — proper ul/li for list snippet eligibility */}
              <section className="py-12">
                <h3 className="text-2xl font-bold text-primary mb-8">
                  What&apos;s Included in {service.name} in {location.name}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                      <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Recommendation */}
              {content.recommendation && (
                <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 mb-12">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Our Recommendation</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{content.recommendation}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* FAQs */}
              <FAQSection faqs={content.faqs} />

              {/* Nearby Areas — varied anchor text */}
              {nearbyLinks.length > 0 && (
                <nav aria-label="Nearby service areas" className="py-12">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    {service.name} in Nearby Areas
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {nearbyLinks.map((link, i) => {
                      const anchor = NEARBY_ANCHORS[i % NEARBY_ANCHORS.length](service.name, link.name);
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="bg-primary/5 text-primary text-sm font-medium px-5 py-2.5 rounded-full border border-primary/10 hover:bg-primary/10 transition-colors"
                        >
                          {anchor}
                        </Link>
                      );
                    })}
                  </div>
                </nav>
              )}
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="bg-gray-900 text-white rounded-2xl p-8 lg:sticky lg:top-24">
                <h3 className="text-xl font-bold mb-2">Get a Free Estimate</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  Ready to start your {service.name.toLowerCase()} project in {location.name}? Contact us today for a free, no-obligation estimate.
                </p>
                <Link
                  href="/contact"
                  className="bg-accent hover:bg-accent-light text-primary-dark font-bold px-6 py-3.5 rounded text-sm uppercase tracking-wider transition-all block text-center mb-3"
                >
                  Book {service.name} in {location.name}
                </Link>
                <a
                  href="tel:5617566224"
                  className="border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-bold px-6 py-3.5 rounded text-sm uppercase tracking-wider transition-all block text-center"
                >
                  (561) 756-6224
                </a>
              </div>

              {/* Other Services in This City */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-5">
                  Other Services in {location.name}
                </h3>
                <div className="space-y-3">
                  {otherServices.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center gap-3 group"
                    >
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={s.image} alt={s.name} fill className="object-cover" sizes="48px" />
                      </div>
                      <span className="text-gray-600 group-hover:text-accent transition-colors text-sm font-medium">
                        {s.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Link to Location Landing Page */}
              <Link
                href={`/services/areas/${locationSlug}`}
                className="block text-center text-primary hover:text-accent text-sm font-medium transition-colors"
              >
                View all services in {location.name} &rarr;
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.localBusiness) }}
      />
    </>
  );
}
