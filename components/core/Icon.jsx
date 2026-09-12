import React, { useEffect, useState } from 'react';

const CACHE = {};
const BASE = 'https://unpkg.com/lucide-static@0.446.0/icons/';

/** Lucide glyph inlined as SVG so it inherits currentColor. */
export function Icon({ name = 'star', size = 20, strokeWidth = 2, style, ...rest }) {
  const [svg, setSvg] = useState(CACHE[name] || null);
  useEffect(() => {
    let live = true;
    if (CACHE[name]) { setSvg(CACHE[name]); return; }
    fetch(BASE + name + '.svg')
      .then(r => (r.ok ? r.text() : ''))
      .then(t => {
        const body = t.replace(/<\?xml[^>]*\?>/, '').replace(/<svg[^>]*>/, '').replace(/<\/svg>/, '');
        CACHE[name] = body;
        if (live) setSvg(body);
      })
      .catch(() => {});
    return () => { live = false; };
  }, [name]);
  return (
    <svg
      viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      {...rest}
      style={{ display: 'block', flex: '0 0 auto', ...style }}
      dangerouslySetInnerHTML={{ __html: svg || '' }}
    />
  );
}
