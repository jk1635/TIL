# Promise
Promise는 객체의 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타낸다.</br>

Promise는 생성하고 종료될 때까지 다음 중 하나의 상태(State)를 갖는다.</br>

- Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
- Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
- Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

## Promise 에러 처리 방법

1. then()의 두 번째 인자로 에러를 처리하는 방법</br>
2. catch()를 이용하는 방법

```jsx
function getData() {
  return new Promise(function(resolve, reject) {
    reject('failed');
  });
}

// 1. then()의 두 번째 인자로 에러를 처리하는 방법
getData().then(function() {
  // ...
}, function(err) {
  console.log(err);
});

// 2. catch()로 에러를 처리하는 방법
getData().then().catch(function(err) {
  console.log(err);
});
```
Promise 에러는 가급적 catch()로 처리하는 것이 효율적이다.

## Promise example
```jsx
"use strict";
// Promise is a JavaScript object for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
// 새로운 promise가 만들어 질때는, 우리가 전달한 executor라는 콜백함수가 바로 자동적으로 실행이 된다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  // resolve 기능을 정상적으로 수행해서 마지막에 최종 데이터를 전달하는 콜백함수
  // reject 기능을 수행하다가 중간에 문제가 생기면 호출하게 될 콜백함수
  console.log("doing something...");
  setTimeout(() => {
    // resolve('ellie');
    reject(new Error("no network"));
    //reject는 보통 error라는 오브젝트를 통해서 값을 전달, 어떤 에러가 발생했는지 이유를 잘 명시해야 한다.
    // 기능을 잘 수행했어! 라고 한다면 resolve라는 콜백함수를 호출하면 된다.
  }, 2000);
});

// 2. Consumers: then, catch, finally로 값을 받아 올 수 있다.
promise
  .then(value => {
    console.log(value);
  })
  // then은 promise가 정상적으로 잘 수행돼서 마지막을 최종적으로 resolve라는 콜백함수를 통해서 전달한 'ellie'값이 여기 value의 파라미터로 전달되어져서 들어온다.
  .catch(error => {
    console.log(error);
  })
  // catch라는 함수를 이용해서, 에러가 발생했을때 어떻게 처리할 건지 콜백함수를 등록해준다
  // reject(new Error('no network'));과 함께 출력하면 error가 더이상 발생하지 않고, error가 console.log에 출력된다.
  .finally(() => {
    console.log("finally");
  });
// 성공과 실패와 상관없이 무조건 마지막에 호출되어진다.
// 실패했을때도 error 콜백함수가 처리가 되고 나서 finally가 호출된다.
// 성공했을때도 'ellie'라는 성공적인 콜백함수가 호출되고나서 다시 finally가 수행된다.

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
  // 1초 있다가 숫자 1을 전달
});

fetchNumber
  .then(num => num * 2) // 2
  .then(num => num * 3) // 6
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    }); // 새로운 promise를 전달 5가 아래로 전달
    // then은 값을 바로 전달할 수도 있고, promise를 전달해도 된다.
  })
  .then(num => console.log(num)); // 5가 출력

// 4. Error Handling
// 암탉을 받아오는 promise는 1초 있다가 닭을 리턴
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
// 닭을 받아서 에그로 리턴
const getEgg = hen =>
  new Promise((resolve, reject) => {
    //   setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
// 에그를 받아서 프라이드 에그로 리턴
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

// 4-1.
getHen()
  .then(hen => getEgg(hen))
  .then(egg => cook(egg))
  .then(meal => console.log(meal));

// 4-1-1. 위의 코드는 아래와 같이 간단하게 작성이 가능하다. (한가지만 받아서 그대로 전달하는 경우 생략가능)
getHen()
  .then(getEgg)
  .then(cook)
  .then(meal);

// 4-2.
getHen() //
  .then(getEgg)
  .then(cook)
  .then(console.log)
  .catch(console.log);

// 4-3.
getHen() //
  .then(getEgg)
  .catch(error => {
    return "🥐";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
// 계란을 받아오는걸 실패해도 빵을 대신 전달해준다.
// promise chain이 실패하지 않고 결국은 요리가 됐다.
```

참고 : [Dreamcoding Ellie](https://youtu.be/JB_yU6Oe2eE), [source](https://github.com/dream-ellie/learn-javascript), [Captain Pangyo](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/#promise%EA%B0%80-%EB%AD%94%EA%B0%80%EC%9A%94)