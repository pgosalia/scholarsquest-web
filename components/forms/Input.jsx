import React, { useState } from 'react';
import { Icon } from '../core/Icon.jsx';

/** Labelled text field. */
export function Input({ label, placeholder, value, onChange, type = 'text', icon, hint, error,
  disabled, fullWidth = true, style, ...rest }) {
  const [focus, setFocus] = useState(false);
  const borderColor = error ? 'var(--sq-danger)' : focus ? 'var(--sq-teal-500)' : 'var(--border-default)';
  return (
    <label style={{ display: 'block', width: fullWidth ? '100%' : undefined, fontFamily: 'var(--font-body)', ...style }}>
      {label && <span style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--sq-ink)', marginBottom: 6 }}>{label}</span>}
      <span style={{ display: 'flex', alignItems: 'center', gap: 10, background: disabled ? 'var(--sq-grey-100)' : '#fff',
        border: `2px solid ${borderColor}`, borderRadius: 'var(--radius-md)', padding: '11px 16px',
        boxShadow: focus ? '0 0 0 4px var(--sq-teal-100)' : 'none',
        transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)' }}>
        {icon && <span style={{ color: 'var(--sq-grey-500)', display: 'flex' }}><Icon name={icon} size={18} /></span>}
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...rest}
          style={{ border: 'none', outline: 'none', background: 'transparent', width: '100%',
            fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, color: 'var(--sq-ink)' }} />
      </span>
      {(hint || error) && <span style={{ display: 'block', marginTop: 6, fontSize: 13, fontWeight: 600,
        color: error ? 'var(--sq-danger)' : 'var(--text-muted)' }}>{error || hint}</span>}
    </label>
  );
}
