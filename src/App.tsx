
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import CRM from "./pages/CRM";
import CRMAccess from "./pages/CRMAccess";
import APIConfiguration from "./pages/APIConfiguration";
import ServicesPage from "./pages/Services";
import AISolutions from "./pages/services/AISolutions";
import WebDevelopment from "./pages/services/WebDevelopment";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import ConsultingStrategyServices from "./pages/services/ConsultingStrategyServices";
import ContactPage from "./pages/Contact";
import AcademyPage from "./pages/Academy";
import ToolsPage from "./pages/Tools";
import BlogPage from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ExpertisePage from "./pages/Expertise";
import PortfolioPage from "./pages/Portfolio";
import StartProject from "./pages/StartProject";
import AITrainingPage from "./pages/services/AITrainingPage";
import EGovernanceServices from "./pages/services/EGovernanceServices";
import SenServices from "./pages/projects/SenServices";
import { ChatBot } from "./components/chat/ChatBot";
import BackToTop from "./components/ui/BackToTop";
import AboutPage from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import LegalNotices from "./pages/LegalNotices";
import DataAnalysisServices from "./pages/services/DataAnalysisServices";
import NewDealTechnologique from "./pages/NewDealTechnologique";
// E-Library imports
import Library from "./pages/Library";
import EbookDetail from "./pages/EbookDetail";
import LibrarySuccess from "./pages/LibrarySuccess";
import GensparkAdmin from "./pages/GensparkAdmin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* CRM Routes */}
            <Route path="/auth" element={<Auth />} />
            <Route path="/crm/*" element={<CRM />} />
            <Route path="/crm-access" element={<CRMAccess />} />
            <Route path="/api-configuration" element={<APIConfiguration />} />
            
            {/* E-Library Routes */}
            <Route path="/library" element={<Library />} />
            <Route path="/library/:id" element={<EbookDetail />} />
            <Route path="/library/success" element={<LibrarySuccess />} />
            
            {/* Services Routes */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/ai-solutions" element={<AISolutions />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/consulting" element={<ConsultingStrategyServices />} />
            <Route path="/services/ai-training" element={<AITrainingPage />} />
            <Route path="/services/e-governance" element={<EGovernanceServices />} />
            <Route path="/services/data-analysis" element={<DataAnalysisServices />} />

            {/* Admin Routes */}
            <Route path="/genspark-admin" element={<GensparkAdmin />} />

            {/* Other Pages */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/academy" element={<AcademyPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/expertise" element={<ExpertisePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/start-project" element={<StartProject />} />
            <Route path="/projects/senservices" element={<SenServices />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/legal-notices" element={<LegalNotices />} />
            <Route path="/new-deal-technologique" element={<NewDealTechnologique />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BackToTop />
          <ChatBot />
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
