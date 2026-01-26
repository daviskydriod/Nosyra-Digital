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
        "relative rounded-xl overflow-hidden",
        gradient ? "gradient-border" : "glass",
        hover && "cursor-pointer",
        className
      )}
    >
      <div className="relative z-10 h-full">{children}</div>
      
      {/* Simple hover overlay */}
      {hover && (
        <motion.div
          className="absolute inset-0 bg-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />
      )}
    </motion.div>
  );
};

export default GlassCard;
