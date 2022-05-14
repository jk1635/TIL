# Window Resize Event in JavaScript

## addEventListener&#44; window&#46;innerWidth 브라우저 창 크기 변화 이벤트

```jsx
// index.html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>

<body>
    <h1 id="title">Hello JavaScript!!</h1>
    <script src="index.js"></script>
</body>

</html>
```

```jsx
// index.js

const title = document.querySelector("body");
const colors = [
  "#1abc9c",
  "#3498db",
  "#9b59b6",
  "#f39c12",
  "#e74c3c",
  "#C18282",
  "#FF50CF",
  "#0A9696",
];
const RESIZE_CLASS = (title.style.backgroundColor = colors[0]);

function handleResize() {
  const wframe = window.innerWidth;
  console.log(wframe);
  if (wframe <= 200) {
    title.style.backgroundColor = colors[1];
  } else if (wframe > 200 && wframe <= 400) {
    title.style.backgroundColor = colors[2];
  } else if (wframe > 400 && wframe <= 600) {
    title.style.backgroundColor = colors[3];
  } else if (wframe > 600 && wframe <= 800) {
    title.style.backgroundColor = colors[4];
  } else if (wframe > 800 && wframe <= 1000) {
    title.style.backgroundColor = colors[6];
  } else if (wframe > 1000 && wframe <= 1200) {
    title.style.backgroundColor = colors[6];
  } else if (wframe > 1200 && wframe <= 1400) {
    title.style.backgroundColor = colors[7];
  }
}

window.addEventListener("resize", handleResize);
//윈도우 창의 사이즈가 변경될 때마다 이벤트가 발생한다.
```
