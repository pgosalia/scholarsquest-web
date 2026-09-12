const { Card, Button, Badge, Icon } = window.ScholarSQuestDesignSystem_b05a4d;

function Login({ onNav }) {
  return (
    <Section pad={0} style={{ paddingTop: 64, paddingBottom: 96 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 48, alignItems: 'start' }}>
        <div style={{ maxWidth: 600 }}>
          <Badge tone="sun" icon="hammer">In development</Badge>
          <Title size={44} style={{ marginTop: 20 }}>Student &amp; parent portal</Title>
          <Lede style={{ marginTop: 18 }}>
            We're building a portal where students check assignments and progress, and parents pay tuition
            and buy worksheets. It's being built separately from this site. When it's live, this page becomes the sign-in.
          </Lede>
          <p style={{ fontSize: 15.5, fontWeight: 600, color: 'var(--text-muted)', margin: '0 0 26px' }}>
            Until then, everything you need runs through email or a quick call.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Button size="lg" pop onClick={() => onNav('Contact')}>Contact us instead</Button>
            <Button size="lg" variant="outline" onClick={() => onNav('Demo')}>Book a demo</Button>
          </div>
        </div>
        <Card padding={30} style={{ maxWidth: 440 }}>
          <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 20 }}>What the portal will do</div>
          {[['clipboard-list', 'Assignments & submissions', "Students see what's due and upload work."],
            ['trending-up', 'Progress reports', 'Session notes and trends in one place for parents.'],
            ['credit-card', 'Tuition & worksheets', 'Pay for sessions and buy practice packs.'],
            ['message-circle', 'Messaging', "Direct line to your child's tutor between sessions."]].map(([icon, h, p], i, arr) => (
            <div key={h} style={{ display: 'flex', gap: 14, marginBottom: i === arr.length - 1 ? 0 : 18 }}>
              <span style={{ width: 38, height: 38, flex: 'none', borderRadius: 12, background: 'var(--sq-teal-100)', color: 'var(--sq-teal-700)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={icon} size={19} />
              </span>
              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 900, margin: 0, color: 'var(--sq-ink)' }}>{h}</h4>
                <p style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--text-muted)', margin: '4px 0 0' }}>{p}</p>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </Section>
  );
}
window.Login = Login;
