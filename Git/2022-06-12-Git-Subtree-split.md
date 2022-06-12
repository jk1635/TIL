# Split Subdirectory into New Repository

## 레포지토리의 하위 디렉토리&#40;폴더&#41;를 다른 레포지토리로 분리하기

```bash
# subtree를 이용하여,
# 하위 디렉토리(옮길 폴더)를 새 브랜치(splitted)로 복사한다.
# 새 브랜치명은 splitted로 임의 지정하였다.
> git subtree split -P 하위디렉토리명 -b splitted

# 생성된 브랜치 확인
> git branch -a
* main
  splitted
  remotes/origin/main

# 새 브랜치로 이동
> git checkout splitted
Switched to branch 'splitted'

# 새 remote 저장소(new-origin)에 새 레포지토리 주소 추가
> git remote add new-origin https://github.com/green*****16**/new-repository.git

# 새 레포지토리에 푸시
> git push new-origin splitted


# 다음은 새 브랜치 및 새 remote 저장소를 삭제하는 명령어이다.
# main 브랜치로 이동
> git checkout main

# splitted 브랜치 삭제
> git branch -D splitted

# new-origin 저장소 삭제
> git remote remove new-origin

# 삭제된 것 확인
> git branch -a
* main
  remotes/origin/main
```

### 실제 사용 코드

**디렉토리 구조**

```
📦react
 ┣ 📂handbook
 ┣ 📂tutorial
```

```bash
~/Desktop/react (main)
$ git subtree split -P handbook -b splitted

~/Desktop/react (main)
$ git branch -a
* main
  splitted
  remotes/origin/main

~/Desktop/react (main)
$ git checkout splitted

~/Desktop/react (splitted)
$ git remote add new-origin https://github.com/green*****16**/handbook.git

~/Desktop/react (splitted)
$ git push new-origin splitted

~/Desktop/react (splitted)
$ git checkout main

~/Desktop/react (main)
$ git branch -D splitted

~/Desktop/react (main)
$ git branch -a
* main
  remotes/new-origin/splitted
  remotes/origin/main

~/Desktop/react (main)
$ git remote remove new-origin

~/Desktop/react (main)
$ git remote
origin
```
