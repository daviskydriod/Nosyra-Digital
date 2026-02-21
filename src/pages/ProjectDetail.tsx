import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import GradientButton from "@/components/ui/GradientButton";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projectsData";

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

  return (
    <Layout>

      {/* ── HERO — clean, no image ── */}
      <section className="relative overflow-hidden pt-36 pb-20 lg:pb-24">
        {/* Backgrounds */}
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="absolute -top-20 left-1/4 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan/4 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">

          {/* Back link */}
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
              <motion.span
                className="inline-flex"
                whileHover={{ x: -3 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowLeft className="w-4 h-4" />
              </motion.span>
              All Projects
            </Link>
          </motion.div>

          {/* Category badge */}
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.45 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-cyan bg-cyan/10 rounded-full border border-cyan/20 uppercase tracking-widest"
          >
            {project.category}
          </motion.span>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-poppins font-black text-foreground mb-6 leading-[1.05] max-w-4xl"
          >
            {project.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.5 }}
            className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            {project.description}
          </motion.p>

          {/* Meta pills + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="px-4 py-1.5 bg-muted/60 border border-border/50 rounded-full text-sm text-muted-foreground">
              📅 {project.year}
            </span>
            <span className="px-4 py-1.5 bg-muted/60 border border-border/50 rounded-full text-sm text-muted-foreground">
              ⏱ {project.duration}
            </span>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-cyan/10 border border-cyan/20 rounded-full text-sm text-cyan"
              >
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

      {/* ── PROJECT SCREENSHOT + DETAILS ── */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* Image — takes up most of the width */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-full lg:flex-1 relative rounded-2xl overflow-hidden border border-border/50 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]"
            >
              {/* Browser bar */}
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
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover max-h-[480px]"
              />
            </motion.div>

            {/* Details column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="w-full lg:w-64 xl:w-72 shrink-0 flex flex-col gap-6"
            >
              {/* Project name */}
              <div className="p-5 rounded-2xl border border-border/50 bg-card">
                <span className="text-xs font-mono text-cyan uppercase tracking-[0.18em] mb-2 block">
                  Project
                </span>
                <p className="font-poppins font-bold text-foreground text-base leading-snug">
                  {project.title}
                </p>
              </div>

              {/* Category */}
              <div className="p-5 rounded-2xl border border-border/50 bg-card">
                <span className="text-xs font-mono text-cyan uppercase tracking-[0.18em] mb-2 block">
                  Category
                </span>
                <p className="text-foreground font-medium">{project.category}</p>
              </div>

              {/* Year & Duration */}
              <div className="p-5 rounded-2xl border border-border/50 bg-card">
                <span className="text-xs font-mono text-cyan uppercase tracking-[0.18em] mb-3 block">
                  Timeline
                </span>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Year</span>
                    <span className="text-foreground font-medium">{project.year}</span>
                  </div>
                  <div className="w-full h-px bg-border/40" />
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="text-foreground font-medium">{project.duration}</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="p-5 rounded-2xl border border-border/50 bg-card">
                <span className="text-xs font-mono text-cyan uppercase tracking-[0.18em] mb-3 block">
                  Tech & Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-cyan/10 border border-cyan/20 text-cyan rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live link */}
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

      {/* ── OVERVIEW ── */}
      <section className="py-20 lg:py-28 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <span className="text-xs font-mono text-cyan uppercase tracking-[0.2em] mb-4 block">
                  Overview
                </span>
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
                <span className="text-xs font-mono text-cyan uppercase tracking-[0.2em] mb-4 block">
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
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan shrink-0" />
                      {service}
                    </motion.li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHALLENGE & SOLUTION ── */}
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
                <h3 className="text-xl font-poppins font-bold text-foreground mb-4">
                  What We Were Up Against
                </h3>
                <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="p-8 lg:p-10 rounded-2xl border border-cyan/20 bg-cyan/[0.03] backdrop-blur-sm h-full">
                <div className="w-10 h-10 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center mb-6">
                  <span className="text-lg">💡</span>
                </div>
                <span className="text-xs font-mono text-cyan/70 uppercase tracking-[0.2em] mb-3 block">
                  Our Solution
                </span>
                <h3 className="text-xl font-poppins font-bold text-foreground mb-4">
                  How We Solved It
                </h3>
                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <span className="text-xs font-mono text-cyan uppercase tracking-[0.2em] mb-4 block text-center">
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
                className="group p-6 rounded-2xl border border-border/50 bg-card hover:border-cyan/30 hover:shadow-[0_0_40px_hsl(var(--cyan)/0.08)] transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-cyan mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-foreground font-semibold leading-snug">{result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PREV / NEXT ── */}
      <section className="py-16 border-t border-border/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-0">
            {prevProject ? (
              <Link
                to={`/portfolio/${prevProject.slug}`}
                className="group flex-1 flex items-center gap-4 p-6 rounded-2xl sm:rounded-r-none border border-border/50 hover:border-cyan/30 hover:bg-muted/30 transition-all duration-300"
              >
                <motion.span
                  className="text-muted-foreground group-hover:text-cyan transition-colors"
                  whileHover={{ x: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowLeft className="w-5 h-5" />
                </motion.span>
                <div>
                  <span className="text-xs text-muted-foreground/60 uppercase tracking-widest block mb-1">
                    Previous
                  </span>
                  <span className="font-poppins font-bold text-foreground group-hover:text-cyan transition-colors">
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
                className="group flex-1 flex items-center justify-end gap-4 p-6 rounded-2xl sm:rounded-l-none border border-border/50 hover:border-cyan/30 hover:bg-muted/30 transition-all duration-300 text-right"
              >
                <div>
                  <span className="text-xs text-muted-foreground/60 uppercase tracking-widest block mb-1">
                    Next
                  </span>
                  <span className="font-poppins font-bold text-foreground group-hover:text-cyan transition-colors">
                    {nextProject.title}
                  </span>
                </div>
                <motion.span
                  className="text-muted-foreground group-hover:text-cyan transition-colors"
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

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-6">
              Ready to Build Something{" "}
              <span className="text-gradient">Like This</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with the same care and precision.
            </p>
            <GradientButton
              href="/contact"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Project
            </GradientButton>
          </AnimatedSection>
        </div>
      </section>

    </Layout>
  );
};

export default ProjectDetail;
