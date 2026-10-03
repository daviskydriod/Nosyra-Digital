import { imageSrc } from "@/lib/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Link } from "@/lib/navigation";
import GradientButton from "@/components/ui/GradientButton";
import heroImage from "@/assets/hero-main.png";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-white pt-32 lg:pt-40">
    <div className="pointer-events-none absolute -right-40 top-16 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,hsl(var(--cyan)/.14),transparent_65%)]" />
    <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,hsl(250_90%_70%/.10),transparent_68%)]" />
    <div className="relative mx-auto max-w-7xl px-5 pb-20 lg:px-10 lg:pb-28">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-muted-foreground">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-2 shadow-sm"><Sparkles className="h-3.5 w-3.5 text-cyan" /> Independent digital studio</span>
        <span>Lagos · London · Worldwide</span>
      </div>
      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6 max-w-lg text-lg leading-relaxed text-muted-foreground">We help ambitious businesses turn complicated ideas into clear, credible digital experiences.</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="max-w-4xl text-[clamp(3.5rem,8vw,7.8rem)] font-semibold leading-[.9] tracking-[-.08em] text-foreground">Make the next <span className="text-cyan">move obvious.</span></motion.h1>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="mt-10 flex flex-wrap gap-3">
            <GradientButton href="/contact" size="lg" icon={<ArrowRight className="h-5 w-5" />}>Start a project</GradientButton>
            <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:border-cyan hover:shadow-md">See selected work <ArrowUpRight className="h-4 w-4 text-cyan" /></Link>
          </motion.div>
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-5 text-sm">
            {[['50+', 'launches'], ['04', 'markets'], ['14-day', 'average']].map(([value, label]) => <div key={label}><p className="text-xl font-semibold tracking-tight text-foreground">{value}</p><p className="mt-1 text-muted-foreground">{label}</p></div>)}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: .96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: .2, duration: .7 }} className="relative mx-auto w-full max-w-[30rem] lg:max-w-none">
          <div className="absolute -left-4 top-10 z-10 rounded-2xl border border-border bg-white px-4 py-3 text-xs font-semibold text-foreground shadow-xl sm:-left-8"><span className="mb-1 block text-cyan">Signal 001</span>Built with intent</div>
          <div className="overflow-hidden rounded-[2rem] border border-border bg-white p-2 shadow-[0_30px_80px_hsl(222_47%_11%/.14)]"><div className="overflow-hidden rounded-[1.5rem] bg-muted"><img src={imageSrc(heroImage)} alt="Nosyra Digital creative studio" className="aspect-[4/5] h-full w-full object-cover transition duration-700 hover:scale-105" /></div></div>
          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground"><span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan" /> Digital systems / 2026</span><span className="inline-flex items-center gap-1"><Check className="h-3.5 w-3.5 text-cyan" /> Strategy first</span></div>
        </motion.div>
      </div>
    </div>
    <div className="border-y border-border bg-muted/40 py-4"><div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-10 gap-y-2 px-5 text-xs font-medium text-muted-foreground lg:px-10"><span>Brand systems</span><span>Web experiences</span><span>Commerce</span><span>Digital products</span><span>Growth systems</span></div></div>
  </section>
);

export default HeroSection;
