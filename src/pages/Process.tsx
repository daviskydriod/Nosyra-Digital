// src/pages/Process.tsx
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientButton from "@/components/ui/GradientButton";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: Search,
    title: "Discovery",
    timeline: "Day 1–2",
    description:
      "We dive into your business, goals, and target audience. You share your brand, examples you like, and what success looks like.",
    youProvide: ["Business name & logo (if you have one)", "Content, photos, product/service list", "Sites or brands you admire"],
    youGet: ["A clear scope and timeline", "A fixed price before any work starts"],
  },
  {
    step: 2,
    icon: PenTool,
    title: "Design",
    timeline: "Day 2–5",
    description:
      "Every visual is designed to match your brand from the first draft — not a generic template with your logo dropped in.",
    youProvide: ["Feedback on the first draft"],
    youGet: ["A visual preview of your site before any code is written"],
  },
  {
    step: 3,
    icon: Code,
    title: "Development",
    timeline: "Day 5–9",
    description:
      "Built in React/TypeScript with modern deployment pipelines — the same stack used for VSL, Xpola Services, and THM Wellness.",
    youProvide: ["Final content, if not already submitted"],
    youGet: ["A staging link to review before launch"],
  },
  {
    step: 4,
    icon: Rocket,
    title: "Launch",
    timeline: "Day 9–10",
    description:
      "Deployed, tested across devices, and handed over with support after launch — not passed off to a separate team.",
    youProvide: ["Final sign-off"],
    youGet: ["A live site, revision rounds per your package, and direct support"],
  },
];

const Process = () => {
  return (
    <Layout>
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        <div className="container mx-auto relative z-10">
          <SectionHeading
            badge="How We Work"
            title="A Process Built for Clarity"
            subtitle="No surprises, no missed handoffs — here's exactly what happens at each stage, and what's needed from you."
          />
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="container mx-auto max-w-4xl space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-xl border-2 border-border bg-card hover:border-cyan/50 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-cyan" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-xs font-bold text-cyan uppercase tracking-widest">
                      Step {step.step}
                    </span>
                    <span className="text-xs text-muted-foreground">· {step.timeline}</span>
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                        What you provide
                      </p>
                      <ul className="space-y-1">
                        {step.youProvide.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground">· {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                        What you get
                      </p>
                      <ul className="space-y-1">
                        {step.youGet.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground">· {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="text-center pt-10">
            <GradientButton href="/pricing" size="lg">
              See Pricing
            </GradientButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Process;
