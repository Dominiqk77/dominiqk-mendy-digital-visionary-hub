
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/hooks/useAuth';

// Pages principales du site (accessibles sans auth)
import Index from './pages/Index';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Expertise from './pages/Expertise';
import StartProject from './pages/StartProject';
import Tools from './pages/Tools';
import Academy from './pages/Academy';
import APIConfiguration from './pages/APIConfiguration';
import LegalNotices from './pages/LegalNotices';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound';
import CRMAccess from './pages/CRMAccess';

// Pages de services
import WebDevelopment from './pages/services/WebDevelopment';
import DigitalMarketing from './pages/services/DigitalMarketing';
import WebServices from './pages/services/WebServices';
import AIServices from './pages/services/AIServices';
import AISolutions from './pages/services/AISolutions';
import AITrainingPage from './pages/services/AITrainingPage';
import ConsultingServices from './pages/services/ConsultingServices';
import ConsultingStrategyServices from './pages/services/ConsultingStrategyServices';
import DataAnalysisServices from './pages/services/DataAnalysisServices';
import MarketingServices from './pages/services/MarketingServices';
import EGovernance from './pages/services/EGovernance';
import EGovernanceServices from './pages/services/EGovernanceServices';

// Pages de projets
import SenServices from './pages/projects/SenServices';

// Pages CRM (protégées par auth)
import Auth from './pages/Auth';
import CRM from './pages/CRM';
import Subscription from './pages/Subscription';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Routes>
            {/* Routes principales du site - accessibles sans authentification */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/start-project" element={<StartProject />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/api-configuration" element={<APIConfiguration />} />
            <Route path="/legal-notices" element={<LegalNotices />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/crm-access" element={<CRMAccess />} />

            {/* Routes de services */}
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/web" element={<WebServices />} />
            <Route path="/services/ai" element={<AIServices />} />
            <Route path="/services/ai-solutions" element={<AISolutions />} />
            <Route path="/services/ai-training" element={<AITrainingPage />} />
            <Route path="/services/consulting" element={<ConsultingServices />} />
            <Route path="/services/consulting-strategy" element={<ConsultingStrategyServices />} />
            <Route path="/services/data-analysis" element={<DataAnalysisServices />} />
            <Route path="/services/marketing" element={<MarketingServices />} />
            <Route path="/services/egouvernance" element={<EGovernance />} />
            <Route path="/services/e-governance" element={<EGovernance />} />
            <Route path="/services/e-governance-services" element={<EGovernanceServices />} />

            {/* Routes de projets */}
            <Route path="/projects/sen-services" element={<SenServices />} />

            {/* Routes CRM - protégées par authentification */}
            <Route path="/auth" element={<Auth />} />
            <Route path="/crm/*" element={<CRM />} />
            <Route path="/subscription" element={<Subscription />} />

            {/* Route 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
