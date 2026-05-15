import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientButton from "@/components/ui/GradientButton";
import {
  Globe,
  ShoppingCart,
  Megaphone,
  Palette,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
  Clock,
  Users,
  TrendingUp,
  AlertCircle,
  Gift,
  ChevronDown,
  Phone,
  Zap,
  Eye,
  Target,
  BarChart3,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS — update before going live
// ─────────────────────────────────────────────────────────────────────────────
const WA_NUMBER = "2348000000000"; // ← your WhatsApp number, no +
const OFFER_CLOSE_DATE = "June 30"; // ← update monthly
const SLOTS_LEFT = 3;
const WA_HVCO = encodeURIComponent(
  "Hi Nosyra Digital! I want my Free Website Opportunity Audit. Business name: [YOUR BUSINESS]. What I do: [YOUR BUSINESS TYPE]."
);
const WA_OFFER = encodeURIComponent(
  "Hi Nosyra Digital! I saw the ₦80,000 website package and I'm interested. Please let me know how to get started."
);
const WA_HVCO_URL = `https://wa.me/${WA_NUMBER}?text=${WA_HVCO}`;
const WA_OFFER_URL = `https://wa.me/${WA_NUMBER}?text=${WA_OFFER}`;

// ─────────────────────────────────────────────────────────────────────────────
// COUNTDOWN TIMER
// ─────────────────────────────────────────────────────────────────────────────
function useCountdown() {
  const getEnd = () => {
    const d = new Date();
    d.setHours(23, 59, 59, 0);
    return d.getTime();
  };
  const [t, setT] = useState({ h: "23", m: "59", s: "59" });
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

// ─────────────────────────────────────────────────────────────────────────────
// FAQ ITEM
// ─────────────────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-border rounded-xl overflow-hidden cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-6 py-4 bg-card hover:bg-card/80 transition-colors">
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
            <p className="px-6 py-4 text-muted-foreground bg-card/40 border-t border-border leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// WHATSAPP BUTTON
// ─────────────────────────────────────────────────────────────────────────────
function WAButton({
  href,
  label,
  size = "md",
}: {
  href: string;
  label: string;
  size?: "md" | "lg";
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-3 font-bold rounded-full transition-all duration-200 ${
        size === "lg" ? "px-10 py-5 text-lg" : "px-7 py-4 text-base"
      }`}
      style={{
        background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
        color: "#fff",
        boxShadow: "0 8px 32px rgba(37,211,102,0.35)",
      }}
    >
      {/* WhatsApp icon */}
      <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.773L0 32l8.437-2.007A15.938 15.938 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.26 22.26c-.347.976-2.01 1.87-2.76 1.99-.75.12-1.677.17-2.7-.17-.623-.2-1.423-.467-2.45-.913-4.307-1.86-7.11-6.19-7.32-6.48-.207-.293-1.69-2.247-1.69-4.28 0-2.03 1.067-3.027 1.447-3.44.38-.41.826-.513 1.1-.513.274 0 .55.003.79.013.254.01.593-.097.927.707.347.827 1.18 2.86 1.283 3.067.1.207.167.45.033.727-.133.277-.2.45-.4.693-.2.24-.42.537-.6.72-.2.2-.407.416-.175.817.233.4 1.033 1.703 2.217 2.757 1.523 1.357 2.807 1.777 3.207 1.977.4.2.633.167.867-.1.233-.267 1-1.167 1.267-1.567.267-.4.533-.333.9-.2.367.133 2.333 1.1 2.733 1.3.4.2.667.3.767.467.1.167.1.967-.247 1.943z" />
      </svg>
      {label}
    </motion.a>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// VALUE STACK DATA
// ─────────────────────────────────────────────────────────────────────────────
const valueItems = [
  {
    icon: Globe,
    title: "Custom Professional Website",
    desc: "Fully custom-built, mobile-first website designed specifically for your business — not a template. Fast, SEO-ready, built to convert visitors into paying customers.",
    value: "₦120,000",
    tag: "Core Deliverable",
    tagColor: "#00D4E8",
  },
  {
    icon: Palette,
    title: "Professional Logo Design",
    desc: "A clean, memorable logo in all formats — PNG, SVG, print-ready PDF. We include this because inconsistent branding makes websites convert worse. This protects our own work.",
    value: "₦35,000",
    tag: "Free Bonus",
    tagColor: "#fbbf24",
  },
  {
    icon: Palette,
    title: "5 Branded Social Media Flyers",
    desc: "Five ready-to-post flyers sized for Instagram, WhatsApp broadcast, and print — all matching your new website and logo. No separate designer brief needed.",
    value: "₦30,000",
    tag: "Free Bonus",
    tagColor: "#fbbf24",
  },
  {
    icon: Megaphone,
    title: "1 Week Free Meta Ad Campaign",
    desc: "We write the copy, build the creative, and run a 7-day Facebook & Instagram campaign targeting your exact audience. Same structure that's generated 15–40 leads in week one for service businesses we've worked with.",
    value: "₦60,000",
    tag: "Free Bonus",
    tagColor: "#fbbf24",
  },
];

const faqs = [
  {
    q: "How long does the website actually take to build?",
    a: "5 to 10 working days from when we receive your content and 50% deposit. We have never missed a delivery date — which is exactly why we back it with a full refund guarantee.",
  },
  {
    q: "Can I pay in installments?",
    a: "Yes. We take 50% upfront to begin and the remaining 50% on delivery — after you review and approve everything. You don't pay the balance until you're happy.",
  },
  {
    q: "Is this really a custom website or a template?",
    a: "100% custom. No page builders. No recycled templates. Every site is designed and built from scratch. Your website will look nothing like any other site we've built.",
  },
  {
    q: "Do you work with businesses in Ghana?",
    a: "Yes. We serve Nigeria, Ghana, and Canada. Payment accepted in NGN or GHS. We've delivered full projects to clients in Lagos, Abuja, Accra, and Toronto.",
  },
  {
    q: "What happens after the free 1-week ad campaign?",
    a: "We hand the full ad account to you — all data, audiences, and creative assets. You can run it yourself or we offer affordable monthly management packages if you'd prefer us to continue.",
  },
  {
    q: "What's the catch with the free audit?",
    a: "There is no catch. The audit is genuinely free. We evaluate your current digital presence and send you a personalised report via WhatsApp. If after reading it you want us to fix everything, great. If not, the report is still yours to keep and act on.",
  },
  {
    q: "What if I'm not happy with the design?",
    a: "We revise until you love it. And if after all revisions you're still not satisfied, your deposit comes back in full. That is our commitment — not just a line on the page.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const LandingPage = () => {
  const { h, m, s } = useCountdown();
  const processRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: processRef, offset: ["start end", "end start"] });
  const progressWidth = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <Layout>
      {/* ── META TAGS (add react-helmet-async to your project) ── */}
      {/* 
        Install: npm install react-helmet-async
        Wrap your App in <HelmetProvider> in main.tsx
        Then uncomment the block below:

        import { Helmet } from "react-helmet-async";

        <Helmet>
          <title>Professional Website Design for Nigerian & Ghanaian Businesses — Nosyra Digital</title>
          <meta name="description" content="Get a fully custom website + free logo + 5 flyers + 1 week Meta ads for ₦80,000. Limited to 3 businesses per month. Nosyra Digital — Nigeria, Ghana, Canada." />
          <meta property="og:title" content="Get a Professional Website Package for ₦80,000 — Nosyra Digital" />
          <meta property="og:description" content="Custom website, logo, flyers & 1-week ad campaign — all for ₦80,000. Only 3 slots per month." />
          <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
          <meta property="og:url" content="https://yourdomain.com/offer" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="₦80,000 Website Package — Nosyra Digital" />
          <meta name="twitter:description" content="Custom website + logo + flyers + 1-week ads. Only 3 case study slots open this month." />
          <meta name="twitter:image" content="https://yourdomain.com/og-image.jpg" />
          <link rel="canonical" href="https://yourdomain.com/offer" />
        </Helmet>
      */}

      {/* ════════════════════════════════════════════════════════
          URGENCY BAR — Mechanism Scarcity (Sabri: real reason)
      ════════════════════════════════════════════════════════ */}
      <div
        className="fixed top-0 left-0 right-0 z-50 text-center py-2 px-4 text-xs sm:text-sm font-bold"
        style={{
          background: "linear-gradient(90deg, #b91c1c, #dc2626, #b91c1c)",
          color: "#fff",
          letterSpacing: "0.04em",
        }}
      >
        ⚡ {SLOTS_LEFT} CASE STUDY SLOTS CLOSE {OFFER_CLOSE_DATE} — {h}:{m}:{s} remaining · After that, price returns to ₦150,000
      </div>

      {/* ════════════════════════════════════════════════════════
          HERO — Magic Lantern: Illuminate the Hidden Enemy
      ════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-sm"
              style={{
                width: 3 + (i % 3),
                height: 3 + (i % 3),
                background: `rgba(0,212,232,${0.15 + (i % 4) * 0.07})`,
                top: `${10 + i * 8}%`,
                left: `${5 + i * 9}%`,
              }}
              animate={{ y: [0, -(15 + i * 2), 0], opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-5xl">
          {/* Magic Lantern badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-semibold text-cyan bg-cyan/10 rounded-full border border-cyan/20"
          >
            <Eye className="w-4 h-4" />
            The Hidden Reason Your Business Isn't Growing
          </motion.div>

          {/* MAGIC LANTERN HEADLINE — the illumination */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-poppins font-black mb-6 leading-tight"
          >
            Right Now, A Customer Who Needs{" "}
            <span className="text-gradient">Exactly What You Sell</span> Just
            Found Your Competitor Instead
          </motion.h1>

          {/* Magic Lantern — the reveal paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed"
          >
            They Googled. Your competitor's website appeared. They read, trusted,
            and called. You never even knew they were looking. This is happening
            every day your business is invisible online — and it has{" "}
            <strong className="text-foreground">nothing to do with your product quality.</strong>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-base text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            We built a free 5-point audit that shows you{" "}
            <strong className="text-cyan">exactly how many customers you're losing online right now</strong>{" "}
            — and precisely what it takes to fix it. No cost. No commitment.
          </motion.p>

          {/* HVCO — Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          >
            <WAButton
              href={WA_HVCO_URL}
              label="Get My Free Website Audit →"
              size="lg"
            />
            <a
              href="#offer"
              className="text-sm text-muted-foreground hover:text-cyan transition-colors underline underline-offset-4"
            >
              Already convinced? See the ₦80k offer ↓
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xs text-muted-foreground"
          >
            💬 Free audit delivered via WhatsApp · Usually within 2 hours · Zero obligation
          </motion.p>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6"
          >
            {[
              { icon: Users, label: "50+ Clients Served" },
              { icon: Globe, label: "Nigeria · Ghana · Canada" },
              { icon: Star, label: "4.9 / 5 Average Rating" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon className="w-4 h-4 text-cyan" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          MAGIC LANTERN SECTION — Illuminate the full problem
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/40 via-background to-card/40" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <AnimatedSection animation="fadeUp">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-semibold text-amber-400 bg-amber-400/10 rounded-full border border-amber-400/20 mb-6">
                <AlertCircle className="w-4 h-4" />
                What's Actually Happening Right Now
              </span>
              <h2 className="text-3xl md:text-4xl font-poppins font-black mb-6">
                The Invisible War Your Business Is Losing{" "}
                <span className="text-gradient">Every Single Day</span>
              </h2>
            </div>
          </AnimatedSection>

          {/* The customer journey story — Magic Lantern walkthrough */}
          <div className="space-y-6">
            {[
              {
                icon: Target,
                step: "Right now, at this very moment",
                text: "Someone in Lagos, Accra, or Abuja needs exactly what you offer. They've decided to buy. They have money. They just need to find who to give it to.",
                color: "text-cyan",
                bg: "bg-cyan/5 border-cyan/20",
              },
              {
                icon: Eye,
                step: "They open Google and type 3 words",
                text: "\"[Your service] near me.\" Or \"best [your service] in Lagos.\" Your competitor's name appears. A website loads. It looks professional, it has reviews, it has a clear call to action. Trust forms instantly.",
                color: "text-amber-400",
                bg: "bg-amber-400/5 border-amber-400/20",
              },
              {
                icon: Phone,
                step: "They call your competitor",
                text: "Not because your competitor is better. Not because their price is lower. Simply because they showed up and you didn't. The customer never knew you existed. You never knew you lost them.",
                color: "text-red-400",
                bg: "bg-red-400/5 border-red-400/20",
              },
              {
                icon: TrendingUp,
                step: "This repeats 10–30 times every month",
                text: "Every month without a proper website is a month of invisible losses. The bills stay the same. The potential customers keep finding someone else. And the gap between you and your competitors keeps widening.",
                color: "text-cyan",
                bg: "bg-cyan/5 border-cyan/20",
              },
            ].map(({ icon: Icon, step, text, color, bg }, i) => (
              <AnimatedSection key={i} animation="fadeUp" delay={i * 0.1}>
                <div className={`flex gap-5 p-6 rounded-xl border ${bg} transition-all`}>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-card flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${color} mb-1 uppercase tracking-wide`}>{step}</p>
                    <p className="text-muted-foreground leading-relaxed">{text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fadeUp" delay={0.4}>
            <div className="mt-12 p-8 rounded-2xl bg-card border-2 border-cyan/30 text-center">
              <p className="text-xl font-poppins font-bold text-foreground mb-3">
                This is the hidden enemy of your business.
              </p>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Not the economy. Not your prices. Not your competitors' quality.{" "}
                <strong className="text-cyan">Your digital invisibility.</strong> And it is fixable — faster and more affordably than you think.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          HVCO SECTION — High Value Content Offer (free audit)
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <AnimatedSection animation="fadeUp">
            <div className="rounded-3xl border-2 border-cyan/30 overflow-hidden"
              style={{ background: "linear-gradient(135deg, rgba(0,212,232,0.06) 0%, rgba(0,102,204,0.06) 100%)" }}
            >
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-cyan/10 border border-cyan/20 flex items-center justify-center">
                    <Gift className="w-6 h-6 text-cyan" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-cyan uppercase tracking-widest">Free — No Strings Attached</span>
                    <h3 className="text-2xl font-poppins font-black text-foreground">
                      Your Free Website Opportunity Audit
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Before you spend a naira with anyone, you deserve to know exactly where your business stands online. Our team will personally evaluate your digital presence across 5 critical areas and send you a detailed WhatsApp report — free.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: BarChart3, label: "Google Search Visibility Score", desc: "Are customers able to find you at all?" },
                    { icon: Eye, label: "Digital First Impression Audit", desc: "What do customers see when they land on your presence?" },
                    { icon: Target, label: "Competitor Gap Analysis", desc: "What are your top 3 competitors doing that you're not?" },
                    { icon: TrendingUp, label: "Revenue Leak Estimate", desc: "How many customers are you losing per month? We'll estimate it." },
                    { icon: CheckCircle, label: "5-Point Fix Roadmap", desc: "Exactly what to do first, second, and third to fix it." },
                    { icon: Zap, label: "Quick Win Recommendations", desc: "3 things you can do this week at zero cost." },
                  ].map(({ icon: Icon, label, desc }) => (
                    <div key={label} className="flex gap-3 p-4 rounded-xl bg-card/50 border border-border/50">
                      <Icon className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <WAButton href={WA_HVCO_URL} label="Get My Free Audit on WhatsApp →" size="lg" />
                  <p className="mt-3 text-sm text-muted-foreground">
                    Delivered personally within 2 hours · Zero obligation to buy anything
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          BRIDGE — From free offer to paid Godfather Offer
      ════════════════════════════════════════════════════════ */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <AnimatedSection animation="fadeUp">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <p className="text-lg font-poppins font-bold text-foreground mb-3">
                If after the audit you want us to fix <em>everything</em> we find...
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                This month we're opening 3 case study slots. You get a complete professional
                online presence — website, logo, flyers, and your first ad campaign — at a fraction
                of the market rate. We document your results. Both sides win.
              </p>
              <a href="#offer" className="inline-flex items-center gap-2 text-cyan font-semibold hover:gap-3 transition-all">
                See exactly what's included and what it costs <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          GODFATHER OFFER — The irresistible value stack
      ════════════════════════════════════════════════════════ */}
      <section id="offer" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-5xl">
          <AnimatedSection animation="fadeUp">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-bold text-cyan bg-cyan/10 rounded-full border border-cyan/20 mb-6">
                <Zap className="w-4 h-4" />
                The Godfather Offer — ₦80,000 Only · {SLOTS_LEFT} Slots
              </span>
              <h2 className="text-3xl md:text-5xl font-poppins font-black mb-6">
                One Price.{" "}
                <span className="text-gradient">Everything You Need to Win Online.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Every item below has a real market price. We include all of them for ₦80,000
                because these 3 businesses become documented case studies. Here's what you get:
              </p>
            </div>
          </AnimatedSection>

          {/* Value Stack Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {valueItems.map((item, i) => (
              <AnimatedSection key={item.title} animation="fadeUp" delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl bg-card border-2 border-border hover:border-cyan/30 transition-all duration-300 h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-cyan" />
                    </div>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        background: item.tagColor === "#fbbf24" ? "rgba(251,191,36,0.1)" : "rgba(0,212,232,0.1)",
                        color: item.tagColor,
                        border: `1px solid ${item.tagColor}40`,
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.desc}</p>
                  <p className="text-xs text-muted-foreground/60 line-through">
                    Market value: {item.value}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Price Reveal */}
          <AnimatedSection animation="fadeUp">
            <div
              className="rounded-3xl p-8 md:p-12 text-center border-2"
              style={{
                background: "linear-gradient(135deg, rgba(0,212,232,0.06), rgba(0,102,204,0.06))",
                borderColor: "rgba(0,212,232,0.3)",
              }}
            >
              <div className="grid md:grid-cols-4 gap-4 mb-8 text-sm font-mono">
                {[
                  ["Custom Website", "₦120,000"],
                  ["Logo Design", "₦35,000"],
                  ["5 Flyers", "₦30,000"],
                  ["1 Week Ads", "₦60,000"],
                ].map(([label, val]) => (
                  <div key={label} className="flex flex-col items-center p-4 rounded-xl bg-card/50 border border-border">
                    <span className="text-muted-foreground text-xs mb-1">{label}</span>
                    <span className="text-foreground font-bold line-through opacity-50">{val}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground mb-1">Total market value</p>
              <p className="text-3xl font-poppins font-black line-through text-muted-foreground/50 mb-2">
                ₦245,000+
              </p>
              <p className="text-sm text-muted-foreground mb-2">Your investment this month</p>
              <p
                className="font-poppins font-black leading-none mb-3"
                style={{ fontSize: "clamp(3rem, 8vw, 5rem)", color: "hsl(var(--foreground))" }}
              >
                ₦80,000
              </p>
              <p className="text-cyan font-semibold mb-8">
                Saving of ₦165,000+ · {SLOTS_LEFT} slots · Close {OFFER_CLOSE_DATE}
              </p>

              <WAButton href={WA_OFFER_URL} label="CLAIM THIS OFFER ON WHATSAPP →" size="lg" />
              <p className="mt-4 text-sm text-muted-foreground">
                🔒 50% deposit to start · Balance on delivery · Full refund guarantee
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          REASON WHY — Sabri: price this low needs a reason
      ════════════════════════════════════════════════════════ */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <AnimatedSection animation="fadeUp">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-xl font-poppins font-bold text-foreground mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-cyan" />
                Why Is This Priced So Low?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A fair question. A price this far below market value without an explanation should
                make you suspicious — so here's the honest answer:
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Every month, we take on exactly <strong className="text-foreground">3 new clients at a reduced rate</strong> in
                exchange for documenting their results as case studies. We build their site, track their
                traffic and lead generation, and use the real data — with their permission — to
                demonstrate what our work produces for future clients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You get a complete professional online presence at ₦80,000 instead of ₦245,000+.
                We get documented proof of our work's impact.{" "}
                <strong className="text-cyan">Both sides benefit. That's the deal.</strong>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SOCIAL PROOF — Specific, named, with results
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
          <AnimatedSection animation="fadeUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-black mb-4">
                Businesses That Took the Step
              </h2>
              <p className="text-muted-foreground">Real clients. Real results. Real names.</p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "We got 3 new bookings in the first week our website went live. Before this we were relying entirely on referrals. Nosyra delivered on time and the branding looks like we've been in business for years.",
                name: "[Client Name]",
                biz: "[Business Name], Lagos",
                result: "3 new clients · Week 1",
                stars: 5,
                source: "WhatsApp Review",
              },
              {
                quote:
                  "People immediately started treating our brand more seriously. Our closing rate on new enquiries improved noticeably within the first month. I only regret not doing this sooner.",
                name: "[Client Name]",
                biz: "[Business Name], Accra",
                result: "Higher close rate · Month 1",
                stars: 5,
                source: "Google Review",
              },
              {
                quote:
                  "The free ad campaign alone brought us over 20 leads in 7 days. The website, logo, flyers — everything was delivered exactly as promised. Best ₦150k I've ever spent on the business.",
                name: "[Client Name]",
                biz: "[Business Name], Abuja",
                result: "20+ leads · 7 days",
                stars: 5,
                source: "WhatsApp Review",
              },
            ].map((r, i) => (
              <AnimatedSection key={i} animation="fadeUp" delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-card border border-border h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-0.5">
                      {Array(r.stars).fill(null).map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground bg-card border border-border rounded-full px-3 py-0.5">
                      {r.source}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 italic">
                    "{r.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <div
                      className="text-xs font-bold mb-1 px-3 py-1 rounded-full inline-block"
                      style={{ background: "rgba(0,212,232,0.1)", color: "#00D4E8" }}
                    >
                      ✅ {r.result}
                    </div>
                    <p className="text-sm font-bold text-foreground mt-2">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.biz}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fadeUp" delay={0.3}>
            <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              {["E-Commerce", "Logistics", "Real Estate", "Training Centres", "Restaurants", "Clinics", "Fashion", "Construction"].map((niche) => (
                <span key={niche} className="px-4 py-1.5 rounded-full bg-card border border-border">
                  {niche}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          GUARANTEE — Risk Reversal (Sabri: transfer all risk)
      ════════════════════════════════════════════════════════ */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <AnimatedSection animation="fadeUp">
            <div
              className="p-8 md:p-10 rounded-3xl text-center border-2"
              style={{
                background: "linear-gradient(135deg, rgba(37,211,102,0.05), rgba(18,140,126,0.05))",
                borderColor: "rgba(37,211,102,0.25)",
              }}
            >
              <Shield className="w-14 h-14 mx-auto mb-5" style={{ color: "#25D366" }} />
              <h3 className="text-2xl font-poppins font-black text-foreground mb-4">
                The Guarantee — All The Risk Is On Us
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If we do not deliver your completed website by the agreed date, or if you are not
                genuinely satisfied with the final design after reviewing it,{" "}
                <strong className="text-foreground">
                  we refund your deposit in full — no questions asked.
                </strong>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We've been in business long enough to know that a strong guarantee doesn't increase
                refund requests — it increases the number of people willing to start. Because our work is
                good, we almost never hear from this guarantee. But it exists for your peace of mind.
                Your only risk is saying no and watching your competitors stay ahead.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          FAQ — Objection Handling
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 relative" ref={processRef}>
        <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-background" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-3xl">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-3xl font-poppins font-black text-center mb-12">
              Questions Before You Say Yes
            </h2>
          </AnimatedSection>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} animation="fadeUp" delay={i * 0.05}>
                <FaqItem q={faq.q} a={faq.a} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          FINAL CTA — Future Pacing + Mechanism Urgency
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-3xl text-center">
          <AnimatedSection animation="fadeUp">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-bold text-red-400 bg-red-400/10 rounded-full border border-red-400/20 mb-8">
              <Clock className="w-4 h-4" />
              {SLOTS_LEFT} Slots Left · Close {OFFER_CLOSE_DATE}
            </span>

            <h2 className="text-3xl md:text-5xl font-poppins font-black mb-6 leading-tight">
              Ready to Stop Being Invisible{" "}
              <span className="text-gradient">and Start Winning?</span>
            </h2>

            {/* Countdown */}
            <div className="flex justify-center gap-4 mb-8">
              {[{ label: "HRS", val: h }, { label: "MIN", val: m }, { label: "SEC", val: s }].map(({ label, val }) => (
                <div key={label} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-xl bg-card border-2 border-cyan/30 flex items-center justify-center font-poppins font-black text-2xl text-foreground">
                    {val}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 font-mono">{label}</p>
                </div>
              ))}
            </div>

            {/* Future pacing — what happens next */}
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              Tap below. Tell us your business name on WhatsApp. We reply within the hour, ask you
              two quick questions, and walk you through exactly how the project works. No commitment
              at that stage — just a conversation.
            </p>

            <WAButton href={WA_OFFER_URL} label="YES — CLAIM MY SLOT ON WHATSAPP →" size="lg" />

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-cyan" /> 50% deposit to start</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-cyan" /> Balance on delivery</span>
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-cyan" /> Full refund if unsatisfied</span>
            </div>

            <p className="mt-8 text-xs text-muted-foreground">
              Not ready for the paid offer yet?{" "}
              <a href={WA_HVCO_URL} className="text-cyan underline underline-offset-4 hover:text-cyan/80 transition-colors" target="_blank" rel="noopener noreferrer">
                Start with the free website audit →
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default LandingPage;
