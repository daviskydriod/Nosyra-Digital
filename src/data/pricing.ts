// src/data/pricing.ts
// Central pricing data — edit amounts here only, both pages/components read from this file.

export interface PricingTier {
  id: string;
  name: string;
  usd: number | null; // null = "Custom quote"
  ngn: number | null;
  period?: string; // e.g. "/mo" for retainers, omit for one-time
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    usd: 150,
    ngn: 150000,
    description: "A clean, professional site for businesses just getting online.",
    features: [
      "1–5 custom pages",
      "Mobile-responsive design",
      "Contact form",
      "1 round of revisions",
      "5–10 working days delivery",
    ],
    ctaLabel: "Start with Starter",
  },
  {
    id: "business",
    name: "Business",
    usd: 250,
    ngn: 250000,
    description: "For growing businesses that need more pages and an admin dashboard.",
    features: [
      "Up to 10 custom pages",
      "Admin dashboard for content updates",
      "Blog setup",
      "On-page SEO setup",
      "2 rounds of revisions",
    ],
    highlighted: true,
    ctaLabel: "Choose Business",
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    usd: 500,
    ngn: 500000,
    description: "A full online store, ready to take payments from day one.",
    features: [
      "Full product catalog & inventory management",
      "Payment gateway integration (Paystack / Moneris)",
      "Wishlist & customer accounts",
      "Order tracking dashboard",
      "3 rounds of revisions",
    ],
    ctaLabel: "Build My Store",
  },
  {
    id: "custom",
    name: "Custom / Enterprise",
    usd: null,
    ngn: null,
    description: "Multi-market platforms, custom admin systems, or anything bespoke.",
    features: [
      "Custom admin & API systems",
      "Multi-currency, multi-market builds",
      "Ongoing support & maintenance options",
      "Scoped after a discovery call",
    ],
    ctaLabel: "Get a Custom Quote",
  },
];

export interface AddOn {
  name: string;
  usd: string;
  ngn: string;
}

export const addOns: AddOn[] = [
  { name: "Social Media Management (monthly)", usd: "From $150/mo", ngn: "From ₦200,000/mo" },
  { name: "UGC-Style Ad Video", usd: "From $80", ngn: "From ₦100,000" },
  { name: "Logo & Brand Identity", usd: "From $120", ngn: "From ₦150,000" },
];