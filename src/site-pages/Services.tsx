import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientButton from "@/components/ui/GradientButton";
import { 
  Globe, 
  ShoppingCart, 
  Smartphone, 
  Megaphone, 
  Palette, 
  Share2,
  ArrowRight,
  Search,
  PenTool,
  Code,
  Rocket,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Websites with a point of view",
    description: "Clear, responsive websites built around your offer, your audience, and the action you want people to take.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Custom CMS"],
    color: "from-cyan to-blue-500",
  },
  {
    icon: ShoppingCart,
    title: "Commerce that feels simple",
    description: "Thoughtful storefronts that make products easy to discover, trust, and buy.",
    features: ["Payment Integration", "Inventory Management", "Order Tracking", "Analytics Dashboard"],
    color: "from-emerald-400 to-cyan",
  },
  {
    icon: Smartphone,
    title: "Performance & responsive design",
    description: "Fast, usable experiences that hold up across the screens your customers actually use.",
    features: ["Mobile-First Design", "Touch Optimization", "Fast Performance", "Cross-Browser"],
    color: "from-purple-500 to-cyan",
  },
  {
    icon: Megaphone,
    title: "Growth & optimisation",
    description: "SEO, analytics, and focused improvements tied to the goals that matter.",
    features: ["SEO Strategy", "Social Media Ads", "Email Marketing", "Content Strategy"],
    color: "from-orange-400 to-cyan",
  },
  {
    icon: Palette,
    title: "Brand systems",
    description: "A practical identity system that gives your team a consistent way to show up.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
    color: "from-pink-500 to-cyan",
  },
  {
    icon: Share2,
    title: "Social content systems",
    description: "Useful content kits that make regular publishing easier and more recognisable.",
    features: ["Post Templates", "Story Designs", "Profile Graphics", "Content Calendar"],
    color: "from-indigo-500 to-cyan",
  },
];

const process = [
  {
    step: 1,
    icon: Search,
    title: "Discovery",
    description: "We learn your business, audience, and goals.",
  },
  {
    step: 2,
    icon: PenTool,
    title: "Design",
    description: "We turn the strategy into a clear visual direction.",
  },
  {
    step: 3,
    icon: Code,
    title: "Development",
    description: "We build with modern, reliable technology.",
  },
  {
    step: 4,
    icon: Rocket,
    title: "Launch",
    description: "We launch, test, and stay available after launch.",
  },
];

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", 
  "Figma", "WordPress", "Shopify", "WooCommerce", "Firebase",
  "AWS", "Vercel", "Supabase", "Stripe"
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan/30 rounded-sm"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-cyan bg-cyan/10 rounded-full border border-cyan/20"
          >
            What we do
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 max-w-4xl mx-auto"
          >
            Digital experiences that make your business easier to choose.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            From first brief to launch, one clear process and one accountable team.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan">What we do</p>
              <h2 className="max-w-xl text-3xl font-poppins font-bold md:text-4xl">One studio for the work that moves the business.</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">Start with the problem in front of you. Add the right pieces as the system grows.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
            {services.map((service, index) => {
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  whileHover={{ y: -5 }}
                  className={`group ${index === 0 ? "lg:col-span-7" : index === 1 ? "lg:col-span-5" : "lg:col-span-4"}`}
                >
                  <div className="relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-7 transition-all duration-300 hover:border-cyan/60 hover:shadow-[0_18px_55px_hsl(var(--cyan)/0.09)] md:p-8">
                    <div className="relative mb-10 flex items-center justify-between">
                      <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                      <div className="flex h-12 w-12 items-center justify-center border border-cyan/30 bg-cyan/5 text-cyan transition-colors group-hover:border-cyan group-hover:bg-cyan/10">
                        <service.icon className="h-6 w-6 text-cyan" />
                      </div>
                    </div>
                    <h3 className="relative mb-3 text-2xl font-poppins font-bold text-foreground">{service.title}</h3>
                    <p className="relative mb-7 max-w-xl text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                    <ul className="relative mt-auto grid grid-cols-2 gap-x-4 gap-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="h-3.5 w-3.5 text-cyan" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative overflow-hidden border-y border-border/40 bg-card/30 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/[0.06] via-transparent to-primary/[0.08]" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-cyan">Our process</p>
              <h2 className="max-w-md text-4xl font-poppins font-bold leading-tight md:text-5xl">No black box. No handoff maze.</h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">A focused path from first conversation to a system your team can use with confidence.</p>
              <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-foreground"><span className="h-px w-10 bg-cyan" /> Strategy before screens</div>
            </div>

            <div className="relative">
              <div className="absolute bottom-8 left-[22px] top-8 w-px bg-gradient-to-b from-cyan via-border to-transparent md:left-[27px]" />
              <div className="space-y-5">
                {process.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.55, delay: index * 0.1 }}
                    className="group relative flex gap-5 rounded-2xl border border-border/60 bg-background/80 p-5 transition-all duration-300 hover:border-cyan/60 hover:bg-background md:gap-7 md:p-7"
                  >
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan/40 bg-background text-cyan shadow-[0_0_0_8px_hsl(var(--background))] md:h-14 md:w-14"><item.icon className="h-5 w-5 md:h-6 md:w-6" /></div>
                    <div className="min-w-0 pt-1">
                      <div className="mb-2 flex flex-wrap items-center gap-3"><span className="font-mono text-xs text-cyan">0{item.step}</span><span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Stage</span></div>
                      <h3 className="text-xl font-poppins font-bold text-foreground md:text-2xl">{item.title}</h3>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">{item.description}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionHeading
            badge="Working stack"
            title="The stack stays in service of the work"
            subtitle="We choose practical tools that keep the experience fast, maintainable, and ready to grow."
          />

          <div className="mt-12 overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <motion.div
                  key={`${tech}-${index}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex-shrink-0 px-8 py-4 rounded-xl glass border border-border/50 hover:border-cyan/30 transition-colors"
                >
                  <span className="text-foreground font-medium whitespace-nowrap">{tech}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-6">
              Have a <span className="text-cyan">clear next move</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let’s talk through the problem, the opportunity, and the right scope.
            </p>
            <GradientButton href="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Start with a brief
            </GradientButton>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
