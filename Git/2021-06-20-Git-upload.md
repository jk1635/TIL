## GitHub에 업로드하기

```bash
# 폴더 우클릭 > Git Bash

# 로그인
$ git config --global user.email "XXXXX@gmail.com"

# .git 파일 생성 (프로젝트 초기설정)
$ git init

# 폴더 내의 모든 파일 버전 관리(특정 파일만 원하면 git add a.py 형식으로)
$ git add .

# commit
$ git commit -m "OOO changed"

# 레포지토리 주소
$ git remote add origin http://github.com/XXXXX/repository.git

# github에 업로드
$ git push -u origin main
```