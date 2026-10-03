import { imageSrc } from "@/lib/image";
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

// Import logo
import founderPhoto from "@/assets/founder-photo.jpg";
import nosyraLogo from "@/assets/nosyra-logo.png";

const timeline = [
  {
    year: "2025",
    title: "The studio starts with the problem",
    description: "Nosyra Digital began with a simple belief: good digital work should make a business easier to understand and easier to choose.",
  },
];

const values = [
  {
    icon: Target,
    title: "Craft",
    description: "We sweat the details that make an experience feel considered, useful, and credible.",
  },
  {
    icon: Heart,
    title: "Care",
    description: "We stay close to the work, the people using it, and the people responsible for it.",
  },
  {
    icon: Lightbulb,
    title: "Good judgement",
    description: "We use new tools when they improve the outcome — not because they are new.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "You work directly with the people shaping and building the project.",
  },
  {
    icon: Zap,
    title: "Momentum",
    description: "A clear scope and steady decisions keep projects moving without rushing the important work.",
  },
  {
    icon: Eye,
    title: "Straight talk",
    description: "Clear communication, honest scope, and no surprises hiding in the handoff.",
  },
];

const benefits = [
  "A strategy shaped around your actual business goals",
  "Direct access to the people doing the work",
  "A modern system chosen for the outcome, not the trend",
  "A clear scope and transparent pricing",
  "Support that stays available after launch",
  "A growing body of work across markets and sectors",
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
                The studio
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
                Founder-led studio building websites and digital systems for ambitious businesses worldwide. You work directly with the person building your project.
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

            {/* Right - Logo with Abstract Shape */}
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
                <div className="absolute inset-16 glass rounded-3xl flex items-center justify-center p-8">
                  <motion.img
                    src={imageSrc(nosyraLogo)}
                    alt="Nosyra Digital Logo"
                    className="w-full h-full object-contain"
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
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
            badge="The studio"
            title="Independent by design."
            subtitle="A founder-led studio building clear digital systems from Lagos for teams working anywhere."
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
            badge="How we work"
            title="Useful over impressive."
            subtitle="The principles behind every scope, screen, and decision."
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
                Why work with <span className="text-cyan">Nosyra Digital</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Every project is handled end-to-end by an experienced builder, not passed through layers of account management.
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
                <div className="aspect-square rounded-3xl overflow-hidden relative">
                  <img
                    src={imageSrc(founderPhoto)}
                    alt="Obi Chinonso David - Founder & Lead Developer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                  {/* Name & Title Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="font-poppins font-bold text-2xl text-foreground mb-1">
                      Obi Chinonso David
                    </h4>
                    <p className="text-cyan font-medium">
                      Founder & Lead Developer
                    </p>
                  </div>
                </div>
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
              Ready to make the next move?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let’s talk about what needs to become clearer, faster, or more useful.
            </p>
            <GradientButton href="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Start a conversation
            </GradientButton>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
