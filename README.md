# Scholar's Quest — static site

Rebuilt from the Squarespace export (text content only — design is new).

## What's here
- `index.html`, `about.html`, `math.html`, `english.html`, `scheduling.html`, `contact.html`, `login.html`, `privacy-policy.html`
- `css/style.css` — all styling; brand colors are CSS variables at the top of the file
- `js/main.js` — tiny script for the footer year and mobile nav toggle
- `CNAME` — tells GitHub Pages to serve this site at `scholars.quest`. Leave it in the repo once your DNS is pointed here (see the setup walkthrough).

## Still needs your attention
- **Images**: the Squarespace export doesn't include images in bulk, and this environment couldn't fetch them either (network-blocked). Add your own into an `images/` folder and reference them in the HTML — the hero section on `index.html`, the founder photo on `about.html`, and the program photos on `math.html`/`english.html` are the natural spots.
- **Contact form**: `contact.html` has a placeholder form that doesn't submit anywhere yet. Either wire it to a free service like Formspree/Getform, or rely on the mailto/phone links already on the page.
- **Login button**: links to `login.html`, a "coming soon" placeholder. Once the student/parent portal exists, point this at that URL instead.
- **About page**: the original page had almost no text beyond "Welcome to Scholar's Quest" — I added a couple of placeholder sentences. Worth expanding with your own story/bio.

## Local preview
Open `index.html` directly in a browser, or run a tiny local server from this folder:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.
