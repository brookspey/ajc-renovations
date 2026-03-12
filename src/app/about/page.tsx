import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us — Palm Beach County Home Renovations",
  description:
    "Learn about AJC Renovations — Palm Beach County's trusted home renovation team. Licensed, insured, and dedicated to quality craftsmanship.",
  alternates: {
    canonical: "https://ajcrenovations.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About AJC Renovations"
        subtitle="Your trusted partner for home renovations in Palm Beach County."
        showCTA={false}
        backgroundImage="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80"
      />

      {/* Story Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-semibold uppercase tracking-[0.2em] text-sm mb-3">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Built on Quality, Trust & Community
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
                <p>
                  AJC Renovations was founded with a simple mission: to provide Palm Beach County homeowners with honest, high-quality renovation services at fair prices.
                </p>
                <p>
                  From our roots in West Palm Beach, we&apos;ve grown to serve communities across the entire county — from Jupiter and Palm Beach Gardens in the north to Delray Beach and Boynton Beach in the south, and everywhere in between including Wellington, Royal Palm Beach, Greenacres, Lantana, and Westlake.
                </p>
                <p>
                  Every project we take on receives the same level of attention, care, and commitment to excellence — whether it&apos;s a small drywall repair or a complete kitchen transformation.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80"
                alt="AJC Renovations team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "10+", label: "Years of Experience" },
              { number: "100%", label: "Satisfaction Guarantee" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-white/60 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold uppercase tracking-[0.2em] text-sm mb-3">What Drives Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
              <div key={value.title} className="flex gap-5 p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <div className="w-3 h-3 bg-accent rounded-full" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
