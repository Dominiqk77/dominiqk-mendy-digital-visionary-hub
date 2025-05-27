
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Calendar, Paperclip, Brain, Code, Phone } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
  isComplex?: boolean;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: "Salut ! Je suis Dominiqk Mendy, consultant expert en IA et transformation digitale. Je peux vous aider avec vos questions techniques, débugger du code, discuter de vos projets ou simplement échanger. Comment puis-je vous assister aujourd'hui ?",
      timestamp: new Date().toISOString()
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

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
      console.log("Envoi du message via Supabase Edge Function...");

      const { data, error } = await supabase.functions.invoke('chat-ai', {
        body: {
          message: inputMessage,
          conversationHistory: messages.slice(-10) // Keep last 10 messages for context
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
          isComplex: data.isComplex
        };
        
        setMessages(prevMessages => [...prevMessages, assistantMessage]);
      } else {
        throw new Error("Aucune réponse reçue");
      }

    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      
      const errorMessage: Message = {
        role: 'assistant',
        content: "Je rencontre actuellement des difficultés techniques. En attendant, n'hésitez pas à me contacter directement pour toute question urgente ou consultation personnalisée.",
        timestamp: new Date().toISOString()
      };
      
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
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
          content: `J'ai bien reçu votre fichier "${file.name}". Je peux vous aider à analyser du code, diagnostiquer des erreurs, ou discuter de l'architecture. Décrivez-moi ce que vous souhaitez faire avec ce fichier ou quelle problématique vous rencontrez.`,
          timestamp: new Date().toISOString()
        };
        setMessages(prevMessages => [...prevMessages, fileMessage]);
      }
    };
    input.click();
  };

  const detectMessageType = (content: string) => {
    const codeIndicators = ['```', 'function', 'const ', 'import ', 'class ', 'def ', 'error:', 'exception'];
    const complexIndicators = ['projet', 'architecture', 'consultation', 'stratégie', 'transformation'];
    
    const hasCode = codeIndicators.some(indicator => content.toLowerCase().includes(indicator));
    const isComplex = complexIndicators.some(indicator => content.toLowerCase().includes(indicator));
    
    return { hasCode, isComplex };
  };

  return (
    <>
      {/* Chat Button with enhanced intelligence indicator */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
        aria-label="Ouvrir le chat intelligent"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6" />
          <Brain className="w-3 h-3 absolute -top-1 -right-1 text-yellow-300 group-hover:animate-pulse" />
        </div>
      </button>

      {/* Chat Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
          <div className="bg-black/90 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl w-full max-w-md h-[600px] flex flex-col relative overflow-hidden">
            
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

            {/* Enhanced Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 relative z-[60] bg-black/20 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/c0a0e8cc-455f-443c-849f-9c1c4aa6981c.png" 
                    alt="Dominiqk Mendy" 
                    className="w-10 h-10 rounded-full object-cover border-2 border-blue-400/50"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black/90"></div>
                  <Brain className="absolute -top-1 -left-1 w-3 h-3 text-yellow-300 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-semibold text-white flex items-center gap-2">
                    Dominiqk Mendy
                    <span className="text-xs bg-gradient-to-r from-purple-500 to-blue-500 px-2 py-1 rounded-full">AI Expert</span>
                  </h3>
                  <p className="text-xs text-green-300 font-medium">Consultant Ultra-Intelligent</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1 z-[70]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex gap-2 p-4 border-b border-white/10 relative z-[60] bg-black/20 backdrop-blur-sm">
              <button
                onClick={handleReservation}
                className="flex-1 bg-blue-600/80 hover:bg-blue-700/80 text-white px-3 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 backdrop-blur-sm border border-blue-500/30 text-sm"
              >
                <Calendar className="w-4 h-4" />
                RDV Expert
              </button>
              <button
                onClick={() => window.open('tel:+212000000000', '_self')}
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

            {/* Enhanced Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 relative z-[55]">
              {messages.map((message, index) => {
                const messageType = detectMessageType(message.content);
                
                return (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-lg backdrop-blur-sm relative z-[60] ${
                        message.role === 'user'
                          ? 'bg-blue-600/80 text-white ml-4 border border-blue-500/30'
                          : `bg-white/10 text-white mr-4 border border-white/20 ${
                              message.isComplex ? 'border-purple-400/40' : 
                              messageType.hasCode ? 'border-green-400/40' : 'border-white/20'
                            }`
                      }`}
                    >
                      {message.role === 'assistant' && (messageType.hasCode || message.isComplex) && (
                        <div className="flex items-center gap-2 mb-2 text-xs">
                          {messageType.hasCode && (
                            <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full flex items-center gap-1">
                              <Code className="w-3 h-3" />
                              Code
                            </span>
                          )}
                          {message.isComplex && (
                            <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full flex items-center gap-1">
                              <Brain className="w-3 h-3" />
                              Expert
                            </span>
                          )}
                        </div>
                      )}
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      {message.timestamp && (
                        <p className="text-xs opacity-50 mt-2">
                          {new Date(message.timestamp).toLocaleTimeString()}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 text-white p-3 rounded-lg mr-4 border border-white/20 backdrop-blur-sm relative z-[60]">
                    <div className="flex items-center space-x-2">
                      <Brain className="w-4 h-4 text-purple-400 animate-pulse" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                      <span className="text-xs text-purple-300">Analyse en cours...</span>
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
                  placeholder="Posez votre question technique, partagez du code, ou discutons..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 backdrop-blur-sm relative z-[60] text-sm"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="bg-blue-600/80 hover:bg-blue-700/80 disabled:bg-gray-600/80 text-white p-2 rounded-lg transition-colors relative z-[60] flex-shrink-0 border border-blue-500/30 backdrop-blur-sm"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">
                💡 Je peux résoudre vos problèmes de code, débugger, conseiller sur l'architecture, et bien plus !
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
