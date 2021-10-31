## Git commit 취소하기 (push 이전)

```bash
git reset HEAD^

# git reset --mixed HEAD^ 와 동일
```

### git reset options
- `--soft` : stage everything
- `--mixed` : unstage everything
- `--hard` : ignore everything

## Git add 취소하기 (push 이전)

```bash
git reset
```
참고 링크 : [stackoverflow](https://stackoverflow.com/questions/3528245/whats-the-difference-between-git-reset-mixed-soft-and-hard)