# Set Github Actions Bot

```yml
# Commits all changed files to the repository
- name: Commit to the repo
  run: |
    git config --global user.name "github-stats[bot]"
    git config --global user.email "41898282+github-actions[bot]@users.noreply.github.com"
    git add .
    # "echo" returns true so the build succeeds, even if no changed files
    git commit -m 'Update generated files' || echo
    git push
```
