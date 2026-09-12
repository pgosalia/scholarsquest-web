import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Pill tab switcher. */
export function Tabs({ items = [], value, onChange, variant = 'pill', style, ...rest }) {
  const pill = variant === 'pill';
  return (
    <div role="tablist" {...rest} style={{ display: 'inline-flex', gap: pill ? 4 : 24, padding: pill ? 4 : 0,
      background: pill ? 'var(--sq-grey-100)' : 'transparent', borderRadius: 'var(--radius-pill)',
      borderBottom: pill ? 'none' : '2px solid var(--border-subtle)', fontFamily: 'var(--font-body)', ...style }}>
      {items.map(it => {
        const id = typeof it === 'string' ? it : it.value;
        const lab = typeof it === 'string' ? it : it.label;
        const icon = typeof it === 'string' ? null : it.icon;
        const active = id === value;
        return (
          <button key={id} role="tab" aria-selected={active} onClick={() => onChange && onChange(id)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 15,
              padding: pill ? '9px 18px' : '0 0 12px', borderRadius: pill ? 'var(--radius-pill)' : 0,
              background: pill && active ? '#fff' : 'transparent',
              boxShadow: pill && active ? 'var(--shadow-xs)' : 'none',
              color: active ? 'var(--sq-ink)' : 'var(--sq-grey-500)',
              borderBottom: pill ? 'none' : `3px solid ${active ? 'var(--sq-pink-500)' : 'transparent'}`,
              marginBottom: pill ? 0 : -2,
              transition: 'all var(--dur-fast) var(--ease-out)' }}>
            {icon && <Icon name={icon} size={16} />}{lab}
          </button>
        );
      })}
    </div>
  );
}
