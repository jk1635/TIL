# Dropdown using Styled-Components

```jsx
// DropDown.js

import React, { useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useDetectOutsideClick from "./useDetectOutsideClick";

const DropDown = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <MenuContainer>
      <TriggerButton onClick={onClick}>
        <MenuTitle>Dropdown</MenuTitle>
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
            <Link to='/intro'>intro</Link>
          </Item>
          <Item>
            <Link to='/my'>mypage</Link>
          </Item>
          <Item>
            <Link to='/team'>team</Link>
          </Item>
        </MenuList>
      </Nav>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TriggerButton = styled.button`
  background: var(--white);
  border-radius: 90px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  border: none;
  vertical-align: middle;
  transition: box-shadow 0.4s ease;
  margin-left: auto;
  :hover {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  }
`;

const MenuTitle = styled.span`
  font-weight: 700;
  vertical-align: middle;
  font-size: 14px;
  margin: 0 10px;
`;

const Image = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 90px;
`;

const Nav = styled.nav`
  background: #ffffff;
  border-radius: 8px;
  position: absolute;
  top: 60px;
  right: 0;
  width: 300px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  &.menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
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

```jsx
// useDetectOutsideClick.js

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
