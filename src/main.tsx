import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import AISolutions from "./pages/AISolutions.tsx";
import AITrainingPage from "./pages/AITraining.tsx";
import DataAnalysisServices from "./pages/DataAnalysisServices.tsx";
import WebDevelopment from "./pages/WebDevelopment.tsx";
import EGovernanceServices from "./pages/EGovernanceServices.tsx";
import DigitalMarketing from "./pages/DigitalMarketing.tsx";
import ConsultingStrategyServices from "./pages/ConsultingStrategyServices.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Contact from "./pages/Contact.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import Library from "./pages/Library.tsx";
import LibrarySuccess from "./pages/LibrarySuccess.tsx";
import EbookDetail from "./pages/EbookDetail.tsx";
import Auth from "./pages/Auth.tsx";
import CRM from "./pages/CRM.tsx";
import CRMAccess from "./pages/CRMAccess.tsx";
import SenServices from "./pages/SenServices.tsx";
import Expertise from "./pages/Expertise.tsx";
import Tools from "./pages/Tools.tsx";
import Academy from "./pages/Academy.tsx";
import StartProject from "./pages/StartProject.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsOfService from "./pages/TermsOfService.tsx";
import LegalNotices from "./pages/LegalNotices.tsx";
import APIConfiguration from "./pages/APIConfiguration.tsx";
import NotFound from "./pages/NotFound.tsx";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import GensparkAdmin from "./pages/GensparkAdmin.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/services/ai-solutions",
    element: <AISolutions />,
  },
  {
    path: "/services/ai-training",
    element: <AITrainingPage />,
  },
  {
    path: "/services/data-analysis", 
    element: <DataAnalysisServices />,
  },
  {
    path: "/services/web-development",
    element: <WebDevelopment />,
  },
  {
    path: "/services/e-governance",
    element: <EGovernanceServices />,
  },
  {
    path: "/services/digital-marketing",
    element: <DigitalMarketing />,
  },
  {
    path: "/services/consulting",
    element: <ConsultingStrategyServices />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/blog/:id",
    element: <BlogPost />,
  },
  {
    path: "/library",
    element: <Library />,
  },
  {
    path: "/library/success",
    element: <LibrarySuccess />,
  },
  {
    path: "/library/:id",
    element: <EbookDetail />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/crm",
    element: <CRM />,
  },
  {
    path: "/crm-access",
    element: <CRMAccess />,
  },
  {
    path: "/projects/sen-services",
    element: <SenServices />,
  },
  {
    path: "/expertise",
    element: <Expertise />,
  },
  {
    path: "/tools",
    element: <Tools />,
  },
  {
    path: "/academy",
    element: <Academy />,
  },
  {
    path: "/start-project",
    element: <StartProject />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/terms-of-service",
    element: <TermsOfService />,
  },
  {
    path: "/legal-notices",
    element: <LegalNotices />,
  },
  {
    path: "/api-config",
    element: <APIConfiguration />,
  },
  {
    path: "/genspark-admin",
    element: <GensparkAdmin />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
