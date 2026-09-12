const { Button, Card, Badge, Icon } = window.ScholarSQuestDesignSystem_b05a4d;

const SUBJECTS = {
  Math: {
    tone: 'teal', icon: 'calculator', eyebrow: 'Program · Mathematics',
    h1: 'Math, from counting to calculus',
    lede: 'We start with a short diagnostic, find the gap that\u2019s actually causing trouble, and work forward from there. One student, one tutor, every session.',
    other: 'English', otherLabel: 'English instead',
    photo: 'Math session photo: whiteboard or notebook work',
    bands: [
      ['Grades K–5', 'Elementary math', 'A solid foundation in the four operations, and the habit of explaining why an answer works. Games, manipulatives and short interactive drills keep it moving.', ['Number sense', 'Times tables', 'Fractions', 'Word problems', 'Measurement']],
      ['Grades 6–8', 'Middle school math', 'The years where math turns abstract. We shore up fractions, decimals and ratios, then move into pre-algebra, geometry and data with plenty of practice against state test formats.', ['Ratios & percent', 'Pre-algebra', 'Geometry', 'Data & graphs', 'State testing']],
      ['Grades 9–12', 'High school math', 'Algebra II through calculus, with support for homework, projects and exams. Sessions can run as steady weekly coaching or as focused sprints before a test.', ['Algebra II', 'Trigonometry', 'Pre-calculus', 'Calculus', 'Statistics']],
    ],
    testTitle: 'SAT, ACT and AP math',
    testBody: 'Timed sections, error logs and question-type drills, plus the pacing strategy that usually matters more than the content. We build a schedule backwards from your test date.',
    testRows: [['SAT', 'Heart of Algebra, problem solving, advanced math'], ['ACT', 'Speed work across all 60 questions'], ['AP', 'Calculus AB/BC and Statistics, free-response practice']],
    why: [['user-check', 'One tutor, consistently', 'Your child works with the same tutor week to week, so nobody re-explains the backstory every session.'],
          ['notebook-pen', 'Notes after every session', 'What we worked on, what clicked, what to practise. No guessing about progress.'],
          ['calendar-clock', 'Scheduling that bends', 'Early mornings, evenings, weekends. Reschedule when life happens, with no penalties.']],
    ctaH: 'See a math session before you commit',
    ctaP: 'The demo is a real working session with a real tutor, free, and you get our notes afterwards.',
  },
  English: {
    tone: 'pink', icon: 'book-open', eyebrow: 'Program · English',
    h1: 'English, from first readers to first drafts',
    lede: 'Reading that makes sense, writing that holds together, and the confidence to speak up. We work from your child\u2019s own assignments wherever we can.',
    other: 'Math', otherLabel: 'Math instead',
    photo: 'English session photo: reading or writing',
    bands: [
      ['Grades K–5', 'Learning to read', 'Phonics, decoding and fluency, then comprehension and vocabulary. Short, lively sessions built around books a child actually wants to finish.', ['Phonics', 'Fluency', 'Vocabulary', 'Sentences', 'Spelling']],
      ['Grades 6–8', 'Reading to learn', 'Strategies for harder texts, grammar and punctuation that stick, and the structure of a paragraph, then a whole essay, with feedback on every draft.', ['Comprehension', 'Grammar', 'Essay structure', 'Creative writing', 'Speaking']],
      ['Grades 9–12', 'Analysis and argument', 'Close reading of classic and contemporary texts, thesis-driven writing, and the timed essay. Support for coursework, exams and college application drafts.', ['Literary analysis', 'Thesis writing', 'Rhetoric', 'Timed essays', 'Presentations']],
    ],
    testTitle: 'SAT, ACT and AP English',
    testBody: 'Question-type drills, evidence-based reading practice, and a repeatable plan for the essay. We schedule backwards from your test date and track section timing week by week.',
    testRows: [['SAT', 'Reading & Writing modules, evidence questions'], ['ACT', 'English, Reading, and the optional essay'], ['AP', 'Language & Composition, Literature & Composition']],
    why: [['file-pen', 'Feedback on real work', 'We mark up your child\u2019s own essays and assignments, not generic worksheets.'],
          ['book-heart', 'Reading they\u2019ll finish', 'Texts chosen for level and interest: the fastest route to a child who reads without being asked.'],
          ['mic', 'Space to speak up', 'One-on-one sessions are a low-stakes place to practise reading aloud and presenting.']],
    ctaH: 'Bring an assignment to the demo',
    ctaP: 'Send us a piece of writing or a reading your child is stuck on, and we\u2019ll build the free session around it.',
  },
};

