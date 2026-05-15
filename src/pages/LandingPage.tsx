```tsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

import {
  Globe,
  Megaphone,
  Palette,
  Shield,
  Clock,
  Star,
  AlertCircle,
  ChevronDown,
  Zap,
  CheckCircle,
} from "lucide-react";


// REVIEW IMAGES
import review1 from "@/assets/reviews/review1.jpg";
import review2 from "@/assets/reviews/review2.jpg";
import review3 from "@/assets/reviews/review3.jpg";
import review4 from "@/assets/reviews/review4.jpg";
```


// ─────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────
const WA_NUMBER = "2347058466586";

const OFFER_CLOSE_DATE = "June 30";
const SLOTS_LEFT = 3;

const WA_OFFER = encodeURIComponent(
  "Hi Nosyra Digital! I saw the ₦80,000 website package and I'm interested. Please let me know how to get started."
);

const WA_OFFER_URL = `https://wa.me/${WA_NUMBER}?text=${WA_OFFER}`;

// ─────────────────────────────────────────────────────
// COUNTDOWN
// ─────────────────────────────────────────────────────
function useCountdown() {
  const getEnd = () => {
    const d = new Date();
    d.setHours(23, 59, 59, 0);
    return d.getTime();
  };

  const [t, setT] = useState({
    h: "23",
    m: "59",
    s: "59",
  });

  useEffect(() => {
    const end = getEnd();

    const id = setInterval(() => {
      const diff = Math.max(0, end - Date.now());

      setT({
        h: String(Math.floor(diff / 3600000)).padStart(2, "0"),
        m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0"),
        s: String(Math.floor((diff % 60000) / 1000)).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return t;
}

// ─────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────
function FaqItem({
  q,
  a,
}: {
  q: string;
  a: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border border-border rounded-xl overflow-hidden cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-6 py-4 bg-card">
        <span className="font-semibold text-foreground">
          {q}
        </span>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
        >
          <ChevronDown className="w-5 h-5 text-blue-600" />
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
          >
            <p className="px-6 py-4 text-muted-foreground bg-card/40">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────────────
// BUTTON
// ─────────────────────────────────────────────────────
function WAButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white"
      style={{
        background:
          "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
        boxShadow:
          "0 8px 32px rgba(37,99,235,0.35)",
      }}
    >
      {label}
    </motion.a>
  );
}

// ─────────────────────────────────────────────────────
// VALUE ITEMS
// ─────────────────────────────────────────────────────
const valueItems = [
  {
    icon: Globe,
    title: "Custom Professional Website",
    desc:
      "Fully custom-built website designed specifically for your business.",
    value: "₦120,000",
  },
  {
    icon: Palette,
    title: "Professional Logo Design",
    desc:
      "Memorable logo in all formats.",
    value: "₦35,000",
  },
  {
    icon: Palette,
    title: "5 Branded Social Media Flyers",
    desc:
      "Professional social media flyers matching your brand.",
    value: "₦30,000",
  },
  {
    icon: Megaphone,
    title: "1 Week Meta Ads Campaign",
    desc:
      "Targeted Facebook & Instagram ads setup.",
    value: "₦60,000",
  },
];

const faqs = [
  {
    q: "How long does the website take?",
    a:
      "5 to 10 working days after payment and content submission.",
  },
  {
    q: "Can I pay in installments?",
    a:
      "Yes. 50% upfront and balance after delivery.",
  },
  {
    q: "Is this a custom website?",
    a:
      "Yes. Every website is custom designed from scratch.",
  },
];

// ─────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────
const LandingPage = () => {
  const { h, m, s } = useCountdown();

  return (
    <>
      {/* URGENCY BAR */}
      <div
        className="fixed top-0 left-0 right-0 z-50 text-center py-2 px-4 text-sm font-bold text-white"
        style={{
          background:
            "linear-gradient(90deg,#1d4ed8,#2563eb,#1d4ed8)",
        }}
      >
        ⚡ {SLOTS_LEFT} SLOTS LEFT — OFFER CLOSES
        {` ${OFFER_CLOSE_DATE} `}
        — {h}:{m}:{s}
      </div>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-40 pb-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black leading-tight mb-6"
          >
            Get A Professional Website,
            Branding & Marketing Package
            For Your Business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            We help businesses look professional online,
            attract more customers, and increase sales.
          </motion.p>

          <WAButton
            href={WA_OFFER_URL}
            label="CLAIM THIS OFFER ON WHATSAPP →"
          />
        </div>
      </section>

      {/* OFFER SECTION */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-600 font-bold text-sm mb-6">
              <Zap className="w-4 h-4" />
              THE GODFATHER OFFER
            </span>

            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Everything You Need
              To Win Online
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {valueItems.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl border border-blue-600/20 bg-card"
              >
                <item.icon className="w-10 h-10 text-blue-600 mb-4" />

                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-muted-foreground mb-4">
                  {item.desc}
                </p>

                <p className="line-through opacity-50">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* PRICE */}
          <div className="rounded-3xl p-10 text-center border-2 border-blue-600/30 bg-card">
            <p className="text-muted-foreground mb-2">
              Total Market Value
            </p>

            <p className="text-4xl font-black line-through opacity-40 mb-4">
              ₦245,000+
            </p>

            <p className="text-6xl font-black mb-6">
              ₦80,000
            </p>

            <WAButton
              href={WA_OFFER_URL}
              label="CLAIM MY SLOT NOW →"
            />
          </div>
        </div>
      </section>

      {/* REVIEWS */}
<section className="py-24 px-4">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-12">
      <h2 className="text-4xl font-black mb-4">
        Client Reviews
      </h2>

      <p className="text-muted-foreground">
        Real screenshots from happy clients
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[review1, review2, review3, review4].map(
        (img, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="overflow-hidden rounded-2xl border border-blue-600/20 bg-card"
          >
            <img
              src={img}
              alt={`review-${i + 1}`}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        )
      )}
    </div>
  </div>
</section>

      {/* GUARANTEE */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">

          <div className="p-10 rounded-3xl border border-blue-600/20 text-center">
            <Shield className="w-14 h-14 text-blue-600 mx-auto mb-5" />

            <h3 className="text-3xl font-black mb-4">
              Full Refund Guarantee
            </h3>

            <p className="text-muted-foreground">
              If you are not satisfied with the final
              delivery, we refund your deposit.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-4xl font-black text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                q={faq.q}
                a={faq.a}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Ready To Grow Your Business?
          </h2>

          <p className="text-muted-foreground mb-10">
            Send us a message on WhatsApp and let's
            get started.
          </p>

          <WAButton
            href={WA_OFFER_URL}
            label="MESSAGE US ON WHATSAPP →"
          />

          <div className="flex justify-center gap-6 mt-8 text-sm text-muted-foreground flex-wrap">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600" />
              50% Deposit
            </span>

            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600" />
              Fast Delivery
            </span>

            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-600" />
              Money Back Guarantee
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
```
