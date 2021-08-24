## const

- variable을 만들기 위해 가장 먼저 const를 사용
- constant(상수)라는 것을 의미
- constant는 값이 바뀔 수 없다

## let

- let은 새로운 것을 생성할 때 사용


## const vs let
```jsx
const a = 5;
const b = 2;
let myName = "lala";

```
- 절대 바뀌지 않을 variable인 a, b
- 바뀔 수도 있는 variable인 myName
- 기본적으로 const를 사용, 만약 변수를 업데이트 하고 싶다면 let을 사용
    - const와 let은 최근 것이고 오래된 방식으로는 var가 있다
    - var는 원한다면 어디서든 업데이트 할 수 있었다
    - var는 바뀔 것과 바뀌지 않을 것의 구별이 어렵다
