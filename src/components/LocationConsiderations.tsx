interface LocationConsiderationsProps {
  considerations: Array<{ title: string; description: string }>;
  serviceName: string;
  locationName: string;
}

export default function LocationConsiderations({
  considerations,
  serviceName,
  locationName,
}: LocationConsiderationsProps) {
  return (
    <section className="py-12">
      <h3 className="text-2xl font-bold text-primary mb-8">
        Key Considerations for {serviceName} in {locationName}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {considerations.map((item, index) => (
          <div
            key={index}
            className="rounded-xl bg-gray-50 p-6 transition-shadow hover:shadow-md"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                {index + 1}
              </span>
              <h4 className="font-semibold text-gray-900">{item.title}</h4>
            </div>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
