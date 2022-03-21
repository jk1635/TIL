# Cards Stack animation using react-spring

## Cards Stack I - auto

### Deck.js

```jsx
import React, { useState } from "react";
import styled from "styled-components";

import { useSprings, animated, to as animatedTo } from "react-spring";
import { useGesture } from "react-use-gesture";

const cards = [
  "https://images.unsplash.com/photo-1597806999047-9456837df754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxOTYxMjYyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1597806999047-9456837df754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxOTYxMjYyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1547407139-3c921a66005c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
];

const to = i => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) =>
  `perspective(5000px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

const Deck = () => {
  const [gone] = useState(() => new Set());
  const [props, set] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2;

      const dir = xDir < 0 ? -1 : 1;

      if (!down && trigger) gone.add(index);

      set(i => {
        if (index !== i) return;
        const isGone = gone.has(index);

        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;

        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);

        const scale = down ? 2 : 1;

        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length)
        setTimeout(() => gone.clear() || set(i => to(i)), 600);
    }
  );

  return (
    <Container>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div
          key={i}
          style={{
            transform: animatedTo(
              [x, y],
              (x, y) => `translate3d(${x}px,${y}px,0)`
            ),
          }}
        >
          <animated.div
            {...bind(i)}
            style={{
              transform: animatedTo([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
            }}
          />
        </animated.div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  overscroll-behavior-y: contain;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: lightblue;
  overflow: hidden;
  user-select: none;
  cursor: url("https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png")
      39 39, auto;
  > div {
    position: absolute;
    width: 250px;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > div > div {
    background-color: white;
    background-size: auto 85%;
    background-repeat: no-repeat;
    background-position: center center;
    width: 230px;
    max-width: 300px;
    height: 370px;
    max-height: 570px;
    will-change: transform;
    border-radius: 10px;
    box-shadow: 0 14px 150px -20px rgba(87, 62, 20, 0.03), 0 10px 10px -20px
        rgba(87, 62, 20, 0.07);
  }
`;

export default Deck;
```

```jsx
// App.js

import React from "react";
import styled from "styled-components";
import Deck from "./Deck";

function App() {
  return (
    <DeckWrapper>
      <Deck />
    </DeckWrapper>
  );
}

const DeckWrapper = styled.div`
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
```

## Cards Stack II

### Deck.js

```jsx
import React, { useState } from "react";
import styled from "styled-components";

import { useSprings, animated, to as interpolate } from "react-spring";
import { useDrag } from "react-use-gesture";

const DeckData = [
  "https://images.unsplash.com/photo-1597806999047-9456837df754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxOTYxMjYyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1563889362352-b0492c224f62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1547407139-3c921a66005c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1610899915396-bc48d106ea19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=641&q=80",
  "https://images.unsplash.com/photo-1616999335501-8cf38168d8ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
  "https://images.unsplash.com/photo-1604848866164-68dbcd654309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
];

const to = i => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

const from = _i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

function shuffleDeckAndSelect3Cards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.splice(0, 3);
}

function Deck() {
  const cards = shuffleDeckAndSelect3Cards(DeckData);
  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;

      const dir = xDir < 0 ? -1 : 1;

      if (!down && trigger) gone.add(index);
      api.start(i => {
        if (index !== i) return;
        const isGone = gone.has(index);

        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;

        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);

        const scale = down ? 1.1 : 1;

        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start(i => to(i));
        }, 600);
    }
  );

  return (
    <Container>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className='deck' key={i} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
            }}
          />
        </animated.div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    position: absolute;
    width: 300px;
    height: 200px;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
    touch-action: none;
  }
  > div > div {
    background-color: white;
    background-size: auto 85%;
    background-repeat: no-repeat;
    background-position: center center;
    width: 45vh;
    max-width: 150px;
    height: 85vh;
    max-height: 285px;
    will-change: transform;
    border-radius: 10px;
    box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px
        rgba(50, 50, 73, 0.3);
  }
`;

export default Deck;
```

```jsx
// App.js

import React from "react";
import styled from "styled-components";
import Deck from "./Deck";

function App() {
  return (
    <DeckWrapper>
      <Deck />
    </DeckWrapper>
  );
}

const DeckWrapper = styled.div`
  background: lightblue;
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100%;
  cursor: url("https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png")
      39 39, auto;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
```

```jsx
// index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

```css
/* style.css */

body {
  margin: 0;
}
```

[useSprings](https://react-spring.io/hooks/use-springs), [tarotDeck](https://codesandbox.io/s/3-card-tarot-reading-by-dr-derek-austin-github-master-forked-m9uhw4?file=/src/index.js)
