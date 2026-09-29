// Central pricing data. Prices are starting points and final scope is confirmed after discovery.

export interface PricingTier {
  id: string;
  name: string;
  usd: number | null;
  ngn: number | null;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Launch",
    usd: 1500,
    ngn: 2500000,
    description: "A focused, conversion-ready website for a serious business.",
    features: ["Up to 6 custom pages", "Strategy and sitemap", "Mobile-first custom design", "Lead capture and analytics", "Technical SEO foundation", "2 revision rounds", "3–5 week delivery"],
    ctaLabel: "Plan a Launch Site",
  },
  {
    id: "business",
    name: "Growth",
    usd: 4000,
    ngn: 6500000,
    description: "A complete digital presence built to support growth.",
    features: ["Up to 12 custom pages", "Messaging and content direction", "Custom CMS or blog", "SEO-ready service architecture", "Analytics and conversion setup", "3 revision rounds", "5–8 week delivery"],
    highlighted: true,
    ctaLabel: "Choose Growth",
  },
  {
    id: "ecommerce",
    name: "Commerce",
    usd: 8500,
    ngn: 14000000,
    description: "A premium commerce or booking experience with the systems behind it.",
    features: ["Custom product or booking flows", "Payments and third-party integrations", "Customer or order dashboard", "Mobile conversion optimisation", "QA, launch, and handover", "3 revision rounds", "8–12 week delivery"],
    ctaLabel: "Build a Commerce System",
  },
  {
    id: "custom",
    name: "Platform",
    usd: null,
    ngn: null,
    description: "For multi-market platforms, portals, and complex digital products.",
    features: ["Discovery and technical planning", "Custom product or admin systems", "Multi-currency and multi-market support", "Ongoing optimisation options", "Scoped after a strategy call"],
    ctaLabel: "Discuss a Platform",
  },
];

export interface AddOn { name: string; usd: string; ngn: string; }

export const addOns: AddOn[] = [
  { name: "Growth and optimisation retainer", usd: "From $1,500/mo", ngn: "From ₦2,500,000/mo" },
  { name: "Brand strategy and identity", usd: "From $2,500", ngn: "From ₦4,000,000" },
  { name: "Content and SEO system", usd: "From $1,200", ngn: "From ₦2,000,000" },
  { name: "Custom integration or dashboard", usd: "From $2,000", ngn: "From ₦3,500,000" },
];
