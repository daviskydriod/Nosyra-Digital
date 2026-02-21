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

// WhatsApp SVG icon component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Lagos, Nigeria",            copyable: false, whatsapp: false },
  { icon: Phone,  label: "Phone",    value: "+234 705 846 6586",         copyable: true,  whatsapp: true  },
  { icon: Mail,   label: "Email",    value: "info@nosyradigital.com.ng", copyable: true,  whatsapp: false },
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
      <section className="relative min-h-[50vh] flex items-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="inline-block px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 text-xs sm:text-sm font-medium text-cyan bg-cyan/10 rounded-full border border-cyan/20"
          >
            Get in Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }} 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-4 sm:mb-6 px-2"
          >
            Let's Build Something <span className="text-gradient">Amazing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }} 
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4"
          >
            Ready to transform your digital presence? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Contact Info */}
            <AnimatedSection animation="fadeLeft">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-6 sm:mb-8">
                  Contact <span className="text-gradient">Information</span>
                </h2>

                {contactInfo.map((info, index) => (
                  <GlassCard key={info.label} className="p-4 sm:p-6">
                    <div className="flex items-center justify-between gap-3">

                      {/* Icon + text */}
                      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                          <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-semibold text-foreground text-sm sm:text-base truncate">
                            {info.value}
                          </p>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-1 shrink-0">
                        {info.whatsapp && (
                          <a
                            href="https://wa.me/2347058466586"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 hover:bg-green-500/10 rounded-lg transition-colors"
                            aria-label="Chat on WhatsApp"
                          >
                            <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                          </a>
                        )}
                        {info.copyable && (
                          <button
                            onClick={() => copyToClipboard(info.value, index)}
                            className="p-2 hover:bg-cyan/10 rounded-lg transition-colors"
                            aria-label={`Copy ${info.label}`}
                          >
                            {copiedIndex === index ? (
                              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-cyan" />
                            ) : (
                              <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                ))}

                {/* Business Hours */}
                <GlassCard className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-cyan" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-muted-foreground">Business Hours</p>
                      <p className="font-semibold text-foreground text-sm sm:text-base">
                        Mon - Sat: 9AM - 6PM WAT
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
                      <span className="text-xs sm:text-sm text-cyan font-medium">Open Now</span>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </AnimatedSection>

            {/* Why Contact Us */}
            <AnimatedSection animation="fadeRight">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl font-poppins font-bold mb-6 sm:mb-8">
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
                    <GlassCard className="p-4 sm:p-6" gradient>
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                          <reason.icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-poppins font-semibold mb-1 sm:mb-2">
                            {reason.title}
                          </h3>
                          <p className="text-sm sm:text-base text-muted-foreground">
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
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-poppins font-bold mb-3 sm:mb-4 px-2"
            >
              Choose Your <span className="text-gradient">Preferred Method</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-base sm:text-lg px-4"
            >
              We're here to help in whichever way suits you best
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {contactMethods.map((method, index) => (
              <AnimatedSection key={method.title} animation="scaleIn" delay={index * 0.1}>
                <GlassCard className="p-5 sm:p-6 h-full text-center group hover:scale-105 transition-transform duration-300">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center`}>
                    <method.icon className="w-7 h-7 sm:w-8 sm:h-8 text-cyan" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-poppins font-semibold mb-1 sm:mb-2">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                    {method.description}
                  </p>
                  <p className="text-cyan font-semibold text-sm sm:text-base break-all sm:break-normal">
                    {method.action}
                  </p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-4 sm:mb-6 px-2">
              Ready to Start Your <span className="text-gradient">Digital Journey</span>?
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Don't wait any longer. Let's discuss how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <motion.a
                href="mailto:info@nosyradigital.com.ng"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-cyan text-primary-foreground rounded-lg font-semibold text-sm sm:text-base hover:shadow-[0_0_30px_hsl(var(--cyan)/0.4)] transition-all duration-300 w-full sm:w-auto"
              >
                Send Us an Email
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                href="https://wa.me/2347058466586"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white rounded-lg font-semibold text-sm sm:text-base hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all duration-300 w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                Chat on WhatsApp
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
