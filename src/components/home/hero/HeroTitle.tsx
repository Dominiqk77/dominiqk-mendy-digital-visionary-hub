
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroTitle = () => {
  const [isTyping, setIsTyping] = useState(false);
  const name = "Dominiqk Mendy";
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  // Typing animation effect
  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setIsTyping(true);
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < name.length) {
          setDisplayText(prev => prev + name.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, 100);
      
      return () => clearInterval(typingInterval);
    }, 800);
    
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => {
      clearTimeout(typingTimeout);
      clearInterval(cursorInterval);
    };
  }, []);
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mt-24 md:mt-16" // Increased top margin to create more space from the header
    >
      <motion.div 
        className="inline-block px-4 py-1.5 bg-portfolio-purple/10 backdrop-blur-sm rounded-full text-portfolio-purple border border-portfolio-purple/20 text-sm font-medium mb-4 float-right md:float-none mr-2" // Added more bottom margin (mb-4) and right margin (mr-2)
        variants={itemVariants}
      >
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-purple animate-pulse">
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 1 7.92 12.446a1 1 0 0 1 -.813.493h-1.5a1 1 0 0 1 -1 -1v-4.5a1 1 0 0 1 1 -1h1.5a1 1 0 0 1 .83 .445a5.5 5.5 0 0 0 -7.424 -3.997a.9 .9 0 0 0 -.576 .919v3.138a1 1 0 0 1 -1.316 .948l-2.825 -1.13a1 1 0 0 1 -.66 -1a8.5 8.5 0 0 1 5.333 -7.263a8.25 8.25 0 0 1 2.138 -.299"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M12 12m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0"></path>
          </svg>
          <span className="font-poppins font-semibold tracking-wide">Innovation Digitale Premium</span>
        </div>
      </motion.div>
      
      <motion.h1 
        className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight font-montserrat tracking-tighter"
        variants={itemVariants}
      >
        {/* Code-themed typing animation for name */}
        <div className="relative inline-block font-mono rounded bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-pink p-0.5 shadow-lg hover:shadow-glow-purple transition-all duration-300">
          <div className="flex items-center bg-portfolio-space px-4 py-1 rounded">
            <span className="text-white opacity-70 mr-2 text-sm font-light">&gt;</span>
            <div className="relative overflow-hidden">
              {/* Animated binary background */}
              <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
                <div className="text-[10px] text-portfolio-blue whitespace-pre">
                  01001000 10101010 01101 01001100 01010
                </div>
              </div>
              
              {/* Typed Name */}
              <code className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] via-[#7B68EE] to-[#FF1493]">
                {displayText}
                {isTyping && cursorVisible && <span className="animate-caret-blink ml-1 inline-block w-1 h-8 bg-white"></span>}
                {!isTyping && cursorVisible && <span className="animate-caret-blink ml-1 inline-block w-1 h-8 bg-white"></span>}
              </code>
            </div>
          </div>
          
          {/* Decorative code syntax elements */}
          <div className="absolute -bottom-1 -right-1 text-xs text-portfolio-blue opacity-80">{`}`}</div>
          <div className="absolute -top-1 -left-1 text-xs text-portfolio-pink opacity-80">{`{`}</div>
        </div>
        
        {/* Restructured subtitle with enhanced animation and typography */}
        <div className="mt-4 flex flex-col items-center md:items-start">
          <motion.span 
            className="text-white text-2xl sm:text-4xl md:text-5xl font-bold tracking-wider font-space uppercase relative shadow-glow"
            variants={itemVariants}
          >
            EXPERT EN
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-transparent"></span>
          </motion.span> 
          
          <motion.div 
            className="relative mt-2 overflow-hidden"
            variants={itemVariants}
          >
            <span className="font-poppins text-gradient-cosmic bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-pink bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-bold relative z-10">
              Transformation Digitale
            </span>
            {/* Animated underline effect */}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-pink animate-shimmer"></span>
          </motion.div>
        </div>
      </motion.h1>
      
      {/* Digital binary effect - subtle tech background */}
      <motion.div 
        className="absolute -bottom-10 left-0 w-full opacity-10 overflow-hidden hidden md:block"
        variants={itemVariants}
      >
        <div className="text-2xs sm:text-xs font-mono text-portfolio-blue whitespace-nowrap">
          01001001 01101110 01101110 01101111 01110110 01100001 01110100 01101001 01101111 01101110 00100000 01000100 01101001 01100111 01101001 01110100 01100001 01101100
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroTitle;
