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
import WebDesignLanding from "./pages/WebDesignLanding";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import Process from "./pages/Process";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";
// Blog
import BlogListing from "./pages/BlogListing";
import BlogPost from "./pages/BlogPost";
import BlogCategory from "./pages/BlogCategory";
// Admin
import Login from "./components/admin/Login";
import Dashboard, { AuthProvider, ProtectedRoute } from "./components/admin/Dashboard";
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
              {/* Dedicated ad-traffic landing page — no shared Layout/navbar,
                  single CTA (quote form), built for paid campaigns. */}
              <Route path="/web-design" element={<WebDesignLanding />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:slug" element={<ProjectDetail />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/process" element={<Process />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              {/* BLOG */}
              <Route path="/blog" element={<BlogListing />} />
              <Route path="/blog/category/:slug" element={<BlogCategory />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              {/* ADMIN — wrapped in AuthProvider + ProtectedRoute so the dashboard
                  and content tools require a logged-in session. Login itself stays
                  inside AuthProvider (not ProtectedRoute) so useAuth() works there too. */}
              <Route
                path="/admin/login"
                element={
                  <AuthProvider>
                    <Login />
                  </AuthProvider>
                }
              />
              <Route
                path="/admin"
                element={
                  <AuthProvider>
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  </AuthProvider>
                }
              />
              <Route
                path="/admin/posts"
                element={
                  <AuthProvider>
                    <ProtectedRoute>
                      <Posts />
                    </ProtectedRoute>
                  </AuthProvider>
                }
              />
              <Route
                path="/admin/posts/new"
                element={
                  <AuthProvider>
                    <ProtectedRoute>
                      <PostEditor />
                    </ProtectedRoute>
                  </AuthProvider>
                }
              />
              <Route
                path="/admin/posts/edit/:id"
                element={
                  <AuthProvider>
                    <ProtectedRoute>
                      <PostEditor />
                    </ProtectedRoute>
                  </AuthProvider>
                }
              />
              <Route
                path="/admin/categories"
                element={
                  <AuthProvider>
                    <ProtectedRoute>
                      <Categories />
                    </ProtectedRoute>
                  </AuthProvider>
                }
              />
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