# Why not JavaScript

## JavaScript의 문제점

- 객체 + boolean

```javascript
[1, 2, 3, 4] + false;
// '1,2,3,4false'

[1] + true;
// '1true'
```

- 입력값이 하나지만 코드가 실행이 된다.

```javascript
function divide(a, b) {
  return a / b;
}

divide(2, 3);
// 0.6666666666666666;

divide("xxxxxx");
// NaN;
// 이때는 에러가 나오는게 맞다.
```

- 런타임 에러 (유저의 컴퓨터에 코드가 실행되면 나타나는 에러)

```javascript
const nico = { name: "nico" }; // 객체

nico.hello(); // 객체에 hello() 함수를 불러옴
// VM839:1 Uncaught TypeError: nico.hello is not a function at <anonymous>:1:6
```

- 좋은 프로그래밍 언어는 nico 객체(object)를 분석해서 hello() 함수가 없다는 것을 알려준다.
- 컴파일 실패로 실행조차 못하는 코드가 JavaScript에서는 실행이 된다.

## TypeScript를 사용했을 때

- TypeScript에서는 배열 + boolean과 같은 이상한 코드를 작성할 수 없다.

**TypeScript : A Static Type Checker**

- 프로그램을 실행시키지 않으면서 코드의 오류를 검출하는 것을 정적 검사라고 한다.
- 정적 타입 검사자인 TypeScript는 프로그램을 실행시키기 전에 값의 종류를 기반으로 프로그램의 오류를 찾는다.

```typescript
[1, 2, 3, 4] + false;
// '+' 연산자를 'number[]' 및 'boolean' 형식에 적용할 수 없습니다.
```

```typescript
function divide(a, b) {
  return a / b;
}

divide("hello");
// 2개의 인수가 필요한데 1개를 가져왔습니다.
```

```typescript
const player = {
  age: 12,
};

player.age = false;
// 'boolean' 형식은 'number' 형식에 할당할 수 없습니다.
```

참고: [Nomad-Coders](https://nomadcoders.co/typescript-for-beginners), [TypeScript-Handbook](https://typescript-kr.github.io/pages/tutorials/ts-for-the-new-programmer.html)
