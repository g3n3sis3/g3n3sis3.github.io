export function alpha(a) {
  const v = Math.max(0, Math.min(255, Math.round(a * 255)));
  return v.toString(16).padStart(2, '0');
}

export function chipStyle() {
  return {
    fontSize: 11,
    letterSpacing: '0.06em',
    color: '#cfd3d8',
    border: '1px solid #2a2e36',
    padding: '4px 10px',
    background: '#0f1115',
  };
}

export function primaryBtnStyle(accent) {
  return {
    fontFamily: 'inherit',
    fontSize: 12,
    letterSpacing: '0.14em',
    color: accent,
    border: `1px solid ${accent}`,
    padding: '10px 16px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    background: 'transparent',
    cursor: 'pointer',
  };
}
