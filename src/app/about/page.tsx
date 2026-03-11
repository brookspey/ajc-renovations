import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us | AJC Renovations Palm Beach County",
  description:
    "Learn about AJC Renovations — Palm Beach County's trusted home renovation team. Licensed, insured, and dedicated to quality craftsmanship.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About AJC Renovations"
        subtitle="Your trusted partner for home renovations in Palm Beach County."
        showCTA={false}
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
            Built on Quality, Trust & Community
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              AJC Renovations was founded with a simple mission: to provide Palm Beach County homeowners with honest, high-quality renovation services at fair prices. We believe every home deserves expert craftsmanship, and every homeowner deserves a contractor they can trust.
            </p>
            <p>
              From our roots in West Palm Beach, we&apos;ve grown to serve communities across the entire county — from Jupiter and Palm Beach Gardens in the north to Delray Beach and Boynton Beach in the south, and everywhere in between including Wellington, Royal Palm Beach, Greenacres, Lantana, and Westlake.
            </p>
            <p>
              Our team specializes in kitchen renovations, bathroom renovations, floor renovation, interior and exterior painting, and drywall services. Every project we take on receives the same level of attention, care, and commitment to excellence — whether it&apos;s a small drywall repair or a complete kitchen transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "10+", label: "Years of Experience" },
              { number: "100%", label: "Satisfaction Guarantee" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
              Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Quality Craftsmanship",
                  desc: "We never cut corners. Every detail matters, from materials selection to final finishing touches.",
                },
                {
                  title: "Transparent Communication",
                  desc: "You'll always know the status of your project, the costs involved, and the timeline ahead.",
                },
                {
                  title: "Respect for Your Home",
                  desc: "We treat your home as if it were our own — clean worksite, minimal disruption, and careful protection of your property.",
                },
                {
                  title: "Community First",
                  desc: "As a locally owned business, we're invested in the Palm Beach County community and our neighbors' satisfaction.",
                },
              ].map((value) => (
                <div key={value.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
