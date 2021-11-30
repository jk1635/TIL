## A quick guide for how to merge

develop에 feature/localstorage 브랜치를 병합<br/>
(Merge branch 'feature/localstorage' into develop)

```bash
/c/folder/career-test (feature/localstorage)
$ git checkout develop

/c/folder/career-test (develop)
$ git merge feature/localstorage

> conflicts 해결 후

# 스테이징 상태로 변경
/c/folder/career-test (develop|merge)
git add .

# commit 작성
/c/folder/career-test (develop|merge)
git commit -m "Merge branch 'feature/localstorage' into develop"

/c/folder/career-test (develop|merge)
git log

/c/folder/career-test (develop)
git push origin develop
```
