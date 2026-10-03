"use client";

import { lazy, Suspense, useState } from "react";
import { usePathname } from "@/lib/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Preloader from "@/components/ui/Preloader";
import Dashboard, { AuthProvider, ProtectedRoute } from "./components/admin/Dashboard";
import Index from "./site-pages/Index";
import About from "./site-pages/About";
import Services from "./site-pages/Services";
import LandingPage from "./site-pages/LandingPage";
import WebDesignLanding from "./site-pages/WebDesignLanding";
import Portfolio from "./site-pages/Portfolio";
import ProjectDetail from "./site-pages/ProjectDetail";
import Contact from "./site-pages/Contact";
import Pricing from "./site-pages/Pricing";
import FAQ from "./site-pages/FAQ";
import Process from "./site-pages/Process";
import PrivacyPolicy from "./site-pages/PrivacyPolicy";
import TermsAndConditions from "./site-pages/TermsAndConditions";
import NotFound from "./site-pages/NotFound";

const BlogListing = lazy(() => import("./site-pages/BlogListing"));
const BlogPost = lazy(() => import("./site-pages/BlogPost"));
const BlogCategory = lazy(() => import("./site-pages/BlogCategory"));
const Login = lazy(() => import("./components/admin/Login"));
const Posts = lazy(() => import("./components/admin/Posts"));
const Categories = lazy(() => import("./components/admin/Categories"));
const PostEditor = lazy(() => import("./components/admin/PostEditor"));

const queryClient = new QueryClient();

const RouteView = () => {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean).map((segment) => decodeURIComponent(segment));
  const [root, second, third] = segments;

  if (pathname === "/") return <Index />;
  if (pathname === "/about") return <About />;
  if (pathname === "/services") return <Services />;
  if (pathname === "/landingpage") return <LandingPage />;
  if (pathname === "/web-design") return <WebDesignLanding />;
  if (pathname === "/portfolio") return <Portfolio />;
  if (root === "portfolio" && second) return <ProjectDetail />;
  if (pathname === "/pricing") return <Pricing />;
  if (pathname === "/faq") return <FAQ />;
  if (pathname === "/process") return <Process />;
  if (pathname === "/contact") return <Contact />;
  if (pathname === "/privacy-policy") return <PrivacyPolicy />;
  if (pathname === "/terms-and-conditions") return <TermsAndConditions />;
  if (pathname === "/blog") return <BlogListing />;
  if (root === "blog" && second === "category" && third) return <BlogCategory />;
  if (root === "blog" && second) return <BlogPost />;
  if (pathname === "/admin/login") {
    return <AuthProvider><Login /></AuthProvider>;
  }
  if (pathname === "/admin") {
    return <AuthProvider><ProtectedRoute><Dashboard /></ProtectedRoute></AuthProvider>;
  }
  if (pathname === "/admin/posts") {
    return <AuthProvider><ProtectedRoute><Posts /></ProtectedRoute></AuthProvider>;
  }
  if (pathname === "/admin/posts/new") {
    return <AuthProvider><ProtectedRoute><PostEditor /></ProtectedRoute></AuthProvider>;
  }
  if (root === "admin" && second === "posts" && third === "edit") {
    return <AuthProvider><ProtectedRoute><PostEditor /></ProtectedRoute></AuthProvider>;
  }
  if (pathname === "/admin/categories") {
    return <AuthProvider><ProtectedRoute><Categories /></ProtectedRoute></AuthProvider>;
  }
  return <NotFound />;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
        <Toaster />
        <Sonner />
        <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-muted-foreground">Loading…</div>}>
          <RouteView />
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
