import { imageSrc } from "@/lib/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, LayoutGrid } from "lucide-react";
import { Link } from "@/lib/navigation";
import Layout from "@/components/layout/Layout";
import { projects } from "@/data/projectsData";

const filters = ["All work", "Web & Digital", "Creative Content"];

const Portfolio = () => {
  const [filter, setFilter] = useState("All work");
  const web = useMemo(() => projects.filter((p) => p.type === "web"), []);
  const social = useMemo(() => projects.filter((p) => p.type === "social"), []);
  const showWeb = filter !== "Creative Content";
  const showSocial = filter !== "Web & Digital";

  return <Layout>
    <section className="border-b border-border/60 pt-32 lg:pt-44">
      <div className="mx-auto max-w-7xl px-5 pb-16 lg:px-10 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <div><span className="font-mono text-[10px] uppercase tracking-[.25em] text-cyan">Portfolio / Selected work</span><h1 className="mt-6 max-w-3xl text-[clamp(3.8rem,9vw,9.5rem)] font-semibold leading-[.8] tracking-[-.08em] text-foreground">Selected<br /><span className="text-cyan">work.</span></h1></div>
          <div className="border-t border-border/60 pt-5 lg:mb-2"><p className="max-w-md text-base leading-relaxed text-muted-foreground">Websites, digital catalogues, and supporting creative work built to make businesses easier to understand and choose.</p><div className="mt-8 flex flex-wrap gap-2">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[.18em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${filter === item ? "border-cyan bg-cyan text-primary-foreground" : "border-border text-muted-foreground hover:border-cyan/60 hover:text-foreground"}`}>{item}</button>)}</div></div>
        </div>
      </div>
      <div className="border-t border-border/60"><div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-border/60 px-5 lg:px-10"><div className="py-4 font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground"><span className="block text-2xl font-semibold tracking-normal text-foreground">{projects.length}</span>Projects</div><div className="py-4 pl-4 font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground lg:pl-8"><span className="block text-2xl font-semibold tracking-normal text-foreground">{web.length}</span>Web & digital</div><div className="py-4 pl-4 font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground lg:pl-8"><span className="block text-2xl font-semibold tracking-normal text-foreground">{social.length}</span>Creative kits</div></div></div>
    </section>
    <div className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
      <AnimatePresence mode="popLayout">
        {showWeb && <motion.section key="web" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><div className="mb-8 flex items-center gap-4"><span className="font-mono text-[10px] uppercase tracking-[.25em] text-cyan">Web & digital experiences</span><span className="h-px flex-1 bg-border/70" /><span className="font-mono text-[10px] text-muted-foreground">{web.length} projects</span></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">{web.map((project, i) => <WorkCard key={project.id} project={project} className={i === 0 ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5"} lead={i === 0} />)}</div></motion.section>}
        {showSocial && <motion.section key="social" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }} className="mt-24"><div className="mb-8 flex items-center gap-4"><span className="font-mono text-[10px] uppercase tracking-[.25em] text-cyan">Additional creative services</span><span className="h-px flex-1 bg-border/70" /><span className="font-mono text-[10px] text-muted-foreground">{social.length} content kits</span></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{social.map((project) => <SocialCard key={project.id} project={project} />)}</div></motion.section>}
      </AnimatePresence>
    </div>
  </Layout>;
};

const WorkCard = ({ project, className, lead = false }: { project: (typeof projects)[number]; className: string; lead?: boolean }) => <motion.article layout initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className={`${className} overflow-hidden border border-border bg-card`}><Link to={`/portfolio/${project.slug}`} className="group block"><div className={`relative overflow-hidden ${lead ? "aspect-[4/3] lg:aspect-auto lg:h-[620px]" : "aspect-[4/3]"}`}><img src={imageSrc(project.image)} alt={project.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-black/45 transition group-hover:bg-black/35" /><div className="absolute inset-x-0 bottom-0 p-5 lg:p-7"><span className="text-xs font-medium uppercase tracking-[.18em] text-white/75">{project.category}</span><h2 className={`${lead ? "text-4xl lg:text-6xl" : "text-2xl lg:text-3xl"} mt-2 max-w-xl font-semibold leading-[.92] tracking-[-.06em] text-white`}>{project.title}</h2></div></div></Link><div className="p-5 lg:p-7"><p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p><div className="mt-5 flex flex-wrap items-center justify-between gap-3"><div className="flex flex-wrap gap-2">{project.tags.slice(0, 3).map((tag) => <span key={tag} className="border border-border px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">{tag}</span>)}</div><Link to={`/portfolio/${project.slug}`} className="inline-flex shrink-0 items-center justify-center rounded-full bg-cyan px-4 py-2 text-xs font-semibold text-white transition hover:bg-cyan-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2">View Project</Link></div></div></motion.article>;

const SocialCard = ({ project }: { project: (typeof projects)[number] }) => { const gallery = (project as any).gallery ?? [project.image]; return <motion.article layout initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="overflow-hidden border border-border bg-card"><Link to={`/portfolio/${project.slug}`} className="group block"><div className="relative aspect-[4/3] overflow-hidden"><div className="grid h-full grid-cols-3 gap-1">{gallery.slice(0, 3).map((img: string, i: number) => <img key={i} src={imageSrc(img)} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />)}</div><span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 backdrop-blur"><Instagram className="h-4 w-4 text-white" /></span></div></Link><div className="p-5"><div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.18em] text-cyan"><LayoutGrid className="h-3 w-3" /> Content kit</div><h3 className="mt-3 text-xl font-semibold tracking-[-.04em] text-foreground">{project.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p><Link to={`/portfolio/${project.slug}`} className="mt-5 inline-flex items-center justify-center rounded-full border border-cyan px-4 py-2 text-xs font-semibold text-cyan transition hover:bg-cyan hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2">View Project</Link></div></motion.article>; };

export default Portfolio;
