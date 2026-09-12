# Scholar's Quest — Marketing site UI kit

Recreation of the live static site (`pgosalia/scholarsquest-web`, branch `main`) — same information
architecture, page structure and copy — restyled in the warm Scholar's Quest design system
(cream ground, Quest Teal + Scholar Pink, Montserrat/Nunito, pill CTAs with the ink sticker shadow)
in place of the repo's dark "Nocturne" Inter theme.

Pages (all in `index.html`, switched from the nav):
- **Home** (`index.html`) — hero, two program cards, teal stats band, how it works, testimonial carousel, CTA
- **Math** / **English** (`math.html`, `english.html`) — one `Subject` component driven by per-subject data:
  hero, grade-band cards with topic tags, test-prep band, "why families stay", CTA
- **About** (`about.html`) — founder section (Kathni Patel), stats band, "how we work"
- **Demo** (`demo.html`) — four numbered steps, request form with success state, FAQ accordion
- **Contact** (`contact.html`) — contact details + message form with success state
- **Parent login** (`login.html`) — portal-in-development page

Composed from the design-system components (`Button`, `Card`, `Badge`, `Input`, `Select`,
`Checkbox`, `Alert`, `NavBar`, `Icon`, `Logo`, `IconButton`).

What deliberately differs from the repo: the visual theme (dark → warm/light), the logo lockup
(repo renders the brand as text; here the real logo artwork is used), and pill/sticker button styling.
Everything else — copy, section order, stats, testimonials, FAQ, contact details — is the repo's.

> Photography is still placeholder: the repo's own `.image-slot` divs are also empty.
