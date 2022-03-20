# 모달 구현 중 발생한 z-index 이슈

## 이슈

- `z-index`가 적용 안되어 모달이 background 뒤에 뜨는 이슈 발생

## 원인

- `position`이 fixed인 부모 안에 또다른 fixed인 자식 element가 있어서 `z-index`가 의도대로 적용되지 않았다.

```jsx
// Header.js

<Container>
  (...)
  {props.page === "headermenu" ? (
    <Nav>
      <Item
        onClick={() => {
          setModalOpen(true);
        }}
      >
        로그인
      </Item>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </Nav>
  ) : null}
  (...)
</Container>;

const Container = styled.header`
  position: fixed;
  top: 5rem;
  left: 0;
  z-index: 20;
`;
```

```jsx
// Navbar.js

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
`;
```

## 해결 방법

```jsx
// Header.js

<>
  <Container>
    (...)
    {props.page === "headermenu" ? (
      <Nav>
        <Item
          onClick={() => {
            setModalOpen(true);
          }}
        >
          로그인
        </Item>
      </Nav>
    ) : null}
    (...)
  </Container>
  {modalOpen && <Modal setOpenModal={setModalOpen} />}
</>
```
