import { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps { title: string; subtitle?: string; badge?: string; align?: "left" | "center" | "right"; className?: string; children?: ReactNode; }

const SectionHeading = ({ title, subtitle, badge, align = "center", className, children }: SectionHeadingProps) => { const ref = useRef(null); const isInView = useInView(ref, { once: true, margin: "-80px" }); const alignStyles = { left: "text-left", center: "text-center mx-auto", right: "text-right ml-auto" }; return <div ref={ref} className={cn("max-w-3xl", alignStyles[align], className)}>{badge && <motion.p initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .45 }} className="mb-5 text-xs font-semibold uppercase tracking-[.24em] text-cyan">{badge}</motion.p>}<motion.h2 initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .55, delay: .08 }} className="mb-5 text-4xl font-semibold leading-[.95] tracking-[-.06em] text-foreground md:text-5xl lg:text-6xl">{title}</motion.h2>{subtitle && <motion.p initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .5, delay: .16 }} className="text-base leading-relaxed text-muted-foreground md:text-lg">{subtitle}</motion.p>}{children}</div>; };
export default SectionHeading;
