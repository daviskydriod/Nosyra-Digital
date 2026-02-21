import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projectsData";

const featured = projects.slice(0, 3);

const FeaturedWork = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-navy/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeading
          badge="Our Portfolio"
          title="Featured Work"
          subtitle="Explore our latest projects and see how we've helped businesses transform their digital presence."
        />

        <div ref={containerRef} className="mt-16">
          {/* Project rows */}
          <div className="flex flex-col">
            {featured.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link to={`/portfolio/${project.slug}`}>
                  <div className="relative border-t border-border/40 py-6 lg:py-7 group">
                    {/* Hover bg */}
                    <motion.div
                      className="absolute inset-0 bg-cyan/[0.04] rounded-2xl pointer-events-none"
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.25 }}
                    />

                    <div className="relative flex flex-col sm:flex-row sm:items-center gap-5 px-2 lg:px-4">
                      {/* Index */}
                      <span className="hidden lg:block text-xs font-mono text-muted-foreground/35 w-7 shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Thumbnail */}
                      <div className="relative w-full sm:w-48 lg:w-52 aspect-[16/9] sm:aspect-[4/3] rounded-xl overflow-hidden shrink-0 bg-muted">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          animate={{ scale: hoveredIndex === index ? 1.08 : 1 }}
                          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-cyan/20"
                          animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                          transition={{ duration: 0.25 }}
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-medium text-cyan uppercase tracking-widest mb-1.5 block">
                          {project.category}
                        </span>
                        <motion.h3
                          className="text-xl lg:text-2xl font-poppins font-bold text-foreground leading-tight mb-2"
                          animate={{ x: hoveredIndex === index ? 5 : 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          {project.title}
                        </motion.h3>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                          {project.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <motion.div
                        className="hidden sm:flex shrink-0 w-9 h-9 rounded-full border border-border items-center justify-center text-muted-foreground"
                        animate={{
                          borderColor: hoveredIndex === index ? "hsl(var(--cyan))" : "hsl(var(--border))",
                          color: hoveredIndex === index ? "hsl(var(--cyan))" : undefined,
                          rotate: hoveredIndex === index ? 45 : 0,
                          scale: hoveredIndex === index ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.25 }}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* Bottom border */}
            <div className="border-t border-border/40" />
          </div>

          {/* View All */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55 }}
            className="mt-10 text-center"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-cyan text-primary-foreground rounded-full font-semibold hover:shadow-[0_0_30px_hsl(var(--cyan)/0.4)] hover:scale-105 transition-all duration-300 border-2 border-cyan hover:bg-transparent hover:text-cyan"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
