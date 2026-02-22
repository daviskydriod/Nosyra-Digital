import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
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
  const contentY = useTransform(scrollY, [0, 500], [0, -70]);
  const contentOpacity = useTransform(scrollY, [0, 350], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 18);
      mouseY.set((e.clientY / innerHeight - 0.5) * 18);
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
      {/* Subtle grid */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--cyan)/0.025) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--cyan)/0.025) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            x: smoothX,
            y: smoothY,
          }}
        />
        {/* Radial vignette over grid so edges fade out */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_30%,hsl(var(--background))_100%)]" />
      </div>

      {/* Single ambient orb — centered, very subtle */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center"
        style={{ x: smoothX, y: smoothY }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-[600px] h-[600px] rounded-full bg-cyan/20 blur-[120px]"
        />
      </motion.div>

      {/* Top thin rule */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent z-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* ── MAIN CONTENT — centered ── */}
      <motion.div
        className="flex-1 flex flex-col items-center justify-center relative z-10 pt-28 pb-16 text-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex items-center gap-3 mb-12"
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-cyan"
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs text-muted-foreground/50 tracking-[0.3em] uppercase font-medium">
              Nigeria's Premier Digital Agency
            </span>
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-cyan"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>

          {/* BIG centered headline */}
          <div className="mb-10">
            {lines.map((line, lineIdx) => (
              <div key={lineIdx} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    delay: 0.35 + lineIdx * 0.14,
                    type: "spring",
                    stiffness: 65,
                    damping: 14,
                  }}
                  className={`block font-poppins font-black leading-[0.92] tracking-tight
                    text-[clamp(3.8rem,11vw,10rem)]
                    ${line.accent
                      ? "bg-gradient-to-r from-cyan via-cyan/75 to-cyan/40 bg-clip-text text-transparent"
                      : "text-foreground"
                    }`}
                >
                  {line.text}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Thin divider */}
          <motion.div
            className="w-12 h-px bg-cyan mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mb-12"
          >
            {subheadline}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-0.5 h-[1em] bg-cyan ml-1 align-middle"
            />
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, type: "spring", stiffness: 80 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <GradientButton
              href="/contact"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Project
            </GradientButton>

            <motion.a
              href="/portfolio"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border/40 text-muted-foreground text-sm font-medium hover:border-cyan/40 hover:text-foreground transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View Our Work
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowUpRight className="w-4 h-4 group-hover:text-cyan transition-colors" />
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Brand names — centered, ultra dim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            {brands.map((brand, i) => (
              <motion.span
                key={brand}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + i * 0.06 }}
                whileHover={{ color: "hsl(var(--cyan))", y: -2 }}
                className="text-[10px] text-muted-foreground/20 font-semibold tracking-widest uppercase cursor-default transition-all"
              >
                {brand}
              </motion.span>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* ── TICKER ── */}
      <div className="relative z-10 py-3.5 border-t border-border/10">
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
                    className="text-muted-foreground/20 font-medium text-[10px] tracking-[0.3em] flex items-center gap-12"
                  >
                    {text}
                    <span className="text-cyan/30">·</span>
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
