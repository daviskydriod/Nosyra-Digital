import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import GradientButton from "@/components/ui/GradientButton";
import { useTypewriter } from "@/hooks/useTypewriter";

// Magnetic button hook
const useMagnetic = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return { ref, springX, springY };
};

const UNSPLASH_IMAGE = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80&auto=format&fit=crop";

const brands = ["Eko Connect", "Liana Flowers", "CAT Global", "GT Green", "Honters Cruise", "Viktrotech", "THM Wellness"];

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, 120]);
  const imageOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  const textY = useTransform(scrollY, [0, 400], [0, -60]);
  const magnetic = useMagnetic();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 30);
      mouseY.set((e.clientY / innerHeight - 0.5) * 30);
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
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
      {/* Custom cursor glow */}
      <motion.div
        className="fixed w-64 h-64 rounded-full pointer-events-none z-0 mix-blend-screen"
        style={{
          background: "radial-gradient(circle, hsl(var(--cyan)/0.15) 0%, transparent 70%)",
          left: mousePos.x - 128,
          top: mousePos.y - 128,
          x: smoothMouseX,
          y: smoothMouseY,
        }}
      />

      {/* Full bleed image with parallax */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          style={{ y: imageY, opacity: imageOpacity }}
        >
          <img
            src={UNSPLASH_IMAGE}
            alt="Digital workspace"
            className="w-full h-full object-cover object-center scale-110"
          />
          {/* Multi-layer overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/75 to-background/98" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
          {/* Cyan tint overlay */}
          <div className="absolute inset-0 bg-cyan/5 mix-blend-screen" />
        </motion.div>
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--cyan)/0.04) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--cyan)/0.04) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            x: smoothMouseX,
            y: smoothMouseY,
          }}
        />
      </div>

      {/* Animated orbs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -right-20 w-[700px] h-[700px] bg-cyan/8 rounded-full blur-[100px]"
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: i % 3 === 0 ? 4 : i % 3 === 1 ? 2 : 6,
              height: i % 3 === 0 ? 4 : i % 3 === 1 ? 2 : 6,
              background: `hsl(var(--cyan)/${0.2 + (i % 4) * 0.15})`,
              top: `${8 + i * 7.5}%`,
              left: `${5 + i * 8}%`,
            }}
            animate={{
              y: [0, -(20 + i * 5), 0],
              x: [0, i % 2 === 0 ? 15 : -15, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + i * 0.8,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Diagonal lines accent */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent"
            style={{ top: `${15 + i * 18}%`, left: 0, right: 0 }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: [0, 0.5, 0] }}
            transition={{
              duration: 3,
              delay: 2 + i * 0.6,
              repeat: Infinity,
              repeatDelay: 4,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="flex-1 flex items-center justify-center relative z-10"
        style={{ y: textY }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">

            {/* Split layout */}
            <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
              <div>
                {/* Eyebrow badge */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                  className="inline-flex items-center gap-2 mb-8"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-4 h-4 text-cyan" />
                  </motion.div>
                  <span className="text-cyan text-sm font-medium tracking-[0.2em] uppercase">
                    Nigeria's Digital Agency
                  </span>
                  <motion.div
                    className="h-px bg-gradient-to-r from-cyan/60 to-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: 80 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  />
                </motion.div>

                {/* Headline */}
                <div className="mb-8 overflow-hidden">
                  <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-poppins font-black leading-[1.0] tracking-tight">
                    {words.map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 80, skewY: 5 }}
                        animate={{ opacity: 1, y: 0, skewY: 0 }}
                        transition={{
                          delay: 0.4 + index * 0.12,
                          type: "spring",
                          stiffness: 80,
                          damping: 14,
                        }}
                        className={`inline-block mr-4 md:mr-5 ${
                          word.gradient
                            ? "bg-gradient-to-r from-cyan via-cyan/80 to-cyan/60 bg-clip-text text-transparent"
                            : "text-foreground"
                        }`}
                        whileHover={{ scale: 1.05, skewX: -2 }}
                      >
                        {word.text}
                      </motion.span>
                    ))}
                  </h1>
                </div>

                {/* Typewriter */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="mb-10"
                >
                  <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed h-14">
                    {subheadline}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.7, repeat: Infinity }}
                      className="inline-block w-0.5 h-5 bg-cyan ml-1 align-middle"
                    />
                  </p>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.9, type: "spring", stiffness: 80 }}
                  className="flex flex-col sm:flex-row items-start gap-4 mb-14"
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
                    className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-border/60 text-foreground font-medium text-sm hover:border-cyan/50 transition-all"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View Our Work
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowUpRight className="w-4 h-4 group-hover:text-cyan transition-colors" />
                    </motion.span>
                  </motion.a>
                </motion.div>

                {/* Brand names */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.3 }}
                  className="flex flex-wrap items-center gap-x-6 gap-y-2"
                >
                  {brands.map((brand, i) => (
                    <motion.span
                      key={brand}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.4 + i * 0.07 }}
                      whileHover={{ color: "hsl(var(--cyan))", y: -2 }}
                      className="text-sm text-muted-foreground/50 font-poppins font-semibold tracking-wide cursor-default transition-colors"
                    >
                      {brand}
                    </motion.span>
                  ))}
                </motion.div>
              </div>

              {/* Right side — floating image card */}
              <motion.div
                ref={magnetic.ref}
                className="hidden lg:block relative"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 60 }}
                style={{ x: magnetic.springX, y: magnetic.springY }}
              >
                <div className="relative w-72 xl:w-80">
                  {/* Glow behind card */}
                  <motion.div
                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-cyan/20 rounded-3xl blur-2xl scale-110"
                  />

                  {/* Card */}
                  <motion.div
                    className="relative rounded-3xl overflow-hidden border border-cyan/20 shadow-2xl"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <img
                      src={UNSPLASH_IMAGE}
                      alt="Digital workspace"
                      className="w-full h-96 object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

                    {/* Floating stat card */}
                    <motion.div
                      className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md rounded-2xl p-4 border border-border/40"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Projects Delivered</p>
                          <motion.p
                            className="text-2xl font-poppins font-black text-foreground"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                          >
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1.6 }}
                            >
                              7+
                            </motion.span>
                          </motion.p>
                        </div>
                        <motion.div
                          className="w-10 h-10 rounded-full bg-cyan/20 border border-cyan/30 flex items-center justify-center"
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles className="w-4 h-4 text-cyan" />
                        </motion.div>
                      </div>

                      {/* Mini bar chart */}
                      <div className="flex items-end gap-1 mt-3 h-8">
                        {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 bg-cyan/30 rounded-sm"
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: 1.8 + i * 0.08, type: "spring" }}
                            style={{ height: `${h}%`, originY: 1 }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Floating badge top right */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-cyan text-background text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    🇳🇬 Nigeria
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Ticker */}
      <div className="relative z-10 mt-auto py-4 bg-card/60 backdrop-blur-sm border-t border-border/30">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8">
                {["DIGITAL AGENCY", "WEB DESIGN", "BRANDING", "SOCIAL MEDIA", "E-COMMERCE", "MOBILE OPTIMIZATION", "SEO", "UI/UX DESIGN"].map((text) => (
                  <span key={text} className="text-muted-foreground/60 font-medium text-xs tracking-[0.25em] flex items-center gap-8">
                    {text} <span className="text-cyan">•</span>
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
