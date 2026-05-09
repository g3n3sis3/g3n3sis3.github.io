import React from 'react';
import { chipStyle } from '../../utils/styles';

export default function ExperienceRow({ item, lang, accent, last }) {
  return (
    <div className="resp-exp-row" style={{ paddingBottom: last ? 0 : 28 }}>
      <div style={{ fontSize: 11, color: accent, letterSpacing: '0.18em', paddingTop: 4 }}>{item.period}</div>
      <div className="resp-exp-connector" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: 1, background: '#1c1f25', flex: 1 }} />
        <div
          style={{
            position: 'absolute',
            top: 6,
            width: 9,
            height: 9,
            border: `1px solid ${accent}`,
            background: '#06070a',
            transform: 'rotate(45deg)',
          }}
        />
      </div>
      <div style={{ paddingBottom: 10, paddingLeft: 16 }}>
        <div style={{ fontSize: 17, color: '#f4f5f7', fontWeight: 500 }}>
          {lang === 'es' ? item.role_es : item.role_en}{' '}
          <span style={{ color: '#8a929c', fontWeight: 400 }}>· {item.company}</span>
        </div>
        <p style={{ fontSize: 13, color: '#bfc4cb', lineHeight: 1.7, marginTop: 8, marginBottom: 12, textWrap: 'pretty' }}>
          {lang === 'es' ? item.desc_es : item.desc_en}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {item.tags.map((tag) => (
            <span key={tag} style={chipStyle()}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
