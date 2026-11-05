import { imageSrc } from "@/lib/image";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp, ExternalLink } from "lucide-react";
import logo from "@/assets/nosyra-logo-cropped.png";

const GOOGLE_BUSINESS_PROFILE = "https://share.google/pXii4O9yL0WrVrZ9m";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const footerLinks = {
    company: [{ name: "About Nosyra", path: "/about" }, { name: "Our approach", path: "/process" }, { name: "Contact", path: "/contact" }],
    services: [{ name: "Website Development", path: "/services" }, { name: "E-Commerce & Catalogues", path: "/services" }, { name: "Branding", path: "/services" }, { name: "Creative Content", path: "/services" }],
    resources: [{ name: "Portfolio", path: "/portfolio" }, { name: "Case Studies", path: "/portfolio" }, { name: "Insights", path: "/blog" }, { name: "FAQ", path: "/faq" }],
  };
  const socialLinks = [{ icon: Facebook, href: "#", label: "Facebook" }, { icon: Twitter, href: "#", label: "Twitter" }, { icon: Instagram, href: "#", label: "Instagram" }, { icon: Linkedin, href: "#", label: "LinkedIn" }];

  return (
    <footer className="relative overflow-hidden border-t border-border/70 bg-card">
      <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-cyan/10 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-10 border-b border-border/70 py-14 lg:grid-cols-[1.3fr_.9fr] lg:items-end">
          <div><p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-cyan">Founder-led digital work</p><h3 className="max-w-xl text-3xl font-semibold leading-tight md:text-5xl">Clear digital experiences for businesses ready to move forward.</h3></div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link to="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-cyan px-6 text-sm font-semibold text-white transition hover:bg-cyan-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2">Discuss your project</Link>
            <a href={GOOGLE_BUSINESS_PROFILE} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-background/60 px-5 text-sm font-semibold text-foreground transition hover:border-cyan hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2">View our Google Business Profile <ExternalLink className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div><Link to="/" className="mb-6 inline-block"><img src={imageSrc(logo)} alt="Nosyra Digital" className="h-12 w-auto max-w-[190px] object-contain" /></Link><p className="mb-6 max-w-sm text-sm leading-relaxed text-muted-foreground">Nosyra Digital is a founder-led digital agency founded in November 2025, helping businesses in Nigeria and Ghana build clearer websites, catalogues, and practical digital experiences.</p><div className="flex gap-2">{socialLinks.map(({ icon: Icon, href, label }) => <motion.a key={label} href={href} aria-label={label} whileHover={{ y: -3 }} className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/50 text-muted-foreground transition-colors hover:border-cyan hover:text-cyan"><Icon className="h-4 w-4" /></motion.a>)}</div></div>
          {Object.entries(footerLinks).map(([title, links]) => <div key={title}><h4 className="mb-5 font-mono text-[10px] uppercase tracking-[0.24em] text-cyan">{title}</h4><ul className="space-y-3">{links.map((link) => <li key={link.name}><Link to={link.path} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link.name}</Link></li>)}</ul></div>)}
          <div><h4 className="mb-5 font-mono text-[10px] uppercase tracking-[0.24em] text-cyan">Contact</h4><div className="space-y-4 text-sm text-muted-foreground"><div className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-cyan" />Lagos, Nigeria</div><div className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-cyan" />+234 705 846 6586</div><div className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-cyan" />info@nosyradigital.com.ng</div></div></div>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-border/70 py-6 text-xs text-muted-foreground sm:flex-row"><p>© {new Date().getFullYear()} Nosyra Digital. All rights reserved.</p><div className="flex gap-5"><Link to="/privacy-policy" className="hover:text-cyan">Privacy Policy</Link><Link to="/terms-and-conditions" className="hover:text-cyan">Terms & Conditions</Link></div></div>
      </div>
      <motion.button onClick={scrollToTop} whileHover={{ y: -3 }} aria-label="Back to top" className="fixed bottom-6 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-cyan/30 bg-card text-cyan shadow-lg shadow-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"><ArrowUp className="h-4 w-4" /></motion.button>
    </footer>
  );
};
export default Footer;
