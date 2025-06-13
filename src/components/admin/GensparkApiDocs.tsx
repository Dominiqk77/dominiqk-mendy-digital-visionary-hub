
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Book, Code, Zap, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const GensparkApiDocs = () => {
  const { toast } = useToast();
  const [copiedCode, setCopiedCode] = useState<string>('');

  const copyToClipboard = (code: string, label: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(label);
    setTimeout(() => setCopiedCode(''), 2000);
    toast({
      title: "Code copié !",
      description: `${label} copié dans le presse-papier`,
    });
  };

  const baseUrl = "https://rohwyheclmjmiuoksvuc.supabase.co/functions/v1/genspark-api";

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          📚 Documentation API Genspark
        </h1>
        <p className="text-xl text-blue-200 max-w-3xl mx-auto">
          Guide complet d'intégration pour votre agent IA Genspark - 
          Automatisez la génération de contenu en toute sécurité
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 bg-white/10 backdrop-blur-xl">
          <TabsTrigger value="overview" className="text-white">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="auth" className="text-white">Authentification</TabsTrigger>
          <TabsTrigger value="endpoints" className="text-white">Endpoints</TabsTrigger>
          <TabsTrigger value="examples" className="text-white">Exemples</TabsTrigger>
          <TabsTrigger value="security" className="text-white">Sécurité</TabsTrigger>
        </TabsList>

        {/* Vue d'ensemble */}
        <TabsContent value="overview" className="space-y-6">
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Book className="w-5 h-5 mr-2" />
                Introduction à l'API Genspark
              </CardTitle>
              <CardDescription className="text-blue-200">
                API dédiée pour automatiser la génération de contenu avec IA
              </CardDescription>
            </CardHeader>
            <CardContent className="text-white space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
                  <Zap className="w-8 h-8 text-blue-400 mb-2" />
                  <h3 className="font-semibold mb-1">Génération Rapide</h3>
                  <p className="text-sm text-blue-200">Créez du contenu optimisé en quelques secondes</p>
                </div>
                <div className="p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                  <Shield className="w-8 h-8 text-green-400 mb-2" />
                  <h3 className="font-semibold mb-1">Sécurité Avancée</h3>
                  <p className="text-sm text-green-200">API Keys, rate limiting, et logs complets</p>
                </div>
                <div className="p-4 bg-purple-500/20 rounded-lg border border-purple-500/30">
                  <Code className="w-8 h-8 text-purple-400 mb-2" />
                  <h3 className="font-semibold mb-1">Intégration Simple</h3>
                  <p className="text-sm text-purple-200">RESTful API avec exemples complets</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Fonctionnalités Disponibles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <Badge variant="default">✅</Badge>
                    <span>Génération d'articles de blog optimisés SEO</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="default">✅</Badge>
                    <span>Création de contenus marketing personnalisés</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="default">✅</Badge>
                    <span>Ajout automatique de livres à la bibliothèque</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="default">✅</Badge>
                    <span>Génération de campagnes marketing complètes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="default">✅</Badge>
                    <span>Contenus réseaux sociaux optimisés</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="default">✅</Badge>
                    <span>Monitoring et analytics en temps réel</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Authentification */}
        <TabsContent value="auth" className="space-y-6">
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Authentification API
              </CardTitle>
              <CardDescription className="text-blue-200">
                Configuration sécurisée pour accéder à l'API Genspark
              </CardDescription>
            </CardHeader>
            <CardContent className="text-white space-y-6">
              
              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-200 mb-2">🔑 API Key Obligatoire</h3>
                <p className="text-yellow-100 text-sm">
                  Toutes les requêtes doivent inclure votre API Key Genspark dans les headers.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Configuration Headers</h3>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Headers requis</span>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => copyToClipboard(`{
  "Content-Type": "application/json",
  "x-genspark-api-key": "VOTRE_API_KEY_GENSPARK"
}`, "Headers")}
                    >
                      {copiedCode === 'Headers' ? 'Copié !' : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                  <pre className="text-green-400 text-sm">
{`{
  "Content-Type": "application/json",
  "x-genspark-api-key": "VOTRE_API_KEY_GENSPARK"
}`}
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Rate Limiting</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-3 bg-blue-500/20 rounded border border-blue-500/30">
                    <div className="text-2xl font-bold text-blue-400">1000</div>
                    <div className="text-sm text-blue-200">Requêtes/heure</div>
                  </div>
                  <div className="p-3 bg-green-500/20 rounded border border-green-500/30">
                    <div className="text-2xl font-bold text-green-400">100</div>
                    <div className="text-sm text-green-200">Requêtes/minute</div>
                  </div>
                  <div className="p-3 bg-purple-500/20 rounded border border-purple-500/30">
                    <div className="text-2xl font-bold text-purple-400">10</div>
                    <div className="text-sm text-purple-200">Requêtes/seconde</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Endpoints */}
        <TabsContent value="endpoints" className="space-y-6">
          
          {/* Endpoint 1: Content Create */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Badge variant="default" className="mr-2">POST</Badge>
                /content/create
              </CardTitle>
              <CardDescription className="text-blue-200">
                Génération automatique de contenu IA optimisé
              </CardDescription>
            </CardHeader>
            <CardContent className="text-white space-y-4">
              
              <div>
                <h4 className="font-semibold mb-2">URL Complète</h4>
                <div className="bg-gray-900 rounded p-3 border border-gray-700">
                  <code className="text-green-400">{baseUrl}/content/create</code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Paramètres Requis</h4>
                <div className="space-y-2">
                  <div className="flex justify-between p-2 bg-white/5 rounded">
                    <span className="font-mono text-sm">contentType</span>
                    <Badge variant="outline">string</Badge>
                  </div>
                  <div className="flex justify-between p-2 bg-white/5 rounded">
                    <span className="font-mono text-sm">prompt</span>
                    <Badge variant="outline">string</Badge>
                  </div>
                  <div className="flex justify-between p-2 bg-white/5 rounded">
                    <span className="font-mono text-sm">title</span>
                    <Badge variant="secondary">optional</Badge>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Types de Contenu Supportés</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <Badge variant="default">blog-article</Badge>
                  <Badge variant="default">marketing-copy</Badge>
                  <Badge variant="default">seo-content</Badge>
                  <Badge variant="default">social-media</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Exemple Requête</h4>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">JSON Payload</span>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => copyToClipboard(`{
  "contentType": "blog-article",
  "prompt": "Écris un article sur l'IA en Afrique",
  "title": "L'IA révolutionne l'Afrique"
}`, "Content Create")}
                    >
                      {copiedCode === 'Content Create' ? 'Copié !' : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                  <pre className="text-green-400 text-sm">
{`{
  "contentType": "blog-article",
  "prompt": "Écris un article sur l'IA en Afrique",
  "title": "L'IA révolutionne l'Afrique"
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Endpoint 2: Library Add Book */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Badge variant="default" className="mr-2">POST</Badge>
                /library/add-book
              </CardTitle>
              <CardDescription className="text-blue-200">
                Ajout automatique de livres avec descriptions optimisées
              </CardDescription>
            </CardHeader>
            <CardContent className="text-white space-y-4">
              
              <div>
                <h4 className="font-semibold mb-2">URL Complète</h4>
                <div className="bg-gray-900 rounded p-3 border border-gray-700">
                  <code className="text-green-400">{baseUrl}/library/add-book</code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Exemple Requête</h4>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">JSON Payload</span>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => copyToClipboard(`{
  "title": "Maîtriser l'IA en Business",
  "description": "Guide complet pour entrepreneurs",
  "category": "Intelligence Artificielle",
  "price": 147,
  "pages": 250,
  "featured": true
}`, "Library Add")}
                    >
                      {copiedCode === 'Library Add' ? 'Copié !' : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                  <pre className="text-green-400 text-sm">
{`{
  "title": "Maîtriser l'IA en Business",
  "description": "Guide complet pour entrepreneurs",
  "category": "Intelligence Artificielle", 
  "price": 147,
  "pages": 250,
  "featured": true
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Endpoint 3: Marketing Campaign */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Badge variant="default" className="mr-2">POST</Badge>
                /marketing/campaign
              </CardTitle>
              <CardDescription className="text-blue-200">
                Création de campagnes marketing automatisées
              </CardDescription>
            </CardHeader>
            <CardContent className="text-white space-y-4">
              
              <div>
                <h4 className="font-semibold mb-2">URL Complète</h4>
                <div className="bg-gray-900 rounded p-3 border border-gray-700">
                  <code className="text-green-400">{baseUrl}/marketing/campaign</code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Exemple Requête</h4>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">JSON Payload</span>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => copyToClipboard(`{
  "campaignName": "Lancement IA Academy",
  "campaignType": "email",
  "objective": "Augmenter les inscriptions",
  "targetAudience": {
    "segment": "entrepreneurs-tech",
    "region": "afrique"
  },
  "budget": 5000,
  "duration": 30
}`, "Marketing Campaign")}
                    >
                      {copiedCode === 'Marketing Campaign' ? 'Copié !' : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                  <pre className="text-green-400 text-sm">
{`{
  "campaignName": "Lancement IA Academy",
  "campaignType": "email",
  "objective": "Augmenter les inscriptions",
  "targetAudience": {
    "segment": "entrepreneurs-tech",
    "region": "afrique"
  },
  "budget": 5000,
  "duration": 30
}`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Exemples */}
        <TabsContent value="examples" className="space-y-6">
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Exemples d'Intégration</CardTitle>
              <CardDescription className="text-blue-200">
                Code prêt à l'emploi pour intégrer l'API Genspark
              </CardDescription>
            </CardHeader>
            <CardContent className="text-white space-y-6">
              
              {/* Exemple JavaScript */}
              <div>
                <h3 className="text-lg font-semibold mb-3">JavaScript / Node.js</h3>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Code JavaScript</span>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => copyToClipboard(`// Configuration API Genspark
