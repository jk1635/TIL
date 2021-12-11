# How to prevent Google Colab from disconnecting on a timeout

## PROBLEM

Google colab 사용시 일정한 시간이 지나면 자동으로 연결이 끊기는 문제

## SOLUTION

1. colab 맨 아래에 새로운 셀을 만들고 다음과 같은 코드를 추가한다. 무한 루프가 도는 셀을 추가해 세션을 활성화 하는 방법이다.

```py
while True:pass
```

2. `F12` 클릭 후 `Console`에 다음과 같이 작성한다.

```js
function ClickConnect() {
  console.log("Working");
  document.querySelector("colab-toolbar-button#connect").click();
}

setInterval(ClickConnect, 900000);
```

참고 : [stackoverflow](https://stackoverflow.com/questions/57113226/how-to-prevent-google-colab-from-disconnecting)
