import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedWork from "@/components/home/FeaturedWork";
import StatsCounter from "@/components/home/StatsCounter";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import { Toaster } from "@/components/ui/toaster";


const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesPreview />
      <FeaturedWork />
      <CTASection />
      <Toaster />

    </Layout>
  );
};

export default Index;
