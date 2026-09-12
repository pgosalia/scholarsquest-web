const { Card, Button, Badge, Avatar, Icon, ProgressBar, Checkbox, Alert } = window.ScholarSQuestDesignSystem_b05a4d;

function Dashboard({ onJoin, onPractice }) {
  const [done, setDone] = React.useState({ 0: true });
  const tasks = [
    ['Algebra I — Worksheet 4.2', 'Due Tue', 'teal'],
    ['Read "The Outsiders" ch. 7–9', 'Due Wed', 'pink'],
    ['SAT Math drill — linear systems', 'Due Thu', 'sun'],
    ['Essay draft: thesis paragraph', 'Due Fri', 'pink'],
  ];
  return (
    <div>
      <PageHead title="Hi, Jordan 👋" sub="Tuesday, 12 September" right={<Button variant="outline" size="sm" iconLeft="calendar">Reschedule</Button>} />
      <Card tone="ink" padding={26} style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}>
          <Avatar name="Maya Rodriguez" size="lg" ring="teal" />
          <div style={{ flex: 1, minWidth: 220 }}>
            <Badge tone="solid" size="sm">Starts in 12 minutes</Badge>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 900, color: '#fff', margin: '8px 0 4px' }}>Algebra I with Maya R.</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--sq-grey-400)' }}>4:00 – 4:50pm · Quadratic equations</div>
          </div>
          <Button size="lg" variant="secondary" pop iconRight="video" onClick={onJoin}>Join lesson</Button>
        </div>
      </Card>

      <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
        <StatTile icon="flame" value="12" label="day streak" tone="sun" />
        <StatTile icon="check-circle" value="38" label="lessons done" tone="teal" />
        <StatTile icon="pencil" value="214" label="questions solved" tone="pink" />
        <StatTile icon="trending-up" value="+218" label="SAT gain" tone="teal" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 20 }}>
        <Card padding={24}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 900, margin: 0, color: 'var(--sq-ink)' }}>This week</h3>
            <Badge tone="neutral" size="sm">{Object.values(done).filter(Boolean).length}/4 done</Badge>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {tasks.map(([t, due, tone], i) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px',
                border: '1px solid var(--border-subtle)', borderRadius: 16, background: done[i] ? 'var(--sq-grey-100)' : '#fff' }}>
                <Checkbox checked={!!done[i]} onChange={() => setDone({ ...done, [i]: !done[i] })} />
                <span style={{ flex: 1, fontSize: 15, fontWeight: 700, color: done[i] ? 'var(--text-muted)' : 'var(--sq-ink)',
                  textDecoration: done[i] ? 'line-through' : 'none' }}>{t}</span>
                <Badge tone={tone} size="sm">{due}</Badge>
              </div>
            ))}
          </div>
          <Button variant="ghost" size="sm" iconRight="arrow-right" style={{ marginTop: 14 }} onClick={onPractice}>Start today's practice</Button>
        </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Card padding={24}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 900, margin: '0 0 16px', color: 'var(--sq-ink)' }}>Mastery</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <ProgressBar label="Algebra I" value={72} showValue />
              <ProgressBar label="Essay writing" value={45} showValue tone="pink" />
              <ProgressBar label="SAT Math" value={88} showValue tone="sun" />
            </div>
          </Card>
          <Alert tone="success" title="Nice — quadratics unlocked">You scored 9/10 on Friday's check. Maya added one harder set.</Alert>
        </div>
      </div>
    </div>
  );
}
window.Dashboard = Dashboard;
