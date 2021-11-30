## A quick guide for how to merge

develop에 feature/localstorage 브랜치를 병합<br/>
(Merge branch 'feature/localstorage' into develop)


```bash
# 1.
Desktop/career-test (feature/localstorage)
> git checkout develop

Desktop/career-test (develop)
> git merge feature/localstorage

## conflicts 해결 후

# 스테이징 상태로 변경
Desktop/career-test (develop|merge)
> git add .

# commit 작성
Desktop/career-test (develop|merge)
> git commit -m "Merge branch 'feature/localstorage' into develop"

Desktop/career-test (develop|merge)
> git log

Desktop/career-test (develop)
> git push origin develop
```

```bash
# 2.
Desktop/career-test (develop)
> git checkout feature/localstorage
Switched to branch 'feature/localstorage'
Your branch is up to date with 'origin/feature/localstorage'.

Desktop/career-test (feature/localstorage)
> git push origin feature/localstorage

Desktop/career-test (feature/localstorage)
> git checkout develop
Switched to branch 'develop'

Desktop/career-test (develop)
> git merge feature/localstorage
Merge made by the 'recursive' strategy.
 README.md | 4 +---
 1 file changed, 1 insertion(+), 3 deletions(-)

## conflicts X

# no changes
Desktop/career-test (develop)
> git status
On branch develop
nothing to commit, working tree clean

# no changes
Desktop/career-test (develop)
> git add .

# no changes
Desktop/career-test (develop)
> git commit -m "Merge branch 'feature/localstorage' into develop"
On branch develop
nothing to commit, working tree clean

# Push
Desktop/career-test (develop)
> git push origin develop
Enumerating objects: 4, done.
```