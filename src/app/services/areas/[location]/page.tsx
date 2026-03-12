import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { SERVICES } from "@/lib/constants";
import { LOCATIONS, getLocationBySlug } from "@/lib/locations";

export function generateStaticParams() {
  return LOCATIONS.map((location) => ({ location: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location: locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);
  if (!location) return {};

  return {
    title: `Home Renovation Services in ${location.name}, FL`,
    description: `Professional home renovation services in ${location.name}, FL. Kitchen & bathroom renovations, flooring, painting, drywall, and pool enclosure restoration. Free estimates from AJC Renovations.`,
    alternates: {
      canonical: `https://ajcrenovations.com/services/areas/${locationSlug}`,
    },
    openGraph: {
      title: `Home Renovation Services in ${location.name}, FL`,
      description: `Full range of renovation services in ${location.name}: kitchens, bathrooms, flooring, painting, drywall, and pool enclosures. Free estimates.`,
      url: `https://ajcrenovations.com/services/areas/${locationSlug}`,
      type: "website",
      siteName: "AJC Renovations",
      locale: "en_US",
    },
  };
}

export default async function LocationLandingPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location: locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);
  if (!location) notFound();

  return (
    <>
      <Hero
        title={`Home Renovation Services in ${location.name}, FL`}
        subtitle={`Professional renovations tailored to ${location.name}'s unique homes and neighborhoods`}
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
            <li aria-current="page" className="text-gray-900 font-medium">{location.name}</li>
          </ol>
        </div>
      </nav>

      {/* Location Intro */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why {location.name} Homeowners Choose AJC Renovations
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              {location.character}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {location.housing}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/${locationSlug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.name} in ${location.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-accent transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <span className="inline-block mt-4 text-accent font-semibold text-sm">
                    Learn more &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Location Facts Card */}
          <div className="bg-primary rounded-2xl p-8 sm:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">
              {location.name} at a Glance
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <p className="text-white/60 text-sm mb-1">Population</p>
                <p className="text-2xl font-bold">{location.population}</p>
              </div>
              <div className="text-center">
                <p className="text-white/60 text-sm mb-1">Typical Home Age</p>
                <p className="text-2xl font-bold">{location.medianHomeAge}</p>
              </div>
              <div className="text-center">
                <p className="text-white/60 text-sm mb-1">Home Values</p>
                <p className="text-2xl font-bold">{location.medianHomeValue}</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed text-center max-w-2xl mx-auto">
              {location.climate}
            </p>
          </div>

          {/* Nearby Locations */}
          {location.nearbyLocations.length > 0 && (
            <div className="mt-16 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Also Serving Nearby Areas
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {location.nearbyLocations.map((nearbySlug) => {
                  const nearby = getLocationBySlug(nearbySlug);
                  if (!nearby) return null;
                  return (
                    <Link
                      key={nearbySlug}
                      href={`/services/areas/${nearbySlug}`}
                      className="bg-primary/5 text-primary text-sm font-medium px-5 py-2.5 rounded-full border border-primary/10 hover:bg-primary/10 transition-colors"
                    >
                      {nearby.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://ajcrenovations.com" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://ajcrenovations.com/services" },
              { "@type": "ListItem", position: 3, name: location.name },
            ],
          }),
        }}
      />
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: "AJC Renovations",
            telephone: "+15617566224",
            areaServed: {
              "@type": "City",
              name: location.name,
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "West Palm Beach",
              addressRegion: "FL",
            },
          }),
        }}
      />
    </>
  );
}
