## Transfer repository from GitLab to GitHub

### 저장소 옮기기

gitlab 에서 github 으로 commit 포함해서 옮긴다

1. 원본 저장소를 복사한다.

```shell
git clone --mirror [원본 저장소 경로]

cd [원본 저장소 이름].git
```

2. 이동할 원격 저장소 경로 지정

```shell
git remote set-url --push origin [이동할 원격 저장소]
```

3. 원격 저장소에 push

- 새 원격 저장소로 push

```shell
git push --mirror
```

- 기존 원격 저장소로 push

```shell
git push --mirror [이동할 원격 저장소]
```
