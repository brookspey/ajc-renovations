import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  name: string;
  slug: string;
  shortDescription: string;
  image: string;
}

export default function ServiceCard({ name, slug, shortDescription, image }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-6 sm:p-7">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors mb-2">
          {name}
        </h3>
        <p className="text-gray-500 leading-relaxed text-sm">{shortDescription}</p>
        <div className="mt-5 flex items-center text-accent font-semibold text-sm uppercase tracking-wider">
          <span>View Details</span>
          <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
