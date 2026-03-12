import Link from "next/link";
import { LOCATIONS } from "@/lib/locations";

export default function ServiceAreaSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-3xl p-10 sm:p-16 text-center">
          <p className="text-accent font-semibold uppercase tracking-[0.2em] text-sm mb-3">Service Areas</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Serving All of Palm Beach County
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            AJC Renovations proudly provides professional home renovation services to communities throughout Palm Beach County, Florida.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {LOCATIONS.map((location) => (
              <Link
                key={location.slug}
                href={`/services/areas/${location.slug}`}
                className="bg-white/10 backdrop-blur-sm text-white font-medium text-sm py-2.5 px-5 rounded-full border border-white/10 hover:bg-white/20 transition-colors"
              >
                {location.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
