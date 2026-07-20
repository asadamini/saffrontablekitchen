# Saffron Table Indian Kitchen

Standalone catering website for Saffron Table Indian Kitchen, built from the Figma Make export and deployed with GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

Open the local URL Vite prints in the terminal.

## Production Build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Quote Form

The quote form posts to FormSubmit at `saffrontableindkitchen@gmail.com`.

The first time the form is submitted, FormSubmit may send a confirmation email to that inbox. Confirm it once so future requests are delivered.

## Updating Content

- Page composition lives in `src/app/App.tsx`.
- Reusable sections live in `src/components/`.
- Menu and site data live in `src/data/menuData.ts`.
- Image mappings live in `src/data/imageAssets.ts`.
- Images used by the Figma export live in `src/imports/`.

## GitHub Pages Deployment

This project is configured for GitHub Pages under:

```text
https://asadamini.github.io/saffrontablekitchen/
```

Deployment runs from `.github/workflows/deploy.yml` whenever changes are pushed to `main`.

