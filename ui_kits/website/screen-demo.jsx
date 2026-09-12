const { Card, Button, Input, Select, Checkbox, Alert, Icon } = window.ScholarSQuestDesignSystem_b05a4d;

const FAQ = [
  ['How long is a session, and how often?', 'Sessions run 45 or 60 minutes. Most families book once or twice a week; test-prep students often go twice weekly in the two months before the exam.'],
  ['What if we need to reschedule?', "Reschedule or cancel with reasonable notice and there's no charge and no penalty. Illness and school events happen; we'd rather move the session than waste it."],
  ['How is a tutor matched to my child?', "We match on subject and grade level first, then on temperament. A child who freezes up needs a different pace than one who races ahead. If the fit isn't right after a session or two, tell us and we'll change it."],
  ['What actually happens in the demo class?', "A short diagnostic to see where your child is, then real work on something they're currently stuck on. It's a teaching session, not a sales call, and you get written notes afterwards."],
  ['How will I know it\u2019s working?', 'You get notes after every session covering what we worked on and what to practise, plus a progress summary you can compare against school reports.'],
  ['Should I sit in on sessions?', "You're welcome to, and for younger children it often helps for the first session. After that most students concentrate better on their own, and the notes keep you in the loop."],
];

function Demo({ onNav }) {
  const [sent, setSent] = React.useState(false);
  const [times, setTimes] = React.useState({});
  const [open, setOpen] = React.useState(-1);
  const toggle = k => setTimes({ ...times, [k]: !times[k] });
  return (
    <div>
      <Section pad={0} style={{ paddingTop: 64, paddingBottom: 32 }}>
        <div style={{ maxWidth: 640 }}>
          <Eyebrow>Free demo class</Eyebrow>
          <Title size={48}>A real session, before you decide anything</Title>
          <Lede style={{ marginTop: 18 }}>
            Forty-five minutes with a tutor, matched to your child's grade and subject. No card,
            no obligation, and you keep the notes either way.
          </Lede>
        </div>
      </Section>

      <Section pad={0} style={{ paddingBottom: 72 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, alignItems: 'start' }}>
          <div>
            <Title size={26} style={{ marginBottom: 26 }}>What happens</Title>
            {[['01', 'You send the details', "Grade, subject, and what's been hard lately. The form opposite takes a minute."],
              ['02', 'We match a tutor and confirm a time', 'Usually within one business day, from the times you marked as workable.'],
              ['03', 'Your child works, we watch how', 'A short diagnostic, then real problems. Join a video link from any laptop or tablet, with nothing to install.'],
              ['04', 'You get notes and a plan', "What we saw, where the gap is, and what we'd do about it. Then it's your call."]].map(([n, h, p]) => (
              <div key={n} style={{ display: 'flex', gap: 18, marginBottom: 26 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 600, color: 'var(--sq-pink-500)', width: 26, flex: 'none', paddingTop: 3 }}>{n}</span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 900, margin: '0 0 6px', color: 'var(--sq-ink)' }}>{h}</h3>
                  <p style={{ fontSize: 14.5, fontWeight: 600, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{p}</p>
                </div>
              </div>
            ))}
          </div>

          <Card padding={32} style={{ boxShadow: 'var(--shadow-md)' }}>
            {sent ? (
              <div>
                <Alert tone="success" title="Request received">
                  We'll be in touch within one business day with a tutor and a time. If it's urgent, call (609) 517-8112.
                </Alert>
                <Button variant="outline" size="sm" style={{ marginTop: 18 }} onClick={() => setSent(false)}>Send another request</Button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div>
                  <Title size={24}>Request a demo</Title>
                  <p style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--text-muted)', margin: '6px 0 0' }}>All fields optional except email, so tell us what you can.</p>
                </div>
                <Input label="Parent name" placeholder="Your name" icon="user" />
                <Input label="Email" type="email" placeholder="you@example.com" icon="mail" />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <Select label="Child's grade" options={['Kindergarten', 'Grade 1–2', 'Grade 3–5', 'Grade 6–8', 'Grade 9–10', 'Grade 11–12']} />
                  <Select label="Subject" options={['Math', 'English', 'Both', 'Test prep']} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--sq-ink)', marginBottom: 8 }}>Times that usually work</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
                    {['Weekday mornings', 'Weekday evenings', 'Weekends'].map(t => (
                      <Checkbox key={t} label={t} checked={!!times[t]} onChange={() => toggle(t)} />
                    ))}
                  </div>
                </div>
                <label style={{ display: 'block' }}>
                  <span style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--sq-ink)', marginBottom: 6 }}>What's been hard lately?</span>
                  <textarea rows={4} placeholder="e.g. fractions, or essays that lose the thread halfway"
                    style={{ width: '100%', fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: 'var(--sq-ink)',
                      padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-default)', outline: 'none', resize: 'vertical' }} />
                </label>
                <Button fullWidth pop onClick={() => setSent(true)}>Request my free demo</Button>
                <p style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text-muted)', margin: 0 }}>
                  This form isn't connected to a booking system yet. Wire it to your scheduler or a form service to go live.
                </p>
              </div>
            )}
          </Card>
        </div>
      </Section>

      <Section pad={0} style={{ paddingBottom: 88 }}>
        <div style={{ height: 1, background: 'var(--border-subtle)', margin: '0 0 48px' }} />
        <Title size={34}>Questions parents ask</Title>
        <p style={{ fontSize: 15.5, fontWeight: 600, color: 'var(--text-muted)', margin: '8px 0 30px' }}>
          Draft answers. Correct anything that doesn't match how you actually run sessions.
        </p>
        <div style={{ maxWidth: 760, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FAQ.map(([q, a], i) => (
            <Card key={q} padding={0}>
              <button onClick={() => setOpen(open === i ? -1 : i)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                  padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                  fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 17, color: 'var(--sq-ink)' }}>
                {q}<Icon name={open === i ? 'minus' : 'plus'} size={20} style={{ color: 'var(--sq-pink-500)', flex: 'none' }} />
              </button>
              {open === i && <div style={{ padding: '0 22px 20px', fontSize: 15, fontWeight: 600, lineHeight: 1.65, color: 'var(--text-body)' }}>{a}</div>}
            </Card>
          ))}
        </div>
        <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-body)', margin: '28px 0 0' }}>
          Something not answered here? <a href="#" onClick={e => { e.preventDefault(); onNav('Contact'); }}>Send us the question</a>. We reply to every one.
        </p>
      </Section>
    </div>
  );
}
window.Demo = Demo;
