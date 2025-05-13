
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
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
import ExpertisePage from "./pages/Expertise";
import PortfolioPage from "./pages/Portfolio";
import StartProject from "./pages/StartProject";
import AITrainingPage from "./pages/services/AITrainingPage";
import EGovernance from "./pages/services/EGovernance";
import SenServices from "./pages/projects/SenServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/ai-solutions" element={<AIServices />} />
        <Route path="/services/web-development" element={<WebServices />} />
        <Route path="/services/digital-marketing" element={<MarketingServices />} />
        <Route path="/services/consulting" element={<ConsultingServices />} />
        <Route path="/services/ai-training" element={<AITrainingPage />} />
        <Route path="/services/egouvernance" element={<EGovernance />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/start-project" element={<StartProject />} />
        <Route path="/projects/senservices" element={<SenServices />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
