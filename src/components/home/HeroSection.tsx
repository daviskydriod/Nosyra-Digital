import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import GradientButton from "@/components/ui/GradientButton";
import { useTypewriter } from "@/hooks/useTypewriter";

const HeroSection = () => {
  const { displayText: subheadline } = useTypewriter(
    "We build websites that grow your business, elevate your brand, and convert visitors into customers.",
    30,
    1500
  );

  const headlineWords = ["Websites", "That", "Work", "For", "Your", "Business"];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-mesh" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy/30 rounded-full blur-3xl"
        />

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan/30 rounded-sm"
            style={{ top: `${20 + i * 15}%`, left: `${10 + i * 15}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.7, 0.3], rotate: [0, 90, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              Trusted by Businesses Across Nigeria
            </motion.div>

            {/* Main Headline */}
            <div className="mb-6 overflow-hidden">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold leading-tight">
                {headlineWords.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className={`inline-block mr-3 md:mr-5 ${
                      word === "Work" || word === "Business" ? "text-gradient" : "text-foreground"
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Typewriter Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto h-16"
            >
              {subheadline}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-5 bg-cyan ml-1 align-middle"
              />
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            >
              <GradientButton
                href="/contact"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Your Project
              </GradientButton>

              <GradientButton
                href="/portfolio"
                variant="outline"
                size="lg"
                icon={<Play className="w-5 h-5" />}
              >
                View Our Work
              </GradientButton>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative z-10 py-4 bg-card/80 backdrop-blur-sm border-t border-border mt-auto">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8">
                {["DIGITAL AGENCY", "WEB DESIGN", "BRANDING", "SOCIAL MEDIA", "E-COMMERCE", "MOBILE OPTIMIZATION"].map((text) => (
                  <span key={text} className="text-muted-foreground font-medium text-sm tracking-widest flex items-center gap-8">
                    {text} <span className="text-cyan">•</span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
