
import React, { useState, useEffect } from "react";

interface TypingEffectProps {
  texts: string[];
  typingDelay?: number;
  erasingDelay?: number;
  pauseDelay?: number;
  className?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  typingDelay = 100,
  erasingDelay = 50,
  pauseDelay = 2000,
  className = "",
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (currentText.length < texts[currentTextIndex].length) {
        // Still typing the current text
        timeout = setTimeout(() => {
          setCurrentText(texts[currentTextIndex].slice(0, currentText.length + 1));
        }, typingDelay);
      } else {
        // Finished typing, start pause
        setIsPaused(true);
        timeout = setTimeout(() => {
          setIsPaused(false);
          setIsTyping(false);
        }, pauseDelay);
      }
    } else {
      // Erasing the text
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, currentText.length - 1));
        }, erasingDelay);
      } else {
        // Finished erasing, move to next text
        setIsTyping(true);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isTyping, isPaused, texts, typingDelay, erasingDelay, pauseDelay]);

  return (
    <div className={`relative ${className}`}>
      <span className="inline-block">
        {currentText}
        <span className={`inline-block w-1 h-6 ml-1 bg-cyber-neon ${isPaused ? "animate-blink" : ""}`}></span>
      </span>
    </div>
  );
};

export default TypingEffect;
