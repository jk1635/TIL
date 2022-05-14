# Git push rejected error

```bash

$ git push

 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/XXX/XXX.github.io.git'


# main -> main (fetch first)

# 깃허브 웹에서 여기 수정해놓고 pull 안했다는 내용
# 원인 : 해당 에러는 원격저장소와 현재 작업중인 로컬저장소가 동기화되지 않았을 때 발생한다.
# 동기화되지 않은 상태에서 다시 push하면 데이터가 소실될 수 있어 하고 경고해주는 것.


# 해결 : 두 가지 방법

# 1. 동기화를 위해 pull
$ git pull --rebase origin main

# 2. 강제로 push
$ git push origin +main
```
