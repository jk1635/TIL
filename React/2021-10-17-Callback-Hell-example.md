# Callback

## Difference between Synchronous and Asynchronous

```jsx
"use strict";

// JavaScript is synchronous.
// Execute the code block by orger after hositing.
// hoisting: var, function declaration.

// Synchronous callback (즉각적으로, 동기적으로 실행하는)
function printImmdiately(print) {
  print();
}

// Asynchronous callback (나중에, 언제 실행될 지 예측할 수 없는)
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

console.log("1"); // 동기
setTimeout(() => { console.log("2"); }, 1000); // 비동기 ('2'는 잠시 빼둔다.)
console.log("3"); // 동기
printImmdiately(() => console.log("hello")); // 동기
printWithDelay(() => console.log("async callback"), 2000); // 비동기

// 출력 순서
// 1
// 3
// hello
// 2
// async callback
```
## Callback Hell

- 가독성이 떨어진다.
- error가 발생한 경우, debugging 해야하는 경우 해결하기 어렵다.

```jsx
// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if ((id === "ellie" && password === "dream") || (id === "coder" && password === "academy")) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}
// getRoles : 사용자가 ellie이면, onSuccess를 호출하면서 name은 ellie이고 role은 admin인 object를 전달해주고,
// ellie가 아니라면, 다시 onError 콜백을 호출하면서 Error의 object를 만들어서 no access라고 전달해준다.

// Structure
// 1. id, password 입력 받아온다.
// 2. 서버에게 login
// 3. 성공적으로 된다면 사용자 id를 다시 받아와 Roles 다시 요청해서 받아온다.
// 4. Roles가 성공적으로 된다면, 사용자의 object인 이름과 role를 출력한다.
const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
      },
      // 사용자의 Roles를 받아온다.
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);
```
## Callback to promise

```jsx
// Callback to promise
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ((id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your passrod");
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
```

참고 : [Dreamcoding Ellie](https://youtu.be/s1vpVCrT8f4), [source](https://github.com/dream-ellie/learn-javascript)