// src/pages/FAQ.tsx
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion, { FaqEntry } from "@/components/FAQAccordion";
import GradientButton from "@/components/ui/GradientButton";

const faqs: FaqEntry[] = [
  {
    q: "How long does a website take to build?",
    a: "5 to 10 working days after payment and content submission for standard sites. Larger platforms (e-commerce, custom admin systems) take longer — timeline is confirmed during discovery.",
  },
  {
    q: "Can I pay in installments?",
    a: "Yes. We accept 50% upfront to start work and the remaining balance upon delivery before the site goes live.",
  },
  {
    q: "Is this a custom website or a template?",
    a: "100% custom. Every website is designed and coded from scratch for your business — no Wix, no WordPress page builders.",
  },
  {
    q: "What do I need to provide to get started?",
    a: "Your business name, logo (if you have one), photos, services/products, and any content you want on the site. Don't have all of this ready? We'll guide you through it.",
  },
  {
    q: "Do you handle hosting and domain?",
    a: "Yes — we can handle hosting and domain setup for you, and advise on the best options based on your budget and needs.",
  },
  {
    q: "What if I need changes after delivery?",
    a: "Every package includes revision rounds after delivery at no extra cost (see the Pricing page for exact rounds per tier). Additional changes after that can be handled under a maintenance plan.",
  },
  {
    q: "Do you work with clients outside Nigeria?",
    a: "Yes. We work with clients across Nigeria, Ghana, the UK, and Canada. Distance and time zones are never a blocker.",
  },
  {
    q: "What currency do I pay in?",
    a: "NGN, USD, or GBP — whichever is easiest for you. Ghana-based clients are billed in USD.",
  },
  {
    q: "How do we communicate across time zones?",
    a: "Everything is handled over WhatsApp and email, with async updates throughout the build so you're never waiting on a live call to get an answer. Response time is within 24 hours regardless of time zone.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="container mx-auto relative z-10">
          <SectionHeading
            badge="FAQ"
            title="Your Questions Answered"
            subtitle="Everything you need to know before getting started."
          />
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <FAQAccordion items={faqs} />

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">Still have a question?</p>
            <GradientButton href="/contact" size="lg">
              Get in Touch
            </GradientButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
