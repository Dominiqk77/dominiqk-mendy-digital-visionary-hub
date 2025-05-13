
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CombinedBackground from './components/backgrounds/CombinedBackground';

// Pages
import Index from './pages/Index';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import StartProject from './pages/StartProject';
import Expertise from './pages/Expertise';
import Academy from './pages/Academy';
import Tools from './pages/Tools';
import NotFound from './pages/NotFound';

// Service Sub-pages
import AIServices from './pages/services/AIServices';
import WebServices from './pages/services/WebServices';
import MarketingServices from './pages/services/MarketingServices';
import ConsultingServices from './pages/services/ConsultingServices';

// Components
import { Toaster } from './components/ui/toaster';
import './App.css';

// ScrollToTop component to ensure page scrolls to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen">
        {/* Global background for all pages */}
        <div className="fixed inset-0 -z-20">
          <CombinedBackground opacity={0.4} />
        </div>
        
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/start-project" element={<StartProject />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/tools" element={<Tools />} />
          
          {/* Service sub-pages */}
          <Route path="/services/ai-solutions" element={<AIServices />} />
          <Route path="/services/web-development" element={<WebServices />} />
          <Route path="/services/digital-marketing" element={<MarketingServices />} />
          <Route path="/services/consulting" element={<ConsultingServices />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
