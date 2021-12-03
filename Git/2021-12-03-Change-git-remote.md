# 로컬 저장소 remote repository 바꾸기

원격저장소 레포지토리 주소 변경으로 인한 로컬저장소 연결 주소 다시 세팅 하는 작업<br/>
(변경 주소 : psychological-test -> career-test)

```bash
# 현재 있는 저장소 2곳 (origin은 gitlab에, github는 github에 올렸었다.)
Desktop/psychological-test
$ git remote
github
origin

# 아래는 로컬저장소 github의 기존에 사용하던 원격 저장소 레포지토리 주소(github/psychological-test)
Desktop/psychological-test
$ git remote get-url github
https://github.com/githubuserid/psychological-test.git

# 해당 remote를 삭제한다.
Desktop/psychological-test
$ git remote remove github

# 로컬저장소 github에 새로운 원격저장소 레포지토리 주소(github/career-test)를 저장한다.
Desktop/psychological-test
$ git remote add github https://github.com/githubuserid/career-test.git

# 변경 확인
Desktop/psychological-test
$ git remote get-url github
https://github.com/githubuserid/career-test.git

# push
Desktop/psychological-test
$ git push github develop
Everything up-to-date
```
