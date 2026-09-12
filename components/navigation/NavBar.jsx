import React from 'react';
import { Logo } from '../core/Logo.jsx';
import { Button } from '../core/Button.jsx';

/** Marketing site top bar. */
export function NavBar({ links = [], active, onNavigate, assetBase = '', cta = 'Book a free demo', onCta,
  secondaryCta, onSecondaryCta, style, ...rest }) {
  return (
    <header {...rest} style={{ position: 'sticky', top: 0, zIndex: 40, background: 'rgba(255,249,242,.88)',
      backdropFilter: 'var(--blur-glass)', borderBottom: '1px solid var(--border-subtle)', fontFamily: 'var(--font-body)', ...style }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '14px 24px',
        display: 'flex', alignItems: 'center', gap: 32 }}>
        <a href="#" onClick={e => { e.preventDefault(); onNavigate && onNavigate(links[0]); }} style={{ display: 'flex' }}>
          <Logo variant="full-color" height={38} assetBase={assetBase} />
        </a>
        <nav style={{ display: 'flex', gap: 28, marginLeft: 'auto' }}>
          {links.map(l => (
            <a key={l} href="#" onClick={e => { e.preventDefault(); onNavigate && onNavigate(l); }}
              style={{ fontSize: 15, fontWeight: 800, textDecoration: 'none',
                color: l === active ? 'var(--sq-pink-600)' : 'var(--sq-grey-700)' }}>{l}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {secondaryCta && <Button size="sm" variant="outline" onClick={onSecondaryCta}>{secondaryCta}</Button>}
          <Button size="sm" variant="primary" onClick={onCta}>{cta}</Button>
        </div>
      </div>
    </header>
  );
}
