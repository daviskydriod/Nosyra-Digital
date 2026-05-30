import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Shield, Eye, Lock, Database, Bell, Mail, ArrowRight } from "lucide-react";

const sections = [
  {
    icon: Eye,
    id: "information-we-collect",
    title: "Information We Collect",
    content: [
      {
        subtitle: "Information You Provide",
        text: "When you contact us, request a quote, or subscribe to our newsletter, we collect information you voluntarily provide — such as your name, email address, phone number, business name, and any project details you share.",
      },
      {
        subtitle: "Information We Collect Automatically",
        text: "When you visit nosyradigital.com.ng, we automatically collect certain technical information including your IP address, browser type, pages visited, time spent on pages, and referring URLs. This data is collected via cookies and similar tracking technologies.",
      },
    ],
  },
  {
    icon: Database,
    id: "how-we-use",
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "Service Delivery",
        text: "We use your information to respond to inquiries, deliver services you've requested, send project updates, and manage our business relationship with you.",
      },
      {
        subtitle: "Communications",
        text: "With your consent, we may send you newsletters, promotional offers, and updates about our services. You can unsubscribe at any time via the link in any email we send.",
      },
      {
        subtitle: "Improvement & Analytics",
        text: "We use aggregated, anonymised data to understand how visitors use our website, improve our services, and develop new offerings.",
      },
    ],
  },
  {
    icon: Lock,
    id: "data-security",
    title: "Data Security",
    content: [
      {
        subtitle: "How We Protect Your Data",
        text: "We implement industry-standard security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. This includes SSL encryption on all data transmissions and restricted internal access to personal data.",
      },
      {
        subtitle: "Retention",
        text: "We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. When data is no longer needed, it is securely deleted.",
      },
    ],
  },
  {
    icon: Shield,
    id: "sharing",
    title: "Sharing Your Information",
    content: [
      {
        subtitle: "We Do Not Sell Your Data",
        text: "Nosyra Digital does not sell, trade, or rent your personal information to third parties for their marketing purposes.",
      },
      {
        subtitle: "Trusted Service Providers",
        text: "We may share data with carefully selected third-party service providers (e.g. hosting providers, email platforms) who assist in operating our website and delivering services. These parties are contractually bound to protect your information.",
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose your information where required by law, court order, or to protect the rights, property, or safety of Nosyra Digital, our clients, or others.",
      },
    ],
  },
  {
    icon: Bell,
    id: "cookies",
    title: "Cookies",
    content: [
      {
        subtitle: "What Are Cookies",
        text: "Cookies are small text files placed on your device when you visit our website. They help us provide a better experience by remembering your preferences and understanding how you use our site.",
      },
      {
        subtitle: "Your Choices",
        text: "You can control or disable cookies through your browser settings. Note that disabling cookies may affect the functionality of some parts of our website.",
      },
    ],
  },
  {
    icon: Mail,
    id: "your-rights",
    title: "Your Rights",
    content: [
      {
        subtitle: "Access & Correction",
        text: "You have the right to request access to the personal data we hold about you, and to request corrections if any information is inaccurate or incomplete.",
      },
      {
        subtitle: "Deletion",
        text: "You may request that we delete your personal data where it is no longer necessary for us to retain it, subject to any legal obligations.",
      },
      {
        subtitle: "Opt-Out",
        text: "You may opt out of marketing communications at any time by clicking the unsubscribe link in our emails or by contacting us directly at info@nosyradigital.com.ng.",
      },
    ],
  },
];

const tableOfContents = [
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use", label: "How We Use Your Information" },
  { id: "data-security", label: "Data Security" },
  { id: "sharing", label: "Sharing Your Information" },
  { id: "cookies", label: "Cookies" },
  { id: "your-rights", label: "Your Rights" },
];

const PrivacyPolicy = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 text-xs sm:text-sm font-medium text-cyan bg-cyan/10 rounded-full border border-cyan/20"
          >
            Legal
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-4 sm:mb-6"
          >
            Privacy <span className="text-gradient">Policy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4"
          >
            Your privacy matters to us. This policy explains how Nosyra Digital collects,
            uses, and protects your information.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs sm:text-sm text-muted-foreground mt-4"
          >
            Last updated: June 2025
          </motion.p>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-16 items-start">

            {/* Table of Contents — sticky sidebar */}
            <AnimatedSection animation="fadeLeft" className="lg:col-span-1">
              <div className="sticky top-28">
                <GlassCard className="p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-cyan mb-4">
                    Contents
                  </p>
                  <ul className="space-y-2">
                    {tableOfContents.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollTo(item.id)}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan transition-colors text-left w-full group"
                        >
                          <ArrowRight className="w-3 h-3 shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan" />
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </AnimatedSection>

            {/* Sections */}
            <div className="lg:col-span-3 space-y-10">
              {/* Intro */}
              <AnimatedSection>
                <GlassCard className="p-6 sm:p-8" gradient>
                  <p className="text-muted-foreground leading-relaxed">
                    Nosyra Digital ("we", "us", or "our") is committed to protecting your personal
                    information and your right to privacy. This Privacy Policy applies to all
                    information collected through our website{" "}
                    <span className="text-cyan font-medium">nosyradigital.com.ng</span> and any
                    related services, communications, or interactions you have with us.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    By using our website, you agree to the collection and use of information in
                    accordance with this policy. If you disagree with any part, please discontinue
                    use of our site or contact us to discuss your concerns.
                  </p>
                </GlassCard>
              </AnimatedSection>

              {sections.map((section, index) => (
                <AnimatedSection key={section.id} delay={index * 0.05}>
                  <div id={section.id} className="scroll-mt-28">
                    <GlassCard className="p-6 sm:p-8">
                      {/* Section header */}
                      <div className="flex items-center gap-3 sm:gap-4 mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-cyan/10 flex items-center justify-center shrink-0">
                          <section.icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-poppins font-bold text-foreground">
                          {section.title}
                        </h2>
                      </div>

                      <div className="space-y-5">
                        {section.content.map((block) => (
                          <div key={block.subtitle}>
                            <h3 className="text-sm font-semibold text-cyan uppercase tracking-wide mb-1.5">
                              {block.subtitle}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                              {block.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  </div>
                </AnimatedSection>
              ))}

              {/* Contact for privacy queries */}
              <AnimatedSection>
                <GlassCard className="p-6 sm:p-8" gradient>
                  <h2 className="text-xl sm:text-2xl font-poppins font-bold text-foreground mb-3">
                    Contact Us About Privacy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4">
                    If you have questions, concerns, or requests relating to this Privacy Policy
                    or how we handle your personal data, please reach out to us:
                  </p>
                  <div className="space-y-2 text-sm sm:text-base">
                    <p>
                      <span className="text-muted-foreground">Email: </span>
                      <a
                        href="mailto:info@nosyradigital.com.ng"
                        className="text-cyan hover:underline font-medium"
                      >
                        info@nosyradigital.com.ng
                      </a>
                    </p>
                    <p>
                      <span className="text-muted-foreground">Address: </span>
                      <span className="text-foreground">Lagos, Nigeria</span>
                    </p>
                  </div>
                </GlassCard>
              </AnimatedSection>

              {/* Changes notice */}
              <AnimatedSection>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed px-1">
                  We may update this Privacy Policy from time to time to reflect changes in our
                  practices or legal requirements. When we do, we will revise the "Last updated"
                  date at the top of this page. We encourage you to review this policy periodically.
                  Continued use of our website after any changes constitutes your acceptance of the
                  updated policy.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
