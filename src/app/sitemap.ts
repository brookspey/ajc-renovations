import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/constants";
import { LOCATIONS } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ajc-renovations.com";

  const servicePages = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // 84 service+location pages
  const serviceLocationPages = SERVICES.flatMap((service) =>
    LOCATIONS.map((location) => ({
      url: `${baseUrl}/services/${service.slug}/${location.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  // 12 location landing pages
  const locationLandingPages = LOCATIONS.map((location) => ({
    url: `${baseUrl}/services/areas/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...servicePages,
    ...serviceLocationPages,
    ...locationLandingPages,
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
