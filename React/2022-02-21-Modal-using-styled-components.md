## Modal with styled-components

```jsx
// Modal.js

import React from "react";
import styled from "styled-components";

const Modal = ({ setModalOpen }) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <TitleCloseBtn>
          <Button
            onClick={() => {
              setModalOpen(false);
            }}
          >
            X
          </Button>
        </TitleCloseBtn>
      </ModalContainer>
    </ModalBackground>
  );
};

const ModalBackground = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: lightgray;
  align-items: center;
  z-index: 30;
`;

const ModalContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  display: inline-block;
  text-align: center;
  margin-top: 10px;
`;

const TitleCloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;

export default Modal;
```

```jsx
// Header.js

import React, { useState } from "react";
import styled from "styled-components";

// components
import Modal from "./";

const Header = props => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Container>
        <InsideBox>
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
          >
            로그인
          </Button>
        </InsideBox>
      </Container>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </>
  );
};

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 5rem;
  background-color: white;
`;

const InsideBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Button = styled.button`
  list-style: none;
  margin: 0;
  padding: 0.3rem 2rem;
  color: var(--main);
  cursor: pointer;
`;

export default Header;
```
