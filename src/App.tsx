
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/Services";
import AIServices from "./pages/services/AIServices";
import WebServices from "./pages/services/WebServices";
import MarketingServices from "./pages/services/MarketingServices";
import ConsultingServices from "./pages/services/ConsultingServices";
import ContactPage from "./pages/Contact";
import AcademyPage from "./pages/Academy";
import ToolsPage from "./pages/Tools";
import BlogPage from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/ai-solutions" element={<AIServices />} />
          <Route path="/services/web-development" element={<WebServices />} />
          <Route path="/services/digital-marketing" element={<MarketingServices />} />
          <Route path="/services/consulting" element={<ConsultingServices />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
