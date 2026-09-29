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
