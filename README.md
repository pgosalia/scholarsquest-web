# Scholar's Quest — "Scholar's Quest" static site (v4)

Rebuilt as plain, dependency-free static HTML/CSS/JS from the latest Claude
Design canvas redesign (`Scholars Quest Site.dc.html`) — cream ground, teal/pink
brand pair, pill buttons with a sticker shadow, Montserrat / Nunito / IBM Plex
Mono. The `.dc.html` canvas file only renders inside the Design canvas editor
(it needs `window.React`/`window.ReactDOM` and the canvas runtime), so this
version reproduces the same look, copy and structure as flat pages that drop
straight into GitHub Pages. This replaces the earlier "Nocturne" dark-theme
build that previously lived at the repo root (removed in the "Delete v3" commit).

## What's here
- `index.html`, `math.html`, `english.html`, `about.html`, `contact.html`, `demo.html`, `login.html`, `privacy-policy.html`
- `scheduling.html` — a redirect to `demo.html`, so the old live URL doesn't break for anyone who bookmarked it
- `css/style.css` — the cream "Scholar's Quest" theme; all colors/spacing/shadows are CSS variables at the top, copied from the design system's tokens
- `js/main.js` — mobile nav toggle, the testimonial carousel, the Math/English "tap a topic" definitions, footer year, and a client-side "success" state for the two placeholder forms
- `assets/logo-primary.png`, `assets/logo-white.png` — the real wordmark, used in the header and footer

## Icons
The design references Lucide icons fetched live from a CDN inside the canvas
editor. To keep this build fully static and dependency-free, the icons here
are hand-drawn inline SVGs in the same visual language (2px stroke, rounded
caps/joins) rather than pixel-exact Lucide glyphs — the same kind of
close-match substitution already used for the fonts (see `tokens/fonts.css`
in the design bundle).

## Still needs your attention
- **Images**: the home, Math and English hero photos are real (`assets/hero-home.jpg`, `assets/hero-math.jpg`, `assets/hero-english.jpg`). The About page founder portrait is still a placeholder box — swap the `.image-slot` div in `about.html` for a real `<img>` (see `.hero-photo` in `css/style.css` for the pattern) once you have one.
- **Forms don't submit anywhere yet.** `contact.html` and `demo.html` show a "success" message on submit (nice for previewing), but nothing is actually sent. Wire the `<form>` up to Formspree/Getform, or point it at your booking system, before relying on it.
- **Login button** links to `login.html`, which explains the portal is in development. Point it at the real portal once that's live.
- **Home hero still shows the "Session notes · Grade 5" card and "200+ students" chip** next to the hero photo. The design chat log briefly discussed removing this pairing, but the exported `.dc.html` kept it — this build matches the exported file. Delete `.hero-proof-row` in `index.html` if you'd rather drop it.

## Local preview
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.
