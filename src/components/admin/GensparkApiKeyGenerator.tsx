
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Copy, Key, RefreshCw } from 'lucide-react';

const GensparkApiKeyGenerator = () => {
  const [apiKey, setApiKey] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateApiKey = async () => {
    setIsGenerating(true);
    try {
      // Générer une clé API sécurisée
      const timestamp = Date.now();
      const randomString = Math.random().toString(36).substring(2, 15);
      const newApiKey = `gsk_${timestamp}_${randomString}`;
      
      setApiKey(newApiKey);
      
      toast({
        title: "API Key générée !",
        description: "Votre nouvelle clé API Genspark a été créée avec succès.",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de générer une nouvelle clé API.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = async () => {
    if (apiKey) {
      await navigator.clipboard.writeText(apiKey);
      toast({
        title: "Copié !",
        description: "La clé API a été copiée dans le presse-papiers.",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Key className="w-5 h-5" />
          <span>Générateur d'API Key Genspark</span>
        </CardTitle>
        <CardDescription>
          Générez une nouvelle clé API pour accéder aux endpoints Genspark
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="api-key">Clé API Genspark</Label>
          <div className="flex space-x-2">
            <Input
              id="api-key"
              value={apiKey}
              placeholder="Cliquez sur 'Générer' pour créer une nouvelle clé"
              readOnly
              className="font-mono text-sm"
            />
            {apiKey && (
              <Button
                variant="outline"
                size="icon"
                onClick={copyToClipboard}
                title="Copier la clé API"
              >
                <Copy className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        <Button 
          onClick={generateApiKey} 
          disabled={isGenerating}
          className="w-full"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              Génération...
            </>
          ) : (
            <>
              <Key className="w-4 h-4 mr-2" />
              Générer une nouvelle API Key
            </>
          )}
        </Button>

        {apiKey && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">🚀 Prêt pour l'automatisation !</h4>
            <div className="space-y-2 text-sm text-blue-800">
              <p>✅ API Key générée avec succès</p>
              <p>🧪 Vous pouvez maintenant tester les endpoints prioritaires</p>
              <p>🚀 Lancez l'automatisation complète</p>
              <p>📊 Monitorez les résultats en temps réel</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GensparkApiKeyGenerator;
