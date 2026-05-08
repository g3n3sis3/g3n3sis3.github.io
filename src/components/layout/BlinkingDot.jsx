import React from 'react';

export default function BlinkingDot({ color }) {
  return (
    <span
      style={{
        display: 'inline-block',
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: color,
        boxShadow: `0 0 8px ${color}`,
        animation: 'blink 1.6s ease-in-out infinite',
      }}
    />
  );
}
