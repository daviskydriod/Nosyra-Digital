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
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Blog
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";

// Admin
import Login from "./components/admin/Login";
import Dashboard from "./components/admin/Dashboard";
import Posts from "./components/admin/Posts";
import Categories from "./components/admin/Categories";
import PostEditor from "./components/admin/PostEditor";
import { AuthProvider, ProtectedRoute } from "./components/admin/Dashboard";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

          <Toaster />
          <Sonner />

          <BrowserRouter>
            <AuthProvider>
              <Routes>
                {/* ================= PUBLIC WEBSITE ================= */}
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />

                {/* ================= BLOG ================= */}
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:slug" element={<BlogPost />} />

                {/* ================= ADMIN ================= */}
                <Route path="/admin/login" element={<Login />} />

                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/admin/posts"
                  element={
                    <ProtectedRoute>
                      <Posts />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/admin/posts/new"
                  element={
                    <ProtectedRoute>
                      <PostEditor />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/admin/posts/edit/:id"
                  element={
                    <ProtectedRoute>
                      <PostEditor />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/admin/categories"
                  element={
                    <ProtectedRoute>
                      <Categories />
                    </ProtectedRoute>
                  }
                />

                {/* ================= 404 ================= */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
