import React, { useEffect, useState, useRef } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  speed?: number;
}

const GLYPHS = '0123456789ABCDEF$#@%&*+-/<>~ΞΨΩ⚡';

export const TextScramble: React.FC<TextScrambleProps> = ({ text, className = '', speed = 30 }) => {
  const [displayText, setDisplayText] = useState(text);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    let iteration = 0;
    const targetText = text;
    const totalIterations = targetText.length;

    if (frameRef.current) {
      clearInterval(frameRef.current);
    }

    frameRef.current = window.setInterval(() => {
      setDisplayText(() => {
        return targetText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return targetText[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('');
      });

      if (iteration >= totalIterations) {
        if (frameRef.current) clearInterval(frameRef.current);
      }

      iteration += 1 / 2;
    }, speed);

    return () => {
      if (frameRef.current) clearInterval(frameRef.current);
    };
  }, [text, speed]);

  return <span className={className}>{displayText}</span>;
};
