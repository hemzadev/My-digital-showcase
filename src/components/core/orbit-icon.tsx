"use client";

import React, { useEffect, useRef, useState } from 'react';

interface OrbitIconProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  size?: number;
  duration?: number;
  iconSize?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function OrbitIcon({
  icon: Icon,
  size = 12,
  duration = 30,
  iconSize = 8,
  className = "text-white/90",
  style = {},
}: OrbitIconProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.closest('.deformed-oval') as HTMLElement;
      if (parent) {
        const width = parent.offsetWidth;
        const radius = width / 2;
        containerRef.current.style.setProperty('--orbit-radius', `${radius}px`);
        containerRef.current.style.setProperty('--orbit-duration', `${duration}s`);
        setIsReady(true);
      }
    }
  }, [duration]);

  return (
    <div 
      ref={containerRef} 
      className={`absolute left-0 top-0 w-full h-full orbit-initial ${isReady ? 'opacity-100' : 'opacity-0'}`}
      style={style}
    >
      <div 
        className="absolute rounded-full bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900
          shadow-lg shadow-violet-500/10 before:absolute before:inset-0 before:rounded-full 
          before:bg-gradient-to-br before:from-violet-500/20 before:to-transparent before:animate-pulse
          animate-[orbit_var(--orbit-duration)_linear_infinite]"
        style={{
          width: `${size * 4}px`,
          height: `${size * 4}px`,
          left: '50%',
          top: '50%',
          visibility: isReady ? 'visible' : 'hidden'
        }}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-transparent rounded-full animate-spin [animation-duration:3s]" />
        <div 
          className="absolute inset-0"
          style={{
            animation: `counter-rotate ${duration}s linear infinite`
          }}
        >
          <Icon 
            className={`absolute inset-0 m-auto animate-pulse ${className}`}
            style={{
              width: `${iconSize * 4}px`,
              height: `${iconSize * 4}px`
            }}
          />
        </div>
      </div>
    </div>
  );
}