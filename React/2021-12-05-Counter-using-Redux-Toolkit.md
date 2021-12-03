# Counter using redux-toolkit

## counter

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
    <div className="App">
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

참고 : [redux-toolkit](https://redux-toolkit.js.org/tutorials/quick-start)