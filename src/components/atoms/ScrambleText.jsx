import React from 'react';

const SCRAMBLE_CHARS = '█▓▒░$#@&*+=<>-_/|\\01ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function ScrambleText({ text, as = 'span', className = '', style = {}, duration = 480, trigger = 'hover' }) {
  const [display, setDisplay] = React.useState(text);
  const rafRef = React.useRef(null);
  const startedRef = React.useRef(false);

  React.useEffect(() => {
    setDisplay(text);
  }, [text]);

  const animate = React.useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const start = performance.now();
    const target = text;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const settled = Math.floor(target.length * t);
      let out = '';
      for (let i = 0; i < target.length; i++) {
        if (i < settled || target[i] === ' ') {
          out += target[i];
        } else {
          out += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
      }
      setDisplay(out);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
      else setDisplay(target);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [text, duration]);

  React.useEffect(() => () => rafRef.current && cancelAnimationFrame(rafRef.current), []);

  const handlers =
    trigger === 'hover'
      ? { onMouseEnter: () => animate() }
      : {};

  React.useEffect(() => {
    if (trigger === 'mount' && !startedRef.current) {
      startedRef.current = true;
      animate();
    }
  }, [trigger, animate]);

  const Tag = as;
  return (
    <Tag className={className} style={style} {...handlers}>
      {display}
    </Tag>
  );
}
