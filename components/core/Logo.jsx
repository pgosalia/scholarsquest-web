import React from 'react';

const SRC = {
  'full-color': 'assets/logo-primary.png',
  'full-white': 'assets/logo-white.png',
  'mark-color': 'assets/logomark-color.png',
  'mark-white': 'assets/logomark-white.png',
  'mark-black': 'assets/logomark-black.png',
};

/** Scholar's Quest logo. assetBase points at the folder containing assets/. */
export function Logo({ variant = 'full-color', height = 40, assetBase = '', style, ...rest }) {
  const base = assetBase ? assetBase.replace(/\/$/, '') + '/' : '';
  return (
    <img
      src={base + (SRC[variant] || SRC['full-color'])}
      alt="Scholar's Quest"
      {...rest}
      style={{ height, width: 'auto', display: 'block', ...style }}
    />
  );
}
