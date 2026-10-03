import { imageSrc } from "@/lib/image";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import logo from "@/assets/nosyra-logo-cropped.png";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    const formData = new FormData(); formData.append("entry.433429386", email);
    try {
      await fetch("https://docs.google.com/forms/d/e/1FAIpQLSdmtpmVrvxtXE15Yo9SvCZZT8TMadT_heJF1fpa_ms4Pro4pg/formResponse", { method: "POST", mode: "no-cors", body: formData });
      toast({ title: "Subscribed", description: "You've been added to our newsletter." }); setEmail("");
    } catch { toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" }); }
    finally { setLoading(false); }
  };

  const footerLinks = {
    company: [{ name: "About Us", path: "/about" }, { name: "Our Team", path: "/about" }, { name: "Careers", path: "/contact" }, { name: "Contact", path: "/contact" }],
    services: [{ name: "Web Design", path: "/services" }, { name: "E-Commerce", path: "/services" }, { name: "Branding", path: "/services" }, { name: "Digital Marketing", path: "/services" }],
    resources: [{ name: "Portfolio", path: "/portfolio" }, { name: "Case Studies", path: "/portfolio" }, { name: "Blog", path: "/blog" }, { name: "FAQ", path: "/faq" }],
  };
  const socialLinks = [{ icon: Facebook, href: "#", label: "Facebook" }, { icon: Twitter, href: "#", label: "Twitter" }, { icon: Instagram, href: "#", label: "Instagram" }, { icon: Linkedin, href: "#", label: "LinkedIn" }];

  return (
    <footer className="relative overflow-hidden border-t border-border/70 bg-card">
      <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-cyan/10 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-10 border-b border-border/70 py-14 lg:grid-cols-[1.3fr_.9fr] lg:items-end">
          <div><p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-cyan">Stay close to the work</p><h3 className="max-w-xl text-3xl font-semibold leading-tight md:text-5xl">Useful digital thinking, when it is worth your time.</h3></div>
          <form onSubmit={handleSubscribe} className="flex w-full gap-2"><Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" required className="h-12 rounded-full border-border bg-background/60 px-5 text-foreground" /><Button type="submit" disabled={loading} className="h-12 rounded-full bg-cyan px-5 text-primary-foreground hover:bg-cyan-glow">{loading ? "..." : <Send className="h-4 w-4" />}</Button></form>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div><Link to="/" className="mb-6 inline-block"><img src={imageSrc(logo)} alt="Nosyra Digital" className="h-12 w-auto max-w-[190px] object-contain" /></Link><p className="mb-6 max-w-sm text-sm leading-relaxed text-muted-foreground">An independent digital studio from Lagos, building clear, credible systems for businesses moving forward.</p><div className="flex gap-2">{socialLinks.map(({ icon: Icon, href, label }) => <motion.a key={label} href={href} aria-label={label} whileHover={{ y: -3 }} className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/50 text-muted-foreground transition-colors hover:border-cyan hover:text-cyan"><Icon className="h-4 w-4" /></motion.a>)}</div></div>
          {Object.entries(footerLinks).map(([title, links]) => <div key={title}><h4 className="mb-5 font-mono text-[10px] uppercase tracking-[0.24em] text-cyan">{title}</h4><ul className="space-y-3">{links.map((link) => <li key={link.name}><Link to={link.path} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link.name}</Link></li>)}</ul></div>)}
          <div><h4 className="mb-5 font-mono text-[10px] uppercase tracking-[0.24em] text-cyan">Contact</h4><div className="space-y-4 text-sm text-muted-foreground"><div className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-cyan" />Lagos, Nigeria</div><div className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-cyan" />+234 705 846 6586</div><div className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-cyan" />info@nosyradigital.com.ng</div></div></div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-border/70 py-6 text-xs text-muted-foreground sm:flex-row"><p>© {new Date().getFullYear()} Nosyra Digital. All rights reserved.</p><div className="flex gap-5"><Link to="/privacy-policy" className="hover:text-cyan">Privacy Policy</Link><Link to="/terms-and-conditions" className="hover:text-cyan">Terms & Conditions</Link></div></div>
      </div>
      <motion.button onClick={scrollToTop} whileHover={{ y: -3 }} aria-label="Back to top" className="fixed bottom-6 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-cyan/30 bg-card text-cyan shadow-lg shadow-black/30"><ArrowUp className="h-4 w-4" /></motion.button>
    </footer>
  );
};

export default Footer;
