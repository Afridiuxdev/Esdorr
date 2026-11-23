import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Target,
  Sun,
  FlaskConical,
  Leaf,
  ShieldCheck,
  Sprout,
  Check,
  Droplet,
  Waves,
} from "lucide-react";
import { PRODUCTS } from "@/data/site-config";

export default function HomePage() {
  const [serum, sunscreen] = PRODUCTS;

  return (
    <div className="bg-cream">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#F7E9DB]">
        <div className="relative mx-auto max-w-7xl">
          {/* Background Hero Image */}
          <div className="relative min-h-[540px] lg:min-h-[620px] flex items-center">
            <img
              src="/images/hero-products.jpg"
              alt="ESDORR Melano Glo TX Serum and Bright GLO Sunscreen SPF 50 PA++++ on travertine stone in warm morning light"
              className="absolute inset-0 h-full w-full object-cover object-center lg:object-right"
            />
            <div className="hero-sunlit-scrim absolute inset-0" />

            {/* Left Editorial Content */}
            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
              <div className="max-w-xl">
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-espresso-soft mb-4">
                  Science-Backed Skincare
                </p>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] font-medium leading-[1.08] tracking-[-0.02em] text-espresso">
                  Brighter, Clearer
                  <br />
                  Healthier Skin
                </h1>

                <p className="mt-5 text-base sm:text-[17px] leading-relaxed text-espresso-soft/90 max-w-md">
                  Target dark spots, even skin tone and protect your glow — with
                  clinically backed formulas for everyday use.
                </p>

                {/* Primary CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2.5 rounded-full bg-espresso px-7 py-3.5 text-sm font-medium text-[#FFFDF9] shadow-lg shadow-espresso/15 hover:bg-espresso-soft transition-colors"
                  >
                    <span>Shop Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/skin-science"
                    className="inline-flex items-center gap-2 rounded-full border border-espresso/40 bg-[#FFFDF9]/75 backdrop-blur-xs px-7 py-3.5 text-sm font-medium text-espresso hover:border-espresso hover:bg-[#FFFDF9] transition-colors"
                  >
                    <span>Explore Science</span>
                  </Link>
                </div>

                {/* 3 Inline Benefit Highlights */}
                <div className="mt-10 grid grid-cols-3 gap-4 max-w-md pt-6 border-t border-espresso/15">
                  <div className="flex flex-col items-start gap-2">
                    <Sparkles className="w-5 h-5 text-espresso-soft" strokeWidth={1.6} />
                    <span className="text-xs sm:text-[13px] font-medium leading-snug text-espresso">
                      Brightens
                      <br />
                      Skin Tone
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-2 border-l border-espresso/15 pl-4">
                    <Target className="w-5 h-5 text-espresso-soft" strokeWidth={1.6} />
                    <span className="text-xs sm:text-[13px] font-medium leading-snug text-espresso">
                      Fades
                      <br />
                      Dark Spots
                    </span>
                  </div>
                  <div className="flex flex-col items-start gap-2 border-l border-espresso/15 pl-4">
                    <Sun className="w-5 h-5 text-espresso-soft" strokeWidth={1.6} />
                    <span className="text-xs sm:text-[13px] font-medium leading-snug text-espresso">
                      Daily UV
                      <br />
                      Protection
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="bg-cream-warm/75 border-y border-border-warm/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-7">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FlaskConical,
                title: "Clinically Backed",
                subtitle: "Active Ingredients",
              },
              {
                icon: Leaf,
                title: "Dermatologically",
                subtitle: "Tested Formulas",
              },
              {
                icon: ShieldCheck,
                title: "Safe for",
                subtitle: "All Skin Types",
              },
              {
                icon: Sprout,
                title: "Cruelty Free",
                subtitle: "& 100% Vegan",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-center justify-start lg:justify-center gap-3.5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sunlit/80 text-espresso">
                    <Icon className="w-5 h-5" strokeWidth={1.65} />
                  </div>
                  <div className="text-xs sm:text-sm leading-tight">
                    <p className="font-semibold text-espresso">{item.title}</p>
                    <p className="text-muted mt-0.5">{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. OUR PRODUCTS SECTION */}
      <section className="py-16 sm:py-22 bg-[#FFFDF9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              Our Products
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium leading-[1.15] text-espresso">
              Targeted Skincare for Visible Results
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
              Two powerful formulas, designed to work together for brighter,
              even-toned and protected skin.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-7">
            {/* Product 1: Melano Glo TX Serum */}
            <article className="card-blush-surface rounded-3xl overflow-hidden border border-[#F3D2C7]/70 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-1 w-full">
                <span className="inline-block rounded-full bg-[#F6CFC2]/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-espresso-soft">
                  {serum.eyebrow}
                </span>
                <h3 className="mt-4 font-serif text-2xl sm:text-3xl font-medium leading-tight text-espresso">
                  Melano Glo
                  <br />
                  TX Serum
                </h3>
                <p className="mt-2 text-sm text-espresso-soft/85 leading-snug">
                  {serum.subtitle}
                </p>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-lg font-semibold text-espresso">
                    ₹{serum.priceInr}
                  </span>
                  <span className="text-xs text-muted line-through">
                    ₹{serum.mrpInr}
                  </span>
                  <span className="text-xs text-muted">· {serum.volume}</span>
                </div>

                <ul className="mt-5 space-y-2">
                  {serum.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-espresso"
                    >
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-espresso/12 text-espresso">
                        <Check className="w-2.5 h-2.5" strokeWidth={2.5} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/products/${serum.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-espresso px-6 py-3 text-sm font-medium text-[#FFFDF9] hover:bg-espresso-soft transition-colors"
                  >
                    <span>Shop Serum</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="w-full sm:w-52 md:w-56 shrink-0 flex items-center justify-center">
                <Link
                  href={`/products/${serum.slug}`}
                  className="block w-full py-2 group"
                >
                  <img
                    src={serum.image}
                    alt={serum.name}
                    className="mx-auto h-64 sm:h-72 w-auto object-contain drop-shadow-[0_18px_24px_rgba(51,28,15,0.22)] group-hover:scale-[1.04] transition-transform duration-500"
                  />
                </Link>
              </div>
            </article>

            {/* Product 2: Bright GLO Sunscreen */}
            <article className="card-sunlit-surface rounded-3xl overflow-hidden border border-[#F2DC9B]/70 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-1 w-full">
                <span className="inline-block rounded-full bg-[#F5DC8E]/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-espresso-soft">
                  {sunscreen.eyebrow}
                </span>
                <h3 className="mt-4 font-serif text-2xl sm:text-3xl font-medium leading-tight text-espresso">
                  Bright GLO
                  <br />
                  Sunscreen
                </h3>
                <p className="mt-1 font-serif text-lg sm:text-xl font-semibold text-[#B45309]">
                  SPF 50 PA++++
                </p>

                <div className="mt-2.5 flex items-baseline gap-2">
                  <span className="text-lg font-semibold text-espresso">
                    ₹{sunscreen.priceInr}
                  </span>
                  <span className="text-xs text-muted line-through">
                    ₹{sunscreen.mrpInr}
                  </span>
                  <span className="text-xs text-muted">· {sunscreen.volume}</span>
                </div>

                <ul className="mt-5 space-y-2">
                  {sunscreen.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-espresso"
                    >
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-espresso/12 text-espresso">
                        <Check className="w-2.5 h-2.5" strokeWidth={2.5} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/products/${sunscreen.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-espresso px-6 py-3 text-sm font-medium text-[#FFFDF9] hover:bg-espresso-soft transition-colors"
                  >
                    <span>Shop Sunscreen</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="w-full sm:w-52 md:w-56 shrink-0 flex items-center justify-center">
                <Link
                  href={`/products/${sunscreen.slug}`}
                  className="block w-full py-2 group"
                >
                  <img
                    src={sunscreen.image}
                    alt={sunscreen.name}
                    className="mx-auto h-64 sm:h-72 w-auto object-contain drop-shadow-[0_18px_24px_rgba(51,28,15,0.20)] group-hover:scale-[1.04] transition-transform duration-500"
                  />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 4. REAL BENEFITS SECTION */}
      <section className="bg-[#FAF3EA] border-y border-border-warm/60 overflow-hidden">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 h-full">
            <img
              src="/images/benefits-portrait.jpg"
              alt="Radiant Indian woman with clear, healthy glowing skin in warm morning sunlight"
              className="w-full h-full min-h-[320px] lg:min-h-[440px] object-cover object-center"
            />
          </div>

          <div className="lg:col-span-6 px-6 sm:px-10 lg:px-14 py-14 lg:py-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              Real Benefits
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium leading-[1.12] text-espresso">
              Visible, Healthier Skin
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed max-w-lg">
              Formulated for melanin-rich Indian skin exposed to high UV index,
              humidity, and everyday urban stress.
            </p>

            <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { icon: Sparkles, label: "Reduces Dark Spots" },
                { icon: Waves, label: "Evens Skin Tone" },
                { icon: Droplet, label: "Boosts Skin Radiance" },
                { icon: ShieldCheck, label: "Protects from UV Damage" },
              ].map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.label}
                    className="flex flex-col items-center text-center gap-3"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sunlit/80 text-espresso">
                      <Icon className="w-6 h-6" strokeWidth={1.6} />
                    </div>
                    <span className="text-xs sm:text-[13px] font-medium leading-snug text-espresso">
                      {benefit.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE ESDORR ROUTINE (2-STEP DAILY RITUAL) */}
      <section className="py-16 sm:py-22 bg-[#FFFDF9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              The ESDORR Routine
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium leading-[1.15] text-espresso">
              A Simple 2-Step Daily Ritual
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted">
              Brighten, correct and protect — for long-lasting, healthy-looking skin.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-5">
            {/* Step 1 */}
            <div className="rounded-3xl bg-cream border border-border-warm/80 p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-full sm:w-44 shrink-0 overflow-hidden rounded-2xl bg-[#FCECE0]">
                <img
                  src="/images/routine-step1-dropper.jpg"
                  alt="Glass dropper releasing a golden serum droplet"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="flex-1">
                <span className="inline-block rounded-full bg-sunlit px-3 py-1 text-xs font-semibold text-espresso">
                  Step 1
                </span>
                <h3 className="mt-3 font-serif text-2xl font-medium text-espresso">
                  Melano Glo TX Serum
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Apply 3–4 drops on clean, dry skin. Gently pat until absorbed.
                </p>
              </div>
            </div>

            {/* Arrow Connector */}
            <div className="hidden lg:flex h-11 w-11 items-center justify-center rounded-full border border-border-warm bg-cream text-espresso">
              <ArrowRight className="w-5 h-5" strokeWidth={1.75} />
            </div>

            {/* Step 2 */}
            <div className="rounded-3xl bg-cream border border-border-warm/80 p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-full sm:w-44 shrink-0 overflow-hidden rounded-2xl bg-[#FAF5EE]">
                <img
                  src="/images/routine-step2-swatch.jpg"
                  alt="Silky white sunscreen swatch texture"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="flex-1">
                <span className="inline-block rounded-full bg-sunlit px-3 py-1 text-xs font-semibold text-espresso">
                  Step 2
                </span>
                <h3 className="mt-3 font-serif text-2xl font-medium text-espresso">
                  Bright GLO Sunscreen SPF 50
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Apply a generous amount on face and neck as the last step in
                  your morning routine.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/products#ritual"
              className="inline-flex items-center gap-2.5 rounded-full bg-espresso px-8 py-3.5 text-sm font-medium text-[#FFFDF9] hover:bg-espresso-soft transition-colors"
            >
              <span>Build Your Routine</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. OUR STORY / THE ESDORR PROMISE */}
      <section className="bg-[#FCECE0]/65 border-t border-border-warm/70 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
                Our Story
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-medium leading-[1.12] text-espresso">
                The ESDORR Promise
              </h2>
              <p className="text-sm sm:text-base text-espresso-soft/90 leading-relaxed max-w-lg">
                Science, safety and real results — ESDORR is built for everyday
                skincare that truly works. Our formulas combine proven actives
                with skin-friendly ingredients, delivering visible results for
                brighter, healthier and more confident skin.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2.5 rounded-full border border-espresso/45 bg-transparent px-7 py-3 text-sm font-medium text-espresso hover:bg-espresso hover:text-[#FFFDF9] transition-colors"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl shadow-xl shadow-espresso/8 border border-white/60">
                <img
                  src="/images/story-petri-serum.jpg"
                  alt="Golden luminous skincare serum inside a clear laboratory petri dish"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
