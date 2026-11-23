import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Sparkles, Sun } from "lucide-react";
import { PRODUCTS, ROUTINE_DUO, SITE_CONFIG } from "@/data/site-config";
import { MarketplaceButtons } from "@/components/MarketplaceButtons";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Shop ESDORR's Melano Glo TX Serum and Bright GLO Sunscreen SPF 50 PA++++ on Amazon India, Nykaa, and Flipkart.",
};

export default function ProductsPage() {
  return (
    <div className="bg-cream">
      {/* Page Header */}
      <section className="bg-cream-warm/80 border-b border-border-warm/80 py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            The ESDORR Collection
          </p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-medium text-espresso">
            Targeted Formulas, Zero Filler
          </h1>
          <p className="mt-4 text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            Every ESDORR product is dermatologically tested for Indian skin tones
            and available exclusively through our official partner storefronts on
            Amazon India, Nykaa, and Flipkart.
          </p>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-14 sm:py-20 bg-[#FFFDF9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {PRODUCTS.map((product, index) => {
            const isBlush = product.cardTheme === "blush";
            return (
              <article
                key={product.slug}
                className={`rounded-3xl overflow-hidden border p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isBlush
                    ? "card-blush-surface border-[#F3D2C7]/70"
                    : "card-sunlit-surface border-[#F2DC9B]/70"
                }`}
              >
                <div
                  className={`lg:col-span-5 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex items-center justify-center py-6 sm:py-8 group"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="mx-auto h-80 sm:h-96 w-auto object-contain drop-shadow-[0_22px_28px_rgba(51,28,15,0.22)] group-hover:scale-[1.04] transition-transform duration-500"
                    />
                  </Link>
                </div>

                <div
                  className={`lg:col-span-7 space-y-5 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`inline-block rounded-full px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-espresso-soft ${
                        isBlush ? "bg-[#F6CFC2]/85" : "bg-[#F5DC8E]/90"
                      }`}
                    >
                      {product.eyebrow}
                    </span>
                    <span className="text-xs font-medium text-muted">
                      {product.skinTypes}
                    </span>
                  </div>

                  <div>
                    <h2 className="font-serif text-3xl sm:text-4xl font-medium text-espresso">
                      {product.name}
                    </h2>
                    <p className="mt-1.5 text-sm sm:text-base font-medium text-espresso-soft/85">
                      {product.subtitle}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-semibold text-espresso">
                      ₹{product.priceInr}
                    </span>
                    <span className="text-sm text-muted line-through">
                      ₹{product.mrpInr}
                    </span>
                    <span className="rounded-full bg-espresso/8 px-2.5 py-0.5 text-xs font-medium text-espresso">
                      {product.volume}
                    </span>
                  </div>

                  <p className="text-sm sm:text-[15px] text-espresso-soft/90 leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {product.highlights.map((item) => (
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

                  <div className="pt-3 space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      Buy Authentic Directly From:
                    </p>
                    <MarketplaceButtons marketplaces={product.marketplaces} />
                    <div className="pt-2">
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-espresso underline underline-offset-4 hover:text-espresso-soft"
                      >
                        <span>View full ingredient list &amp; how to use</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Complete 2-Step Ritual Duo Band */}
      <section
        id="ritual"
        className="py-16 bg-cream-warm/80 border-t border-border-warm/80"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-espresso text-[#FFF9F2] p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/20 px-3 py-1 text-xs font-semibold text-amber-soft">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{ROUTINE_DUO.savingsText}</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium">
                {ROUTINE_DUO.name}
              </h2>
              <p className="text-sm text-[#DAC8B8] leading-relaxed">
                Pair Step 1 (Melano Glo TX Serum) with Step 2 (Bright GLO
                Sunscreen SPF 50 PA++++) to correct existing pigmentation while
                blocking the UV triggers that cause dark spots to return.
              </p>
              <div className="flex items-baseline gap-3 pt-1">
                <span className="text-2xl font-semibold text-amber-soft">
                  ₹{ROUTINE_DUO.priceInr}
                </span>
                <span className="text-sm text-[#B8A391] line-through">
                  ₹{ROUTINE_DUO.mrpInr}
                </span>
              </div>
            </div>

            <div className="md:col-span-5 space-y-3">
              <a
                href={SITE_CONFIG.storefronts.amazonStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-between rounded-full bg-amber px-6 py-3.5 text-sm font-semibold text-espresso-deep hover:bg-amber-soft transition-colors"
              >
                <span>Shop Duo on Amazon.in</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.storefronts.nykaaStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-between rounded-full border border-white/20 bg-white/8 px-6 py-3.5 text-sm font-medium text-[#FFF9F2] hover:border-amber transition-colors"
              >
                <span>Shop Duo on Nykaa</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.storefronts.flipkartStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-between rounded-full border border-white/20 bg-white/8 px-6 py-3.5 text-sm font-medium text-[#FFF9F2] hover:border-amber transition-colors"
              >
                <span>Shop Duo on Flipkart</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
            <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm text-espresso-soft">
              <ShieldCheck className="w-4 h-4 text-espresso" />
              <span>100% Authentic Seller Guarantee</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm text-espresso-soft">
              <Sun className="w-4 h-4 text-espresso" />
              <span>Freshly Batched for Indian Climate</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm text-espresso-soft">
              <Sparkles className="w-4 h-4 text-espresso" />
              <span>Dermatologically Tested &amp; Vegan</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
