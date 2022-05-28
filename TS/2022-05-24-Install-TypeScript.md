# Install TypeScript

## 타입 스크립트 설치

```bash
$ npm install -g typescript
```

## 타입 스크립트 파일 생성

`index.ts` 파일에 다음과 같은 타입 스크립트 코드를 작성한다.

```ts
let firstClass = { student: ["ann", "marie", "chalie", "puth"] };
let secondClass = { student: ["dua", "lipa", "clean", "bandit"] };

function 누가1등일까(x: { student: string | string[] }) {
  if (typeof x.student === "string") {
    return x.student;
  } else if (Array.isArray(x.student)) {
    return x.student[0];
  } else {
    return "ERROR";
  }
}

console.log(누가1등일까(firstClass));
console.log(누가1등일까(secondClass));
```

## 코드 컴파일

```bash
$ tsc index.ts
```

or

```bash
$ tsc -w
```

## TypeScript 웹 앱 실행

`index.html` 파일에 다음과 같이 작성한다.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>TypeScript</title>
  </head>
  <body>
    <script src="index.js"></script>
  </body>
</html>
```

브라우저에서 `index.html`을 열어 TypeScript web app을 실행한다.

참고 : [TypeScriptDocs](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html)
