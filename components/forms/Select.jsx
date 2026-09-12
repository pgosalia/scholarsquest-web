import React, { useState } from 'react';
import { Icon } from '../core/Icon.jsx';

/** Native select in Scholar's Quest field clothing. */
export function Select({ label, options = [], value, onChange, hint, disabled, fullWidth = true, style, ...rest }) {
  const [focus, setFocus] = useState(false);
  return (
    <label style={{ display: 'block', width: fullWidth ? '100%' : undefined, fontFamily: 'var(--font-body)', ...style }}>
      {label && <span style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--sq-ink)', marginBottom: 6 }}>{label}</span>}
      <span style={{ display: 'flex', alignItems: 'center', background: disabled ? 'var(--sq-grey-100)' : '#fff',
        border: `2px solid ${focus ? 'var(--sq-teal-500)' : 'var(--border-default)'}`, borderRadius: 'var(--radius-md)',
        padding: '11px 16px', boxShadow: focus ? '0 0 0 4px var(--sq-teal-100)' : 'none' }}>
        <select value={value} onChange={onChange} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...rest}
          style={{ appearance: 'none', border: 'none', outline: 'none', background: 'transparent', width: '100%',
            fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 700, color: 'var(--sq-ink)', cursor: 'pointer' }}>
          {options.map(o => {
            const val = typeof o === 'string' ? o : o.value;
            const lab = typeof o === 'string' ? o : o.label;
            return <option key={val} value={val}>{lab}</option>;
          })}
        </select>
        <span style={{ color: 'var(--sq-grey-500)', display: 'flex' }}><Icon name="chevron-down" size={18} /></span>
      </span>
      {hint && <span style={{ display: 'block', marginTop: 6, fontSize: 13, fontWeight: 600, color: 'var(--text-muted)' }}>{hint}</span>}
    </label>
  );
}
