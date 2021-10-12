## 이전 버전으로 되돌리기

### 이전 버전으로 reset

```bash
# 124c7df(HEAD~2)로 돌아간다
> git reflog
b650192 HEAD@{0} commit: update 구현
124c7df HEAD@{1} commit: 글삭제를 구현
e8a6121 HEAD@{2} commit: 글생성 UI를 출력하기 위한 이벤트 구현

# 특정 버전으로 돌아가기
> git reset --hard 124c7df
HEAD is now at 124c7df 글삭제를 구현

> git push --force
```

### reset 취소하기

```bash
# 잘못된 버전으로 돌아감

> git reflog
124c7df (HEAD -> main) HEAD@{0}: reset: moving to HEAD~1
b650192 (origin/main) HEAD@{1}: commit: update 구현 
124c7df (HEAD -> main) HEAD@{2}: commit: 글삭제를 구현
e8a6121 HEAD@{3}: commit: 글생성 UI를 출력하기 위한 이벤트 구현

> git reset --hard HEAD@{1}
HEAD is now at b650192 update 구현
```

```bash
# 발생했던 에러
> git push --force
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0

remote: GitLab: You are not allowed to force push code to a protected branch on this project.
To https://gitlab.lalala.io/1635/react-tutorial.git
 ! [remote rejected] main -> main (pre-receive hook 
declined)
error: failed to push some refs to 'https://gitlab.lalala.io/1635/react-tutorial.git'

# 해결 방법 (gitlab repository 설정 변경)
# gitlab Project -> Settings -> Repository -> Protected Branches -> Expand -> Unprotect

> git push --force
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
To https://gitlab.lalala.io/1635/react-tutorial.git
 + b650192...124c7df main -> main (forced update) 
```
