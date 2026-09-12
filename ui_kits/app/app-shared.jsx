const { Card, Icon, Badge } = window.ScholarSQuestDesignSystem_b05a4d;

function PageHead({ title, sub, right }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, marginBottom: 24 }}>
      <div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 900, letterSpacing: '-.02em', margin: 0, color: 'var(--sq-ink)' }}>{title}</h1>
        {sub && <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-muted)', marginTop: 4 }}>{sub}</div>}
      </div>
      {right}
    </div>
  );
}

function StatTile({ icon, value, label, tone = 'teal' }) {
  return (
    <Card padding={18} style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ width: 42, height: 42, borderRadius: 14, flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: `var(--sq-${tone}-100)`, color: `var(--sq-${tone}-700)` }}><Icon name={icon} size={22} /></span>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 24, fontWeight: 600, color: 'var(--sq-ink)', lineHeight: 1.1 }}>{value}</div>
          <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '.05em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 2 }}>{label}</div>
        </div>
      </div>
    </Card>
  );
}

Object.assign(window, { PageHead, StatTile });
