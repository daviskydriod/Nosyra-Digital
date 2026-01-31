import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Copy, 
  Check,
  Zap,
  Target,
  MessageCircle,
  ArrowRight
} from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Lagos, Nigeria", copyable: false },
  { icon: Phone, label: "Phone", value: "+234 705 846 6586", copyable: true },
  { icon: Mail, label: "Email", value: "info@nosyradigital.com.ng", copyable: true },
];

const reasons = [
  {
    icon: Zap,
    title: "Quick Response",
    description: "We respond to all inquiries within 24 hours, often much sooner."
  },
  {
    icon: Target,
    title: "Tailored Solutions",
    description: "Every project gets a customized approach based on your unique needs."
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description: "We keep you updated every step of the way with transparent communication."
  }
];

const contactMethods = [
  {
    title: "Email Us",
    description: "For detailed inquiries and project discussions",
    action: "info@nosyradigital.com.ng",
    icon: Mail,
    color: "from-cyan/20 to-cyan/5"
  },
  {
    title: "Call Us",
    description: "Speak directly with our team",
    action: "+234 705 846 6586",
    icon: Phone,
    color: "from-navy/20 to-navy/5"
  },
  {
    title: "Visit Us",
    description: "Located in the heart of Lagos",
    action: "Lagos, Nigeria",
    icon: MapPin,
    color: "from-cyan/15 to-navy/10"
  }
];

const Contact = () => {
  const { toast } = useToast();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast({ title: "Copied to clipboard!", description: text });
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-cyan bg-cyan/10 rounded-full border border-cyan/20"
          >
            Get in Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }} 
            className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6"
          >
            Let's Build Something <span className="text-gradient">Amazing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }} 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Ready to transform your digital presence? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection animation="fadeLeft">
              <div className="space-y-6">
                <h2 className="text-3xl font-poppins font-bold mb-8">
                  Contact <span className="text-gradient">Information</span>
                </h2>
                {contactInfo.map((info, index) => (
                  <GlassCard key={info.label} className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-cyan" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-semibold text-foreground">{info.value}</p>
                        </div>
                      </div>
                      {info.copyable && (
                        <button 
                          onClick={() => copyToClipboard(info.value, index)} 
                          className="p-2 hover:bg-cyan/10 rounded-lg transition-colors"
                        >
                          {copiedIndex === index ? (
                            <Check className="w-5 h-5 text-cyan" />
                          ) : (
                            <Copy className="w-5 h-5 text-muted-foreground" />
                          )}
                        </button>
                      )}
                    </div>
                  </GlassCard>
                ))}
                
                {/* Business Hours */}
                <GlassCard className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-cyan" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Business Hours</p>
                      <p className="font-semibold text-foreground">Mon - Sat: 9AM - 6PM WAT</p>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
                      <span className="text-sm text-cyan">Open Now</span>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </AnimatedSection>

            {/* Why Contact Us Section */}
            <AnimatedSection animation="fadeRight">
              <div className="space-y-6">
                <h2 className="text-3xl font-poppins font-bold mb-8">
                  Why <span className="text-gradient">Reach Out</span>?
                </h2>
                
                {reasons.map((reason, index) => (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <GlassCard className="p-6" gradient>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                          <reason.icon className="w-6 h-6 text-cyan" />
                        </div>
                        <div>
                          <h3 className="text-xl font-poppins font-semibold mb-2">
                            {reason.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {reason.description}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-poppins font-bold mb-4"
            >
              Choose Your <span className="text-gradient">Preferred Method</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg"
            >
              We're here to help in whichever way suits you best
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <AnimatedSection 
                key={method.title} 
                animation="scaleIn" 
                delay={index * 0.1}
              >
                <GlassCard className="p-6 h-full text-center group hover:scale-105 transition-transform duration-300">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center`}>
                    <method.icon className="w-8 h-8 text-cyan" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold mb-2">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {method.description}
                  </p>
                  <p className="text-cyan font-semibold">
                    {method.action}
                  </p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-6">
              Ready to Start Your <span className="text-gradient">Digital Journey</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't wait any longer. Let's discuss how we can bring your vision to life.
            </p>
            <motion.a
              href="mailto:info@nosyradigital.com.ng"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan text-primary-foreground rounded-lg font-semibold hover:shadow-[0_0_30px_hsl(var(--cyan)/0.4)] transition-all duration-300"
            >
              Send Us an Email
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
