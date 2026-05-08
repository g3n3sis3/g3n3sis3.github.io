import React from 'react';
import ScrambleText from '../atoms/ScrambleText';

export default function CertRow({ cert, idx, accent, lang, t }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '60px 110px 1fr 200px 80px 100px',
        padding: '16px 20px',
        borderBottom: '1px solid #1c1f25',
        fontSize: 13,
        background: hover ? '#0c0e12' : 'transparent',
        transition: 'background 120ms',
        alignItems: 'center',
      }}
    >
      <span style={{ color: '#5a6168', fontSize: 11 }}>{String(idx + 1).padStart(2, '0')}</span>
      <span style={{ color: accent, fontSize: 12, letterSpacing: '0.1em' }}>{cert.code}</span>
      <span style={{ color: '#f4f5f7' }}>
        <ScrambleText text={cert.name} duration={400} />
      </span>
      <span style={{ color: '#bfc4cb', fontSize: 12 }}>{cert.issuer}</span>
      <span style={{ color: '#8a929c', fontSize: 12 }}>{cert.year}</span>
      <span
        style={{
          textAlign: 'right',
          fontSize: 10,
          letterSpacing: '0.16em',
          color: cert.status === 'verified' ? '#7fdc9b' : '#e0a85b',
          textTransform: 'uppercase',
        }}
      >
        {cert.status === 'verified' ? `[ ${t.verified} ]` : `[ ${t.pending} ]`}
      </span>
    </div>
  );
}
