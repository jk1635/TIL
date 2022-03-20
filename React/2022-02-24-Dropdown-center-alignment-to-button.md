# 버튼 클릭시 드롭다운이 가운데로 가지 않는 이슈

## 이슈

- 버튼 클릭시 드롭다운이 가운데로 가지 않는 문제

```jsx
<MenuContainer>
  <TriggerButton onClick={onClick}>
    <Image />
  </TriggerButton>

  <Nav ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
    <MenuList>
      <Item>
        이것은 병아리다. 알에서 태어난 병아리는 곧 닭이 된다. 닭은 곧 알을 낳고,
        그 알은 또 부화한다.
      </Item>
    </MenuList>
  </Nav>
</MenuContainer>;

const MenuContainer = styled.div``;

const TriggerButton = styled.button`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
`;

const Nav = styled.nav`
  width: 10rem;
  position: absolute;
  visibility: hidden;
  transform: translateY(-20px);
  &.menu.active {
    opacity: 1;
    visibility: visible;
  }
`;
```

## 해결 방안

- 부모 요소에 `relative`를 주고, 자식 요소에 `absolute`를 둔다. `top`에 `100%`, `left`에 `50%`, `transform`에 `translateX(-50%)`을 적용한다.

```jsx
<MenuContainer>
  <TriggerButton onClick={onClick}>
    <Image />
  </TriggerButton>

  <Nav ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
    <MenuList>
      <Item>
        이것은 병아리다. 알에서 태어난 병아리는 곧 닭이 된다. 닭은 곧 알을 낳고,
        그 알은 또 부화한다.
      </Item>
    </MenuList>
  </Nav>
</MenuContainer>;

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

const Nav = styled.nav`
  width: 10rem;
  position: absolute;
  top: 100%;
  left: 50%;
  visibility: hidden;
  transform: translateX(-50%);
  &.menu.active {
    opacity: 1;
    visibility: visible;
  }
`;
```

참고 : [description](https://stackoverflow.com/questions/60362442/cant-center-absolute-position-tailwind-css), [sample](https://stackoverflow.com/questions/39993336/dropdown-center-alignment-to-button)
