# Increase the POST buffer size in Git

## 다음과 같은 에러 발생

```bash
> git push origin main

error: RPC failed; curl 92 HTTP/2 stream 0 was not closed cleanly: CANCEL (err 8)
fatal: the remote end hung up unexpectedly
```

- 파일 용량이 크다. = 소스 파일 사이즈보다 postBuffer size가 작다.
- 기본 버퍼 사이즈는 1MB

## 해결방법

- postBuffer size를 늘리는 코드를 사용

```bash
# 500MB를 늘려주는 코드
> git config http.postBuffer 524288000

# 100MB를 늘려주는 코드
> git config http.postBuffer 104857600

# global 적용 시
> git config --global http.postBuffer 524288000
```

참고 : [git](https://docs.gitlab.com/ee/topics/git/troubleshooting_git.html)
