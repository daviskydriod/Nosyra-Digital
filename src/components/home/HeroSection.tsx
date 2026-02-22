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
      mouseX.set((e.clientX / innerWidth - 0.5) * 14);
      mouseY.set((e.clientY / innerHeight - 0.5) * 14);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  const { displayText: subheadline } = useTypewriter(
    "We build websites that grow your business and convert visitors into customers.",
    30,
    1600
  );

  return (
    <section className="relative h-screen max-h-screen flex flex-col overflow-hidden bg-background">

      {/* Top rule */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent z-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 1.2 }}
      />

      {/* Grid */}
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
          animate={{ scale: [1, 1.1, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-[450px] h-[450px] rounded-full bg-cyan/20 blur-[110px]"
        />
      </div>

      {/* ── SPLIT LAYOUT — left big text, right subtitle+CTA ── */}
      <div className="relative z-10 flex flex-col h-full pt-20">

        {/* Main split — takes all space */}
        <div className="flex-1 flex items-center px-6 lg:px-14 gap-8 lg:gap-16">

          {/* LEFT — giant stacked text */}
          <div className="flex-1">
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
              <span className="text-[10px] text-muted-foreground/40 tracking-[0.3em] uppercase font-medium">
                Digital Agency · Lagos
              </span>
            </motion.div>

            {/* Headline lines */}
            {[
              { text: "We Build", accent: false },
              { text: "Websites", accent: false },
              { text: "That Work.", accent: true },
            ].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.p
                  initial={{ y: "105%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    delay: 0.3 + i * 0.12,
                    type: "spring",
                    stiffness: 70,
                    damping: 14,
                  }}
                  className={`font-poppins font-black tracking-tight leading-[0.9] block
                    text-[clamp(2.8rem,7vw,7.5rem)]
                    ${line.accent
                      ? "bg-gradient-to-r from-cyan via-cyan/70 to-cyan/35 bg-clip-text text-transparent"
                      : "text-foreground"
                    }`}
                >
                  {line.text}
                </motion.p>
              </div>
            ))}
          </div>

          {/* Vertical divider */}
          <motion.div
            className="hidden lg:block w-px self-stretch bg-border/20"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{ originY: 0 }}
          />

          {/* RIGHT — subtitle + CTA stacked vertically, centered */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 70 }}
            className="hidden lg:flex flex-col justify-center gap-10 w-72 xl:w-80"
          >
            {/* Subtitle */}
            <div>
              <motion.div
                className="w-6 h-px bg-cyan mb-5"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                style={{ originX: 0 }}
              />
              <p className="text-sm text-muted-foreground leading-relaxed">
                {subheadline}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-0.5 h-[1em] bg-cyan ml-1 align-middle"
                />
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
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
            </div>
          </motion.div>
        </div>

        {/* Mobile bottom — subtitle + CTA (shows only on small screens) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="lg:hidden flex flex-col gap-6 px-6 pb-10"
        >
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <GradientButton
              href="/contact"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Project
            </GradientButton>
            <motion.a
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border/35 text-muted-foreground text-sm font-medium hover:border-cyan/40 hover:text-foreground transition-all"
              whileHover={{ scale: 1.02 }}
            >
              View Our Work <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

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
