// src/pages/FAQ.tsx
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion, { FaqEntry } from "@/components/FAQAccordion";
import GradientButton from "@/components/ui/GradientButton";

const faqs: FaqEntry[] = [
  {
    q: "How long does a website take to build?",
    a: "Standard sites take 5–10 working days after payment and content. Larger platforms are scoped during discovery.",
  },
  {
    q: "Can I pay in installments?",
    a: "Yes. We accept 50% upfront to start work and the remaining balance upon delivery before the site goes live.",
  },
  {
    q: "Is this a custom website or a template?",
    a: "100% custom. We design and code for your business—no page-builder templates.",
  },
  {
    q: "What do I need to provide to get started?",
    a: "Your name, logo, photos, services or products, and any available content. We’ll guide the gaps.",
  },
  {
    q: "Do you handle hosting and domain?",
    a: "Yes — we can handle hosting and domain setup for you, and advise on the best options based on your budget and needs.",
  },
  {
    q: "What if I need changes after delivery?",
    a: "Each package includes defined revision rounds. Extra changes can be handled through support.",
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
    a: "We use WhatsApp and email with async updates. Replies are within 24 hours.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="container mx-auto relative z-10">
          <SectionHeading
            badge="Before we start"
            title="The useful answers, upfront"
            subtitle="The practical details behind scope, timing, payment, and working together."
          />
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <FAQAccordion items={faqs} />

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">Still deciding what you need?</p>
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
