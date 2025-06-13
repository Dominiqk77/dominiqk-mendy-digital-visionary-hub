
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GensparkDashboard from '@/components/admin/GensparkDashboard';

const GensparkAdmin = () => {
  const { user, loading } = useAuth();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [roleLoading, setRoleLoading] = useState(true);

  // Vérifier le rôle admin de l'utilisateur
  useEffect(() => {
    const checkAdminRole = async () => {
      if (!user) {
        setIsAdmin(false);
        setRoleLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase.rpc('has_role', {
          _user_id: user.id,
          _role: 'admin'
        });

        if (error) {
          console.error('Erreur lors de la vérification du rôle:', error);
          setIsAdmin(false);
        } else {
          setIsAdmin(data);
        }
      } catch (error) {
        console.error('Erreur lors de la vérification du rôle:', error);
        setIsAdmin(false);
      } finally {
        setRoleLoading(false);
      }
    };

    checkAdminRole();
  }, [user]);

  // Afficher un loader pendant le chargement de l'authentification
  if (loading || roleLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Si pas connecté, rediriger vers auth
  if (!user) {
    console.log('Utilisateur non connecté, redirection vers /auth');
    return <Navigate to="/auth" replace state={{ from: '/genspark-admin' }} />;
  }

  // Si pas admin, afficher un message d'accès refusé
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Accès Refusé</h1>
          <p className="text-gray-600 mb-4">Vous n'avez pas les droits d'administrateur pour accéder à cette page.</p>
          <button 
            onClick={() => window.history.back()}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Retour
          </button>
        </div>
      </div>
    );
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
