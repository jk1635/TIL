## Deleting folders and files in github

### 파일 삭제하기

```bash
> git rm file.txt

> git commit -m "remove file.txt"

> git push origin main
```

### 폴더 삭제하기

```bash
# 해당 폴더 삭제
> git rm Folder

# 폴더 하위의 모든 파일 삭제
# If it's a folder to be removed and it's subsequent child folders or files, use.
> git rm -r Folder

# 폴더 하위 특정 폴더 삭제
# If you want to remove a folder inside another folder.
> git rm -r parentFolder/childFolder

> git commit -m "remove folder"

> git push origin main
```

`git rm -rf` : 원격 저장소(remote repository)와 로컬 저장소(Local repository) 모두 삭제

### --cashed

```bash
# 원격 저장소 파일 삭제. 로컬 저장소 파일은 삭제하지 않는다.
# If you want to remove the file only from the Git repository and not remove it from the filesystem, use.

> git rm --cached file.txt
```