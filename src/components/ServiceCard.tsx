import Link from "next/link";

interface ServiceCardProps {
  name: string;
  slug: string;
  shortDescription: string;
}

const SERVICE_ICONS: Record<string, string> = {
  "kitchen-renovation": "🍳",
  "bathroom-renovation": "🚿",
  "floor-renovation": "🏠",
  "indoor-painting": "🎨",
  "outdoor-painting": "🖌️",
  "drywall": "🧱",
};

export default function ServiceCard({ name, slug, shortDescription }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group bg-white rounded-xl shadow-md hover:shadow-xl border border-gray-200 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="text-4xl mb-4">{SERVICE_ICONS[slug] || "🔨"}</div>
      <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors mb-3">
        {name}
      </h3>
      <p className="text-gray-600 leading-relaxed">{shortDescription}</p>
      <span className="inline-block mt-4 text-accent font-semibold group-hover:translate-x-1 transition-transform">
        Learn More →
      </span>
    </Link>
  );
}
