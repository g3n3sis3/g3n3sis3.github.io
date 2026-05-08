import React from 'react';
import { alpha } from '../../utils/styles';

export default function EffectsBackground({ intensity = 0.5, accent = '#5fa8ff' }) {
  const scanOpacity = 0.06 * intensity;
  const gridOpacity = 0.04 * intensity;
  const noiseOpacity = 0.03 * intensity;
  return (
    <div
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(${accent}${alpha(gridOpacity)} 1px, transparent 1px), linear-gradient(90deg, ${accent}${alpha(gridOpacity)} 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,${scanOpacity}) 0px, rgba(255,255,255,${scanOpacity}) 1px, transparent 1px, transparent 3px)`,
          mixBlendMode: 'overlay',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: noiseOpacity,
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.6' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />
    </div>
  );
}
