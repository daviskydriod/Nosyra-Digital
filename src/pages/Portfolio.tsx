import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientButton from "@/components/ui/GradientButton";
import { ArrowUpRight, ArrowRight, ExternalLink } from "lucide-react";

// Import local images
import ecoHero from "@/assets/eco-hero.png";
import lianHero from "@/assets/lian-hero.png";
import catglobalHero from "@/assets/catglobal-hero.png";
import vikHero from "@/assets/vik-hero.png";
import gtHero from "@/assets/gt-hero.png";
import urhuHero from "@/assets/urhu-hero.png";
import honHero from "@/assets/hon-hero.png";

const categories = ["All", "Web Design", "E-Commerce", "Corporate Website", "Tech Solutions"];

const projects = [
  {
    id: 1,
    title: "Eko Connect Concierge",
    category: "Web Design",
    image: ecoHero,
    description: "Professional concierge services platform with seamless booking and customer management.",
    tags: ["React", "Booking System", "Customer Portal"],
    link: "https://www.ekoconnectconcierge.com.ng/",
  },
  {
    id: 2,
    title: "Liana Flowers",
    category: "E-Commerce",
    image: lianHero,
    description: "Premium flower delivery service with elegant design and smooth checkout experience.",
    tags: ["E-Commerce", "Payment Integration", "Product Catalog"],
    link: "https://www.liananaflowers.com.ng",
  },
  {
    id: 3,
    title: "CAT Global",
    category: "Corporate Website",
    image: catglobalHero,
    description: "Modern corporate website showcasing professional services and company expertise.",
    tags: ["Corporate", "Professional", "Responsive"],
    link: "https://www.cat-ag.com/",
  },
  {
    id: 4,
    title: "Viktrotech",
    category: "Tech Solutions",
    image: vikHero,
    description: "Innovative technology solutions platform with cutting-edge digital services and expertise.",
    tags: ["Tech", "Innovation", "Digital Solutions"],
    link: "https://www.viktrotech.com/",
  },
  {
    id: 5,
    title: "GT Green Petrochemical",
    category: "Corporate Website",
    image: gtHero,
    description: "Professional petrochemical company website showcasing industry leadership and sustainability.",
    tags: ["Corporate", "Industrial", "Sustainability"],
    link: "https://www.gtgreenpetrochemical.com.ng/",
  },
  {
    id: 6,
    title: "Uruhu Solutions",
    category: "Web Design",
    image: urhuHero,
    description: "Comprehensive business solutions platform with modern design and client-focused approach.",
    tags: ["Business Solutions", "Consulting", "Modern Design"],
    link: "https://uruhusolutions.com.ng/",
  },
  {
    id: 7,
    title: "Honters Cruise",
    category: "E-Commerce",
    image: honHero,
    description: "Premium cruise booking platform with seamless reservation system and travel packages.",
    tags: ["Travel", "Booking System", "E-Commerce"],
    link: "https://www.honterscruise.com.ng/",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
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
            className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6"
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-gradient-to-r from-foreground via-cyan to-foreground bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              Portfolio
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our collection of successful projects and see how we've helped businesses transform their digital presence.
          </motion.p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 sticky top-16 z-30 glass-strong">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-cyan text-primary-foreground shadow-[0_0_20px_hsl(var(--cyan)/0.4)]"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group"
                >
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cursor-pointer block"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] rounded-t-2xl overflow-hidden">
                      {/* Image with Ken Burns */}
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: hoveredProject === project.id ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.6 }}
                      />

                      {/* Shimmer Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={hoveredProject === project.id ? { x: "100%" } : { x: "-100%" }}
                        transition={{ duration: 0.8 }}
                      />

                      {/* Light Overlay on Hover */}
                      <motion.div
                        className="absolute inset-0 bg-cyan/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Border Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-t-2xl border-2"
                        animate={{
                          borderColor: hoveredProject === project.id 
                            ? "hsl(var(--cyan) / 0.5)" 
                            : "transparent",
                        }}
                      />
                    </div>

                    {/* Text Content Below Image */}
                    <div className="bg-card border-2 border-t-0 border-border group-hover:border-cyan rounded-b-2xl p-6 transition-all duration-300 group-hover:shadow-[0_0_40px_hsl(var(--cyan)/0.15)]">
                      <motion.span
                        className="text-sm text-cyan font-medium mb-2 block"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {project.category}
                      </motion.span>

                      <motion.h3
                        className="text-xl font-poppins font-bold text-foreground mb-3 group-hover:text-cyan transition-colors duration-300"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.15 }}
                      >
                        {project.title}
                      </motion.h3>

                      <motion.p
                        className="text-muted-foreground text-sm mb-4 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {project.description}
                      </motion.p>

                      {/* Tags */}
                      <motion.div
                        className="flex flex-wrap gap-2 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25 }}
                      >
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-cyan/10 text-cyan rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </motion.div>

                      {/* Visit Link */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: hoveredProject === project.id ? 1 : 0,
                          x: hoveredProject === project.id ? 0 : -10,
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-2 text-cyan font-medium text-sm"
                      >
                        Visit Site
                        <ExternalLink className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-6">
              Want to See Your Project <span className="text-gradient">Here</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create something amazing together.
            </p>
            <GradientButton href="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Start Your Project
            </GradientButton>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
