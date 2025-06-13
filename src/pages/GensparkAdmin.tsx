
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GensparkDashboard from '@/components/admin/GensparkDashboard';

const GensparkAdmin = () => {
  const { user, loading } = useAuth();

  // Afficher un loader pendant le chargement
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Si pas connecté, rediriger vers auth mais avec un message spécifique
  if (!user) {
    console.log('Utilisateur non connecté, redirection vers /auth');
    return <Navigate to="/auth" replace state={{ from: '/genspark-admin' }} />;
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
