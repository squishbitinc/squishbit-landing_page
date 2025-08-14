# Squishbit Jekyll Site

A Jekyll-based site using TailwindCSS and AlpineJS, built on push by GitHub Actions and deployed to GitHub Pages (with custom domain via CNAME).

## Technologies Used

- Jekyll (GitHub Pages-compatible)
- GitHub Pages + Actions (automated builds)
- Ruby + Bundler
- Minima theme and Liquid templates
- TailwindCSS (prebuilt css/styles.css via npm)
- AlpineJS (via CDN)
- HTML5

## Project Structure

```
.
├── _config.yml
├── _layouts/
│   └── default.html
├── _includes/
├── _posts/
├── _sass/
├── .github/
│   └── workflows/
│       └── pages.yml     # Builds Tailwind, Jekyll, deploys to Pages
├── CNAME                 # Custom domain (www.squishbit.com)
├── Gemfile
├── index.html            # Homepage content (uses layout)
├── css/
│   ├── input.css         # Tailwind source
│   └── styles.css        # Generated CSS (committed, also rebuilt in CI)
├── images/
│   └── 4k-bird.jpg
├── js/
│   └── main.js
├── package.json          # Tailwind scripts
├── package-lock.json
├── tailwind.config.js    # Tailwind config (scans Jekyll dirs)
└── README.md
```

## Local development

Prerequisites: Ruby, Bundler, and Node.js 18+ installed. Then:

1. Clone this repository
2. Run `bundle install` to install Ruby gems
3. Run `npm ci` to install Node dependencies
4. Run `npm run build` once to generate `css/styles.css` (or `npm run watch` to rebuild on save)
5. Run `bundle exec jekyll serve` to start the local server
6. Open http://127.0.0.1:4000/
7. Edit content in `index.html`, `_layouts/`, `_includes/`; Tailwind will rebuild when running `watch`

## CI/CD & deployment

This repository uses GitHub Actions to build Tailwind, build the Jekyll site, and deploy to GitHub Pages on every push to `main`.

- Workflow: `.github/workflows/pages.yml`
- It runs:
  - `npm ci` and `npm run build` (produces `css/styles.css`)
  - `bundle install`
  - `bundle exec jekyll build` (outputs to `_site`)
  - uploads and deploys the site to GitHub Pages

Enable Pages:
1. In repository Settings → Pages, choose GitHub Actions as the source.
2. For a custom domain, configure DNS to GitHub Pages and keep the `CNAME` file (`www.squishbit.com`) in the repo.

Manual build (optional):
- `JEKYLL_ENV=production bundle exec jekyll build` (output in `_site/`)
- Useful for local verification before pushing.

Notes:
- Do not commit `node_modules/` or `_site/`.
- `css/styles.css` is generated from `css/input.css`. It is committed for convenience, but CI also rebuilds it during deployment.