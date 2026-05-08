import React from 'react';

export default function Divider({ accent }) {
  return (
    <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: '0 48px', zIndex: 1 }}>
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #1c1f25 20%, #1c1f25 80%, transparent)' }} />
    </div>
  );
}
