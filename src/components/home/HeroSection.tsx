import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, ArrowUpRight, Globe, Briefcase, Zap } from "lucide-react";
import { useEffect } from "react";
import GradientButton from "@/components/ui/GradientButton";
import { useTypewriter } from "@/hooks/useTypewriter";
import heroImage from "@/assets/hero-main.png";

// ─────────────────────────────────────────────────────────────────────────────

const floatingCards = [
  {
    id: "projects",
    icon: Briefcase,
    value: "50+",
    label: "Projects Delivered",
    position: "top-[8%] -left-[10%]",
    delay: 1.0,
    floatDuration: 3.8,
  },
  {
    id: "countries",
    icon: Globe,
    value: "3",
    label: "Countries · Worldwide Reach",
    position: "bottom-[22%] -left-[12%]",
    delay: 1.2,
    floatDuration: 4.2,
  },
  {
    id: "turnaround",
    icon: Zap,
    value: "14-Day",
    label: "Avg. Turnaround",
    position: "top-[35%] -right-[8%]",
    delay: 1.4,
    floatDuration: 3.5,
  },
];

const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 14);
      mouseY.set((e.clientY / innerHeight - 0.5) * 14);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  const { displayText: subheadline } = useTypewriter(
    "We design and build high-converting websites for ambitious businesses in Nigeria, Ghana, Canada, USA, United Kingdom and anywhere else in the world.",
    28,
    1600
  );

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">

      {/* Top rule */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent z-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 1.2 }}
      />

      {/* Grid background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--cyan)/0.02) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--cyan)/0.02) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            x: smoothX,
            y: smoothY,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_65%_at_50%_50%,transparent_25%,hsl(var(--background))_100%)]" />
      </div>

      {/* Orb */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-[500px] h-[500px] rounded-full bg-cyan/20 blur-[120px]"
        />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex flex-col flex-1 pt-24 pb-0">

        {/* Split layout */}
        <div className="flex-1 flex items-center container mx-auto px-6 lg:px-14 gap-8 lg:gap-16">

          {/* LEFT — Text column */}
          <div className="flex-1 flex flex-col justify-center max-w-xl">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="flex items-center gap-2.5 mb-8"
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0"
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-[10px] text-muted-foreground/50 tracking-[0.3em] uppercase font-medium">
                Digital Agency · Global
              </span>
            </motion.div>

            {/* Headline */}
            {[
              { text: "Your Gateway", accent: false },
              { text: "to a", accent: false },
              { text: "World-Class", accent: true },
              { text: "Web Presence.", accent: false },
            ].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.p
                  initial={{ y: "105%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    delay: 0.3 + i * 0.1,
                    type: "spring",
                    stiffness: 70,
                    damping: 14,
                  }}
                  className={`font-poppins font-black tracking-tight leading-[0.92] block
                    text-[clamp(2.2rem,5.2vw,5.5rem)]
                    ${line.accent
                      ? "bg-gradient-to-r from-cyan via-cyan/70 to-cyan/35 bg-clip-text text-transparent"
                      : "text-foreground"
                    }`}
                >
                  {line.text}
                </motion.p>
              </div>
            ))}

            {/* Divider */}
            <motion.div
              className="w-8 h-px bg-cyan mt-8 mb-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              style={{ originX: 0 }}
            />

            {/* Subtitle — desktop: typewriter / mobile: static */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-md"
            >
              <span className="hidden lg:inline">
                {subheadline}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-0.5 h-[1em] bg-cyan ml-1 align-middle"
                />
              </span>
              <span className="lg:hidden">
                We design and build high-converting websites for ambitious businesses in Nigeria, Ghana, Canada, USA, United Kingdom and anywhere else in the world.
              </span>
            </motion.p>

            {/* International badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/20 mb-8 w-fit"
            >
              <Globe className="w-3.5 h-3.5 text-cyan" />
              <span className="text-[11px] text-cyan font-medium tracking-wide">
                International · We Serve the Whole World
              </span>
            </motion.div>

            {/* CTAs — single set, always visible */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15 }}
              className="flex flex-col sm:flex-row gap-3"
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
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border/35 text-muted-foreground text-sm font-medium hover:border-cyan/40 hover:text-foreground transition-all"
                whileHover={{ scale: 1.02 }}
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

          </div>

          {/* RIGHT — Hero image + floating cards (desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 60, damping: 18 }}
            className="hidden lg:block relative w-[440px] xl:w-[500px] shrink-0"
          >
            {/* Image frame */}
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src={heroImage}
                alt="Nosyra Digital"
                className="w-full h-full object-cover"
              />
              {/* Bottom overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background/70 to-transparent pointer-events-none" />
            </div>

            {/* Floating stat cards */}
            {floatingCards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.75, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: card.delay, type: "spring", stiffness: 100, damping: 15 }}
                className={`absolute ${card.position} z-20`}
              >
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: card.floatDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-card/95 backdrop-blur-md border border-border/60 shadow-2xl shadow-black/30 min-w-[165px]"
                >
                  <div className="w-9 h-9 rounded-xl bg-cyan/15 flex items-center justify-center shrink-0 border border-cyan/25">
                    <card.icon className="text-cyan" style={{ width: 17, height: 17 }} />
                  </div>
                  <div>
                    <p className="text-[15px] font-poppins font-bold text-foreground leading-none">{card.value}</p>
                    <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">{card.label}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* Background glow */}
            <div className="absolute -inset-10 bg-cyan/5 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>

        {/* Ticker */}
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
                    "NIGERIA",
                    "GHANA",
                    "CANADA",
                    "WEB DESIGN",
                    "E-COMMERCE",
                    "INTERNATIONAL",
                    "UI/UX DESIGN",
                    "DIGITAL AGENCY",
                    "WORLDWIDE",
                  ].map((text) => (
                    <span
                      key={text}
                      className="text-muted-foreground/18 font-medium text-[10px] tracking-[0.3em] flex items-center gap-12"
                    >
                      {text}
                      <span className="text-cyan/20">·</span>
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