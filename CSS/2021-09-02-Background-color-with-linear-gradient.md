## linear-gradient()

CSS function인 linear-gradient() 직선을 따라 두개나 그 이상의 색 간의 점진적 전환을 표현한다. 그레이디언트는 배경처럼 `<image>`를 사용하는 곳에는 어디에나 적용할 수 있다.

**선형 그레이디언트 사용하기**

```css
/* 기본 선형 - 위(blue), 아래(red) */
background: linear-gradient(blue, red);

/* 방향 전환 - 왼쪽(blue), 오른쪽(red) */
background: linear-gradient(to right, blue, red);
background: linear-gradient(0.25turn, blue, red);

/* 대각선 - 오른쪽 아래(blue)부터 시작해 왼쪽 위(red)로 */
background: linear-gradient(to left top, blue, red);
```
