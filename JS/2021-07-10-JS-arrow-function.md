# Arrow Function

화살표 함수 표현(arrow function expression)은 function 표현에 비해 구문이 짧고,
자신의 this, arguments, super 또는 new.target을 바인딩 하지 않는다.
화살표 함수는 항상 익명으로, 이 함수 표현은 메소드 함수가 아닌 곳에 가장 적합하다. 그래서 생성자로서 사용할 수 없다.

> 1. this 바인딩 하지 않는다.
> 2. 메소드 함수가 아닌 곳에 가장 적당하다.

### 함수 표현식과 화살표 표현식의 차이

- Arrow Function(화살표 함수)는 function표현보다 구문이 짧은 함수 표현이다.

- function이라는 키워드를 생략하고 매개변수를 받은 뒤 &#61;&#62; 를 써주는 형태이다.

- 중괄호를 열어 로직을 작성할 수 있으며 return 값만 존재하는 짧은 함수의 경우 중괄호와 return을 생략하고 바로 return할 값을 입력할 수도 있다.

```jsx

// 함수 표현식
function () {}

// 화살표 함수 표현식
() => {}
```

**화살표 함수 사용해보기**

```jsx
const add = (a, b) => {
  return a + b;
};

// 만약에 위와 같이 코드 블록 내부에서 바로 return 을 하는 경우는
// 다음과 같이 줄여서 쓸 수도 있다.

const add = (a, b) => a + b;
```

```jsx
const b = (x, y) => {
  console.log(x, y);
};
b(5, 6);

const c = (x, y) => console.log(x, y);
c(7, 8);
```
