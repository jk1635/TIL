# Redux-Persist settings

redux-persist 세팅하기

```jsx
// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
        <GlobalStyle />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
```

```jsx
// redux/store.js
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };
```

```jsx
// redux/root-reducer.js
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// // reducer
// import userReducer from "./user/user.reducer"
// import cartReducer from "./cart/cart.reducer"

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ['cart'],
};

const rootReducer = combineReducers({
  // user: userReducer,
  // cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
```

참고 : [hackr](https://www.youtube.com/watch?v=Fb-bDigImpw&t=219s)
