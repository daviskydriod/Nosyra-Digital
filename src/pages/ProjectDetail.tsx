import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  Sparkles,
  LayoutGrid,
  Globe,
} from "lucide-react";
import { projects } from "@/data/projectsData";

// ─────────────────────────────────────────────────────────────────────────────
// WEB PROJECT DETAIL  (unchanged layout)
// ─────────────────────────────────────────────────────────────────────────────
const WebProjectDetail = ({ project }: { project: (typeof projects)[0] }) => (
  <>
    {/* HERO */}
    <section className="relative overflow-hidden pt-36 pb-20 lg:pb-24">
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute -top-20 left-1/4 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="mb-10">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-cyan transition-colors duration-200">
            <motion.span className="inline-flex" whileHover={{ x: -3 }} transition={{ duration: 0.2 }}>
              <ArrowLeft className="w-4 h-4" />
            </motion.span>
            All Projects
          </Link>
        </motion.div>

        <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-cyan bg-cyan/10 rounded-full border border-cyan/20 uppercase tracking-widest">
          {project.category}
        </motion.span>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-poppins font-black text-foreground mb-6 leading-[1.05] max-w-4xl">
          {project.title}
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }}
          className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          {project.description}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}
          className="flex flex-wrap items-center gap-3">
          <span className="px-4 py-1.5 bg-muted/60 border border-border/50 rounded-full text-sm text-muted-foreground">📅 {project.year}</span>
          <span className="px-4 py-1.5 bg-muted/60 border border-border/50 rounded-full text-sm text-muted-foreground">⏱ {(project as any).duration}</span>
          {project.tags.map((tag) => (
            <span key={tag} className="px-4 py-1.5 bg-cyan/10 border border-cyan/20 rounded-full text-sm text-cyan">{tag}</span>
          ))}
          <a href={project.link} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-cyan text-primary-foreground font-semibold rounded-full shadow-[0_0_28px_hsl(var(--cyan)/0.35)] hover:shadow-[0_0_45px_hsl(var(--cyan)/0.55)] hover:scale-105 transition-all duration-300 text-sm">
            Visit Live Site <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>

    {/* SCREENSHOT + DETAILS */}
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:flex-1 relative rounded-2xl overflow-hidden border border-border/50 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 px-4 py-3 bg-muted/80 border-b border-border/50">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
              <div className="ml-3 flex-1 h-6 bg-background/60 rounded-md flex items-center px-3">
                <span className="text-xs text-muted-foreground/50 font-mono truncate">{project.link}</span>
              </div>
            </div>
            <img src={project.image} alt={project.title} className="w-full object-cover max-h-[480px]" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-64 xl:w-72 shrink-0 flex flex-col gap-6">
            {[
              { label: "Project", value: project.title },
              { label: "Category", value: project.category },
            ].map(({ label, value }) => (
              <div key={label} className="p-5 rounded-2xl border border-border/50 bg-card">
                <span className="text-xs font-mono text-cyan uppercase tracking-[0.18em] mb-2 block">{label}</span>
                <p className="font-poppins font-bold text-foreground text-base leading-snug">{value}</p>
              </div>
            ))}
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
                  <span key={tag} className="px-3 py-1 text-xs bg-cyan/10 border border-cyan/20 text-cyan rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-cyan text-primary-foreground font-semibold rounded-xl shadow-[0_0_24px_hsl(var(--cyan)/0.3)] hover:shadow-[0_0_40px_hsl(var(--cyan)/0.5)] hover:scale-105 transition-all duration-300 text-sm">
              Visit Live Site <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  </>
);

// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL PROJECT DETAIL  — editorial magazine layout
// ─────────────────────────────────────────────────────────────────────────────

