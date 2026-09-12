import React from 'react';

const SIZES = { sm: 32, md: 44, lg: 64 };
const RINGS = { teal: 'var(--sq-teal-400)', pink: 'var(--sq-pink-500)', sun: 'var(--sq-sun-400)', none: 'transparent' };

/** Round person chip; initials when no photo is supplied. */
export function Avatar({ name = '', src, size = 'md', ring = 'teal', style, ...rest }) {
  const px = SIZES[size] || SIZES.md;
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return (
    <span {...rest} style={{ width: px, height: px, borderRadius: '50%', display: 'inline-flex',
      alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flex: '0 0 auto',
      background: 'var(--sq-teal-100)', color: 'var(--sq-teal-800)', fontFamily: 'var(--font-display)',
      fontWeight: 800, fontSize: px * 0.36, boxShadow: ring === 'none' ? 'none' : `0 0 0 3px ${RINGS[ring] || RINGS.teal}`,
      ...style }}>
      {src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
    </span>
  );
}
