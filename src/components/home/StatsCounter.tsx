import { motion } from "framer-motion";
import { Compass, MapPin, UserRound } from "lucide-react";

const stats = [
  { icon: UserRound, value: "Founder-led", label: "Direct strategic oversight" },
  { icon: MapPin, value: "Nigeria + Ghana", label: "Current client markets" },
  { icon: Compass, value: "Web-first", label: "Practical digital experiences" },
];

const StatsCounter = () => <section className="border-y border-border bg-muted/35 py-20 lg:py-24"><div className="mx-auto max-w-7xl px-5 lg:px-10"><div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"><div><p className="mb-4 text-xs font-semibold uppercase tracking-[.24em] text-cyan">How we work</p><h2 className="text-3xl font-semibold tracking-[-.05em] md:text-4xl">Clear scope. Direct collaboration.</h2></div><p className="max-w-sm text-sm leading-relaxed text-muted-foreground">Nosyra Digital is a founder-led agency focused on useful websites, catalogues, and digital experiences.</p></div><div className="grid gap-4 border-y border-border md:grid-cols-3">{stats.map((stat, index) => <motion.div key={stat.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="flex items-start gap-4 border-border py-6 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"><stat.icon className="mt-1 h-5 w-5 shrink-0 text-cyan" /><div><p className="text-xl font-semibold tracking-tight text-foreground">{stat.value}</p><p className="mt-1 text-sm text-muted-foreground">{stat.label}</p></div></motion.div>)}</div></div></section>;
export default StatsCounter;
