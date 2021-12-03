# React 초기 설정

- nvm : Node.js의 버전 관리자

```bash
nvm --version
```

- nvm으로 노드 설치하기 ([노드 공식사이트](https://nodejs.org/ko)에서 버그가 적은 버전(LTS) Node.js를 설치)

```bash
nvm install [설치할 버전]
```

- Node.js 버전 확인

```bash
# nvm으로 설치한 노드 버전 리스트 확인 명령어
nvm ls

# 노드 버전 확인 명렁어
node -v

# nvm에서 사용 중인 노드 버전 바꾸기
nvm use [사용할 노드 버전]
```

- npm으로 yarn 설치하기<br/>
  (npm은 노드를 설치하면 함께 설치된다. 따로 설치할 필요가 없다.)

```bash
# -g 옵션은 컴퓨터 전체에서 쓸 수 있게 한다.
npm install -g yarn

npm install yarn
```

- yarn 이용해서 패키지 설치하기

```bash
yarn add [옵션] [설치할 패키지 이름]
```

- create-react-app 패키지를 사용하여 프로젝트 생성

```bash
yarn create react-app [프로젝트 이름]
```