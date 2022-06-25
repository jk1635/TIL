# Counter using redux-toolkit

## Counter

세팅 : @reduxjs/toolkit, react-redux

```jsx
// index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

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

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/counter";

function App() {
  // const [count, setCount] = React.useState(0);
  const count = useSelector(state => state.counter.value); // store.js의 counter
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>Counter {count}</h1>
      {/* <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button> */}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}

export default App;
```

### redux

```jsx
// redux/counter.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
```

```jsx
// redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

## More Simple Example

```jsx
// index.js

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import store from "./store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
```

```jsx
// App.js

import React from "react";
import { useSelector } from "react-redux";

function App() {
  // Redux store 가져와 준다. (꺼내쓰는 법)
  let a = useSelector(state => {
    // return state;
    return state.user;
  }); // Redux에 있던 state 남음

  console.log(a);
  // console.log(a.user);  // kim
  // console.log(a.stock);  // [10, 11, 12]

  return <div>App</div>;
}

export default App;
```

### redux

```jsx
// store.js

import { configureStore, createSlice } from "@reduxjs/toolkit";

// useState 역할
// state 하나를 slice라고 부른다.
let user = createSlice({
  // name: "state 이름",
  // initial: "값",
  name: "user",
  initialState: "kim",
});

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

// 등록
export default configureStore({
  reducer: {
    // 작명 : user.reducer
    user: user.reducer,
    stock: stock.reducer,
  },
});
```

참고 : [redux-toolkit](https://redux-toolkit.js.org/tutorials/quick-start)
