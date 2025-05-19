
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Minimize2, Maximize2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const SpaceThemedChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<{text: string, sender: 'user' | 'bot', time: string}[]>([
    {
      text: "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
      sender: 'bot',
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    
    const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    // Add user message
    setMessages([...messages, { text: newMessage, sender: 'user', time }]);
    setNewMessage('');
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponse = "Merci pour votre message ! Un de nos experts vous contactera sous peu pour répondre à votre demande.";
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot', time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button 
          onClick={toggleChat}
          className="w-14 h-14 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white flex items-center justify-center"
          aria-label="Chat with us"
        >
          <MessageSquare size={24} />
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={isMinimized ? { opacity: 1, y: 0, scale: 0.9 } : { opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-4 flex justify-between items-center relative overflow-hidden">
              {/* Cosmic glow effects */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
              
              <div className="flex items-center gap-2 relative z-10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-white">Assistant</h3>
                  <p className="text-xs text-gray-200">En ligne</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 text-white hover:bg-white/10 rounded-full"
                  onClick={toggleMinimize}
                >
                  {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 text-white hover:bg-white/10 rounded-full"
                  onClick={toggleChat}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Chat Messages */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "320px" }}
                  exit={{ height: 0 }}
                  className="bg-black/95 backdrop-blur-md overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
                  style={{ maxHeight: "400px" }}
                >
                  <div className="p-4 space-y-4">
                    {messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                          message.sender === 'user' 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                            : 'bg-gray-800 text-white border border-gray-700'
                        }`}>
                          <p className="text-sm">{message.text}</p>
                          <p className="text-xs opacity-70 text-right mt-1">{message.time}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Chat Input */}
            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-gray-900 border-t border-gray-800 p-4"
                >
                  <form onSubmit={handleSendMessage} className="flex gap-2">
                    <Textarea
                      placeholder="Écrivez votre message ici..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="flex-1 min-h-[46px] resize-none bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500"
                    />
                    <Button 
                      type="submit"
                      className="h-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90"
                    >
                      <Send className="h-5 w-5" />
                    </Button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SpaceThemedChatBot;
