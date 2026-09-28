// src/pages/Pricing.tsx
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import PricingCard from "@/components/PricingCard";
import { pricingTiers, addOns } from "@/data/pricing";
import { useCurrency } from "@/hooks/useCurrency";
import { cn } from "@/lib/utils";

const Pricing = () => {
  const { currency, setCurrency, format } = useCurrency("USD");

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="container mx-auto relative z-10">
          <SectionHeading
            badge="Pricing"
            title="Clear starting points for different levels of digital ambition."
            subtitle="Choose the right engagement path for your business. Final scope is shaped around your goals, content, integrations, and launch timeline."
          />

          {/* Currency toggle */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex items-center bg-card border-2 border-border rounded-full p-1">
              <button
                onClick={() => setCurrency("USD")}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                  currency === "USD"
                    ? "bg-cyan text-primary-foreground shadow-[0_0_20px_hsl(var(--cyan)/0.4)]"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrency("NGN")}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                  currency === "NGN"
                    ? "bg-cyan text-primary-foreground shadow-[0_0_20px_hsl(var(--cyan)/0.4)]"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                NGN (₦)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement paths */}
      <section className="pb-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {pricingTiers.map((tier, index) => (
              <PricingCard
                key={tier.id}
                tier={tier}
                priceLabel={format(tier.usd, tier.ngn)}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <SectionHeading title="Extend the system after launch" align="center" className="mb-10" />
          <div className="space-y-3">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="flex items-center justify-between px-6 py-4 rounded-xl border border-border bg-card"
              >
                <span className="text-foreground font-medium">{addon.name}</span>
                <span className="text-cyan font-semibold">
                  {currency === "USD" ? addon.usd : addon.ngn}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note / CTA */}
      <section className="pb-24 px-4 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-xl mx-auto"
        >
          Need a commerce platform, booking flow, client portal, or multi-market system? We scope complex work after a focused discovery conversation.
        </motion.p>
      </section>
    </Layout>
  );
};

export default Pricing;
