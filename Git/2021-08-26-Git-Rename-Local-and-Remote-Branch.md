# Rename Local and Remote Branch

```bash
# 변경할 branch로 checkout
$ git checkout <변경할 branch name>

# 새로운 이름으로 local branch의 이름을 바꿈
$ git branch -m <새로운 branch name>

# 새로운 이름으로 된 branch 를 remote에 push
$ git push origin -u <새로운 branch name>

# 변경 전 branch 를 remote에서 삭제
$ git push origin --delete <이전 branch name>

# 로컬/리모트 저장소의 branch 정보 확인
$ git branch -a
```
