# Jinhui Luo · Academic Homepage

Astro-powered bilingual research homepage for [Jinhui524.github.io](https://jinhui524.github.io/).

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Astro. Before committing, run:

```bash
npm run check
npm run build
```

The project uses Node.js 22 or newer. A GitHub Pages workflow is included at `.github/workflows/deploy-astro.yml` and deploys the `dist/` directory after pushes to `master`.

## Git and VSCode

The repository remote is already configured as:

```text
https://github.com/Jinhui524/Jinhui524.github.io.git
```

Open `/Users/jin/Project` in VSCode, sign in to GitHub through the Accounts menu, then use the Source Control panel for pull, commit, and push. The equivalent terminal commands are:

```bash
git pull --rebase origin master
git add .
git commit -m "Update academic homepage"
git push origin master
```

## Routes

- `/` and `/en/` — bilingual homepage
- `/publications/` — publication archive with category filters
- `/projects/` — project portfolio
- `/notes/` — AI learning notes
- `/links/` — academic and development links
