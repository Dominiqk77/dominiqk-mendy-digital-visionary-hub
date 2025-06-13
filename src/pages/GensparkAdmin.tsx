
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GensparkDashboard from '@/components/admin/GensparkDashboard';

const GensparkAdmin = () => {
  const { user } = useAuth();

  // Redirection si pas connecté (sécurité basique)
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <GensparkDashboard />
      <Footer />
    </div>
  );
};

export default GensparkAdmin;
