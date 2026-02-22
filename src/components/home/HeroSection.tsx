import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import GradientButton from "@/components/ui/GradientButton";
import { useTypewriter } from "@/hooks/useTypewriter";

const UNSPLASH_IMAGE =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&q=90&auto=format&fit=crop";

const brands = [
  "Eko Connect",
  "Liana Flowers",
  "CAT Global",
  "GT Green",
  "Honters Cruise",
  "Viktrotech",
  "THM Wellness",
];

const useMagnetic = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 18 });
  const springY = useSpring(y, { stiffness: 120, damping: 18 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      x.set((e.clientX - (rect.left + rect.width / 2)) * 0.25);
      y.set((e.clientY - (rect.top + rect.height / 2)) * 0.25);
    };
    const leave = () => {
      x.set(0);
      y.set(0);
    };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  return { ref, springX, springY };
};

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, 130]);
  const imageOpacity = useTransform(scrollY, [0, 500], [1, 0.2]);
  const contentY = useTransform(scrollY, [0, 400], [0, -50]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const magnetic = useMagnetic();

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 25);
      mouseY.set((e.clientY / innerHeight - 0.5) * 25);
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  const { displayText: subheadline } = useTypewriter(
    "We build websites that grow your business, elevate your brand, and convert visitors into customers.",
    28,
    1800
  );

  const words = [
    { text: "Websites", gradient: false },
    { text: "That", gradient: false },
    { text: "Work", gradient: true },
    { text: "For", gradient: false },
    { text: "Your", gradient: false },
    { text: "Business", gradient: true },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col overflow-hidden pt-20 bg-background"
    >
      {/* Cursor glow */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-screen"
        style={{
          width: 340,
          height: 340,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, hsl(var(--cyan)/0.1) 0%, transparent 70%)",
          left: cursorPos.x - 170,
          top: cursorPos.y - 170,
          x: smoothX,
          y: smoothY,
        }}
      />

      {/* Parallax background image */}
      <div className="absolute inset-0 z-0">
        <motion.div className="absolute inset-0" style={{ y: imageY, opacity: imageOpacity }}>
          <img
            src={UNSPLASH_IMAGE}
            alt="Digital workspace"
            className="w-full h-full object-cover object-center scale-110"
          />
          {/* Heavy overlay for text clarity */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/97 via-background/88 to-background/99" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/96 via-background/65 to-background/96" />
          <div className="absolute inset-0 bg-cyan/[0.025] mix-blend-screen" />
        </motion.div>
      </div>

      {/* Perspective grid */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--cyan)/0.03) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--cyan)/0.03) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            x: smoothX,
            y: smoothY,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_75%_at_50%_50%,transparent_35%,hsl(var(--background))_100%)]" />
      </div>

      {/* Ambient orbs + particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.12, 0.25, 0.12], x: [0, 45, 0], y: [0, -25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[700px] h-[700px] bg-cyan/10 rounded-full blur-[110px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.18, 0.08], x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -right-32 w-[800px] h-[800px] bg-cyan/8 rounded-full blur-[130px]"
        />

        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: [3, 2, 5, 2, 4][i % 5],
              height: [3, 2, 5, 2, 4][i % 5],
              background: `hsl(var(--cyan)/${0.12 + (i % 5) * 0.08})`,
              top: `${6 + i * 6.5}%`,
              left: `${4 + i * 6.8}%`,
            }}
            animate={{
              y: [0, -(18 + i * 6), 0],
              x: [0, i % 2 === 0 ? 12 : -12, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 5 + i * 0.7,
              repeat: Infinity,
              delay: i * 0.35,
              ease: "easeInOut",
            }}
          />
        ))}

        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`scan-${i}`}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/12 to-transparent"
            style={{ top: `${20 + i * 20}%` }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: [0, 0.5, 0], scaleX: [0, 1, 1] }}
            transition={{
              duration: 2.5,
              delay: 2.5 + i * 0.8,
              repeat: Infinity,
              repeatDelay: 6,
            }}
          />
        ))}
      </div>

      {/* ── MAIN CONTENT ── */}
      <motion.div
        className="flex-1 flex items-center justify-center relative z-10"
        style={{ y: contentY }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] gap-16 items-center">

              {/* LEFT */}
              <div>
                {/* Eyebrow */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 90 }}
                  className="inline-flex items-center gap-3 mb-10"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-4 h-4 text-cyan" />
                  </motion.div>
                  <span className="text-cyan text-xs font-semibold tracking-[0.25em] uppercase">
                    Nigeria's Premier Digital Agency
                  </span>
                  <motion.div
                    className="h-px bg-gradient-to-r from-cyan/50 to-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: 70 }}
                    transition={{ delay: 0.7, duration: 1 }}
                  />
                </motion.div>

                {/* Headline */}
                <div className="mb-8 overflow-hidden">
                  <h1 className="text-5xl md:text-[3.8rem] lg:text-[5rem] xl:text-[5.5rem] font-poppins font-black leading-[1.0] tracking-tight">
                    {words.map((word, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 90, skewY: 6 }}
                        animate={{ opacity: 1, y: 0, skewY: 0 }}
                        transition={{
                          delay: 0.35 + i * 0.11,
                          type: "spring",
                          stiffness: 75,
                          damping: 13,
                        }}
                        whileHover={{ scale: 1.04, skewX: -1.5 }}
                        className={`inline-block mr-4 md:mr-5 ${
                          word.gradient
                            ? "bg-gradient-to-br from-cyan via-cyan/80 to-cyan/50 bg-clip-text text-transparent"
                            : "text-foreground"
                        }`}
                      >
                        {word.text}
                      </motion.span>
                    ))}
                  </h1>
                </div>

                {/* Typewriter */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                  className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mb-10 h-14"
                >
                  {subheadline}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.75, repeat: Infinity }}
                    className="inline-block w-0.5 h-[1.1em] bg-cyan ml-1 align-middle"
                  />
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.85, type: "spring", stiffness: 80 }}
                  className="flex flex-col sm:flex-row items-start gap-4 mb-16"
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
                    className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-border/50 text-foreground/80 font-medium text-sm hover:border-cyan/40 hover:text-foreground transition-all"
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

                {/* Brand names — very dimmed so headline stays dominant */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                  className="flex flex-wrap items-center gap-x-5 gap-y-2"
                >
                  {brands.map((brand, i) => (
                    <motion.span
                      key={brand}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.3 + i * 0.06 }}
                      whileHover={{ color: "hsl(var(--cyan))", y: -2 }}
                      className="text-[11px] text-muted-foreground/25 font-poppins font-semibold tracking-widest uppercase cursor-default transition-all"
                    >
                      {brand}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* RIGHT — Premium floating card */}
              <motion.div
                ref={magnetic.ref}
                className="hidden lg:block relative"
                initial={{ opacity: 0, x: 70, scale: 0.94 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 0.9, type: "spring", stiffness: 55, damping: 16 }}
                style={{ x: magnetic.springX, y: magnetic.springY }}
              >
                {/* Outer glow */}
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.06, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-cyan/12 rounded-[2rem] blur-3xl"
                />

                {/* Card */}
                <motion.div
                  className="relative rounded-[2rem] overflow-hidden border border-cyan/15 shadow-[0_40px_100px_hsl(var(--background)/0.9)]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 180, damping: 18 }}
                >
                  <img
                    src={UNSPLASH_IMAGE}
                    alt="Premium digital workspace"
                    className="w-full h-[430px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan/4 to-transparent mix-blend-screen" />

                  {/* Card bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4 }}
                      className="inline-flex items-center gap-2 bg-background/70 backdrop-blur-md border border-cyan/20 rounded-full px-3 py-1.5 mb-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                      <span className="text-xs text-cyan font-medium tracking-wide">
                        Available for Projects
                      </span>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.6 }}
                      className="text-foreground font-poppins font-bold text-lg leading-tight"
                    >
                      Nosyra Digital
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.75 }}
                      className="text-muted-foreground text-xs mt-0.5"
                    >
                      Lagos, Nigeria · Global Reach
                    </motion.p>
                  </div>
                </motion.div>

                {/* Floating badge — top right */}
                <motion.div
                  className="absolute -top-5 -right-5 bg-cyan text-background text-[11px] font-bold px-3.5 py-2 rounded-2xl shadow-xl shadow-cyan/30 flex items-center gap-1.5"
                  animate={{ y: [0, -7, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  🇳🇬 Made in Nigeria
                </motion.div>

                {/* Floating mini card — bottom left */}
                <motion.div
                  className="absolute -bottom-5 -left-5 bg-background/90 backdrop-blur-xl border border-border/40 rounded-2xl px-4 py-3 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-cyan/15 border border-cyan/25 flex items-center justify-center shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-cyan" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground/50 leading-none mb-0.5">
                        Delivering
                      </p>
                      <p className="text-xs font-bold text-foreground leading-none">
                        Premium Websites
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>
      </motion.div>

      {/* ── TICKER ── */}
      <div className="relative z-10 mt-auto py-4 bg-card/50 backdrop-blur-md border-t border-border/20">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-10 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-10">
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
                    className="text-muted-foreground/35 font-medium text-[11px] tracking-[0.28em] flex items-center gap-10"
                  >
                    {text} <span className="text-cyan/50">◆</span>
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
