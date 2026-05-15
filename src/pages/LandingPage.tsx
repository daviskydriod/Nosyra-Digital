import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

import {
  Globe,
  Megaphone,
  Palette,
  Shield,
  Clock,
  ChevronDown,
  Zap,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Star,
  ExternalLink,
} from "lucide-react";

// ─────────────────────────────────────────────────────
// REVIEW IMAGES
// ─────────────────────────────────────────────────────
import review1 from "@/assets/reviews/review1.jpg";
import review2 from "@/assets/reviews/review2.jpg";
import review3 from "@/assets/reviews/review3.jpg";
import review4 from "@/assets/reviews/review4.jpg";

// ─────────────────────────────────────────────────────
// RECENT WEBSITE IMAGES
// ─────────────────────────────────────────────────────
import website1 from "@/assets/websites/website1.jpg";
import website2 from "@/assets/websites/website2.jpg";
import website3 from "@/assets/websites/website3.jpg";
import website4 from "@/assets/websites/website4.jpg";
import website5 from "@/assets/websites/website5.jpg";

// ─────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────
const WA_NUMBER = "2347058466586";
const OFFER_CLOSE_DATE = "June 30";
const SLOTS_LEFT = 3;
const PORTFOLIO_URL = "https://www.nosyradigital.com.ng/portfolio";
const DEADLINE_KEY = "nosyra_offer_deadline";
const OFFER_DURATION_MS = 3 * 24 * 60 * 60 * 1000; // 3 days persistent

const WA_OFFER = encodeURIComponent(
  "Hi Nosyra Digital! I saw the ₦80,000 website package and I'm interested. Please let me know how to get started."
);
const WA_OFFER_URL = `https://wa.me/${WA_NUMBER}?text=${WA_OFFER}`;

