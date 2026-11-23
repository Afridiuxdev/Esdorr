export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function assetPath(path: string): string {
  return `${BASE_PATH}${path}`;
}

export interface MarketplaceLink {
  name: "Amazon" | "Nykaa" | "Flipkart";
  url: string;
  badgeText: string;
  accentBg: string;
  accentText: string;
}

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  subtitle: string;
  category: "Serum" | "Sunscreen";
  volume: string;
  priceInr: number;
  mrpInr: number;
  skinTypes: string;
  cardTheme: "blush" | "sunlit";
  image: string;
  textureImage: string;
  highlights: string[];
  description: string;
  howToUse: string[];
  keyActives: {
    name: string;
    concentration?: string;
    role: string;
  }[];
  fullIngredients: string;
  clinicalNotes: string[];
  marketplaces: MarketplaceLink[];
}

export const SITE_CONFIG = {
  brandName: "ESDORR",
  tagline: "Science-backed skincare for brighter, clearer and healthier skin.",
  announcementItems: [
    "Science-Backed Skincare for Indian Skin",
    "Free Shipping on Orders Above ₹999",
    "100% Authentic Products",
    "Easy Returns",
  ],
  contact: {
    email: "care@esdorr.com",
    pressEmail: "hello@esdorr.com",
    phone: "+91 98200 00000",
    whatsappNumber: "919820000000",
    hours: "Mon – Sat, 10:00 AM – 6:30 PM IST",
    address: "ESDORR Skin Sciences Pvt. Ltd., Lower Parel, Mumbai, Maharashtra 400013, India",
  },
  socials: {
    instagram: "https://instagram.com/esdorrskin",
    youtube: "https://youtube.com/@esdorrskin",
    facebook: "https://facebook.com/esdorrskin",
  },
  // Update these URLs with your live storefront product URLs anytime
  storefronts: {
    amazonStore: "https://www.amazon.in/s?k=ESDORR+Skincare",
    nykaaStore: "https://www.nykaa.com/search/result/?q=ESDORR",
    flipkartStore: "https://www.flipkart.com/search?q=ESDORR+Skincare",
  },
};

