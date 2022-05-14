# Modal tutorial using hooks

```jsx
// App.js
import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <h1>Modal</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Click
      </button>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default App;
```

```jsx
// ./components/Modal
import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}
```

```css
/* ./components/Modal.css */
.modalBackground {
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 200, 200);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modalContainer {
  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
}

.modalContainer .title {
  display: inline-block;
  text-align: center;
  margin-top: 10px;
}

.titleCloseBtn {
  display: flex;
  justify-content: flex-end;
}

.titleCloseBtn button {
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
}

.modalContainer .body {
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  text-align: center;
}

.modalContainer .footer {
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modalContainer .footer button {
  width: 150px;
  height: 45px;
  margin: 10px;
  border: none;
  background-color: cornflowerblue;
  color: white;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
}

#cancelBtn {
  background-color: crimson;
}
```

참고 : [ModalTutorial](https://youtu.be/ZCvemsUfwPQ)
