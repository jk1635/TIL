# Create a new repository on the command line

```bash
echo "# [abc-repository]" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/githubuserid1234/abc-repository.git
git push -u origin main
```

# Push an existing repository from the command line

```bash
git remote add origin https://github.com/githubuserid1234/abc-repository.git
git branch -M main
git push -u origin main
```