export const PRODUCTS: Product[] = [
  {
    slug: "melano-glo-tx-serum",
    name: "Melano Glo TX Serum",
    shortName: "Melano Glo TX Serum",
    eyebrow: "BRIGHTEN & CORRECT",
    subtitle: "Advanced Brightening & Dark Spot Corrector",
    category: "Serum",
    volume: "30ml / 1.01 fl. oz.",
    priceInr: 699,
    mrpInr: 849,
    skinTypes: "All Skin Types • Fragrance-Free",
    cardTheme: "blush",
    image: assetPath("/images/melano-glo-serum.png"),
    textureImage: assetPath("/images/routine-step1-dropper.jpg"),
    highlights: [
      "5% Niacinamide",
      "3% Tranexamic Acid",
      "Alpha Arbutin",
      "Vitamin C",
      "Postbiotic Complex",
    ],
    description:
      "A lightweight, fast-absorbing brightening serum engineered specifically for melanin-rich Indian skin. Combining 5% Niacinamide and 3% Tranexamic Acid with Alpha Arbutin, stabilized Vitamin C, and Lactobacillus Postbiotic Complex, it visibly fades stubborn dark spots, post-acne marks, and uneven tone without irritating the skin barrier.",
    howToUse: [
      "Cleanse your face thoroughly and pat skin completely dry.",
      "Dispense 3–4 drops of Melano Glo TX Serum onto fingertips.",
      "Gently pat and press into face and neck until fully absorbed.",
      "Use twice daily (AM & PM). Always follow with Bright GLO Sunscreen SPF 50 in the morning.",
    ],
    keyActives: [
      {
        name: "Niacinamide",
        concentration: "5%",
        role: "Minimizes pigment transfer, refines pores, and fortifies the lipid barrier.",
      },
      {
        name: "Tranexamic Acid",
        concentration: "3%",
        role: "Targets stubborn hyperpigmentation, melasma-prone patches, and post-acne marks.",
      },
      {
        name: "Alpha Arbutin",
        concentration: "1%",
        role: "Gently inhibits excess tyrosinase activity for visibly clearer, luminous tone.",
      },
      {
        name: "Stabilized Vitamin C",
        role: "Delivers antioxidant radiance and defends against daily oxidative dullness.",
      },
      {
        name: "Postbiotic Complex",
        role: "Lactobacillus Ferment Lysate calms skin and maintains a resilient microbiome.",
      },
    ],
    fullIngredients:
      "Aqua, Niacinamide (5%), Tranexamic Acid (3%), Propanediol, Alpha-Arbutin, 3-O-Ethyl Ascorbic Acid, Lactobacillus Ferment Lysate, Glycerin, Panthenol, Sodium Hyaluronate, Allantoin, Dipotassium Glycyrrhizate, Phenoxyethanol, Ethylhexylglycerin.",
    clinicalNotes: [
      "Dermatologically tested for Indian skin tones (Fitzpatrick III–V)",
      "Non-comedogenic, pH balanced (5.2–5.8)",
      "Free from parabens, sulfates, essential oils, and synthetic fragrance",
    ],
    marketplaces: [
      {
        name: "Amazon",
        url: "https://www.amazon.in/s?k=ESDORR+Melano+Glo+TX+Serum",
        badgeText: "Buy on Amazon.in",
        accentBg: "#2E1A0E",
        accentText: "#FFF9F2",
      },
      {
        name: "Nykaa",
        url: "https://www.nykaa.com/search/result/?q=ESDORR+Melano+Glo+TX+Serum",
        badgeText: "Buy on Nykaa",
        accentBg: "#E80071",
        accentText: "#FFFFFF",
      },
      {
        name: "Flipkart",
        url: "https://www.flipkart.com/search?q=ESDORR+Melano+Glo+TX+Serum",
        badgeText: "Buy on Flipkart",
        accentBg: "#2874F0",
        accentText: "#FFFFFF",
      },
    ],
  },
  {
    slug: "bright-glo-sunscreen",
    name: "Bright GLO Sunscreen SPF 50 PA++++",
    shortName: "Bright GLO Sunscreen SPF 50",
    eyebrow: "PROTECT & GLOW",
    subtitle: "Broad Spectrum Brightening UV Protection",
    category: "Sunscreen",
    volume: "50ml / 1.69 fl. oz.",
    priceInr: 599,
    mrpInr: 749,
    skinTypes: "All Skin Types • Zero White Cast",
    cardTheme: "sunlit",
    image: assetPath("/images/bright-glo-sunscreen.png"),
    textureImage: assetPath("/images/routine-step2-swatch.jpg"),
    highlights: [
      "Broad Spectrum UV Protection",
      "Brightens & Evens Skin Tone",
      "Niacinamide + Vitamin C",
      "Licorice Extract",
      "Postbiotic Complex",
    ],
    description:
      "A feather-light, zero-white-cast broad spectrum SPF 50 PA++++ sunscreen built for humid Indian summers. Powered by next-generation photostable UV filters alongside Niacinamide, Vitamin C, Licorice Extract, and Postbiotic Complex, it shields against tanning and photoaging while leaving a breathable, natural satin glow.",
    howToUse: [
      "Apply as the final step of your morning skincare routine, after Melano Glo TX Serum.",
      "Use two generous finger-lengths across face, ears, and neck 15 minutes before sun exposure.",
      "Blend gently — melts seamlessly into deeper skin tones with zero chalky residue.",
      "Reapply every 2–3 hours during prolonged outdoor sun exposure.",
    ],
    keyActives: [
      {
        name: "SPF 50 PA++++ Photostable Filters",
        role: "High UVA & UVB defense that prevents UV-induced darkening and premature aging.",
      },
      {
        name: "Niacinamide + Vitamin C",
        role: "Dual brightening antioxidants that neutralize free radicals triggered by UV exposure.",
      },
      {
        name: "Licorice Root Extract",
        role: "Naturally soothes sun-stressed skin and helps prevent post-sun pigmentation.",
      },
      {
        name: "Postbiotic Complex",
        role: "Lactobacillus Ferment Lysate supports moisture retention and skin barrier calm.",
      },
    ],
    fullIngredients:
      "Aqua, Ethylhexyl Methoxycinnamate, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Niacinamide, C12-15 Alkyl Benzoate, 3-O-Ethyl Ascorbic Acid, Glycyrrhiza Glabra (Licorice) Root Extract, Lactobacillus Ferment Lysate, Glycerin, Tocopheryl Acetate, Carbomer, Phenoxyethanol.",
    clinicalNotes: [
      "Tested for SPF 50 & PA++++ broad-spectrum UVA/UVB protection",
      "Zero white cast, sweat-tolerant, non-greasy finish for humid weather",
      "Cruelty-free, vegan, oxybenzone-free & fragrance-free",
    ],
    marketplaces: [
      {
        name: "Amazon",
        url: "https://www.amazon.in/s?k=ESDORR+Bright+GLO+Sunscreen+SPF+50",
        badgeText: "Buy on Amazon.in",
        accentBg: "#2E1A0E",
        accentText: "#FFF9F2",
      },
      {
        name: "Nykaa",
        url: "https://www.nykaa.com/search/result/?q=ESDORR+Bright+GLO+Sunscreen",
        badgeText: "Buy on Nykaa",
        accentBg: "#E80071",
        accentText: "#FFFFFF",
      },
      {
        name: "Flipkart",
        url: "https://www.flipkart.com/search?q=ESDORR+Bright+GLO+Sunscreen",
        badgeText: "Buy on Flipkart",
        accentBg: "#2874F0",
        accentText: "#FFFFFF",
      },
    ],
  },
];

