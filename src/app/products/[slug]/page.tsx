import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ShieldCheck, FlaskConical } from "lucide-react";
import { PRODUCTS } from "@/data/site-config";
import { MarketplaceButtons } from "@/components/MarketplaceButtons";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const companion = PRODUCTS.find((p) => p.slug !== product.slug);
  const isBlush = product.cardTheme === "blush";

  return (
    <div className="bg-[#FFFDF9]">
      {/* Breadcrumb */}
      <div className="bg-cream border-b border-border-warm/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-muted hover:text-espresso transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </Link>
        </div>
      </div>

      {/* Main Product Hero */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Gallery */}
          <div className="lg:col-span-5 space-y-4">
            <div
              className={`flex items-center justify-center rounded-3xl border border-border-warm/80 p-8 sm:p-12 ${
                isBlush ? "card-blush-surface" : "card-sunlit-surface"
              }`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="mx-auto h-80 sm:h-[420px] w-auto object-contain drop-shadow-[0_22px_30px_rgba(51,28,15,0.22)]"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-border-warm/70">
              <img
                src={product.textureImage}
                alt={`${product.name} texture preview`}
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span
                className={`inline-block rounded-full px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-espresso-soft ${
                  isBlush ? "bg-blush" : "bg-sunlit"
                }`}
              >
                {product.eyebrow}
              </span>
              <h1 className="mt-3 font-serif text-3xl sm:text-5xl font-medium text-espresso">
                {product.name}
              </h1>
              <p className="mt-2 text-base text-muted">{product.subtitle}</p>
            </div>

            <div className="flex flex-wrap items-baseline gap-3 pb-4 border-b border-border-warm">
              <span className="text-3xl font-semibold text-espresso">
                ₹{product.priceInr}
              </span>
              <span className="text-base text-muted line-through">
                ₹{product.mrpInr}
              </span>
              <span className="rounded-full bg-cream-warm px-3 py-1 text-xs font-medium text-espresso">
                {product.volume}
              </span>
              <span className="text-xs text-muted">
                Inclusive of all taxes · {product.skinTypes}
              </span>
            </div>

            <p className="text-sm sm:text-base text-espresso-soft/90 leading-relaxed">
              {product.description}
            </p>

            {/* Buy Now Marketplaces */}
            <div className="rounded-2xl bg-cream border border-border-warm p-5 sm:p-6 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-espresso">
                  Order From Official Storefronts
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                  <ShieldCheck className="w-3.5 h-3.5 text-espresso" />
                  100% Authentic Guaranteed
                </span>
              </div>
              <MarketplaceButtons marketplaces={product.marketplaces} />
            </div>

            {/* Key Actives Breakdown */}
            <div className="pt-2 space-y-4">
              <div className="flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-espresso" />
                <h2 className="font-serif text-2xl font-medium text-espresso">
                  Key Active Ingredients
                </h2>
              </div>
              <div className="divide-y divide-border-warm/80 rounded-2xl border border-border-warm/80 bg-cream/50 px-5">
                {product.keyActives.map((active) => (
                  <div key={active.name} className="py-4">
                    <div className="flex items-baseline gap-2">
                      <h3 className="font-sans text-sm font-semibold text-espresso">
                        {active.name}
                      </h3>
                      {active.concentration && (
                        <span className="rounded-full bg-sunlit/80 px-2 py-0.5 text-[11px] font-semibold text-espresso">
                          {active.concentration}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-muted leading-relaxed">
                      {active.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Use */}
            <div className="pt-2 space-y-4">
              <h2 className="font-serif text-2xl font-medium text-espresso">
                How to Use
              </h2>
              <ol className="space-y-3">
                {product.howToUse.map((step, i) => (
                  <li key={step} className="flex items-start gap-3.5 text-sm text-espresso-soft">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sunlit text-xs font-semibold text-espresso">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Clinical Notes & Full INCI */}
            <div className="pt-2 space-y-4">
              <h2 className="font-serif text-2xl font-medium text-espresso">
                Clinical Standards &amp; Full Ingredients
              </h2>
              <ul className="space-y-2">
                {product.clinicalNotes.map((note) => (
                  <li key={note} className="flex items-center gap-2.5 text-sm text-espresso">
                    <Check className="w-4 h-4 text-espresso shrink-0" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
              <details className="rounded-2xl border border-border-warm bg-cream px-5 py-3.5">
                <summary className="cursor-pointer text-sm font-semibold text-espresso">
                  Full INCI Ingredient List
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-muted leading-relaxed">
                  {product.fullIngredients}
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Companion Product Band */}
      {companion && (
        <section className="py-14 bg-cream-warm/70 border-t border-border-warm/80">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                Complete the 2-Step Ritual
              </p>
              <h2 className="mt-1.5 font-serif text-2xl sm:text-3xl font-medium text-espresso">
                Pair with {companion.name}
              </h2>
              <p className="mt-1 text-sm text-muted">
                {companion.subtitle} · ₹{companion.priceInr}
              </p>
            </div>
            <Link
              href={`/products/${companion.slug}`}
              className="shrink-0 rounded-full bg-espresso px-6 py-3 text-sm font-medium text-[#FFFDF9] hover:bg-espresso-soft transition-colors"
            >
              Explore {companion.category}
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
