# How to remove large files from commit history

## 이슈 발생

- GitLab에서 GitHub으로 repository 미러링 하는 과정 중 100MB 이상의 파일 commit 이력으로 인한 에러 발생

## 해결 방법

- 100MB보다 큰 commit을 삭제한다.
- 아래의 방법은 java가 설치되어 있어야 한다.

1. 원본 저장소를 복사한다.

```bash
> git clone --mirror https://github.com/green*****16**/origin-repository.git
```

2. origin-repository.git 폴더와 같은 경로에 [BFG Repo Cleaner](https://rtyley.github.io/bfg-repo-cleaner)의 jar 파일을 다운받는다.

```bash
> ls
origin-repository.git  bfg-1.14.0.jar
```

3. [JAVA](https://www.oracle.com/java/technologies/downloads/)를 설치한다.

   > x64 MSI Installer를 설치한다.(windows 기준)<br/>
   > cmd에서 set 명령어를 이용하여 PATH 변수에 jdk/bin 디렉토리를 추가한다.<br/>
   > 시스템 속성에서, 환경 변수 JAVA_HOME, PATH 경로를 추가한다.<br/>
   > cf. Java Extension Pack을 설치해야 VSCode 내에서 사용 가능하다.(미설치로 진행)

4. 다음 명령어를 실행하여 100MB가 넘는 파일을 올린 commit 이력을 삭제한다.

```bash
> java -jar bfg-1.14.0.jar --strip-blobs-bigger-than 100M origin-repository.git
```

5. push 한다.

```bash
> cd origin-repository.git

> git remote set-url --push origin https://github.com/green*****16**/new-repository.git

> git push --mirror
```

### 실제 사용한 명령어

```bash
ABC@DESKTOP-ABCD123 MINGW64 ~/Desktop/seulkok
$ git clone --mirror https://lala-gitlab.hahahoho.io/16**/project-template.git
Cloning into bare repository 'project-template.git'...

ABC@DESKTOP-ABCD123 MINGW64 ~/Desktop/seulkok
$ java -jar bfg-1.14.0.jar --strip-blobs-bigger-than 100M project-template.git

Using repo : C:\Users\ABC\Desktop\seulkok\project-template.git

Scanning packfile for large blobs: 2301
Scanning packfile for large blobs completed in 88 ms.
Found 1 blob ids for large blobs - biggest=162983050 smallest=162983050
Total size (unpacked)=162983050
Found 105 objects to protect
Found 71 commit-pointing refs : HEAD, refs/heads/master, refs/merge-requests/1/head, ...

Protected commits
-----------------

These are your protected commits, and so their contents will NOT be altered:

 * commit f09ed09a (protected by 'HEAD')

Cleaning
--------

Found 337 commits
Cleaning commits:       100% (337/337)
Cleaning commits completed in 2,512 ms.

Updating 40 Refs
----------------

        Ref                            Before     After
        --------------------------------------------------
        refs/heads/master            | f09ed09a | 7bbfcd45
        refs/merge-requests/13/head  | 760684b3 | e3a86e1e
        refs/merge-requests/13/merge | 727b192d | a8186d20
        refs/merge-requests/14/merge | 6e69eae9 | 98f15672
        refs/merge-requests/15/head  | 1ebd9362 | d302b6ea
        refs/merge-requests/15/merge | b6f1cf08 | 3a335f89
        refs/merge-requests/16/head  | fbe45c68 | b59efe54
        refs/merge-requests/16/merge | c55c281e | b83b67aa
        refs/merge-requests/17/head  | 57d05e84 | f7264145
        refs/merge-requests/17/merge | 912625e6 | f62518ae
        refs/merge-requests/18/head  | e4fec062 | 5680253a
        refs/merge-requests/18/merge | dfb6170a | 85b11c39
        refs/merge-requests/20/merge | 04506396 | a29e6865
        refs/merge-requests/21/merge | 4495da6b | 266c880a
        refs/merge-requests/22/head  | 15da95f7 | 2d8c9997
        ...

Updating references:    100% (40/40)
...Ref update completed in 397 ms.

Commit Tree-Dirt History
------------------------

        Earliest                                              Latest
        |                                                          |
        .......................DDDDDDDDDDDDDDDDDDDDDDDDDDDDmmmmmmmmm

        D = dirty commits (file tree fixed)
        m = modified commits (commit message or parents changed)
        . = clean commits (no changes to file tree)

                                Before     After
        -------------------------------------------
        First modified commit | 195a680d | 4ca25316
        Last dirty commit     | 5b76be84 | 988091c5

Deleted files
-------------

        Filename     Git id
        --------------------------------
        video1.mp4 | a9ff3473 (155.4 MB)


In total, 406 object ids were changed. Full details are logged here:

        C:\Users\ABC\Desktop\seulkok\project-template.git.bfg-report\2022-01-16\02-32-45

BFG run is complete! When ready, run: git reflog expire --expire=now --all && git gc --prune=now --aggres

ABC@DESKTOP-ABCD123 MINGW64 ~/Desktop/seulkok
$ cd project-template.git

ABC@DESKTOP-ABCD123 MINGW64 ~/Desktop/seulkok/project-template.git (BARE:master)
$ git remote set-url --push origin https://github.com/green*****16**/seul-kok.git

ABC@DESKTOP-ABCD123 MINGW64 ~/Desktop/seulkok/project-template.git (BARE:master)
$ git push --mirror
```

참고 : [bigfile](https://vateran.tistory.com/51) [mirror](https://hongjuzzang.github.io/howto/git_mirror/), [git-filter-branch](https://oizys.tistory.com/57), [Java](https://wikidocs.net/887) [path setting](https://hyoje420.tistory.com/7)
