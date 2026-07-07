import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Smartphone,
  Zap,
  MessageCircle,
  Search,
  Clock,
  ArrowRight,
} from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import GradientButton from "@/components/ui/GradientButton";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import FeaturedWork from "@/components/home/FeaturedWork";
import TestimonialsSection from "@/components/home/TestimonialsSection";

import nosyraLogo from "@/assets/nosyra-logo.png";

// -----------------------------------------------------------------------
// NOTE ON REUSED COMPONENTS
// This page intentionally does NOT use the shared <Layout /> component,
// since Layout renders the full site navbar/footer. Ad traffic should land
// on a page with a single goal, so navigation here is a minimal logo + CTA
// header instead. FeaturedWork and TestimonialsSection are reused as-is
// from the homepage so portfolio pieces and client feedback stay in sync
// with the real content maintained there — no duplicated/placeholder data.
// -----------------------------------------------------------------------

const benefits = [
  { icon: Smartphone, text: "Responsive on all devices" },
  { icon: Zap, text: "Fast loading, built for performance" },
  { icon: MessageCircle, text: "Contact form built in" },
  { icon: MessageCircle, text: "WhatsApp integration" },
  { icon: Search, text: "SEO-friendly from day one" },
  { icon: Clock, text: "Delivered in 14 days" },
];

const packages = [
  {
    name: "Starter",
    price: "$150",
    description: "Perfect for small businesses getting online for the first time.",
    features: [
      "Up to 3 pages",
      "Mobile-responsive design",
      "Contact form",
      "Basic SEO setup",
      "1 round of revisions",
    ],
    featured: false,
  },
  {
    name: "Business",
    price: "$250",
    description: "For businesses ready to grow leads and credibility online.",
    features: [
      "Up to 6 pages",
      "Mobile-responsive design",
      "Contact form + WhatsApp integration",
      "SEO optimization",
      "3 rounds of revisions",
      "1 month free support",
    ],
    featured: true,
  },
  {
    name: "E-commerce",
    price: "$500",
    description: "A full online store built to sell your products.",
    features: [
      "Unlimited product pages",
      "Secure payment integration",
      "Inventory management",
      "SEO optimization",
      "3 months free support",
    ],
    featured: false,
  },
];

const WebDesignLanding = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    needs: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire this up to your form handler of choice
    // (e.g. Formspree, EmailJS, or a backend endpoint).
    // For now this just confirms submission in the UI.
    console.log("Landing page lead submitted:", form);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Header — logo + single CTA only, no full nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <img src={nosyraLogo} alt="Nosyra Digital" className="h-9 w-auto" />
          <a href="#quote">
            <GradientButton size="sm">Get a Free Quote</GradientButton>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-cyan bg-cyan/10 rounded-full border border-cyan/20"
          >
            Websites Starting From $150
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 max-w-4xl mx-auto"
          >
            Professional Websites That{" "}
            <span className="text-gradient">Help Your Business Grow</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Custom, mobile-friendly websites designed to build trust and
            generate more leads — built end-to-end by a founder who's shipped
            50+ live sites across four countries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#quote">
              <GradientButton size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Get a Free Quote
              </GradientButton>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.text} animation="scaleIn" delay={index * 0.08}>
                <GlassCard className="p-6 h-full text-center" gradient>
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mb-3 mx-auto">
                    <benefit.icon className="w-6 h-6 text-cyan" />
                  </div>
                  <p className="text-foreground font-medium">{benefit.text}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            badge="Our Work"
            title="Recent Projects"
            subtitle="A look at websites we've designed and built for real clients."
          />
        </div>
        <FeaturedWork />
      </section>

      {/* Pricing */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            badge="Pricing"
            title="Simple, Transparent Packages"
            subtitle="Pick the package that fits your business. No hidden fees."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <AnimatedSection key={pkg.name} animation="fadeUp" delay={index * 0.1}>
                <GlassCard
                  className={`p-8 h-full flex flex-col ${
                    pkg.featured ? "border-cyan/50 ring-1 ring-cyan/30" : ""
                  }`}
                  gradient
                >
                  {pkg.featured && (
                    <span className="self-start mb-4 px-3 py-1 text-xs font-medium text-cyan bg-cyan/10 rounded-full border border-cyan/20">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-3xl font-poppins font-bold text-gradient mb-3">
                    {pkg.price}
                  </p>
                  <p className="text-muted-foreground text-sm mb-6">{pkg.description}</p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#quote">
                    <GradientButton className="w-full justify-center">
                      Choose {pkg.name}
                    </GradientButton>
                  </a>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — reused directly from the homepage */}
      <TestimonialsSection />

      {/* Contact / Quote Form */}
      <section id="quote" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Get Your <span className="text-gradient">Free Quote</span>
            </h2>
            <p className="text-muted-foreground">
              Tell us a bit about your project and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <GlassCard className="p-8" gradient>
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 text-cyan mx-auto mb-4" />
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-2">
                    Thanks — we've got it!
                  </h3>
                  <p className="text-muted-foreground">
                    We'll be in touch within 24 hours with your free quote.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-cyan focus:outline-none text-foreground"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-cyan focus:outline-none text-foreground"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone (optional)"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-cyan focus:outline-none text-foreground"
                  />
                  <input
                    type="text"
                    name="business"
                    required
                    placeholder="Business Name"
                    value={form.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-cyan focus:outline-none text-foreground"
                  />
                  <textarea
                    name="needs"
                    required
                    placeholder="What do you need?"
                    rows={4}
                    value={form.needs}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-cyan focus:outline-none text-foreground resize-none"
                  />
                  <GradientButton className="w-full justify-center" size="lg">
                    Get My Free Quote
                  </GradientButton>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-10 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <img src={nosyraLogo} alt="Nosyra Digital" className="h-7 w-auto opacity-80" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nosyra Digital. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WebDesignLanding;