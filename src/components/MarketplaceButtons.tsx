import { ExternalLink } from "lucide-react";
import type { MarketplaceLink } from "@/data/site-config";

interface MarketplaceButtonsProps {
  marketplaces: MarketplaceLink[];
  compact?: boolean;
}

export function MarketplaceButtons({
  marketplaces,
  compact = false,
}: MarketplaceButtonsProps) {
  return (
    <div className={`flex flex-wrap gap-2.5 ${compact ? "pt-1" : "pt-2"}`}>
      {marketplaces.map((mp) => (
        <a
          key={mp.name}
          href={mp.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-1.5 rounded-full font-medium transition-transform duration-150 hover:-translate-y-0.5 ${
            compact
              ? "px-3.5 py-2 text-xs"
              : "px-5 py-3 text-sm flex-1 sm:flex-none min-w-[148px]"
          }`}
          style={{
            backgroundColor: mp.accentBg,
            color: mp.accentText,
          }}
        >
          <span>{compact ? mp.name : mp.badgeText}</span>
          <ExternalLink className={compact ? "w-3 h-3 opacity-85" : "w-3.5 h-3.5 opacity-85"} />
        </a>
      ))}
    </div>
  );
}
