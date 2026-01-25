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
import logo from "@/assets/nosyra-logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Newsletter Section */}
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
            <div className="flex w-full lg:w-auto gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-muted/50 border-border focus:border-cyan w-full lg:w-72"
              />
              <Button className="bg-cyan text-primary-foreground hover:bg-cyan-glow px-6 shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
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
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-poppins font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-cyan transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-cyan transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                <span>Lagos, Nigeria</span>
              </li>
              <li>
                <a
                  href="tel:+2347058466586"
                  className="flex items-center gap-3 text-muted-foreground hover:text-cyan transition-colors"
                >
                  <Phone className="w-5 h-5 text-cyan shrink-0" />
                  <span>+234 705 846 6586</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@nosyradigital.com.ng"
                  className="flex items-center gap-3 text-muted-foreground hover:text-cyan transition-colors"
                >
                  <Mail className="w-5 h-5 text-cyan shrink-0" />
                  <span>info@nosyradigital.com.ng</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Nosyra Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-cyan transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-cyan text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_hsl(var(--cyan)/0.5)] transition-all duration-300 z-40"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
};

export default Footer;
