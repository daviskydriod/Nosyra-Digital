import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientButton from "@/components/ui/GradientButton";
import { 
  Target, 
  Eye, 
  Heart, 
  Zap, 
  Users, 
  Lightbulb,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const timeline = [
  {
    year: "2025",
    title: "The Beginning",
    description: "Nosyra Digital was founded with a vision to help businesses establish a powerful online presence.",
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for perfection in every pixel, every line of code, and every strategy we create.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Our love for digital creativity drives us to go above and beyond for every client.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of trends, bringing fresh ideas and cutting-edge solutions to the table.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients, treating their goals as our own.",
  },
  {
    icon: Zap,
    title: "Speed",
    description: "Fast turnaround without compromising quality. Time is money, and we respect both.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication, honest pricing, and no hidden surprises throughout our partnership.",
  },
];

const benefits = [
  "Tailored strategies for your unique business goals",
  "Dedicated team of experienced professionals",
  "Cutting-edge technology and modern design trends",
  "Transparent pricing with no hidden fees",
  "24/7 support and maintenance services",
  "Proven track record of success",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-cyan bg-cyan/10 rounded-full border border-cyan/20"
              >
                About Us
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6"
              >
                We're <span className="text-gradient">Nosyra Digital</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground mb-8 leading-relaxed"
              >
                A passionate team of digital creators, strategists, and innovators dedicated to transforming businesses through exceptional digital experiences. We believe in the power of design and technology to change the world.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <GradientButton href="/contact" icon={<ArrowRight className="w-5 h-5" />}>
                  Work With Us
                </GradientButton>
              </motion.div>
            </div>

            {/* Right - Abstract Shape */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-navy/40 rounded-3xl"
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-8 bg-gradient-to-tr from-navy/60 to-cyan/20 rounded-3xl"
                  animate={{ rotate: [0, -5, 0, 5, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <div className="absolute inset-16 glass rounded-3xl flex items-center justify-center">
                  <span className="text-6xl font-poppins font-bold text-gradient">ND</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            badge="Our Journey"
            title="The Nosyra Story"
            subtitle="From humble beginnings to becoming a leading digital agency in Nigeria."
          />

          <div className="mt-16 relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-cyan/50 to-transparent hidden lg:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <AnimatedSection
                  key={item.year}
                  animation={index % 2 === 0 ? "fadeLeft" : "fadeRight"}
                  delay={index * 0.1}
                >
                  <div className={`flex items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                      <GlassCard className="p-6 inline-block">
                        <span className="text-cyan font-bold text-xl">{item.year}</span>
                        <h3 className="text-xl font-poppins font-semibold text-foreground mt-2 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </GlassCard>
                    </div>
                    
                    {/* Center Dot */}
                    <div className="hidden lg:flex w-4 h-4 rounded-full bg-cyan glow-cyan shrink-0" />
                    
                    <div className="flex-1 hidden lg:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            badge="Our Values"
            title="What Drives Us"
            subtitle="The core principles that guide everything we do."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} animation="scaleIn" delay={index * 0.1}>
                <GlassCard className="p-6 h-full" gradient>
                  <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-cyan" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeLeft">
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-cyan bg-cyan/10 rounded-full border border-cyan/20">
                Why Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-6">
                Why Choose <span className="text-gradient">Nosyra Digital</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We're not just another digital agency. We're your partners in growth, committed to delivering results that matter.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection animation="fadeRight">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
                
                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl"
                >
                  <div className="text-3xl font-poppins font-bold text-gradient mb-1">150+</div>
                  <div className="text-muted-foreground">Successful Projects</div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-6">
              Ready to <span className="text-gradient">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital goals.
            </p>
            <GradientButton href="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Get in Touch
            </GradientButton>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
