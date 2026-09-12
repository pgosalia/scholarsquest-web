import React, { useState } from 'react';
import { Icon } from './Icon.jsx';

const SIZES = { sm: 32, md: 40, lg: 48 };

/** Square-ish circular icon-only control. */
export function IconButton({ icon = 'x', size = 'md', variant = 'soft', label, disabled, style, ...rest }) {
  const [hover, setHover] = useState(false);
  const px = SIZES[size] || SIZES.md;
  const skins = {
    soft: { background: 'var(--sq-grey-100)', color: 'var(--sq-grey-700)', hover: 'var(--sq-grey-200)' },
    teal: { background: 'var(--sq-teal-100)', color: 'var(--sq-teal-700)', hover: 'var(--sq-teal-200)' },
    pink: { background: 'var(--sq-pink-100)', color: 'var(--sq-pink-700)', hover: 'var(--sq-pink-200)' },
    solid: { background: 'var(--sq-pink-500)', color: '#fff', hover: 'var(--sq-pink-600)' },
    bare: { background: 'transparent', color: 'var(--sq-grey-600)', hover: 'var(--sq-grey-100)' },
  };
  const sk = skins[variant] || skins.soft;
  return (
    <button aria-label={label} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}
      style={{ width: px, height: px, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        border: 'none', borderRadius: 'var(--radius-pill)', cursor: disabled ? 'not-allowed' : 'pointer',
        background: hover && !disabled ? sk.hover : sk.background, color: sk.color, opacity: disabled ? 0.45 : 1,
        transition: 'background var(--dur-fast) var(--ease-out)', ...style }}>
      <Icon name={icon} size={Math.round(px * 0.5)} />
    </button>
  );
}
