
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Users,
  FileText,
  TrendingUp,
  Zap,
  DollarSign,
  Target,
  Activity,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CRMDashboard = () => {
  const { data: stats } = useQuery({
    queryKey: ['crm-stats'],
    queryFn: async () => {
      const { data: leads } = await supabase
        .from('crm_leads')
        .select('*');
      
      const { data: content } = await supabase
        .from('generated_content')
        .select('*');
      
      const { data: projects } = await supabase
        .from('projects')
        .select('*');

      const { data: campaigns } = await supabase
        .from('marketing_campaigns')
        .select('*');

      return {
        leads: leads?.length || 0,
        content: content?.length || 0,
        projects: projects?.length || 0,
        campaigns: campaigns?.length || 0,
        activeProjects: projects?.filter(p => p.status === 'active').length || 0,
        conversionRate: leads && leads.length > 0 ? (leads.filter(l => l.status === 'converted').length / leads.length * 100) : 0
      };
    }
  });

  const quickActions = [
    {
      title: "Générer du Contenu",
      description: "Créer du contenu avec l'IA",
      icon: FileText,
      path: "/crm/content",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Analyser un Site",
      description: "Audit SEO complet",
      icon: TrendingUp,
      path: "/crm/seo",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Nouveau Lead",
      description: "Ajouter un prospect",
      icon: Users,
      path: "/crm/leads",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Automation",
      description: "Configurer les workflows",
      icon: Zap,
      path: "/crm/automation",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Dashboard CRM AI
        </h1>
        <p className="text-gray-600">
          Gérez vos leads, générez du contenu et automatisez vos processus
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.leads || 0}</div>
            <p className="text-xs text-muted-foreground">
              +12% depuis le mois dernier
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contenu Généré</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.content || 0}</div>
            <p className="text-xs text-muted-foreground">
              Économie de 500€ en rédaction
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projets Actifs</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.activeProjects || 0}</div>
            <p className="text-xs text-muted-foreground">
              {stats?.projects || 0} projets au total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taux de Conversion</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats?.conversionRate.toFixed(1) || 0}%</div>
            <p className="text-xs text-muted-foreground">
              +2.3% vs moyenne secteur
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {quickActions.map((action, index) => (
          <Link key={index} to={action.path}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">{action.title}</CardTitle>
                <CardDescription>{action.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      {/* Progress Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Utilisation API ce mois</CardTitle>
            <CardDescription>
              Suivi de votre consommation des APIs gratuites
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Groq (Texte)</span>
                <span>250/1000</span>
              </div>
              <Progress value={25} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Stability AI (Images)</span>
                <span>15/50</span>
              </div>
              <Progress value={30} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Edge-TTS (Voice)</span>
                <span>8/100</span>
              </div>
              <Progress value={8} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Économies Réalisées</CardTitle>
            <CardDescription>
              Grâce à l'utilisation des APIs gratuites
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Rédaction de contenu</span>
                <span className="font-semibold text-green-600">+1,250€</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Création d'images</span>
                <span className="font-semibold text-green-600">+340€</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Synthèse vocale</span>
                <span className="font-semibold text-green-600">+180€</span>
              </div>
              <div className="pt-4 border-t">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Total économisé</span>
                  <span className="text-xl font-bold text-green-600">1,770€</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CRMDashboard;
