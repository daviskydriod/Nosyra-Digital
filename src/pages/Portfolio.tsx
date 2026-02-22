import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientButton from "@/components/ui/GradientButton";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projectsData";

const categories = ["All", "Web Design", "E-Commerce", "Corporate Website", "Tech Solutions"];

const ProjectRow = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/portfolio/${project.slug}`}>
        <div
          className="relative group border-t border-border/40 py-6 lg:py-8 cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Hover background fill */}
          <motion.div
            className="absolute inset-0 bg-cyan/[0.04] rounded-2xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          <div className="relative flex flex-col lg:flex-row lg:items-center gap-6 px-2 lg:px-4">
            {/* Index */}
            <span className="hidden lg:block text-xs font-mono text-muted-foreground/40 w-8 shrink-0">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Thumbnail */}
            <div className="relative w-full lg:w-56 xl:w-64 aspect-[16/9] lg:aspect-[4/3] rounded-xl overflow-hidden shrink-0 bg-muted">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                animate={{ scale: hovered ? 1.08 : 1 }}
                transition={{ ease: [0.22, 1, 0.36, 1] }}
              />
              {/* Cyan tint on hover */}
              <motion.div
                className="absolute inset-0 bg-cyan/20"
                animate={{ opacity: hovered ? 1 : 0 }}
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-medium text-cyan mb-2 block uppercase tracking-widest">
                    {project.category}
                  </span>
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

                {/* Arrow */}
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

              {/* Tags */}
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

            {/* Year — desktop only */}
            <span className="hidden xl:block text-xs font-mono text-muted-foreground/40 shrink-0">
              {project.year}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[48vh] flex items-center pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />

        {/* Large background text */}
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
            A curated collection of work we're proud of — businesses transformed, brands elevated, and digital experiences that convert.
          </motion.p>
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
                    ? "bg-cyan text-primary-foreground shadow-[0_0_20px_hsl(var(--cyan)/0.35)]"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/40"
                }`}
              >
                {category}
              </motion.button>
            ))}

            <span className="ml-auto hidden lg:flex items-center text-xs text-muted-foreground/50 font-mono">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </section>

      {/* Project List */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filteredProjects.map((project, index) => (
                <ProjectRow key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Bottom border */}
          <div className="border-t border-border/40" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
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
