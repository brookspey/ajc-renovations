import Link from "next/link";
import { PHONE } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="bg-accent py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
          Ready to Transform Your Home?
        </h2>
        <p className="text-lg text-primary-dark/80 mb-8 max-w-2xl mx-auto">
          Get a free, no-obligation estimate for your renovation project. Our team is ready to bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-light text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors inline-block"
          >
            Request Free Estimate
          </Link>
          <a
            href={`tel:${PHONE.replace(/[^0-9]/g, "")}`}
            className="bg-white hover:bg-gray-100 text-primary font-bold px-8 py-4 rounded-lg text-lg transition-colors inline-block"
          >
            Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
