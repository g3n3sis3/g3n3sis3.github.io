import React from 'react';

export default function KeyVal({ k, v, accent }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: 12, padding: '6px 0', fontSize: 12 }}>
      <span style={{ color: '#5a6168', letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: 10 }}>{k}</span>
      <span style={{ color: accent || '#cfd3d8' }}>{v}</span>
    </div>
  );
}
