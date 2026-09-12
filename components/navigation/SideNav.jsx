import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Logo } from '../core/Logo.jsx';

/** App left rail. */
export function SideNav({ items = [], value, onChange, assetBase = '', footer, style, ...rest }) {
  return (
    <aside {...rest} style={{ width: 236, flex: '0 0 auto', background: '#fff', borderRight: '1px solid var(--border-subtle)',
      padding: '20px 14px', display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)', ...style }}>
      <div style={{ padding: '4px 10px 18px' }}><Logo variant="full-color" height={32} assetBase={assetBase} /></div>
      {items.map(it => {
        const active = it.value === value;
        return (
          <button key={it.value} onClick={() => onChange && onChange(it.value)}
            style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', textAlign: 'left',
              padding: '11px 14px', borderRadius: 'var(--radius-md)', border: 'none', cursor: 'pointer',
              background: active ? 'var(--sq-teal-100)' : 'transparent',
              color: active ? 'var(--sq-teal-800)' : 'var(--sq-grey-600)',
              fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 15,
              transition: 'background var(--dur-fast) var(--ease-out)' }}>
            <Icon name={it.icon || 'circle'} size={19} />{it.label}
            {it.badge != null && <span style={{ marginLeft: 'auto', background: 'var(--sq-pink-500)', color: '#fff',
              fontSize: 11, fontWeight: 800, borderRadius: 'var(--radius-pill)', padding: '2px 8px' }}>{it.badge}</span>}
          </button>
        );
      })}
      {footer && <div style={{ marginTop: 'auto' }}>{footer}</div>}
    </aside>
  );
}
