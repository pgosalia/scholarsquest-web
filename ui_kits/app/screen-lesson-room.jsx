const { Card, Button, IconButton, Badge, Avatar, Icon } = window.ScholarSQuestDesignSystem_b05a4d;

function LessonRoom({ onLeave }) {
  const [tool, setTool] = React.useState('pen');
  const [mic, setMic] = React.useState(true);
  const tools = [['pen', 'pen-tool'], ['text', 'type'], ['shape', 'square'], ['eraser', 'eraser'], ['equation', 'sigma']];
  return (
    <div>
      <PageHead title="Lesson room" sub="Algebra I · Quadratic equations · 50 minutes"
        right={<div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <Badge tone="pink" icon="circle-dot">Live · 18:42</Badge>
          <Button variant="outline" size="sm" onClick={onLeave}>Leave</Button>
        </div>} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 18 }}>
        <Card padding={0} style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderBottom: '1px solid var(--border-subtle)' }}>
            {tools.map(([id, ic]) => (
              <IconButton key={id} icon={ic} label={id} size="sm" variant={tool === id ? 'teal' : 'bare'} onClick={() => setTool(id)} />
            ))}
            <span style={{ width: 1, height: 24, background: 'var(--border-subtle)', margin: '0 4px' }} />
            <IconButton icon="undo-2" label="Undo" size="sm" variant="bare" />
            <IconButton icon="trash-2" label="Clear" size="sm" variant="bare" />
            <span style={{ marginLeft: 'auto', fontSize: 12, fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.06em' }}>Shared whiteboard</span>
          </div>
          <div style={{ height: 420, background: `var(--sq-white)`, backgroundImage: 'radial-gradient(var(--sq-grey-200) 1.2px, transparent 1.2px)', backgroundSize: '22px 22px',
            position: 'relative', padding: 32 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 30, fontWeight: 600, color: 'var(--sq-ink)' }}>x² + 5x + 6 = 0</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 22, color: 'var(--sq-teal-700)', marginTop: 18 }}>(x + 2)(x + 3) = 0</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 22, color: 'var(--sq-pink-600)', marginTop: 14 }}>x = −2 &nbsp; or &nbsp; x = −3</div>
            <div style={{ position: 'absolute', right: 26, top: 26, width: 180, padding: 14, background: 'var(--sq-sun-100)',
              border: '2px solid var(--sq-sun-300)', borderRadius: 16, fontSize: 14, fontWeight: 700, color: 'var(--sq-sun-700)', transform: 'rotate(1.5deg)' }}>
              Factor pairs of 6 that add to 5 → 2 and 3
            </div>
            <div style={{ position: 'absolute', left: 30, bottom: 26, display: 'flex', alignItems: 'center', gap: 8,
              fontSize: 12, fontWeight: 800, color: 'var(--sq-teal-700)' }}>
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--sq-teal-500)' }} />Maya is drawing…
            </div>
          </div>
        </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Card padding={0} style={{ overflow: 'hidden' }}>
            <div style={{ height: 150, background: 'var(--sq-teal-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <Avatar name="Maya Rodriguez" size="lg" />
              <Badge tone="neutral" size="sm" style={{ position: 'absolute', left: 10, bottom: 10, background: 'rgba(255,255,255,.9)' }}>Maya R. · Tutor</Badge>
            </div>
            <div style={{ height: 110, background: 'var(--sq-grey-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', borderTop: '1px solid var(--border-subtle)' }}>
              <Avatar name="Jordan Lee" ring="pink" />
              <Badge tone="neutral" size="sm" style={{ position: 'absolute', left: 10, bottom: 10, background: 'rgba(255,255,255,.9)' }}>You</Badge>
            </div>
            <div style={{ display: 'flex', gap: 8, padding: 12, justifyContent: 'center', borderTop: '1px solid var(--border-subtle)' }}>
              <IconButton icon={mic ? 'mic' : 'mic-off'} label="Mic" variant={mic ? 'soft' : 'pink'} onClick={() => setMic(!mic)} />
              <IconButton icon="video" label="Camera" variant="soft" />
              <IconButton icon="monitor-up" label="Share screen" variant="soft" />
              <IconButton icon="phone-off" label="Leave" variant="solid" onClick={onLeave} />
            </div>
          </Card>
          <Card padding={18}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 900, margin: '0 0 10px', color: 'var(--sq-ink)' }}>Session plan</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[['Warm-up: factoring review', true], ['Quadratics by factoring', true], ['Word problems', false], ['Set homework', false]].map(([t, d]) => (
                <div key={t} style={{ display: 'flex', gap: 9, alignItems: 'center', fontSize: 13.5, fontWeight: 700, color: d ? 'var(--text-muted)' : 'var(--sq-ink)' }}>
                  <Icon name={d ? 'check-circle' : 'circle'} size={16} style={{ color: d ? 'var(--sq-success)' : 'var(--sq-grey-400)' }} />{t}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
window.LessonRoom = LessonRoom;
