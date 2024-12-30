"use client";

import React, { useEffect, useRef } from 'react';

const StarsBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // Initialize the ref

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    // Set fixed canvas dimensions
    const fixedWidth = 1920; // Set a fixed width
    const fixedHeight = 1080; // Set a fixed height
    canvas.width = fixedWidth;
    canvas.height = fixedHeight;

    const drawStars = () => {
      context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

      // Draw stars
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 2; // Random radius for stars
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fillStyle = 'white'; // Star color
        context.fill();
      }
    };

    drawStars(); // Initial draw

    // Optional: Redraw stars on window resize
    const handleResize = () => {
      drawStars(); // Redraw stars without changing dimensions
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', // Fixed position
        top: '50%', // Center vertically
        left: '50%', // Center horizontally
        transform: 'translate(-50%, -50%)', // Adjust for centering
        zIndex: 0,
      }}
    />
  );
};

export default StarsBackground;