
import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
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
  Server
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

        {/* Métriques Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-200 flex items-center">
                <Key className="w-4 h-4 mr-2" />
                API Keys Actives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{activeKeys}</div>
              <div className="text-sm text-blue-300">{apiKeys?.length || 0} total</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-200 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Contenu Généré
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{generatedContent?.length || 0}</div>
              <div className="text-sm text-green-400">Par Genspark</div>
            </CardContent>
          </Card>
        </div>

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
      </div>
    </div>
  );
};

export default GensparkDashboard;
