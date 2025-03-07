# Landing Page

A simple, lightweight landing page using TailwindCSS and AlpineJS.

## Technologies Used

- HTML5
- TailwindCSS (optimized build)
- AlpineJS (via CDN)
- Vanilla JavaScript
- CSS

## Project Structure

```
.
├── index.html          # Main HTML file
├── css/
│   ├── input.css      # Tailwind input file
│   └── styles.css     # Generated CSS (don't edit directly)
├── js/
│   └── main.js        # Custom JavaScript
├── tailwind.config.js # Tailwind configuration
├── package.json       # Project dependencies
├── .gitignore        # Git ignore configuration
└── README.md         # Project documentation
```

## Development

This is a simple static website that can be served directly from GitHub Pages. To develop locally:

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run watch` to start the Tailwind build process in watch mode
4. Open `index.html` in your browser
5. Make changes to the files as needed - Tailwind will automatically rebuild when you save

## Production Build

Before committing your changes:

1. Run `npm run build` to generate an optimized CSS build
2. Commit the generated `css/styles.css` file along with your other changes
3. The `node_modules` folder should not be committed (it's in .gitignore)

## Deployment

To deploy to GitHub Pages:

1. Make sure you've run `npm run build` and committed the latest `css/styles.css`
2. Push your changes to GitHub
3. Go to your repository settings
4. Under "GitHub Pages", select your main branch as the source
5. Your site will be published at `https://[username].github.io/[repository-name]`

Note: The `node_modules` folder is not needed for deployment - it's only used during development. GitHub Pages will serve your site using the built files. 