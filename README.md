# Blagoj Ramadanov — Portfolio (Vite + Tailwind + Vanilla JS)

Same structure and stack as the devkarriere/tailwind-portfolio reference:
plain HTML, a single `main.js` entry, Tailwind via `style.css`, and Vite as
the bundler — no framework.

## Stack

- Vite
- Tailwind CSS
- Vanilla JavaScript

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

```
index.html          main page (hero, about, skills, projects, experience, contact)
impressum.html       legal notice page
src/
 ├── main.js          entry point: imports style.css + i18n.js, mobile menu, scroll reveal, footer year
 ├── i18n.js           EN/DE translations and language toggle
 └── style.css         Tailwind directives + custom CRT theme styles
tailwind.config.js  Tailwind content paths and theme
postcss.config.js   PostCSS plugins
vite.config.js      multi-page build config (index + impressum)
public/
 ├── logo.png              site logo / hero graphic
 ├── profile_picture.png   profile photo
 └── projects/             project screenshots (b-score.jpg, user-management.jpg, weather-app.jpg, notes-app.jpg)
```

## Customizing

- Update text directly in `index.html`, or via `src/i18n.js` for translated strings
- Swap images in `public/` — keep the same filenames or update the `src`
  attributes in `index.html`
- Edit `impressum.html` with your full legal address before publishing in
  Germany, since a placeholder is used for the street address
