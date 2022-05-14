# Object&#44; Function&#44; Conditional

## Object

- argument(인자)
- NaN : Not a Number(숫자가 아님)
- function은 어떤 코드를 캡슐화해서, 실행을 여러 번 할 수 있게 해준다
- Object는 Property를 가진 데이터를 저장한다
- Array : `[]`, Object : `{}`

  - function 안에서 data를 받는 방법

    ```jsx
    function sayHello(nameOfPerson, age) {
      console.log("Hello my name is" + nameOfPerson + " and I'm " + age);
    }

    sayHello("J", 10);
    sayHello("lala", 23);
    sayHello("lulu", 21);

    // Hello my name isJ and I'm 10
    // Hello my name islala and I'm 23
    // Hello my name islulu and I'm 21

    console.log();
    Array.push();
    alert();

    // ()가 function을 실행하는 방법
    ```

    ```jsx
    const player = {
      name: "J",
      sayHello: function (otherPersonsName) {
        console.log("hello " + otherPersonsName + " nice to meet you!");
      },
    };

    console.log(player.name);
    player.sayHello("lala");

    // J
    // hello lala nice to meet you!
    ```

- 간단한 계산기

  ```jsx
  function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
  }

  function divide(a, b) {
    console.log(a / b);
  }

  plus(60, 8);
  divide(98, 20);

  // 68
  // 4.9
  ```

- object 만드는 법

  ```jsx
  const player = {
    name: "J",
    age: 98,
  };

  console.log(player, console);

  // > {name: "J", age: 98}
  // > console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}
  // f는 function(함수), 위 아래 둘 다 object

  console.log(player);
  player.name = "lulu";
  console.log(player);
  player.sexy = "soon";
  console.log(player);

  // > {name: "J", age: 98}
  // > {name: "lulu", age: 98}
  // > {name: "lulu", age: 98, sexy: "soon"}
  ```

## Function

- 함수란 어떤 일을 수행하고 그 결과를 알려주는 것

  - return을 함으로써, function을 호출하는 코드가 98이 된다
  - function이 function의 밖과 소통하는 방법

  ```jsx
  const age = 96;
  function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
  }

  const krAge = calculateKrAge(age);

  console.log(krAge);

  // 98
  ```

- 다음과 같이 console.log를 사용하지 말자

  - console.log

    ```jsx
    const calculator = {
      plus: function (a, b) {
        console.log(a + b);
      },
      minus: function (a, b) {
        console.log(a - b);
      },
      times: function (a, b) {
        console.log(a * b);
      },
      divide: function (a, b) {
        console.log(a / b);
      },
      power: function (a, b) {
        console.log(a ** b);
      },
    };

    calculator.plus(2, 3);
    calculator.minus(2, 3);
    calculator.times(2, 3);
    calculator.divide(2, 3);
    calculator.power(2, 3);

    // console.log 값은 출력이 되나 Result값들은 undefined(정의안됨)으로 나온다
    5;
    -1;
    6;
    0.6666666666666666;
    8;

    plusResult;
    undefined;
    minusResult;
    undefined;
    timesResult;
    undefined;
    divideResult;
    undefined;
    powerResult;
    undefined;
    ```

  - return

    ```jsx
    const calculator = {
      plus: function (a, b) {
        return a + b;
      },
      minus: function (a, b) {
        return a - b;
      },
      times: function (a, b) {
        return a * b;
      },
      divide: function (a, b) {
        return a / b;
      },
      power: function (a, b) {
        return a ** b;
      },
    };

    const plusResult = calculator.plus(2, 3);
    const minusResult = calculator.minus(plusResult, 3);
    const timesResult = calculator.times(10, minusResult);
    const divideResult = calculator.divide(timesResult, plusResult);
    const powerResult = calculator.power(divideResult, minusResult);

    // console.log(plusResult);
    // 5

    // return을 했기 때문에 consolo.log없이 console창에 변수를 입력하면 값이 출력된다
    plusResult;
    5;
    minusResult;
    2;
    timesResult;
    20;
    divideResult;
    4;
    powerResult;
    16;
    ```

- return을 하면, function은 작동을 멈추고 결과 값을 return하고 끝난다

  ```jsx
  const calculator = {
    plus: function (a, b) {
      console.log("hello"); // 작동한다
      return a + b; // return으로 function 종료
      console.log("bye bye"); // 작동하지 않는다
    },
  };
  ```

## Conditional

- 조건문 기본 형식

  ```jsx
  if (condition) {
    /// condition === true
  } else {
    /// condition === false
  }

  if (false) {
    console.log("hi");
  } else {
    console.log("bye");
  }

  // bye

  if (8 > 10) {
    console.log("hi");
  } else if (8 < 10) {
    console.log("hello");
  } else {
    console.log("bye");
  }

  // hello
  ```

  ### prompt

  - prompt는 사용자에게 창을 띄울 수 있도록 해준다
  - 사용자에게 message를 보여주고, 값을 넣으라고 알려준다(string)
  - javascript의 코드의 실행을 멈추게 한다
  - 안쓰는 이유는 css도 적용이 안되고, 옛날 방식이다. javascript의 유물

  ### parseInt

  - string을 number로 변환

    ```jsx
    const age = prompt("How old are you?");
    // 15

    console.log(age, parseInt(age));
    // 15 15
    // string number
    // number로 바꾸어야만 다른 수와 비교할 수 있다

    const age = prompt("How old are you?");
    // asdf

    console.log(age, parseInt(age));
    // asdf NaN
    ```

  ### isNaN

  - NaN인지 판별하기
  - isNaN은 boolean(참or거짓)을 반환

  ```jsx
  const age = prompt("How old are you?");
  console.log(isNaN(age));

  // 15 임력하면 false
  // asdf 입력하면 true
  ```

  ### AND operator && , OR operator ||

  ```jsx
  // AND operator(연산자) 둘 다 true여야 한다
  true && true === true;
  false && true === false;
  true && false === false;
  false && false === false;

  // OR operator(연산자) || 둘 중 하나만 true
  true || true === true;
  false || true === true;
  true || false === true;
  false || false === false;
  ```

- 음주 나이 계산기

  ```jsx
  const age = prompt("How old are you?");

  if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number.");
  } else if (age < 18) {
    console.log("You are too young.");
  } else if (age >= 18 && age <= 50) {
    console.log("You can drink.");
  } else if (age > 50 && age <= 80) {
    console.log("You should exercise.");
  } else if (age > 80) {
    console.log("You can do whatever you want.");
  }
  ```
