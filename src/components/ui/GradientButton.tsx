import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
}

const GradientButton = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  icon,
}: GradientButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center font-poppins font-semibold rounded-lg overflow-hidden transition-all duration-300";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-3",
  };

  const variantStyles = {
    primary: "bg-cyan text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--cyan)/0.5)] pulse-glow",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border-2 border-cyan text-cyan hover:bg-cyan hover:text-primary-foreground",
  };

  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon}
      </span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.5 }}
      />
    </>
  );

  const combinedStyles = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link to={href} className={combinedStyles}>
          {buttonContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={combinedStyles}
    >
      {buttonContent}
    </motion.button>
  );
};

export default GradientButton;
