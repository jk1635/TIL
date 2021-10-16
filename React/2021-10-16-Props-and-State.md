# Props and State

## 1. Props

- React에서, 데이터의 흐름은 단방향(unidirectional)이다.

- Props는 오직 상위 컴포넌트(부모)에서 하위 컴포넌트(자식)로 내려간다.

- 상위 컴포넌트에서 하위 컴포넌트로 원하는 값을 넘겨줄 때 사용한다.

- Props는 함부로 변경될 수 없는 읽기 전용(read-only) 객체이다.

- Props는 immutable한 데이터다.

- Component의 재사용을 위해 사용한다.

- 값은 변수, 함수, 객체, 배열 등 자바스크립트 요소라면 제한이 없다.

```jsx
// Component 생성
const Hello = (props) => {
  return <h2>Hello, {props.name}</h2>;
};

// Component 사용
const App = () => {
  return (
    <div>
      <Hello name="Karl" />
      <Hello name="Max" />
      <Hello name="Weber" />
    <div/>
  );
};
```

- Props의 값을 임의로 변경해서는 안된다.

- 변경하고 싶다면 새로운 변수를 생성해야 한다.

```jsx
const Hello = (props) => {
  props.name = props.name + "님";
  return <h1>Hello, {props.name}</h1>;
};

const Hello = (props) => {
  const username = props.name + "님";
  return <h1>Hello, {username}</h1>;
};
```

## 2. State

- State(상태)는 컴포넌트 내에서 동적으로 변할 수 있는 값을 저장한다.

- React는 State의 변경이 감지되면, 변경된 부분만 리렌더링된다.

- State 값을 직접 변경하게 되면, React는 State의 변화를 감지하지 못하여 리렌더링을 하지 못한다.

- 반드시 setState 함수를 사용하여 State 값을 변경해야 한다.

- setState 함수를 호출하면, State 객체에 대한 업데이트가 실행된다.

```jsx
import React, { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}번 클릭했습니다.</p>
      <button
        onClick={() => setCount(count + 1)}
        // onClick={() => {count = count + 1}} // State 값을 직접 변경하면 안된다.
      >클릭</button>
    </div>
  );
};
```