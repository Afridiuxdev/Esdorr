"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, Instagram, Youtube, Facebook } from "lucide-react";
import { SITE_CONFIG } from "@/data/site-config";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-espresso-deep text-[#F5ECE2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand column */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-block font-serif text-2xl font-semibold tracking-[0.08em] text-[#FFF9F2]"
            >
              {SITE_CONFIG.brandName}
            </Link>
            <p className="text-sm text-[#D6C5B5] leading-relaxed max-w-xs">
              {SITE_CONFIG.tagline}
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ESDORR on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#F5ECE2] hover:border-amber hover:text-amber transition-colors"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.75} />
              </a>
              <a
                href={SITE_CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ESDORR on YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#F5ECE2] hover:border-amber hover:text-amber transition-colors"
              >
                <Youtube className="w-4 h-4" strokeWidth={1.75} />
              </a>
              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ESDORR on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#F5ECE2] hover:border-amber hover:text-amber transition-colors"
              >
                <Facebook className="w-4 h-4" strokeWidth={1.75} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-sans text-sm font-semibold tracking-wide text-[#FFF9F2]">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-[#D6C5B5]">
              <li>
                <Link href="/" className="hover:text-amber transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/skin-science" className="hover:text-amber transition-colors">
                  Skin Science
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-sans text-sm font-semibold tracking-wide text-[#FFF9F2]">
              Customer Care
            </h3>
            <ul className="space-y-2.5 text-sm text-[#D6C5B5]">
              <li>
                <Link href="/contact#faqs" className="hover:text-amber transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber transition-colors">
                  Official Marketplaces
                </Link>
              </li>
              <li>
                <Link href="/skin-science" className="hover:text-amber transition-colors">
                  Clinical Standards
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber transition-colors">
                  Our Promise
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber transition-colors">
                  Support &amp; Enquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-sans text-sm font-semibold tracking-wide text-[#FFF9F2]">
              Stay in the Glow
            </h3>
            <p className="text-sm text-[#D6C5B5] leading-relaxed">
              Get skincare tips, offers and new launches straight to your inbox.
            </p>
            {subscribed ? (
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm text-amber-soft">
                <Check className="w-4 h-4 text-amber" />
                <span>You&apos;re on the list. Welcome to ESDORR.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex items-center max-w-sm">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-l-full bg-[#FFFDF9] px-4 py-2.5 text-sm text-espresso placeholder:text-subtle focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="flex h-[40px] shrink-0 items-center justify-center rounded-r-full bg-amber px-4 text-espresso-deep hover:bg-amber-soft transition-colors"
                >
                  <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#BDA998]">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved.</p>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="text-[#9E8876] mr-1">Official Partners:</span>
            <a
              href={SITE_CONFIG.storefronts.amazonStore}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-[#F5ECE2] hover:border-amber transition-colors"
            >
              Amazon.in
            </a>
            <a
              href={SITE_CONFIG.storefronts.nykaaStore}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-[#F5ECE2] hover:border-amber transition-colors"
            >
              Nykaa
            </a>
            <a
              href={SITE_CONFIG.storefronts.flipkartStore}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-[#F5ECE2] hover:border-amber transition-colors"
            >
              Flipkart
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
