import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send, Copy, Check } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Lagos, Nigeria", copyable: false },
  { icon: Phone, label: "Phone", value: "+234 705 846 6586", copyable: true },
  { icon: Mail, label: "Email", value: "info@nosyradigital.com.ng", copyable: true },
];

const Contact = () => {
  const { toast } = useToast();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast({ title: "Copied to clipboard!", description: text });
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-cyan bg-cyan/10 rounded-full border border-cyan/20">
            Get in Touch
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                <h2 className="text-3xl font-poppins font-bold mb-8">Contact <span className="text-gradient">Information</span></h2>
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
                        <button onClick={() => copyToClipboard(info.value, index)} className="p-2 hover:bg-cyan/10 rounded-lg transition-colors">
                          {copiedIndex === index ? <Check className="w-5 h-5 text-cyan" /> : <Copy className="w-5 h-5 text-muted-foreground" />}
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

            {/* Contact Form */}
            <AnimatedSection animation="fadeRight">
              <GlassCard className="p-8" gradient>
                <h2 className="text-2xl font-poppins font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input placeholder="Your name" className="bg-background/50 border-border focus:border-cyan" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="your@email.com" className="bg-background/50 border-border focus:border-cyan" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input placeholder="+234..." className="bg-background/50 border-border focus:border-cyan" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Interest</label>
                    <select className="w-full px-3 py-2 rounded-lg bg-background/50 border border-border focus:border-cyan focus:outline-none">
                      <option value="">Select a service</option>
                      <option value="web">Website Design</option>
                      <option value="ecom">E-Commerce</option>
                      <option value="brand">Branding</option>
                      <option value="social">Social Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea placeholder="Tell us about your project..." className="bg-background/50 border-border focus:border-cyan min-h-[120px]" required />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-cyan text-primary-foreground hover:bg-cyan-glow py-3 font-semibold">
                    {isSubmitting ? <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full" /> : <><Send className="w-5 h-5 mr-2" /> Send Message</>}
                  </Button>
                </form>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
