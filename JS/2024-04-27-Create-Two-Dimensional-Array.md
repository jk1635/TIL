# Create Two Dimensional Array in JavaScript

## Issue
- 틱택토 게임을 만들기 위해 2차원 배열을 생성해야 한다.
- 두가지 메서드 Array.fill과 Array.from를 비교하여, 어떤 방법으로 배열을 생성하는 것이 좋을지 알아보고자 한다.

## Solution

### 1. 1차원 배열 생성하기

- **Array.fill**
  - 배열의 인덱스 범위 내에 있는 모든 요소를 정적 값으로 변경하고 수정된 배열을 반환하는 메서드

    ```typescript
    let row = new Array(3).fill(null); // [null, null, null]
    ```

- **Array.from**
  - 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운 Array 객체를 만들어주는 메서드

      ```typescript
      let row = Array.from({ length: 3 }, () => null); // [null, null, null]
      ```

- 추가
  - **for loop**
      ```typescript
      let row = [];
      for (let i = 0; i < 3; i++) {
          row.push(null);
      }
      // [null, null, null]
      ```

  - **spread syntax**
      ```typescript
      let row = [...Array(3)].map(() => null); // [null, null, null]
      ```

### 2. 2차원 배열 생성하기

- **Array.fill**
  - 2차원 배열을 생성할 때 Array.fill을 사용하면, 모든 행이 동일한 주소 값(참조)을 갖고 있기 때문에 다음과 같은 참조 문제가 발생한다.
      ```typescript
      let board = new Array(3).fill(new Array(3).fill(null));
      board[0][0] = 'O';
      console.log(board); // [['O', null, null], ['O', null, null], ['O', null, null]]
      ```

- **Array.from**
  - Array.from을 사용하면, 각 행마다 독립된 배열을 생성하므로 참조 문제가 발생하지 않는다.

    ```typescript
    let board = Array.from({ length: 3 }, () => new Array(3).fill(null));
    board[0][0] = 'O';
    console.log(board); // [['O', null, null], [ null, null, null], [ null, null, null]]
    ```
    
    ```typescript
    let board = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => null));
    board[0][0] = 'O';
    console.log(board); // [['O', null, null], [ null, null, null], [ null, null, null]]
    ```

참고 : [mozilla-fill](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill), [mozilla-from](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [4-Ways-to-Populate-an-Array
](https://medium.com/@wisecobbler/4-ways-to-populate-an-array-in-javascript-836952aea79f), [javascript-fill-array](https://dmitripavlutin.com/javascript-fill-array/), [Array.fill-vs-Array.from](https://bttrthn-ystrdy.tistory.com/65), [Array.fill-2d](https://jiwoo84.tistory.com/m/73),[2d-in-js](https://nyagm.tistory.com/160), [desc-Array.from](https://mine-it-record.tistory.com/621)