const GENSPARK_API_KEY = 'votre_api_key_ici';
const BASE_URL = '${baseUrl}';

// Fonction pour créer du contenu
async function createContent(contentType, prompt, title) {
  try {
    const response = await fetch(BASE_URL + '/content/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-genspark-api-key': GENSPARK_API_KEY
      },
      body: JSON.stringify({
        contentType: contentType,
        prompt: prompt,
        title: title
      })
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('Contenu créé:', result.data);
      return result.data;
    } else {
      console.error('Erreur:', result.error);
      return null;
    }
  } catch (error) {
    console.error('Erreur réseau:', error);
    return null;
  }
}

// Utilisation
createContent(
  'blog-article', 
  'Écris un article sur l\\'IA en Afrique',
  'L\\'IA révolutionne l\\'Afrique'
);`, "JavaScript")}
                    >
                      {copiedCode === 'JavaScript' ? 'Copié !' : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`// Configuration API Genspark
const GENSPARK_API_KEY = 'votre_api_key_ici';
const BASE_URL = '${baseUrl}';

// Fonction pour créer du contenu
async function createContent(contentType, prompt, title) {
  try {
    const response = await fetch(BASE_URL + '/content/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-genspark-api-key': GENSPARK_API_KEY
      },
      body: JSON.stringify({
        contentType: contentType,
        prompt: prompt,
        title: title
      })
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('Contenu créé:', result.data);
      return result.data;
    } else {
      console.error('Erreur:', result.error);
      return null;
    }
  } catch (error) {
    console.error('Erreur réseau:', error);
    return null;
  }
}

