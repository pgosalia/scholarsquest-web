import React from 'react';

/** Radio option; also works as a card-style picker with `block`. */
export function Radio({ label, description, name, checked = false, onChange, block = false, disabled, style, ...rest }) {
  return (
    <label {...rest} style={{ display: block ? 'flex' : 'inline-flex', alignItems: block ? 'flex-start' : 'center', gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer', fontFamily: 'var(--font-body)', opacity: disabled ? 0.5 : 1,
      padding: block ? '14px 16px' : 0, borderRadius: block ? 'var(--radius-md)' : 0,
      border: block ? `2px solid ${checked ? 'var(--sq-teal-500)' : 'var(--border-subtle)'}` : 'none',
      background: block ? (checked ? 'var(--sq-teal-50)' : '#fff') : 'transparent',
      transition: 'border-color var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)', ...style }}>
      <input type="radio" name={name} checked={checked} onChange={onChange} disabled={disabled}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      <span style={{ width: 22, height: 22, borderRadius: '50%', flex: '0 0 auto', marginTop: block ? 2 : 0,
        border: `2px solid ${checked ? 'var(--sq-teal-500)' : 'var(--border-default)'}`, background: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {checked && <span style={{ width: 11, height: 11, borderRadius: '50%', background: 'var(--sq-teal-500)' }} />}
      </span>
      <span>
        <span style={{ display: 'block', fontSize: 15, fontWeight: 800, color: 'var(--sq-ink)' }}>{label}</span>
        {description && <span style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--text-muted)', marginTop: 2 }}>{description}</span>}
      </span>
    </label>
  );
}
