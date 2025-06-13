
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { 
  PlayCircle, 
  Loader2, 
  CheckCircle, 
  XCircle, 
  Code,
  Zap
} from 'lucide-react';

const GensparkApiTester = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedEndpoint, setSelectedEndpoint] = useState('content/create');
  const [apiKey, setApiKey] = useState('');
  const [response, setResponse] = useState<any>(null);
  
  // Form states pour différents endpoints
  const [contentForm, setContentForm] = useState({
    contentType: 'blog-article',
    prompt: '',
    title: ''
  });

  const [bookForm, setBookForm] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    pages: '',
    featured: false
  });

  const [campaignForm, setCampaignForm] = useState({
    campaignName: '',
    campaignType: 'email',
    objective: '',
    budget: '',
    duration: ''
  });

  const baseUrl = "https://rohwyheclmjmiuoksvuc.supabase.co/functions/v1/genspark-api";

  const testEndpoint = async () => {
    if (!apiKey.trim()) {
      toast({
        title: "API Key requise",
        description: "Veuillez entrer votre API Key Genspark",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setResponse(null);

    try {
      let payload = {};
      let endpoint = selectedEndpoint;

      // Préparation du payload selon l'endpoint
      switch (selectedEndpoint) {
        case 'content/create':
          if (!contentForm.prompt.trim()) {
            throw new Error('Le prompt est requis');
          }
          payload = {
            contentType: contentForm.contentType,
            prompt: contentForm.prompt,
            title: contentForm.title || undefined
          };
          break;

        case 'library/add-book':
          if (!bookForm.title.trim() || !bookForm.description.trim()) {
            throw new Error('Titre et description requis');
          }
          payload = {
            title: bookForm.title,
            description: bookForm.description,
            category: bookForm.category || 'Intelligence Artificielle',
            price: parseFloat(bookForm.price) || 0,
            pages: parseInt(bookForm.pages) || undefined,
            featured: bookForm.featured
          };
          break;

        case 'marketing/campaign':
          if (!campaignForm.campaignName.trim() || !campaignForm.objective.trim()) {
            throw new Error('Nom de campagne et objectif requis');
          }
          payload = {
            campaignName: campaignForm.campaignName,
            campaignType: campaignForm.campaignType,
            objective: campaignForm.objective,
            budget: parseFloat(campaignForm.budget) || 0,
            duration: parseInt(campaignForm.duration) || 30
          };
          break;
      }

      // Appel API
      const response = await fetch(`${baseUrl}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-genspark-api-key': apiKey
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      
      setResponse({
        status: response.status,
        success: result.success,
        data: result,
        timestamp: new Date().toISOString()
      });

      if (result.success) {
        toast({
          title: "Test réussi !",
          description: "L'endpoint fonctionne correctement",
        });
      } else {
        toast({
          title: "Erreur API",
          description: result.error || "Erreur inconnue",
          variant: "destructive",
        });
      }

    } catch (error: any) {
      setResponse({
        status: 0,
        success: false,
        data: { error: error.message },
        timestamp: new Date().toISOString()
      });

      toast({
        title: "Erreur de test",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          🧪 Testeur API Genspark
        </h1>
        <p className="text-blue-200">
          Testez vos endpoints en temps réel
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Configuration du Test */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Code className="w-5 h-5 mr-2" />
              Configuration du Test
            </CardTitle>
            <CardDescription className="text-blue-200">
              Configurez et lancez vos tests API
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* API Key */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                API Key Genspark
              </label>
              <Input
                type="password"
                placeholder="Entrez votre API Key..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="bg-white/10 border-white/20 text-white"
              />
            </div>

            {/* Sélection Endpoint */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Endpoint à tester
              </label>
              <Select value={selectedEndpoint} onValueChange={setSelectedEndpoint}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="content/create" className="text-white">
                    POST /content/create
                  </SelectItem>
                  <SelectItem value="library/add-book" className="text-white">
                    POST /library/add-book
                  </SelectItem>
                  <SelectItem value="marketing/campaign" className="text-white">
                    POST /marketing/campaign
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Formulaires selon l'endpoint */}
            {selectedEndpoint === 'content/create' && (
              <div className="space-y-4 p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <h3 className="font-semibold text-blue-200">Paramètres Contenu</h3>
                
                <div>
                  <label className="block text-sm text-blue-200 mb-1">Type de contenu</label>
                  <Select value={contentForm.contentType} onValueChange={(value) => 
                    setContentForm(prev => ({ ...prev, contentType: value }))
                  }>
                    <SelectTrigger className="bg-white/10 border-blue-500/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-700">
                      <SelectItem value="blog-article" className="text-white">Blog Article</SelectItem>
                      <SelectItem value="marketing-copy" className="text-white">Marketing Copy</SelectItem>
                      <SelectItem value="seo-content" className="text-white">Contenu SEO</SelectItem>
                      <SelectItem value="social-media" className="text-white">Réseaux Sociaux</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm text-blue-200 mb-1">Prompt *</label>
                  <Textarea
                    placeholder="Décrivez le contenu à générer..."
                    value={contentForm.prompt}
                    onChange={(e) => setContentForm(prev => ({ ...prev, prompt: e.target.value }))}
                    className="bg-white/10 border-blue-500/30 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-blue-200 mb-1">Titre (optionnel)</label>
                  <Input
                    placeholder="Titre du contenu..."
                    value={contentForm.title}
                    onChange={(e) => setContentForm(prev => ({ ...prev, title: e.target.value }))}
                    className="bg-white/10 border-blue-500/30 text-white"
                  />
                </div>
              </div>
            )}

            {selectedEndpoint === 'library/add-book' && (
              <div className="space-y-4 p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                <h3 className="font-semibold text-green-200">Paramètres Livre</h3>
                
                <div>
                  <label className="block text-sm text-green-200 mb-1">Titre *</label>
                  <Input
                    placeholder="Titre du livre..."
                    value={bookForm.title}
                    onChange={(e) => setBookForm(prev => ({ ...prev, title: e.target.value }))}
                    className="bg-white/10 border-green-500/30 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-green-200 mb-1">Description *</label>
                  <Textarea
                    placeholder="Description du livre..."
                    value={bookForm.description}
                    onChange={(e) => setBookForm(prev => ({ ...prev, description: e.target.value }))}
                    className="bg-white/10 border-green-500/30 text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-green-200 mb-1">Prix (€)</label>
                    <Input
                      type="number"
                      placeholder="147"
                      value={bookForm.price}
                      onChange={(e) => setBookForm(prev => ({ ...prev, price: e.target.value }))}
                      className="bg-white/10 border-green-500/30 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-green-200 mb-1">Pages</label>
                    <Input
                      type="number"
                      placeholder="250"
                      value={bookForm.pages}
                      onChange={(e) => setBookForm(prev => ({ ...prev, pages: e.target.value }))}
                      className="bg-white/10 border-green-500/30 text-white"
                    />
                  </div>
                </div>
              </div>
            )}

            {selectedEndpoint === 'marketing/campaign' && (
              <div className="space-y-4 p-4 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <h3 className="font-semibold text-purple-200">Paramètres Campagne</h3>
                
                <div>
                  <label className="block text-sm text-purple-200 mb-1">Nom campagne *</label>
                  <Input
                    placeholder="Lancement IA Academy..."
                    value={campaignForm.campaignName}
                    onChange={(e) => setCampaignForm(prev => ({ ...prev, campaignName: e.target.value }))}
                    className="bg-white/10 border-purple-500/30 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm text-purple-200 mb-1">Objectif *</label>
                  <Input
                    placeholder="Augmenter les inscriptions..."
                    value={campaignForm.objective}
                    onChange={(e) => setCampaignForm(prev => ({ ...prev, objective: e.target.value }))}
                    className="bg-white/10 border-purple-500/30 text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-purple-200 mb-1">Budget (€)</label>
                    <Input
                      type="number"
                      placeholder="5000"
                      value={campaignForm.budget}
                      onChange={(e) => setCampaignForm(prev => ({ ...prev, budget: e.target.value }))}
                      className="bg-white/10 border-purple-500/30 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-purple-200 mb-1">Durée (jours)</label>
                    <Input
                      type="number"
                      placeholder="30"
                      value={campaignForm.duration}
                      onChange={(e) => setCampaignForm(prev => ({ ...prev, duration: e.target.value }))}
                      className="bg-white/10 border-purple-500/30 text-white"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Bouton de Test */}
            <Button 
              onClick={testEndpoint}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              size="lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Test en cours...
                </>
              ) : (
                <>
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Lancer le Test
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Résultats du Test */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Résultats du Test
            </CardTitle>
            <CardDescription className="text-blue-200">
              Réponse en temps réel de l'API
            </CardDescription>
          </CardHeader>
          <CardContent>
            {response ? (
              <div className="space-y-4">
                
                {/* Status */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {response.success ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-400" />
                    )}
                    <Badge variant={response.success ? "default" : "destructive"}>
                      {response.status} - {response.success ? 'Succès' : 'Erreur'}
                    </Badge>
                  </div>
                  <span className="text-xs text-gray-400">
                    {new Date(response.timestamp).toLocaleTimeString('fr-FR')}
                  </span>
                </div>

                {/* Réponse JSON */}
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <div className="text-sm text-gray-400 mb-2">Réponse JSON :</div>
                  <pre className="text-green-400 text-xs overflow-auto max-h-96">
                    {JSON.stringify(response.data, null, 2)}
                  </pre>
                </div>

                {/* Résumé du succès */}
                {response.success && response.data.data && (
                  <div className="p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                    <h4 className="font-semibold text-green-200 mb-2">✅ Test Réussi !</h4>
                    {response.data.data.content && (
                      <div>
                        <p className="text-sm text-green-100 mb-2">Contenu généré :</p>
                        <div className="bg-white/10 p-3 rounded text-sm text-white max-h-32 overflow-auto">
                          {response.data.data.content.substring(0, 200)}...
                        </div>
                      </div>
                    )}
                    {response.data.data.title && (
                      <p className="text-sm text-green-100 mt-2">
                        <strong>Titre :</strong> {response.data.data.title}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400">
                <Code className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Aucun test lancé</p>
                <p className="text-sm">Configurez et lancez un test pour voir les résultats</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GensparkApiTester;
