## Math.floor()

소수점 1번째 자리를 버림하여 반환하는 함수

## Math.random()

0 ~ 1 사이의 난수를 반환하는 함수

### Math random() 최대값 지정 : \*

기호를 사용하여, 초기 범위인 0 ~ 1이 아닌 최대 범위 설정하기

난수의 초기 범위 시작이 0이므로, 0에는 어떤 수를 곱해도 0이다.
따라서 최대값인 1에만 원하는 최대 범위를 곱한다.

```jsx
// 최대값 설정은 Math.random()에 원하는 최대값을 곱한다
Math.floor(Math.random() * 최대값);

// 0 ~ 9에서 랜덤 숫자를 뽑는다
Math.floor(Math.random() * 10);

// 1 ~ 10에서 랜덤 숫자를 뽑는다
Math.floor(Math.random() * 10) + 1;

// 1 ~ 9에서 랜덤 숫자를 뽑는다 ( 0 ~ 10에서 )
Math.floor(Math.random() * (10 - 1) + 1);

// 최대값에서는 1을 빼주고, 전체에서는 + 1을 더한다
Math.floor(Math.random() * (최대값 - 최소값) + 최소값);
```

```jsx
// first color와 second color를 랜덤으로 뽑아 그라데이션

const colors = ["#ef5777", "#575fcf", "#4bcffa", "#34e7e4", "#0be881"];

function color() {
  const firstColor = colors[Math.floor(Math.random() * colors.length)];
  const secondColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = `linear-gradient(${firstColor}, ${secondColor})`;
}
```
