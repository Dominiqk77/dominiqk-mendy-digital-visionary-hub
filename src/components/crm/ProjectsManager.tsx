
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import {
  FolderOpen,
  Plus,
  Calendar,
  DollarSign,
  CheckCircle,
  Clock,
  AlertCircle,
  Play,
  Pause,
  Archive
} from 'lucide-react';

const ProjectsManager = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    project_type: '',
    budget_range: '',
    deadline: ''
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    }
  });

  const addProjectMutation = useMutation({
    mutationFn: async (projectData: typeof newProject) => {
      const { data, error } = await supabase
        .from('projects')
        .insert([projectData])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      setShowAddForm(false);
      setNewProject({
        title: '',
        description: '',
        project_type: '',
        budget_range: '',
        deadline: ''
      });
      toast({
        title: "Projet créé !",
        description: "Le nouveau projet a été ajouté avec succès",
      });
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Impossible de créer le projet",
        variant: "destructive",
      });
    }
  });

  const updateProjectStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const { error } = await supabase
        .from('projects')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast({
        title: "Statut mis à jour !",
        description: "Le statut du projet a été modifié",
      });
    }
  });

  const updateProjectProgressMutation = useMutation({
    mutationFn: async ({ id, progress }: { id: string; progress: number }) => {
      const { error } = await supabase
        .from('projects')
        .update({ progress, updated_at: new Date().toISOString() })
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    }
  });

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    addProjectMutation.mutate(newProject);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'on-hold': return 'bg-orange-100 text-orange-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <Play className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'on-hold': return <Pause className="w-4 h-4" />;
      case 'cancelled': return <AlertCircle className="w-4 h-4" />;
      default: return <FolderOpen className="w-4 h-4" />;
    }
  };

  const isDeadlineNear = (deadline: string) => {
    if (!deadline) return false;
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7 && diffDays >= 0;
  };

  const isOverdue = (deadline: string) => {
    if (!deadline) return false;
    const deadlineDate = new Date(deadline);
    const today = new Date();
    return deadlineDate < today;
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Gestion des Projets
          </h1>
          <p className="text-gray-600">
            Suivez l'avancement de vos projets clients
          </p>
        </div>
        <Button onClick={() => setShowAddForm(!showAddForm)}>
          <Plus className="w-4 h-4 mr-2" />
          Nouveau Projet
        </Button>
      </div>

      {/* Add Project Form */}
      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>Créer un nouveau projet</CardTitle>
            <CardDescription>
              Remplissez les détails du projet client
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddProject} className="space-y-4">
              <Input
                placeholder="Titre du projet"
                value={newProject.title}
                onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                required
              />
              <Textarea
                placeholder="Description du projet"
                value={newProject.description}
                onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                rows={3}
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Select value={newProject.project_type} onValueChange={(value) => setNewProject({...newProject, project_type: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Type de projet" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">Site Web</SelectItem>
                    <SelectItem value="mobile-app">Application Mobile</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="marketing">Marketing Digital</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="ai-solution">Solution IA</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={newProject.budget_range} onValueChange={(value) => setNewProject({...newProject, budget_range: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-5k">0 - 5 000€</SelectItem>
                    <SelectItem value="5k-15k">5 000 - 15 000€</SelectItem>
                    <SelectItem value="15k-30k">15 000 - 30 000€</SelectItem>
                    <SelectItem value="30k-50k">30 000 - 50 000€</SelectItem>
                    <SelectItem value="50k+">50 000€+</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="date"
                  value={newProject.deadline}
                  onChange={(e) => setNewProject({...newProject, deadline: e.target.value})}
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit" disabled={addProjectMutation.isPending}>
                  {addProjectMutation.isPending ? 'Création...' : 'Créer le Projet'}
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                  Annuler
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <div className="col-span-full text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          </div>
        ) : projects?.length === 0 ? (
          <div className="col-span-full">
            <Card>
              <CardContent className="text-center py-8">
                <FolderOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun projet</h3>
                <p className="text-gray-500">Créez votre premier projet pour commencer</p>
              </CardContent>
            </Card>
          </div>
        ) : (
          projects?.map((project) => (
            <Card key={project.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getStatusColor(project.status)}>
                        {getStatusIcon(project.status)}
                        <span className="ml-1 capitalize">{project.status}</span>
                      </Badge>
                      {project.project_type && (
                        <Badge variant="outline">
                          {project.project_type}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                {project.description && (
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Progress */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Progression</span>
                      <span className="text-sm text-gray-500">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2 text-sm">
                    {project.budget_range && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <DollarSign className="w-4 h-4" />
                        <span>{project.budget_range}</span>
                      </div>
                    )}
                    {project.deadline && (
                      <div className={`flex items-center gap-2 ${
                        isOverdue(project.deadline) ? 'text-red-600' :
                        isDeadlineNear(project.deadline) ? 'text-orange-600' :
                        'text-gray-600'
                      }`}>
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(project.deadline).toLocaleDateString('fr-FR')}
                          {isOverdue(project.deadline) && ' (En retard)'}
                          {isDeadlineNear(project.deadline) && !isOverdue(project.deadline) && ' (Bientôt)'}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Select
                      value={project.status}
                      onValueChange={(status) => updateProjectStatusMutation.mutate({ id: project.id, status })}
                    >
                      <SelectTrigger className="flex-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">En attente</SelectItem>
                        <SelectItem value="active">Actif</SelectItem>
                        <SelectItem value="on-hold">En pause</SelectItem>
                        <SelectItem value="completed">Terminé</SelectItem>
                        <SelectItem value="cancelled">Annulé</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      value={project.progress}
                      onChange={(e) => updateProjectProgressMutation.mutate({ 
                        id: project.id, 
                        progress: parseInt(e.target.value) || 0 
                      })}
                      className="w-20"
                      placeholder="%"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default ProjectsManager;
