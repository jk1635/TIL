# Example Workflow in Github Actions

```yaml
name: Run Auto Readme Generatorv # 워크 플로우 이름 지정

on: [push] # 저장소에 푸시됐을 때, pull 풀 됐을 때
jobs:
  build:
    runs-on: ubuntu-latest # 리눅스로 실행한다.

    steps:
      - uses: actions/checkout@v2 # 현재 저장소를 체크아웃한다.
      - name: Set up Python 3.9.5 # 파이썬 설치
        uses: actions/setup-python@v1
        with:
          python-version: "3.9"
          architecture: "x64"
      - name: Install dependencies # 의존성 설치
        run: |
          python -m pip install --upgrade pip
          pip install -r ./util/generator_requirements.txt
      - name: Auto Readme Generator
        # 파이썬 스크립트를 실행한다.
        # generator.py가 README.md 파일을 생성해준다.
        run: |
          python "generator.py"
      - name: Commits # 깃 설정한 뒤 변경된 README.md 파일을 추가한다.
        run: |
          git config --local user.email "immutable000@gmail.com"
          git config --local user.name "auto_readme_generator"
          git add README.md
          git commit -m "auto - update readme file" # 커밋 메세지
      - name: Push # 커밋된 내용을 저장소에 푸시
        uses: ad-m/github-push-action@master
        with:
          branch: "master"
          github_token: $
```

[source](https://github.com/2ykwang/learn-algorithm/blob/master/.github/workflows/python.yml), [github-docs](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)