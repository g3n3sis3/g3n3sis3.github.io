import React from 'react';

export default function LangToggle({ lang, setLang, accent }) {
  const opts = ['es', 'en'];
  return (
    <div
      style={{
        display: 'inline-flex',
        border: '1px solid #2a2e36',
        borderRadius: 999,
        padding: 2,
        background: '#0f1115',
        gap: 0,
      }}
    >
      {opts.map((l) => {
        const active = l === lang;
        return (
          <button
            key={l}
            onClick={() => setLang(l)}
            style={{
              fontFamily: 'inherit',
              fontSize: 11,
              letterSpacing: '0.12em',
              padding: '5px 12px',
              borderRadius: 999,
              border: 'none',
              cursor: 'pointer',
              textTransform: 'uppercase',
              background: active ? accent : 'transparent',
              color: active ? '#06070a' : '#8a929c',
              fontWeight: active ? 600 : 500,
              transition: 'background 120ms, color 120ms',
            }}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
