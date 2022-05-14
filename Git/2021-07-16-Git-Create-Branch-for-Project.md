# Create Branch for Project

develop에서 새로운 값 pull하고 기존 기능 branch삭제 후 새로 만들기

```bash
/c/git_test/frontend-service (feature/kjy)
$ git checkout develop

/c/git_test/frontend-service (develop)
$ git pull origin develop

/c/git_test/frontend-service (develop)
$ git branch -d feature/kjy
Deleted branch feature/kjy (was 245b764).

/c/git_test/frontend-service (develop)
$ git push origin --delete feature/kjy
To https://github.com/ABC-clone-coding/frontend-service
 - [deleted]         feature/kjy

/c/git_test/frontend-service (develop)
$ git checkout -b feature/kjy
Switched to a new branch 'feature/kjy'
Compiled successfully!

/c/git_test/frontend-service (feature/kjy)
$ git branch
  develop
* feature/kjy
  main

/c/git_test/frontend-service (feature/kjy)
$ git push origin feature/kjy

# develop에서 받아왔을땐 새로 설치된 것이 있을 수도 있기 때문에 한번 확인해본다.
$ yarn install

# commit한게 다 뜬다
$ git log

# 기록 싹 다 뜬다 지운 것도 뜬다 (복구할때 확인할 수 있다)
$ git reflog
```

## 원격 저장소에 branch 올리기

```bash
$ git status
$ git add .
$ git status
$ git commit -m "OOO changed"
$ git commit -m "커밋메시지" -m "description"
$ git push origin feature/kjy
```

## Git Project Start

```bash
/c/
$ git clone
https://github.com/ABC-clone-coding/frontend-service.git

/c/frontend-service (main)
$ yarn install

/c/frontend-service (main)
$ yarn start

/c/frontend-service (main)
$ git branch -a
* main
  remotes/origin/HEAD -> origin/main
  remotes/origin/feature/lea

/c/frontend-service (main)
$ git checkout -b feature/kjy
Switched to a new branch 'feature/kjy'

/c/frontend-service (feature/kjy)
$ git branch -a
* feature/kjy
  main
  remotes/origin/HEAD -> origin/main
  remotes/origin/feature/lea

/c/frontend-service (feature/kjy)
$ git remote update
Fetching origin
From https://github.com/ABC-clone-coding/frontend-service
 * [new branch]      option     -> origin/option

/c/frontend-service (feature/kjy)
$ git push origin feature/kjy
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
remote:
remote: Create a pull request for 'feature/kjy' on GitHub by visiting:
remote:      https://github.com/ABC-clone-coding/frontend-service/pull/new/feature/kjy
remote:
 * [new branch]      feature/kjy -> feature/kjy

/c/frontend-service (feature/kjy)
$ git pull origin main
From https://github.com/ABC-clone-coding/frontend-service
 * branch            main     -> FETCH_HEAD
Already up to date.

/c/frontend-service (feature/kjy)
$ git status
On branch feature/kjy
nothing to commit, working tree clean

```

## Git Branch MEMO

```bash
# branch 확인
> git branch

# branch 이동
> git checkout 브랜치명

branch 이동 + 생성
> git checkout -b 브랜치명(기능branch명 ex:feature/#5)
```
### 주의
1. branch 이용시 현재 branch에서 변경사항이 생기면 그 해당 branch에만 push 가능하다.
즉, 꼭! 수정 전에, 코드 작성 전에 나의 현재 branch 위치가 기능 branch인지 확인!

2. 기능 개발 완료 후 branch 관리

- 각자 기능 브랜치에 push 이후 pr -> merge confirm되면

- vscode 상에서 현재 branch위치 develop으로 이동
```bash
> git checkout develop
```
- 로컬로 pull 하기
```bash
> git pull origin develop
```

- develop 위치에서 끝난 기능 branch 로컬에서 지우기
```bash
> git push origin --delete feature/#5
```

- 옮겨간 새 기능 branch에서 develop내용 원격으로 push해서 원격에도 새 기능 branch 적용시키기
```bash
> git push origin 브랜치명
```