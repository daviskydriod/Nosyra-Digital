import { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center" | "right";
  className?: string;
  children?: ReactNode;
}

const SectionHeading = ({
  title,
  subtitle,
  badge,
  align = "center",
  className,
  children,
}: SectionHeadingProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const alignStyles = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div ref={ref} className={cn("max-w-3xl", alignStyles[align], className)}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-cyan bg-cyan/10 rounded-full border border-cyan/20"
        >
          {badge}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-4"
      >
        {title.split(" ").map((word, index, arr) => (
          <span key={index}>
            {index === arr.length - 1 ? (
              <span className="text-gradient">{word}</span>
            ) : (
              word + " "
            )}
          </span>
        ))}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground"
        >
          {subtitle}
        </motion.p>
      )}

      {children}
    </div>
  );
};

export default SectionHeading;
