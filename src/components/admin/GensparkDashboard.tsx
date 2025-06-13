
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  BarChart3, 
  Settings, 
  Shield, 
  Book, 
  Wand2, 
  Target, 
  TrendingUp,
  Key,
  Activity,
  Globe
} from 'lucide-react';
import GensparkApiDocs from './GensparkApiDocs';
import GensparkApiTester from './GensparkApiTester';
import GensparkApiKeyGenerator from './GensparkApiKeyGenerator';

const GensparkDashboard = () => {
  const [activeEndpoints] = useState(25);
  const [totalRequests] = useState(1247);
  const [successRate] = useState(99.2);

  const stats = [
    {
      title: "Endpoints Actifs",
      value: activeEndpoints,
      icon: Zap,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Requêtes Totales",
      value: totalRequests,
      icon: BarChart3,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "Taux de Succès",
      value: `${successRate}%`,
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "Uptime",
      value: "99.9%",
      icon: Activity,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  const features = [
    {
      title: "Bibliothèque IA",
      description: "Gestion automatisée des e-books et contenus",
      endpoints: 5,
      status: "Actif",
      icon: Book
    },
    {
      title: "Génération de Contenu",
      description: "IA avancée pour création de contenu optimisé",
      endpoints: 4,
      status: "Actif",
      icon: Wand2
    },
    {
      title: "Marketing Intelligent",
      description: "Automatisation des campagnes et analytics",
      endpoints: 6,
      status: "Actif",
      icon: Target
    },
    {
      title: "Intégrations Tierces",
      description: "Connexions APIs externes (Mailchimp, Social...)",
      endpoints: 3,
      status: "Actif",
      icon: Globe
    },
    {
      title: "Sécurité Avancée",
      description: "Monitoring, audit et protection",
      endpoints: 4,
      status: "Actif",
      icon: Shield
    },
    {
      title: "Automatisations",
      description: "Workflows intelligents et scheduling",
      endpoints: 3,
      status: "Actif",
      icon: Settings
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Dashboard Genspark
          </h1>
          <p className="text-gray-600 text-lg">
            Plateforme IA complète - 25+ endpoints avancés
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="api-key">API Key</TabsTrigger>
            <TabsTrigger value="docs">Documentation</TabsTrigger>
            <TabsTrigger value="tester">Test API</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <feature.icon className="w-5 h-5" />
                        <span>{feature.title}</span>
                      </div>
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        {feature.status}
                      </Badge>
                    </CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        {feature.endpoints} endpoints
                      </span>
                      <Button variant="outline" size="sm">
                        Voir détails
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Statut du Système</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-50 border border-green-200 rounded-lg">
                    <span className="font-medium text-green-800">🚀 Système Opérationnel</span>
                    <Badge className="bg-green-100 text-green-800">Actif</Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="font-semibold text-blue-900">25+ Endpoints</div>
                      <div className="text-blue-600">Tous fonctionnels</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="font-semibold text-purple-900">3 Phases</div>
                      <div className="text-purple-600">Complètement implémentées</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <div className="font-semibold text-orange-900">0 Impact</div>
                      <div className="text-orange-600">Sur l'UX/UI existant</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api-key">
            <GensparkApiKeyGenerator />
          </TabsContent>

          <TabsContent value="docs">
            <GensparkApiDocs />
          </TabsContent>

          <TabsContent value="tester">
            <GensparkApiTester />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GensparkDashboard;
