import { imageSrc } from "@/lib/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Instagram, LayoutGrid } from "lucide-react";
import { Link } from "@/lib/navigation";
import Layout from "@/components/layout/Layout";
import { projects } from "@/data/projectsData";

const filters = ["All work", "Web & E-Commerce", "Social Media"];

const Portfolio = () => {
  const [filter, setFilter] = useState("All work");
  const web = useMemo(() => projects.filter((p) => p.type === "web"), []);
  const social = useMemo(() => projects.filter((p) => p.type === "social"), []);
  const showWeb = filter !== "Social Media";
  const showSocial = filter !== "Web & E-Commerce";

  return <Layout>
    <section className="border-b border-border/60 pt-32 lg:pt-44">
      <div className="mx-auto max-w-7xl px-5 pb-16 lg:px-10 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end"><div><span className="font-mono text-[10px] uppercase tracking-[.25em] text-cyan">Archive / 2022—2026</span><h1 className="mt-6 max-w-3xl text-[clamp(3.8rem,9vw,9.5rem)] font-semibold leading-[.8] tracking-[-.08em] text-foreground">Selected<br /><span className="text-cyan">work.</span></h1></div><div className="border-t border-border/60 pt-5 lg:mb-2"><p className="max-w-md text-base leading-relaxed text-muted-foreground">Digital experiences, commerce platforms, and content systems designed to make businesses easier to choose.</p><div className="mt-8 flex flex-wrap gap-2">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`border px-4 py-2 text-[10px] font-semibold uppercase tracking-[.18em] transition ${filter === item ? "border-cyan bg-cyan text-primary-foreground" : "border-border text-muted-foreground hover:border-cyan/60 hover:text-foreground"}`}>{item}</button>)}</div></div></div>
      </div>
      <div className="border-t border-border/60"><div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-border/60 px-5 lg:px-10"><div className="py-4 font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground"><span className="block text-2xl font-semibold tracking-normal text-foreground">{projects.length}</span>Projects</div><div className="py-4 pl-4 font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground lg:pl-8"><span className="block text-2xl font-semibold tracking-normal text-foreground">{web.length}</span>Web systems</div><div className="py-4 pl-4 font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground lg:pl-8"><span className="block text-2xl font-semibold tracking-normal text-foreground">{social.length}</span>Content kits</div></div></div>
    </section>

    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
      <AnimatePresence mode="popLayout">
        {showWeb && <motion.section key="web" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><div className="mb-8 flex items-center gap-4"><span className="font-mono text-[10px] uppercase tracking-[.25em] text-cyan">01 / Web & commerce</span><span className="h-px flex-1 bg-border/70" /><span className="font-mono text-[10px] text-muted-foreground">{web.length} projects</span></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">{web.map((project, i) => <WorkCard key={project.id} project={project} index={i} className={i === 0 ? "lg:col-span-7 lg:row-span-2" : i % 3 === 1 ? "lg:col-span-5" : "lg:col-span-5"} lead={i === 0} />)}</div></motion.section>}
        {showSocial && <motion.section key="social" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }} className="mt-24"><div className="mb-8 flex items-center gap-4"><span className="font-mono text-[10px] uppercase tracking-[.25em] text-pink-400">02 / Social media</span><span className="h-px flex-1 bg-border/70" /><span className="font-mono text-[10px] text-muted-foreground">Content systems</span></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{social.map((project, i) => <SocialCard key={project.id} project={project} index={i} />)}</div></motion.section>}
      </AnimatePresence>
    </div>
  </Layout>;
};

const WorkCard = ({ project, index, className, lead = false }: { project: (typeof projects)[0]; index: number; className: string; lead?: boolean }) => <motion.div layout initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .04 }} className={className}><Link to={`/portfolio/${project.slug}`} className="group block h-full"><article className={`relative h-full min-h-[280px] overflow-hidden border border-border bg-card ${lead ? "lg:min-h-[620px]" : "lg:min-h-[300px]"}`}><img src={imageSrc(project.image)} alt={project.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-black/55" /><div className="relative flex h-full min-h-[inherit] flex-col justify-between p-5 lg:p-7"><div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[.2em] text-white/60"><span>{String(index + 1).padStart(2, "0")} / {project.category}</span><ArrowUpRight className="h-4 w-4 text-cyan transition group-hover:-translate-y-1 group-hover:translate-x-1" /></div><div><h2 className={`${lead ? "text-4xl lg:text-6xl" : "text-2xl lg:text-3xl"} max-w-xl font-semibold leading-[.92] tracking-[-.06em] text-white`}>{project.title}</h2><p className="mt-3 max-w-md text-sm leading-relaxed text-white/65">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.slice(0, 3).map((tag) => <span key={tag} className="border border-white/20 px-2 py-1 text-[10px] uppercase tracking-wider text-white/70">{tag}</span>)}</div></div></div></article></Link></motion.div>;

const SocialCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => { const gallery = (project as any).gallery ?? [project.image]; return <motion.div layout initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .05 }}><Link to={`/portfolio/${project.slug}`} className="group block border border-border bg-card"><div className="relative aspect-[4/3] overflow-hidden"><div className="grid h-full grid-cols-3 gap-1">{gallery.slice(0, 3).map((img: string, i: number) => <img key={i} src={imageSrc(img)} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />)}</div><span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 backdrop-blur"><Instagram className="h-4 w-4 text-pink-400" /></span></div><div className="p-5"><div className="flex items-center justify-between"><span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.18em] text-pink-400"><LayoutGrid className="h-3 w-3" /> Content kit</span><ArrowUpRight className="h-4 w-4 text-cyan transition group-hover:-translate-y-1 group-hover:translate-x-1" /></div><h3 className="mt-3 text-xl font-semibold tracking-[-.04em] text-foreground">{project.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p><div className="mt-4 flex flex-wrap gap-2">{((project as any).platforms ?? []).map((p: string) => <span key={p} className="border border-border px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">{p}</span>)}</div></div></Link></motion.div>; };

export default Portfolio;
