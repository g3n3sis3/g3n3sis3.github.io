import React from 'react';
import portfolioData from '../../data/portfolio.json';
const { I18N } = portfolioData;
import { chipStyle, primaryBtnStyle } from '../../utils/styles';
import CornerTicks from './CornerTicks';
import SectionLabel from './SectionLabel';

export default function ProjectModal({ project, lang, onClose, accent }) {
  const t = I18N[lang];
  React.useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);
  if (!project) return null;
  const name = lang === 'es' ? project.name_es : project.name_en;
  const desc = lang === 'es' ? project.desc_es : project.desc_en;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(4,5,8,0.78)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        animation: 'fadeIn 180ms ease',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(840px, 100%)',
          maxHeight: '85vh',
          overflow: 'auto',
          background: '#0c0e12',
          border: '1px solid #2a2e36',
          padding: '32px 36px',
          position: 'relative',
          fontFamily: 'JetBrains Mono, ui-monospace, monospace',
          color: '#cfd3d8',
        }}
      >
        <CornerTicks color={accent} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24, marginBottom: 24 }}>
          <div>
            <div style={{ fontSize: 11, color: accent, letterSpacing: '0.18em', marginBottom: 8 }}>
              {project.code} · {project.year}
            </div>
            <h2 style={{ margin: 0, fontSize: 28, fontWeight: 600, color: '#f4f5f7', letterSpacing: '-0.01em' }}>
              {name}
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: '1px solid #2a2e36',
              color: '#8a929c',
              fontFamily: 'inherit',
              fontSize: 11,
              letterSpacing: '0.18em',
              padding: '8px 14px',
              cursor: 'pointer',
              textTransform: 'uppercase',
            }}
          >
            [ESC] {t.close}
          </button>
        </div>

        <div
          style={{
            height: 220,
            border: '1px solid #2a2e36',
            background: 'repeating-linear-gradient(135deg, #14171c, #14171c 12px, #0f1115 12px, #0f1115 24px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 24,
            position: 'relative',
          }}
        >
          <div style={{ fontSize: 11, color: '#5a6168', letterSpacing: '0.18em' }}>
            [ SCREENSHOT · {project.code} ]
          </div>
        </div>

        <div style={{ marginBottom: 28 }}>
          <SectionLabel accent={accent}>{t.overview}</SectionLabel>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: '#bfc4cb', margin: 0, textWrap: 'pretty' }}>
            {desc}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginBottom: 28 }}>
          <div>
            <SectionLabel accent={accent}>{t.stack}</SectionLabel>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
              {project.stack.map((s) => (
                <li key={s} style={{ fontSize: 13, color: '#cfd3d8' }}>
                  <span style={{ color: accent, marginRight: 8 }}>›</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionLabel accent={accent}>tags</SectionLabel>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {project.tags.map((tag) => (
                <span key={tag} style={chipStyle()}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1c1f25', paddingTop: 20, display: 'flex', gap: 12 }}>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            style={primaryBtnStyle(accent)}
          >
            github.com/g3n3sis3/{project.id}  →
          </a>
        </div>
      </div>
    </div>
  );
}
