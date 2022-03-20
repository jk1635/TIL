# Dropdown using Styled-Components

### App.js

```jsx
import React from "react";
import styled from "styled-components";

import DropDown from "./DropDown";

function App() {
  return (
    <Wrapper>
      <DropDown />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;
```

### DropDown.jsx

```jsx
import React, { useRef } from "react";
import styled from "styled-components";
import useDetectOutsideClick from "./useDetectOutsideClick";

const DropDown = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <MenuContainer>
      <TriggerButton onClick={onClick}>
        <Image
          src='https://mblogthumb-phinf.pstatic.net/20141020_84/ribbonchick_1413740254883HpC05_JPEG/01.jpg?type=w420'
          alt='arrow'
        />
      </TriggerButton>

      <Nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <MenuList>
          <Item>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim earum
            at, quaerat odio facere ea repellat, adipisci vitae dolores omnis,
            aliquid magni recusandae deserunt provident delectus esse debitis
            dignissimos reprehenderit.
          </Item>
          {/* <Item>
            <a href='main'>main</a>
          </Item>
          <Item>
            <a href='mypage'>mypage</a>
          </Item>
          <Item>
            <a href='team'>team</a>
          </Item> */}
        </MenuList>
      </Nav>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  position: relative;
`;

const TriggerButton = styled.button`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
`;

const Image = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 90px;
`;

const Nav = styled.nav`
  width: 20rem;
  position: absolute;
  top: 100%;
  left: 50%;
  visibility: hidden;
  transform: translateX(-50%);
  border-radius: 8px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  &.menu.active {
    opacity: 1;
    visibility: visible;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  border-bottom: 1px solid #dddddd;
  text-decoration: none;
  color: #333333;
  padding: 15px 20px;
  display: block;
`;

export default DropDown;
```

### useDetectOutsideClick.js

```jsx
import { useState, useEffect } from "react";

/**
 * Hook for handling closing when clicking outside of an element
 * @param {React.node} el
 * @param {boolean} initialState
 */
const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = e => {
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks outside
    if (isActive) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};

export default useDetectOutsideClick;
```
