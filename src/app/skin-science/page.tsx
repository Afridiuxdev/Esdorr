import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FlaskConical, Layers, Sun } from "lucide-react";
import { SCIENCE_ACTIVES } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Skin Science",
  description:
    "Discover the clinical actives behind ESDORR: 5% Niacinamide, 3% Tranexamic Acid, Alpha Arbutin, Vitamin C, Postbiotic Complex, and SPF 50 PA++++.",
};

export default function SkinSciencePage() {
  return (
    <div className="bg-cream">
      {/* Header */}
      <section className="bg-cream-warm/80 border-b border-border-warm/80 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            Ingredient Transparency
          </p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-medium text-espresso">
            The Science Behind Visible Clarity
          </h1>
          <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
            Hyperpigmentation in melanin-rich skin happens across multiple
            biological pathways. That&apos;s why ESDORR pairs targeted brightening
            actives with microbiome support and broad-spectrum UV defense.
          </p>
        </div>
      </section>

      {/* Multi-Pathway Synergy */}
      <section className="py-16 bg-[#FFFDF9] border-b border-border-warm/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            {[
              {
                icon: FlaskConical,
                step: "Pathway 01",
                title: "Interrupt Excess Melanin",
                description:
                  "3% Tranexamic Acid and Alpha Arbutin work upstream to calm inflammatory pigment triggers and moderate tyrosinase activity.",
              },
              {
                icon: Layers,
                step: "Pathway 02",
                title: "Block Pigment Transfer & Calm Barrier",
                description:
                  "5% Niacinamide slows melanosome transfer to surface cells while Lactobacillus Postbiotic Complex keeps the barrier resilient.",
              },
              {
                icon: Sun,
                step: "Pathway 03",
                title: "Shield Against UV Re-Darkening",
                description:
                  "Without daily SPF 50 PA++++, UVA rays immediately reactivate melanocytes. Bright GLO locks in your serum's progress every morning.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl bg-cream border border-border-warm/80 p-7 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-sunlit/85 px-3 py-1 text-[11px] font-semibold text-espresso">
                      {item.step}
                    </span>
                    <Icon className="w-5 h-5 text-espresso-soft" strokeWidth={1.65} />
                  </div>
                  <h2 className="font-serif text-2xl font-medium text-espresso pt-1">
                    {item.title}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Ingredient Glossary */}
      <section className="py-16 sm:py-22 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              Active Ingredient Index
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-medium text-espresso">
              Clinically Proven Actives, Clearly Explained
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SCIENCE_ACTIVES.map((active) => (
              <article
                key={active.name}
                className="rounded-3xl bg-[#FFFDF9] border border-border-warm/85 p-6 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <span className="inline-block rounded-full bg-cream-warm px-3 py-1 text-[11px] font-semibold text-espresso-soft">
                    {active.tag}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-espresso">
                    {active.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {active.mechanism}
                  </p>
                  <p className="text-sm text-espresso font-medium leading-relaxed">
                    <span className="text-espresso-soft">Result: </span>
                    {active.benefit}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-warm/70">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted mb-2">
                    Formulated In
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {active.foundIn.map((prod) => (
                      <span
                        key={prod}
                        className="inline-flex items-center gap-1 rounded-full bg-sunlit-soft border border-[#F2DC9B] px-2.5 py-1 text-[11px] font-medium text-espresso"
                      >
                        <CheckCircle2 className="w-3 h-3 text-espresso-soft" />
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Band */}
          <div className="mt-14 rounded-3xl bg-espresso text-[#FFF9F2] p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="font-serif text-2xl sm:text-3xl font-medium">
                Ready to experience science-backed daily skincare?
              </h2>
              <p className="mt-2 text-sm text-[#DAC8B8]">
                Start with our 2-step Melano Glo TX Serum + Bright GLO Sunscreen
                SPF 50 PA++++ ritual.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-semibold text-espresso-deep hover:bg-amber-soft transition-colors"
            >
              <span>Shop Official Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
