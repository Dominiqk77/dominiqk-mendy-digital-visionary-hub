
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import {
  Users,
  Plus,
  Search,
  Filter,
  Mail,
  Phone,
  Globe,
  Building,
  Star,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';

const LeadsManagement = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [newLead, setNewLead] = useState({
    company_name: '',
    contact_name: '',
    email: '',
    phone: '',
    website: '',
    industry: '',
    company_size: '',
    notes: ''
  });
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: leads, isLoading } = useQuery({
    queryKey: ['crm-leads'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('crm_leads')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data || [];
    }
  });

  const addLeadMutation = useMutation({
    mutationFn: async (leadData: typeof newLead) => {
      const { data, error } = await supabase
        .from('crm_leads')
        .insert([{
          ...leadData,
          source_type: 'manual',
          status: 'new'
        }])
        .select()
        .single();
      
      if (error) throw error;
      
      // Calculate lead score
      await supabase.rpc('calculate_lead_score_crm', { lead_id: data.id });
      
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['crm-leads'] });
      setShowAddForm(false);
      setNewLead({
        company_name: '',
        contact_name: '',
        email: '',
        phone: '',
        website: '',
        industry: '',
        company_size: '',
        notes: ''
      });
      toast({
        title: "Lead ajouté !",
        description: "Le nouveau lead a été créé avec succès",
      });
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Impossible d'ajouter le lead",
        variant: "destructive",
      });
    }
  });

  const updateLeadStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const { error } = await supabase
        .from('crm_leads')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['crm-leads'] });
      toast({
        title: "Statut mis à jour !",
        description: "Le statut du lead a été modifié",
      });
    }
  });

  const handleAddLead = (e: React.FormEvent) => {
    e.preventDefault();
    addLeadMutation.mutate(newLead);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'qualified': return 'bg-green-100 text-green-800';
      case 'converted': return 'bg-purple-100 text-purple-800';
      case 'lost': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const filteredLeads = leads?.filter(lead => {
    const matchesSearch = 
      lead.company_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.contact_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Gestion des Leads
          </h1>
          <p className="text-gray-600">
            Gérez vos prospects et suivez leur progression
          </p>
        </div>
        <Button onClick={() => setShowAddForm(!showAddForm)}>
          <Plus className="w-4 h-4 mr-2" />
          Nouveau Lead
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Rechercher par nom, entreprise ou email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les statuts</SelectItem>
            <SelectItem value="new">Nouveau</SelectItem>
            <SelectItem value="contacted">Contacté</SelectItem>
            <SelectItem value="qualified">Qualifié</SelectItem>
            <SelectItem value="converted">Converti</SelectItem>
            <SelectItem value="lost">Perdu</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Add Lead Form */}
      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>Ajouter un nouveau lead</CardTitle>
            <CardDescription>
              Remplissez les informations du prospect
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddLead} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Nom de l'entreprise"
                value={newLead.company_name}
                onChange={(e) => setNewLead({...newLead, company_name: e.target.value})}
                required
              />
              <Input
                placeholder="Nom du contact"
                value={newLead.contact_name}
                onChange={(e) => setNewLead({...newLead, contact_name: e.target.value})}
                required
              />
              <Input
                type="email"
                placeholder="Email"
                value={newLead.email}
                onChange={(e) => setNewLead({...newLead, email: e.target.value})}
                required
              />
              <Input
                placeholder="Téléphone"
                value={newLead.phone}
                onChange={(e) => setNewLead({...newLead, phone: e.target.value})}
              />
              <Input
                placeholder="Site web"
                value={newLead.website}
                onChange={(e) => setNewLead({...newLead, website: e.target.value})}
              />
              <Select value={newLead.industry} onValueChange={(value) => setNewLead({...newLead, industry: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Secteur d'activité" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technology">Technologie</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="healthcare">Santé</SelectItem>
                  <SelectItem value="retail">Commerce</SelectItem>
                  <SelectItem value="manufacturing">Industrie</SelectItem>
                  <SelectItem value="other">Autre</SelectItem>
                </SelectContent>
              </Select>
              <Select value={newLead.company_size} onValueChange={(value) => setNewLead({...newLead, company_size: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Taille de l'entreprise" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="startup">Startup (1-10)</SelectItem>
                  <SelectItem value="small">PME (11-50)</SelectItem>
                  <SelectItem value="medium">Moyenne (51-200)</SelectItem>
                  <SelectItem value="large">Grande (201-1000)</SelectItem>
                  <SelectItem value="enterprise">Enterprise (1000+)</SelectItem>
                </SelectContent>
              </Select>
              <div className="md:col-span-2">
                <Textarea
                  placeholder="Notes"
                  value={newLead.notes}
                  onChange={(e) => setNewLead({...newLead, notes: e.target.value})}
                  rows={3}
                />
              </div>
              <div className="md:col-span-2 flex gap-2">
                <Button type="submit" disabled={addLeadMutation.isPending}>
                  {addLeadMutation.isPending ? 'Ajout...' : 'Ajouter le Lead'}
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                  Annuler
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Leads List */}
      <div className="grid grid-cols-1 gap-4">
        {isLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          </div>
        ) : filteredLeads?.length === 0 ? (
          <Card>
            <CardContent className="text-center py-8">
              <Users className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun lead trouvé</h3>
              <p className="text-gray-500">Commencez par ajouter votre premier lead</p>
            </CardContent>
          </Card>
        ) : (
          filteredLeads?.map((lead) => (
            <Card key={lead.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {lead.company_name || 'Entreprise non renseignée'}
                      </h3>
                      <Badge className={getStatusColor(lead.status)}>
                        {lead.status}
                      </Badge>
                      {lead.lead_score > 0 && (
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className={`font-medium ${getScoreColor(lead.lead_score)}`}>
                            {lead.lead_score}/100
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-3">{lead.contact_name}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      {lead.email && (
                        <div className="flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          <span>{lead.email}</span>
                        </div>
                      )}
                      {lead.phone && (
                        <div className="flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          <span>{lead.phone}</span>
                        </div>
                      )}
                      {lead.website && (
                        <div className="flex items-center gap-1">
                          <Globe className="w-4 h-4" />
                          <span>{lead.website}</span>
                        </div>
                      )}
                      {lead.industry && (
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          <span>{lead.industry}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Select
                      value={lead.status}
                      onValueChange={(status) => updateLeadStatusMutation.mutate({ id: lead.id, status })}
                    >
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">Nouveau</SelectItem>
                        <SelectItem value="contacted">Contacté</SelectItem>
                        <SelectItem value="qualified">Qualifié</SelectItem>
                        <SelectItem value="converted">Converti</SelectItem>
                        <SelectItem value="lost">Perdu</SelectItem>
                      </SelectContent>
                    </Select>
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

export default LeadsManagement;
