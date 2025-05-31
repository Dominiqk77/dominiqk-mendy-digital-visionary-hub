
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import CRMDashboard from '@/components/crm/CRMDashboard';
import LeadsManagement from '@/components/crm/LeadsManagement';
import ContentGenerator from '@/components/crm/ContentGenerator';
import ProjectsManager from '@/components/crm/ProjectsManager';
import AutomationCenter from '@/components/crm/AutomationCenter';
import SEOAnalyzer from '@/components/crm/SEOAnalyzer';
import { AdminPanel } from '@/components/crm/AdminPanel';
import CRMNavigation from '@/components/crm/CRMNavigation';

const CRM = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto"></div>
          <div className="text-blue-600 font-medium">Chargement de DOM CRM...</div>
        </div>
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
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </div>
  );
};

export default CRM;
