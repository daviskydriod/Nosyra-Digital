import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

const TestimonialsSection = () => {
  // Only render once there's at least one real testimonial — an empty/fake
  // section is worse than no section at all.
  if (testimonials.length === 0) return null;

  // Duplicate the list for a seamless loop only if there are enough entries
  // to make the scroll feel intentional rather than obviously repeating 1-2 cards.
  const shouldScroll = testimonials.length >= 3;
  const displayList = shouldScroll ? [...testimonials, ...testimonials] : testimonials;

  // Scale duration with the number of cards so speed stays consistent
  // regardless of how many testimonials you add — roughly 6s per card.
  const scrollDuration = testimonials.length * 6;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeading
          badge="Testimonials"
          title="What Clients Say"
          subtitle="Real feedback from real clients."
        />

        <div className="mt-16 overflow-hidden">
          <motion.div
            className={`flex gap-6 ${shouldScroll ? "flex-nowrap w-max" : "flex-wrap justify-center"}`}
            {...(shouldScroll && {
              animate: { x: ["0%", "-50%"] },
              transition: {
                x: {
                  duration: scrollDuration,
                  repeat: Infinity,
                  ease: "linear",
                },
              },
            })}
          >
            {displayList.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[350px] md:w-[400px]"
                whileHover={{ scale: 1.02 }}
              >
                <GlassCard className="p-6 h-full" hover={false}>
                  <div className="mb-4">
                    <Quote className="w-10 h-10 text-cyan/30" />
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-cyan text-cyan" />
                    ))}
                  </div>

                  <p className="text-foreground/90 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan to-navy flex items-center justify-center text-white font-semibold border-2 border-cyan/20">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                        {testimonial.source && ` · ${testimonial.source}`}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;