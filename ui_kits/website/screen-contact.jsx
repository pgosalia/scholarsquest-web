const { Card, Button, Input, Select, Alert, Icon, Badge } = window.ScholarSQuestDesignSystem_b05a4d;

function Contact({ onNav }) {
  const [sent, setSent] = React.useState(false);
  return (
    <div>
      <Section pad={0} style={{ paddingTop: 64, paddingBottom: 32 }}>
        <div style={{ maxWidth: 600 }}>
          <Eyebrow>Contact</Eyebrow>
          <Title size={48}>Ask us anything</Title>
          <Lede style={{ marginTop: 18 }}>
            Questions about grade levels, scheduling, test prep or how we'd handle a particular problem.
            A real person reads every message.
          </Lede>
        </div>
      </Section>

      <Section pad={0} style={{ paddingBottom: 88 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 420 }}>
            {[['Email', 'info@scholars.quest', 'mailto:info@scholars.quest', 'Replies within one business day.', 'mail'],
              ['Phone', '(609) 517-8112', 'tel:+16095178112', 'Call or text. Fastest for scheduling questions.', 'phone']].map(([label, value, href, note, icon]) => (
              <div key={label}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 900, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 10 }}>
                  <Icon name={icon} size={14} />{label}
                </div>
                <a href={href} style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 900, color: 'var(--sq-teal-700)' }}>{value}</a>
                <p style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--text-muted)', margin: '8px 0 0' }}>{note}</p>
              </div>
            ))}
            <div style={{ height: 1, background: 'var(--border-subtle)' }} />
            <Card tone="warm" padding={24}>
              <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--sq-apricot-700)', marginBottom: 10 }}>Ready to start?</div>
              <p style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--text-body)', margin: '0 0 16px' }}>Skip the back-and-forth and book the free demo directly.</p>
              <Button pop onClick={() => onNav('Demo')}>Book a free demo class</Button>
            </Card>
          </div>

          <Card padding={32} style={{ boxShadow: 'var(--shadow-md)' }}>
            {sent ? (
              <div>
                <Alert tone="success" title="Message sent">Thanks, we'll reply within one business day.</Alert>
                <Button variant="outline" size="sm" style={{ marginTop: 18 }} onClick={() => setSent(false)}>Write another</Button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <Title size={24}>Send a message</Title>
                <Input label="Name" placeholder="Your name" icon="user" />
                <Input label="Email" type="email" placeholder="you@example.com" icon="mail" />
                <Select label="What's this about?" options={['Starting tutoring', 'Scheduling', 'Test prep', 'Pricing', 'Something else']} />
                <label style={{ display: 'block' }}>
                  <span style={{ display: 'block', fontSize: 14, fontWeight: 800, color: 'var(--sq-ink)', marginBottom: 6 }}>Message</span>
                  <textarea rows={5} placeholder="Tell us a bit about your child's grade and what they're finding hard"
                    style={{ width: '100%', fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: 'var(--sq-ink)',
                      padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '2px solid var(--border-default)', outline: 'none', resize: 'vertical' }} />
                </label>
                <Button fullWidth pop onClick={() => setSent(true)}>Send message</Button>
                <p style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text-muted)', margin: 0 }}>
                  This form isn't connected to an inbox yet. Wire it to a form service, or use the email and phone opposite in the meantime.
                </p>
              </div>
            )}
          </Card>
        </div>
      </Section>
    </div>
  );
}
window.Contact = Contact;
