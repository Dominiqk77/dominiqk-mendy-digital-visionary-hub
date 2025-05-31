
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import CRMDashboard from '@/components/crm/CRMDashboard';
import LeadsManagement from '@/components/crm/LeadsManagement';
import ContentGenerator from '@/components/crm/ContentGenerator';
import ProjectsManager from '@/components/crm/ProjectsManager';
import AutomationCenter from '@/components/crm/AutomationCenter';
import SEOAnalyzer from '@/components/crm/SEOAnalyzer';
import CRMNavigation from '@/components/crm/CRMNavigation';

const CRM = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <CRMNavigation />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<CRMDashboard />} />
          <Route path="/leads" element={<LeadsManagement />} />
          <Route path="/content" element={<ContentGenerator />} />
          <Route path="/projects" element={<ProjectsManager />} />
          <Route path="/automation" element={<AutomationCenter />} />
          <Route path="/seo" element={<SEOAnalyzer />} />
        </Routes>
      </div>
    </div>
  );
};

export default CRM;
