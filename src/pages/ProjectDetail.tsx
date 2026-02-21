import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import GradientButton from "@/components/ui/GradientButton";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projectsData";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

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
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      >
        {/* Parallax image */}
        <motion.div className="absolute inset-0" style={{ y: heroImageY }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {/* Top overlay — darkens behind the fixed nav */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/40 to-transparent" />
          {/* Bottom overlay — ensures text area is always readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-transparent" />
          {/* Global dimmer */}
          <div className="absolute inset-0 bg-background/30" />
        </motion.div>

        {/* Back link — clears the fixed header (~64px tall) */}
        <div className="absolute top-0 left-0 right-0 z-20 pt-24">
          <div className="container mx-auto px-4 lg:px-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-cyan transition-colors duration-200"
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
          </div>
        </div>

        {/* Hero content */}
        <motion.div
          className="relative z-10 container mx-auto px-4 lg:px-8 pb-20 lg:pb-28"
          style={{ opacity: heroOpacity }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-1.5 mb-5 text-sm font-medium text-cyan bg-cyan/15 rounded-full border border-cyan/30 uppercase tracking-widest"
          >
            {project.category}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-poppins font-black text-white mb-6 leading-[1.05] max-w-4xl drop-shadow-lg"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg lg:text-xl text-white/75 max-w-2xl mb-8 leading-relaxed"
          >
            {project.description}
          </motion.p>

          {/* Meta pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <span className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm text-white/80 backdrop-blur-sm">
              📅 {project.year}
            </span>
            <span className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm text-white/80 backdrop-blur-sm">
              ⏱ {project.duration}
            </span>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-cyan/20 border border-cyan/40 rounded-full text-sm text-cyan backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan text-primary-foreground font-semibold rounded-full shadow-[0_0_30px_hsl(var(--cyan)/0.4)] hover:shadow-[0_0_50px_hsl(var(--cyan)/0.6)] hover:scale-105 transition-all duration-300"
          >
            Visit Live Site
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="py-20 lg:py-28 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left: full description */}
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

            {/* Right: services */}
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
            {/* Challenge */}
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

            {/* Solution */}
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

      {/* ── NEXT / PREV NAVIGATION ── */}
      <section className="py-16 border-t border-border/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-0">
            {/* Prev */}
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

            {/* Divider */}
            <div className="hidden sm:block w-px bg-border/40" />

            {/* Next */}
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
