import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
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
    <section className="relative overflow-hidden border-b border-border/60 py-24 lg:py-32">
      <div className="absolute inset-0 bg-muted/20" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-3xl">
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-cyan">04 / Proof from the work</p>
          <h2 className="max-w-xl text-4xl font-semibold leading-[.94] tracking-[-.06em] text-foreground md:text-5xl">Built together. Remembered by clients.</h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">A few words from the people who trusted us with the next stage of their business.</p>
        </div>

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
                <article className="h-full border border-border bg-card p-6 shadow-[0_12px_35px_hsl(222_47%_11%/.05)] transition-colors hover:border-cyan/40">
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
                </article>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
