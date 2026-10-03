import { ArrowRight } from "lucide-react";
import { Link } from "@/lib/navigation";

const CTASection = () => (
  <section className="py-24 lg:py-32 px-4 relative overflow-hidden bg-secondary text-secondary-foreground">
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_75%_20%,hsl(var(--cyan)/0.65),transparent_35%)]" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.28em] text-cyan font-semibold mb-6">Start a conversation</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold leading-[1.02] mb-7">
          Need a clearer digital direction?
        </h2>
        <p className="text-lg md:text-xl text-secondary-foreground/70 max-w-2xl leading-relaxed mb-10">
          Tell us where you are stuck. We will help you choose the right next step.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-cyan text-primary-foreground font-semibold hover:bg-cyan-glow transition-colors">
          Talk about your project <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  </section>
);

export default CTASection;
