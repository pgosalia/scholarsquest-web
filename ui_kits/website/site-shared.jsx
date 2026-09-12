const { Button, Card, Badge, Avatar, Icon, Logo } = window.ScholarSQuestDesignSystem_b05a4d;

function Section({ children, bg = 'transparent', pad = 88, style }) {
  return (
    <section style={{ background: bg, padding: pad + 'px 24px', ...style }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>{children}</div>
    </section>
  );
}

function Eyebrow({ children, color = 'var(--sq-pink-600)' }) {
  return <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: '.12em', textTransform: 'uppercase', color, marginBottom: 12 }}>{children}</div>;
}

function Title({ children, size = 42, align = 'left', style }) {
  return <h2 style={{ fontFamily: 'var(--font-display)', fontSize: size, fontWeight: 900, letterSpacing: '-.02em', lineHeight: 1.08, color: 'var(--sq-ink)', margin: 0, textAlign: align, ...style }}>{children}</h2>;
}

function Lede({ children, style }) {
  return <p style={{ fontSize: 18, lineHeight: 1.65, fontWeight: 600, color: 'var(--text-body)', maxWidth: 620, ...style }}>{children}</p>;
}

/** Flat tinted stand-in where brand photography will go (repo still has .image-slot placeholders). */
function PhotoSlot({ h = 260, tone = 'var(--sq-teal-100)', label = 'Photography', radius = 24, style }) {
  return (
    <div style={{ height: h, borderRadius: radius, background: tone, display: 'flex', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: 24, color: 'var(--sq-grey-600)', fontSize: 13, fontWeight: 700,
      border: '2px dashed rgba(20,18,24,.14)', ...style }}>{label}</div>
  );
}

/** Small stack: a grade band label and what it covers. */
function GradeRow({ band, text, tone = 'teal' }) {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'baseline', marginBottom: 10 }}>
      <span style={{ width: 62, flex: 'none', fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, color: 'var(--sq-' + tone + '-700)' }}>{band}</span>
      <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-body)' }}>{text}</span>
    </div>
  );
}

function CtaCard({ heading, body, primary = 'Book a free demo class', secondary, onPrimary, onSecondary }) {
  return (
    <Card tone="ink" padding={48}>
      <Title size={36} style={{ color: '#fff' }}>{heading}</Title>
      <p style={{ fontSize: 17, fontWeight: 600, color: 'var(--sq-grey-300)', maxWidth: 560, margin: '14px 0 26px' }}>{body}</p>
      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <Button size="lg" variant="secondary" pop iconRight="arrow-right" onClick={onPrimary}>{primary}</Button>
        {secondary && <Button size="lg" variant="ghost" style={{ color: 'var(--sq-teal-300)' }} onClick={onSecondary}>{secondary}</Button>}
      </div>
    </Card>
  );
}

function Footer({ onNav }) {
  const cols = [
    ['Programs', [['Math tutoring', 'Math'], ['English tutoring', 'English'], ['Book a free demo', 'Demo']]],
    ['Company', [['About', 'About'], ['Contact', 'Contact'], ['Privacy policy', null]]],
  ];
  return (
    <footer style={{ background: 'var(--sq-ink)', color: 'var(--sq-grey-300)', padding: '64px 24px 40px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 40 }}>
        <div style={{ maxWidth: 320 }}>
          <Logo variant="full-white" height={40} assetBase="../../" />
          <p style={{ marginTop: 18, fontSize: 14, fontWeight: 600, lineHeight: 1.6 }}>
            One-on-one online tutoring in Math and English for students in Kindergarten through Grade 12,
            including SAT, ACT and AP preparation.
          </p>
        </div>
        {cols.map(([h, items]) => (
          <div key={h}>
            <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--sq-teal-300)', marginBottom: 14 }}>{h}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {items.map(([label, page]) => (
                <a key={label} href="#" onClick={e => { e.preventDefault(); if (page && onNav) onNav(page); }}
                  style={{ fontSize: 14, fontWeight: 600, color: 'var(--sq-grey-300)', textDecoration: 'none' }}>{label}</a>
              ))}
            </div>
          </div>
        ))}
        <div>
          <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--sq-teal-300)', marginBottom: 14 }}>Get in touch</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a href="mailto:info@scholars.quest" style={{ fontSize: 14, fontWeight: 600, color: 'var(--sq-grey-300)', textDecoration: 'none' }}>info@scholars.quest</a>
            <a href="tel:+16095178112" style={{ fontSize: 14, fontWeight: 600, color: 'var(--sq-grey-300)', textDecoration: 'none' }}>(609) 517-8112</a>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1180, margin: '40px auto 0', paddingTop: 22, borderTop: '1px solid rgba(255,255,255,.12)',
        fontSize: 13, fontWeight: 600, color: 'var(--sq-grey-500)' }}>
        © 2026 Scholar's Quest. All rights reserved.
      </div>
    </footer>
  );
}

Object.assign(window, { Section, Eyebrow, Title, Lede, PhotoSlot, GradeRow, CtaCard, Footer });
