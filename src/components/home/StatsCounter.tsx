import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Users, Award, Clock } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  {
    icon: Briefcase,
    value: 150,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    value: 80,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: Clock,
    value: 5,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Award,
    value: 12,
    suffix: "",
    label: "Awards Won",
  },
];

const StatItem = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const { count, ref } = useCountUp(stat.value, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-cyan/30 transition-all duration-300">
        {/* Icon with Glow */}
        <div className="relative mx-auto w-16 h-16 mb-6">
          <div className="absolute inset-0 bg-cyan/20 rounded-full blur-xl group-hover:bg-cyan/30 transition-colors" />
          <div className="relative w-full h-full rounded-full bg-cyan/10 flex items-center justify-center border border-cyan/20">
            <stat.icon className="w-8 h-8 text-cyan" />
          </div>
        </div>

        {/* Counter */}
        <motion.div className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-2">
          <span className="text-gradient">{count}</span>
          <span className="text-cyan">{stat.suffix}</span>
        </motion.div>

        {/* Label */}
        <p className="text-muted-foreground font-medium">{stat.label}</p>

        {/* Circular Progress Ring */}
        <motion.div
          className="absolute top-4 right-4 w-8 h-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="16"
              cy="16"
              r="14"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              fill="none"
            />
            <motion.circle
              cx="16"
              cy="16"
              r="14"
              stroke="hsl(var(--cyan))"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: index * 0.2 }}
              style={{
                strokeDasharray: "88",
              }}
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

const StatsCounter = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
      
      {/* Particle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isInView && [...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              y: [0, -50],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
            Numbers That <span className="text-gradient">Speak</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our track record of success reflects our commitment to delivering exceptional results for every client.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
