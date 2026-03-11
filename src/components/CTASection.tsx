import Link from "next/link";
import Image from "next/image";
import { PHONE } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary-dark/85" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Transform<br />Your Home?
        </h2>
        <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          Get a free, no-obligation estimate for your renovation project. Our team is ready to bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-light text-primary-dark font-bold px-10 py-4 rounded text-base uppercase tracking-wider transition-all hover:shadow-xl inline-block"
          >
            Request Free Estimate
          </Link>
          <a
            href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
            className="border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-bold px-10 py-4 rounded text-base uppercase tracking-wider transition-all inline-block"
          >
            Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
