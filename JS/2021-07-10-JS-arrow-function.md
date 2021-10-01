## 화살표 함수

화살표 함수 표현(arrow function expression)은 function 표현에 비해 구문이 짧고,
자신의 this, arguments, super 또는 new.target을 바인딩 하지 않는다.
화살표 함수는 항상 익명으로, 이 함수 표현은 메소드 함수가 아닌 곳에 가장 적합하다. 그래서 생성자로서 사용할 수 없다.

_1. this 바인딩 하지 않는다._<br>
_2. 메소드 함수가 아닌 곳에 가장 적당하다._

__함수 표현식과 화살표 표현식의 차이__

```javascript

// 함수 표현식
function () {}

// 화살표 함수 표현식

() => {}
```


__화살표 함수 사용해보기__
```javascript
const add = (a, b) => {
  return a + b;
};

// 만약에 위와 같이 코드 블록 내부에서 바로 return 을 하는 경우는
// 다음과 같이 줄여서 쓸 수도 있다.

const add = (a, b) => a + b;
```


