// https://school.programmers.co.kr/learn/courses/30/lessons/12910?language=javascript

// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

const arr = [5, 9, 7, 10];
const divisor = 5; // [5, 10]
// const arr = [2, 36, 1, 3];
// const divisor = 1; // [1, 2, 3, 36]
// const arr = [3, 2, 6];
// const divisor = 10; // [-1]

function solution(arr, divisor) {
    const answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            answer.push(arr[i]);
        }
    }

    if (answer.length === 0) {
        return [-1];
    }

    return answer.sort((a, b) => a - b);
}

console.log(solution(arr, divisor));