## Transform

- 회전(rotate), 확대축소(scale), 이동(translate), 기울이기(skew) 효과를 부여한다.

```html
<body>
  <div class="transform"></div>
</body>
```

```css
.transform {
  width: 100px;
  height: 100px;
  background-color: red;
  transform: rotate(45deg);
  transform: scale(2, 3);
  transform: translate(100px, 200px);
  transform: skew(10deg, 20deg);
  margin: 200px 0 0 200px;
}
```

- 변환함수는 쉼표없이 나열한다. 나열순서에 따라 차례대로 효과가 적용된다.

```css
/* transform: func1 func2 func3 ...; */
/* transform: 원근법 이동 크기 회전 기울임; */
.transform {
  transform: rotate(45deg) scale(2, 3) translate(100px, 200px) skew(10deg, 20deg);
}
```
