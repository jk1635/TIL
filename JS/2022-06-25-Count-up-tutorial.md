# Counting Animation

## 1. 버튼 클릭시 카운팅

```js
// CountUp.js

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
      <button type='button' className='startBtn'>
        더하기 시작
      </button>
      <h1 class='num'>0</h1>
    </div>
  );
};

export default CountUp;
```

## 2. 원하는 숫자까지 카운팅

```js
// App.js

import React from "react";

const App = () => {
  const coffee = setInterval(CoffeeNum, 10);
  const juice = setInterval(JuiceNum, 10);
  const tea = setInterval(TeaNum, 10);
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  function CoffeeNum() {
    count1++;
    document.querySelector("#number1").innerHTML = count1;
    if (count1 === 700) {
      clearInterval(coffee);
    }
  }
  function JuiceNum() {
    count2++;
    document.querySelector("#number2").innerHTML = count2;
    if (count2 === 100) {
      clearInterval(juice);
    }
  }
  function TeaNum() {
    count3++;
    document.querySelector("#number3").innerHTML = count3;
    if (count3 === 470) {
      clearInterval(tea);
    }
  }
  return (
    <div>
      <span id='number1' className='number1'>
        700
      </span>
      <span id='number2' className='number2'>
        800
      </span>
      <span id='number3' className='number3'>
        900
      </span>
    </div>
  );
};

export default App;
```

## 3. 원하는 숫자까지 카운팅 - 동일하게 종료

```js
// App.js

function App() {
  window.onload = function () {
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
      counter.innerText = "0";

      const updateCounter = () => {
        const target =  .getAttribute("data-target");
        const c = +counter.innerText;

        const increment = target / 250;

        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  };
  return (
    <>
      <div className='counter' data-target='5000'>
        5000
      </div>
      <div className='counter' data-target='1500'>
        1500
      </div>
      <div className='counter' data-target='3000'>
        3000
      </div>
    </>
  );
}

export default App;
```

[source2](https://www.youtube.com/watch?v=CQFgmBhwuN0&t=468s), [3](https://www.youtube.com/watch?v=283-YReCRYM)
