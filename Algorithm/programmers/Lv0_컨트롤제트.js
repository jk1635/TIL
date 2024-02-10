// https://school.programmers.co.kr/learn/courses/30/lessons/120853

// 숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다.
// 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.

const s = "1 2 Z 3"; // 4
// const s = "10 20 30 40"; // 100
// const s = "10 Z 20 Z 1"; // 1
// const s = "10 Z 20 Z"; // 0
// const s = "-1 -2 -3 Z"; // -3

function solution(s) {
    s = s.split(" ");
    for (let i = s.length; i--;) {
        if (s[i] === "Z") {
            s.splice(i - 1, 2);
        }
    }
    return s.reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0);
}

console.log(solution(s));