# Jinhui Luo · Axi-Theme Academic Homepage

This site is built from [Axi-Theme](https://github.com/Axi404/Axi-Theme) at
commit `c6470e7308bad839489932601e2be08f9b542e70`, with the upstream layout,
components, styles, animations, fonts, and Astro integration retained. Axi's
demo profile and content are replaced with Jinhui Luo's academic materials.

## Local development

The project uses Node.js 22, Corepack, pnpm, Astro 5.16.8, Tailwind, MDX,
Pagefind, and the Axi integration.

```bash
cd /Users/jin/githubio
corepack enable
pnpm install --frozen-lockfile
DEPLOYMENT_PLATFORM=github pnpm run dev
```

Run the checks used by GitHub Pages before committing:

```bash
DEPLOYMENT_PLATFORM=github pnpm run check
DEPLOYMENT_PLATFORM=github pnpm run build:github
```

## Git and VSCode

The checkout is `/Users/jin/githubio` and the remote is already configured:

```text
https://github.com/Jinhui524/Jinhui524.github.io.git
```

Open `/Users/jin/githubio` in VSCode, sign in through the GitHub Accounts menu,
and use Source Control for pull, commit, and push. The terminal equivalent is:

```bash
cd /Users/jin/githubio
git pull --rebase origin master
git add .
git commit -m "Update academic homepage"
git push origin master
```

## Routes

- `/` and `/en/` — Axi home page in Chinese and English
- `/blog/` — research and technical notes
- `/academic` — research interests, publications, and awards
- `/projects` — research projects
- `/links` — academic and development links
- `/about` — education, research, awards, and copyright
- `/search`, `/archives`, `/tags`, `/collection`, `/terms` — Axi utilities

## Attribution

The upstream Axi-Theme source is licensed under Apache-2.0. The fixed upstream
commit and local content changes are recorded in [`NOTICE`](NOTICE) and
[`Axi-Theme.Apache-2.0.txt`](Axi-Theme.Apache-2.0.txt).
