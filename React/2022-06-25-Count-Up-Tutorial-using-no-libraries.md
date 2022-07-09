# Counting Animation using Pure React

- Build animated countup component using pure react and no libraries

```js
// CountUp.js

import React, { useState, useRef, useEffect } from "react";

const CountUp = ({ start = 0, end, timer = 50 }) => {
  const [state, setState] = useState(null);
  const ref = useRef(0);

  const accumulator = end / 200;
  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumulator);
      if (result > end) return setState(end);
      setState(result);
      ref.current = result;
    }
    setTimeout(updateCounterState, timer);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      updateCounterState();
    }
    return () => (isMounted = false);
  }, [end, start]);
  return <div>{state}</div>;
};

export default CountUp;
```

```js
// App.js

import React from "react";
import CountUp from "./CountUp";

function App() {
  return (
    <>
      <div>
        <CountUp end={500} start={300} />
      </div>
    </>
  );
}

export default App;
```

[source](https://www.youtube.com/watch?v=-YgMSgC6zWQ)
