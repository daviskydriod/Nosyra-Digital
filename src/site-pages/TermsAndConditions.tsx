import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  FileText,
  Briefcase,
  CreditCard,
  Copyright,
  AlertTriangle,
  RefreshCw,
  Scale,
  ArrowRight,
} from "lucide-react";

const sections = [
  {
    icon: Briefcase,
    id: "services",
    title: "Services & Engagement",
    content: [
      {
        subtitle: "Scope of Work",
        text: "All services provided by Nosyra Digital are defined in a written proposal, quote, or statement of work agreed upon before project commencement. Any work outside that agreed scope will be scoped and quoted separately.",
      },
      {
        subtitle: "Client Responsibilities",
        text: "You agree to provide timely feedback, required content, credentials, and approvals necessary for project delivery. Delays caused by the client may result in revised timelines and additional costs.",
      },
      {
        subtitle: "Project Timelines",
        text: "Estimated timelines are provided in good faith and are dependent on timely client cooperation. Nosyra Digital is not liable for delays resulting from late content delivery, change requests, or third-party dependencies.",
      },
    ],
  },
  {
    icon: CreditCard,
    id: "payment",
    title: "Payment Terms",
    content: [
      {
        subtitle: "Deposits & Invoicing",
        text: "Most projects require a non-refundable deposit of 50% before work begins. The remaining balance is due upon project completion or as stated in your specific agreement. Invoices are payable within 7 days of issue unless otherwise agreed.",
      },
      {
        subtitle: "Late Payments",
        text: "Overdue invoices may attract a late fee. We reserve the right to pause or suspend work on any project where payment is overdue by more than 14 days, without liability for resulting delays.",
      },
      {
        subtitle: "Currency",
        text: "Payments are accepted in Nigerian Naira (NGN), British Pounds (GBP), or US Dollars (USD) as specified in your invoice. Exchange rate risk on cross-currency transactions is borne by the client.",
      },
    ],
  },
  {
    icon: RefreshCw,
    id: "revisions",
    title: "Revisions & Changes",
    content: [
      {
        subtitle: "Included Revisions",
        text: "Each project includes a defined number of revision rounds as stated in your proposal. Revisions are amendments to existing designs or content — they do not constitute a change in direction or scope.",
      },
      {
        subtitle: "Additional Revisions",
        text: "Revision requests beyond the agreed number will be quoted and billed separately at our standard hourly or per-task rate. We will always notify you before proceeding with billable revisions.",
      },
    ],
  },
  {
    icon: Copyright,
    id: "intellectual-property",
    title: "Intellectual Property",
    content: [
      {
        subtitle: "Ownership After Full Payment",
        text: "Upon receipt of full payment, ownership of the final deliverables (designs, code, content produced by us for your project) transfers to you. Until full payment is received, all work remains the intellectual property of Nosyra Digital.",
      },
      {
        subtitle: "Third-Party Assets",
        text: "Some projects may incorporate licensed fonts, stock images, plugins, or frameworks. Licensing of third-party assets is the client's responsibility unless explicitly included in our agreement. We will advise where third-party licensing applies.",
      },
      {
        subtitle: "Portfolio Rights",
        text: "Unless you explicitly request otherwise in writing, Nosyra Digital reserves the right to display completed work in our portfolio and use it in marketing materials to showcase our capabilities.",
      },
    ],
  },
  {
    icon: AlertTriangle,
    id: "liability",
    title: "Limitation of Liability",
    content: [
      {
        subtitle: "No Guarantee of Results",
        text: "While we strive for excellence, we cannot guarantee specific business outcomes (e.g. sales growth, search rankings, or conversion rates) from our services. Digital results depend on many factors outside our control.",
      },
      {
        subtitle: "Maximum Liability",
        text: "To the fullest extent permitted by law, Nosyra Digital's total liability to you for any claim arising from our services shall not exceed the total fees paid by you for the specific project giving rise to the claim.",
      },
      {
        subtitle: "Indirect Losses",
        text: "We are not liable for any indirect, incidental, or consequential damages including loss of profit, loss of data, or business interruption — even if we have been advised of the possibility of such damages.",
      },
    ],
  },
  {
    icon: FileText,
    id: "confidentiality",
    title: "Confidentiality",
    content: [
      {
        subtitle: "Our Obligations",
        text: "We treat all client information, business data, and project details as strictly confidential. We will not disclose your confidential information to third parties without your consent, except where required by law.",
      },
      {
        subtitle: "Your Obligations",
        text: "You agree to keep any proprietary processes, pricing, or materials shared by Nosyra Digital confidential and not to share them with competitors or third parties without our written consent.",
      },
    ],
  },
  {
    icon: Scale,
    id: "governing-law",
    title: "Governing Law & Disputes",
    content: [
      {
        subtitle: "Jurisdiction",
        text: "These Terms are governed by the laws of the Federal Republic of Nigeria. For clients in the United Kingdom, relevant UK consumer and contract laws may also apply where mandated.",
      },
      {
        subtitle: "Dispute Resolution",
        text: "In the event of a dispute, both parties agree to first attempt resolution through good-faith negotiation. If unresolved within 30 days, disputes may be referred to mediation before any legal proceedings are initiated.",
      },
    ],
  },
];