// ─────────────────────────────────────────────────────
// PERSISTENT COUNTDOWN
// ─────────────────────────────────────────────────────
function useCountdown() {
  const getDeadline = (): number => {
    const stored = localStorage.getItem(DEADLINE_KEY);
    if (stored) {
      const parsed = parseInt(stored, 10);
      if (parsed > Date.now()) return parsed;
    }
    const deadline = Date.now() + OFFER_DURATION_MS;
    localStorage.setItem(DEADLINE_KEY, String(deadline));
    return deadline;
  };

  const [t, setT] = useState({ d: "00", h: "00", m: "00", s: "00" });

  useEffect(() => {
    const deadline = getDeadline();
    const tick = () => {
      const diff = Math.max(0, deadline - Date.now());
      setT({
        d: String(Math.floor(diff / 86400000)).padStart(2, "0"),
        h: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, "0"),
        m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0"),
        s: String(Math.floor((diff % 60000) / 1000)).padStart(2, "0"),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return t;
}

// ─────────────────────────────────────────────────────
// COUNTDOWN BLOCK UI
// ─────────────────────────────────────────────────────
function CountdownBlock() {
  const { d, h, m, s } = useCountdown();
  const units = [
    { label: "DAYS", val: d },
    { label: "HRS", val: h },
    { label: "MIN", val: m },
    { label: "SEC", val: s },
  ];

  return (
    <div className="flex items-center gap-3 justify-center flex-wrap">
      {units.map((u, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-black text-white"
              style={{
                background: "rgba(37,99,235,0.15)",
                border: "1px solid rgba(37,99,235,0.3)",
              }}
            >
              {u.val}
            </div>
            <span className="text-xs text-muted-foreground mt-1 font-bold tracking-widest">
              {u.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="text-2xl font-black text-blue-600 mb-4">:</span>
          )}
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────
// FAQ ITEM
// ─────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border border-border rounded-xl overflow-hidden cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-6 py-4 bg-card">
        <span className="font-semibold text-foreground pr-4">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
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
            <p className="px-6 py-4 text-muted-foreground bg-card/40 leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────────────
// WA BUTTON
// ─────────────────────────────────────────────────────
function WAButton({
  href,
  label,
  large,
}: {
  href: string;
  label: string;
  large?: boolean;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-3 rounded-full font-black text-white ${
        large ? "px-10 py-5 text-lg" : "px-8 py-4"
      }`}
      style={{
        background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
        boxShadow: "0 8px 32px rgba(37,99,235,0.4)",
      }}
    >
      {label}
      <ArrowRight className="w-5 h-5" />
    </motion.a>
  );
}

// ─────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────
const valueItems = [
  {
    icon: Globe,
    title: "Custom Professional Website",
    desc: "Fully custom-built, mobile-optimised website designed specifically for your business. No templates. No shortcuts.",
    value: "₦120,000",
    num: "01",
  },
  {
    icon: Palette,
    title: "Professional Logo & Brand Identity",
    desc: "A memorable logo delivered in all formats — PNG, SVG, PDF — ready for print and digital.",
    value: "₦35,000",
    num: "02",
  },
  {
    icon: Palette,
    title: "5 Branded Social Media Flyers",
    desc: "Professional social media graphics matching your brand, ready to post and attract customers immediately.",
    value: "₦30,000",
    num: "03",
  },
  {
    icon: Megaphone,
    title: "1 Week Meta Ads Campaign",
    desc: "Targeted Facebook & Instagram ads set up and managed to drive real traffic to your new website.",
    value: "₦60,000",
    num: "04",
  },
];

const recentWork = [
  { img: website1, name: "Client Website 1", industry: "E-Commerce" },
  { img: website2, name: "Client Website 2", industry: "Services" },
  { img: website3, name: "Client Website 3", industry: "Hospitality" },
  { img: website4, name: "Client Website 4", industry: "Fashion" },
  { img: website5, name: "Client Website 5", industry: "Real Estate" },
];

const faqs = [
  {
    q: "How long does the website take to build?",
    a: "5 to 10 working days after payment and content submission. We move fast so you can start getting customers sooner.",
  },
  {
    q: "Can I pay in installments?",
    a: "Yes. We accept 50% upfront to start work and the remaining balance upon delivery before the site goes live.",
  },
  {
    q: "Is this a custom website or a template?",
    a: "100% custom. Every website we build is designed from scratch specifically for your business. No Wix, no WordPress templates.",
  },
  {
    q: "What do I need to provide to get started?",
    a: "Your business name, logo (if you have one), photos, services/products, and any content you want on the site. Don't have all of this? We'll guide you through it.",
  },
  {
    q: "Do you handle hosting and domain?",
    a: "Yes, we can handle hosting and domain setup for you. We'll advise on the best options based on your budget and needs.",
  },
  {
    q: "What if I need changes after delivery?",
    a: "We include up to 2 rounds of revisions after delivery at no extra cost. Additional changes can be handled under a maintenance plan.",
  },
  {
    q: "Do you work with businesses outside Lagos?",
    a: "Yes. We work with businesses across Nigeria — Lagos, Abuja, Port Harcourt, and beyond — as well as diaspora clients in Canada, UK, and USA.",
  },
];

// ─────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────
const LandingPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── URGENCY BAR ── */}
      <div
        className="fixed top-0 left-0 right-0 z-50 py-2 px-4 text-sm font-bold text-white"
        style={{ background: "linear-gradient(90deg,#1d4ed8,#2563eb,#1d4ed8)" }}
      >
        <div className="flex items-center justify-center gap-2 flex-wrap text-center">
          <span>⚡ Only {SLOTS_LEFT} slots left</span>
          <span className="opacity-60">•</span>
          <span>Offer closes {OFFER_CLOSE_DATE}</span>
          <span className="opacity-60">•</span>
          <span>Lagos · Abuja · Port Harcourt</span>
        </div>
      </div>

      {/* ── STICKY MOBILE CTA ── */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden"
            style={{
              background: "rgba(10,10,20,0.95)",
              backdropFilter: "blur(12px)",
              borderTop: "1px solid rgba(37,99,235,0.3)",
            }}
          >
            <a
              href={WA_OFFER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-full font-black text-white text-base"
              style={{
                background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                boxShadow: "0 8px 32px rgba(37,99,235,0.4)",
              }}
            >
              CLAIM ₦80,000 PACKAGE → WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20 relative overflow-hidden"
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,99,235,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Social proof badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-600/30 bg-blue-600/10 text-blue-400 text-sm font-bold mb-8"
          >
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            50+ Nigerian Businesses Trust Nosyra Digital
          </motion.div>

          {/* Attention line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-blue-400 font-bold text-lg uppercase tracking-widest mb-4"
          >
            Attention: Lagos · Abuja · Port Harcourt Business Owners
          </motion.p>

          {/* PAIN HOOK HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black leading-tight mb-6"
          >
            Your Competitors Are
            <span className="text-blue-500"> Stealing Your Customers </span>
            — Because They Have A Better Website Than You
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            While you're losing sales, we'll build you a professional website,
            brand identity, and marketing campaign — all for one unbeatable price.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <WAButton href={WA_OFFER_URL} label="CLAIM THIS OFFER NOW" large />
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-semibold"
            >
              See Our Work <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-6 mt-10 text-sm text-muted-foreground flex-wrap"
          >
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600" /> 50% Deposit Only
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600" /> 5–10 Day Delivery
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-600" /> Money Back Guarantee
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── PAIN SECTION ── */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-bold text-sm mb-6">
              <AlertTriangle className="w-4 h-4" />
              THE BRUTAL TRUTH
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Is This You Right Now?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "You don't have a website — or the one you have looks outdated and unprofessional",
              "Customers Google you and find nothing, so they go to your competitor instead",
              "You're relying 100% on word of mouth and it's not enough to grow",
              "You tried a freelancer before and got burned — late delivery, poor quality, no support",
              "Your business looks small even though your service is excellent",
              "You're in Lagos, Abuja, or Port Harcourt and know your market is online — but you're not there yet",
            ].map((pain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-red-500/20 bg-red-500/5"
              >
                <span className="text-red-400 text-xl mt-0.5 flex-shrink-0">✗</span>
                <p className="text-foreground font-medium leading-relaxed">{pain}</p>
              </motion.div>
            ))}
          </div>

          {/* AGITATE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-2xl border border-blue-600/20 bg-blue-600/5 text-center"
          >
            <TrendingUp className="w-10 h-10 text-blue-500 mx-auto mb-4" />
            <p className="text-xl font-bold text-foreground mb-2">
              Every day without a professional online presence is money left on the table.
            </p>
            <p className="text-muted-foreground">
              Your competitors in Lagos, Abuja, and Port Harcourt already know this.
              The question is — when will you act?
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 font-bold text-sm mb-6">
            <CheckCircle className="w-4 h-4" />
            THE SOLUTION
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-8">
            We Build Your Entire
            <span className="text-blue-500"> Online Presence </span>
            In One Package
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nosyra Digital is a full-service digital agency based in Lagos. We've helped over 50
            Nigerian businesses go from invisible online to attracting real customers — fast.
            Now we're packaging everything you need at a price designed for Nigerian businesses.
          </p>
        </div>
      </section>

      {/* ── OFFER / VALUE STACK ── */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-600 font-bold text-sm mb-6">
              <Zap className="w-4 h-4" />
              THE GODFATHER OFFER
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Everything You Need To Win Online
            </h2>
            <p className="text-muted-foreground text-lg">
              Here's exactly what you get — and what each piece is worth:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {valueItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-7 rounded-2xl border border-blue-600/20 bg-card relative overflow-hidden"
              >
                <span className="absolute top-5 right-5 text-6xl font-black opacity-5 leading-none">
                  {item.num}
                </span>
                <item.icon className="w-10 h-10 text-blue-600 mb-5" />
                <h3 className="text-xl font-black mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">{item.desc}</p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm text-muted-foreground">Market Value</span>
                  <span className="line-through text-muted-foreground font-bold">{item.value}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Running total */}
          <div className="rounded-2xl border border-blue-600/20 bg-card p-6 mb-8 max-w-2xl mx-auto">
            <div className="space-y-3">
              {[
                ["Custom Website", "₦120,000"],
                ["Logo & Brand Identity", "₦35,000"],
                ["5 Social Media Flyers", "₦30,000"],
                ["1 Week Meta Ads", "₦60,000"],
              ].map(([label, val], i) => (
                <div key={i} className="flex justify-between text-muted-foreground">
                  <span>{label}</span>
                  <span className="line-through">{val}</span>
                </div>
              ))}
              <div className="border-t border-border pt-3 flex justify-between font-black text-lg">
                <span>Total Market Value</span>
                <span className="line-through opacity-50">₦245,000+</span>
              </div>
            </div>
          </div>

          {/* PRICE BOX */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl p-12 text-center border-2 border-blue-600/40 bg-card"
            style={{ boxShadow: "0 0 60px rgba(37,99,235,0.1)" }}
          >
            <p className="text-muted-foreground mb-2 text-lg">Your Investment Today</p>
            <p className="text-7xl md:text-8xl font-black mb-2 text-blue-500">₦80,000</p>
            <p className="text-muted-foreground mb-8">
              Save over{" "}
              <span className="text-foreground font-bold">₦165,000</span> — but only{" "}
              {SLOTS_LEFT} slots remain
            </p>
            <WAButton href={WA_OFFER_URL} label="CLAIM MY SLOT NOW" large />
            <p className="text-sm text-muted-foreground mt-6">
              50% deposit to start · Balance on delivery · Money-back guarantee
            </p>
            <div className="mt-10">
              <p className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-widest">
                Offer Expires In
              </p>
              <CountdownBlock />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── RECENT WORK ── */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 font-bold text-sm mb-6">
              Our Work
            </span>
            <h2 className="text-4xl font-black mb-4">
              Recent Websites We've Built
            </h2>
            <p className="text-muted-foreground text-lg">
              Custom websites built for Nigerian businesses just like yours
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {recentWork.map((site, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-2xl border border-blue-600/20 bg-card group"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={site.img}
                    alt={site.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-bold text-sm">{site.industry}</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-bold text-foreground">{site.name}</p>
                  <p className="text-sm text-muted-foreground">{site.industry}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-blue-600/40 text-blue-400 font-bold hover:bg-blue-600/10 transition-colors"
            >
              See All Our Work <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground">
              Real screenshots from happy clients across Nigeria
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[review1, review2, review3, review4].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-2xl border border-blue-600/20 bg-card"
              >
                <img
                  src={img}
                  alt={`review-${i + 1}`}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEE ── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl border border-blue-600/20 text-center"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(37,99,235,0.08) 0%, transparent 70%)",
            }}
          >
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-3xl font-black mb-4">Our Iron-Clad Guarantee</h3>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
              If you are not completely satisfied with the final delivery, we will
              refund your deposit — no questions asked. We take the risk so you
              don't have to.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">
            Your Questions Answered
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Everything you need to know before getting started
          </p>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-4 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(37,99,235,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-blue-400 font-bold uppercase tracking-widest mb-4">
            Last Chance
          </p>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Stop Losing Customers
            <br />
            To Your Competitors
          </h2>
          <p className="text-muted-foreground text-xl mb-4 max-w-xl mx-auto leading-relaxed">
            Only {SLOTS_LEFT} slots left at ₦80,000. Once they're gone, the price goes back up.
          </p>
          <p className="text-muted-foreground mb-10">
            Message us on WhatsApp now — we reply within minutes.
          </p>

          <WAButton href={WA_OFFER_URL} label="CLAIM MY SLOT ON WHATSAPP" large />

          <div className="flex justify-center gap-6 mt-10 text-sm text-muted-foreground flex-wrap">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600" /> 50% Deposit
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600" /> 5–10 Day Delivery
            </span>
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-600" /> Money Back Guarantee
            </span>
          </div>

          <div className="mt-12">
            <CountdownBlock />
          </div>
        </div>
      </section>

      {/* Bottom padding for mobile sticky CTA */}
      <div className="h-24 md:h-0" />
    </>
  );
};

export default LandingPage;
