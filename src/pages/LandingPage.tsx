import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Globe,
  Palette,
  Megaphone,
  CheckCircle,
  Star,
  Shield,
  Clock,
  Zap,
  ChevronDown,
  AlertCircle,
  Upload,
  X,
  Plus,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS — update before going live
// ─────────────────────────────────────────────────────────────────────────────
const WA_NUMBER = "2348000000000";
const OFFER_CLOSE_DATE = "June 30";
const SLOTS_LEFT = 3;
const WA_OFFER = encodeURIComponent(
  "Hi Nosyra Digital! I saw the ₦80,000 website package and I'm interested. Please let me know how to get started."
);
const WA_OFFER_URL = `https://wa.me/${WA_NUMBER}?text=${WA_OFFER}`;

// ─────────────────────────────────────────────────────────────────────────────
// COUNTDOWN
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
// FAQ
// ─────────────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How long does the website take to build?",
    a: "5 to 10 working days from when we receive your content and 50% deposit. We have never missed a delivery date — which is exactly why we back it with a full refund guarantee.",
  },
  {
    q: "Can I pay in installments?",
    a: "Yes. 50% upfront to begin, remaining 50% on delivery — after you review and approve everything. You don't pay the balance until you're happy.",
  },
  {
    q: "Is this really a custom website or a template?",
    a: "100% custom. No page builders. No recycled templates. Every site is designed and built from scratch. Your website will look nothing like any other site we've built.",
  },
  {
    q: "Do you work with businesses in Ghana?",
    a: "Yes. Nigeria, Ghana, and Canada. Payment accepted in NGN or GHS. We've delivered full projects to clients in Lagos, Abuja, Accra, and Toronto.",
  },
  {
    q: "What happens after the free 1-week ad campaign?",
    a: "We hand the full ad account to you — all data, audiences, and creative assets. You can run it yourself or we offer affordable monthly management packages.",
  },
  {
    q: "Why is this priced so low?",
    a: "Every month, we take on exactly 3 new clients at a reduced rate in exchange for documenting their results as case studies. You get a complete professional online presence. We get documented proof of results. Both sides win.",
  },
  {
    q: "What if I'm not happy with the design?",
    a: "We revise until you love it. If after all revisions you're still not satisfied, your deposit comes back in full. That is our commitment — not just a line on the page.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-[#1e2d3d] rounded-xl overflow-hidden cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-6 py-4 bg-[#0d1b2a] hover:bg-[#0f2030] transition-colors">
        <span className="font-semibold text-white pr-4 text-sm">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-5 h-5 text-[#00d4e8] flex-shrink-0" />
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
            <p className="px-6 py-4 text-[#8899aa] bg-[#080f17] border-t border-[#1e2d3d] leading-relaxed text-sm">
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
function WAButton({ href, label, size = "md" }: { href: string; label: string; size?: "md" | "lg" }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03, boxShadow: "0 12px 40px rgba(37,211,102,0.5)" }}
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
      <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.773L0 32l8.437-2.007A15.938 15.938 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.26 22.26c-.347.976-2.01 1.87-2.76 1.99-.75.12-1.677.17-2.7-.17-.623-.2-1.423-.467-2.45-.913-4.307-1.86-7.11-6.19-7.32-6.48-.207-.293-1.69-2.247-1.69-4.28 0-2.03 1.067-3.027 1.447-3.44.38-.41.826-.513 1.1-.513.274 0 .55.003.79.013.254.01.593-.097.927.707.347.827 1.18 2.86 1.283 3.067.1.207.167.45.033.727-.133.277-.2.45-.4.693-.2.24-.42.537-.6.72-.2.2-.407.416-.175.817.233.4 1.033 1.703 2.217 2.757 1.523 1.357 2.807 1.777 3.207 1.977.4.2.633.167.867-.1.233-.267 1-1.167 1.267-1.567.267-.4.533-.333.9-.2.367.133 2.333 1.1 2.733 1.3.4.2.667.3.767.467.1.167.1.967-.247 1.943z" />
      </svg>
      {label}
    </motion.a>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// REVIEW IMAGE UPLOADER
// ─────────────────────────────────────────────────────────────────────────────
interface ReviewImage {
  id: string;
  url: string;
  name: string;
}

function ReviewUploader({
  images,
  onAdd,
  onRemove,
}: {
  images: ReviewImage[];
  onAdd: (imgs: ReviewImage[]) => void;
  onRemove: (id: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const newImgs: ReviewImage[] = [];
    Array.from(files).forEach((file) => {
      if (!file.type.startsWith("image/")) return;
      const url = URL.createObjectURL(file);
      newImgs.push({ id: Math.random().toString(36).slice(2), url, name: file.name });
    });
    onAdd(newImgs);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img) => (
          <div key={img.id} className="relative group rounded-xl overflow-hidden border border-[#1e2d3d] aspect-[4/3]">
            <img src={img.url} alt={img.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button
                onClick={() => onRemove(img.id)}
                className="w-9 h-9 rounded-full bg-red-500/90 flex items-center justify-center text-white hover:bg-red-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white text-xs truncate">{img.name}</p>
            </div>
          </div>
        ))}

        {/* Add button */}
        <button
          onClick={() => inputRef.current?.click()}
          className="aspect-[4/3] rounded-xl border-2 border-dashed border-[#1e2d3d] hover:border-[#00d4e8]/50 hover:bg-[#00d4e8]/5 transition-all flex flex-col items-center justify-center gap-2 text-[#8899aa] hover:text-[#00d4e8]"
        >
          <Plus className="w-6 h-6" />
          <span className="text-xs font-semibold">Add Screenshot</span>
        </button>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
      {images.length === 0 && (
        <button
          onClick={() => inputRef.current?.click()}
          className="w-full border-2 border-dashed border-[#1e2d3d] hover:border-[#00d4e8]/40 hover:bg-[#00d4e8]/5 transition-all rounded-2xl py-10 flex flex-col items-center gap-3 text-[#8899aa] hover:text-[#00d4e8]"
        >
          <Upload className="w-8 h-8" />
          <div className="text-center">
            <p className="font-semibold text-sm">Upload Review Screenshots</p>
            <p className="text-xs mt-1 opacity-70">WhatsApp, Google, or any platform · PNG, JPG, WEBP</p>
          </div>
        </button>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────────────────────
export default function GodfatherOffer() {
  const { h, m, s } = useCountdown();
  const [reviewImages, setReviewImages] = useState<ReviewImage[]>([]);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const addImages = (imgs: ReviewImage[]) => setReviewImages((prev) => [...prev, ...imgs]);
  const removeImage = (id: string) => setReviewImages((prev) => prev.filter((i) => i.id !== id));

  const valueItems = [
    {
      icon: Globe,
      title: "Custom Professional Website",
      desc: "Fully custom-built, mobile-first — not a template. Fast, SEO-ready, built to convert visitors into paying customers.",
      value: "₦120,000",
      tag: "Core Deliverable",
      accent: "#00d4e8",
    },
    {
      icon: Palette,
      title: "Professional Logo Design",
      desc: "Clean, memorable logo in all formats — PNG, SVG, print-ready PDF. Included because inconsistent branding kills conversions.",
      value: "₦35,000",
      tag: "Free Bonus",
      accent: "#f59e0b",
    },
    {
      icon: Palette,
      title: "5 Branded Social Media Flyers",
      desc: "Ready-to-post flyers sized for Instagram, WhatsApp broadcast, and print — all matching your new website and logo.",
      value: "₦30,000",
      tag: "Free Bonus",
      accent: "#f59e0b",
    },
    {
      icon: Megaphone,
      title: "1 Week Free Meta Ad Campaign",
      desc: "We write the copy, build the creative, and run a 7-day Facebook & Instagram campaign targeting your exact audience.",
      value: "₦60,000",
      tag: "Free Bonus",
      accent: "#f59e0b",
    },
  ];

  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: "linear-gradient(180deg, #060d16 0%, #080f1a 50%, #060d16 100%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,900;1,9..40,400&family=Syne:wght@700;800&display=swap');

        .syne { font-family: 'Syne', sans-serif; }

        .text-grad {
          background: linear-gradient(135deg, #00d4e8, #0066cc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glow-cyan { box-shadow: 0 0 40px rgba(0,212,232,0.15); }
        .glow-green { box-shadow: 0 0 40px rgba(37,211,102,0.15); }

        .grid-bg {
          background-image:
            linear-gradient(rgba(0,212,232,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,232,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .slot-pulse {
          animation: slotPulse 2s ease-in-out infinite;
        }
        @keyframes slotPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>

      {/* ── URGENCY BAR ── */}
      <div
        className="text-center py-2.5 px-4 text-xs sm:text-sm font-bold tracking-wider"
        style={{ background: "linear-gradient(90deg, #991b1b, #dc2626, #991b1b)" }}
      >
        ⚡ {SLOTS_LEFT} CASE STUDY SLOTS · CLOSE {OFFER_CLOSE_DATE} · {h}:{m}:{s} REMAINING · Price returns to ₦150,000 after
      </div>

      <div className="max-w-5xl mx-auto px-4 lg:px-8 py-16">

        {/* ── HERO HEADLINE ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-bold text-[#00d4e8] bg-[#00d4e8]/10 rounded-full border border-[#00d4e8]/20 tracking-widest uppercase">
            <Zap className="w-3.5 h-3.5" />
            The Godfather Offer — Only {SLOTS_LEFT} Slots This Month
          </div>

          <h1 className="syne text-4xl md:text-6xl font-extrabold mb-6 leading-[1.05]">
            One Price.{" "}
            <span className="text-grad">Everything You Need</span>
            <br />
            to Win Online.
          </h1>

          <p className="text-[#8899aa] text-lg max-w-2xl mx-auto leading-relaxed">
            Every item below has a real market price. We bundle all of them for{" "}
            <strong className="text-white">₦80,000</strong> because these{" "}
            {SLOTS_LEFT} businesses become documented case studies. Here's exactly what you get:
          </p>
        </motion.div>

        {/* ── VALUE STACK ── */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {valueItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative p-6 rounded-2xl border border-[#1a2d3d] bg-[#0a1522] overflow-hidden group"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
            >
              {/* Subtle top glow on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }}
              />

              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${item.accent}15`, border: `1px solid ${item.accent}30` }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.accent }} />
                </div>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{
                    background: `${item.accent}12`,
                    color: item.accent,
                    border: `1px solid ${item.accent}35`,
                  }}
                >
                  {item.tag}
                </span>
              </div>

              <h3 className="syne text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-[#8899aa] text-sm leading-relaxed mb-4">{item.desc}</p>
              <p className="text-xs text-[#556677] line-through">Market value: {item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* ── PRICE REVEAL BOX ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="rounded-3xl p-8 md:p-12 text-center border border-[#00d4e8]/25 mb-16 relative overflow-hidden grid-bg glow-cyan"
          style={{ background: "linear-gradient(135deg, rgba(0,212,232,0.05), rgba(0,102,204,0.07))" }}
        >
          {/* corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#00d4e8]/30 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#00d4e8]/30 rounded-br-3xl" />

          {/* line items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              ["Custom Website", "₦120,000"],
              ["Logo Design", "₦35,000"],
              ["5 Flyers", "₦30,000"],
              ["1 Week Ads", "₦60,000"],
            ].map(([label, val]) => (
              <div key={label} className="flex flex-col items-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="text-[#8899aa] text-xs mb-1">{label}</span>
                <span className="text-white/40 font-bold line-through text-sm font-mono">{val}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-[#8899aa] mb-1">Total market value</p>
          <p className="text-3xl font-bold line-through text-white/30 mb-3">₦245,000+</p>
          <p className="text-sm text-[#8899aa] mb-2">Your investment today</p>
          <p className="syne font-extrabold text-white mb-1" style={{ fontSize: "clamp(3.5rem,9vw,5.5rem)", lineHeight: 1 }}>
            ₦80,000
          </p>
          <p className="text-[#00d4e8] font-semibold mb-8 text-sm">
            You save ₦165,000+ · {SLOTS_LEFT} slots only · Close {OFFER_CLOSE_DATE}
          </p>

          <WAButton href={WA_OFFER_URL} label="CLAIM MY SLOT ON WHATSAPP →" size="lg" />
          <p className="mt-4 text-sm text-[#8899aa]">
            🔒 50% deposit to start · Balance on delivery · Full refund guarantee
          </p>
        </motion.div>

        {/* ── WHY SO LOW ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-8 rounded-2xl bg-[#0a1522] border border-[#1a2d3d] mb-16"
        >
          <h3 className="syne text-xl font-bold text-white mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-[#00d4e8]" />
            Why Is This Priced So Low?
          </h3>
          <p className="text-[#8899aa] leading-relaxed mb-3">
            A price this far below market value without an explanation should make you suspicious — so here's the honest answer:
          </p>
          <p className="text-[#8899aa] leading-relaxed mb-3">
            Every month, we take on exactly <strong className="text-white">3 new clients at a reduced rate</strong> in exchange for
            documenting their results as case studies. We build their site, track their traffic and lead generation, and use the
            real data — with their permission — to demonstrate what our work produces for future clients.
          </p>
          <p className="text-[#8899aa] leading-relaxed">
            You get a complete professional online presence at ₦80,000 instead of ₦245,000+.
            We get documented proof of our work's impact.{" "}
            <strong className="text-[#00d4e8]">Both sides benefit. That's the deal.</strong>
          </p>
        </motion.div>

        {/* ── REVIEWS — Screenshot Upload ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="syne text-3xl md:text-4xl font-extrabold text-white mb-3">
              Businesses That Took the Step
            </h2>
            <p className="text-[#8899aa]">Real reviews · Real screenshots · Real results</p>
          </div>

          {/* Uploader (shown always — can remove in production and just hardcode images) */}
          <div className="mb-6 p-6 rounded-2xl bg-[#0a1522] border border-dashed border-[#1e2d3d]">
            <div className="flex items-center gap-2 mb-4">
              <Upload className="w-4 h-4 text-[#00d4e8]" />
              <p className="text-sm font-semibold text-[#00d4e8]">Add Review Screenshots</p>
              <span className="text-xs text-[#8899aa] ml-1">(WhatsApp, Google, etc.)</span>
            </div>
            <ReviewUploader images={reviewImages} onAdd={addImages} onRemove={removeImage} />
          </div>

          {/* Masonry-style screenshot gallery */}
          {reviewImages.length > 0 && (
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {reviewImages.map((img) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="break-inside-avoid cursor-zoom-in"
                  onClick={() => setLightbox(img.url)}
                >
                  <div className="relative rounded-xl overflow-hidden border border-[#1e2d3d] group">
                    <img src={img.url} alt="Review screenshot" className="w-full object-cover" />
                    <div className="absolute inset-0 bg-[#00d4e8]/0 group-hover:bg-[#00d4e8]/5 transition-all" />
                    {/* verified badge */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold"
                      style={{ background: "rgba(37,211,102,0.15)", color: "#25D366", border: "1px solid rgba(37,211,102,0.3)" }}>
                      <CheckCircle className="w-3 h-3" /> Verified
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {reviewImages.length === 0 && (
            <div className="text-center py-8 text-[#556677] text-sm">
              Screenshots will appear here once uploaded
            </div>
          )}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 cursor-zoom-out"
              onClick={() => setLightbox(null)}
            >
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={lightbox}
                alt="Review"
                className="max-w-full max-h-full rounded-2xl object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                onClick={() => setLightbox(null)}
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── GUARANTEE ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="p-8 md:p-10 rounded-3xl text-center border-2 mb-16 glow-green"
          style={{
            background: "linear-gradient(135deg, rgba(37,211,102,0.04), rgba(18,140,126,0.06))",
            borderColor: "rgba(37,211,102,0.2)",
          }}
        >
          <Shield className="w-14 h-14 mx-auto mb-5" style={{ color: "#25D366" }} />
          <h3 className="syne text-2xl font-extrabold text-white mb-4">
            All The Risk Is On Us
          </h3>
          <p className="text-[#8899aa] leading-relaxed mb-3 max-w-2xl mx-auto">
            If we don't deliver your completed website by the agreed date, or if you're not satisfied with the final design,{" "}
            <strong className="text-white">we refund your deposit in full — no questions asked.</strong>
          </p>
          <p className="text-[#8899aa] leading-relaxed max-w-2xl mx-auto">
            Your only risk is saying no and watching your competitors stay ahead.
          </p>
        </motion.div>

        {/* ── FAQ ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mb-16"
        >
          <h2 className="syne text-3xl font-extrabold text-white text-center mb-10">
            Questions Before You Say Yes
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </motion.div>

        {/* ── FINAL CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-bold text-red-400 bg-red-400/10 rounded-full border border-red-400/20 mb-8">
            <Clock className="w-4 h-4 slot-pulse" />
            {SLOTS_LEFT} Slots Left · Closes {OFFER_CLOSE_DATE}
          </div>

          <h2 className="syne text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Ready to Stop Being Invisible{" "}
            <span className="text-grad">and Start Winning?</span>
          </h2>

          {/* Countdown blocks */}
          <div className="flex justify-center gap-4 mb-8">
            {[{ label: "HRS", val: h }, { label: "MIN", val: m }, { label: "SEC", val: s }].map(({ label, val }) => (
              <div key={label} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-xl bg-[#0a1522] border-2 border-[#00d4e8]/30 flex items-center justify-center syne font-bold text-2xl text-white">
                  {val}
                </div>
                <p className="text-xs text-[#8899aa] mt-1 font-mono tracking-widest">{label}</p>
              </div>
            ))}
          </div>

          <p className="text-[#8899aa] mb-8 max-w-xl mx-auto leading-relaxed">
            Tap below. Tell us your business name on WhatsApp. We reply within the hour and walk
            you through exactly how the project works. No commitment required — just a conversation.
          </p>

          <WAButton href={WA_OFFER_URL} label="YES — CLAIM MY SLOT ON WHATSAPP →" size="lg" />

          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-sm text-[#8899aa]">
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#00d4e8]" /> 50% deposit to start
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#00d4e8]" /> Balance on delivery
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-[#00d4e8]" /> Full refund if unsatisfied
            </span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
