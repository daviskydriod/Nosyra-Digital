import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import logo from "@/assets/nosyra-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("entry.433429386", email);

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdmtpmVrvxtXE15Yo9SvCZZT8TMadT_heJF1fpa_ms4Pro4pg/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          body: formData,
        }
      );

      toast({
        title: "Subscribed 🎉",
        description: "You’ve been added to our newsletter.",
      });

      setEmail("");
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/about" },
      { name: "Careers", path: "/contact" },
      { name: "Contact", path: "/contact" },
    ],
    services: [
      { name: "Web Design", path: "/services" },
      { name: "E-Commerce", path: "/services" },
      { name: "Branding", path: "/services" },
      { name: "Digital Marketing", path: "/services" },
    ],
    resources: [
      { name: "Portfolio", path: "/portfolio" },
      { name: "Case Studies", path: "/portfolio" },
      { name: "Blog", path: "/" },
      { name: "FAQ", path: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Newsletter */}
        <div className="py-12 border-b border-border">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-poppins font-bold text-foreground mb-2">
                Stay Updated
              </h3>
              <p className="text-muted-foreground">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
            </div>

            <form 
              onSubmit={handleSubscribe}
              className="flex w-full lg:w-auto gap-3"
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="bg-muted/50 border-border focus:border-cyan w-full lg:w-72"
              />
              <Button 
                type="submit"
                disabled={loading}
                className="bg-cyan text-primary-foreground hover:bg-cyan-glow px-6 shrink-0"
              >
                {loading ? "..." : <Send className="w-4 h-4" />}
              </Button>
            </form>
          </div>

          <p className="text-xs text-muted-foreground mt-2">
            No spam. Only useful updates from Nosyra Digital.
          </p>
        </div>

        {/* Main Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img
                src={logo}
                alt="Nosyra Digital"
                className="h-12 w-auto hover:drop-shadow-[0_0_15px_hsl(var(--cyan)/0.5)] transition-all duration-300"
              />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              We craft exceptional digital experiences that help businesses thrive in the modern world. Your vision, our expertise.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-cyan hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            {footerLinks.company.map((link) => (
              <Link key={link.name} to={link.path} className="block text-muted-foreground hover:text-cyan">
                {link.name}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            {footerLinks.services.map((link) => (
              <Link key={link.name} to={link.path} className="block text-muted-foreground hover:text-cyan">
                {link.name}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan" /> Lagos, Nigeria
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan" /> +234 705 846 6586
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan" /> info@nosyradigital.com.ng
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nosyra Digital. All rights reserved.
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-cyan text-white rounded-full flex items-center justify-center shadow-lg"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
