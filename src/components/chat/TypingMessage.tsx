
import React, { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';

interface TypingMessageProps {
  fullText: string;
  onComplete: () => void;
  messageType?: string;
  isComplex?: boolean;
  isTechnical?: boolean;
  isBusiness?: boolean;
}

export const TypingMessage: React.FC<TypingMessageProps> = ({
  fullText,
  onComplete,
  messageType = 'simple',
  isComplex = false,
  isTechnical = false,
  isBusiness = false
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= fullText.length) {
      onComplete();
      return;
    }

    // Calcul de la vitesse de frappe basée sur le type de message
    let typingSpeed = 50; // Vitesse par défaut

    if (messageType === 'enterprise' || isComplex) {
      typingSpeed = 70; // Plus lent pour les messages complexes
    } else if (messageType === 'complex' || isTechnical) {
      typingSpeed = 65;
    } else if (messageType === 'medium' || isBusiness) {
      typingSpeed = 60;
    } else {
      typingSpeed = 50; // Messages simples
    }

    // Pauses supplémentaires pour la ponctuation
    const currentChar = fullText[currentIndex];
    let pauseMultiplier = 1;

    if (currentChar === '.') {
      pauseMultiplier = 6; // Pause plus longue aux points
    } else if (currentChar === ',') {
      pauseMultiplier = 3; // Pause aux virgules
    } else if (currentChar === '\n') {
      pauseMultiplier = 10; // Pause importante aux retours à la ligne
    } else if (currentChar === ':') {
      pauseMultiplier = 4; // Pause aux deux-points
    } else if (currentChar === '!') {
      pauseMultiplier = 5; // Pause aux exclamations
    } else if (currentChar === '?') {
      pauseMultiplier = 5; // Pause aux questions
    }

    const timeout = setTimeout(() => {
      setDisplayedText(prev => prev + currentChar);
      setCurrentIndex(prev => prev + 1);
    }, typingSpeed * pauseMultiplier);

    return () => clearTimeout(timeout);
  }, [currentIndex, fullText, messageType, isComplex, isTechnical, isBusiness, onComplete]);

  return (
    <div className="max-w-[85%] p-3 rounded-lg backdrop-blur-sm relative z-[60] bg-white/10 text-white mr-4 border border-white/20">
      <p className="text-sm whitespace-pre-wrap leading-relaxed">
        {displayedText}
        <span className="animate-pulse">|</span>
      </p>
    </div>
  );
};
