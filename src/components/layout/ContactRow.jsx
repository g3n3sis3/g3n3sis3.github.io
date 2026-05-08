import React from 'react';
import ScrambleText from '../atoms/ScrambleText';

export default function ContactRow({ label, value, href, accent }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'grid',
        gridTemplateColumns: '100px 1fr 24px',
        alignItems: 'center',
        gap: 16,
        padding: '16px 20px',
        border: '1px solid #1c1f25',
        textDecoration: 'none',
        color: '#cfd3d8',
        transition: 'border-color 160ms, background 160ms',
      }}
      onMouseOver={(e) => (e.currentTarget.style.borderColor = accent)}
      onMouseOut={(e) => (e.currentTarget.style.borderColor = '#1c1f25')}
    >
      <span style={{ fontSize: 10, color: '#5a6168', letterSpacing: '0.18em' }}>{label}</span>
      <span style={{ fontSize: 13, color: '#f4f5f7' }}>
        <ScrambleText text={value} duration={500} />
      </span>
      <span style={{ color: accent, textAlign: 'right' }}>↗</span>
    </a>
  );
}
