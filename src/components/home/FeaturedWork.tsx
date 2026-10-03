import { imageSrc } from "@/lib/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram } from "lucide-react";
import { Link } from "@/lib/navigation";
import { projects } from "@/data/projectsData";

const FeaturedWork = () => {
  const web = projects.filter((p) => p.type === "web").slice(0, 3);
  const social = projects.filter((p) => p.type === "social").slice(0, 1)[0];
  const lead = web[0];
  const secondary = web.slice(1);

  return (
    <section className="relative overflow-hidden border-b border-border/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mb-14 grid gap-6 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <div><span className="font-mono text-[10px] uppercase tracking-[.25em] text-cyan">02 / Selected work</span><h2 className="mt-5 max-w-sm text-4xl font-semibold leading-[.94] tracking-[-.06em] text-foreground lg:text-6xl">Work that earns attention.</h2></div>
          <div className="flex items-end justify-between gap-6 border-t border-border/60 pt-5"><p className="max-w-md text-sm leading-relaxed text-muted-foreground">A few digital systems built around real business problems — not decoration for decoration's sake.</p><Link to="/portfolio" className="hidden shrink-0 items-center gap-2 font-mono text-[10px] uppercase tracking-[.2em] text-cyan transition hover:gap-3 sm:flex">View all work <ArrowUpRight className="h-4 w-4" /></Link></div>
        </div>

        <div className="grid gap-5 lg:grid-cols-12 lg:grid-rows-[auto_auto]">
          <ProjectCard project={lead} index="01" className="lg:col-span-7 lg:row-span-2" />
          {secondary.map((project, i) => <ProjectCard key={project.id} project={project} index={`0${i + 2}`} className="lg:col-span-5" compact />)}
          {social && <SocialCard project={social} />}
        </div>
        <Link to="/portfolio" className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.2em] text-cyan sm:hidden">View all work <ArrowUpRight className="h-4 w-4" /></Link>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, className, compact = false }: { project: (typeof projects)[0]; index: string; className?: string; compact?: boolean }) => (
  <Link to={`/portfolio/${project.slug}`} className={`group ${className ?? ""}`}>
    <motion.article whileHover={{ y: -5 }} transition={{ duration: .25 }} className={`relative h-full overflow-hidden border border-border bg-card ${compact ? "min-h-[240px]" : "min-h-[460px]"}`}>
      <img src={imageSrc(project.image)} alt={project.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative flex h-full min-h-[inherit] flex-col justify-between p-5 lg:p-7"><div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[.2em] text-white/60"><span>{index} / {project.category}</span><ArrowUpRight className="h-4 w-4 text-cyan transition group-hover:translate-x-1 group-hover:-translate-y-1" /></div><div><h3 className={`${compact ? "text-2xl" : "text-4xl lg:text-5xl"} max-w-xl font-semibold leading-[.94] tracking-[-.05em] text-white`}>{project.title}</h3><p className="mt-3 max-w-md text-sm leading-relaxed text-white/65">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.slice(0, 3).map((tag) => <span key={tag} className="border border-white/20 px-2 py-1 text-[10px] uppercase tracking-wider text-white/70">{tag}</span>)}</div></div></div>
    </motion.article>
  </Link>
);

const SocialCard = ({ project }: { project: (typeof projects)[0] }) => {
  const gallery = (project as any).gallery ?? [project.image];
  return <Link to={`/portfolio/${project.slug}`} className="group lg:col-span-5"><motion.article whileHover={{ y: -5 }} className="grid h-full min-h-[240px] grid-cols-[1.1fr_.9fr] overflow-hidden border border-border bg-card"><div className="grid grid-cols-2 gap-1 overflow-hidden bg-muted">{gallery.slice(0, 2).map((img: string, i: number) => <img key={i} src={imageSrc(img)} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />)}</div><div className="flex flex-col justify-between p-5"><div className="flex items-center justify-between"><Instagram className="h-4 w-4 text-pink-400" /><ArrowUpRight className="h-4 w-4 text-cyan" /></div><div><span className="font-mono text-[10px] uppercase tracking-[.18em] text-pink-400">Social / Content kit</span><h3 className="mt-2 text-xl font-semibold leading-tight tracking-[-.04em] text-foreground">{project.title}</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{project.description}</p></div></div></motion.article></Link>;
};

export default FeaturedWork;
