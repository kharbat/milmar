# Milmar Ramirez - Personal Website

A modern, vibrant personal website built with Astro and Tailwind CSS.

## Features

- Landing page with personal bio and photo gallery
- Three resume variations:
  - **Broadcast & Media** - TV Meteorologist / Emmy Winner
  - **Technology & Agile** - IT / Scrum Master / Project Coordinator
  - **Education** - Teacher / Science Communicator
- Bold animations and modern design
- Fully responsive
- Print-friendly resume pages

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Adding Photos

Place your photos in the `/public/images/` folder:

- `profile.jpg` - Main profile photo (circular crop recommended)
- `gallery-1.jpg` through `gallery-5.jpg` - Gallery photos

## Deploying to GitHub Pages

### One-time setup:

1. Push this folder to a new GitHub repository
2. Go to **Settings** > **Pages**
3. Under "Build and deployment", select **GitHub Actions**
4. Update `astro.config.mjs`:
   - Set `site` to your GitHub Pages URL (e.g., `https://username.github.io`)
   - If using a project repo (not `username.github.io`), uncomment and set `base` to your repo name

### Automatic deployment:

Every push to the `main` branch will automatically deploy to GitHub Pages via the included GitHub Action.

## Customization

### Colors

Edit the color palette in `src/styles/global.css`:

```css
@theme {
  --color-coral: #FF6B6B;
  --color-teal: #2EC4B6;
  --color-gold: #FFD700;
  /* ... */
}
```

### Content

- Edit page content in `src/pages/`
- Update navigation links in `src/components/Navigation.astro`
- Modify footer in `src/components/Footer.astro`

## Tech Stack

- [Astro](https://astro.build) - Static Site Generator
- [Tailwind CSS v4](https://tailwindcss.com) - Styling
- [Google Fonts](https://fonts.google.com) - Playfair Display & Inter

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
