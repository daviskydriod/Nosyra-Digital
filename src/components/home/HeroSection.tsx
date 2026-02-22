import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import GradientButton from "@/components/ui/GradientButton";
import { useTypewriter } from "@/hooks/useTypewriter";

const brands = [
  "Eko Connect",
  "Liana Flowers",
  "CAT Global",
  "GT Green",
  "Honters Cruise",
  "Viktrotech",
  "THM Wellness",
];

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 500], [0, -80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 20);
      mouseY.set((e.clientY / innerHeight - 0.5) * 20);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  const { displayText: subheadline } = useTypewriter(
    "We build websites that grow your business and convert visitors into customers.",
    30,
    1600
  );

  const lines = [
    { text: "Websites", accent: false },
    { text: "That Actually", accent: false },
    { text: "Work.", accent: true },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col overflow-hidden bg-background"
    >
      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Single large orb — very subtle */}
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, hsl(var(--cyan)/0.06) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Thin horizontal rule — top accent */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent z-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* ── MAIN CONTENT ── */}
      <motion.div
        className="flex-1 flex flex-col justify-center relative z-10 pt-32 pb-16"
        style={{ y: contentY, opacity }}
      >
        <div className="container mx-auto px-6 lg:px-12">

          {/* Top label row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-between mb-16 lg:mb-20"
          >
            <div className="flex items-center gap-3">
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-cyan"
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-xs text-muted-foreground/60 tracking-[0.3em] uppercase font-medium">
                Digital Agency · Lagos, Nigeria
              </span>
            </div>
            <span className="hidden md:block text-xs text-muted-foreground/40 tracking-[0.2em] uppercase font-medium">
              Est. 2024
            </span>
          </motion.div>

          {/* BIG headline */}
          <div className="mb-12 lg:mb-16">
            {lines.map((line, lineIdx) => (
              <div key={lineIdx} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    delay: 0.4 + lineIdx * 0.15,
                    type: "spring",
                    stiffness: 65,
                    damping: 14,
                  }}
                  className={`text-[clamp(3.5rem,10vw,9rem)] font-poppins font-black leading-[0.95] tracking-tight block ${
                    line.accent
                      ? "bg-gradient-to-r from-cyan via-cyan/70 to-cyan/40 bg-clip-text text-transparent"
                      : "text-foreground"
                  }`}
                >
                  {line.text}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Bottom row — subheadline + CTA side by side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, type: "spring", stiffness: 70 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-20"
          >
            {/* Left — subheadline */}
            <div className="max-w-md">
              {/* Thin rule */}
              <motion.div
                className="w-12 h-px bg-cyan mb-6"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                style={{ originX: 0 }}
              />
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {subheadline}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-0.5 h-[1em] bg-cyan ml-1 align-middle"
                />
              </p>
            </div>

            {/* Right — CTA + brands */}
            <div className="flex flex-col gap-8 lg:items-end">
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start lg:items-end gap-4">
                <GradientButton
                  href="/contact"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Start Your Project
                </GradientButton>

                <motion.a
                  href="/portfolio"
                  className="group inline-flex items-center gap-2 text-sm text-muted-foreground/60 hover:text-foreground transition-colors font-medium tracking-wide"
                  whileHover={{ x: 4 }}
                >
                  View Our Work
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-cyan"
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>

              {/* Brand names — very dim */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 lg:justify-end">
                {brands.map((brand, i) => (
                  <motion.span
                    key={brand}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 + i * 0.07 }}
                    whileHover={{ color: "hsl(var(--cyan))" }}
                    className="text-[10px] text-muted-foreground/20 font-semibold tracking-widest uppercase cursor-default transition-colors"
                  >
                    {brand}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Thin bottom rule */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent z-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      />

      {/* ── TICKER ── */}
      <div className="relative z-10 py-4 border-t border-border/15">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12">
                {[
                  "DIGITAL AGENCY",
                  "WEB DESIGN",
                  "BRANDING",
                  "SOCIAL MEDIA",
                  "E-COMMERCE",
                  "MOBILE OPTIMIZATION",
                  "SEO",
                  "UI/UX DESIGN",
                ].map((text) => (
                  <span
                    key={text}
                    className="text-muted-foreground/25 font-medium text-[10px] tracking-[0.3em] flex items-center gap-12"
                  >
                    {text}
                    <span className="text-cyan/40 text-xs">·</span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
