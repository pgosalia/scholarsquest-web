const { Button, Card, Badge, Avatar, Icon, IconButton, ProgressBar } = window.ScholarSQuestDesignSystem_b05a4d;

const QUOTES = [
  ['All three of mine see Kathni and no two sessions look alike. My two in Grade 2 play games with numbers while my Grade 5 gets properly pushed. Homework stopped being an argument in our house.',
   'Mukti', 'parent of two Grade 2 students and a Grade 5 student'],
  ['My daughter was behind on reading and starting to hide it. A few months in she reads to me at bedtime without being asked. That\u2019s the part I didn\u2019t expect.',
   'Zalak', 'parent of a Grade 1 student'],
  ['The notes after every session are what sold me. I actually know what my son worked on. My sixth-grader went from dreading math tests to telling me his score before I ask.',
   'Riddhi', 'parent of a Grade 1 and a Grade 6 student'],
];

const PROGRAMS = [
  { page: 'Math', tag: 'Mathematics', tone: 'teal', icon: 'calculator', h: 'From counting to calculus',
    p: 'Arithmetic fluency, fractions and ratios, algebra, geometry, trigonometry and calculus, plus SAT, ACT and AP Math.',
    rows: [['K–5', 'Number sense, operations, word problems'], ['6–8', 'Pre-algebra, ratios, data, state testing'], ['9–12', 'Algebra II, geometry, calculus, AP & SAT']] },
  { page: 'English', tag: 'English', tone: 'pink', icon: 'book-open', h: 'From first readers to first drafts',
    p: 'Phonics and fluency, comprehension, grammar, essay writing, literature analysis, plus SAT, ACT and AP English.',
    rows: [['K–5', 'Phonics, fluency, vocabulary, sentences'], ['6–8', 'Comprehension, grammar, structured essays'], ['9–12', 'Literary analysis, argument, AP & SAT']] },
];

const STEPS = [
  { n: '01', icon: 'phone-call', t: 'Tell us about your child', d: 'Grade, subject, and what\u2019s been hard lately. A few sentences is plenty.' },
  { n: '02', icon: 'calendar', t: 'Pick a time that fits', d: 'Weekday evenings and weekends included. Reschedule any time without penalty.' },
  { n: '03', icon: 'video', t: 'Meet your tutor, free', d: 'A real working session. Afterwards you get notes on what we saw and a plan, and you decide.' },
];

