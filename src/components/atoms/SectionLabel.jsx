import React from 'react';

export default function SectionLabel({ children, accent }) {
  return (
    <div
      style={{
        fontSize: 10,
        letterSpacing: '0.24em',
        color: accent,
        textTransform: 'uppercase',
        marginBottom: 10,
        fontWeight: 500,
      }}
    >
      // {children}
    </div>
  );
}
