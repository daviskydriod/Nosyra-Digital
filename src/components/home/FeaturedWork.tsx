import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Instagram, LayoutGrid } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projectsData";

// Pick 2 web + 1 social for the featured section
const webFeatured = projects.filter((p) => p.type === "web").slice(0, 2);
const socialFeatured = projects.filter((p) => p.type === "social").slice(0, 1);
const featured = [...webFeatured, ...socialFeatured];

// ── Social card ──────────────────────────────────────────────────────────────
const SocialCard = ({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}) => {
  const [hovered, setHovered] = useState(false);
  const gallery = (project as any).gallery ?? [project.image];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/portfolio/${project.slug}`}>
        <div className="relative border-t border-border/40 py-6 lg:py-7 group cursor-pointer">
          {/* Hover bg — warmer tone for social */}
          <motion.div
            className="absolute inset-0 bg-violet-500/[0.04] rounded-2xl pointer-events-none"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          />

          <div className="relative flex flex-col sm:flex-row sm:items-center gap-5 px-2 lg:px-4">
            {/* Index */}
            <span className="hidden lg:block text-xs font-mono text-muted-foreground/35 w-7 shrink-0">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Instagram-style triptych */}
            <div className="relative w-full sm:w-48 lg:w-52 shrink-0">
              <div className="grid grid-cols-3 gap-1 rounded-xl overflow-hidden aspect-[4/3]">
                {gallery.slice(0, 3).map((img: string, i: number) => (
                  <div key={i} className="relative overflow-hidden bg-muted">
                    <motion.img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                      animate={{ scale: hovered ? 1.08 : 1 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                    />
                  </div>
                ))}
              </div>
              {/* Instagram badge */}
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 flex items-center justify-center shadow-lg">
                <Instagram className="w-3 h-3 text-white" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              {/* Badge */}
              <div className="flex items-center gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-gradient-to-r from-pink-500/20 to-orange-400/20 border border-pink-500/20 text-pink-400 uppercase tracking-wider">
                  <LayoutGrid className="w-2.5 h-2.5" /> Social Media
                </span>
              </div>
              <motion.h3
                className="text-xl lg:text-2xl font-poppins font-bold text-foreground leading-tight mb-2"
                animate={{ x: hovered ? 5 : 0 }}
                transition={{ duration: 0.25 }}
              >
                {project.title}
              </motion.h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                {project.description}
              </p>
              {/* Platform pills */}
              <div className="flex gap-2 mt-3">
                {((project as any).platforms ?? []).map((p: string) => (
                  <span
                    key={p}
                    className="px-2.5 py-0.5 text-[10px] font-medium rounded-full bg-muted/60 border border-border/50 text-muted-foreground"
                  >
                    {p}
                  </span>
                ))}
                {(project as any).postsDelivered && (
                  <span className="px-2.5 py-0.5 text-[10px] font-medium rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400">
                    {(project as any).postsDelivered}
                  </span>
                )}
              </div>
            </div>

            {/* Arrow */}
            <motion.div
              className="hidden sm:flex shrink-0 w-9 h-9 rounded-full border border-border items-center justify-center text-muted-foreground"
              animate={{
                borderColor: hovered ? "rgb(236 72 153)" : "hsl(var(--border))",
                color: hovered ? "rgb(236 72 153)" : undefined,
                rotate: hovered ? 45 : 0,
                scale: hovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.25 }}
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

// ── Web row ──────────────────────────────────────────────────────────────────
const WebRow = ({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/portfolio/${project.slug}`}>
        <div className="relative border-t border-border/40 py-6 lg:py-7 group cursor-pointer">
          <motion.div
            className="absolute inset-0 bg-cyan/[0.04] rounded-2xl pointer-events-none"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          />

          <div className="relative flex flex-col sm:flex-row sm:items-center gap-5 px-2 lg:px-4">
            <span className="hidden lg:block text-xs font-mono text-muted-foreground/35 w-7 shrink-0">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="relative w-full sm:w-48 lg:w-52 aspect-[16/9] sm:aspect-[4/3] rounded-xl overflow-hidden shrink-0 bg-muted">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                animate={{ scale: hovered ? 1.08 : 1 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute inset-0 bg-cyan/20"
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.25 }}
              />
            </div>

            <div className="flex-1 min-w-0">
              <span className="text-xs font-medium text-cyan uppercase tracking-widest mb-1.5 block">
                {project.category}
              </span>
              <motion.h3
                className="text-xl lg:text-2xl font-poppins font-bold text-foreground leading-tight mb-2"
                animate={{ x: hovered ? 5 : 0 }}
                transition={{ duration: 0.25 }}
              >
                {project.title}
              </motion.h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                {project.description}
              </p>
            </div>

            <motion.div
              className="hidden sm:flex shrink-0 w-9 h-9 rounded-full border border-border items-center justify-center text-muted-foreground"
              animate={{
                borderColor: hovered ? "hsl(var(--cyan))" : "hsl(var(--border))",
                color: hovered ? "hsl(var(--cyan))" : undefined,
                rotate: hovered ? 45 : 0,
                scale: hovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.25 }}
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

// ── Main component ───────────────────────────────────────────────────────────
const FeaturedWork = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-navy/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeading
          badge="Our Portfolio"
          title="Featured Work"
          subtitle="Websites that convert, social content that engages — a look at what we've been building."
        />

        <div ref={containerRef} className="mt-16">
          <div className="flex flex-col">
            {featured.map((project, index) =>
              project.type === "social" ? (
                <SocialCard key={project.id} project={project} index={index} isInView={isInView} />
              ) : (
                <WebRow key={project.id} project={project} index={index} isInView={isInView} />
              )
            )}
            <div className="border-t border-border/40" />
          </div>

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