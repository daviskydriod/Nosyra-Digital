import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const projects = [
  {
    id: 1,
    title: "TechFlow SaaS Platform",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description: "A modern SaaS dashboard with seamless UX and powerful analytics.",
  },
  {
    id: 2,
    title: "Luxe Fashion Store",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    description: "Premium fashion e-commerce experience with smooth checkout flow.",
  },
  {
    id: 3,
    title: "GreenLife Organics",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    description: "Complete brand identity for a sustainable organic products company.",
  },
];

const FeaturedWork = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-navy/20 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeading
          badge="Our Portfolio"
          title="Featured Work"
          subtitle="Explore our latest projects and see how we've helped businesses transform their digital presence."
        />

        <div ref={containerRef} className="mt-16">
          {/* Stacked Cards that Fan Out */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ 
                  opacity: 0, 
                  y: 50,
                  rotate: index === 0 ? -3 : index === 2 ? 3 : 0,
                }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0,
                  rotate: 0,
                } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group"
              >
                <Link to={`/portfolio/${project.id}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    {/* Image with Ken Burns Effect */}
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: hoveredIndex === index ? 0.9 : 0.6 }}
                    />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="text-sm text-cyan font-medium mb-2"
                      >
                        {project.category}
                      </motion.span>
                      
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="text-2xl font-poppins font-bold text-foreground mb-2"
                      >
                        {project.title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: hoveredIndex === index ? 1 : 0,
                          y: hoveredIndex === index ? 0 : 10,
                        }}
                        className="text-muted-foreground text-sm mb-4"
                      >
                        {project.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: hoveredIndex === index ? 1 : 0,
                          y: hoveredIndex === index ? 0 : 20,
                        }}
                      >
                        <span className="inline-flex items-center gap-2 text-cyan font-semibold text-sm">
                          View Case Study
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </motion.div>
                    </div>

                    {/* Gradient Border Effect on Hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-cyan/0"
                      animate={{
                        borderColor: hoveredIndex === index ? "hsl(var(--cyan) / 0.5)" : "hsl(var(--cyan) / 0)",
                      }}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="mt-12 text-center"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan text-primary-foreground rounded-lg font-semibold hover:shadow-[0_0_30px_hsl(var(--cyan)/0.5)] transition-all duration-300"
            >
              View All Projects
              <ExternalLink className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
