import React from 'react';
import ScrambleText from '../atoms/ScrambleText';

export default function SectionHeader({ idx, label, accent }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
      <span style={{ fontSize: 11, color: accent, letterSpacing: '0.24em' }}>[{idx}]</span>
      <h2 style={{ margin: 0, fontSize: 36, fontWeight: 600, color: '#f4f5f7', letterSpacing: '-0.02em' }}>
        <ScrambleText text={label} duration={500} />
      </h2>
      <div style={{ flex: 1, height: 1, background: '#1c1f25', marginLeft: 12 }} />
    </div>
  );
}
