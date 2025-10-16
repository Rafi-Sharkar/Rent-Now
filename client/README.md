
# RentNow — Frontend

RentNow is the React frontend for a rental platform (cars/properties/parking). This repository contains the UI code, components, pages, assets and front-end logic that communicate with a backend API (observed in code as http://localhost:3001).

## Quick summary

- Tech: React 18, Vite, Tailwind CSS
- HTTP client: Axios
- Routing: react-router-dom
- Forms: Formik + Yup
- Styling: Tailwind + styled-components (also component-level CSS modules)
- Other: react-icons, swiper, react-data-table-component

## Project status (as-scanned)

- The app entry is `src/main.jsx` which mounts `src/App.jsx`.
- `App.jsx` wraps the application in `BrowserRouter` and renders `Layout` (likely `src/Layout.jsx`).
- Many pages call a backend at `http://localhost:3001` (for example: property, users endpoints). Consider configuring a central API base URL.

## Folder structure (important files)

- `index.html` — Vite HTML template
- `src/main.jsx` — React entry
- `src/App.jsx` — App root (router wrapper)
- `src/Layout.jsx` — Application layout and route outlet
- `src/Context/CartContext.jsx` — example Context provider
- `src/useHooks/useCartContext.jsx` — custom hook for cart context
- `src/global_components/` — reusable components (navbar, footer, rentCard, filter, etc.)
- `src/pages/` — route pages (home, find, bookingcart, login, userprofile, etc.)
- `src/schemas/` — form validation or data schemas (`propertySchema.jsx`, `userSchema.jsx`)
- `src/assets/` — static images and data (`photos`, `data/data.js`)

Note: The repository uses a mix of CSS modules (e.g. `*.module.css`), global CSS files (`index.css`, `Layout.css`) and Tailwind utility classes.

## Scripts

Available npm scripts (defined in `package.json`):

- `npm run dev` — start Vite dev server
- `npm run build` — build production assets with Vite
- `npm run preview` — locally preview the production build
- `npm run lint` — run ESLint across the project

PowerShell-friendly commands:

```powershell
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Configuration highlights

- Vite: `vite.config.js` with `@vitejs/plugin-react`.
- Tailwind: `tailwind.config.js` configured to scan `index.html` and `src/**/*.{js,ts,jsx,tsx}`.
- ESLint: ESLint is present with react/react-hooks plugins (see `devDependencies` in `package.json`).

## Backend / API notes

- The codebase contains many direct Axios calls to `http://localhost:3001` (for example in `src/pages/home/Home.jsx`, `src/pages/userprofile/*`, registration pages, etc.).
- Recommendation: centralize API base URL using an Axios instance or environment variable (e.g. `VITE_API_URL`) and update calls to use it. This allows easy local vs production configuration.

## Developer notes & suggestions

- Add a small `src/api/axios.js` that exports a configured Axios instance:
	- baseURL from `import.meta.env.VITE_API_URL || 'http://localhost:3001'`
	- default timeouts, interceptors for auth/token handling

- Use a `.env` (or `.env.development` / `.env.production`) with Vite variables (prefix `VITE_`) for backend base URL and feature flags. Example `.env.development`:

```text
VITE_API_URL=http://localhost:3001
```

- Convert repeated inline hard-coded URLs to use the centralized Axios instance.
- Consider adding TypeScript or PropTypes to improve type safety for components.
- Add a small test setup (Vitest or Jest + React Testing Library) for critical components.

## How to contribute / develop

1. Clone the repo and open the `client` folder.
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev` and open the URL printed by Vite (usually `http://localhost:5173`).
4. The frontend expects the backend API to be available (commonly at `http://localhost:3001` in the current code). Start the backend server or set `VITE_API_URL` to the correct address.

## Known conventions and tips

- Styling: mix of Tailwind utilities and CSS Modules. When adding new components prefer CSS Modules or Tailwind utilities for consistency.
- Routing: app uses React Router v6 — route definitions likely live inside `Layout.jsx`.
- Forms: Formik + Yup are used — check `src/schemas` for validation patterns.

## Next steps (recommended)

1. Centralize API calls by adding an Axios instance and replace hard-coded URLs.
2. Add `.env` examples (`.env.example`) documenting required env vars.
3. Add a developer script to run both frontend and backend concurrently (for example via `concurrently` or in parent repo).  
4. Add basic unit tests and a CI step that runs lint + tests.

---

If you want, I can:

- add the Axios instance file and do a basic replacement of a few calls as a PR-sized change;
- create a `.env.example` and update the README with environment variable instructions;
- wire up a `npm run start:dev` script that launches backend+frontend together (if you provide the backend start command).

Requirements coverage:

- Scan project and summarize frontend: Done
- Produce a README with scripts, structure, and how-to-run: Done