function Home({ onNav }) {
  const [q, setQ] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setQ(i => (i + 1) % QUOTES.length), 8000);
    return () => clearInterval(t);
  }, []);
  return (
    <div>
      <Section pad={0} style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 56, alignItems: 'center' }}>
          <div>
            <Badge tone="teal" icon="graduation-cap">Kindergarten – Grade 12</Badge>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 58, fontWeight: 900, letterSpacing: '-.03em',
              lineHeight: 1.04, color: 'var(--sq-ink)', margin: '20px 0 0' }}>
              One-on-one tutoring that starts where your child <span style={{ color: 'var(--sq-pink-500)' }}>actually is</span>.
            </h1>
            <Lede style={{ marginTop: 18, maxWidth: 500 }}>
              One-on-one tutoring in Math and English, matched to your child's pace, from early reading
              and number sense through calculus, AP and SAT prep.
            </Lede>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 8 }}>
              <Button size="lg" pop iconRight="arrow-right" onClick={() => onNav('Demo')}>Book a free demo class</Button>
              <Button size="lg" variant="outline" onClick={() => onNav('Math')}>See the programs</Button>
            </div>
            <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-muted)', margin: '20px 0 0' }}>
              No card required. The demo is a real session, not a sales call.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <PhotoSlot h={380} tone="var(--sq-teal-100)" label="Hero photo: a student working at a laptop" />
            <Card padding={16} style={{ position: 'absolute', left: -26, bottom: 34, width: 250, boxShadow: 'var(--shadow-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <Avatar name="Kathni Patel" size="sm" />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 900, color: 'var(--sq-ink)' }}>Session notes · Grade 5</div>
                  <div style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--text-muted)' }}>Fractions → word problems</div>
                </div>
              </div>
              <ProgressBar value={72} label="Where we are" showValue height={10} />
            </Card>
            <Card padding={14} tone="ink" style={{ position: 'absolute', right: -18, top: 28, display: 'flex', alignItems: 'center', gap: 10 }}>
              <Icon name="users" size={20} style={{ color: 'var(--sq-sun-400)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 15 }}>200+ students</span>
            </Card>
          </div>
        </div>
      </Section>

      <Section bg="var(--sq-white)" pad={28}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          {[['200+', 'students to date'], ['80%', 'up two letter grades in a semester'], ['1:1', 'one student, one tutor'], ['K–12', 'every grade band'], ['45–60', 'minutes per session']].map(([a, b]) => (
            <div key={b} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 26, fontWeight: 600, color: 'var(--sq-teal-700)' }}>{a}</div>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 4 }}>{b}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>What we teach</Eyebrow>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
          <Title>Two subjects, every grade band</Title>
          <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-muted)' }}>Pick a subject to see what a term looks like.</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 34 }}>
          {PROGRAMS.map(s => (
            <Card key={s.page} hoverLift padding={30} accentBar={'var(--sq-' + s.tone + '-400)'}
              style={{ cursor: 'pointer' }} onClick={() => onNav(s.page)}>
              <div style={{ width: 52, height: 52, borderRadius: 16, background: 'var(--sq-' + s.tone + '-100)',
                color: 'var(--sq-' + s.tone + '-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Icon name={s.icon} size={26} />
              </div>
              <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 }}>{s.tag}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 900, margin: '0 0 10px', color: 'var(--sq-ink)' }}>{s.h}</h3>
              <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.6, color: 'var(--text-body)', marginBottom: 20 }}>{s.p}</p>
              {s.rows.map(([b, t]) => <GradeRow key={b} band={b} text={t} tone={s.tone} />)}
              <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 8, fontSize: 15, fontWeight: 800, color: 'var(--sq-pink-600)' }}>
                Explore {s.page.toLowerCase()} tutoring <Icon name="arrow-right" size={17} />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section bg="var(--sq-cream-deep)">
        <Eyebrow color="var(--sq-teal-700)">How it works</Eyebrow>
        <Title>Three steps from first click to first session.</Title>
        <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-body)', margin: '10px 0 0' }}>Usually inside a week.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28, marginTop: 34 }}>
          {STEPS.map(s => (
            <div key={s.n}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, color: 'var(--sq-pink-500)' }}>{s.n}</span>
                <span style={{ flex: 1, height: 2, background: 'rgba(20,18,24,.10)' }} />
              </div>
              <div style={{ color: 'var(--sq-teal-700)', marginBottom: 10 }}><Icon name={s.icon} size={28} /></div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 900, margin: '0 0 6px', color: 'var(--sq-ink)' }}>{s.t}</h4>
              <p style={{ fontSize: 14.5, fontWeight: 600, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="var(--sq-teal-400)">
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr .85fr', gap: 48, alignItems: 'center' }}>
          <div>
            <Icon name="quote" size={40} style={{ color: 'rgba(20,18,24,.35)' }} />
            <blockquote style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800, lineHeight: 1.32,
              letterSpacing: '-.01em', color: 'var(--sq-ink)', margin: '10px 0 22px', minHeight: 150 }}>
              {QUOTES[q][0]}
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Avatar name={QUOTES[q][1]} ring="none" style={{ boxShadow: '0 0 0 3px rgba(255,255,255,.6)' }} />
              <div>
                <div style={{ fontWeight: 900, color: 'var(--sq-ink)' }}>{QUOTES[q][1]}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'rgba(20,18,24,.7)' }}>{QUOTES[q][2]}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 28, paddingTop: 22, borderTop: '1px solid rgba(20,18,24,.18)' }}>
              <div style={{ display: 'flex', gap: 8, marginRight: 'auto' }}>
                {QUOTES.map((_, i) => (
                  <button key={i} onClick={() => setQ(i)} aria-label={'Quote ' + (i + 1)}
                    style={{ width: 10, height: 10, padding: 0, border: 0, borderRadius: '50%', cursor: 'pointer',
                      background: i === q ? 'var(--sq-ink)' : 'rgba(20,18,24,.28)' }} />
                ))}
              </div>
              <IconButton icon="arrow-left" label="Previous quote" variant="bare" style={{ color: 'var(--sq-ink)' }} onClick={() => setQ((q + QUOTES.length - 1) % QUOTES.length)} />
              <IconButton icon="arrow-right" label="Next quote" variant="bare" style={{ color: 'var(--sq-ink)' }} onClick={() => setQ((q + 1) % QUOTES.length)} />
            </div>
          </div>
          <PhotoSlot h={320} tone="rgba(255,255,255,.45)" label="Family photo" />
        </div>
      </Section>

      <Section>
        <Card tone="ink" padding={48} style={{ textAlign: 'center' }}>
          <Title size={40} align="center" style={{ color: '#fff' }}>Start with a free demo class</Title>
          <p style={{ fontSize: 17, fontWeight: 600, color: 'var(--sq-grey-300)', maxWidth: 560, margin: '14px auto 26px' }}>
            Pick a time, tell us a little about your child, and meet a tutor. If it isn't the right fit,
            that's a useful answer too.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button size="lg" variant="secondary" pop iconRight="arrow-right" onClick={() => onNav('Demo')}>Book a free demo class</Button>
            <Button size="lg" variant="ghost" style={{ color: 'var(--sq-teal-300)' }} onClick={() => onNav('Contact')}>Ask a question first</Button>
          </div>
        </Card>
      </Section>
    </div>
  );
}
window.Home = Home;
