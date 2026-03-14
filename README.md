# Duojiang Field Notes

This Astro project is configured for static deployment and currently includes a GitHub Pages workflow so it can be published immediately from GitHub.

## Local editing

- Add or edit entries in `src/content/travel`, `src/content/micro`, `src/content/reading`, and `src/content/notes`.
- Update the page copy in `src/pages` if you want to change the site structure.
- Run `npm run dev` for local editing.
- Run `npm run build` before pushing.

## GitHub Pages deployment

1. Push this project to GitHub on the `main` branch.
2. In GitHub, open `Settings -> Pages`.
3. Set the source to `GitHub Actions`.
4. Push again or run the `Deploy Field Notes Site` workflow manually.

The workflow in `.github/workflows/deploy.yml` builds the Astro site and deploys `dist` to GitHub Pages.

## Optional Cloudflare Pages deployment

1. Put this project in its own GitHub repository.
2. In Cloudflare Pages, create a new project from that repository.
3. Use `npm run build` as the build command.
4. Use `dist` as the build output directory.
5. Set `NODE_VERSION` to `22.17.1` in the Cloudflare Pages environment settings.
6. Set `SITE_URL` to your final production URL.
7. Set `BASE_PATH=/` if you want the Cloudflare deployment to live at the domain root.

## Before publishing publicly

- Replace the starter entries with your own travel notes, photo series, and reading notes.
- Point the production domain at the project in Cloudflare Pages.
