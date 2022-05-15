# Use README Bot

markdown 파일로 TIL을 작성하면 자동으로 README.md에 파일 링크와 날짜를 업데이트 해준다. 코드는 [simonw/til](https://github.com/simonw/til)에서 가져와 일부 수정하였다.

1. Access_Token은 [여기](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)를 참고했다.

2. Repository에 `/.github/workflows/build.yml` 다음과 같은 경로로 build.yml 파일을 생성하고, 아래와 같이 작성한다. (주석 내용 확인)

    ```yml
    name: Build README and deploy Datasette

    on:
      push:
        branches:
          - main  # 본인 branch 작성
        paths-ignore:
          - README.md

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - name: Check out repo
            uses: actions/checkout@v2
            with:
              fetch-depth: 0
          - name: Set up Python
            uses: actions/setup-python@v1
            with:
              python-version: 3.8
          - uses: actions/cache@v1
            name: Configure pip caching
            with:
              path: ~/.cache/pip
              key: ${{ runner.os }}-pip-${{ hashFiles('**/requirements.txt') }}
              restore-keys: |
                ${{ runner.os }}-pip-
          - name: Install Python dependencies
            run: |
              python -m pip install --upgrade pip
              pip install -r requirements.txt
          - name: Build database
            run: python build_database.py
            # cf : `Error: Process completed with exit code 1.`
            # 위와 같은 에러가 발생하여, cmd를 항상 true로 바꾸니까 작동하였다.
            # run: python build_database.py || true
          - name: Update README
            run: |-
              python update_readme.py --rewrite
              cat README.md
          - name: Commit and push if README changed
            run: |-
              git diff
              git config --global user.name "README[bot]"
              git config --global user.email "readme-bot@example.com"
              git diff --quiet || (git add README.md && git commit -m "Update README")
              git push
          - name: Setup Node.js
            uses: actions/setup-node@v1
            with:
              node-version: "12.x"
          - name: Deploy Datasette using Zeit Now
            env:
              ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
            run: |-
              datasette publish now til.db \
                --token $ACCESS_TOKEN \
                --project til \
                --metadata metadata.json \
                --install py-gfm \
                --install datasette-render-markdown \
    ```

3. 다음 파일을 생성한다.

- build_database.py 파일 생성

    ```python
    from datetime import timezone
    import git
    import pathlib
    import sqlite_utils


    root = pathlib.Path(__file__).parent.resolve()


    def created_changed_times(repo_path, ref="main"):  # 본인 branch 작성
        created_changed_times = {}
        repo = git.Repo(repo_path, odbt=git.GitDB)
        commits = reversed(list(repo.iter_commits(ref)))
        for commit in commits:
            dt = commit.committed_datetime
            affected_files = list(commit.stats.files.keys())
            for filepath in affected_files:
                if filepath not in created_changed_times:
                    created_changed_times[filepath] = {
                        "created": dt.isoformat(),
                        "created_utc": dt.astimezone(timezone.utc).isoformat(),
                    }
                created_changed_times[filepath].update(
                    {
                        "updated": dt.isoformat(),
                        "updated_utc": dt.astimezone(timezone.utc).isoformat(),
                    }
                )
        return created_changed_times


    def build_database(repo_path):
        all_times = created_changed_times(repo_path)
        db = sqlite_utils.Database(repo_path / "til.db")
        table = db.table("til", pk="path")
        for filepath in root.glob("*/*.md"):
            fp = filepath.open()
            title = fp.readline().lstrip("#").strip()
            body = fp.read().strip()
            path = str(filepath.relative_to(root))
            url = "https://github.com/USERNAME/TIL/blob/main/{}".format(
              # USERNAME에 본인 github 이름을 작성
              # TIL에 본인 레포지토리명 작성
              # main엔 본인 branch를 작성
                path)
            record = {
                "path": path.replace("/", "_"),
                "topic": path.split("/")[0],
                "title": title,
                "url": url,
                "body": body,
            }
            record.update(all_times[path])
            table.insert(record)
        if "til_fts" not in db.table_names():
            table.enable_fts(["title", "body"])


    if __name__ == "__main__":
        build_database(root)
    ```

- metadata.json 파일 생성

    ```json
    {
      "title": "TIL",
      "about": "USERNAME/TIL",  // USERNAME에 본인 github 이름을 작성, TIL에 본인 레포지토리명 작성
      "about_url": "https://github.com/USERNAME/TIL", // 여기도
      "databases": {
        "til": {
          "queries": {
            "search": "select\n  til_fts.rank,\n  til.*\nfrom\n  til\n  join til_fts on til.rowid = til_fts.rowid\nwhere\n  til_fts match case\n    :q\n    when '' then '*'\n    else escape_fts(:q)\n  end\norder by\n  til_fts.rank limit 20\n"
          },
          "tables": {
            "til": {
              "sort_desc": "updated_utc",
              "facets": ["topic"],
              "plugins": {
                "datasette-render-markdown": {
                  "columns": ["body"],
                  "extra_tags": [
                    "img",
                    "hr",
                    "br",
                    "details",
                    "summary",
                    "input",
                    "div",
                    "span"
                  ],
                  "extra_attrs": {
                    "input": ["type", "disabled", "checked"],
                    "img": ["src"],
                    "div": ["class"],
                    "span": ["class"]
                  },
                  "extensions": ["mdx_gfm:GithubFlavoredMarkdownExtension"]
                }
              }
            }
          }
        }
      }
    }
    ```

- requirements.txt 파일 생성

    ```txt
    GitPython
    sqlite-utils
    datasette
    py-gfm
    datasette-render-markdown
    datasette-publish-now
    datasette-template-sql
    ```

- update_readme.py 파일 생성

    ```python
    "Run this after build_database.py - it needs til.db"
    import pathlib
    import sqlite_utils
    import sys
    import re

    root = pathlib.Path(__file__).parent.resolve()

    index_re = re.compile(
        r"<!\-\- index starts \-\->.*<!\-\- index ends \-\->", re.DOTALL)

    if __name__ == "__main__":
        db = sqlite_utils.Database(root / "til.db")
        by_topic = {}
        for row in db["til"].rows_where(order_by="created_utc"):
            by_topic.setdefault(row["topic"], []).append(row)
        index = ["<!-- index starts -->"]
        for topic, rows in by_topic.items():
            index.append("## {}\n".format(topic))
            for row in rows:
                index.append(
                    "* [{title}]({url}) - {date}".format(
                        date=row["created"].split("T")[0], **row
                    )
                )
            index.append("")
        if index[-1] == "":
            index.pop()
        index.append("<!-- index ends -->")
        if "--rewrite" in sys.argv:
            readme = root / "README.md"
            index_txt = "\n".join(index).strip()
            readme_contents = readme.open().read()
            readme.open("w").write(index_re.sub(index_txt, readme_contents))
        else:
            print("\n".join(index))
    ```

- README.md 파일 생성

    ```md
    # Today I Learned

    <!-- index starts -->
    <!-- index ends -->
    ```

참고 : [source](https://github.com/simonw/til), [error-solution](https://github.com/actions/virtual-environments/issues/1279#issuecomment-663462004)
