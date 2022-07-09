# Counting Up Animation using React Hooks

### Result

![usecountup-gif](https://i.imgur.com/JDUnH65.gif)

### useCountUp.js

```js
import { useState, useEffect, useRef } from "react";

// 변수 x는 0 (움직임의 시작)에서 1 (움직임의 끝) 사이의 움직임 진척도
function easeOut(x) {
  return 1 - Math.pow(1 - x, 100); // easeOutQuint의 변형
}

const useCountUp = (start, end, duration) => {
  const [count, setCount] = useState(start);
  const percentRef = useRef(0); // end까지 몇 퍼센트 진행될 지 저장
  const timeIdRef = useRef(null); // 조건이 되면 clear하기 위한 setInterval id 값

  useEffect(() => {
    timeIdRef.current = setInterval(() => {
      percentRef.current += 0.00075 / duration; // 진행도를 조금씩 올린다.
      setCount(prevCount => {
        if (prevCount >= end) {
          // 이전 카운트 값이 end에 도달하거나 더 커지면 Interval은 멈춘다.
          clearInterval(timeIdRef.current);
          return prevCount;
        }
        return Math.round(end * easeOut(percentRef.current));
        // end로부터 몇퍼센트가 되었는지 출력
      });
    }, 10); // Interval을 안쓰면 너무 빨리 끝난다.
  }, [start, end, duration]);

  return count;
};

export default useCountUp;
```

### App.js

```js
import React from "react";
import useCountUp from "./useCountUp";

// 순서대로 start(시작 번호), end(마지막 번호), duration(s)을 작성한다.
function App() {
  const officesCount = useCountUp(0, 100, 2);
  const usersCount = useCountUp(0, 1000, 2);
  const awardsCount = useCountUp(0, 750, 2);

  return (
    <div>
      <h1>{officesCount}</h1>
      <h1>{usersCount}</h1>
      <h1>{awardsCount}</h1>
    </div>
  );
}

export default App;
```