// Utilisation
createContent(
  'blog-article', 
  'Écris un article sur l\\'IA en Afrique',
  'L\\'IA révolutionne l\\'Afrique'
);`}
                  </pre>
                </div>
              </div>

              {/* Exemple Python */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Python</h3>
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Code Python</span>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => copyToClipboard(`import requests
import json

# Configuration API Genspark
GENSPARK_API_KEY = 'votre_api_key_ici'
BASE_URL = '${baseUrl}'

def create_content(content_type, prompt, title=None):
    """Crée du contenu via l'API Genspark"""
    
    url = f"{BASE_URL}/content/create"
    headers = {
        'Content-Type': 'application/json',
        'x-genspark-api-key': GENSPARK_API_KEY
    }
    
    payload = {
        'contentType': content_type,
        'prompt': prompt
    }
    
    if title:
        payload['title'] = title
    
    try:
        response = requests.post(url, headers=headers, json=payload)
        result = response.json()
        
        if result.get('success'):
            print(f"Contenu créé: {result['data']}")
            return result['data']
        else:
            print(f"Erreur: {result.get('error')}")
            return None
            
    except Exception as e:
        print(f"Erreur réseau: {e}")
        return None

# Utilisation
content = create_content(
    'marketing-copy', 
    'Crée une page de vente pour formation IA',
    'Formation IA Business'
)`, "Python")}
                    >
                      {copiedCode === 'Python' ? 'Copié !' : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`import requests
