import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Salut ! Je suis l'assistant IA. Comment puis-je vous aider aujourd'hui ?" },
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
    if (!inputMessage.trim()) return;

    const userMessage = { role: 'user', content: inputMessage };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const assistantReply = { role: 'assistant', content: `Réponse simulée à : ${inputMessage}` };
      setMessages(prevMessages => [...prevMessages, assistantReply]);
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      setMessages(prevMessages => [...prevMessages, { role: 'assistant', content: "Désolé, je n'ai pas pu traiter votre demande pour le moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Ouvrir le chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
          <div className="bg-black/90 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl w-full max-w-md h-[600px] flex flex-col relative overflow-hidden">
            
            {/* Enhanced Immersive Starfield Background - Fixed Position */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Deep space nebulae */}
              <div className="cosmic-nebula blue w-96 h-96 -top-20 -left-20"></div>
              <div className="cosmic-nebula purple w-80 h-80 -bottom-10 -right-10" style={{animationDelay: '20s'}}></div>
              <div className="cosmic-nebula indigo w-72 h-72 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{animationDelay: '40s'}}></div>
              
              {/* Multi-layered star field */}
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
              
              {/* Floating cosmic particles */}
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
              
              {/* Occasional shooting stars */}
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

            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 relative z-10">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/c0a0e8cc-455f-443c-849f-9c1c4aa6981c.png" 
                    alt="Assistant IA" 
                    className="w-10 h-10 rounded-full object-cover border-2 border-blue-400/50"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black/90"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Assistant IA</h3>
                  <p className="text-xs text-gray-300">En ligne</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area - with relative positioning for proper layering */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 relative z-10">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg backdrop-blur-sm ${
                      message.role === 'user'
                        ? 'bg-blue-600/80 text-white ml-4'
                        : 'bg-white/10 text-white mr-4 border border-white/20'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 text-white p-3 rounded-lg mr-4 border border-white/20 backdrop-blur-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 relative z-10">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                  placeholder="Tapez votre message..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 backdrop-blur-sm"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white p-2 rounded-lg transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
