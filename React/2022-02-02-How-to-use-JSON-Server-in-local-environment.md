# How to use JSON Server in local environment

- json server는 REST API 를 구축해주는 라이브러리

## Install JSON Server

```
> npm install -g json-server
```

## fake-server 디렉토리 생성, db.json 파일 생성

```
> mkdir fake-server
> touch db.json
```

## comment라는 배열 입력

```json
// db.json

{
  "comments": [
    {
      "id": 1,
      "name": "frog",
      "profile_image": "https://via.placeholder.com/600/b0f7cc",
      "title": "aut quo modi neque nostrum ducimus",
      "content": "voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid"
    }
  ]
}
```

## fake-server 디렉토리에서 서버 실행

```bash
> cd fake-server
> json-server --watch db.json --port 3001

# 3000 포트는 리액트 개발서버가 사용하는 기본 포트이기 때문에 포트를 3001으로 지정
```

## Postman으로 REST API 서버 테스트

- [Postman](https://www.getpostman.com/)(HTTP Client 도구) 설치 및 실행
- 주소창에 http://localhost:3001/comments 입력

참고 : [vlpt](https://redux-advanced.vlpt.us/3/01.hml), [manual-typicode](https://github.com/typicode/json-server)
