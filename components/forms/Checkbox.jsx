import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Checkbox with a teal filled box and white tick. */
export function Checkbox({ label, checked = false, onChange, disabled, style, ...rest }) {
  return (
    <label {...rest} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: 'var(--sq-grey-700)', opacity: disabled ? 0.5 : 1, ...style }}>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{ width: 24, height: 24, borderRadius: 8, flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: checked ? 'var(--sq-teal-500)' : '#fff', border: `2px solid ${checked ? 'var(--sq-teal-500)' : 'var(--border-default)'}`,
        color: '#fff', transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)' }}>
        {checked && <Icon name="check" size={16} />}
      </span>
      {label}
    </label>
  );
}
