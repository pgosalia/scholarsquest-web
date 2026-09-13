# Scholar's Quest — Design System

One-to-one **online tutoring for K–12**, in three subjects only: **Math**, **English**, and **SAT/ACT prep**.
Students meet the same tutor every week in a live 50-minute session. The two audiences are the
**parent** (who buys, schedules and reads progress) and the **student** (who shows up and does the work) —
so the system runs warm and playful without tipping into childish.

## Sources given

| Source | Notes |
|---|---|
| `uploads/SQ_MainLOGO.png`, `SQ_MainLOGO 2.png` | Full colour horizontal lockup (identical files) |
| `uploads/SQ_WHITE.png`, `uploads/IMG_5114.PNG` | White lockup / white lockup on black |
| `uploads/LOGO MARK.png`, `WHITE LOGOMARK.png`, `LOGOMARK COLORED.png` | Grad-cap + smiling magnifier mark, three colourways |
| Brief | "Warm colors, playful mode for the student/parent facing website" |

No codebase, Figma file, website URL or deck was supplied. **Everything beyond the logo artwork
(palette extensions, type, components, screens) is an interpretation built from the mark and the
brief** — treat it as a strong first proposal, not a recreation. Colours in `tokens/colors.css` marked
as brand core were sampled pixel-for-pixel from the supplied logomark.

---

## Content fundamentals

**Voice: a good tutor talking to a parent at the kitchen table.** Warm, direct, unhurried, slightly wry.
Never salesy, never school-administrator formal, never baby-talk.

- **Person.** "You" and "your child" for parents; "you" for students. "We" for Scholar's Quest.
  Never "our platform", never third-person "students will…".
- **Casing.** Sentence case everywhere — headlines, buttons, nav, labels. Uppercase appears **only**
  in eyebrows and micro-labels at 0.12em tracking. No Title Case Buttons.
- **Sentence length.** Short. Headlines under 7 words. Body copy runs 1–3 sentences per block, then stops.
- **Specific over superlative.** "+218 average SAT point gain" beats "amazing results".
  "50 minutes, one-to-one" beats "personalised learning experiences".
- **Name the pain honestly.** "the word problems that cause tears", "the section of the SAT that keeps
  costing points", "He went from dreading Tuesdays…". Parents trust copy that already knows the problem.
- **Say what we don't do.** "We deliberately don't do everything." The narrow subject list is a
  selling point, written as one.
- **Buttons are verbs with an object:** "Book a free lesson", "Meet the tutors", "Start today's practice",
  "Join lesson". Not "Learn more", "Submit", "Get started".
- **Numbers are written as numerals** and set in IBM Plex Mono: 1480, 50 min, 12-day streak, +218.
- **Emoji: essentially no.** One waving hand in the student dashboard greeting ("Hi, Jordan 👋") is the
  only sanctioned use. Never in marketing copy, buttons, headings or parent-facing reports. Playfulness
  comes from colour, shape and motion — not from emoji.
- **Celebration copy is understated:** "Nice — quadratics unlocked", "Correct!", "You're booked!".
  Never "AMAZING JOB!!!" or confetti-speak.

Examples to copy the rhythm of:
> Tutoring that makes it **click**.
> Meet a tutor, see the room, decide after. No card, no contract, no awkward sales call.
> Reschedule free up to 12 hours before. After that we charge half.

---

## Visual foundations

**Palette.** Two brand colours from the mark — **Quest Teal `#47D9D6`** (the graduation cap) and
**Scholar Pink `#F63868`** (the smiling magnifier) — extended with a warm accent family
(**Sun `#FFB23F`**, **Apricot `#FF7A45`**, occasional **Grape `#8B5CF0`** for variety) and a
**cream** page ground (`#FFF9F2`). Neutrals are deliberately **warm/purple-leaning**, never blue-grey.
Rule of thumb per screen: cream or white ground, teal as the calm structural colour, pink reserved for
the single most important action, sun for reward/streak moments. Max two background colours per view.

**Type.** Display = **Montserrat** 800–900, tracking −0.02em (closest match to the wordmark).
Body/UI = **Nunito** 600–800 — rounded terminals carry the warmth. Numerals, timers, scores and math
= **IBM Plex Mono** 600. Body copy sits at 16–18px / 1.6. UI labels are heavier than typical (700–800)
because the brand reads as confident, not delicate.

**Spacing & layout.** 4px base scale (4/8/12/16/24/32/48/64/80). Container 1180px, prose 760px,
gutters 24px, marketing sections 88px vertical. App shell: 236px fixed left rail, 28–34px page padding.
The sticky site header is the only fixed element.

**Backgrounds.** Flat colour blocks, never gradients. Alternating cream → white → cream-deep → full-bleed
teal band → ink CTA card gives the page rhythm. The whiteboard uses a 22px dot grid. No textures, no
hand-drawn illustration set was supplied — **photography slots are left as flat tinted placeholders**
(`PhotoSlot` in the website kit) until real images exist.

**Cards.** White, 24px radius, 1px `--border-subtle` hairline, `--shadow-sm`. Optional 6px accent bar
across the top edge. Clickable cards use `hoverLift`: translateY(−4px) + `--shadow-lg` over 200ms.
Tonal variants (teal/pink/warm/ink) swap background and border together, never background alone.

