import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import { SERVICES } from "@/lib/constants";
import { LOCATIONS } from "@/lib/locations";

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
    title: `${service.name} in Palm Beach County, FL`,
    description: `Professional ${service.name.toLowerCase()} services in Palm Beach County, FL. ${service.shortDescription} Free estimates from AJC Renovations.`,
    alternates: {
      canonical: `https://www.ajc-renovations.com/services/${slug}`,
    },
    openGraph: {
      title: `${service.name} in Palm Beach County, FL`,
      description: service.shortDescription,
      url: `https://www.ajc-renovations.com/services/${slug}`,
      type: "website",
      siteName: "AJC Renovations",
      locale: "en_US",
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
        title={service.name}
        subtitle={service.shortDescription}
        backgroundImage={service.heroImage}
      />

      {/* Visual Breadcrumbs */}
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
            <li aria-current="page" className="text-gray-900 font-medium">{service.name}</li>
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
                  alt={`Professional ${service.name.toLowerCase()} services in Palm Beach County, FL`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Professional {service.name} Services in Palm Beach County
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-10">
                {service.description}
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-6">What We Offer</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                    <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Service Areas</h3>
              <p className="text-gray-600 mb-5">
                We provide {service.name.toLowerCase()} services throughout Palm Beach County, including:
              </p>
              <div className="flex flex-wrap gap-2">
                {LOCATIONS.map((location) => (
                  <Link
                    key={location.slug}
                    href={`/services/${slug}/${location.slug}`}
                    className="bg-primary/5 text-primary text-sm font-medium px-4 py-2 rounded-full border border-primary/10 hover:bg-primary/10 transition-colors"
                  >
                    {location.name}
                  </Link>
                ))}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="bg-gray-900 text-white rounded-2xl p-8 lg:sticky lg:top-24">
                <h3 className="text-xl font-bold mb-2">Get a Free Estimate</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  Ready to start your {service.name.toLowerCase()} project? Contact us today for a free, no-obligation estimate.
                </p>
                <Link
                  href="/contact"
                  className="bg-accent hover:bg-accent-light text-primary-dark font-bold px-6 py-3.5 rounded text-sm uppercase tracking-wider transition-all block text-center mb-3"
                >
                  Get {service.name} Estimate
                </Link>
                <a
                  href="tel:5617566224"
                  className="border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-bold px-6 py-3.5 rounded text-sm uppercase tracking-wider transition-all block text-center"
                >
                  (561) 756-6224
                </a>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-5">Other Services</h3>
                <div className="space-y-3">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
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
            </aside>
          </div>
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ajc-renovations.com" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://www.ajc-renovations.com/services" },
              { "@type": "ListItem", position: 3, name: service.name },
            ],
          }),
        }}
      />
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            description: service.description,
            serviceType: service.name,
            provider: {
              "@type": "HomeAndConstructionBusiness",
              name: "AJC Renovations",
              telephone: "+15617566224",
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
