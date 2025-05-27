
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Calendar, Paperclip, Brain, Code, Phone, Lightbulb, Zap, StopCircle, Mail } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
  isComplex?: boolean;
  isBusiness?: boolean;
  isTechnical?: boolean;
  contextualSuggestions?: string[];
}

interface ConversationData {
  sessionId?: string;
  conversationId?: string;
  leadScore?: number;
  leadStatus?: string;
  projectComplexity?: string;
  hasBusinessIntent?: boolean;
  shouldCollectEmail?: boolean;
  shouldOfferConsultation?: boolean;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: "Salut ! Je suis Dominiqk Mendy, consultant expert en IA et transformation digitale avec plus de 15 ans d'expérience internationale. Je peux vous aider avec :\n\n🧠 **Questions techniques ultra-complexes** - IA, développement, architecture\n🚀 **Conseils stratégiques** - transformation digitale, innovation\n🔧 **Débuggage et solutions** - résolution de problèmes en temps réel\n💼 **Projets business** - de la startup aux grandes entreprises\n\nPosez-moi n'importe quelle question, je suis là pour vous fournir des réponses expertes et personnalisées !",
      timestamp: new Date().toISOString()
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationData, setConversationData] = useState<ConversationData>({});
  const [isConversationEnded, setIsConversationEnded] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const conversationStartTime = useRef<Date>(new Date());
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  // Générer un sessionId unique au démarrage
  useEffect(() => {
    if (!conversationData.sessionId) {
      setConversationData(prev => ({
        ...prev,
        sessionId: crypto.randomUUID()
      }));
    }
  }, []);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = { 
      role: 'user', 
      content: inputMessage,
      timestamp: new Date().toISOString()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      console.log("Envoi vers le système de génération de leads intelligent...");

      const { data, error } = await supabase.functions.invoke('chat-ai', {
        body: {
          message: inputMessage,
          conversationHistory: messages.slice(-15),
          sessionId: conversationData.sessionId,
          userAgent: navigator.userAgent
        }
      });

      if (error) {
        console.error("Erreur Supabase function:", error);
        throw error;
      }

      if (data?.response) {
        const assistantMessage: Message = {
          role: 'assistant',
          content: data.response,
          timestamp: data.timestamp,
          isComplex: data.isComplex,
          isBusiness: data.isBusiness,
          isTechnical: data.isTechnical,
          contextualSuggestions: data.contextualSuggestions || []
        };
        
        setMessages(prevMessages => [...prevMessages, assistantMessage]);
        
        // Mettre à jour les données de conversation
        setConversationData(prev => ({
          ...prev,
          sessionId: data.sessionId,
          conversationId: data.conversationId,
          leadScore: data.leadScore,
          leadStatus: data.leadStatus,
          projectComplexity: data.projectComplexity,
          hasBusinessIntent: data.hasBusinessIntent,
          shouldCollectEmail: data.shouldCollectEmail,
          shouldOfferConsultation: data.shouldOfferConsultation
        }));

        // Afficher le formulaire email si nécessaire
        if (data.shouldCollectEmail && !userEmail && !showEmailForm) {
          setTimeout(() => setShowEmailForm(true), 2000);
        }

        // Notifications pour les leads chauds
        if (data.leadScore >= 70) {
          toast({
            title: "🔥 Lead chaud détecté !",
            description: "Prospect hautement qualifié en conversation",
          });
        }

      } else {
        throw new Error("Aucune réponse reçue");
      }

    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      
      const errorMessage: Message = {
        role: 'assistant',
        content: "Une petite difficulté technique momentanée ! En tant qu'expert en résolution de problèmes, permettez-moi de vous aider autrement. Décrivez-moi votre besoin et je vous fournirai immédiatement des conseils experts. Pour une assistance technique urgente, contactez-moi directement au +212 607 79 86 70.",
        timestamp: new Date().toISOString()
      };
      
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEndConversation = async () => {
    setIsConversationEnded(true);
    
    // Marquer la conversation comme terminée
    if (conversationData.conversationId) {
      try {
        await supabase
          .from('chat_conversations')
          .update({
            conversation_ended_at: new Date().toISOString(),
            conversation_summary: messages.slice(-3).map(m => m.content).join(' '),
          })
          .eq('id', conversationData.conversationId);

        // Programmer l'envoi d'email automatique dans 20 minutes si email disponible
        if (userEmail) {
          setTimeout(async () => {
            try {
              await supabase.functions.invoke('send-chat-summary', {
                body: {
                  conversationId: conversationData.conversationId,
                  userEmail: userEmail,
                  userName: userName
                }
              });
              console.log('Email de suivi programmé avec succès');
            } catch (error) {
              console.error('Erreur programmation email:', error);
            }
          }, 20 * 60 * 1000); // 20 minutes
        }

        toast({
          title: "📊 Conversation terminée",
          description: "Toutes les données ont été sauvegardées. Email de suivi en cours de préparation.",
        });

      } catch (error) {
        console.error('Erreur lors de la finalisation:', error);
      }
    }

    // Ajouter un message de fin
    const endMessage: Message = {
      role: 'assistant',
      content: `🙏 **Merci pour cet échange enrichissant !**\n\nJ'ai bien noté tous vos besoins${conversationData.leadScore ? ` (Score de qualification: ${conversationData.leadScore}/100)` : ''}.\n\n**Prochaines étapes :**\n• Vous recevrez un email de suivi dans 20 minutes avec mes recommandations personnalisées\n• Pour une consultation gratuite immédiate : **+212 607 79 86 70**\n• Toutes vos données sont sécurisées et sauvegardées\n\n🚀 **Au plaisir de transformer vos projets en succès !**`,
      timestamp: new Date().toISOString(),
      isComplex: true
    };
    
    setMessages(prevMessages => [...prevMessages, endMessage]);
  };

  const handleEmailSubmit = async () => {
    if (!userEmail.trim()) return;

    try {
      // Sauvegarder l'email dans la conversation
      if (conversationData.conversationId) {
        await supabase
          .from('chat_conversations')
          .update({
            user_email: userEmail,
            user_name: userName || null
          })
          .eq('id', conversationData.conversationId);

        // Créer ou mettre à jour le lead
        await supabase
          .from('chat_leads')
          .upsert({
            conversation_id: conversationData.conversationId,
            email: userEmail,
            name: userName || null,
            project_type: conversationData.projectComplexity,
            qualification_score: conversationData.leadScore || 0,
            status: conversationData.leadScore && conversationData.leadScore >= 70 ? 'qualified' : 'new'
          }, {
            onConflict: 'conversation_id'
          });
      }

      setShowEmailForm(false);
      
      // Ajouter un message de confirmation
      const confirmMessage: Message = {
        role: 'assistant',
        content: `Parfait ${userName || 'cher prospect'} ! 📧 Votre email **${userEmail}** a été enregistré.\n\nVous recevrez :\n• Un résumé détaillé de notre échange\n• Mes recommandations personnalisées\n• Une proposition technique adaptée\n\n💼 **Pour accélérer le processus, appelez-moi directement : +212 607 79 86 70**`,
        timestamp: new Date().toISOString(),
        isBusiness: true
      };
      
      setMessages(prevMessages => [...prevMessages, confirmMessage]);

      toast({
        title: "✅ Email enregistré",
        description: "Vous recevrez un suivi personnalisé sous peu.",
      });

    } catch (error) {
      console.error('Erreur lors de la sauvegarde email:', error);
      toast({
        title: "❌ Erreur",
        description: "Impossible d'enregistrer l'email. Réessayez.",
      });
    }
  };

  const handleReservation = () => {
    console.log("Redirection vers la page de contact");
    window.open('/contact', '_blank');
  };

  const handleFileUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '*/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        console.log("Fichier sélectionné:", file.name);
        const fileMessage: Message = {
          role: 'assistant',
          content: `Parfait ! J'ai reçu votre fichier "${file.name}". En tant qu'expert technique, je peux :\n\n🔍 **Analyser votre code** - architecture, performance, sécurité\n🐛 **Débugger les erreurs** - identification et solutions immédiates\n⚡ **Optimiser les performances** - recommandations d'amélioration\n🏗️ **Conseiller sur l'architecture** - bonnes pratiques et scalabilité\n\nDécrivez-moi le problème rencontré ou ce que vous souhaitez améliorer, et je vous fournirai une analyse experte détaillée.`,
          timestamp: new Date().toISOString(),
          isTechnical: true
        };
        setMessages(prevMessages => [...prevMessages, fileMessage]);
      }
    };
    input.click();
  };

  const detectMessageType = (content: string) => {
    const codeIndicators = ['```', 'function', 'const ', 'import ', 'class ', 'def ', 'error:', 'exception', 'bug', 'debug'];
    const businessIndicators = ['projet', 'business', 'entreprise', 'startup', 'stratégie', 'ROI', 'budget', 'équipe'];
    const complexIndicators = ['architecture', 'consultation', 'transformation', 'audit', 'migration', 'scalabilité'];
    const aiIndicators = ['intelligence artificielle', 'machine learning', 'ia', 'algorithme', 'modèle', 'données'];
    
    const hasCode = codeIndicators.some(indicator => content.toLowerCase().includes(indicator));
    const isBusiness = businessIndicators.some(indicator => content.toLowerCase().includes(indicator));
    const isComplex = complexIndicators.some(indicator => content.toLowerCase().includes(indicator));
    const isAI = aiIndicators.some(indicator => content.toLowerCase().includes(indicator));
    
    return { hasCode, isBusiness, isComplex, isAI };
  };

  const getMessageTypeIcon = (messageType: any, message: Message) => {
    const icons = [];
    
    if (messageType.hasCode || message.isTechnical) {
      icons.push(
        <span key="code" className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full flex items-center gap-1 text-xs">
          <Code className="w-3 h-3" />
          Code
        </span>
      );
    }
    
    if (message.isBusiness || messageType.isBusiness) {
      icons.push(
        <span key="business" className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full flex items-center gap-1 text-xs">
          <Lightbulb className="w-3 h-3" />
          Business
        </span>
      );
    }
    
    if (message.isComplex || messageType.isComplex) {
      icons.push(
        <span key="complex" className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full flex items-center gap-1 text-xs">
          <Brain className="w-3 h-3" />
          Expert
        </span>
      );
    }
    
    if (messageType.isAI) {
      icons.push(
        <span key="ai" className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full flex items-center gap-1 text-xs">
          <Zap className="w-3 h-3" />
          IA
        </span>
      );
    }
    
    return icons;
  };

  return (
    <>
      {/* Enhanced Chat Button with intelligence indicator */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group animate-pulse"
        aria-label="Ouvrir le chatbot ultra-intelligent"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6" />
          <Brain className="w-3 h-3 absolute -top-1 -right-1 text-yellow-300 group-hover:animate-spin" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
        </div>
      </button>

      {/* Enhanced Chat Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
          <div className="bg-black/95 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl w-full max-w-md h-[600px] flex flex-col relative overflow-hidden">
            
            {/* Enhanced Immersive Starfield Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              <div className="cosmic-nebula blue w-96 h-96 -top-20 -left-20"></div>
              <div className="cosmic-nebula purple w-80 h-80 -bottom-10 -right-10" style={{animationDelay: '20s'}}></div>
              <div className="cosmic-nebula indigo w-72 h-72 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{animationDelay: '40s'}}></div>
              
              <div className="star-layer-1">
                {Array.from({length: 15}).map((_, i) => (
                  <div
                    key={`star-1-${i}`}
                    className="stellar-point large"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 4}s`,
                    }}
                  />
                ))}
              </div>
              
              <div className="star-layer-2">
                {Array.from({length: 25}).map((_, i) => (
                  <div
                    key={`star-2-${i}`}
                    className="stellar-point medium"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 6}s`,
                    }}
                  />
                ))}
              </div>
              
              <div className="star-layer-3">
                {Array.from({length: 40}).map((_, i) => (
                  <div
                    key={`star-3-${i}`}
                    className="stellar-point small"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 8}s`,
                    }}
                  />
                ))}
              </div>
              
              {Array.from({length: 20}).map((_, i) => (
                <div
                  key={`particle-${i}`}
                  className="cosmic-particles"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 15}s`,
                    animationDuration: `${15 + Math.random() * 10}s`,
                  }}
                />
              ))}
              
              {Array.from({length: 3}).map((_, i) => (
                <div
                  key={`shooting-${i}`}
                  className="shooting-star"
                  style={{
                    left: `${Math.random() * 50}%`,
                    top: `${Math.random() * 50}%`,
                    animationDelay: `${Math.random() * 20 + 10}s`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>

            {/* Enhanced Header with Lead Score */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 relative z-[60] bg-black/20 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/c0a0e8cc-455f-443c-849f-9c1c4aa6981c.png" 
                    alt="Dominiqk Mendy" 
                    className="w-10 h-10 rounded-full object-cover border-2 border-blue-400/50"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black/90 animate-pulse"></div>
                  <Brain className="absolute -top-1 -left-1 w-3 h-3 text-yellow-300 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-semibold text-white flex items-center gap-2">
                    Dominiqk Mendy
                    <span className="text-xs bg-gradient-to-r from-purple-500 to-blue-500 px-2 py-1 rounded-full animate-pulse">Ultra-IA</span>
                    {conversationData.leadScore && (
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        conversationData.leadScore >= 70 ? 'bg-red-500/20 text-red-300' :
                        conversationData.leadScore >= 40 ? 'bg-orange-500/20 text-orange-300' :
                        'bg-blue-500/20 text-blue-300'
                      }`}>
                        {conversationData.leadScore}/100
                      </span>
                    )}
                  </h3>
                  <p className="text-xs text-green-300 font-medium">Consultant Expert • 15+ ans • International</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1 z-[70]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Enhanced Action Buttons with End Conversation */}
            <div className="flex gap-2 p-4 border-b border-white/10 relative z-[60] bg-black/20 backdrop-blur-sm">
              <button
                onClick={handleReservation}
                className="flex-1 bg-blue-600/80 hover:bg-blue-700/80 text-white px-3 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 backdrop-blur-sm border border-blue-500/30 text-sm"
              >
                <Calendar className="w-4 h-4" />
                RDV Expert
              </button>
              <button
                onClick={() => window.open('tel:+212607798670', '_self')}
                className="flex-1 bg-green-600/80 hover:bg-green-700/80 text-white px-3 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 backdrop-blur-sm border border-green-500/30 text-sm"
              >
                <Phone className="w-4 h-4" />
                Appel
              </button>
              <button
                onClick={handleFileUpload}
                className="flex-1 bg-purple-600/80 hover:bg-purple-700/80 text-white px-3 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 backdrop-blur-sm border border-purple-500/30 text-sm"
              >
                <Code className="w-4 h-4" />
                Code
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 relative z-[55]">
              {messages.map((message, index) => {
                const messageType = detectMessageType(message.content);
                const typeIcons = message.role === 'assistant' ? getMessageTypeIcon(messageType, message) : [];
                
                return (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-lg backdrop-blur-sm relative z-[60] ${
                        message.role === 'user'
                          ? 'bg-blue-600/80 text-white ml-4 border border-blue-500/30'
                          : 'bg-white/10 text-white mr-4 border border-white/20'
                      }`}
                    >
                      {message.role === 'assistant' && typeIcons.length > 0 && (
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          {typeIcons}
                        </div>
                      )}
                      <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                      
                      {message.contextualSuggestions && message.contextualSuggestions.length > 0 && (
                        <div className="mt-3 pt-2 border-t border-white/10">
                          <p className="text-xs text-white/70 mb-2">Suggestions pertinentes :</p>
                          <div className="flex flex-wrap gap-1">
                            {message.contextualSuggestions.map((suggestion, idx) => (
                              <span key={idx} className="text-xs bg-blue-500/20 text-blue-200 px-2 py-1 rounded-full">
                                {suggestion}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {message.timestamp && (
                        <p className="text-xs opacity-50 mt-2">
                          {new Date(message.timestamp).toLocaleTimeString()}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* End Conversation Button */}
              {messages.length > 3 && !isConversationEnded && (
                <div className="flex justify-center">
                  <button
                    onClick={handleEndConversation}
                    className="bg-red-600/80 hover:bg-red-700/80 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 backdrop-blur-sm border border-red-500/30 text-sm relative z-[60]"
                  >
                    <StopCircle className="w-4 h-4" />
                    Terminer la discussion
                  </button>
                </div>
              )}

              {/* Email Collection Form */}
              {showEmailForm && !userEmail && (
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 relative z-[60]">
                  <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Recevez vos recommandations personnalisées
                  </h4>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Votre nom (optionnel)"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 text-white placeholder-gray-400 text-sm"
                    />
                    <input
                      type="email"
                      placeholder="Votre email professionnel"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 text-white placeholder-gray-400 text-sm"
                      required
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={handleEmailSubmit}
                        className="flex-1 bg-blue-600/80 hover:bg-blue-700/80 text-white px-3 py-2 rounded transition-colors text-sm"
                      >
                        Envoyer
                      </button>
                      <button
                        onClick={() => setShowEmailForm(false)}
                        className="px-3 py-2 text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        Plus tard
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    📧 Résumé + recommandations + consultation gratuite
                  </p>
                </div>
              )}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 text-white p-3 rounded-lg mr-4 border border-white/20 backdrop-blur-sm relative z-[60]">
                    <div className="flex items-center space-x-2">
                      <Brain className="w-4 h-4 text-purple-400 animate-spin" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                      <span className="text-xs text-purple-300">Intelligence en action...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Enhanced Input Area */}
            <div className="p-4 border-t border-white/10 relative z-[60] bg-black/20 backdrop-blur-sm">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                  placeholder="Posez-moi n'importe quelle question : technique, business, stratégique..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 backdrop-blur-sm relative z-[60] text-sm"
                  disabled={isLoading || isConversationEnded}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputMessage.trim() || isConversationEnded}
                  className="bg-blue-600/80 hover:bg-blue-700/80 disabled:bg-gray-600/80 text-white p-2 rounded-lg transition-colors relative z-[60] flex-shrink-0 border border-blue-500/30 backdrop-blur-sm"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">
                🧠 Expert IA • 🚀 Conseils stratégiques • 🔧 Solutions techniques • 💼 Projets business
                {conversationData.leadScore && (
                  <span className="ml-2">• 📊 Score: {conversationData.leadScore}/100</span>
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
