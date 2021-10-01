## Transfer repository from GitLab to GitHub

### 저장소 옮기기

gitlab 에서 github 으로 commit 포함해서 옮긴다

1. 원본 저장소를 복사한다.

```bash
> git clone --mirror [원본 저장소 경로]

> cd [원본 저장소 이름].git
```

2. 이동할 원격 저장소 경로 지정

```bash
> git remote set-url --push origin [이동할 원격 저장소 경로]
```

3. 원격 저장소에 push

- 새 원격 저장소로 push

```bash
> git push --mirror
```

- 기존 원격 저장소로 push

```bash
> git push --mirror [이동할 원격 저장소]
```
---
### 실제 사용한 명령어

```bash
# git config 설정
> git config --global user.name "green*****16**"
> git config --global user.email "1*****@naver.com"

# gitlab clone
> git clone --mirror https://lala-gitlab.hahahoho.io/16**/javascript_plus.git
> cd javascript_plus.git

# github repository url
> git remote set-url --push origin https://github.com/green*****16**/javascript_plus.git

# mirror
> git push --mirror
```