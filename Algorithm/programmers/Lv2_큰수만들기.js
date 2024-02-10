// https://school.programmers.co.kr/learn/courses/30/lessons/42883

// 어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.
// 예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.
// 문자열 형식으로 숫자 number 와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number 에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

const number = "1924";
const k = 2; // "94"
// const number = "1231234";
// const k = 3; // "3234"
// const number = "4177252841";
// const k = 4; // "775841"
// const number = "654312";
// const k = 2; // "6543"

function solution(number, k) {
    const stack = [];

    for (const num of number) {
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] < num) {
            stack.pop();
            k -= 1;
        }
        stack.push(num);
    }

    if (k > 0) {
        stack.pop();
    }

    return stack.join("");
}

console.log(solution(number, k));