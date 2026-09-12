import React from 'react';

/** On/off toggle. */
export function Switch({ label, checked = false, onChange, disabled, style, ...rest }) {
  return (
    <label {...rest} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 700, color: 'var(--sq-grey-700)', opacity: disabled ? 0.5 : 1, ...style }}>
      <input type="checkbox" role="switch" checked={checked} onChange={onChange} disabled={disabled}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{ width: 50, height: 28, borderRadius: 'var(--radius-pill)', padding: 3, flex: '0 0 auto',
        background: checked ? 'var(--sq-teal-500)' : 'var(--sq-grey-300)',
        transition: 'background var(--dur-base) var(--ease-out)' }}>
        <span style={{ display: 'block', width: 22, height: 22, borderRadius: '50%', background: '#fff',
          boxShadow: 'var(--shadow-xs)', transform: checked ? 'translateX(22px)' : 'translateX(0)',
          transition: 'transform var(--dur-base) var(--ease-bounce)' }} />
      </span>
      {label}
    </label>
  );
}
