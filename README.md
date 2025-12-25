# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Portfolio site additions

This workspace has been extended with a simple portfolio layout and a "Download CV" button.

How to use your real CV:

1. Place your PDF file at `public/resume.pdf` (this will be served at `/resume.pdf`).
2. If `public/resume.pdf` is not present, an embedded sample will be offered as a fallback when clicking the button.

Start the dev server:

	npm install
	npm run dev

Deploying

You can deploy this site to Vercel, Netlify, or any static host that supports building with Node. To build for production:

	npm run build

Then serve the `dist/` folder or deploy through your chosen provider.

Customization

 - Replace the avatar: update or replace `src/assets/profile.svg` (or import a PNG/JPG) to show your real photo in the hero.
 - Customize projects: edit `src/components/Projects.jsx` and replace the `SAMPLE_PROJECTS` array with your own project names and GitHub links.
- Tailwind CSS is installed and used throughout the project. Edit classes directly in components to change spacing, colors, and animations.
	- Config: `tailwind.config.cjs`
	- Global utilities and directives in `src/index.css`

