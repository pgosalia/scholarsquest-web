import React, { useState } from 'react';
import { Icon } from './Icon.jsx';

const SIZES = {
  sm: { padding: '8px 16px', fontSize: 14, radius: 'var(--radius-pill)', icon: 16, gap: 6 },
  md: { padding: '12px 24px', fontSize: 16, radius: 'var(--radius-pill)', icon: 18, gap: 8 },
  lg: { padding: '16px 34px', fontSize: 18, radius: 'var(--radius-pill)', icon: 20, gap: 10 },
};

const VARIANTS = {
  primary: { background: 'var(--sq-pink-500)', color: '#fff', border: '2px solid var(--sq-pink-500)',
    hover: { background: 'var(--sq-pink-600)', borderColor: 'var(--sq-pink-600)' } },
  secondary: { background: 'var(--sq-teal-400)', color: 'var(--sq-ink)', border: '2px solid var(--sq-teal-400)',
    hover: { background: 'var(--sq-teal-300)', borderColor: 'var(--sq-teal-300)' } },
  outline: { background: 'transparent', color: 'var(--sq-ink)', border: '2px solid var(--sq-ink)',
    hover: { background: 'var(--sq-ink)', color: '#fff' } },
  ghost: { background: 'transparent', color: 'var(--sq-teal-700)', border: '2px solid transparent',
    hover: { background: 'var(--sq-teal-50)' } },
  sun: { background: 'var(--sq-sun-400)', color: 'var(--sq-ink)', border: '2px solid var(--sq-sun-400)',
    hover: { background: 'var(--sq-sun-300)', borderColor: 'var(--sq-sun-300)' } },
};

/** The Scholar's Quest button: pill shaped, bold, with an optional sticker shadow. */
export function Button({
  children, variant = 'primary', size = 'md', iconLeft, iconRight,
  pop = false, fullWidth = false, disabled = false, style, ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const on = hover && !disabled;
  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      {...rest}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : undefined,
        alignItems: 'center', justifyContent: 'center', gap: s.gap,
        fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: s.fontSize,
        lineHeight: 1.1, padding: s.padding, borderRadius: s.radius, cursor: disabled ? 'not-allowed' : 'pointer',
        background: v.background, color: v.color, border: v.border,
        boxShadow: pop ? (press ? '1px 1px 0 var(--sq-ink)' : 'var(--shadow-pop)') : 'none',
        transform: press && !disabled ? 'translate(2px,2px)' : 'translateY(0)',
        opacity: disabled ? 0.45 : 1,
        transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
        ...(on ? v.hover : null), ...style,
      }}
    >
      {iconLeft && <Icon name={iconLeft} size={s.icon} />}
      {children}
      {iconRight && <Icon name={iconRight} size={s.icon} />}
    </button>
  );
}
