import { imageSrc } from "@/lib/image";
import { useState, useEffect } from "react";
import { Link, useLocation } from "@/lib/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/nosyra-logo.png";

const navItems = [
  { name: "Work", path: "/portfolio" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Insights", path: "/blog" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [location]);

  return (
    <>
      <motion.div className="fixed top-0 left-0 h-0.5 bg-cyan z-[100] shadow-[0_0_14px_hsl(var(--cyan)/.8)]" style={{ width: `${scrollProgress}%` }} />
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 rounded-full border transition-all duration-300 ${isScrolled ? "bg-card/95 border-cyan/20 shadow-[0_12px_40px_hsl(220_65%_4%/.35)]" : "bg-card/70 border-border/60"} backdrop-blur-xl`}
      >
        <nav className="flex items-center justify-between px-3 py-2.5 md:px-4">
          <Link to="/" className="group flex items-center gap-2.5 pl-1">
            <img src={imageSrc(logo)} alt="Nosyra Digital" className="h-8 md:h-9 w-auto transition-transform duration-300 group-hover:scale-105" />
            <span className="hidden sm:block font-mono text-[9px] uppercase tracking-[0.24em] text-muted-foreground/70">Digital studio</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1 rounded-full border border-border/60 bg-background/40 p-1">
            {navItems.map((item) => {
              const active = location.pathname === item.path || (item.path === "/portfolio" && location.pathname.startsWith("/portfolio/"));
              return (
                <Link key={item.path} to={item.path} className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${active ? "bg-cyan text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Link to="/contact">
              <Button className="group rounded-full bg-cyan px-5 text-xs font-bold text-primary-foreground hover:bg-cyan-glow hover:shadow-[0_0_24px_hsl(var(--cyan)/.35)]">
                Start a project <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </Link>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="rounded-full p-2 text-foreground hover:bg-muted lg:hidden" type="button" aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation">
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 lg:hidden" id="mobile-navigation" role="dialog" aria-label="Mobile navigation" aria-modal="true">
            <div className="absolute inset-0 bg-background/95 px-6 pt-28 backdrop-blur-2xl">
              <div className="editorial-rule mb-8" />
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan">Navigate / 01—06</p>
              <div className="mt-6 flex flex-col">
                {navItems.map((item, index) => (
                  <motion.div key={item.path} initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.06 }} className="border-b border-border/60 py-4">
                    <Link to={item.path} className="flex items-center justify-between text-3xl font-semibold text-foreground hover:text-cyan">{item.name}<ArrowUpRight className="h-5 w-5 text-cyan" /></Link>
                  </motion.div>
                ))}
              </div>
              <Link to="/contact" className="mt-8 inline-flex rounded-full bg-cyan px-6 py-3 text-sm font-bold text-primary-foreground">Start a project <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
