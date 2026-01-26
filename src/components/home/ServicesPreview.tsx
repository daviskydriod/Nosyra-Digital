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

// Unique animation variants for each card
const cardAnimations = [
  { initial: { opacity: 0, x: -100, rotateY: -15 }, animate: { opacity: 1, x: 0, rotateY: 0 } },
  { initial: { opacity: 0, y: -80, scale: 0.8 }, animate: { opacity: 1, y: 0, scale: 1 } },
  { initial: { opacity: 0, x: 100, rotateY: 15 }, animate: { opacity: 1, x: 0, rotateY: 0 } },
  { initial: { opacity: 0, y: 80, rotateX: 15 }, animate: { opacity: 1, y: 0, rotateX: 0 } },
  { initial: { opacity: 0, scale: 0.5, rotate: -10 }, animate: { opacity: 1, scale: 1, rotate: 0 } },
  { initial: { opacity: 0, x: -60, y: 60 }, animate: { opacity: 1, x: 0, y: 0 } },
];

const ServicesPreview = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
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
              initial={cardAnimations[index].initial}
              animate={isInView ? cardAnimations[index].animate : cardAnimations[index].initial}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 } 
              }}
              className="group"
            >
              <div className="p-6 h-full bg-card rounded-xl border-2 border-border hover:border-cyan transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--cyan)/0.1)]">
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mb-4 border border-cyan/20"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-7 h-7 text-cyan" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground flex-grow">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 text-sm text-cyan hover:gap-3 transition-all"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-cyan text-cyan hover:bg-cyan hover:text-primary-foreground transition-all duration-300 font-semibold"
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
