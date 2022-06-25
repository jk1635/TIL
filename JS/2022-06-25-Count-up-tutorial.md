# Counting Animation

```jsx
import React from "react";

const CountUp = () => {
  //타이머, setInterval
  window.onload = function () {
    // 페이지가 로드되면 자동으로 실행되는 전역 콜백 함수
    let num = document.querySelector(".num");
    let button = document.querySelector(".startBtn");

    button.addEventListener("click", function () {
      interval();
    });

    let timer;

    function interval() {
      clearInterval(timer);
      // 반복해서 클릭할 시 중첩이 되기 때문에
      // clear를 사용한다.

      let secNum = 0;
      timer = setInterval(function () {
        secNum++;
        num.innerHTML = secNum;
      }, 10); // 1/10초
    }
  };
  return (
    <div>
      <button type='button' class='startBtn'>
        더하기 시작
      </button>
      <h1 class='num'>0</h1>
    </div>
  );
};

export default CountUp;
```
