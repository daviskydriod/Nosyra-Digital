import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import GradientButton from "@/components/ui/GradientButton";
import { useCountUp } from "@/hooks/useCountUp";
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, Clock, Users } from "lucide-react";

// Project data (in a real app, this would come from an API)
const projectsData: Record<string, {
  id: number;
  title: string;
  category: string;
  client: string;
  year: string;
  duration: string;
  team: string;
  heroImage: string;
  description: string;
  challenge: string;
  solution: string;
  results: { label: string; value: number; suffix: string }[];
  gallery: string[];
  technologies: string[];
  testimonial?: { quote: string; author: string; role: string };
  relatedProjects: number[];
}> = {
  "1": {
    id: 1,
    title: "TechFlow SaaS Platform",
    category: "Websites",
    client: "TechFlow Inc.",
    year: "2024",
    duration: "3 months",
    team: "5 members",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    description: "TechFlow needed a modern, scalable SaaS platform that could handle complex data analytics while maintaining an intuitive user experience.",
    challenge: "The existing platform was outdated, slow, and difficult to navigate. Users were abandoning the platform due to poor UX, and the tech stack couldn't support new features.",
    solution: "We rebuilt the entire platform from scratch using React and Node.js, implementing a modern design system with real-time data visualization. The new architecture supports horizontal scaling and includes advanced caching for optimal performance.",
    results: [
      { label: "User Engagement", value: 150, suffix: "%" },
      { label: "Load Time Reduction", value: 60, suffix: "%" },
      { label: "New Users/Month", value: 2500, suffix: "+" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    testimonial: {
      quote: "Nosyra Digital transformed our platform completely. The new design is beautiful and our users love it!",
      author: "John Smith",
      role: "CEO, TechFlow Inc.",
    },
    relatedProjects: [2, 4],
  },
  "2": {
    id: 2,
    title: "Luxe Fashion Store",
    category: "E-Commerce",
    client: "Luxe Fashion",
    year: "2024",
    duration: "2 months",
    team: "4 members",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
    description: "A premium fashion brand needed an e-commerce platform that matched their luxury brand identity and provided a seamless shopping experience.",
    challenge: "The client's previous store had a high cart abandonment rate and the checkout process was complicated. The mobile experience was poor, losing 40% of potential customers.",
    solution: "We designed a stunning, mobile-first e-commerce experience with a streamlined checkout process. We integrated multiple payment options and implemented a smart product recommendation engine.",
    results: [
      { label: "Sales Increase", value: 300, suffix: "%" },
      { label: "Cart Abandonment Down", value: 45, suffix: "%" },
      { label: "Mobile Conversions", value: 200, suffix: "%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80",
    ],
    technologies: ["Shopify", "React", "Custom Theme", "Stripe"],
    testimonial: {
      quote: "Our online sales tripled within three months. The new store perfectly captures our brand essence.",
      author: "Maria Garcia",
      role: "Founder, Luxe Fashion",
    },
    relatedProjects: [5, 3],
  },
  "3": {
    id: 3,
    title: "GreenLife Organics",
    category: "Branding",
    client: "GreenLife",
    year: "2023",
    duration: "6 weeks",
    team: "3 members",
    heroImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80",
    description: "A complete brand identity redesign for an organic products company looking to expand their market presence.",
    challenge: "GreenLife had an inconsistent brand presence across different channels. Their visual identity didn't reflect their premium positioning in the organic market.",
    solution: "We created a comprehensive brand identity including a new logo, color palette, typography system, and detailed brand guidelines. We also designed packaging for their product line.",
    results: [
      { label: "Brand Recognition", value: 85, suffix: "%" },
      { label: "Social Engagement", value: 250, suffix: "%" },
      { label: "Premium Perception", value: 40, suffix: "%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80",
    ],
    technologies: ["Figma", "Adobe CC", "Brand Strategy"],
    relatedProjects: [6, 2],
  },
  "4": {
    id: 4,
    title: "FinanceHub App",
    category: "Websites",
    client: "FinanceHub",
    year: "2024",
    duration: "4 months",
    team: "6 members",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    description: "A comprehensive financial management platform with real-time analytics and reporting capabilities.",
    challenge: "Financial data visualization was complex and users struggled to understand their portfolio performance at a glance.",
    solution: "We designed intuitive dashboards with interactive charts and created a mobile app for on-the-go access to financial insights.",
    results: [
      { label: "User Retention", value: 90, suffix: "%" },
      { label: "Daily Active Users", value: 5000, suffix: "+" },
      { label: "Feature Adoption", value: 75, suffix: "%" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    ],
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    relatedProjects: [1, 5],
  },
  "5": {
    id: 5,
    title: "Urban Eats Delivery",
    category: "E-Commerce",
    client: "Urban Eats",
    year: "2023",
    duration: "3 months",
    team: "5 members",
    heroImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80",
    description: "A food delivery platform connecting local restaurants with hungry customers.",
    challenge: "Existing food delivery apps were cluttered and slow. Restaurant partners needed better tools to manage orders.",
    solution: "We built a clean, fast ordering experience with a powerful restaurant management dashboard.",
    results: [
      { label: "Order Volume", value: 400, suffix: "%" },
      { label: "Delivery Time", value: 25, suffix: "min avg" },
      { label: "Restaurant Partners", value: 150, suffix: "+" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    ],
    technologies: ["React Native", "Node.js", "Firebase", "Stripe"],
    relatedProjects: [2, 4],
  },
  "6": {
    id: 6,
    title: "Wellness Studio Social",
    category: "Social Media",
    client: "Zen Wellness",
    year: "2024",
    duration: "4 weeks",
    team: "2 members",
    heroImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80",
    description: "Complete social media kit for a premium wellness and yoga studio.",
    challenge: "Inconsistent social media presence and low engagement rates were limiting growth.",
    solution: "We created a comprehensive social media kit with templates, content guidelines, and a posting strategy.",
    results: [
      { label: "Follower Growth", value: 500, suffix: "%" },
      { label: "Engagement Rate", value: 12, suffix: "%" },
      { label: "Monthly Reach", value: 50000, suffix: "+" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=800&q=80",
    ],
    technologies: ["Figma", "Canva", "Content Strategy"],
    relatedProjects: [3, 2],
  },
};

const ResultCard = ({ result, index }: { result: { label: string; value: number; suffix: string }; index: number }) => {
  const { count, ref } = useCountUp(result.value, 2000);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="text-center p-6"
    >
      <div className="text-4xl md:text-5xl font-poppins font-bold text-gradient mb-2">
        {count}{result.suffix}
      </div>
      <div className="text-muted-foreground">{result.label}</div>
    </motion.div>
  );
};

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData[id || "1"];

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link to="/portfolio" className="text-cyan hover:underline">
              Back to Portfolio
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end pb-20 pt-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <motion.img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-cyan transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-cyan bg-cyan/10 rounded-full border border-cyan/20"
          >
            {project.category}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6"
          >
            {project.title.split(" ").map((word, i, arr) => (
              <span key={i}>
                {i === arr.length - 1 ? (
                  <span className="text-gradient">{word}</span>
                ) : (
                  word + " "
                )}
              </span>
            ))}
          </motion.h1>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-6 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan" />
              <span>{project.client}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-cyan" />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan" />
              <span>{project.duration}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <AnimatedSection animation="fadeLeft">
              <GlassCard className="p-8 h-full">
                <h2 className="text-2xl font-poppins font-bold text-foreground mb-4">
                  The <span className="text-cyan">Challenge</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection animation="fadeRight">
              <GlassCard className="p-8 h-full" gradient>
                <h2 className="text-2xl font-poppins font-bold text-foreground mb-4">
                  Our <span className="text-gradient">Solution</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">
              The <span className="text-gradient">Results</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {project.results.map((result, index) => (
              <GlassCard key={result.label} className="overflow-hidden">
                <ResultCard result={result} index={index} />
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">
              Project <span className="text-gradient">Gallery</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <AnimatedSection key={index} animation="scaleIn" delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="aspect-video rounded-2xl overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">
              Technologies <span className="text-gradient">Used</span>
            </h2>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-3 rounded-xl glass border border-border/50 hover:border-cyan/30"
              >
                <span className="font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center">
                <div className="text-6xl text-cyan/20 mb-6">"</div>
                <p className="text-xl md:text-2xl text-foreground italic mb-8 leading-relaxed">
                  {project.testimonial.quote}
                </p>
                <div>
                  <div className="font-poppins font-semibold text-foreground">
                    {project.testimonial.author}
                  </div>
                  <div className="text-muted-foreground">{project.testimonial.role}</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-6">
              Ready for Similar <span className="text-gradient">Results</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help achieve your business goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <GradientButton href="/contact" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                Start Your Project
              </GradientButton>
              <GradientButton href="/portfolio" variant="outline" size="lg">
                View More Projects
              </GradientButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudy;