function Subject({ subject, onNav }) {
  const d = SUBJECTS[subject];
  return (
    <div>
      <Section pad={0} style={{ paddingTop: 64, paddingBottom: 40 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 48, alignItems: 'end' }}>
          <div style={{ maxWidth: 560 }}>
            <Eyebrow color={'var(--sq-' + d.tone + '-700)'}>{d.eyebrow}</Eyebrow>
            <Title size={48}>{d.h1}</Title>
            <Lede style={{ marginTop: 18, maxWidth: 500 }}>{d.lede}</Lede>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Button size="lg" pop iconRight="arrow-right" onClick={() => onNav('Demo')}>Book a free demo class</Button>
              <Button size="lg" variant="outline" onClick={() => onNav(d.other)}>{d.otherLabel}</Button>
            </div>
          </div>
          <PhotoSlot h={280} tone={'var(--sq-' + d.tone + '-100)'} label={d.photo} />
        </div>
      </Section>

      <Section pad={0} style={{ paddingBottom: 64 }}>
        <div style={{ height: 1, background: 'var(--border-subtle)', margin: '0 0 44px' }} />
        <Title size={34} style={{ marginBottom: 30 }}>What we cover, by grade band</Title>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {d.bands.map(([band, h, p, tags]) => (
            <Card key={band} padding={28}>
              <Badge tone={d.tone} size="sm">{band}</Badge>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 900, margin: '14px 0 10px', color: 'var(--sq-ink)' }}>{h}</h3>
              <p style={{ fontSize: 14.5, fontWeight: 600, lineHeight: 1.6, color: 'var(--text-body)', marginBottom: 18 }}>{p}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {tags.map(t => <Badge key={t} tone="neutral" size="sm">{t}</Badge>)}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section bg="var(--sq-cream-deep)" pad={64}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, alignItems: 'center' }}>
          <div style={{ maxWidth: 460 }}>
            <Eyebrow>Test preparation</Eyebrow>
            <Title size={34}>{d.testTitle}</Title>
            <p style={{ fontSize: 15.5, fontWeight: 600, lineHeight: 1.65, color: 'var(--text-body)', margin: '14px 0 0' }}>{d.testBody}</p>
          </div>
          <div style={{ display: 'grid', gap: 14 }}>
            {d.testRows.map(([k, v]) => (
              <div key={k} style={{ display: 'flex', gap: 16, alignItems: 'baseline', background: '#fff', borderRadius: 16, padding: '14px 18px', border: '1px solid var(--border-subtle)' }}>
                <span style={{ width: 48, flex: 'none', fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 600, color: 'var(--sq-pink-600)' }}>{k}</span>
                <span style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--text-body)' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section pad={0} style={{ paddingTop: 72, paddingBottom: 72 }}>
        <Title size={34} style={{ marginBottom: 30 }}>Why families stay</Title>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {d.why.map(([icon, h, p]) => (
            <div key={h}>
              <div style={{ color: 'var(--sq-teal-700)', marginBottom: 12 }}><Icon name={icon} size={26} /></div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 900, margin: '0 0 8px', color: 'var(--sq-ink)' }}>{h}</h3>
              <p style={{ fontSize: 14.5, fontWeight: 600, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{p}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section pad={0} style={{ paddingBottom: 88 }}>
        <div style={{ maxWidth: 760 }}>
          <CtaCard heading={d.ctaH} body={d.ctaP} onPrimary={() => onNav('Demo')} />
        </div>
      </Section>
    </div>
  );
}
window.Subject = Subject;
