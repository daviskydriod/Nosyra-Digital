import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  onClick?: () => void;
}

const GlassCard = ({
  children,
  className,
  hover = true,
  gradient = false,
  onClick,
}: GlassCardProps) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.01 } : undefined}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={cn(
        "relative rounded-xl overflow-hidden bg-card border-2 border-border transition-all duration-300",
        hover && "hover:border-cyan hover:shadow-[0_0_20px_hsl(var(--cyan)/0.15)] cursor-pointer",
        gradient && "border-cyan/30",
        className
      )}
    >
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
};

export default GlassCard;
