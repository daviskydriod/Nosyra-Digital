import { imageSrc } from "@/lib/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CircleDot, MoveUpRight } from "lucide-react";
import { Link } from "@/lib/navigation";
import GradientButton from "@/components/ui/GradientButton";
import heroImage from "@/assets/hero-main.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden border-b border-border/60 pt-28 lg:pt-36">
      <div className="pointer-events-none absolute right-[8%] top-28 h-56 w-56 rounded-full border border-cyan/10" />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 lg:px-10 lg:pb-24">
        <div className="mb-10 flex items-center justify-between gap-6 border-b border-border/60 pb-4 font-mono text-[10px] uppercase tracking-[.24em] text-muted-foreground">
          <span className="flex items-center gap-2 text-cyan"><CircleDot className="h-3 w-3" /> Independent digital studio</span>
          <span className="hidden sm:block">Lagos · London · Worldwide</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:items-end lg:gap-20">
          <div>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              We make complex businesses easier to understand, trust, and choose.
            </motion.p>
            <div className="overflow-hidden">
              <motion.h1 initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: .8, ease: [0.22, 1, .36, 1] }} className="max-w-4xl text-[clamp(3.8rem,9vw,9.5rem)] font-semibold leading-[.82] tracking-[-.08em] text-foreground">
                Make the next<br /><span className="text-cyan">move obvious.</span>
              </motion.h1>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .55 }} className="mt-10 flex flex-col gap-5 border-t border-border/60 pt-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-base leading-relaxed text-muted-foreground">Strategy, design, and engineering for ambitious businesses that need a sharper digital presence.</p>
              <span className="font-mono text-[10px] uppercase tracking-[.22em] text-cyan">01 / 04 — Positioning first</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7 }} className="mt-8 flex flex-wrap gap-3">
              <GradientButton href="/contact" size="lg" icon={<ArrowRight className="h-5 w-5" />}>Start a project</GradientButton>
              <Link to="/portfolio" className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-muted-foreground transition hover:border-cyan/50 hover:text-foreground">See selected work <ArrowUpRight className="h-4 w-4 text-cyan transition group-hover:translate-x-1 group-hover:-translate-y-1" /></Link>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .35, duration: .8 }} className="relative lg:pb-4">
            <div className="absolute -left-5 top-8 z-10 hidden w-28 -rotate-6 border border-cyan/30 bg-background/90 p-3 font-mono text-[9px] uppercase tracking-[.16em] text-cyan shadow-xl backdrop-blur sm:block">Built with intent<br /><span className="mt-2 block text-foreground/50">Signal 001</span></div>
            <div className="relative ml-auto max-w-md overflow-hidden border border-border bg-card shadow-[0_30px_90px_hsl(220_65%_4%/.5)] lg:max-w-none">
              <div className="aspect-[5/6] overflow-hidden"><img src={imageSrc(heroImage)} alt="Nosyra Digital creative studio" className="h-full w-full object-cover grayscale-[.12] transition duration-700 hover:scale-105" /></div>
              <div className="grid grid-cols-[1fr_auto] items-center gap-4 border-t border-border/60 px-5 py-4"><span className="font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground">Digital systems / 2026</span><MoveUpRight className="h-5 w-5 text-cyan" /></div>
            </div>
            <div className="mt-4 flex items-center justify-between border-b border-border/60 pb-4 font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground"><span>50+ launches</span><span>04 markets</span><span>14-day average</span></div>
          </motion.div>
        </div>
      </div>
      <div className="overflow-hidden border-t border-border/60 py-4"><motion.div className="flex w-max gap-12 whitespace-nowrap" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>{[...Array(2)].map((_, i) => <div key={i} className="flex gap-12 font-mono text-[10px] uppercase tracking-[.24em] text-muted-foreground/70">{["Brand systems", "Web experiences", "Commerce", "Digital products", "Nigeria", "Worldwide"].map((item) => <span key={`${i}-${item}`} className="flex items-center gap-12">{item}<b className="text-cyan">✳</b></span>)}</div>)}</motion.div></div>
    </section>
  );
};

export default HeroSection;
