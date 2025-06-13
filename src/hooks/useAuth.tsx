
import { useState, useEffect, createContext, useContext } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<any>;
  signUp: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Fonction utilitaire pour nettoyer complètement l'état d'authentification
const cleanupAuthState = () => {
  console.log('Nettoyage complet de l\'état d\'authentification...');
  
  // Nettoyer localStorage
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith('supabase.auth.') || key.includes('sb-') || key.startsWith('sb.')) {
      console.log('Suppression de la clé:', key);
      localStorage.removeItem(key);
    }
  });
  
  // Nettoyer sessionStorage si disponible
  try {
    Object.keys(sessionStorage).forEach((key) => {
      if (key.startsWith('supabase.auth.') || key.includes('sb-') || key.startsWith('sb.')) {
        sessionStorage.removeItem(key);
      }
    });
  } catch (e) {
    // Ignore les erreurs de sessionStorage
  }
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Auth state change:', event, session?.user?.email);
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('Initial session:', session?.user?.email);
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      console.log('Tentative de connexion pour:', email);
      
      // Nettoyage complet avant la connexion
      cleanupAuthState();

      // Déconnexion globale d'abord pour éviter les conflits
      try {
        await supabase.auth.signOut({ scope: 'global' });
        console.log('Déconnexion globale effectuée');
      } catch (err) {
        console.log('Erreur lors de la déconnexion préalable (ignorée):', err);
      }

      // Attendre un peu pour que le nettoyage soit effectif
      await new Promise(resolve => setTimeout(resolve, 100));

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Erreur de connexion:', error.message);
        return { data: null, error };
      }

      console.log('Connexion réussie:', data.user?.email);
      return { data, error: null };
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      return { data: null, error };
    }
  };

  const signUp = async (email: string, password: string) => {
    const redirectUrl = `${window.location.origin}/`;
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl
      }
    });
    return { data, error };
  };

  const signOut = async () => {
    try {
      console.log('Déconnexion en cours...');
      
      // Nettoyer l'état d'authentification
      cleanupAuthState();

      await supabase.auth.signOut({ scope: 'global' });
      
      // Forcer le rechargement de la page pour un état propre
      window.location.href = '/auth';
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
      // Même en cas d'erreur, rediriger vers auth
      window.location.href = '/auth';
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      session,
      loading,
      signIn,
      signUp,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
