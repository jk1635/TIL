# Change Author of a commit after push

### 1. git user 설정

```bash
> git config --global user.name "username"
> git config --global user.email "email@address.com"
```

```bash
# 특정 repository user만 다르게 설정하고 싶을 땐 --global를 빼고 입력한다
> git config user.name "username"
> git config user.email "email@address.com"
```

### 2. rebase를 통해 수정할 commit을 선택

```bash
# 4번째 커밋까지 author 변경
> git rebase -i HEAD~4
```

### 3. 아래와 같은 내용이 나오면 i키 누르고, pick => e로 변경

```bash
pick 9b45639 blabla.md
pick 7f7fca9 lalalala.md
pick 6a0cd99 dododo.md
pick 2782b96 ahhhhh.md
```

### 4. ESC키 누르고 :wq를 눌러 저장

```bash
e 9b45639 blabla.md
e 7f7fca9 lalalala.md
e 6a0cd99 dododo.md
e 2782b96 ahhhhh.md
```

### 5. 변경할 author 입력

```bash
> git commit --amend --author="username<email@address.com>"
```

### 6. git rebase --continue 입력

```bash
ASD@DESKTOP-ASDF123 MINGW64 ~/Desktop/GAMAUJI (main|REBASE 1/4)
> git rebase --continue
ASD@DESKTOP-ASDF123 MINGW64 ~/Desktop/GAMAUJI (main|REBASE 2/4)
> git rebase --continue
ASD@DESKTOP-ASDF123 MINGW64 ~/Desktop/GAMAUJI (main|REBASE 3/4)
> git rebase --continue
```

### 7. 원격 저장소에 push

```bash
> git push -f origin main
```
