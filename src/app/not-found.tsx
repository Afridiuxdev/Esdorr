import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-cream px-4 py-20">
      <div className="text-center max-w-md space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
          Page Not Found
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-medium text-espresso">
          We couldn&apos;t find that page.
        </h1>
        <p className="text-sm text-muted leading-relaxed">
          Explore our science-backed 2-step skincare line or return to the
          ESDORR home page.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-espresso px-7 py-3 text-sm font-medium text-[#FFFDF9] hover:bg-espresso-soft transition-colors"
          >
            <span>Return Home</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