// Single large design reveal card — SQUARE, uncropped
const DesignSlide = ({
  img,
  index,
  total,
  projectTitle,
}: {
  img: string;
  index: number;
  total: number;
  projectTitle: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Issue-number label (editorial style) */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-muted-foreground/40 uppercase tracking-[0.25em]">
            Design
          </span>
          <span className="font-poppins font-black text-5xl lg:text-7xl leading-none text-foreground/[0.06] select-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="flex-1 h-px bg-border/30" />
        <span className="text-[11px] font-mono text-muted-foreground/40 uppercase tracking-[0.2em]">
          of {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* ── SQUARE container — image fits fully inside, no cropping ── */}
      <div
        className="relative w-full rounded-3xl bg-muted/30 border border-border/40 overflow-hidden flex items-center justify-center group"
        style={{ aspectRatio: "1 / 1" }}
      >
        <img
          src={img}
          alt={`${projectTitle} — Design ${index + 1}`}
          className="w-full h-full object-contain"
        />

        {/* Bottom caption bar */}
        <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between bg-gradient-to-t from-black/50 to-transparent">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center shadow-lg"
              style={{
                background: "linear-gradient(135deg, hsl(var(--cyan)), hsl(var(--cyan)/0.6))",
              }}
            >
              <Instagram className="w-3 h-3 text-white" />
            </div>
            <span className="text-white/80 text-sm font-medium">{projectTitle}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/10">
            <Sparkles className="w-3 h-3 text-cyan" style={{ color: "hsl(var(--cyan))" }} />
            <span className="text-white/70 text-xs font-medium">Nosyra Digital</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SocialProjectDetail = ({ project }: { project: (typeof projects)[0] }) => {
  // ── Slice gallery to max 3 designs ──
  const rawGallery: string[] = (project as any).gallery ?? [project.image];
  const gallery = rawGallery.slice(0, 3);

  const platforms: string[] = (project as any).platforms ?? [];
  const postsDelivered: string = (project as any).postsDelivered ?? "";

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroBgY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);

  return (
    <>
      {/* ── HERO — full editorial, asymmetric ───────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden pt-24">

        {/* Parallax background image */}
        <motion.div
          style={{ y: heroBgY }}
          className="absolute inset-0 scale-110 origin-top"
        >
          <img
            src={gallery[0]}
            alt=""
            className="w-full h-full object-cover"
          />

          {/* Primary dark overlay — keeps hero very dark */}
          <div className="absolute inset-0 bg-black/90" />

          {/* Subtle cyan glow top-left — brand flavour */}
          <div
            className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none opacity-15"
            style={{ background: "hsl(var(--cyan))" }}
          />

          {/* Bottom fade to pure black — avoids white/light bleed */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />
        </motion.div>

        {/* Back link — top left */}
        <div className="absolute top-8 left-0 right-0 z-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Link to="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200">
                <motion.span className="inline-flex" whileHover={{ x: -3 }} transition={{ duration: 0.2 }}>
                  <ArrowLeft className="w-4 h-4" />
                </motion.span>
                All Projects
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Hero content — sits at bottom */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pb-16 lg:pb-20">
          <div className="max-w-5xl">

            {/* Type badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-8">
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border"
                style={{
                  background: "hsl(var(--cyan)/0.15)",
                  borderColor: "hsl(var(--cyan)/0.3)",
                }}
              >
                <LayoutGrid className="w-3.5 h-3.5" style={{ color: "hsl(var(--cyan))" }} />
                <span className="text-white/90 text-xs font-semibold uppercase tracking-widest">Social Media Design</span>
              </div>
              <div className="flex gap-2">
                {platforms.map((p) => (
                  <div key={p} className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                    {p === "Instagram" && <Instagram className="w-3.5 h-3.5" style={{ color: "hsl(var(--cyan))" }} />}
                    {p === "Facebook" && <Facebook className="w-3.5 h-3.5 text-blue-400" />}
                    <span className="text-white/80 text-xs">{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Title — massive, white */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-poppins font-black text-white leading-[0.95] mb-6 drop-shadow-2xl"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              {project.title}
            </motion.h1>

            {/* Description + meta row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-12"
            >
              <p className="text-white/75 text-lg leading-relaxed max-w-xl drop-shadow-md">
                {project.description}
              </p>

              {/* Meta pills cluster */}
              <div className="flex flex-wrap gap-3 lg:ml-auto lg:shrink-0">
                <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
                  <div className="text-white font-poppins font-black text-xl">{gallery.length}</div>
                  <div className="text-white/50 text-[10px] uppercase tracking-wider mt-0.5">Designs</div>
                </div>
                {postsDelivered && (
                  <div
                    className="px-4 py-2 rounded-xl backdrop-blur-md border text-center"
                    style={{
                      background: "hsl(var(--cyan)/0.2)",
                      borderColor: "hsl(var(--cyan)/0.4)",
                    }}
                  >
                    <div className="font-poppins font-black text-xl" style={{ color: "hsl(var(--cyan))" }}>
                      {postsDelivered.replace(/[^0-9+]/g, "") || postsDelivered}
                    </div>
                    <div className="text-white/60 text-[10px] uppercase tracking-wider mt-0.5">Posts</div>
                  </div>
                )}
                <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
                  <div className="text-white font-poppins font-black text-xl">{project.year}</div>
                  <div className="text-white/50 text-[10px] uppercase tracking-wider mt-0.5">Year</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DESIGNS SHOWCASE — 3 designs, square, uncropped ─────────────────── */}
      <section className="py-20 lg:py-28 relative">
        {/* Section header */}
        <div className="container mx-auto px-4 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <div>
              <span
                className="text-xs font-mono uppercase tracking-[0.25em] block mb-2"
                style={{ color: "hsl(var(--cyan))" }}
              >
                Content Kit
              </span>
              <h2 className="font-poppins font-black text-foreground text-3xl lg:text-4xl">
                The Full Designs
              </h2>
            </div>
            <div className="flex-1 h-px bg-border/30" />
            <span className="text-xs font-mono text-muted-foreground/40 uppercase tracking-widest shrink-0">
              {gallery.length} pieces
            </span>
          </motion.div>
        </div>

        {/* Design slides — 3 boxes in one row */}
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {gallery.map((img, i) => (
              <DesignSlide
                key={i}
                img={img}
                index={i}
                total={gallery.length}
                projectTitle={project.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── SIDEBAR INFO — after all designs ─────────────────────────────────── */}
      <section className="py-16 border-t border-border/30 bg-muted/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Client */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="p-6 rounded-2xl border border-border/50 bg-card"
            >
              <span
                className="text-[10px] font-mono uppercase tracking-[0.2em] block mb-3"
                style={{ color: "hsl(var(--cyan))" }}
              >
                Client
              </span>
              <p className="font-poppins font-bold text-foreground text-lg leading-tight">{project.title}</p>
            </motion.div>

            {/* Platforms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl border border-border/50 bg-card"
            >
              <span
                className="text-[10px] font-mono uppercase tracking-[0.2em] block mb-3"
                style={{ color: "hsl(var(--cyan))" }}
              >
                Platforms
              </span>
              <div className="flex flex-col gap-2">
                {platforms.map((p) => (
                  <div key={p} className="flex items-center gap-2 text-sm text-foreground font-medium">
                    {p === "Instagram" && <Instagram className="w-4 h-4" style={{ color: "hsl(var(--cyan))" }} />}
                    {p === "Facebook" && <Facebook className="w-4 h-4 text-blue-400" />}
                    {p}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Deliverables */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="p-6 rounded-2xl border border-border/50 bg-card"
            >
              <span
                className="text-[10px] font-mono uppercase tracking-[0.2em] block mb-3"
                style={{ color: "hsl(var(--cyan))" }}
              >
                Deliverables
              </span>
              <div className="flex flex-col gap-2 text-sm">
                {postsDelivered && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Posts</span>
                    <span className="text-foreground font-semibold">{postsDelivered}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Year</span>
                  <span className="text-foreground font-semibold">{project.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Engagement</span>
                  <span className="text-foreground font-semibold">{(project as any).duration}</span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl border bg-card"
              style={{
                borderColor: "hsl(var(--cyan)/0.2)",
                background: "hsl(var(--cyan)/0.03)",
              }}
            >
              <span
                className="text-[10px] font-mono uppercase tracking-[0.2em] block mb-3"
                style={{ color: "hsl(var(--cyan))" }}
              >
                Services
              </span>
              <div className="flex flex-col gap-2">
                {project.services.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-foreground">
                    <span
                      className="w-1 h-1 rounded-full shrink-0"
                      style={{ background: "hsl(var(--cyan))" }}
                    />
                    {s}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// SHARED: Overview / Challenge+Solution / Results
// ─────────────────────────────────────────────────────────────────────────────
const SharedBody = ({
  project,
  isSocial,
}: {
  project: (typeof projects)[0];
  isSocial: boolean;
}) => {
  const accent = isSocial ? undefined : "text-cyan";
  const accentStyle = isSocial ? { color: "hsl(var(--cyan))" } : undefined;
  const dot = isSocial ? undefined : "bg-cyan";
  const dotStyle = isSocial ? { background: "hsl(var(--cyan))" } : undefined;
  const solutionBorderStyle = isSocial
    ? { borderColor: "hsl(var(--cyan)/0.2)", background: "hsl(var(--cyan)/0.03)" }
    : undefined;
  const solutionBorder = isSocial ? "" : "border-cyan/20 bg-cyan/[0.03]";
  const solutionLabelStyle = isSocial ? { color: "hsl(var(--cyan)/0.7)" } : undefined;
  const solutionLabel = isSocial ? "" : "text-cyan/70";
  const cardHover = isSocial
    ? "hover:shadow-[0_0_40px_hsl(var(--cyan)/0.08)]"
    : "hover:border-cyan/30 hover:shadow-[0_0_40px_hsl(var(--cyan)/0.08)]";
  const checkStyle = isSocial ? { color: "hsl(var(--cyan))" } : undefined;
  const checkColor = isSocial ? "" : "text-cyan";

  return (
    <>
      {/* OVERVIEW */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <span
                  className={`text-xs font-mono uppercase tracking-[0.2em] mb-4 block ${accent ?? ""}`}
                  style={accentStyle}
                >
                  Overview
                </span>
                <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-foreground mb-6 leading-tight">About the Project</h2>
                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">{project.fullDescription}</p>
              </AnimatedSection>
            </div>
            <div>
              <AnimatedSection>
                <span
                  className={`text-xs font-mono uppercase tracking-[0.2em] mb-4 block ${accent ?? ""}`}
                  style={accentStyle}
                >
                  Services Delivered
                </span>
                <ul className="space-y-3">
                  {project.services.map((service, i) => (
                    <motion.li key={service} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3 text-foreground font-medium">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${dot ?? ""} shrink-0`}
                        style={dotStyle}
                      />
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
                <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-[0.2em] mb-3 block">The Challenge</span>
                <h3 className="text-xl font-poppins font-bold text-foreground mb-4">What We Were Up Against</h3>
                <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div
                className={`p-8 lg:p-10 rounded-2xl border ${solutionBorder} backdrop-blur-sm h-full`}
                style={solutionBorderStyle}
              >
                <div
                  className="w-10 h-10 rounded-xl border flex items-center justify-center mb-6"
                  style={isSocial
                    ? { background: "hsl(var(--cyan)/0.1)", borderColor: "hsl(var(--cyan)/0.2)" }
                    : undefined}
                >
                  <span className="text-lg">💡</span>
                </div>
                <span
                  className={`text-xs font-mono ${solutionLabel} uppercase tracking-[0.2em] mb-3 block`}
                  style={solutionLabelStyle}
                >
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
            <span
              className={`text-xs font-mono uppercase tracking-[0.2em] mb-4 block text-center ${accent ?? ""}`}
              style={accentStyle}
            >
              Results
            </span>
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-foreground mb-12 text-center leading-tight">What We Achieved</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.results.map((result, i) => (
              <motion.div key={result} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`group p-6 rounded-2xl border border-border/50 bg-card ${cardHover} transition-all duration-300`}>
                <CheckCircle2
                  className={`w-6 h-6 mb-4 group-hover:scale-110 transition-transform duration-300 ${checkColor}`}
                  style={checkStyle}
                />
                <p className="text-foreground font-semibold leading-snug">{result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// SHARED: Prev / Next + CTA
// ─────────────────────────────────────────────────────────────────────────────
const SharedNav = ({
  prevProject,
  nextProject,
  isSocial,
}: {
  prevProject: (typeof projects)[0] | null;
  nextProject: (typeof projects)[0] | null;
  isSocial: boolean;
}) => {
  return (
    <>
      <section className="py-16 border-t border-border/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-0">
            {prevProject ? (
              <Link to={`/portfolio/${prevProject.slug}`}
                className="group flex-1 flex items-center gap-4 p-6 rounded-2xl sm:rounded-r-none border border-border/50 hover:border-cyan/30 hover:bg-muted/30 transition-all duration-300">
                <motion.span className="text-muted-foreground group-hover:text-cyan transition-colors" whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
                  <ArrowLeft className="w-5 h-5" />
                </motion.span>
                <div>
                  <span className="text-xs text-muted-foreground/60 uppercase tracking-widest block mb-1">Previous</span>
                  <span className="font-poppins font-bold text-foreground group-hover:text-cyan transition-colors">{prevProject.title}</span>
                </div>
              </Link>
            ) : <div className="flex-1" />}

            <div className="hidden sm:block w-px bg-border/40" />

            {nextProject ? (
              <Link to={`/portfolio/${nextProject.slug}`}
                className="group flex-1 flex items-center justify-end gap-4 p-6 rounded-2xl sm:rounded-l-none border border-border/50 hover:border-cyan/30 hover:bg-muted/30 transition-all duration-300 text-right">
                <div>
                  <span className="text-xs text-muted-foreground/60 uppercase tracking-widest block mb-1">Next</span>
                  <span className="font-poppins font-bold text-foreground group-hover:text-cyan transition-colors">{nextProject.title}</span>
                </div>
                <motion.span className="text-muted-foreground group-hover:text-cyan transition-colors" whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
            ) : <div className="flex-1" />}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        {isSocial && (
          <>
            <div
              className="absolute -top-20 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-10"
              style={{ background: "hsl(var(--cyan))" }}
            />
            <div
              className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none opacity-5"
              style={{ background: "hsl(var(--cyan))" }}
            />
          </>
        )}
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-6">
              Ready to Build Something{" "}
              <span className="text-gradient">Like This</span>?
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
// ROOT
// ─────────────────────────────────────────────────────────────────────────────
const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-poppins font-bold mb-4">Project Not Found</h1>
            <Link to="/portfolio" className="text-cyan hover:underline">← Back to Portfolio</Link>
          </div>
        </div>
      </Layout>
    );
  }

  const isSocial = project.type === "social";

  return (
    <Layout>
      {isSocial ? <SocialProjectDetail project={project} /> : <WebProjectDetail project={project} />}
      <SharedBody project={project} isSocial={isSocial} />
      <SharedNav prevProject={prevProject} nextProject={nextProject} isSocial={isSocial} />
    </Layout>
  );
};

export default ProjectDetail;
