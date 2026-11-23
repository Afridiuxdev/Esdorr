"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  Truck,
  ShieldCheck,
  RotateCcw,
  ChevronDown,
  Search,
  ShoppingBag,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import { PRODUCTS, SITE_CONFIG } from "@/data/site-config";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products", hasDropdown: true },
  { href: "/about", label: "About Us" },
  { href: "/skin-science", label: "Skin Science" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const filteredProducts = PRODUCTS.filter((product) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(q) ||
      product.subtitle.toLowerCase().includes(q) ||
      product.highlights.some((h) => h.toLowerCase().includes(q))
    );
  });

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top announcement bar matching mockup */}
      <div className="bg-espresso text-[#F8EFE4] text-[11px] sm:text-xs tracking-wide">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-center md:justify-between gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber shrink-0" strokeWidth={1.75} />
              <span>Science-Backed Skincare for Indian Skin</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-amber shrink-0" strokeWidth={1.75} />
              <span>Free Shipping on Orders Above ₹999</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber shrink-0" strokeWidth={1.75} />
              <span>100% Authentic Products</span>
            </span>
            <span className="hidden lg:inline-flex items-center gap-1.5">
              <RotateCcw className="w-3.5 h-3.5 text-amber shrink-0" strokeWidth={1.75} />
              <span>Easy Returns</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="bg-[#FFFDF9]/95 backdrop-blur-md border-b border-border-warm/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-[72px] items-center justify-between gap-4">
            {/* Brand Wordmark */}
            <Link
              href="/"
              className="font-serif text-2xl sm:text-[26px] font-semibold tracking-[0.06em] text-espresso hover:opacity-85 transition-opacity"
            >
              {SITE_CONFIG.brandName}
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
              {NAV_LINKS.map((item) =>
                item.hasDropdown ? (
                  <div
                    key={item.href}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setProductsDropdownOpen((v) => !v)}
                      aria-expanded={productsDropdownOpen}
                      className={`inline-flex items-center gap-1 py-1 text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? "text-espresso border-b-2 border-espresso"
                          : "text-muted hover:text-espresso"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          productsDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {productsDropdownOpen && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72">
                        <div className="rounded-2xl bg-[#FFFDF9] border border-border-warm shadow-xl shadow-espresso/8 p-2">
                          <Link
                            href="/products"
                            onClick={() => setProductsDropdownOpen(false)}
                            className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-espresso hover:bg-cream-warm transition-colors"
                          >
                            All Products
                            <span className="block text-xs font-normal text-muted mt-0.5">
                              Explore the complete 2-step line
                            </span>
                          </Link>
                          <div className="my-1.5 border-t border-border-warm/70" />
                          {PRODUCTS.map((p) => (
                            <Link
                              key={p.slug}
                              href={`/products/${p.slug}`}
                              onClick={() => setProductsDropdownOpen(false)}
                              className="block rounded-xl px-3.5 py-2.5 hover:bg-cream-warm transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-espresso">
                                  {p.shortName}
                                </span>
                                <span className="text-xs font-semibold text-espresso-soft">
                                  ₹{p.priceInr}
                                </span>
                              </div>
                              <span className="block text-xs text-muted mt-0.5">
                                {p.subtitle}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`py-1 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-espresso border-b-2 border-espresso"
                        : "text-muted hover:text-espresso"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setSearchOpen((v) => !v)}
                aria-label="Search products and ingredients"
                className="p-2 rounded-full text-espresso hover:bg-cream-warm transition-colors"
              >
                {searchOpen ? (
                  <X className="w-[19px] h-[19px]" strokeWidth={1.75} />
                ) : (
                  <Search className="w-[19px] h-[19px]" strokeWidth={1.75} />
                )}
              </button>

              <Link
                href="/products"
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-espresso px-4 py-2 text-xs font-medium tracking-wide text-[#FFFDF9] hover:bg-espresso-soft transition-colors"
              >
                <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.75} />
                <span>Shop Official</span>
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
                className="md:hidden p-2 rounded-full text-espresso hover:bg-cream-warm transition-colors"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" strokeWidth={1.75} />
                ) : (
                  <Menu className="w-5 h-5" strokeWidth={1.75} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Inline Search Drawer */}
        {searchOpen && (
          <div className="border-t border-border-warm bg-[#FFFDF9]">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 py-4">
              <div className="relative">
                <Search className="w-4 h-4 text-muted absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Melano Glo, SPF 50, Niacinamide, Tranexamic Acid..."
                  autoFocus
                  className="w-full rounded-full border border-border-warm bg-cream pl-11 pr-4 py-2.5 text-sm text-espresso placeholder:text-subtle focus:border-espresso"
                />
              </div>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="flex items-center justify-between rounded-xl border border-border-warm/80 bg-cream/60 px-4 py-3 hover:bg-cream-warm transition-colors"
                    >
                      <div>
                        <p className="text-sm font-semibold text-espresso">{p.name}</p>
                        <p className="text-xs text-muted">{p.subtitle}</p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-espresso">
                        ₹{p.priceInr}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-muted py-2 col-span-2">
                    No matching products found. Try searching &ldquo;Serum&rdquo;,
                    &ldquo;Sunscreen&rdquo;, or &ldquo;Niacinamide&rdquo;.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Nav Drawer */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border-warm bg-[#FFFDF9] px-4 pt-3 pb-5 space-y-1">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-xl px-4 py-2.5 text-sm font-medium ${
                  isActive(item.href)
                    ? "bg-cream-warm text-espresso"
                    : "text-muted hover:bg-cream hover:text-espresso"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 px-2">
              <Link
                href="/products"
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-espresso px-5 py-2.5 text-sm font-medium text-[#FFFDF9]"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Shop Official Storefronts</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
