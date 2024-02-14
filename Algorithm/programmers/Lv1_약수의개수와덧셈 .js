// https://school.programmers.co.kr/learn/courses/30/lessons/77884

// 두 정수 left와 right가 매개변수로 주어집니다. left 부터 right 까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

const left = 13;
const right = 17; // 43
// const left = 24;
// const right = 27; // 52

function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                count++;
            }
        }
        answer += count % 2 === 0 ? i : -i;
    }
    return answer;
}

console.log(solution(left, right));
