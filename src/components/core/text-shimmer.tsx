"use client";

import { useEffect, useRef } from 'react';

export function TextShimmer({
  children,
  className = '',
  duration = 1.2,
}: {
  children: string;
  className?: string;
  duration?: number;
}) {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.style.setProperty('--animation-duration', `${duration}s`);
  }, [duration]);

  return (
    <span
      ref={elementRef}
      className={`
        relative inline-block
        bg-gradient-to-r from-[--base-color] via-[--base-gradient-color] to-[--base-color]
        bg-[length:200%_100%]
        animate-[shimmer_var(--animation-duration)_linear_infinite]
        bg-clip-text text-transparent
        ${className}
      `}
    >
      {children}
    </span>
  );
} 