const tableOfContents = [
  { id: "services", label: "Services & Engagement" },
  { id: "payment", label: "Payment Terms" },
  { id: "revisions", label: "Revisions & Changes" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "confidentiality", label: "Confidentiality" },
  { id: "governing-law", label: "Governing Law & Disputes" },
];

const TermsAndConditions = () => {
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
            Terms & <span className="text-gradient">Conditions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4"
          >
            Please read these terms carefully before engaging our services.
            By working with Nosyra Digital, you agree to the terms set out below.
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

            {/* Sticky TOC */}
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
                    These Terms and Conditions ("Terms") govern the relationship between{" "}
                    <span className="text-cyan font-medium">Nosyra Digital</span> ("we", "us",
                    "our") and any individual or business ("you", "client") that engages our
                    services or uses our website at nosyradigital.com.ng.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    By commissioning our services, signing a proposal, or making a payment,
                    you confirm that you have read, understood, and agree to be bound by these
                    Terms. If you have any questions before engaging, please contact us at{" "}
                    <a
                      href="mailto:info@nosyradigital.com.ng"
                      className="text-cyan hover:underline font-medium"
                    >
                      info@nosyradigital.com.ng
                    </a>
                    .
                  </p>
                </GlassCard>
              </AnimatedSection>

              {sections.map((section, index) => (
                <AnimatedSection key={section.id} delay={index * 0.05}>
                  <div id={section.id} className="scroll-mt-28">
                    <GlassCard className="p-6 sm:p-8">
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

              {/* Termination */}
              <AnimatedSection>
                <GlassCard className="p-6 sm:p-8" gradient>
                  <h2 className="text-xl sm:text-2xl font-poppins font-bold text-foreground mb-3">
                    Termination
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4">
                    Either party may terminate a project engagement with 14 days' written notice.
                    In the event of termination:
                  </p>
                  <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                    {[
                      "All work completed up to the termination date will be invoiced and is payable.",
                      "The non-refundable deposit is retained by Nosyra Digital in all cases.",
                      "Completed deliverables will be released to the client only upon settlement of all outstanding invoices.",
                      "Either party may terminate immediately in the event of a material breach by the other party.",
                    ].map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-cyan/10 text-cyan text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                          {i + 1}
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </AnimatedSection>

              {/* Changes to terms */}
              <AnimatedSection>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed px-1">
                  Nosyra Digital reserves the right to update these Terms at any time. Changes
                  will be posted on this page with a revised "Last updated" date. Continued
                  engagement with our services after any update constitutes your acceptance of
                  the revised Terms. For questions about these Terms, contact us at{" "}
                  <a
                    href="mailto:info@nosyradigital.com.ng"
                    className="text-cyan hover:underline"
                  >
                    info@nosyradigital.com.ng
                  </a>
                  .
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsAndConditions;
