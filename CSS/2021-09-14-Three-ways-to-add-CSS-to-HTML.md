## Adding CSS to HTML in 3 Ways

- Inline - 태그 안에 직접 원하는 스타일을 적용
- Internal - <style> 태그 안에 CSS 코드를 작성
- External - <link> 태그로 CSS 문서를 불러온다

**Inline Style Sheet**

```html
<body>
  <h1 style="color: blue;">Hello World</h1>
</body>
```

**Internal Style Sheet**

```html
<head>
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>

<body>
  <h1>Hello World</h1>
</body>
```

**External Style Sheet**

```html
<head>
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <h1>Hello World</h1>
</body>
```
