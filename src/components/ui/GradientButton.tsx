import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "@/lib/navigation";
import { cn } from "@/lib/utils";

interface GradientButtonProps { children: ReactNode; href?: string; onClick?: () => void; variant?: "primary" | "secondary" | "outline"; size?: "sm" | "md" | "lg"; className?: string; icon?: ReactNode; }

const GradientButton = ({ children, href, onClick, variant = "primary", size = "md", className, icon }: GradientButtonProps) => { const sizeStyles = { sm: "px-4 py-2 text-sm", md: "px-5 py-3 text-sm", lg: "px-6 py-3.5 text-base" }; const variantStyles = { primary: "bg-cyan text-white hover:bg-cyan-glow", secondary: "bg-secondary text-secondary-foreground hover:bg-muted", outline: "border border-cyan text-cyan hover:bg-cyan hover:text-white" }; const combinedStyles = cn("inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300", sizeStyles[size], variantStyles[variant], className); const content = <span className="flex items-center gap-2">{children}{icon}</span>; if (href) return <motion.div whileHover={{ y: -2 }} whileTap={{ scale: .98 }}><Link to={href} className={combinedStyles}>{content}</Link></motion.div>; return <motion.button whileHover={{ y: -2 }} whileTap={{ scale: .98 }} onClick={onClick} className={combinedStyles}>{content}</motion.button>; };
export default GradientButton;
