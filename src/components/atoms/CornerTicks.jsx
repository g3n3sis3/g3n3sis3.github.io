import React from 'react';

export default function CornerTicks({ color }) {
  const corners = [
    { top: 0, left: 0, rotate: 0 },
    { top: 0, right: 0, rotate: 90 },
    { bottom: 0, right: 0, rotate: 180 },
    { bottom: 0, left: 0, rotate: 270 },
  ];
  return (
    <>
      {corners.map((c, i) => (
        <div
          key={i}
          style={{ position: 'absolute', width: 14, height: 14, ...c, transform: `rotate(${c.rotate}deg)` }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, width: 14, height: 1, background: color }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: 1, height: 14, background: color }} />
        </div>
      ))}
    </>
  );
}
