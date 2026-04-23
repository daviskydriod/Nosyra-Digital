import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientButton from "@/components/ui/GradientButton";
import { ArrowRight, ArrowUpRight, Instagram, Globe, LayoutGrid } from "lucide-react";
import { projects } from "@/data/projectsData";

const categories = ["All", "Web & E-Commerce", "Social Media"];

// ── Web Project Row ──────────────────────────────────────────────────────────
const WebProjectRow = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/portfolio/${project.slug}`}>
        <div
          className="relative group border-t border-border/40 py-6 lg:py-8 cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <motion.div
            className="absolute inset-0 bg-cyan/[0.04] rounded-2xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          <div className="relative flex flex-col lg:flex-row lg:items-center gap-6 px-2 lg:px-4">
            <span className="hidden lg:block text-xs font-mono text-muted-foreground/40 w-8 shrink-0">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="relative w-full lg:w-56 xl:w-64 aspect-[16/9] lg:aspect-[4/3] rounded-xl overflow-hidden shrink-0 bg-muted">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                animate={{ scale: hovered ? 1.08 : 1 }}
                transition={{ ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute inset-0 bg-cyan/20"
                animate={{ opacity: hovered ? 1 : 0 }}
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-3 h-3 text-cyan" />
                    <span className="text-xs font-medium text-cyan uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                  <motion.h3
                    className="text-2xl lg:text-3xl font-poppins font-bold text-foreground leading-tight"
                    animate={{ x: hovered ? 6 : 0 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-muted-foreground text-sm mt-2 max-w-xl leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <motion.div
                  className="shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground mt-1"
                  animate={{
                    borderColor: hovered ? "hsl(var(--cyan))" : "hsl(var(--border))",
                    color: hovered ? "hsl(var(--cyan))" : undefined,
                    rotate: hovered ? 45 : 0,
                    scale: hovered ? 1.1 : 1,
                  }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-muted/60 text-muted-foreground rounded-full border border-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <span className="hidden xl:block text-xs font-mono text-muted-foreground/40 shrink-0">
              {project.year}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

// ── Social Media Card (grid tile) ────────────────────────────────────────────
const SocialCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const gallery = (project as any).gallery ?? [project.image];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/portfolio/${project.slug}`}>
        <div
          className="relative group rounded-2xl border border-border/50 overflow-hidden bg-card cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* 3-image triptych */}
          <div className="grid grid-cols-3 gap-0.5 aspect-[4/3]">
            {gallery.slice(0, 3).map((img: string, i: number) => (
              <div key={i} className="relative overflow-hidden bg-muted">
                <motion.img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover"
                  animate={{ scale: hovered ? 1.06 : 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.03 }}
                />
              </div>
            ))}
          </div>

          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Instagram badge */}
          <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 flex items-center justify-center shadow-lg z-10">
            <Instagram className="w-3.5 h-3.5 text-white" />
          </div>

          {/* Arrow */}
          <motion.div
            className="absolute top-3 left-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center z-10"
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
            transition={{ duration: 0.25 }}
          >
            <ArrowUpRight className="w-3.5 h-3.5 text-foreground" />
          </motion.div>

          {/* Info footer */}
          <div className="p-4 border-t border-border/50">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-poppins font-bold text-foreground text-base leading-snug">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs mt-1 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-3 flex-wrap">
              {((project as any).platforms ?? []).map((p: string) => (
                <span
                  key={p}
                  className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-muted/60 border border-border/50 text-muted-foreground"
                >
                  {p}
                </span>
              ))}
              {(project as any).postsDelivered && (
                <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400">
                  {(project as any).postsDelivered}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

// ── Section header for social grid ──────────────────────────────────────────
const SocialSectionHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-4 mb-8 mt-4"
  >
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-pink-500/20 to-orange-400/20 border border-pink-500/20 flex items-center justify-center">
        <LayoutGrid className="w-4 h-4 text-pink-400" />
      </div>
      <span className="font-poppins font-bold text-foreground text-lg">Social Media Design</span>
    </div>
    <div className="flex-1 h-px bg-border/40" />
    <span className="text-xs font-mono text-muted-foreground/50">Content Kits</span>
  </motion.div>
);

const WebSectionHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-4 mb-2 mt-4"
  >
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center">
        <Globe className="w-4 h-4 text-cyan" />
      </div>
      <span className="font-poppins font-bold text-foreground text-lg">Web & E-Commerce</span>
    </div>
    <div className="flex-1 h-px bg-border/40" />
    <span className="text-xs font-mono text-muted-foreground/50">Live Sites</span>
  </motion.div>
);

// ── Portfolio Page ───────────────────────────────────────────────────────────
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const webProjects = projects.filter((p) => p.type === "web");
  const socialProjects = projects.filter((p) => p.type === "social");

  const showWeb = activeCategory === "All" || activeCategory === "Web & E-Commerce";
  const showSocial = activeCategory === "All" || activeCategory === "Social Media";

  const totalCount =
    (showWeb ? webProjects.length : 0) + (showSocial ? socialProjects.length : 0);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[48vh] flex items-center pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[clamp(6rem,18vw,16rem)] font-poppins font-black text-foreground/[0.03] leading-none tracking-tight">
            WORK
          </span>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-cyan bg-cyan/10 rounded-full border border-cyan/20"
          >
            Our Work
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold mb-4 leading-[1.05]"
          >
            <span className="bg-gradient-to-r from-foreground via-cyan to-foreground bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
              Selected
            </span>
            <br />
            <span className="text-foreground">Projects</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl"
          >
            Websites that convert and social content that stops the scroll — businesses built and brands elevated.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-8 mt-8"
          >
            {[
              { label: "Web Projects", value: webProjects.length, color: "text-cyan" },
              { label: "Social Kits", value: socialProjects.length, color: "text-pink-400" },
              { label: "Total Projects", value: projects.length, color: "text-foreground" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className={`text-3xl font-poppins font-black ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 sticky top-16 z-30 glass-strong border-b border-border/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`px-5 py-1.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? category === "Social Media"
                      ? "bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-[0_0_20px_rgba(236,72,153,0.35)]"
                      : "bg-cyan text-primary-foreground shadow-[0_0_20px_hsl(var(--cyan)/0.35)]"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/40"
                }`}
              >
                {category}
              </motion.button>
            ))}

            <span className="ml-auto hidden lg:flex items-center text-xs text-muted-foreground/50 font-mono">
              {totalCount} project{totalCount !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Web section */}
              {showWeb && webProjects.length > 0 && (
                <div className="mb-12">
                  {activeCategory === "All" && <WebSectionHeader />}
                  {webProjects.map((project, index) => (
                    <WebProjectRow key={project.id} project={project} index={index} />
                  ))}
                  <div className="border-t border-border/40" />
                </div>
              )}

              {/* Social section */}
              {showSocial && socialProjects.length > 0 && (
                <div>
                  {activeCategory === "All" && <SocialSectionHeader />}
                  {activeCategory === "Social Media" && (
                    <div className="border-t border-border/40 mb-8" />
                  )}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {socialProjects.map((project, index) => (
                      <SocialCard key={project.id} project={project} index={index} />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden mt-8">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-6">
              Want to See Your Project{" "}
              <span className="text-gradient">Here</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create something amazing together.
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

export default Portfolio;