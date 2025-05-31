
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  LayoutDashboard,
  Users,
  FileText,
  FolderOpen,
  Settings,
  Search,
  LogOut,
  Zap,
  CreditCard
} from 'lucide-react';

const CRMNavigation = () => {
  const { signOut, user } = useAuth();
  const { subscription } = useSubscription();
  const location = useLocation();

  // Check if user is admin
  const isAdmin = user?.email === 'admin@dominiqkmendy.com'; // Replace with proper admin check

  const navItems = [
    { path: '/crm', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/crm/leads', icon: Users, label: 'Leads' },
    { path: '/crm/content', icon: FileText, label: 'Content AI' },
    { path: '/crm/projects', icon: FolderOpen, label: 'Projets' },
    { path: '/crm/automation', icon: Zap, label: 'Automation' },
    { path: '/crm/seo', icon: Search, label: 'SEO' },
    ...(isAdmin ? [{ path: '/crm/admin', icon: Settings, label: 'Admin' }] : []),
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/crm" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DOM</span>
              </div>
              <div>
                <span className="font-bold text-gray-900">CRM</span>
                <span className="text-xs text-gray-500 ml-1">Pro</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    {item.label === 'Admin' && (
                      <Badge className="bg-red-500 text-white text-xs px-1 py-0">
                        ADMIN
                      </Badge>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/subscription" className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <CreditCard className="w-4 h-4" />
                <span>Abonnement</span>
                {subscription && (
                  <Badge variant={subscription.subscribed ? "default" : "secondary"} className="ml-1">
                    {subscription.subscription_tier || "Gratuit"}
                  </Badge>
                )}
              </Button>
            </Link>
            <div className="hidden md:block">
              <span className="text-sm text-gray-600">{user?.email}</span>
              {isAdmin && (
                <Badge className="ml-2 bg-red-500 text-white text-xs">
                  ADMIN
                </Badge>
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={signOut}
              className="flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden md:inline">Déconnexion</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CRMNavigation;
