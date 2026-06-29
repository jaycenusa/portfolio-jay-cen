# Jay Cen Portfolio

A personal portfolio website showcasing Jay Cen as a UX-minded, quality-driven frontend engineer. The application presents professional information across dedicated pages for background, achievements, projects, and contact details.

**Live site:** [https://jaycenusa.github.io/portfolio-jay-cen](https://jaycenusa.github.io/portfolio-jay-cen)

## Purpose

This application serves as an online portfolio to:

- Introduce Jay Cen and highlight frontend engineering focus
- Share background information through the **About Me** page
- Display accomplishments on the **Achievements** page
- Showcase work on the **Projects** page
- Provide a way to get in touch on the **Contact** page

The site uses a clean, responsive layout with a shared header navigation and a bold hero section on the home page.

## Technology Stack

| Category | Technology |
| -------- | ---------- |
| Framework | [Angular 21](https://angular.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Routing | Angular Router (standalone components) |
| Build tool | [Angular CLI](https://angular.dev/tools/cli) with esbuild (`@angular/build`) |
| Testing | [Vitest](https://vitest.dev/) |
| Deployment | [GitHub Actions](https://github.com/features/actions) → GitHub Pages |

## Project Structure

```
src/app/
├── layout/          # Shared header and page shell
└── page/
    ├── home-page/
    ├── about-me/
    ├── achievements/
    ├── projects/
    └── contact/
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm start
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

### Build for production

```bash
npm run build
```

Output is written to `dist/portfolio-jay-cen/browser`.

### Run tests

```bash
npm test
```

## Deployment

Pushes to the `main` branch trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the app and deploys it to [GitHub Pages](https://jaycenusa.github.io/portfolio-jay-cen).

**Important:** In your repo, go to **Settings → Pages** and set **Source** to **GitHub Actions** (not "Deploy from a branch"). If Source is set to the `main` branch, GitHub will serve `README.md` instead of the built Angular app.

To enable deployment:

1. Push the repository to GitHub
2. Go to **Settings → Pages**
3. Set **Source** to **GitHub Actions**
4. Re-run the **Deploy** workflow from the **Actions** tab if needed

## License

Private project.
