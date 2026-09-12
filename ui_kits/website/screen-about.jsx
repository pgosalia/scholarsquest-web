const { Card, Icon, Avatar } = window.ScholarSQuestDesignSystem_b05a4d;

function About({ onNav }) {
  return (
    <div>
      <Section pad={0} style={{ paddingTop: 64, paddingBottom: 32 }}>
        <div style={{ maxWidth: 640 }}>
          <Eyebrow>About us</Eyebrow>
          <Title size={48}>A small practice, on purpose</Title>
          <Lede style={{ marginTop: 18 }}>
            Scholar's Quest is one-on-one tutoring in Math and English for Kindergarten through Grade 12,
            built around the belief that confidence comes before grades, not the other way round.
          </Lede>
        </div>
      </Section>

      <Section pad={0} style={{ paddingBottom: 56 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48, alignItems: 'start' }}>
          <PhotoSlot h={400} tone="var(--sq-grey-100)" label="Founder portrait: Kathni" />
          <div>
            <Eyebrow color="var(--sq-teal-700)">The founder</Eyebrow>
            <Title size={32}>Kathni Patel</Title>
            {["I've spent more than four years working with children in Math and English, and the thing I keep coming back to is that no two students get stuck in the same place. So I teach to the student in front of me: their pace, their learning style, the specific thing that isn't landing, rather than to a fixed curriculum.",
              'Homework, exam preparation, or a concept that has refused to click for a year: we work on whatever is actually in the way. Grades improve, but the change parents mention first is usually confidence.',
              "Scholar's Quest has stayed deliberately small. I match every family myself, build the learning plan with you and your child, and read the session notes."].map((p, i) => (
              <p key={i} style={{ fontSize: 15.5, fontWeight: 600, lineHeight: 1.7, color: 'var(--text-body)', margin: '14px 0 0' }}>{p}</p>
            ))}
            <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', paddingTop: 22, marginTop: 22, borderTop: '1px solid var(--border-subtle)' }}>
              {[['Qualification', 'Early Childhood Degree,\nSheridan College'], ['Experience', '4+ years teaching\nMath & English']].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 6 }}>{k}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--sq-ink)', whiteSpace: 'pre-line' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section bg="var(--sq-teal-400)" pad={60}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 44 }}>
          {[['200+', 'students enrolled with us to date'], ['80%', 'improve by two letter grades within their first semester'], ['K–12', 'grades served, in Math and English, including test prep']].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 52, fontWeight: 600, lineHeight: 1, color: 'var(--sq-ink)' }}>{n}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: 'rgba(20,18,24,.78)', marginTop: 12, maxWidth: 260 }}>{l}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section pad={0} style={{ paddingTop: 72, paddingBottom: 72 }}>
        <Title size={34} style={{ marginBottom: 30 }}>How we work</Title>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22 }}>
          {[['search', 'Find the gap first', "Every student starts with a short diagnostic. We'd rather spend a session finding the real problem than a term treating the symptom."],
            ['user-check', 'One student, one tutor', 'No group classes and no rotating staff. The same tutor week after week, so progress compounds.'],
            ['notebook-pen', 'Parents stay informed', 'Notes after every session: what we covered, what clicked, what to practise. No mystery about where the money goes.'],
            ['heart-handshake', 'Confidence is the metric', 'A child who will attempt a hard problem in front of someone has already made the hardest gain. Grades tend to follow.']].map(([icon, h, p]) => (
            <Card key={h} padding={24}>
              <div style={{ color: 'var(--sq-pink-500)', marginBottom: 12 }}><Icon name={icon} size={26} /></div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 900, margin: '0 0 8px', color: 'var(--sq-ink)' }}>{h}</h3>
              <p style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{p}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section pad={0} style={{ paddingBottom: 88 }}>
        <div style={{ maxWidth: 760 }}>
          <CtaCard heading="Meet us before you commit"
            body="One free session, a real tutor, and honest notes on what your child needs."
            secondary="Get in touch" onPrimary={() => onNav('Demo')} onSecondary={() => onNav('Contact')} />
        </div>
      </Section>
    </div>
  );
}
window.About = About;
