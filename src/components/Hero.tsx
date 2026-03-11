import Link from "next/link";
import { PHONE } from "@/lib/constants";

interface HeroProps {
  title: string;
  subtitle: string;
  showCTA?: boolean;
}

export default function Hero({ title, subtitle, showCTA = true }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-primary via-primary-light to-primary text-white py-20 sm:py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
          {title}
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
          {subtitle}
        </p>
        {showCTA && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-light text-primary-dark font-bold px-8 py-4 rounded-lg text-lg transition-colors inline-block"
            >
              Get a Free Estimate
            </Link>
            <a
              href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
              className="border-2 border-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-lg text-lg transition-colors inline-block"
            >
              Call {PHONE}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
