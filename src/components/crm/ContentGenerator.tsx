
import React, { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import {
  FileText,
  Image,
  Video,
  Mic,
  Download,
  Copy,
  Sparkles,
  Loader2
} from 'lucide-react';

const ContentGenerator = () => {
  const [contentType, setContentType] = useState('text');
  const [prompt, setPrompt] = useState('');
  const [title, setTitle] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const { toast } = useToast();

  const { data: contentHistory } = useQuery({
    queryKey: ['content-history'],
    queryFn: async () => {
      const { data } = await supabase
        .from('generated_content')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);
      return data || [];
    }
  });

  const generateContentMutation = useMutation({
    mutationFn: async ({ type, prompt, title }: { type: string; prompt: string; title: string }) => {
      const { data, error } = await supabase.functions.invoke('generate-content', {
        body: { contentType: type, prompt, title }
      });
      
      if (error) throw error;
      return data;
    },
    onSuccess: (data) => {
      setGeneratedContent(data.content);
      toast({
        title: "Contenu généré !",
        description: "Votre contenu a été créé avec succès",
      });
    },
    onError: (error) => {
      toast({
        title: "Erreur",
        description: "Impossible de générer le contenu",
        variant: "destructive",
      });
    }
  });

  const handleGenerate = () => {
    if (!prompt.trim()) {
      toast({
        title: "Prompt requis",
        description: "Veuillez saisir une description",
        variant: "destructive",
      });
      return;
    }

    generateContentMutation.mutate({
      type: contentType,
      prompt: prompt.trim(),
      title: title.trim() || 'Contenu généré'
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copié !",
      description: "Le contenu a été copié dans le presse-papier",
    });
  };

  const contentTypes = [
    { value: 'text', label: 'Article/Texte', icon: FileText, color: 'blue' },
    { value: 'image', label: 'Image', icon: Image, color: 'green' },
    { value: 'video', label: 'Vidéo', icon: Video, color: 'purple' },
    { value: 'voice', label: 'Audio/Voice', icon: Mic, color: 'orange' }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Générateur de Contenu IA
        </h1>
        <p className="text-gray-600">
          Créez du contenu professionnel avec les meilleures APIs gratuites
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Content Generation Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                Nouveau Contenu
              </CardTitle>
              <CardDescription>
                Utilisez l'IA pour générer du contenu professionnel gratuitement
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Content Type Selection */}
              <div>
                <label className="text-sm font-medium mb-3 block">Type de contenu</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {contentTypes.map((type) => (
                    <Button
                      key={type.value}
                      variant={contentType === type.value ? "default" : "outline"}
                      className="flex flex-col h-20 space-y-2"
                      onClick={() => setContentType(type.value)}
                    >
                      <type.icon className="w-5 h-5" />
                      <span className="text-xs">{type.label}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Title Input */}
              <div>
                <label className="text-sm font-medium mb-2 block">Titre (optionnel)</label>
                <Input
                  placeholder="Titre de votre contenu..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              {/* Prompt Input */}
              <div>
                <label className="text-sm font-medium mb-2 block">Description / Prompt</label>
                <Textarea
                  placeholder="Décrivez le contenu que vous souhaitez générer..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={4}
                />
              </div>

              {/* Generate Button */}
              <Button
                onClick={handleGenerate}
                disabled={generateContentMutation.isPending}
                className="w-full"
                size="lg"
              >
                {generateContentMutation.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Génération en cours...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Générer le Contenu
                  </>
                )}
              </Button>

              {/* Generated Content Display */}
              {generatedContent && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">Contenu généré</h3>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(generatedContent)}
                      >
                        <Copy className="w-4 h-4 mr-1" />
                        Copier
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-1" />
                        Télécharger
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <pre className="whitespace-pre-wrap text-sm">{generatedContent}</pre>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Content History Sidebar */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Historique</CardTitle>
              <CardDescription>
                Vos derniers contenus générés
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contentHistory?.map((item) => (
                  <div key={item.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm truncate">
                        {item.title || 'Sans titre'}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {item.content_type}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {item.content?.substring(0, 100)}...
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-gray-500">
                        {new Date(item.created_at).toLocaleDateString('fr-FR')}
                      </span>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(item.content || '')}
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* API Status */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-sm">Status des APIs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Groq API</span>
                <Badge variant="outline" className="text-green-600">
                  ✓ Actif
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Stability AI</span>
                <Badge variant="outline" className="text-green-600">
                  ✓ Actif
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Edge-TTS</span>
                <Badge variant="outline" className="text-green-600">
                  ✓ Actif
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContentGenerator;
