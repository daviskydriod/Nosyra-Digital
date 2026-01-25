import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  Megaphone, 
  Palette, 
  Share2,
  ArrowRight
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";

const services = [
  {
    icon: Globe,
    title: "Custom Website Design",
    description: "Stunning, responsive websites tailored to your brand identity and business goals.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Stores",
    description: "Powerful online stores that convert visitors into loyal customers.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    description: "Seamless experiences across all devices for maximum reach and engagement.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic campaigns that drive traffic, leads, and measurable results.",
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    description: "Memorable brand identities that tell your story and build trust.",
  },
  {
    icon: Share2,
    title: "Social Media Design",
    description: "Eye-catching social content that grows your audience and engagement.",
  },
];

const ServicesPreview = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeading
          badge="What We Do"
          title="Services That Drive Results"
          subtitle="We offer a comprehensive suite of digital services designed to elevate your brand and grow your business."
        />

        <div ref={containerRef} className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <GlassCard className="p-6 h-full group" gradient>
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mb-4 group-hover:bg-cyan/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-cyan" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground flex-grow">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 text-sm text-cyan hover:text-cyan-glow transition-colors group/link"
                    >
                      Learn more
                      <motion.span
                        className="inline-block"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                      >
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </motion.span>
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-cyan/30 text-cyan hover:bg-cyan hover:text-primary-foreground transition-all duration-300 font-semibold"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
