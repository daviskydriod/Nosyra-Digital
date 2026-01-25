import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useRef } from "react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    id: 1,
    name: "Adebayo Johnson",
    role: "CEO, TechVentures NG",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    content: "Nosyra Digital transformed our online presence completely. Their attention to detail and creative approach exceeded all our expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Chioma Okonkwo",
    role: "Founder, LuxeStyle",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    content: "The e-commerce platform they built for us increased our sales by 300% in just three months. Absolutely incredible work!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emmanuel Nwachukwu",
    role: "Marketing Director, GlobalTech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    content: "Professional, creative, and always on time. Nosyra Digital is our go-to partner for all digital projects.",
    rating: 5,
  },
  {
    id: 4,
    name: "Fatima Hassan",
    role: "Owner, GreenLife Organics",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    content: "They didn't just build a website; they created an experience that our customers love. Highly recommended!",
    rating: 5,
  },
  {
    id: 5,
    name: "Oluwaseun Adeyemi",
    role: "CTO, FinanceHub",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    content: "The team's technical expertise and creative vision are unmatched. They delivered beyond what we imagined.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what our amazing clients have to say about working with us."
        />

        {/* Infinite Carousel */}
        <div className="mt-16 overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[350px] md:w-[400px]"
                whileHover={{ scale: 1.02 }}
              >
                <GlassCard className="p-6 h-full" hover={false}>
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-10 h-10 text-cyan/30" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-cyan text-cyan" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground/90 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-cyan/20"
                    />
                    <div>
                      <h4 className="font-poppins font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
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
