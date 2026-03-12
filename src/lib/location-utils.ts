import { SERVICES } from "./constants";
import type { Location } from "./locations";

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceLocationSchemas {
  service: Record<string, unknown>;
  faqPage: Record<string, unknown>;
  localBusiness: Record<string, unknown>;
  breadcrumb: Record<string, unknown>;
}

/**
 * Generates JSON-LD structured data schemas for a service+location page.
 */
export function generateServiceLocationSchemas(
  service: { name: string; slug: string; description: string },
  location: Location,
  faqs: FAQ[]
): ServiceLocationSchemas {
  const baseUrl = "https://ajcrenovations.com";
  const serviceName = `${service.name} in ${location.name}, FL`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${baseUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${baseUrl}/services/${service.slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: location.name,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: service.description,
    serviceType: service.name,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "AJC Renovations",
    },
    areaServed: {
      "@type": "City",
      name: location.name,
    },
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const localBusinessSchema = {
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
  };

  return {
    service: serviceSchema,
    faqPage: faqPageSchema,
    localBusiness: localBusinessSchema,
    breadcrumb: breadcrumbSchema,
  };
}

/**
 * Returns the data key for a service+location combination.
 * Example: "kitchen-renovation--jupiter"
 */
export function getServiceLocationSlug(
  serviceSlug: string,
  locationSlug: string
): string {
  return `${serviceSlug}--${locationSlug}`;
}

/**
 * Returns an array of links for the same service in nearby cities.
 */
export function getNearbyServiceLinks(
  serviceSlug: string,
  nearbyLocationSlugs: string[]
): { name: string; href: string }[] {
  return nearbyLocationSlugs.map((locationSlug) => {
    // Convert slug to display name: "palm-beach-gardens" -> "Palm Beach Gardens"
    const name = locationSlug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return {
      name,
      href: `/services/${serviceSlug}/${locationSlug}`,
    };
  });
}

/**
 * Returns an array of links for other services available in the same city.
 */
export function getOtherServicesInLocation(
  locationSlug: string,
  currentServiceSlug: string
): { name: string; href: string; image: string }[] {
  return SERVICES.filter((service) => service.slug !== currentServiceSlug).map(
    (service) => ({
      name: service.name,
      href: `/services/${service.slug}/${locationSlug}`,
      image: service.image,
    })
  );
}
