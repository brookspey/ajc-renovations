import { SERVICE_AREAS } from "@/lib/constants";

export default function ServiceAreaSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
            Serving All of Palm Beach County
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            AJC Renovations proudly provides professional home renovation services to communities throughout Palm Beach County, Florida.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area}
              className="bg-primary/5 text-primary font-medium text-center py-3 px-4 rounded-lg border border-primary/10"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
