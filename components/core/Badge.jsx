import React from 'react';
import { Icon } from './Icon.jsx';

const TONES = {
  teal: ['var(--sq-teal-100)', 'var(--sq-teal-800)'],
  pink: ['var(--sq-pink-100)', 'var(--sq-pink-800)'],
  sun: ['var(--sq-sun-100)', 'var(--sq-sun-700)'],
  grape: ['var(--sq-grape-100)', 'var(--sq-grape-700)'],
  success: ['var(--sq-success-soft)', '#0F7A4E'],
  neutral: ['var(--sq-grey-100)', 'var(--sq-grey-700)'],
  solid: ['var(--sq-pink-500)', '#fff'],
};

/** Small status / category pill. */
export function Badge({ children, tone = 'teal', icon, size = 'md', style, ...rest }) {
  const [bg, fg] = TONES[tone] || TONES.teal;
  const sm = size === 'sm';
  return (
    <span {...rest} style={{ display: 'inline-flex', alignItems: 'center', gap: 6,
      background: bg, color: fg, fontFamily: 'var(--font-body)', fontWeight: 800,
      fontSize: sm ? 11 : 13, letterSpacing: '.02em', padding: sm ? '3px 9px' : '5px 13px',
      borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap', ...style }}>
      {icon && <Icon name={icon} size={sm ? 12 : 14} />}
      {children}
    </span>
  );
}
