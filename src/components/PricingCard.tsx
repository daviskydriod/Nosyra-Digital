// src/components/PricingCard.tsx
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import GradientButton from "@/components/ui/GradientButton";
import type { PricingTier } from "@/data/pricing";

interface PricingCardProps {
  tier: PricingTier;
  priceLabel: string;
  index: number;
}

const PricingCard = ({ tier, priceLabel, index }: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "relative flex flex-col p-8 rounded-xl border-2 bg-card transition-all duration-300 h-full",
        tier.highlighted
          ? "border-cyan shadow-[0_0_30px_hsl(var(--cyan)/0.15)]"
          : "border-border hover:border-cyan/50"
      )}
    >
      {tier.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold uppercase tracking-widest bg-cyan text-primary-foreground rounded-full">
          Most Popular
        </span>
      )}

      <h3 className="text-2xl font-poppins font-bold text-foreground mb-2">{tier.name}</h3>
      <p className="text-muted-foreground text-sm mb-6">{tier.description}</p>

      <div className="mb-6">
        <span className="text-4xl font-black text-gradient">{priceLabel}</span>
        {tier.period && <span className="text-muted-foreground ml-1">{tier.period}</span>}
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <GradientButton
        href="/contact"
        variant={tier.highlighted ? "primary" : "outline"}
        className="w-full justify-center"
      >
        {tier.ctaLabel}
      </GradientButton>
    </motion.div>
  );
};

export default PricingCard;
