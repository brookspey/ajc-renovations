const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "West Palm Beach",
    text: "AJC Renovations completely transformed our kitchen. The team was professional, on time, and the quality exceeded our expectations. Highly recommend!",
  },
  {
    name: "David & Lisa R.",
    location: "Jupiter",
    text: "We hired AJC for our bathroom renovation and couldn't be happier. They worked within our budget and delivered a beautiful spa-like bathroom.",
  },
  {
    name: "Michael T.",
    location: "Wellington",
    text: "The painting crew was meticulous. Our entire home interior looks brand new. Great attention to detail and cleanup was spotless.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from homeowners across Palm Beach County.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-xl shadow-md p-6 sm:p-8 border border-gray-100"
            >
              <div className="text-accent text-3xl mb-4">★★★★★</div>
              <p className="text-gray-700 leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="font-bold text-primary">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
