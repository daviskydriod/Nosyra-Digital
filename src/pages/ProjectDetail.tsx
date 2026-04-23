import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import GradientButton from "@/components/ui/GradientButton";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Instagram,
  Facebook,
  LayoutGrid,
  Sparkles,
} from "lucide-react";
import { projects } from "@/data/projectsData";

// ─────────────────────────────────────────────────────────────────────────────
// WEB PROJECT DETAIL
// ─────────────────────────────────────────────────────────────────────────────
const WebProjectDetail = ({ project }: { project: (typeof projects)[0] }) => (
  <>
    {/* HERO */}
    <section className="relative overflow-hidden pt-36 pb-20 lg:pb-24">
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute -top-20 left-1/4 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-cyan transition-colors duration-200"
          >
            <motion.span className="inline-flex" whileHover={{ x: -3 }} transition={{ duration: 0.2 }}>
              <ArrowLeft className="w-4 h-4" />
            </motion.span>
            All Projects
          </Link>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-cyan bg-cyan/10 rounded-full border border-cyan/20 uppercase tracking-widest"
        >
          {project.category}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-poppins font-black text-foreground mb-6 leading-[1.05] max-w-4xl"
        >
          {project.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32 }}
          className="flex flex-wrap items-center gap-3"
        >
          <span className="px-4 py-1.5 bg-muted/60 border border-border/50 rounded-full text-sm text-muted-foreground">
            📅 {project.year}
          </span>
          <span className="px-4 py-1.5 bg-muted/60 border border-border/50 rounded-full text-sm text-muted-foreground">
            ⏱ {(project as any).duration}
          </span>
          {project.tags.map((tag) => (
            <span key={tag} className="px-4 py-1.5 bg-cyan/10 border border-cyan/20 rounded-full text-sm text-cyan">
              {tag}
            </span>
          ))}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-cyan text-primary-foreground font-semibold rounded-full shadow-[0_0_28px_hsl(var(--cyan)/0.35)] hover:shadow-[0_0_45px_hsl(var(--cyan)/0.55)] hover:scale-105 transition-all duration-300 text-sm"
          >
            Visit Live Site
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>

    {/* SCREENSHOT + DETAILS */}
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:flex-1 relative rounded-2xl overflow-hidden border border-border/50 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/80 border-b border-border/50">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
              <div className="ml-3 flex-1 h-6 bg-background/60 rounded-md flex items-center px-3">
                <span className="text-xs text-muted-foreground/50 font-mono truncate">
                  {project.link}
                </span>
              </div>
            </div>
            <img src={project.image} alt={project.title} className="w-full object-cover max-h-[480px]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-64 xl:w-72 shrink-0 flex flex-col gap-6"
          >
            <div className="p-5 rounded-2xl border border-border/50 bg-card">
              <span className="text-xs font-mono text-cyan uppercase tracking-[0.18em] mb-2 block">Project</span>
              <p className="font-poppins font-bold text-foreground text-base leading-snug">{project.title}</p>
            </div>
            <div className="p-5 rounded-2xl border border-border/50 bg-card">
              <span className="text-xs font-mono text-cyan uppercase tracking-[0.18em] mb-2 block">Category</span>
              <p className="text-foreground font-medium">{project.category}</p>
            </div>
            <div className="p-5 rounded-2xl border border-border/50 bg-card">
              <span className="text-xs font-mono text-cyan uppercase tracking-[0.18em] mb-3 block">Timeline</span>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Year</span>
                  <span className="text-foreground font-medium">{project.year}</span>
                </div>
                <div className="w-full h-px bg-border/40" />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="text-foreground font-medium">{(project as any).duration}</span>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-2xl border border-border/50 bg-card">
              <span className="text-xs font-mono text-cyan uppercase tracking-[0.18em] mb-3 block">Tech & Stack</span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs bg-cyan/10 border border-cyan/20 text-cyan rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-cyan text-primary-foreground font-semibold rounded-xl shadow-[0_0_24px_hsl(var(--cyan)/0.3)] hover:shadow-[0_0_40px_hsl(var(--cyan)/0.5)] hover:scale-105 transition-all duration-300 text-sm"
            >
              Visit Live Site
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  </>
);

// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL MEDIA PROJECT DETAIL
// ─────────────────────────────────────────────────────────────────────────────
const SocialProjectDetail = ({ project }: { project: (typeof projects)[0] }) => {
  const gallery = (project as any).gallery ?? [project.image];
  const [activeImg, setActiveImg] = useState(0);

  const platformIcons: Record<string, React.ReactNode> = {
    Instagram: <Instagram className="w-3.5 h-3.5" />,
    Facebook: <Facebook className="w-3.5 h-3.5" />,
  };

  return (
    <>
      {/* HERO — editorial, gradient-heavy */}
      <section className="relative overflow-hidden pt-36 pb-20 lg:pb-28">
        {/* Warm gradient blobs */}
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-pink-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-400/6 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-pink-400 transition-colors duration-200"
            >
              <motion.span className="inline-flex" whileHover={{ x: -3 }} transition={{ duration: 0.2 }}>
                <ArrowLeft className="w-4 h-4" />
              </motion.span>
              All Projects
            </Link>
          </motion.div>

          {/* Social badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-semibold bg-gradient-to-r from-pink-500/20 to-orange-400/20 border border-pink-500/30 text-pink-400 rounded-full uppercase tracking-widest">
              <LayoutGrid className="w-3.5 h-3.5" /> Social Media Design
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-poppins font-black text-foreground mb-6 leading-[1.05] max-w-4xl"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="px-4 py-1.5 bg-muted/60 border border-border/50 rounded-full text-sm text-muted-foreground">
              📅 {project.year}
            </span>
            {(project as any).postsDelivered && (
              <span className="px-4 py-1.5 bg-pink-500/10 border border-pink-500/20 rounded-full text-sm text-pink-400 font-medium">
                ✦ {(project as any).postsDelivered}
              </span>
            )}
            {((project as any).platforms ?? []).map((p: string) => (
              <span
                key={p}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-muted/60 border border-border/50 rounded-full text-sm text-muted-foreground"
              >
                {platformIcons[p]}
                {p}
              </span>
            ))}
            {project.tags.map((tag) => (
              <span key={tag} className="px-4 py-1.5 bg-pink-500/10 border border-pink-500/20 rounded-full text-sm text-pink-400">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GALLERY + DETAILS */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* Gallery viewer */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-full lg:flex-1"
            >
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] bg-muted aspect-square sm:aspect-[4/3]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImg}
                    src={gallery[activeImg]}
                    alt={`${project.title} post ${activeImg + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                </AnimatePresence>

                {/* Instagram-style frame badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 flex items-center justify-center">
                    <Instagram className="w-2.5 h-2.5 text-white" />
                  </div>
                  <span className="text-white text-xs font-medium">{activeImg + 1} / {gallery.length}</span>
                </div>

                {/* Sparkle watermark */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
                  <Sparkles className="w-3 h-3 text-pink-400" />
                  <span className="text-white/70 text-xs">Nosyra Digital</span>
                </div>
              </div>

              {/* Thumbnail strip */}
              <div className="flex gap-3 mt-4">
                {gallery.map((img: string, i: number) => (
                  <motion.button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex-1 aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                      activeImg === i
                        ? "border-pink-500 shadow-[0_0_16px_rgba(236,72,153,0.4)]"
                        : "border-border/40 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Details sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="w-full lg:w-64 xl:w-72 shrink-0 flex flex-col gap-6"
            >
              <div className="p-5 rounded-2xl border border-border/50 bg-card">
                <span className="text-xs font-mono text-pink-400 uppercase tracking-[0.18em] mb-2 block">Client</span>
                <p className="font-poppins font-bold text-foreground text-base leading-snug">{project.title}</p>
              </div>

              <div className="p-5 rounded-2xl border border-border/50 bg-card">
                <span className="text-xs font-mono text-pink-400 uppercase tracking-[0.18em] mb-3 block">Deliverables</span>
                <div className="flex flex-col gap-2">
                  {(project as any).postsDelivered && (
                    <>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Posts</span>
                        <span className="text-foreground font-medium">{(project as any).postsDelivered}</span>
                      </div>
                      <div className="w-full h-px bg-border/40" />
                    </>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Year</span>
                    <span className="text-foreground font-medium">{project.year}</span>
                  </div>
                  <div className="w-full h-px bg-border/40" />
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Engagement</span>
                    <span className="text-foreground font-medium">{(project as any).duration}</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-border/50 bg-card">
                <span className="text-xs font-mono text-pink-400 uppercase tracking-[0.18em] mb-3 block">Platforms</span>
                <div className="flex flex-col gap-2">
                  {((project as any).platforms ?? []).map((p: string) => (
                    <div key={p} className="flex items-center gap-2 text-sm text-foreground font-medium">
                      {platformIcons[p]}
                      {p}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-pink-500/20 bg-pink-500/[0.03]">
                <span className="text-xs font-mono text-pink-400 uppercase tracking-[0.18em] mb-3 block">Content Tags</span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs bg-pink-500/10 border border-pink-500/20 text-pink-400 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );

  function platformIcons(p: string) {
    const icons: Record<string, React.ReactNode> = {
      Instagram: <Instagram className="w-4 h-4 text-pink-400" />,
      Facebook: <Facebook className="w-4 h-4 text-blue-400" />,
    };
    return icons[p] ?? null;
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// SHARED SECTIONS (Challenge / Solution / Results / Prev-Next / CTA)
// ─────────────────────────────────────────────────────────────────────────────
const SharedSections = ({
  project,
  prevProject,
  nextProject,
  isSocial,
}: {
  project: (typeof projects)[0];
  prevProject: (typeof projects)[0] | null;
  nextProject: (typeof projects)[0] | null;
  isSocial: boolean;
}) => {
  const accent = isSocial ? "text-pink-400" : "text-cyan";
  const accentBg = isSocial ? "bg-pink-500/10 border-pink-500/20" : "bg-cyan/10 border-cyan/20";
  const accentText = isSocial ? "text-pink-400" : "text-cyan";
  const hoverBorder = isSocial ? "hover:border-pink-500/30 hover:shadow-[0_0_40px_rgba(236,72,153,0.08)]" : "hover:border-cyan/30 hover:shadow-[0_0_40px_hsl(var(--cyan)/0.08)]";

  return (
    <>
      {/* OVERVIEW */}
      <section className="py-20 lg:py-28 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <span className={`text-xs font-mono ${accent} uppercase tracking-[0.2em] mb-4 block`}>Overview</span>
                <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-foreground mb-6 leading-tight">
                  About the Project
                </h2>
                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                  {project.fullDescription}
                </p>
              </AnimatedSection>
            </div>
            <div>
              <AnimatedSection>
                <span className={`text-xs font-mono ${accent} uppercase tracking-[0.2em] mb-4 block`}>
                  Services Delivered
                </span>
                <ul className="space-y-3">
                  {project.services.map((service, i) => (
                    <motion.li
                      key={service}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3 text-foreground font-medium"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isSocial ? "bg-pink-400" : "bg-cyan"} shrink-0`} />
                      {service}
                    </motion.li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE & SOLUTION */}
      <section className="py-20 lg:py-28 relative bg-muted/20">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <AnimatedSection>
              <div className="p-8 lg:p-10 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm h-full">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
                  <span className="text-lg">⚡</span>
                </div>
                <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-[0.2em] mb-3 block">
                  The Challenge
                </span>
                <h3 className="text-xl font-poppins font-bold text-foreground mb-4">What We Were Up Against</h3>
                <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className={`p-8 lg:p-10 rounded-2xl border ${isSocial ? "border-pink-500/20 bg-pink-500/[0.03]" : "border-cyan/20 bg-cyan/[0.03]"} backdrop-blur-sm h-full`}>
                <div className={`w-10 h-10 rounded-xl ${accentBg} flex items-center justify-center mb-6`}>
                  <span className="text-lg">💡</span>
                </div>
                <span className={`text-xs font-mono ${isSocial ? "text-pink-400/70" : "text-cyan/70"} uppercase tracking-[0.2em] mb-3 block`}>
                  Our Solution
                </span>
                <h3 className="text-xl font-poppins font-bold text-foreground mb-4">How We Solved It</h3>
                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <span className={`text-xs font-mono ${accent} uppercase tracking-[0.2em] mb-4 block text-center`}>
              Results
            </span>
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-foreground mb-12 text-center leading-tight">
              What We Achieved
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.results.map((result, i) => (
              <motion.div
                key={result}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`group p-6 rounded-2xl border border-border/50 bg-card ${hoverBorder} transition-all duration-300`}
              >
                <CheckCircle2 className={`w-6 h-6 ${accentText} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <p className="text-foreground font-semibold leading-snug">{result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PREV / NEXT */}
      <section className="py-16 border-t border-border/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-0">
            {prevProject ? (
              <Link
                to={`/portfolio/${prevProject.slug}`}
                className={`group flex-1 flex items-center gap-4 p-6 rounded-2xl sm:rounded-r-none border border-border/50 ${isSocial ? "hover:border-pink-500/30 hover:bg-muted/30" : "hover:border-cyan/30 hover:bg-muted/30"} transition-all duration-300`}
              >
                <motion.span
                  className={`text-muted-foreground ${isSocial ? "group-hover:text-pink-400" : "group-hover:text-cyan"} transition-colors`}
                  whileHover={{ x: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowLeft className="w-5 h-5" />
                </motion.span>
                <div>
                  <span className="text-xs text-muted-foreground/60 uppercase tracking-widest block mb-1">Previous</span>
                  <span className={`font-poppins font-bold text-foreground ${isSocial ? "group-hover:text-pink-400" : "group-hover:text-cyan"} transition-colors`}>
                    {prevProject.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            <div className="hidden sm:block w-px bg-border/40" />

            {nextProject ? (
              <Link
                to={`/portfolio/${nextProject.slug}`}
                className={`group flex-1 flex items-center justify-end gap-4 p-6 rounded-2xl sm:rounded-l-none border border-border/50 ${isSocial ? "hover:border-pink-500/30 hover:bg-muted/30" : "hover:border-cyan/30 hover:bg-muted/30"} transition-all duration-300 text-right`}
              >
                <div>
                  <span className="text-xs text-muted-foreground/60 uppercase tracking-widest block mb-1">Next</span>
                  <span className={`font-poppins font-bold text-foreground ${isSocial ? "group-hover:text-pink-400" : "group-hover:text-cyan"} transition-colors`}>
                    {nextProject.title}
                  </span>
                </div>
                <motion.span
                  className={`text-muted-foreground ${isSocial ? "group-hover:text-pink-400" : "group-hover:text-cyan"} transition-colors`}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        {isSocial && (
          <>
            <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-400/5 rounded-full blur-[100px] pointer-events-none" />
          </>
        )}
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-6">
              Ready to Build Something{" "}
              <span className={isSocial ? "bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent" : "text-gradient"}>
                Like This
              </span>
              ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with the same care and precision.
            </p>
            <GradientButton href="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Start Your Project
            </GradientButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// ROOT COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-poppins font-bold mb-4">Project Not Found</h1>
            <Link to="/portfolio" className="text-cyan hover:underline">
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const isSocial = project.type === "social";

  return (
    <Layout>
      {isSocial ? (
        <SocialProjectDetail project={project} />
      ) : (
        <WebProjectDetail project={project} />
      )}

      <SharedSections
        project={project}
        prevProject={prevProject}
        nextProject={nextProject}
        isSocial={isSocial}
      />
    </Layout>
  );
};

export default ProjectDetail;