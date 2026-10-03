import { imageSrc } from "@/lib/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, ArrowUpRight, Globe, Briefcase, Zap } from "lucide-react";
import { useEffect } from "react";
import { Link } from "@/lib/navigation";
import GradientButton from "@/components/ui/GradientButton";
import heroImage from "@/assets/hero-main.png";

const floatingCards = [
  { id: "projects", icon: Briefcase, value: "50+", label: "Projects delivered", position: "top-[9%] -left-[10%]", delay: 1.0, floatDuration: 3.8 },
  { id: "countries", icon: Globe, value: "04", label: "Markets reached", position: "bottom-[18%] -left-[13%]", delay: 1.2, floatDuration: 4.2 },
  { id: "turnaround", icon: Zap, value: "14 days", label: "Average launch", position: "top-[43%] -right-[11%]", delay: 1.4, floatDuration: 3.5 },
];

const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 12);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 12);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [mouseX, mouseY]);

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-background pt-24 lg:pt-28">
      <motion.div className="pointer-events-none absolute inset-0 opacity-60" style={{ backgroundImage: "linear-gradient(hsl(var(--cyan)/.035) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--cyan)/.035) 1px, transparent 1px)", backgroundSize: "72px 72px", x: smoothX, y: smoothY }} />
      <div className="pointer-events-none absolute -left-40 top-24 h-[32rem] w-[32rem] rounded-full bg-cyan/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[30rem] w-[30rem] rounded-full bg-navy/50 blur-[140px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-10 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.8fr)] lg:gap-20">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .15 }} className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_14px_hsl(var(--cyan))]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-muted-foreground">Lagos / London / Worldwide</span>
            </motion.div>
            <div className="mb-8 overflow-hidden">
              <motion.h1 initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ delay: .28, duration: .75, ease: [0.22, 1, .36, 1] }} className="max-w-4xl text-[clamp(3.2rem,8vw,7.8rem)] font-semibold leading-[.88] tracking-[-.07em] text-foreground">
                Digital that <span className="text-gradient">moves</span><br />business forward.
              </motion.h1>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }} className="grid max-w-2xl gap-6 border-t border-border/80 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-md text-base leading-relaxed text-muted-foreground">Strategy, design, and engineering for ambitious businesses that need more from their digital presence.</p>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.22em] text-cyan"><span className="h-px w-8 bg-cyan" />Independent by design</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <GradientButton href="/contact" size="lg" icon={<ArrowRight className="h-5 w-5" />}>Book a project call</GradientButton>
              <Link to="/portfolio" className="group inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-muted-foreground transition-all hover:border-cyan/50 hover:text-foreground">Explore the work <ArrowUpRight className="h-4 w-4 text-cyan transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .5, duration: .8, ease: "easeOut" }} className="relative mx-auto w-full max-w-md lg:mr-8">
            <div className="absolute -right-4 -top-4 z-20 rounded-full border border-cyan/30 bg-background px-4 py-2 font-mono text-[9px] uppercase tracking-[.22em] text-cyan">Signal / 001</div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_30px_80px_hsl(220_65%_4%/.45)]">
              <img src={imageSrc(heroImage)} alt="Nosyra Digital creative studio" className="h-full w-full object-cover grayscale-[.15] transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-cyan/5" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between border-t border-white/20 pt-4"><span className="font-mono text-[10px] uppercase tracking-[.22em] text-white/70">Build with intent</span><span className="text-2xl text-cyan">↗</span></div>
            </div>
            {floatingCards.map((card) => <motion.div key={card.id} initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: card.delay, type: "spring", stiffness: 100, damping: 15 }} className={`absolute ${card.position} z-20 hidden sm:block`}><motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: card.floatDuration, repeat: Infinity, ease: "easeInOut" }} className="flex min-w-[155px] items-center gap-3 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-2xl backdrop-blur-md"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan/25 bg-cyan/10"><card.icon className="h-4 w-4 text-cyan" /></div><div><p className="font-mono text-sm font-medium text-foreground">{card.value}</p><p className="mt-0.5 text-[10px] leading-tight text-muted-foreground">{card.label}</p></div></motion.div></motion.div>)}
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 overflow-hidden border-y border-border/60 py-4"><motion.div className="flex w-max gap-10 whitespace-nowrap" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 32, repeat: Infinity, ease: "linear" }}>{[...Array(2)].map((_, i) => <div key={i} className="flex gap-10">{["WEB DESIGN", "E-COMMERCE", "BRAND SYSTEMS", "DIGITAL PRODUCTS", "NIGERIA", "GHANA", "UK", "WORLDWIDE"].map((text) => <span key={`${i}-${text}`} className="flex items-center gap-10 font-mono text-[10px] tracking-[.25em] text-muted-foreground/70">{text}<span className="text-cyan">✳</span></span>)}</div>)}</motion.div></div>
    </section>
  );
};

export default HeroSection;
