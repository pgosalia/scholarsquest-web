import React, { useState } from 'react';

/** White rounded surface; the default container for every grouped block. */
export function Card({ children, tone = 'plain', padding = 24, hoverLift = false, accentBar, style, ...rest }) {
  const [hover, setHover] = useState(false);
  const tones = {
    plain: { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)' },
    warm: { background: 'var(--sq-cream-deep)', border: '1px solid #F3DEC8' },
    teal: { background: 'var(--sq-teal-50)', border: '1px solid var(--sq-teal-200)' },
    pink: { background: 'var(--sq-pink-50)', border: '1px solid var(--sq-pink-200)' },
    ink: { background: 'var(--sq-ink)', border: '1px solid var(--sq-ink)', color: 'var(--sq-white)' },
    outline: { background: 'transparent', border: '2px solid var(--sq-ink)' },
  };
  const t = tones[tone] || tones.plain;
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}
      style={{ borderRadius: 'var(--radius-lg)', padding, position: 'relative', overflow: 'hidden',
        boxShadow: hoverLift && hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hoverLift && hover ? 'translateY(-4px)' : 'none',
        transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
        ...t, ...style }}>
      {accentBar && <div style={{ position: 'absolute', inset: '0 0 auto 0', height: 6, background: accentBar }} />}
      {children}
    </div>
  );
}
