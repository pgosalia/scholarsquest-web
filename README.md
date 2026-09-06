# Scholar's Quest — "Nocturne" static site (v2)

Rebuilt as plain, dependency-free static HTML/CSS/JS from the Claude Design canvas
redesign you sent over. The `.dc.html` canvas files only render inside the Design
canvas editor (they need `window.React`/`window.ReactDOM` and the canvas runtime),
so this version reproduces the same look, copy and structure as flat pages that
drop straight into GitHub Pages.

## What's here
- `index.html`, `math.html`, `english.html`, `about.html`, `contact.html`, `demo.html`, `login.html`, `privacy-policy.html`
- `scheduling.html` — a redirect to `demo.html`, so the old live URL doesn't break for anyone who bookmarked it
- `css/style.css` — the dark "Nocturne" theme; all colors/spacing are CSS variables at the top
- `js/main.js` — mobile nav toggle, the testimonial carousel, footer year, and a client-side "success" state for the two placeholder forms

## Still needs your attention
- **Images**: every photo spot (`home` hero, About founder portrait, Math/English session photos) is a placeholder box — no real photos were available to pull in. Replace the `.image-slot` divs in the HTML with real `<img>` tags once you have photos.
- **Forms don't submit anywhere yet.** `contact.html` and `demo.html` show a "success" message on submit (nice for previewing), but nothing is actually sent. Wire the `<form>` up to Formspree/Getform, or point it at your booking system, before relying on it.
- **Tutors section** (`about.html`) is intentionally left as placeholder cards — add real tutor names/credentials when ready.
- **Login button** links to `login.html`, which explains the portal is in development. Point it at the real portal once that's live.

## Local preview
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.