import json

# Configuration API Genspark
GENSPARK_API_KEY = 'votre_api_key_ici'
BASE_URL = '${baseUrl}'

def create_content(content_type, prompt, title=None):
    """Crée du contenu via l'API Genspark"""
    
    url = f"{BASE_URL}/content/create"
    headers = {
        'Content-Type': 'application/json',
        'x-genspark-api-key': GENSPARK_API_KEY
    }
    
    payload = {
        'contentType': content_type,
        'prompt': prompt
    }
    
    if title:
        payload['title'] = title
    
    try:
        response = requests.post(url, headers=headers, json=payload)
        result = response.json()
        
        if result.get('success'):
            print(f"Contenu créé: {result['data']}")
            return result['data']
        else:
            print(f"Erreur: {result.get('error')}")
            return None
            
    except Exception as e:
        print(f"Erreur réseau: {e}")
        return None

# Utilisation
content = create_content(
    'marketing-copy', 
    'Crée une page de vente pour formation IA',
    'Formation IA Business'
)`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Sécurité */}
        <TabsContent value="security" className="space-y-6">
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Sécurité & Bonnes Pratiques
              </CardTitle>
              <CardDescription className="text-blue-200">
                Protégez votre intégration et vos données
              </CardDescription>
            </CardHeader>
            <CardContent className="text-white space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-green-400">✅ À FAIRE</h3>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-green-500/20 rounded border border-green-500/30">
                      <div className="font-medium text-green-200">Sécuriser vos API Keys</div>
                      <div className="text-sm text-green-100 mt-1">
                        Stockez vos clés dans des variables d'environnement
                      </div>
                    </div>
                    
                    <div className="p-3 bg-green-500/20 rounded border border-green-500/30">
                      <div className="font-medium text-green-200">Gérer les erreurs</div>
                      <div className="text-sm text-green-100 mt-1">
                        Implémentez une gestion d'erreur robuste
                      </div>
                    </div>
                    
                    <div className="p-3 bg-green-500/20 rounded border border-green-500/30">
                      <div className="font-medium text-green-200">Logs d'utilisation</div>
                      <div className="text-sm text-green-100 mt-1">
                        Surveillez vos appels API via le dashboard
                      </div>
                    </div>
                    
                    <div className="p-3 bg-green-500/20 rounded border border-green-500/30">
                      <div className="font-medium text-green-200">Rate limiting</div>
                      <div className="text-sm text-green-100 mt-1">
                        Respectez les limites pour éviter les blocages
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-400">❌ À ÉVITER</h3>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-red-500/20 rounded border border-red-500/30">
                      <div className="font-medium text-red-200">API Keys en dur</div>
                      <div className="text-sm text-red-100 mt-1">
                        Ne jamais coder les clés directement
                      </div>
                    </div>
                    
                    <div className="p-3 bg-red-500/20 rounded border border-red-500/30">
                      <div className="font-medium text-red-200">Partage de clés</div>
                      <div className="text-sm text-red-100 mt-1">
                        Une clé par agent/environnement
                      </div>
                    </div>
                    
                    <div className="p-3 bg-red-500/20 rounded border border-red-500/30">
                      <div className="font-medium text-red-200">Spam API</div>
                      <div className="text-sm text-red-100 mt-1">
                        Évitez les appels excessifs
                      </div>
                    </div>
                    
                    <div className="p-3 bg-red-500/20 rounded border border-red-500/30">
                      <div className="font-medium text-red-200">Données sensibles</div>
                      <div className="text-sm text-red-100 mt-1">
                        Ne transmettez pas d'infos confidentielles
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">📊 Monitoring Recommandé</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-500/20 rounded border border-blue-500/30">
                    <div className="text-2xl font-bold text-blue-400">200</div>
                    <div className="text-sm text-blue-200">Statut de succès</div>
                  </div>
                  <div className="p-4 bg-yellow-500/20 rounded border border-yellow-500/30">
                    <div className="text-2xl font-bold text-yellow-400">401</div>
                    <div className="text-sm text-yellow-200">API Key invalide</div>
                  </div>
                  <div className="p-4 bg-red-500/20 rounded border border-red-500/30">
                    <div className="text-2xl font-bold text-red-400">429</div>
                    <div className="text-sm text-red-200">Rate limit dépassé</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GensparkApiDocs;
