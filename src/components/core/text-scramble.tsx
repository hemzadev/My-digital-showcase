"use client";

import { useEffect, useRef, useState } from 'react';

export function TextScramble({
  children,
  className = '',
  duration = 1.2,
  characterSet = '. ',
}: {
  children: string;
  className?: string;
  duration?: number;
  characterSet?: string;
}) {
  const [text, setText] = useState('');
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const finalText = children;
    const chars = characterSet;

    const update = (currentTime: number) => {
      if (!startTimeRef.current) startTimeRef.current = currentTime;
      const progress = Math.min((currentTime - startTimeRef.current) / (duration * 1000), 1);

      const scrambledText = finalText
        .split('')
        .map((char, i) => {
          if (progress >= i / finalText.length) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      setText(scrambledText);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame((timestamp) => update(timestamp));
      }
    };

    frameRef.current = requestAnimationFrame((timestamp) => update(timestamp));

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [children, duration, characterSet]);

  return <span className={className}>{text}</span>;
} 