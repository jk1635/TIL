# Fading Animation using React Hooks

### Result

![usefadein-gif](https://i.imgur.com/I1sBptk.gif)

### useFadeIn.js

```js
import { useEffect, useRef } from "react";

const useFadeIn = (delay, duration, position) => {
  const element = useRef(null);

  const handleDelay = name => {
    switch (name) {
      case "first":
        return "0s";
      case "second":
        return "0.2s";
      case "third":
        return "0.4s";
      default:
    }
  };

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transitionProperty = "all";
      current.style.transitionDuration = `${duration}s`;
      current.style.transformDelay = handleDelay(delay);
      current.style.transform = `translateY(0)`;
      current.style.opacity = 1;
    }
  }, [delay, duration, position]);

  return {
    ref: element,
    style: {
      transitionDelay: handleDelay(delay),
      transform: `translateY(${position}px)`,
      opacity: 0,
    },
  };
};

export default useFadeIn;
```

### App.js

```js
import React from "react";
import useFadeIn from "./useFadeIn";

// 순서대로 delay(first, second, third), duration(s), position(px)을 작성한다.
function App() {
  return (
    <>
      <div {...useFadeIn("first", 0.7, 20)}>
        <h1>First Box</h1>
      </div>
      <div {...useFadeIn("second", 0.7, 20)}>
        <h1>Second Box</h1>
      </div>
      <div {...useFadeIn("third", 0.7, 20)}>
        <h1>Third Box</h1>
      </div>
    </>
  );
}

export default App;
```
