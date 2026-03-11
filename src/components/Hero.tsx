import Link from "next/link";
import Image from "next/image";
import { PHONE } from "@/lib/constants";

interface HeroProps {
  title: string;
  subtitle: string;
  showCTA?: boolean;
  backgroundImage?: string;
}

export default function Hero({
  title,
  subtitle,
  showCTA = true,
  backgroundImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
}: HeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary/70 to-primary-dark/90" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 sm:py-40">
        <p className="text-accent font-semibold uppercase tracking-[0.2em] text-sm mb-6 animate-fade-in-up">
          Palm Beach County&apos;s Trusted Renovation Experts
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 text-white animate-fade-in-up animate-delay-100">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animate-delay-200">
          {subtitle}
        </p>
        {showCTA && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-light text-primary-dark font-bold px-10 py-4 rounded text-base uppercase tracking-wider transition-all hover:shadow-xl inline-block"
            >
              Get a Free Estimate
            </Link>
            <a
              href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
              className="border-2 border-white/60 hover:border-white hover:bg-white/10 text-white font-bold px-10 py-4 rounded text-base uppercase tracking-wider transition-all inline-block"
            >
              Call {PHONE}
            </a>
          </div>
        )}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
