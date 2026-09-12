const { Card, Button, Badge, Avatar, Icon, ProgressBar, Tabs } = window.ScholarSQuestDesignSystem_b05a4d;

const SCORES = [[1180, 'Mar'], [1230, 'Apr'], [1260, 'May'], [1310, 'Jun'], [1350, 'Jul'], [1398, 'Aug']];

function Progress() {
  const [tab, setTab] = React.useState('overview');
  const max = 1500, min = 1100;
  return (
    <div>
      <PageHead title="Progress" sub="Jordan Lee · Grade 10 · shared with Priya N."
        right={<Button variant="outline" size="sm" iconLeft="download">Export report</Button>} />
      <Tabs variant="underline" value={tab} onChange={setTab} items={[{ value: 'overview', label: 'Overview' }, { value: 'topics', label: 'By topic' }, { value: 'notes', label: 'Tutor notes' }]} style={{ marginBottom: 22, display: 'flex' }} />

      <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
        <StatTile icon="target" value="1398" label="latest SAT practice" tone="sun" />
        <StatTile icon="trending-up" value="+218" label="since March" tone="teal" />
        <StatTile icon="clock" value="31h" label="tutored this term" tone="pink" />
        <StatTile icon="calendar-check" value="96%" label="attendance" tone="teal" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 20 }}>
        <Card padding={24}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 900, margin: '0 0 20px', color: 'var(--sq-ink)' }}>SAT practice scores</h3>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 18, height: 190 }}>
            {SCORES.map(([s, m], i) => {
              const h = ((s - min) / (max - min)) * 100;
              const last = i === SCORES.length - 1;
              return (
                <div key={m} style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', gap: 8 }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, textAlign: 'center', color: last ? 'var(--sq-pink-600)' : 'var(--text-muted)' }}>{s}</div>
                  <div style={{ height: h + '%', borderRadius: '12px 12px 6px 6px', background: last ? 'var(--sq-pink-500)' : 'var(--sq-teal-300)' }} />
                  <div style={{ fontSize: 12, fontWeight: 800, textAlign: 'center', color: 'var(--text-muted)' }}>{m}</div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card padding={24}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 900, margin: '0 0 18px', color: 'var(--sq-ink)' }}>Mastery by topic</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <ProgressBar label="Linear equations" value={94} showValue />
            <ProgressBar label="Quadratics" value={72} showValue />
            <ProgressBar label="Geometry" value={58} showValue tone="sun" />
            <ProgressBar label="Reading evidence" value={81} showValue tone="pink" />
            <ProgressBar label="Essay structure" value={45} showValue tone="pink" />
          </div>
        </Card>
      </div>

      <Card padding={24} style={{ marginTop: 20 }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 900, margin: '0 0 16px', color: 'var(--sq-ink)' }}>Recent tutor notes</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[['Maya Rodriguez', 'Sep 9 · Algebra I', 'Factoring is landing. Jordan solved 9/10 unprompted. Next week: word problems, which is where the wobble still is.'],
            ['Sam Keller', 'Sep 5 · ACT English', 'Comma rules are solid now. We slowed the reading pace and accuracy jumped — keep that pacing on the real test.'],
            ['Ada Lawal', 'Sep 2 · Essay writing', 'Thesis statements are much sharper. Body paragraphs still drift; we are drilling topic sentences next.']].map(([n, m, t]) => (
            <div key={m} style={{ display: 'flex', gap: 14, padding: '14px 16px', border: '1px solid var(--border-subtle)', borderRadius: 16 }}>
              <Avatar name={n} size="sm" />
              <div>
                <div style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 15, color: 'var(--sq-ink)' }}>{n}</span>
                  <span style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--text-muted)' }}>{m}</span>
                </div>
                <div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--text-body)', lineHeight: 1.6, marginTop: 3 }}>{t}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
window.Progress = Progress;
