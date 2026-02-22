import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import GradientButton from "@/components/ui/GradientButton";
import { useTypewriter } from "@/hooks/useTypewriter";

const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 16);
      mouseY.set((e.clientY / innerHeight - 0.5) * 16);
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
    <section className="relative h-screen max-h-screen flex flex-col overflow-hidden bg-background">

      {/* Top thin rule */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent z-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 1.2 }}
      />

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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_30%,hsl(var(--background))_100%)]" />
      </div>

      {/* Ambient orb */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.07, 0.14, 0.07] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-[500px] h-[500px] rounded-full bg-cyan/20 blur-[120px]"
        />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 flex flex-col h-full pt-20">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-between px-6 lg:px-12 pt-5"
        >
          <div className="flex items-center gap-3">
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-cyan"
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs text-muted-foreground/50 tracking-[0.28em] uppercase font-medium">
              Nigeria's Premier Digital Agency
            </span>
          </div>
          <span className="hidden md:block text-xs text-muted-foreground/30 tracking-[0.2em] uppercase font-medium">
            Est. 2024
          </span>
        </motion.div>

        {/* BIG headline — centered, takes available space */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 lg:px-12 py-4">
          <div className="text-center w-full">
            {lines.map((line, lineIdx) => (
              <div key={lineIdx} className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    delay: 0.35 + lineIdx * 0.13,
                    type: "spring",
                    stiffness: 65,
                    damping: 14,
                  }}
                  className={`block font-poppins font-black tracking-tight leading-[0.92]
                    text-[clamp(3.2rem,9.5vw,8.5rem)]
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
        </div>

        {/* Bottom row — pulled up with pb so it's clearly visible */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, type: "spring", stiffness: 70 }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 px-6 lg:px-12 pb-14"
        >
          {/* LEFT — subtitle */}
          <div className="max-w-xs">
            <motion.div
              className="w-8 h-px bg-cyan mb-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              style={{ originX: 0 }}
            />
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {subheadline}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-[1em] bg-cyan ml-1 align-middle"
              />
            </p>
          </div>

          {/* RIGHT — CTAs only */}
          <div className="flex flex-col sm:flex-row items-start lg:items-center gap-3">
            <GradientButton
              href="/contact"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Project
            </GradientButton>

            <motion.a
              href="/portfolio"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/40 text-muted-foreground text-sm font-medium hover:border-cyan/40 hover:text-foreground transition-all"
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
          </div>
        </motion.div>

        {/* Ticker — pinned at very bottom */}
        <div className="border-t border-border/10 py-3">
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
                      <span className="text-cyan/25">·</span>
                    </span>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
