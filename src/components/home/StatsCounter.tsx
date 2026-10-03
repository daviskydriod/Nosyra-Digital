import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Users, Award, Clock } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

// NOTE: keep these numbers real and update as they change — do not inflate.
// This section is off by default in Index.tsx until you're ready to turn it on.
const stats = [
  {
    icon: Briefcase,
    value: 50,
    suffix: "+",
    label: "Projects delivered",
  },
  {
    icon: Users,
    value: 4,
    suffix: "",
    label: "Countries reached",
  },
  {
    icon: Clock,
    value: 14,
    suffix: "-Day",
    label: "Average launch",
  },
  {
    icon: Award,
    value: 4.7,
    suffix: "★",
    label: "Google rating",
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
      <div className="relative h-full border-b border-border/60 p-6 transition-colors duration-300 hover:bg-muted/40 sm:p-8 lg:border-b-0 lg:border-r lg:last:border-r-0">
        {/* Icon with Glow */}
        <div className="relative mb-8 flex h-12 w-12 items-center justify-center border border-cyan/30 bg-cyan/5">
          <div className="absolute -right-1 -top-1 h-2 w-2 bg-cyan" />
          <div className="relative flex h-full w-full items-center justify-center">
            <stat.icon className="h-5 w-5 text-cyan" />
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
          className="absolute right-6 top-6 h-8 w-8 sm:right-8 sm:top-8"
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
    <section className="relative overflow-hidden border-b border-border/60 py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/20" />
      
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

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-cyan">03 / Proof of work</p>
          <h2 className="mb-4 text-4xl font-semibold leading-[.94] tracking-[-.06em] text-foreground md:text-5xl">
            Proof in the numbers
          </h2>
          <p className="max-w-xl text-muted-foreground">
            A snapshot of the work and trust built so far.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 border-y border-border/60 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
