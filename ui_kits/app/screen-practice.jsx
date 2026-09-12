const { Card, Button, Badge, Icon, ProgressBar, Alert, Tabs } = window.ScholarSQuestDesignSystem_b05a4d;

const CHOICES = [
  ['A', 'x = −2 or x = −3', true],
  ['B', 'x = 2 or x = 3', false],
  ['C', 'x = −1 or x = −6', false],
  ['D', 'No real solutions', false],
];

function Practice({ onBack }) {
  const [tab, setTab] = React.useState('math');
  const [picked, setPicked] = React.useState(null);
  const [hint, setHint] = React.useState(false);
  const answered = picked !== null;
  return (
    <div>
      <PageHead title="Practice" sub="Question 4 of 10 · Quadratic equations"
        right={<Tabs value={tab} onChange={setTab} items={[{ value: 'math', label: 'Math', icon: 'calculator' }, { value: 'english', label: 'English', icon: 'book-open' }, { value: 'sat', label: 'SAT', icon: 'target' }]} />} />
      <ProgressBar value={40} height={10} style={{ marginBottom: 20 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 20 }}>
        <Card padding={28}>
          <Badge tone="teal" icon="calculator">Algebra I · Factoring</Badge>
          <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--sq-ink)', margin: '18px 0 10px' }}>Solve for x:</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 32, fontWeight: 600, color: 'var(--sq-ink)', marginBottom: 24 }}>x² + 5x + 6 = 0</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {CHOICES.map(([k, label, correct]) => {
              const isPicked = picked === k;
              const show = answered && (correct || isPicked);
              const good = answered && correct;
              return (
                <button key={k} onClick={() => !answered && setPicked(k)} disabled={answered}
                  style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', textAlign: 'left',
                    borderRadius: 16, cursor: answered ? 'default' : 'pointer', fontFamily: 'var(--font-body)',
                    border: `2px solid ${show ? (correct ? 'var(--sq-success)' : 'var(--sq-danger)') : 'var(--border-subtle)'}`,
                    background: show ? (correct ? 'var(--sq-success-soft)' : 'var(--sq-danger-soft)') : '#fff',
                    transition: 'all var(--dur-fast) var(--ease-out)' }}>
                  <span style={{ width: 30, height: 30, borderRadius: '50%', flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: show ? (correct ? 'var(--sq-success)' : 'var(--sq-danger)') : 'var(--sq-grey-100)',
                    color: show ? '#fff' : 'var(--sq-grey-700)', fontWeight: 900, fontSize: 14 }}>{k}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 17, fontWeight: 600, color: 'var(--sq-ink)' }}>{label}</span>
                  {show && <Icon name={correct ? 'check' : 'x'} size={20} style={{ marginLeft: 'auto', color: correct ? 'var(--sq-success)' : 'var(--sq-danger)' }} />}
                </button>
              );
            })}
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 22, alignItems: 'center' }}>
            <Button variant="ghost" size="sm" iconLeft="lightbulb" onClick={() => setHint(true)}>Show a hint</Button>
            <Button size="sm" pop iconRight="arrow-right" disabled={!answered} onClick={() => { setPicked(null); setHint(false); }} style={{ marginLeft: 'auto' }}>Next question</Button>
          </div>
          {hint && <Alert tone="warning" title="Hint" style={{ marginTop: 16 }}>Look for two numbers that multiply to 6 and add to 5.</Alert>}
          {answered && <Alert tone={picked === 'A' ? 'success' : 'danger'} title={picked === 'A' ? 'Correct!' : 'Not quite'} style={{ marginTop: 12 }}>
            (x + 2)(x + 3) = 0, so x = −2 or x = −3.
          </Alert>}
        </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Card padding={20} tone="warm">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <Icon name="flame" size={22} style={{ color: 'var(--sq-apricot-500)' }} />
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 17, color: 'var(--sq-ink)' }}>12-day streak</span>
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-body)' }}>Finish this set today to keep it alive.</div>
          </Card>
          <Card padding={20}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 900, margin: '0 0 12px', color: 'var(--sq-ink)' }}>This set</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 8 }}>
              {Array.from({ length: 10 }, (_, i) => (
                <div key={i} style={{ height: 34, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600,
                  background: i < 3 ? 'var(--sq-teal-100)' : i === 3 ? 'var(--sq-pink-500)' : 'var(--sq-grey-100)',
                  color: i === 3 ? '#fff' : i < 3 ? 'var(--sq-teal-800)' : 'var(--sq-grey-500)' }}>{i + 1}</div>
              ))}
            </div>
          </Card>
          <Button variant="outline" size="sm" fullWidth iconLeft="arrow-left" onClick={onBack}>Back to dashboard</Button>
        </div>
      </div>
    </div>
  );
}
window.Practice = Practice;