**Buttons & states.** Always pill (`--radius-pill`), 800 weight, 2px border even on solid fills.
Hover = one step darker in the same hue (pink 500→600, teal 400→300 lighter for contrast reasons);
ghost hover = tinted background, never opacity fades. Press = `translate(2px,2px)` and the sticker
shadow collapses from 4px to 1px — a physical "pushed a sticker down" feel. Disabled = 45% opacity.
The **sticker shadow** (`--shadow-pop`, 4px hard ink offset) is the brand's signature and is reserved for
hero, pricing and dashboard primary CTAs — not for every button on a page.

**Borders.** 2px is the default for interactive things (fields, buttons, selectable cards); 1px hairline
for static containers. Focus = 3px teal outline at 2px offset, plus a 4px `--sq-teal-100` halo on fields.

**Shadows.** Warm-tinted (`rgba(20,18,24,…)`), never pure black. Four soft steps (xs/sm/md/lg) plus two
coloured glows (`--shadow-teal`, `--shadow-pink`) for floating brand elements, plus the hard sticker offset.
No inner shadows anywhere.

**Radii.** 6 / 10 / 16 / 24 / 32 / pill. Fields and small tiles 16, cards 24, hero media 24–32,
anything pressable that holds text is a pill.

**Motion.** 120ms for hover/press, 200ms for state changes, 360ms for progress fills.
`--ease-out` (cubic-bezier(.22,.8,.32,1)) for UI, `--ease-bounce` (.34,1.56,.64,1) reserved for
celebration and the switch knob. Fades alone feel flat here — movement is small translations and scale.
Nothing loops except deliberate reward animations.

**Transparency & blur.** Two sanctioned uses only: the sticky nav (cream at 88% + 12px backdrop blur)
and modal scrims (ink at 45% + blur). Never blurred text, never glassmorphic cards.
Text is always full-opacity ink or white on its ground — no alpha-muted type.

**Imagery.** Warm, bright, natural light; real students and tutors at desks and laptops; no stock
handshake energy, no cold blue office. Tint placeholders in teal-100 or grey-100 depending on context.

---

## Iconography

**Lucide** (CDN, `lucide-static@0.446.0`), fetched and inlined as SVG by the `Icon` component so every
glyph inherits `currentColor`. **This is a substitution** — no icon set was supplied with the brand
assets. Lucide's 2px rounded-cap outline style sits naturally next to the logo mark's thick rounded
strokes; swap it wholesale if a real set exists.

- Stroke icons only, never filled, never mixed with a second family.
- Sizes: 16 (inline/badges), 18–20 (buttons, fields), 22–28 (nav, feature blocks), 40 (decorative quotes).
- Subject icons are fixed: Math = `calculator`, English = `book-open`, SAT/ACT = `target`,
  lesson = `video`, practice = `pencil`, progress = `trending-up`, streak = `flame`.
- Icons carry the colour of their context (teal-700 on teal-100 tiles, white on pink fills); they are
  never multi-colour.
- **No emoji as icons** and no unicode glyph substitutes (→, ✓) — use `arrow-right` and `check`.
- The only raster art in the system is the supplied logo PNGs in `assets/`. **The mark must never be
  redrawn, recoloured or reconstructed in SVG** — use `Logo` / the PNGs.

---

## Index

**Root**
- `styles.css` — the single entry point consumers link (import list only)
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`, `fonts.css`
- `assets/` — `logo-primary.png`, `logo-white.png`, `logo-white-on-black.png`, `logomark-color.png`,
  `logomark-white.png`, `logomark-black.png`
- `guidelines/` — foundation specimen cards (colours, type, spacing, radii, shadows, logo, motion)
- `thumbnail.html` — homepage tile
- `SKILL.md` — Agent Skills entry point

**Components** (`components/`)
- core — `Button`, `IconButton`, `Card`, `Badge`, `Avatar`, `Icon`, `Logo`
- forms — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
- feedback — `Alert`, `ProgressBar`, `Modal`
- navigation — `NavBar`, `SideNav`, `Tabs`

Each has a sibling `.d.ts` (props contract) and `.prompt.md` (what & when + usage). Every directory
carries one `@dsCard` demo page showing the variants.

**Intentional additions** (no source defined an inventory, so this is an authored standard set):
- `Icon` — wrapper so a single glyph family is enforced across the system.
- `Logo` — guards the supplied artwork so nobody redraws the mark.

**UI kits** (`ui_kits/`)
- `website/` — marketing site: Home, Subjects, Pricing, booking modal, footer
- `app/` — signed-in product: Dashboard, Lesson room, Practice, Progress report

## Known gaps / asks

1. **Fonts are substitutes.** Montserrat + Nunito + IBM Plex Mono are loaded from Google Fonts because
   no font binaries came with the brand. If Scholar's Quest has licensed brand fonts, send the files.
2. **Icons are substitutes** (Lucide) — see above.
3. **No photography.** Every image area is a labelled placeholder.
4. **No product to recreate.** The UI kits are proposals, not recreations of a live site or app.
