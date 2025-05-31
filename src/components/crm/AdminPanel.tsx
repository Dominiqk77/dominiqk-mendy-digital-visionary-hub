
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import {
  Users,
  TrendingUp,
  DollarSign,
  Activity,
  Crown,
  Shield,
  AlertCircle,
  CheckCircle,
  XCircle,
  BarChart3,
  Calendar,
  Mail,
  Phone,
  Eye,
  Edit,
  Trash2,
  Plus,
  Download,
  Filter,
  Search,
  RefreshCw,
  Award,
  Target,
  Zap,
  Star
} from 'lucide-react';

interface UserData {
  id: string;
  email: string;
  created_at: string;
  last_sign_in_at: string;
  subscription_tier?: string;
  subscription_status?: string;
  total_revenue?: number;
  projects_count?: number;
  leads_count?: number;
}

interface BusinessMetric {
  id: string;
  metric_name: string;
  metric_value: number;
  metric_date: string;
  metadata?: any;
}

export const AdminPanel = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [users, setUsers] = useState<UserData[]>([]);
  const [metrics, setMetrics] = useState<BusinessMetric[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState('overview');

  // Check if user is admin (you should implement proper role checking)
  const isAdmin = user?.email === 'admin@dominiqkmendy.com'; // Replace with proper admin check

  useEffect(() => {
    if (isAdmin) {
      loadAdminData();
    }
  }, [isAdmin]);

  const loadAdminData = async () => {
    try {
      setLoading(true);
      
      // Load users with subscription data
      const { data: usersData, error: usersError } = await supabase
        .from('subscribers')
        .select(`
          user_id,
          email,
          subscription_tier,
          subscribed,
          created_at,
          updated_at
        `);

      if (usersError) throw usersError;

      // Load business metrics
      const { data: metricsData, error: metricsError } = await supabase
        .from('business_metrics')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);

      if (metricsError) throw metricsError;

      setUsers(usersData || []);
      setMetrics(metricsData || []);
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: "Impossible de charger les données admin",
        variant: "destructive",
      });
      console.error('Admin data loading error:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateMetrics = () => {
    const totalUsers = users.length;
    const paidUsers = users.filter(u => u.subscription_tier && u.subscription_tier !== 'free').length;
    const conversionRate = totalUsers > 0 ? (paidUsers / totalUsers * 100).toFixed(1) : '0';
    const totalRevenue = users.reduce((sum, user) => {
      const tierPrices = { pro: 99, business: 299, enterprise: 999 };
      const price = tierPrices[user.subscription_tier as keyof typeof tierPrices] || 0;
      return sum + price;
    }, 0);

    return {
      totalUsers,
      paidUsers,
      conversionRate,
      totalRevenue,
      mrr: totalRevenue // Monthly Recurring Revenue
    };
  };

  const stats = calculateMetrics();

  if (!isAdmin) {
    return (
      <div className="p-8 text-center">
        <div className="max-w-md mx-auto">
          <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Accès Administrateur Requis</h2>
          <p className="text-gray-600">
            Vous n'avez pas les autorisations nécessaires pour accéder à cette section.
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Panneau Administrateur</h1>
          <p className="text-gray-600">Gérez votre business DOM CRM</p>
        </div>
        <div className="flex space-x-3">
          <Button onClick={loadAdminData} variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Actualiser
          </Button>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
            <Download className="w-4 h-4 mr-2" />
            Exporter
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-medium">Utilisateurs Total</p>
                <p className="text-3xl font-bold text-blue-900">{stats.totalUsers}</p>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-600 text-sm font-medium">Clients Payants</p>
                <p className="text-3xl font-bold text-green-900">{stats.paidUsers}</p>
              </div>
              <Crown className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-600 text-sm font-medium">Taux Conversion</p>
                <p className="text-3xl font-bold text-purple-900">{stats.conversionRate}%</p>
              </div>
              <Target className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-600 text-sm font-medium">MRR (€)</p>
                <p className="text-3xl font-bold text-orange-900">{stats.mrr.toLocaleString()}</p>
              </div>
              <DollarSign className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-indigo-600 text-sm font-medium">Revenue/User</p>
                <p className="text-3xl font-bold text-indigo-900">
                  {stats.totalUsers > 0 ? Math.round(stats.totalRevenue / stats.totalUsers) : 0}€
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-indigo-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="users">Utilisateurs</TabsTrigger>
          <TabsTrigger value="revenue">Revenus</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Users */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Nouveaux Utilisateurs
                </CardTitle>
                <CardDescription>Inscriptions récentes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.slice(0, 5).map((user) => (
                    <div key={user.user_id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{user.email}</p>
                          <p className="text-xs text-gray-500">
                            {new Date(user.created_at).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                      </div>
                      <Badge variant={user.subscription_tier === 'free' ? 'secondary' : 'default'}>
                        {user.subscription_tier || 'free'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Revenue Chart Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Évolution des Revenus
                </CardTitle>
                <CardDescription>Derniers 30 jours</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Graphique des revenus</p>
                    <p className="text-sm text-gray-400">Implémentation en cours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Gestion des Utilisateurs</CardTitle>
                  <CardDescription>Gérez tous vos utilisateurs DOM CRM</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filtrer
                  </Button>
                  <Button variant="outline" size="sm">
                    <Search className="w-4 h-4 mr-2" />
                    Rechercher
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.map((user) => (
                  <div key={user.user_id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {user.email.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-medium">{user.email}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>Inscrit: {new Date(user.created_at).toLocaleDateString('fr-FR')}</span>
                          <Badge variant={user.subscription_tier === 'free' ? 'secondary' : 'default'}>
                            {user.subscription_tier || 'gratuit'}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm">Revenue Mensuel</p>
                    <p className="text-3xl font-bold">{stats.mrr.toLocaleString()}€</p>
                    <p className="text-green-200 text-sm">+15% ce mois</p>
                  </div>
                  <DollarSign className="w-10 h-10 text-green-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm">Revenue Annuel</p>
                    <p className="text-3xl font-bold">{(stats.mrr * 12).toLocaleString()}€</p>
                    <p className="text-blue-200 text-sm">Projection</p>
                  </div>
                  <TrendingUp className="w-10 h-10 text-blue-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm">ARPU</p>
                    <p className="text-3xl font-bold">
                      {stats.paidUsers > 0 ? Math.round(stats.totalRevenue / stats.paidUsers) : 0}€
                    </p>
                    <p className="text-purple-200 text-sm">Par utilisateur</p>
                  </div>
                  <Award className="w-10 h-10 text-purple-200" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Revenue by Plan */}
          <Card>
            <CardHeader>
              <CardTitle>Répartition par Plan</CardTitle>
              <CardDescription>Revenue généré par type d'abonnement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['pro', 'business', 'enterprise'].map((tier) => {
                  const tierUsers = users.filter(u => u.subscription_tier === tier);
                  const tierPrices = { pro: 99, business: 299, enterprise: 999 };
                  const tierRevenue = tierUsers.length * tierPrices[tier as keyof typeof tierPrices];
                  const percentage = stats.totalRevenue > 0 ? (tierRevenue / stats.totalRevenue * 100).toFixed(1) : '0';

                  return (
                    <div key={tier} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-4 h-4 rounded-full ${
                          tier === 'pro' ? 'bg-blue-500' :
                          tier === 'business' ? 'bg-purple-500' : 'bg-indigo-500'
                        }`}></div>
                        <div>
                          <p className="font-medium capitalize">{tier}</p>
                          <p className="text-sm text-gray-500">{tierUsers.length} utilisateurs</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{tierRevenue.toLocaleString()}€</p>
                        <p className="text-sm text-gray-500">{percentage}%</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Métriques Clés</CardTitle>
                <CardDescription>Performance globale de la plateforme</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Target className="w-4 h-4 text-blue-600" />
                      </div>
                      <span>Taux de conversion</span>
                    </div>
                    <span className="font-bold text-lg">{stats.conversionRate}%</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <DollarSign className="w-4 h-4 text-green-600" />
                      </div>
                      <span>Revenue par utilisateur</span>
                    </div>
                    <span className="font-bold text-lg">
                      {stats.totalUsers > 0 ? Math.round(stats.totalRevenue / stats.totalUsers) : 0}€
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-purple-600" />
                      </div>
                      <span>Croissance MRR</span>
                    </div>
                    <span className="font-bold text-lg text-green-600">+15%</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-orange-600" />
                      </div>
                      <span>Satisfaction client</span>
                    </div>
                    <span className="font-bold text-lg">4.9/5</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Actions Rapides</CardTitle>
                <CardDescription>Outils d'administration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <Mail className="w-6 h-6" />
                    <span className="text-sm">Email Blast</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <Download className="w-6 h-6" />
                    <span className="text-sm">Export Data</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <Activity className="w-6 h-6" />
                    <span className="text-sm">Monitoring</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                    <Shield className="w-6 h-6" />
                    <span className="text-sm">Sécurité</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
