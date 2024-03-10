// https://school.programmers.co.kr/learn/courses/30/lessons/120846

// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

const n = 10; // 5
// const n = 15; // 8

function solution(n) {
    let answer = 0;
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                answer++;
                break;
            }
        }
    }
    return answer;
}

console.log(solution(n));
