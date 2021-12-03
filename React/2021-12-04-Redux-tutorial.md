# Redux tutorial

## counter

세팅 : redux, react-redux

### src

```jsx
// index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import allReducer from "./reducers";
import { Provider } from "react-redux";

const mystore = createStore(
  allReducer,
  // [redux-devtools-extension](With Redux/Basic store)
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={mystore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

```jsx
// App.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      {/* <button onClick={() => dispatch(increment())}>+</button> */}
      <button onClick={() => dispatch(increment(5))}>+5</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ""}
    </div>
  );
}

export default App;
```

### reducers

```jsx
// reducers/counter.js

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    // case "INCREMENT":
    //   return state + 1;
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
```

```jsx
// reducers/isLogged.js

const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;
```

```jsx
// reducers/index.js

import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

// 개발자 도구 창의 Redux-> State-> Tree 에서
// 다음과 같은 내용을 확인할 수 있다.
// counter(pin):0
// isLogged(pin):false

export default allReducers;
```

### actions

```jsx
// actions/index.js

// export const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };
export const increment = multiply => {
  return {
    type: "INCREMENT",
    payload: multiply,
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
```

참고 : [Redux](https://youtu.be/CVpUuw9XSjY)
