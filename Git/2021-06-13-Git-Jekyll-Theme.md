## 깃헙 페이지 만들기(jekyll)

hugo theme를 원했으나 하다가 실패, 결국 jekyll theme로 변경 Ruby를 사용했다.

사실 아직도 hugo랑 jekyll이 뭔지 모르지만, hugo가 go언어인 것은 오늘부터 안다.<br/>

**git**

```shell
# git bash에서 github로 올릴 때 코드
cd https://XXX.github.io/
git add .
git commit -m "blabla"
git push

# localhost:4000에서 확인할 때 코드
cd https://XXX.github.io/
bundle exec jekyll serve --incremental
```

참고
https://zoomkoding.github.io/gitblog/2019/08/18/git-blog-3.html
