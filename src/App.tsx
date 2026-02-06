import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";
import LocationDetail from "./pages/LocationDetail";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Sitemap from "./pages/Sitemap";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* HTML-suffixed primary routes */}
          <Route path="/index.html" element={<Index />} />
          <Route path="/about.html" element={<About />} />
          <Route path="/services.html" element={<Services />} />
          <Route path="/services/:slug.html" element={<ServiceDetail />} />
          <Route path="/contact.html" element={<Contact />} />
          <Route path="/locations.html" element={<Locations />} />
          <Route path="/gallery.html" element={<Gallery />} />

          {/* Backward-compatible routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* Dynamic Location Pages */}
          {/* Dynamic Location Pages (.html variants) */}
          <Route path="/packers-and-movers-in-:city.html" element={<LocationDetail />} />
          <Route path="/packers-and-movers-:city.html" element={<LocationDetail />} />
          <Route path="/packers-and-movers-nearme-:city.html" element={<LocationDetail />} />
          <Route path="/best-packers-and-movers-in-:city.html" element={<LocationDetail />} />
          <Route path="/best-packers-and-movers-:city.html" element={<LocationDetail />} />
          <Route path="/local-packers-and-movers-:city.html" element={<LocationDetail />} />
          <Route path="/local-packers-and-movers-in-:city.html" element={<LocationDetail />} />
          <Route path="/professional-packers-and-movers-:city.html" element={<LocationDetail />} />
          <Route path="/professional-packers-and-movers-in-:city.html" element={<LocationDetail />} />
          <Route path="/packers-and-movers-nearme-in-:city.html" element={<LocationDetail />} />

          {/* Backward-compatible dynamic routes */}
          <Route path="/packers-and-movers-in-:city" element={<LocationDetail />} />
          <Route path="/packers-and-movers-:city" element={<LocationDetail />} />
          <Route path="/packers-and-movers-nearme-:city" element={<LocationDetail />} />
          <Route path="/best-packers-and-movers-in-:city" element={<LocationDetail />} />
          <Route path="/best-packers-and-movers-:city" element={<LocationDetail />} />
          <Route path="/local-packers-and-movers-:city" element={<LocationDetail />} />
          <Route path="/local-packers-and-movers-in-:city" element={<LocationDetail />} />
          <Route path="/professional-packers-and-movers-:city" element={<LocationDetail />} />
          <Route path="/professional-packers-and-movers-in-:city" element={<LocationDetail />} />



          <Route path="/city/:city.html" element={<LocationDetail />} />
          <Route path="/:slug.html" element={<LocationDetail />} />
          {/* Backward-compatible catch-all */}
          <Route path="/city/:city" element={<LocationDetail />} />
          <Route path="/:slug" element={<LocationDetail />} />
          {/* Legal */}
          <Route path="/privacy-policy.html" element={<PrivacyPolicy />} />
          <Route path="/terms.html" element={<Terms />} />
          <Route path="/sitemap.html" element={<Sitemap />} />
          {/* Backward-compatible legal routes */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/sitemap" element={<Sitemap />} />
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
