## gitignore로 .ipynb_checkpoints 삭제

```bash
$ touch .gitignore
$ ls -a
$ vi .gitignore

.ipynb_checkpoints
*/.ipynb_checkpoints/*

:wq
:q!
```

## 프로젝트 중간에 .gitignore 파일을 만들었을 경우

```bash
# 로컬에서 캐시 지우기
git rm -r --cached .ipynb_checkpoints

# 깃에 반영
git add .
git commit -m "Ignore ipynb_checkpoints"
git push
```

## .gitignore 파일 사용 방법

```bash

# 특정 파일 제외하기
fooBar.js

# 특정 폴더 안의 파일 모두 제외하기
.ipynb_checkpoints/
node_module/

# 현재 경로의 fooBar만 제외하기 (다른경로 X)
/fooBar.js

# 특정 경로의 특정 파일 제외하기
folder/bar.txt

# 특정 확장자 파일 다 제외하기
*.txt

# 예외 파일 만들기
!bar.txt

# 특정 경로 아래의 모든 fooBar 제외하기
folder/**/fooBar.txt

# 현재 경로의 fooBar만 제외하기 (다른경로 X)
/fooBar.js
```