# Event Handling in React

## React에서 이벤트 핸들링 방법

### 1. 핸들링 함수 선언

```jsx
function App() {
  // 별도의 핸들링 함수를 선언하고 element에 넘겨주는 방법
  const handleChange = (event) => {console.log(event.target.value)};
  return (
    <div>
      <input onChange={handleChange} />
    </div>
  );
}
```

### 2. 익명 함수로 처리

```jsx
function App() {
  return (
    <div>
      <input
        // 이벤트를 할당하는 부분에서 익명함수를 작성하는 방법
        onChange={(event) => {console.log(event.target.value)}} />
    </div>
  );
}
```