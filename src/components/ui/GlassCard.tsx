import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps { children: ReactNode; className?: string; hover?: boolean; gradient?: boolean; onClick?: () => void; }

const GlassCard = ({ children, className, hover = true, onClick }: GlassCardProps) => <motion.div whileHover={hover ? { y: -4 } : undefined} transition={{ duration: .25 }} onClick={onClick} className={cn("relative overflow-hidden rounded-[1.5rem] border border-border bg-white shadow-[0_12px_40px_hsl(222_47%_11%/.05)] transition-all duration-300", hover && "hover:border-cyan/45 hover:shadow-[0_18px_45px_hsl(222_47%_11%/.09)]", className)}><div className="relative z-10 h-full">{children}</div></motion.div>;
export default GlassCard;
