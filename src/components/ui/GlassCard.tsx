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
      
      {/* Shimmer effect on hover */}
      {hover && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0"
          whileHover={{ opacity: 1, x: ["-100%", "100%"] }}
          transition={{ duration: 0.8 }}
        />
      )}
    </motion.div>
  );
};

export default GlassCard;
