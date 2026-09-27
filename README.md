# Jinhui Luo · Academic Homepage

Astro-powered bilingual research homepage for [Jinhui524.github.io](https://jinhui524.github.io/).

The visual system is adapted from [Axi-Theme](https://github.com/Axi404/Axi-Theme)
by [Axi404](https://github.com/Axi404), an Astro theme released under the
Apache License 2.0. This repository replaces the upstream profile, content,
assets, and data with Jinhui Luo's academic materials. See [`NOTICE`](NOTICE)
for the third-party attribution and the scope of local changes.

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

The local checkout is `/Users/jin/githubio`. Open that folder in VSCode, sign
in to GitHub through the Accounts menu, and use the Source Control panel for
pull, commit, and push. The first pull can be performed from the integrated
terminal so that the branch is explicitly rebased on `origin/master`:

```bash
cd /Users/jin/githubio
git remote -v
git pull --rebase origin master
```

After reviewing the changes in the Source Control panel, stage and commit them,
then push the `master` branch:

```bash
git add .
git commit -m "Update academic homepage"
git push origin master
```

VSCode's GitHub Accounts integration stores authentication outside this
repository; do not add a personal access token or credential file to the
workspace. If Git asks for credentials in the terminal, use the same GitHub
account that owns `Jinhui524/Jinhui524.github.io`.

## Routes

- `/` and `/en/` — bilingual homepage
- `/all/`, `/research/`, `/technical/` — Axi-style content archives
- `/academic/` — publication archive with category filters
- `/projects/` — project portfolio
- `/about/` — profile, education, and research interests
- `/search/` — client-side content search
- `/links/` — academic and development links

## Attribution

The Axi-inspired layout, navigation, theme toggle, profile presentation, and
related interaction patterns are maintained as a local adaptation. Original
academic content, copy, data collections, assets, and accessibility fixes are
Jinhui Luo's changes. The upstream Apache 2.0 notice is preserved in
[`NOTICE`](NOTICE); the repository's original MIT license remains in
[`LICENSE`](LICENSE).
