
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import {
  Zap,
  Plus,
  Play,
  Pause,
  Settings,
  Mail,
  MessageCircle,
  Share2,
  TrendingUp,
  Clock,
  CheckCircle
} from 'lucide-react';

const AutomationCenter = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newWorkflow, setNewWorkflow] = useState({
    name: '',
    description: '',
    workflow_type: '',
    configuration: {}
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: workflows, isLoading } = useQuery({
    queryKey: ['automation-workflows'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('automation_workflows')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    }
  });

  const createWorkflowMutation = useMutation({
    mutationFn: async (workflowData: typeof newWorkflow) => {
      const { data, error } = await supabase
        .from('automation_workflows')
        .insert([workflowData])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['automation-workflows'] });
      setShowCreateForm(false);
      setNewWorkflow({
        name: '',
        description: '',
        workflow_type: '',
        configuration: {}
      });
      toast({
        title: "Workflow créé !",
        description: "L'automation a été configurée avec succès",
      });
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Impossible de créer le workflow",
        variant: "destructive",
      });
    }
  });

  const toggleWorkflowMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const { error } = await supabase
        .from('automation_workflows')
        .update({ 
          status, 
          updated_at: new Date().toISOString(),
          last_run: status === 'active' ? new Date().toISOString() : undefined
        })
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['automation-workflows'] });
      toast({
        title: "Statut mis à jour !",
        description: "Le workflow a été modifié",
      });
    }
  });

  const handleCreateWorkflow = (e: React.FormEvent) => {
    e.preventDefault();
    createWorkflowMutation.mutate(newWorkflow);
  };

  const getWorkflowIcon = (type: string) => {
    switch (type) {
      case 'lead_nurturing': return <Mail className="w-5 h-5" />;
      case 'content_publishing': return <Share2 className="w-5 h-5" />;
      case 'seo_monitoring': return <TrendingUp className="w-5 h-5" />;
      case 'social_media': return <MessageCircle className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const predefinedWorkflows = [
    {
      type: 'lead_nurturing',
      name: 'Nurturing Automatique',
      description: 'Envoie automatiquement des emails personnalisés aux nouveaux leads',
      icon: Mail,
      features: ['Email séquencé', 'Scoring automatique', 'Suivi engagement']
    },
    {
      type: 'content_publishing',
      name: 'Publication Contenu',
      description: 'Publie automatiquement le contenu généré sur les réseaux sociaux',
      icon: Share2,
      features: ['Multi-plateformes', 'Programmation', 'Analytics']
    },
    {
      type: 'seo_monitoring',
      name: 'Monitoring SEO',
      description: 'Surveille les positions et envoie des rapports automatiques',
      icon: TrendingUp,
      features: ['Suivi positions', 'Alertes', 'Rapports hebdo']
    },
    {
      type: 'social_media',
      name: 'Réseaux Sociaux',
      description: 'Automatise la publication et l\'engagement sur les réseaux',
      icon: MessageCircle,
      features: ['Auto-posting', 'Réponses auto', 'Hashtags IA']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Centre d'Automatisation
          </h1>
          <p className="text-gray-600">
            Automatisez vos processus marketing et CRM avec N8N
          </p>
        </div>
        <Button onClick={() => setShowCreateForm(!showCreateForm)}>
          <Plus className="w-4 h-4 mr-2" />
          Nouveau Workflow
        </Button>
      </div>

      {/* Predefined Workflows */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {predefinedWorkflows.map((workflow, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer group">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <workflow.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-sm">{workflow.name}</CardTitle>
                </div>
              </div>
              <CardDescription className="text-xs">
                {workflow.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {workflow.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button 
                size="sm" 
                className="w-full mt-4"
                onClick={() => {
                  setNewWorkflow({
                    name: workflow.name,
                    description: workflow.description,
                    workflow_type: workflow.type,
                    configuration: {}
                  });
                  setShowCreateForm(true);
                }}
              >
                Configurer
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Create Workflow Form */}
      {showCreateForm && (
        <Card>
          <CardHeader>
            <CardTitle>Créer un nouveau workflow</CardTitle>
            <CardDescription>
              Configurez votre automation personnalisée
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreateWorkflow} className="space-y-4">
              <Input
                placeholder="Nom du workflow"
                value={newWorkflow.name}
                onChange={(e) => setNewWorkflow({...newWorkflow, name: e.target.value})}
                required
              />
              <Textarea
                placeholder="Description du workflow"
                value={newWorkflow.description}
                onChange={(e) => setNewWorkflow({...newWorkflow, description: e.target.value})}
                rows={3}
              />
              <Select 
                value={newWorkflow.workflow_type} 
                onValueChange={(value) => setNewWorkflow({...newWorkflow, workflow_type: value})}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Type de workflow" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lead_nurturing">Lead Nurturing</SelectItem>
                  <SelectItem value="content_publishing">Publication Contenu</SelectItem>
                  <SelectItem value="seo_monitoring">Monitoring SEO</SelectItem>
                  <SelectItem value="social_media">Réseaux Sociaux</SelectItem>
                  <SelectItem value="email_marketing">Email Marketing</SelectItem>
                  <SelectItem value="data_sync">Synchronisation Données</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex gap-2">
                <Button type="submit" disabled={createWorkflowMutation.isPending}>
                  {createWorkflowMutation.isPending ? 'Création...' : 'Créer le Workflow'}
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowCreateForm(false)}>
                  Annuler
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Active Workflows */}
      <Card>
        <CardHeader>
          <CardTitle>Workflows Actifs</CardTitle>
          <CardDescription>
            Gérez vos automations existantes
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            </div>
          ) : workflows?.length === 0 ? (
            <div className="text-center py-8">
              <Zap className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun workflow</h3>
              <p className="text-gray-500">Créez votre première automation pour commencer</p>
            </div>
          ) : (
            <div className="space-y-4">
              {workflows?.map((workflow) => (
                <div key={workflow.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      {getWorkflowIcon(workflow.workflow_type)}
                    </div>
                    <div>
                      <h4 className="font-medium">{workflow.name}</h4>
                      <p className="text-sm text-gray-600">{workflow.description}</p>
                      <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                        <span>Exécutions: {workflow.total_runs || 0}</span>
                        {workflow.last_run && (
                          <span>
                            Dernière: {new Date(workflow.last_run).toLocaleDateString('fr-FR')}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className={getStatusColor(workflow.status)}>
                      {workflow.status === 'active' ? (
                        <Play className="w-3 h-3 mr-1" />
                      ) : (
                        <Pause className="w-3 h-3 mr-1" />
                      )}
                      {workflow.status}
                    </Badge>
                    <Switch
                      checked={workflow.status === 'active'}
                      onCheckedChange={(checked) => 
                        toggleWorkflowMutation.mutate({ 
                          id: workflow.id, 
                          status: checked ? 'active' : 'paused' 
                        })
                      }
                    />
                    <Button size="sm" variant="outline">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Automation Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Workflows Actifs</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {workflows?.filter(w => w.status === 'active').length || 0}
            </div>
            <p className="text-xs text-muted-foreground">
              +2 depuis la semaine dernière
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Exécutions ce mois</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {workflows?.reduce((acc, w) => acc + (w.total_runs || 0), 0) || 0}
            </div>
            <p className="text-xs text-muted-foreground">
              Économie de 15h de travail manuel
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taux de Réussite</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.5%</div>
            <p className="text-xs text-muted-foreground">
              +0.5% vs mois dernier
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AutomationCenter;
