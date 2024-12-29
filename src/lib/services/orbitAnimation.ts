interface OrbitPoint {
  x: number;
  y: number;
  scale: { x: number; y: number };
}

export function calculateOrbitPath(width: number, height: number): string {
  const w = width;
  const h = height;
  
  // Create SVG path for the deformed oval
  return `M ${w * 0.60} 0
          C ${w * 0.40} ${h * 0.15}, ${w * 0.40} ${h * 0.30}, ${w * 0.55} ${h * 0.45}
          C ${w * 0.40} ${h * 0.55}, ${w * 0.40} ${h * 0.70}, ${w * 0.60} ${h}
          C ${w * 0.75} ${h * 0.85}, ${w} ${h * 0.70}, ${w * 0.85} ${h * 0.45}
          C ${w * 0.95} ${h * 0.30}, ${w * 0.75} ${h * 0.15}, ${w * 0.60} 0`;
}

export function getOrbitTransform(element: HTMLElement | null): string {
  if (!element) return '';
  
  const parent = element.closest('.deformed-oval') as HTMLElement;
  if (!parent) return '';

  const width = parent.offsetWidth;
  const height = parent.offsetHeight;
  const path = calculateOrbitPath(width, height);

  // Set the path as a CSS custom property
  element.style.setProperty('--orbit-path', `path('${path}')`);

  return path;
} 