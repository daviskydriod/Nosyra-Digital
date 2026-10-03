import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Layers3, TrendingUp } from "lucide-react";
import { Link } from "@/lib/navigation";

const practiceAreas = [
  {
    number: "01",
    icon: Compass,
    title: "Positioning & Direction",
    description: "Clarify what you do, who it is for, and why it matters before we make anything.",
    deliverables: ["Positioning", "Messaging", "Site structure"],
  },
  {
    number: "02",
    icon: Layers3,
    title: "Websites & Digital Systems",
    description: "Turn attention into action with a site or product that feels easy to use.",
    deliverables: ["Websites", "E-commerce", "Booking systems"],
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Launch & Improve",
    description: "Keep the system useful after launch with focused support, SEO, and measurement.",
    deliverables: ["SEO", "Conversion", "Analytics"],
  },
];

const ServicesPreview = () => (
  <section className="py-24 lg:py-32 relative overflow-hidden bg-card/30">
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="max-w-3xl mb-14 lg:mb-20">
        <p className="text-xs uppercase tracking-[0.28em] text-cyan font-semibold mb-5">What we do</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold leading-[1.05] text-foreground mb-6">
          A better digital presence starts with clarity.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          We plan, design, build, and improve digital experiences that help people understand and trust your business.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 border-y border-border/60">
        {practiceAreas.map((area, index) => (
          <motion.article
            key={area.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.1 }}
            className="group relative p-7 lg:p-9 border-b lg:border-b-0 lg:border-r last:border-0 border-border/60 hover:bg-background/70 transition-colors"
          >
            <div className="flex items-center justify-between mb-16">
              <span className="text-sm font-mono text-cyan">{area.number}</span>
              <area.icon className="w-6 h-6 text-cyan" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">{area.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-7">{area.description}</p>
            <ul className="space-y-2 mb-8">
              {area.deliverables.map((item) => <li key={item} className="text-sm text-foreground/75">{item}</li>)}
            </ul>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan group-hover:gap-3 transition-all">
              See what we do <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesPreview;
