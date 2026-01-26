import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientButton from "@/components/ui/GradientButton";
import { 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  Megaphone, 
  Palette, 
  Share2,
  ArrowRight,
  Search,
  PenTool,
  Code,
  Rocket,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Website Design",
    description: "Stunning, responsive websites tailored to your brand identity and business goals. We create digital experiences that captivate and convert.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Custom CMS"],
    color: "from-cyan to-blue-500",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Stores",
    description: "Powerful online stores that turn visitors into customers. Complete with secure payments, inventory management, and seamless checkout.",
    features: ["Payment Integration", "Inventory Management", "Order Tracking", "Analytics Dashboard"],
    color: "from-emerald-400 to-cyan",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    description: "Flawless experiences across all devices. We ensure your website looks and works perfectly on smartphones, tablets, and desktops.",
    features: ["Mobile-First Design", "Touch Optimization", "Fast Performance", "Cross-Browser"],
    color: "from-purple-500 to-cyan",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic campaigns that drive traffic, leads, and conversions. From SEO to social media, we help you reach your target audience.",
    features: ["SEO Strategy", "Social Media Ads", "Email Marketing", "Content Strategy"],
    color: "from-orange-400 to-cyan",
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    description: "Memorable brand identities that tell your story and build trust. Logos, color schemes, typography, and complete brand guidelines.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
    color: "from-pink-500 to-cyan",
  },
  {
    icon: Share2,
    title: "Social Media Design",
    description: "Eye-catching social content that grows your audience and engagement. Templates, graphics, and complete social media kits.",
    features: ["Post Templates", "Story Designs", "Profile Graphics", "Content Calendar"],
    color: "from-indigo-500 to-cyan",
  },
];

const process = [
  {
    step: 1,
    icon: Search,
    title: "Discovery",
    description: "We dive deep into understanding your business, goals, and target audience.",
  },
  {
    step: 2,
    icon: PenTool,
    title: "Design",
    description: "Our designers create stunning visuals that align with your brand identity.",
  },
  {
    step: 3,
    icon: Code,
    title: "Development",
    description: "We build your project using the latest technologies and best practices.",
  },
  {
    step: 4,
    icon: Rocket,
    title: "Launch",
    description: "We deploy your project and provide ongoing support to ensure success.",
  },
];

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", 
  "Figma", "WordPress", "Shopify", "WooCommerce", "Firebase",
  "AWS", "Vercel", "Supabase", "Stripe"
];

const Services = () => {
  const processRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start end", "end start"],
  });

  const progressWidth = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan/30 rounded-sm"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-cyan bg-cyan/10 rounded-full border border-cyan/20"
          >
            Our Services
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 max-w-4xl mx-auto"
          >
            Digital Solutions That <span className="text-gradient">Drive Growth</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            From concept to launch, we provide comprehensive digital services designed to elevate your brand and accelerate your business growth.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              // Unique animations for each service card
              const animations = [
                { initial: { opacity: 0, x: -100, rotateY: -20 }, animate: { opacity: 1, x: 0, rotateY: 0 } },
                { initial: { opacity: 0, y: -80, scale: 0.7 }, animate: { opacity: 1, y: 0, scale: 1 } },
                { initial: { opacity: 0, x: 100, rotateY: 20 }, animate: { opacity: 1, x: 0, rotateY: 0 } },
                { initial: { opacity: 0, y: 80, rotateX: -20 }, animate: { opacity: 1, y: 0, rotateX: 0 } },
                { initial: { opacity: 0, scale: 0.5, rotate: -15 }, animate: { opacity: 1, scale: 1, rotate: 0 } },
                { initial: { opacity: 0, x: -80, y: 80 }, animate: { opacity: 1, x: 0, y: 0 } },
              ];
              
              return (
                <motion.div
                  key={service.title}
                  initial={animations[index].initial}
                  whileInView={animations[index].animate}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.12,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="p-8 h-full bg-card rounded-xl border-2 border-border hover:border-cyan transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--cyan)/0.1)]">
                    {/* Icon */}
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mb-6`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-cyan" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-cyan" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More */}
                    <div className="mt-auto pt-4 border-t border-border">
                      <span className="inline-flex items-center gap-2 text-cyan font-semibold group-hover:gap-3 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden" ref={processRef}>
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            badge="Our Process"
            title="How We Work"
            subtitle="A streamlined process designed to deliver exceptional results efficiently."
          />

          <div className="mt-16 relative">
            {/* Progress Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-border rounded-full -translate-y-1/2">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan to-primary rounded-full"
                style={{ width: progressWidth }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <AnimatedSection key={item.title} animation="fadeUp" delay={index * 0.15}>
                  <div className="relative">
                    {/* Step Number */}
                    <motion.div
                      className="w-16 h-16 mx-auto mb-6 rounded-full bg-cyan/10 border-2 border-cyan flex items-center justify-center relative z-10"
                      whileHover={{ scale: 1.1 }}
                    >
                      <item.icon className="w-8 h-8 text-cyan" />
                    </motion.div>

                    <div className="text-center">
                      <span className="text-sm text-cyan font-semibold">Step {item.step}</span>
                      <h3 className="text-xl font-poppins font-bold text-foreground mt-2 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            badge="Tech Stack"
            title="Technologies We Use"
            subtitle="We leverage the latest tools and technologies to build exceptional digital products."
          />

          <div className="mt-12 overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <motion.div
                  key={`${tech}-${index}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex-shrink-0 px-8 py-4 rounded-xl glass border border-border/50 hover:border-cyan/30 transition-colors"
                >
                  <span className="text-foreground font-medium whitespace-nowrap">{tech}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-6">
              Ready to Start Your <span className="text-gradient">Project</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life.
            </p>
            <GradientButton href="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Get a Free Quote
            </GradientButton>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
