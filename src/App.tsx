import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Preloader from "@/components/ui/Preloader";
// Public Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import LandingPage from "./pages/LandingPage";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";
// Blog
import BlogListing from "./pages/BlogListing";
import BlogPost from "./pages/BlogPost";
import BlogCategory from "./pages/BlogCategory";
// Admin
import Login from "./components/admin/Login";
import Dashboard from "./components/admin/Dashboard";
import Posts from "./components/admin/Posts";
import Categories from "./components/admin/Categories";
import PostEditor from "./components/admin/PostEditor";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {isLoading && (
            <Preloader onComplete={() => setIsLoading(false)} />
          )}
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* PUBLIC */}
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/landingpage" element={<LandingPage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:slug" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              {/* BLOG */}
              <Route path="/blog" element={<BlogListing />} />
              <Route path="/blog/category/:slug" element={<BlogCategory />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              {/* ADMIN */}
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/admin/posts" element={<Posts />} />
              <Route path="/admin/posts/new" element={<PostEditor />} />
              <Route path="/admin/posts/edit/:id" element={<PostEditor />} />
              <Route path="/admin/categories" element={<Categories />} />
              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
