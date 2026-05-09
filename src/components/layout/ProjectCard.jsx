import React from 'react';
import { chipStyle } from '../../utils/styles';
import ScrambleText from '../atoms/ScrambleText';
import CornerTicks from '../atoms/CornerTicks';

export default function ProjectCard({ project, lang, accent, onOpen, t }) {
  const [hover, setHover] = React.useState(false);
  const name = lang === 'es' ? project.name_es : project.name_en;
  const summary = lang === 'es' ? project.summary_es : project.summary_en;
  return (
    <div
      onClick={onOpen}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        border: `1px solid ${hover ? accent : '#1c1f25'}`,
        background: hover ? '#0c0e12' : 'transparent',
        padding: '22px 24px 20px',
        cursor: 'pointer',
        position: 'relative',
        transition: 'border-color 160ms, background 160ms',
      }}
    >
      {hover && <CornerTicks color={accent} />}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
        <span style={{ fontSize: 11, color: accent, letterSpacing: '0.18em' }}>{project.code}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                fontSize: 10,
                letterSpacing: '0.16em',
                color: project.status === 'verified' ? '#7fdc9b' : '#e0a85b',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              {project.status === 'verified' ? `[ ${t.verified} ]` : `[ ${t.pending} ]`}
            </span>
            <span style={{ fontSize: 11, color: '#5a6168', letterSpacing: '0.14em' }}>{project.year}</span>
          </div>
      </div>
      <div style={{ fontSize: 19, color: '#f4f5f7', fontWeight: 500, marginBottom: 10, letterSpacing: '-0.005em' }}>
        <ScrambleText text={name} duration={420} trigger={hover ? 'mount' : 'none'} />
      </div>
      <p style={{ fontSize: 13, lineHeight: 1.7, color: '#bfc4cb', margin: 0, marginBottom: 18, textWrap: 'pretty' }}>
        {summary}
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {project.tags.map((tag) => (
            <span key={tag} style={chipStyle()}>{tag}</span>
          ))}
        </div>
        <span style={{ fontSize: 11, color: accent, letterSpacing: '0.16em' }}>→</span>
      </div>
    </div>
  );
}
