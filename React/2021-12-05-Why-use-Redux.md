## Redux 쉽게 이해하기

### Redux 쓰는 이유

1. props 문법 귀찮을 때 쓴다.
2. state 변경 관리할 때 쓴다.

```jsx
// index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

// 라이브러리 사용 방법일 뿐, 이해의 영역이 아니다. 따라서 복붙.
const 체중 = 100;

// state 수정방법 :
// 증가요청하면 몸무게 +1, 감소요청하면 몸무게 -1 => Reducer라고 부른다.
function reducer(state = 체중, action) {
  if (action.type === "증가") {
    state++;
    return state;
  } else if (action.type === "감소") {
    state--;
    return state;
  } else {
    return state;
  }
}

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

```jsx
// App.js

import { useDispatch, useSelector } from "react-redux";

function App() {
  // 이것도 redux 라이브러리 사용법이기 때문에 복붙.
  // 이거 한줄만 있으면 모든 component가 props없이 데이터(state)를 쉽게 직접 꺼낼 수 있다.
  const 꺼내온거 = useSelector(state => state); // 100임

  // Q : component에 state 수정 요청하려면?
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>님의 처참한 몸무게 : {꺼내온거}</p> {/* 100임 */}
      {/* A : dispatch를 씁니다. */}
      <button onClick={() => { dispatch({ type: "증가" }) }}>
        더하기
      </button>
    </div>
  );
}

export default App;
```

참고 : [codingapple](https://youtu.be/QZcYz2NrDIs)
