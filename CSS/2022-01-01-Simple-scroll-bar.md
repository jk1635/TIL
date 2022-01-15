# Simple scroll bar

```css
const Scroll = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    /* vertical scroll */
    width: 8px;
    /* horizontal scroll */
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.3)
    border-radius: 6px;
  }
```

```jsx
import React from "react";
import styled from "styled-components";
import HorizontalScroll from "react-scroll-horizontal";

const HorizontalScroll = () => {
  const child = { width: "200px", height: "320px" };
  const parent = { width: "592px", height: "689px" };
  return (
    <Wrapper style={parent}>
      <HorizontalScroll config={{ stiffness: 100, damping: 50 }}>
        <CardGrid>
          <div>
            <img src="https://source.unsplash.com/random" alt="cardimg" style={child} />
          </div>
          <div>
            <img src="https://source.unsplash.com/random" alt="cardimg" style={child} />
          </div>
          <div>
            <img src="https://source.unsplash.com/random" alt="cardimg" style={child} />
          </div>
          <div>
            <img src="https://source.unsplash.com/random" alt="cardimg" style={child} />
          </div>
          <div>
            <img src="https://source.unsplash.com/random" alt="cardimg" style={child} />
          </div>
          <div>
            <img src="https://source.unsplash.com/random" alt="cardimg" style={child} />
          </div>
          <div>
            <img src="https://source.unsplash.com/random" alt="cardimg" style={child} />
          </div>
        </CardGrid>
      </HorizontalScroll>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 40rem;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
`;

const CardGrid = styled.div`
  display: grid !important;
  grid-template-rows: auto auto;
  grid-auto-flow: column;
  > div {
    margin-right: 20px;
  }
`;

export default HorizontalScroll;
```

See [here](https://codesandbox.io/s/jacob-always-scroll-section-0cyel?file=/src/components/scroll/AlwaysScrollSection/AlwaysScrollSection.tsx:240-579) for more details. [+](https://github.com/hew/react-scroll-horizontal)
