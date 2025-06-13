import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { 
  Shield, 
  Key, 
  Activity, 
  CheckCircle, 
  XCircle, 
  Eye, 
  RefreshCw,
  AlertTriangle,
  TrendingUp,
  Clock,
  Server,
  Mail,
  Target,
  BarChart3,
  Zap,
  BookOpen,
  Users,
  DollarSign,
  PieChart
} from 'lucide-react';

const GensparkDashboard = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [newApiKey, setNewApiKey] = useState('');

  // Query pour récupérer les API Keys Genspark
  const { data: apiKeys, isLoading: apiKeysLoading } = useQuery({
    queryKey: ['genspark-api-keys'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('admin_api_keys')
        .select('*')
        .eq('key_name', 'GENSPARK_API_KEY')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    }
  });

  // Query pour récupérer les logs d'utilisation Genspark
  const { data: usageLogs, isLoading: logsLoading } = useQuery({
    queryKey: ['genspark-usage-logs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('api_usage_logs')
        .select('*')
        .ilike('api_name', '%genspark%')
        .order('created_at', { ascending: false })
        .limit(50);
      
      if (error) throw error;
      return data;
    }
  });

  // Query pour récupérer le contenu généré par Genspark
  const { data: generatedContent } = useQuery({
    queryKey: ['genspark-content'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('generated_content')
        .select('*')
        .contains('metadata', { generated_by: 'genspark_ai' })
        .order('created_at', { ascending: false })
        .limit(20);
      
      if (error) throw error;
      return data;
    }
  });

  // Nouvelles queries pour Phase 2
  const { data: marketingCampaigns } = useQuery({
    queryKey: ['marketing-campaigns'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('marketing_campaigns')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);
      
      if (error) throw error;
      return data;
    }
  });

  const { data: roiMetrics } = useQuery({
    queryKey: ['roi-metrics'],
    queryFn: async () => {
      // Simulation de données ROI en attendant l'implémentation complète
      return {
        totalROI: 410,
        monthlyGrowth: 23.5,
        bestPerformer: 'Landing Pages',
        totalRevenue: 12750
      };
    }
  });

  const { data: conversionMetrics } = useQuery({
    queryKey: ['conversion-metrics'],
    queryFn: async () => {
      return {
        overallConversion: 4.7,
        leadGeneration: 1284,
        qualificationRate: 65.9,
        avgDealValue: 2450
      };
    }
  });

  // Mutation pour créer une nouvelle API Key
  const createApiKeyMutation = useMutation({
    mutationFn: async () => {
      const apiKey = `genspark_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
      
      const { data, error } = await supabase
        .from('admin_api_keys')
        .insert({
          key_name: 'GENSPARK_API_KEY',
          key_value: apiKey,
          description: 'API Key pour agent Genspark IA - Génération automatique de contenu',
          is_active: true
        })
        .select()
        .single();

      if (error) throw error;
      return { ...data, apiKey };
    },
    onSuccess: (data) => {
      setNewApiKey(data.apiKey);
      queryClient.invalidateQueries({ queryKey: ['genspark-api-keys'] });
      toast({
        title: "API Key créée !",
        description: "Nouvelle clé API Genspark générée avec succès",
      });
    },
    onError: (error) => {
      toast({
        title: "Erreur",
        description: "Impossible de créer l'API Key",
        variant: "destructive",
      });
    }
  });

  // Mutation pour désactiver une API Key
  const toggleApiKeyMutation = useMutation({
    mutationFn: async ({ id, isActive }: { id: string; isActive: boolean }) => {
      const { error } = await supabase
        .from('admin_api_keys')
        .update({ is_active: !isActive })
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['genspark-api-keys'] });
      toast({
        title: "Statut mis à jour",
        description: "API Key mise à jour avec succès",
      });
    }
  });

  // Calculs des métriques
  const totalApiCalls = usageLogs?.length || 0;
  const successfulCalls = usageLogs?.filter(log => log.response_status === 200).length || 0;
  const errorRate = totalApiCalls > 0 ? ((totalApiCalls - successfulCalls) / totalApiCalls * 100).toFixed(1) : '0';
  const activeKeys = apiKeys?.filter(key => key.is_active).length || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            🚀 Dashboard Genspark AI
          </h1>
          <p className="text-blue-200 text-lg">
            Contrôle total de votre agent IA - Monitoring en temps réel
          </p>
        </div>

        {/* Enhanced Metrics Overview avec nouvelles métriques */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-8">
          {/* Existing metrics - keep same */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-200 flex items-center">
                <Activity className="w-4 h-4 mr-2" />
                Appels API Total
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{totalApiCalls}</div>
              <div className="text-sm text-green-400">+{usageLogs?.filter(log => {
                const today = new Date().toDateString();
                return new Date(log.created_at).toDateString() === today;
              }).length || 0} aujourd'hui</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-200 flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Taux de Succès
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{(100 - parseFloat(errorRate)).toFixed(1)}%</div>
              <div className="text-sm text-green-400">{successfulCalls} succès</div>
            </CardContent>
          </Card>

          {/* New metrics for Phase 2 */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-200 flex items-center">
                <DollarSign className="w-4 h-4 mr-2" />
                ROI Global
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{roiMetrics?.totalROI || 0}%</div>
              <div className="text-sm text-green-400">+{roiMetrics?.monthlyGrowth || 0}% ce mois</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-200 flex items-center">
                <Target className="w-4 h-4 mr-2" />
                Conversion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{conversionMetrics?.overallConversion || 0}%</div>
              <div className="text-sm text-green-400">{conversionMetrics?.leadGeneration || 0} leads</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-200 flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Campagnes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{marketingCampaigns?.length || 0}</div>
              <div className="text-sm text-blue-300">Actives</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-200 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Revenus IA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{roiMetrics?.totalRevenue || 0}€</div>
              <div className="text-sm text-green-400">Générés par Genspark</div>
            </CardContent>
          </Card>
        </div>

        {/* New Tabs System for Enhanced Dashboard */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-white/10 backdrop-blur-xl">
            <TabsTrigger value="overview" className="text-white">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="marketing" className="text-white">Marketing</TabsTrigger>
            <TabsTrigger value="analytics" className="text-white">Analytics</TabsTrigger>
            <TabsTrigger value="library" className="text-white">Bibliothèque</TabsTrigger>
            <TabsTrigger value="api-keys" className="text-white">API Keys</TabsTrigger>
            <TabsTrigger value="monitoring" className="text-white">Monitoring</TabsTrigger>
          </TabsList>

          {/* Overview Tab - Keep existing overview content */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
              {/* Gestion des API Keys */}
              <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Gestion API Keys Genspark
                  </CardTitle>
                  <CardDescription className="text-blue-200">
                    Contrôlez l'accès de votre agent Genspark
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  
                  {/* Création nouvelle API Key */}
                  <div className="p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
                    <Button 
                      onClick={() => createApiKeyMutation.mutate()}
                      disabled={createApiKeyMutation.isPending}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      {createApiKeyMutation.isPending ? (
                        <>
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                          Génération...
                        </>
                      ) : (
                        <>
                          <Key className="w-4 h-4 mr-2" />
                          Générer Nouvelle API Key
                        </>
                      )}
                    </Button>
                    
                    {newApiKey && (
                      <div className="mt-4 p-3 bg-green-500/20 rounded border border-green-500/30">
                        <p className="text-sm text-green-200 mb-2">🔑 Nouvelle API Key générée :</p>
                        <div className="flex items-center space-x-2">
                          <Input 
                            value={newApiKey} 
                            readOnly 
                            className="bg-white/10 border-green-500/30 text-white text-xs"
                          />
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => navigator.clipboard.writeText(newApiKey)}
                            className="border-green-500/30 text-green-400"
                          >
                            Copier
                          </Button>
                        </div>
                        <p className="text-xs text-green-300 mt-2">
                          ⚠️ Copiez cette clé maintenant - elle ne sera plus affichée !
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Liste des API Keys */}
                  <div className="space-y-3">
                    {apiKeysLoading ? (
                      <div className="text-center py-4">
                        <RefreshCw className="w-6 h-6 animate-spin mx-auto text-blue-400" />
                      </div>
                    ) : (
                      apiKeys?.map((key) => (
                        <div key={key.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <Badge variant={key.is_active ? "default" : "destructive"}>
                                {key.is_active ? 'Active' : 'Inactive'}
                              </Badge>
                              <span className="text-sm text-white">
                                {key.key_value.substring(0, 20)}...
                              </span>
                            </div>
                            <p className="text-xs text-gray-400 mt-1">
                              Créée le {new Date(key.created_at).toLocaleDateString('fr-FR')}
                            </p>
                          </div>
                          <Button
                            size="sm"
                            variant={key.is_active ? "destructive" : "default"}
                            onClick={() => toggleApiKeyMutation.mutate({ id: key.id, isActive: key.is_active })}
                            disabled={toggleApiKeyMutation.isPending}
                          >
                            {key.is_active ? <XCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                          </Button>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Monitoring en Temps Réel */}
              <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Server className="w-5 h-5 mr-2" />
                    Activité Temps Réel
                  </CardTitle>
                  <CardDescription className="text-blue-200">
                    Logs des dernières actions Genspark
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {logsLoading ? (
                      <div className="text-center py-4">
                        <RefreshCw className="w-6 h-6 animate-spin mx-auto text-blue-400" />
                      </div>
                    ) : (
                      usageLogs?.slice(0, 10).map((log) => (
                        <div key={log.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              {log.response_status === 200 ? (
                                <CheckCircle className="w-4 h-4 text-green-400" />
                              ) : (
                                <XCircle className="w-4 h-4 text-red-400" />
                              )}
                              <span className="text-sm text-white font-medium">
                                {log.api_name}
                              </span>
                              <Badge variant="outline" className="text-xs">
                                {log.response_status}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-4 mt-1">
                              <span className="text-xs text-gray-400">
                                {log.endpoint}
                              </span>
                              <span className="text-xs text-blue-300">
                                <Clock className="w-3 h-3 inline mr-1" />
                                {new Date(log.created_at).toLocaleTimeString('fr-FR')}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contenu Généré par Genspark */}
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Contenu Généré par Genspark
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Supervisez et approuvez le contenu créé automatiquement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {generatedContent?.map((content) => (
                    <div key={content.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {content.content_type}
                        </Badge>
                        <span className="text-xs text-gray-400">
                          {new Date(content.created_at).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                      <h3 className="text-white font-medium mb-2 line-clamp-2">
                        {content.title}
                      </h3>
                      <p className="text-gray-300 text-sm line-clamp-3 mb-3">
                        {content.content?.substring(0, 150)}...
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="default" className="text-xs">
                          Approuver
                        </Button>
                        <Button size="sm" variant="outline" className="text-xs">
                          Modifier
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* New Marketing Tab */}
          <TabsContent value="marketing" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Campagnes Email Actives
                  </CardTitle>
                  <CardDescription className="text-blue-200">
                    Séquences automatisées en cours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {marketingCampaigns?.filter(c => c.campaign_type === 'email_sequence').map((campaign) => (
                      <div key={campaign.id} className="p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-white font-medium">{campaign.name}</h3>
                          <Badge variant={campaign.status === 'active' ? 'default' : 'secondary'}>
                            {campaign.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="text-gray-400">Emails envoyés</p>
                            <p className="text-white font-bold">1,247</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Taux ouverture</p>
                            <p className="text-white font-bold">42.3%</p>
                          </div>
                          <div>
                            <p className="text-gray-400">Conversions</p>
                            <p className="text-white font-bold">156</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Funnels de Vente
                  </CardTitle>
                  <CardDescription className="text-blue-200">
                    Performance des parcours clients
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
                      <h3 className="text-white font-medium mb-3">Consultation IA</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Visiteurs → Leads</span>
                          <span className="text-white font-bold">6.0%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Leads → Qualifiés</span>
                          <span className="text-white font-bold">58.3%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Qualifiés → Clients</span>
                          <span className="text-white font-bold">34.3%</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                      <h3 className="text-white font-medium mb-3">E-books Premium</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Visiteurs → Downloads</span>
                          <span className="text-white font-bold">13.9%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Downloads → Consultations</span>
                          <span className="text-white font-bold">16.7%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Consultations → Clients</span>
                          <span className="text-white font-bold">28.8%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* New Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <PieChart className="w-5 h-5 mr-2" />
                    ROI par Type de Contenu
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <p className="text-white font-medium">Landing Pages</p>
                        <p className="text-sm text-gray-400">8 pages créées</p>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 font-bold">533%</p>
                        <p className="text-sm text-gray-400">3,800€</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <p className="text-white font-medium">Email Campaigns</p>
                        <p className="text-sm text-gray-400">12 campagnes</p>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 font-bold">450%</p>
                        <p className="text-sm text-gray-400">2,200€</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <p className="text-white font-medium">Blog Articles</p>
                        <p className="text-sm text-gray-400">24 articles</p>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 font-bold">425%</p>
                        <p className="text-sm text-gray-400">4,200€</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    Engagement par Canal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-white/5 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">Email</span>
                        <span className="text-green-400 font-bold">24.7%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{width: '24.7%'}}></div>
                      </div>
                    </div>
                    <div className="p-3 bg-white/5 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">Landing Pages</span>
                        <span className="text-blue-400 font-bold">18.9%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{width: '18.9%'}}></div>
                      </div>
                    </div>
                    <div className="p-3 bg-white/5 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">Blog</span>
                        <span className="text-purple-400 font-bold">12.3%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-purple-400 h-2 rounded-full" style={{width: '12.3%'}}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Prédictions IA
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
                      <p className="text-blue-200 text-sm mb-1">Revenus prévus (30j)</p>
                      <p className="text-white text-2xl font-bold">18,400€</p>
                      <p className="text-green-400 text-sm">+44% vs période actuelle</p>
                    </div>
                    <div className="p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                      <p className="text-green-200 text-sm mb-1">Leads qualifiés (30j)</p>
                      <p className="text-white text-2xl font-bold">2,847</p>
                      <p className="text-green-400 text-sm">+67% vs période actuelle</p>
                    </div>
                    <div className="p-3 bg-purple-500/20 rounded-lg border border-purple-500/30">
                      <p className="text-purple-200 text-sm mb-1">Contenu optimal</p>
                      <p className="text-white font-medium">Articles IA + Landing</p>
                      <p className="text-purple-400 text-sm">Meilleur ROI prévu</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* New Library Tab */}
          <TabsContent value="library" className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Gestion Automatique Bibliothèque
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Contrôle intelligent de vos e-books
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="p-4 bg-blue-500/20 rounded-lg border border-blue-500/30 text-center">
                    <BookOpen className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                    <p className="text-2xl font-bold text-white">24</p>
                    <p className="text-sm text-blue-200">E-books actifs</p>
                  </div>
                  <div className="p-4 bg-green-500/20 rounded-lg border border-green-500/30 text-center">
                    <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-400" />
                    <p className="text-2xl font-bold text-white">3,847</p>
                    <p className="text-sm text-green-200">Téléchargements</p>
                  </div>
                  <div className="p-4 bg-yellow-500/20 rounded-lg border border-yellow-500/30 text-center">
                    <DollarSign className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                    <p className="text-2xl font-bold text-white">8,450€</p>
                    <p className="text-sm text-yellow-200">Revenus générés</p>
                  </div>
                  <div className="p-4 bg-purple-500/20 rounded-lg border border-purple-500/30 text-center">
                    <Target className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                    <p className="text-2xl font-bold text-white">14.3%</p>
                    <p className="text-sm text-purple-200">Taux conversion</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-white font-medium mb-3">E-books Top Performance</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                      <div>
                        <p className="text-white font-medium">Guide IA Marketing 2024</p>
                        <p className="text-sm text-gray-400">1,247 téléchargements • 18.4% conversion</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="text-xs">Optimiser SEO</Button>
                        <Button size="sm" variant="default" className="text-xs">Nouvelle Landing</Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                      <div>
                        <p className="text-white font-medium">Automation Business</p>
                        <p className="text-sm text-gray-400">934 téléchargements • 15.7% conversion</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="text-xs">Optimiser SEO</Button>
                        <Button size="sm" variant="default" className="text-xs">Nouvelle Landing</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* API Keys Tab - Keep existing content */}
          <TabsContent value="api-keys" className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Gestion API Keys Genspark
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Contrôlez l'accès de votre agent Genspark
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                
                {/* Création nouvelle API Key */}
                <div className="p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
                  <Button 
                    onClick={() => createApiKeyMutation.mutate()}
                    disabled={createApiKeyMutation.isPending}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    {createApiKeyMutation.isPending ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Génération...
                      </>
                    ) : (
                      <>
                        <Key className="w-4 h-4 mr-2" />
                        Générer Nouvelle API Key
                      </>
                    )}
                  </Button>
                  
                  {newApiKey && (
                    <div className="mt-4 p-3 bg-green-500/20 rounded border border-green-500/30">
                      <p className="text-sm text-green-200 mb-2">🔑 Nouvelle API Key générée :</p>
                      <div className="flex items-center space-x-2">
                        <Input 
                          value={newApiKey} 
                          readOnly 
                          className="bg-white/10 border-green-500/30 text-white text-xs"
                        />
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => navigator.clipboard.writeText(newApiKey)}
                          className="border-green-500/30 text-green-400"
                        >
                          Copier
                        </Button>
                      </div>
                      <p className="text-xs text-green-300 mt-2">
                        ⚠️ Copiez cette clé maintenant - elle ne sera plus affichée !
                      </p>
                    </div>
                  )}
                </div>

                {/* Liste des API Keys */}
                <div className="space-y-3">
                  {apiKeysLoading ? (
                    <div className="text-center py-4">
                      <RefreshCw className="w-6 h-6 animate-spin mx-auto text-blue-400" />
                    </div>
                  ) : (
                    apiKeys?.map((key) => (
                      <div key={key.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <Badge variant={key.is_active ? "default" : "destructive"}>
                              {key.is_active ? 'Active' : 'Inactive'}
                            </Badge>
                            <span className="text-sm text-white">
                              {key.key_value.substring(0, 20)}...
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">
                            Créée le {new Date(key.created_at).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          variant={key.is_active ? "destructive" : "default"}
                          onClick={() => toggleApiKeyMutation.mutate({ id: key.id, isActive: key.is_active })}
                          disabled={toggleApiKeyMutation.isPending}
                        >
                          {key.is_active ? <XCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                        </Button>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Monitoring Tab - Keep existing content */}
          <TabsContent value="monitoring" className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Server className="w-5 h-5 mr-2" />
                  Activité Temps Réel
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Logs des dernières actions Genspark
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {logsLoading ? (
                    <div className="text-center py-4">
                      <RefreshCw className="w-6 h-6 animate-spin mx-auto text-blue-400" />
                    </div>
                  ) : (
                    usageLogs?.slice(0, 10).map((log) => (
                      <div key={log.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            {log.response_status === 200 ? (
                              <CheckCircle className="w-4 h-4 text-green-400" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-400" />
                            )}
                            <span className="text-sm text-white font-medium">
                              {log.api_name}
                            </span>
                            <Badge variant="outline" className="text-xs">
                              {log.response_status}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 mt-1">
                            <span className="text-xs text-gray-400">
                              {log.endpoint}
                            </span>
                            <span className="text-xs text-blue-300">
                              <Clock className="w-3 h-3 inline mr-1" />
                              {new Date(log.created_at).toLocaleTimeString('fr-FR')}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GensparkDashboard;
