## File and Directory Commands in Linux

### 디렉토리 생성 - mkdir

```shell
$ mkdir [생성할 디렉토리 이름]

# 현재 디렉토리 위치에 새로운 디렉토리 생성
$ mkdir [디렉토리 경로/디렉토리명]
```

`fruits` 디렉토리와 `vegetable` 디렉토리를 생성<br>
`fruits` 디렉토리 안에는 빈 파일 `apple`을 생성<br>
`vegetable` 디렉토리 안에는 빈 파일 `broccoli`를 생성<br>

```shell
$ mkdir fruits
$ mkdir vegetable
$ touch fruits/apple
$ touch vegetable/broccoli
```

### 빈파일 생성 - touch

```shell
$ touch [생성할 파일 이름] 형식으로 사용
$ touch [디렉토리 경로/파일 명] 사용 가능
```

### 디렉토리 삭제 - rmdir

```shell
$ rmdir [삭제할 디렉토리 이름]
```

### 파일 및 디렉토리 삭제 - rm

```shell
$ rm [option] [삭제할 파일 및 디렉토리 명]
```

option<br>
-r : 디렉토리와 그 하부 파일까지 삭제<br>
-f : 삭제 여부를 묻지 않고 바로 삭제<br>
-i : 삭제할 것인지 확인을 한다.<br>
-rf : 삭제 여부를 묻지 않고 하부 파일이 있는 디렉토리까지 삭제<br>

### 파일 및 디렉토리 복사 - cp

```shell
$ cp [option] [대상 위치 및 이름] [복사하고 싶은 위치]
```

option<br>
-r : 하위 디렉토리와 파일 전체를 복사<br>
-p: 소유주, 그룹, 권한, 시간 정보를 그대로 복사<br>

```shell
$ cp /fruits/apple /backup
# fruits 디렉토리의 apple 파일을 backup 디렉토리로 복사
```

```shell
$ cp -r /fruits/banana /banana
# banana 디렉토리의 하위 디렉토리 및 파일 전체를 복사
```

### 파일 및 디렉토리 이동 - mv

```shell
$ mv [대상 위치/이름] [이동하고 싶은 위치/이름]
# 이동하고 싶은 위치에 같은 이름의 파일/디렉토리 명이 존재 하지 않을 경우 이동
```

### 파일 검색 - find

지정된 [파일 경로]에서 이름이 [파일 이름]인 파일 및 디렉토리를 검색하는 명령어<br>
명령어의 끝에 -type d 혹은 -type f 를 작성하여, 디렉토리나 폴더만을 검색할 수도 있다.<br>

```shell
$ find [파일 경로] [-name] [파일 이름] [-type d/f]
```

### 히스토리 지우기 - clear

```shell
$ clear
```