export const ROUTINE_DUO = {
  name: "The Complete 2-Step Glow Ritual",
  priceInr: 1199,
  mrpInr: 1598,
  savingsText: "Save ₹399 on the Duo",
};

export const SCIENCE_ACTIVES = [
  {
    name: "5% Niacinamide",
    tag: "Barrier & Tone",
    mechanism:
      "Inhibits melanosome transfer from melanocytes to keratinocytes while stimulating ceramide synthesis.",
    benefit: "Visibly smoother texture, balanced oil production, and more uniform skin tone.",
    foundIn: ["Melano Glo TX Serum", "Bright GLO Sunscreen SPF 50"],
  },
  {
    name: "3% Tranexamic Acid",
    tag: "Spot Correction",
    mechanism:
      "Interrupts the plasminogen–plasmin pathway triggered by UV exposure and inflammation that leads to stubborn pigmentation.",
    benefit: "Fades post-inflammatory hyperpigmentation, dark patches, and stubborn spots gently.",
    foundIn: ["Melano Glo TX Serum"],
  },
  {
    name: "Alpha Arbutin",
    tag: "Tyrosinase Control",
    mechanism:
      "Slow-release biosynthetic brightening active that competitively moderates excess melanin production without cytotoxicity.",
    benefit: "Progressive clarity and even radiance suitable for daily long-term use.",
    foundIn: ["Melano Glo TX Serum"],
  },
  {
    name: "Stabilized Vitamin C",
    tag: "Antioxidant Glow",
    mechanism:
      "3-O-Ethyl Ascorbic Acid penetrates cleanly without rapid oxidation, neutralizing UV-induced free radicals.",
    benefit: "Boosts luminosity and supports collagen vitality without tingling or instability.",
    foundIn: ["Melano Glo TX Serum", "Bright GLO Sunscreen SPF 50"],
  },
  {
    name: "Postbiotic Complex",
    tag: "Microbiome Shield",
    mechanism:
      "Lactobacillus Ferment Lysate strengthens skin's natural defense peptides and calms low-grade irritation.",
    benefit: "Keeps active skincare gentle, balanced, and comfortable even on reactive skin.",
    foundIn: ["Melano Glo TX Serum", "Bright GLO Sunscreen SPF 50"],
  },
  {
    name: "Licorice Root Extract",
    tag: "Soothing Brightener",
    mechanism:
      "Rich in glabridin and liquiritin to disperse surface pigment and calm UV-stressed skin.",
    benefit: "Reinforces daily sun defense with a calm, hydrated finish.",
    foundIn: ["Bright GLO Sunscreen SPF 50"],
  },
];

export const FAQS = [
  {
    question: "Can I use Melano Glo TX Serum and Bright GLO Sunscreen together every day?",
    answer:
      "Yes — they were formulated as a synergistic 2-step morning ritual. Apply 3–4 drops of Melano Glo TX Serum to clean, dry skin, let it absorb for 60 seconds, and lock in protection with Bright GLO Sunscreen SPF 50 PA++++.",
  },
  {
    question: "Does Bright GLO Sunscreen leave a white cast on deeper Indian skin tones?",
    answer:
      "No. Bright GLO Sunscreen uses modern photostable filters in a lightweight emulsion that blends invisibly across Fitzpatrick III–V skin tones with a breathable, non-greasy finish.",
  },
  {
    question: "How long before I see visible results on dark spots?",
    answer:
      "Most users notice improved skin hydration and radiance within 2 weeks. Visible fading of stubborn dark spots and post-acne marks typically appears in 4–8 weeks of consistent daily use alongside SPF protection.",
  },
  {
    question: "Where can I purchase authentic ESDORR products?",
    answer:
      "ESDORR products are officially available on Amazon India, Nykaa, and Flipkart. Always verify the seller badge for 100% authentic, freshly batched products.",
  },
];
