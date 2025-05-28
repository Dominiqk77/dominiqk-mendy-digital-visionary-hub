
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { 
  Key, 
  ExternalLink, 
  CheckCircle, 
  AlertCircle, 
  Copy, 
  Eye, 
  EyeOff,
  Zap,
  Image,
  Search,
  Mail,
  MessageSquare,
  BarChart3
} from 'lucide-react';

const APIConfiguration = () => {
  const [showKeys, setShowKeys] = useState<{[key: string]: boolean}>({});
  const [apiKeys, setApiKeys] = useState<{[key: string]: string}>({});

  const toggleKeyVisibility = (keyName: string) => {
    setShowKeys(prev => ({ ...prev, [keyName]: !prev[keyName] }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const apis = [
    {
      category: "IA & Génération de Contenu",
      icon: Zap,
      color: "from-purple-500 to-blue-500",
      services: [
        {
          name: "Hugging Face",
          description: "API gratuite pour IA générative (texte, images)",
          quota: "30 000 requêtes/mois",
          url: "https://huggingface.co/settings/tokens",
          keyFormat: "hf_xxxxxxxxxxxxxxxxxx",
          instructions: "1. Créez un compte gratuit\n2. Allez dans Settings > Access Tokens\n3. Créez un nouveau token avec les permissions 'read'"
        },
        {
          name: "Stability AI",
          description: "Génération d'images avec Stable Diffusion",
          quota: "25 crédits gratuits/mois",
          url: "https://platform.stability.ai/account/keys",
          keyFormat: "sk-xxxxxxxxxxxxxxxxxx",
          instructions: "1. Inscription gratuite\n2. Section API Keys\n3. Générer une nouvelle clé"
        }
      ]
    },
    {
      category: "SEO & Web Scraping",
      icon: Search,
      color: "from-green-500 to-teal-500",
      services: [
        {
          name: "ScrapingBee",
          description: "Web scraping pour analyse SEO",
          quota: "1 000 requêtes/mois",
          url: "https://app.scrapingbee.com/account/api",
          keyFormat: "xxxxxxxxxxxxxxxxxx",
          instructions: "1. Compte gratuit\n2. Dashboard > API\n3. Copiez votre API key"
        },
        {
          name: "Google Search Console API",
          description: "Données SEO officielles Google",
          quota: "Gratuit illimité",
          url: "https://console.cloud.google.com/apis/credentials",
          keyFormat: "Google OAuth2",
          instructions: "1. Google Cloud Console\n2. APIs & Services > Credentials\n3. Créer OAuth 2.0 Client ID"
        }
      ]
    },
    {
      category: "Lead Generation",
      icon: BarChart3,
      color: "from-orange-500 to-red-500",
      services: [
        {
          name: "Hunter.io",
          description: "Recherche d'emails professionnels",
          quota: "25 recherches/mois",
          url: "https://hunter.io/api_keys",
          keyFormat: "xxxxxxxxxxxxxxxxxx",
          instructions: "1. Compte gratuit Hunter.io\n2. API > API Keys\n3. Générer une nouvelle clé"
        },
        {
          name: "Clearbit",
          description: "Enrichissement de données prospects",
          quota: "50 requêtes/mois",
          url: "https://clearbit.com/keys",
          keyFormat: "sk_xxxxxxxxxxxxxxxxxx",
          instructions: "1. Inscription Clearbit\n2. Settings > API Keys\n3. Créer une nouvelle clé"
        }
      ]
    },
    {
      category: "Communication & Marketing",
      icon: MessageSquare,
      color: "from-blue-500 to-indigo-500",
      services: [
        {
          name: "Twilio",
          description: "SMS et communications",
          quota: "Crédits gratuits d'essai",
          url: "https://console.twilio.com/project/api-keys",
          keyFormat: "ACxxxxxxxxxxxxxxxxxx",
          instructions: "1. Compte Twilio gratuit\n2. Console > API Keys\n3. Créer une nouvelle clé API"
        },
        {
          name: "Facebook Graph API",
          description: "Marketing sur Facebook/Instagram",
          quota: "Gratuit avec limites",
          url: "https://developers.facebook.com/tools/explorer/",
          keyFormat: "Facebook Token",
          instructions: "1. Facebook Developers\n2. Créer une app\n3. Générer un access token"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-portfolio-space">
      <Navbar />
      
      <div className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-2">
                <Key className="w-4 h-4 mr-2" />
                Configuration APIs Gratuites
              </Badge>
              <h1 className="text-4xl font-bold text-white mb-4">
                Configurez Vos APIs Gratuites
              </h1>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Obtenez vos clés API gratuites pour débloquer toutes les fonctionnalités du CRM Pro. 
                Toutes ces APIs offrent des quotas généreux qui couvrent largement vos besoins.
              </p>
            </div>

            {/* Global Status */}
            <Alert className="mb-8 bg-green-500/10 border-green-500/20 text-green-300">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Coût total : 0€/mois</strong> - Toutes ces APIs offrent des quotas gratuits suffisants pour la plupart des usages professionnels.
              </AlertDescription>
            </Alert>

            {/* API Categories */}
            <Tabs defaultValue="content" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4 bg-black/40 border border-white/10">
                <TabsTrigger value="content" className="data-[state=active]:bg-purple-500/20">
                  <Zap className="w-4 h-4 mr-2" />
                  IA & Contenu
                </TabsTrigger>
                <TabsTrigger value="seo" className="data-[state=active]:bg-green-500/20">
                  <Search className="w-4 h-4 mr-2" />
                  SEO & Web
                </TabsTrigger>
                <TabsTrigger value="leads" className="data-[state=active]:bg-orange-500/20">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Lead Gen
                </TabsTrigger>
                <TabsTrigger value="marketing" className="data-[state=active]:bg-blue-500/20">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Marketing
                </TabsTrigger>
              </TabsList>

              {apis.map((category, categoryIndex) => (
                <TabsContent key={categoryIndex} value={category.category.toLowerCase().includes('ia') ? 'content' : 
                  category.category.toLowerCase().includes('seo') ? 'seo' :
                  category.category.toLowerCase().includes('lead') ? 'leads' : 'marketing'} 
                  className="space-y-6">
                  
                  <div className="grid gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <Card key={serviceIndex} className="bg-black/40 border-white/10 backdrop-blur-sm">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                                <category.icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <CardTitle className="text-white text-xl">{service.name}</CardTitle>
                                <CardDescription className="text-gray-400">
                                  {service.description}
                                </CardDescription>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-green-400 border-green-400/30">
                              {service.quota}
                            </Badge>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                          {/* Instructions */}
                          <div className="bg-black/20 rounded-lg p-4">
                            <Label className="text-sm font-medium text-gray-300 mb-2 block">
                              Instructions d'obtention :
                            </Label>
                            <pre className="text-sm text-gray-400 whitespace-pre-line font-mono">
                              {service.instructions}
                            </pre>
                          </div>

                          {/* API Key Input */}
                          <div className="space-y-2">
                            <Label htmlFor={`api-${serviceIndex}`} className="text-sm font-medium text-gray-300">
                              Clé API (Format: {service.keyFormat})
                            </Label>
                            <div className="flex space-x-2">
                              <div className="relative flex-1">
                                <Input
                                  id={`api-${serviceIndex}`}
                                  type={showKeys[service.name] ? "text" : "password"}
                                  placeholder={`Collez votre clé ${service.name} ici...`}
                                  value={apiKeys[service.name] || ''}
                                  onChange={(e) => setApiKeys(prev => ({ ...prev, [service.name]: e.target.value }))}
                                  className="bg-black/20 border-white/10 text-white pr-10"
                                />
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
                                  onClick={() => toggleKeyVisibility(service.name)}
                                >
                                  {showKeys[service.name] ? 
                                    <EyeOff className="h-3 w-3" /> : 
                                    <Eye className="h-3 w-3" />
                                  }
                                </Button>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => window.open(service.url, '_blank')}
                                className="border-white/20 text-white hover:bg-white/10"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Obtenir
                              </Button>
                            </div>
                          </div>

                          {/* Status */}
                          {apiKeys[service.name] && (
                            <div className="flex items-center space-x-2 text-green-400">
                              <CheckCircle className="w-4 h-4" />
                              <span className="text-sm">Clé API configurée</span>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            {/* Save Configuration */}
            <div className="mt-12 text-center">
              <Card className="bg-black/40 border-white/10 backdrop-blur-sm max-w-2xl mx-auto">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Configuration Terminée ?
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Une fois vos clés API configurées, retournez au CRM Pro pour profiter de toutes les fonctionnalités.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-gradient-to-r from-emerald-500 to-blue-500">
                      Sauvegarder & Tester les APIs
                    </Button>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Retour au CRM Pro
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default APIConfiguration;
