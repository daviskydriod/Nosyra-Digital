// src/components/FAQAccordion.tsx
// Extracted from the FaqItem pattern in LandingPage.tsx so it's reusable across pages
// instead of duplicated.
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface FaqEntry {
  q: string;
  a: string;
}

const FaqItem = ({ q, a }: FaqEntry) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border border-border rounded-xl overflow-hidden cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-6 py-4 bg-card">
        <span className="font-semibold text-foreground pr-4">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-5 h-5 text-cyan flex-shrink-0" />
        </motion.div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="px-6 py-4 text-muted-foreground bg-card/40 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface FAQAccordionProps {
  items: FaqEntry[];
  className?: string;
}

const FAQAccordion = ({ items, className }: FAQAccordionProps) => {
  return (
    <div className={`space-y-4 ${className ?? ""}`}>
      {items.map((item, i) => (
        <FaqItem key={i} q={item.q} a={item.a} />
      ))}
    </div>
  );
};

export default FAQAccordion;
