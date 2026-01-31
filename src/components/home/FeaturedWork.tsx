import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

// Import local images
import ecoHero from "@/assets/eco-hero.png";
import lianHero from "@/assets/lian-hero.png";
import catglobalHero from "@/assets/catglobal-hero.png";

const projects = [
  {
    id: 1,
    title: "Eko Connect Concierge",
    category: "Web Design",
    image: ecoHero,
    description: "Professional concierge services platform with seamless booking and customer management.",
    link: "https://www.ekoconnectconcierge.com.ng/",
  },
  {
    id: 2,
    title: "Liana Flowers",
    category: "E-Commerce",
    image: lianHero,
    description: "Premium flower delivery service with elegant design and smooth checkout experience.",
    link: "https://www.liananaflowers.com.ng",
  },
  {
    id: 3,
    title: "CAT Global",
    category: "Corporate Website",
    image: catglobalHero,
    description: "Modern corporate website showcasing professional services and company expertise.",
    link: "https://www.cat-ag.com/",
  },
];

// Unique entrance animations for each project card
const projectAnimations = [
  { 
    initial: { opacity: 0, x: -120, rotate: -5 }, 
    animate: { opacity: 1, x: 0, rotate: 0 },
  },
  { 
    initial: { opacity: 0, y: 100, scale: 0.85 }, 
    animate: { opacity: 1, y: 0, scale: 1 },
  },
  { 
    initial: { opacity: 0, x: 120, rotate: 5 }, 
    animate: { opacity: 1, x: 0, rotate: 0 },
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
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-navy/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeading
          badge="Our Portfolio"
          title="Featured Work"
          subtitle="Explore our latest projects and see how we've helped businesses transform their digital presence."
        />

        <div ref={containerRef} className="mt-16">
          {/* Project Cards with Unique Animations */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={projectAnimations[index].initial}
                animate={isInView ? projectAnimations[index].animate : projectAnimations[index].initial}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cursor-pointer block"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] rounded-t-2xl overflow-hidden border-2 border-border group-hover:border-cyan transition-all duration-300">
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

                    {/* Light Overlay on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-cyan/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Text Content Below Image */}
                  <div className="bg-card border-2 border-t-0 border-border group-hover:border-cyan rounded-b-2xl p-6 transition-all duration-300 group-hover:shadow-[0_0_40px_hsl(var(--cyan)/0.15)]">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-sm text-cyan font-medium mb-2 block"
                    >
                      {project.category}
                    </motion.span>
                    
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-2xl font-poppins font-bold text-foreground mb-3 group-hover:text-cyan transition-colors duration-300"
                    >
                      {project.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-muted-foreground text-sm leading-relaxed"
                    >
                      {project.description}
                    </motion.p>

                    {/* Visit Link */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: hoveredIndex === index ? 1 : 0,
                        x: hoveredIndex === index ? 0 : -10,
                      }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 flex items-center gap-2 text-cyan font-medium text-sm"
                    >
                      Visit Site
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                  </div>
                </a>
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan text-primary-foreground rounded-lg font-semibold hover:shadow-[0_0_30px_hsl(var(--cyan)/0.4)] transition-all duration-300 border-2 border-cyan hover:bg-transparent hover:text-cyan"
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
