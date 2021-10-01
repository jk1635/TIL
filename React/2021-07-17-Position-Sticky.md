## Position Stiky

Form의 position을 sticky로 지정 후 top 속성을 0으로 주어 스크롤바가 내려가면 따라오게 한다.


```jsx
// SearchBar.js

const SearchBar = () => {
  return (
    <Container>
      <Form>
        <Input></Input>
        <Button>버튼
        </Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  background-color: blue;
  display: flex;
  box-sizing: border-box;
  padding: 10px 5%;
  position: sticky; //*
  top: 0;           //*
  z-index: 1000;    //*
  & * {
    box-sizing: border-box;
  }
  justify-content: flex-end;
`;

```

```jsx
//App.js

function App() {
  return (
    <AppDiv>
      <ConnectedRouter history={history}>
        <Header />
        <SearchBar />
      </ConnectedRouter>
    </AppDiv>
  );
};

// 스크롤+헤더 테스트 삼아 넣어 둔 거라 삭제해도 된다.
const AppDiv = styled.div`
  height: 200vh;
`;

```
