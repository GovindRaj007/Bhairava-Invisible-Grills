import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import Index from "./pages/Index";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingPages from "@/components/LoadingPages";

// Code-split pages that aren't needed on initial load
const ServicePage = lazy(() => import("./pages/ServicePage"));
const LocationsIndex = lazy(() => import("./pages/LocationsIndex"));
const LocationPage = lazy(() => import("./pages/LocationPage"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollToTop />
          <Navbar />
          <main className="pt-16 md:pt-20">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services/:serviceSlug" element={<Suspense fallback={<LoadingPages />}><ServicePage /></Suspense>} />
              <Route path="/locations" element={<Suspense fallback={<LoadingPages />}><LocationsIndex /></Suspense>} />
              <Route path="/locations/:locationSlug" element={<Suspense fallback={<LoadingPages />}><LocationPage /></Suspense>} />
              <Route path="/contact" element={<Suspense fallback={<LoadingPages />}><Contact /></Suspense>} />
              <Route path="/privacy-policy" element={<Suspense fallback={<LoadingPages />}><PrivacyPolicy /></Suspense>} />
              <Route path="/about" element={<Suspense fallback={<LoadingPages />}><About /></Suspense>} />
              <Route path="*" element={<Suspense fallback={<LoadingPages />}><NotFound /></Suspense>} />
            </Routes>
          </main>
          <Footer />
          <FloatingCTA />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
