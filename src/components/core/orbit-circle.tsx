"use client";

import React, { useEffect, useRef, useState } from 'react';
import { getOrbitTransform } from '@/lib/services/orbitAnimation';

interface OrbitCircleProps {
  size: number;
  duration: number;
  animationDelay?: string;
  className?: string;
}

export const OrbitCircle: React.FC<OrbitCircleProps> = ({
  size,
  duration,
  animationDelay = '0s',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.closest('.deformed-oval') as HTMLElement;
      if (parent) {
        const width = parent.offsetWidth;
        const radius = width / 2;
        containerRef.current.style.setProperty('--orbit-radius', `${radius}px`);
        getOrbitTransform(containerRef.current);
        setIsReady(true);
      }
    }
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`absolute left-0 top-0 w-full h-full orbit-initial ${isReady ? 'opacity-100' : 'opacity-0'}`}
      style={{
        '--orbit-duration': `${duration}s`,
        '--orbit-delay': animationDelay,
      } as React.CSSProperties}
    >
      <div
        className={`absolute rounded-full bg-white opacity-50 ${className}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          animation: `orbit var(--orbit-duration) linear infinite var(--orbit-delay)`
        }}
      />
    </div>
  );
};
