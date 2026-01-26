import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientButton from "@/components/ui/GradientButton";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const categories = ["All", "Websites", "E-Commerce", "Branding", "Social Media"];

const projects = [
  {
    id: 1,
    title: "TechFlow SaaS Platform",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description: "A modern SaaS dashboard with seamless UX and powerful analytics features.",
    tags: ["React", "Node.js", "Dashboard"],
  },
  {
    id: 2,
    title: "Luxe Fashion Store",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    description: "Premium fashion e-commerce experience with smooth checkout flow.",
    tags: ["Shopify", "Custom Theme", "Payment"],
  },
  {
    id: 3,
    title: "GreenLife Organics",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    description: "Complete brand identity for a sustainable organic products company.",
    tags: ["Logo", "Brand Guide", "Packaging"],
  },
  {
    id: 4,
    title: "FinanceHub App",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    description: "Financial management platform with real-time analytics and reporting.",
    tags: ["Fintech", "Dashboard", "Charts"],
  },
  {
    id: 5,
    title: "Urban Eats Delivery",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    description: "Food delivery platform connecting local restaurants with customers.",
    tags: ["Food Tech", "Mobile", "Payments"],
  },
  {
    id: 6,
    title: "Wellness Studio Social",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    description: "Complete social media kit for a premium wellness and yoga studio.",
    tags: ["Instagram", "Templates", "Content"],
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
                  <div className="cursor-pointer">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
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

                      {/* Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"
                        initial={{ opacity: 0.4 }}
                        animate={{ opacity: hoveredProject === project.id ? 0.9 : 0.4 }}
                      />

                      {/* Content */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <motion.span
                          className="text-sm text-cyan font-medium mb-2"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {project.category}
                        </motion.span>

                        <motion.h3
                          className="text-xl font-poppins font-bold text-foreground mb-2"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.15 }}
                        >
                          {project.title}
                        </motion.h3>

                        <motion.p
                          className="text-muted-foreground text-sm mb-4 line-clamp-2"
                          initial={{ opacity: 0 }}
                          animate={{ 
                            opacity: hoveredProject === project.id ? 1 : 0,
                          }}
                        >
                          {project.description}
                        </motion.p>

                        {/* Tags */}
                        <motion.div
                          className="flex flex-wrap gap-2 mb-4"
                          initial={{ opacity: 0 }}
                          animate={{ 
                            opacity: hoveredProject === project.id ? 1 : 0,
                          }}
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

                        {/* View Button */}
                      </div>

                      {/* Border Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2"
                        animate={{
                          borderColor: hoveredProject === project.id 
                            ? "hsl(var(--cyan) / 0.5)" 
                            : "transparent",
                          boxShadow: hoveredProject === project.id 
                            ? "0 0 30px hsl(var(--cyan) / 0.2)" 
                            : "none",
                        }}
                      />
                    </div>
                  </div>
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
