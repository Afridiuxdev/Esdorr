import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FlaskConical, ShieldCheck, Sprout, Sun } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The ESDORR Promise: science-backed, barrier-friendly skincare crafted specifically for melanin-rich Indian skin.",
};

export default function AboutPage() {
  return (
    <div className="bg-cream">
      {/* Hero Banner */}
      <section className="bg-[#FCECE0]/70 border-b border-border-warm/80 py-16 sm:py-22">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              Our Story
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-medium leading-[1.12] text-espresso">
              The ESDORR Promise
            </h1>
            <p className="text-base text-espresso-soft/90 leading-relaxed">
              Science, safety and real results — ESDORR was created to end the
              guesswork of multi-step routines that overwhelm sensitive,
              melanin-rich skin.
            </p>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Indian skin faces a distinct triad of daily stressors: intense
              year-round UV radiation, high humidity, and a natural tendency
              toward post-inflammatory hyperpigmentation. Instead of importing
              heavy formulas made for colder climates, we formulate from first
              principles — pairing clinically validated actives at effective,
              non-irritating percentages with microbiome-calming postbiotics.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-3xl shadow-xl shadow-espresso/8 border border-white/70">
              <img
                src="/images/story-petri-serum.jpg"
                alt="ESDORR laboratory serum formulation in clear glass petri dish"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Four Formulation Pillars */}
      <section id="promise" className="py-16 sm:py-22 bg-[#FFFDF9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              What Guides Every Bottle
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-medium text-espresso">
              Four Non-Negotiable Standards
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FlaskConical,
                title: "Evidence Over Hype",
                body: "Every active — from 3% Tranexamic Acid to 5% Niacinamide — is used at dermatologist-backed concentrations that deliver measurable clarity.",
              },
              {
                icon: Sun,
                title: "Built for Indian Climates",
                body: "Feather-light, breathable textures that absorb cleanly in heat and humidity with zero greasiness and zero white cast.",
              },
              {
                icon: ShieldCheck,
                title: "Barrier-First Philosophy",
                body: "Every formula includes our Lactobacillus Postbiotic Complex so brightening never comes at the expense of skin comfort.",
              },
              {
                icon: Sprout,
                title: "Clean, Conscious Craft",
                body: "100% vegan, cruelty-free, fragrance-free, and free from parabens, sulfates, and harsh bleaching agents.",
              },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-3xl bg-cream border border-border-warm/80 p-6 space-y-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sunlit/80 text-espresso">
                    <Icon className="w-5 h-5" strokeWidth={1.7} />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-espresso">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editorial Lifestyle Band */}
      <section className="bg-[#FAF3EA] border-t border-border-warm/70">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6">
            <img
              src="/images/benefits-portrait.jpg"
              alt="Radiant skin in natural morning light"
              className="w-full h-full min-h-[340px] object-cover"
            />
          </div>
          <div className="lg:col-span-6 px-6 sm:px-10 lg:px-14 py-14 space-y-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              Less Clutter, More Consistency
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium leading-tight text-espresso">
              Why We Started With Just Two Essential Steps
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              The most effective routine is the one you actually enjoy using
              every single morning. By perfecting one multi-pathway brightening
              serum and one invisible SPF 50 PA++++ sunscreen, ESDORR gives your
              skin everything it needs to fade dark spots and keep them from
              returning.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-espresso px-6 py-3 text-sm font-medium text-[#FFFDF9] hover:bg-espresso-soft transition-colors"
              >
                <span>Explore the 2-Step Line</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/skin-science"
                className="inline-flex items-center gap-2 rounded-full border border-espresso/40 px-6 py-3 text-sm font-medium text-espresso hover:bg-espresso hover:text-[#FFFDF9] transition-colors"
              >
                <span>Read Our Skin Science</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
