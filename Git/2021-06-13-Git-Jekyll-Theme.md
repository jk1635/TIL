# Create Github pages with Jekyll

```bash
# git bash에서 github로 올릴 때 코드
$ cd https://XXX.github.io/
$ git add .
$ git commit -m "blabla"
$ git push

# localhost:4000에서 확인할 때 코드
$ cd https://XXX.github.io/
$ bundle exec jekyll serve --incremental
```

```bash
$ cd C:/Users/JK/Documents/XXX

$ git clone https://github.com/XXX/XXX.github.io.git

$ cd ./XXX.github.io

# 해당 폴더에 테마 넣기

$ gem install bundler

$ bundle install

$ git add .

$ git commit -m "Theme"

$ git push

$ git push -f
# 강제로 push
```

참고
https://zoomkoding.github.io/gitblog/2019/08/18/git-blog-3.html
