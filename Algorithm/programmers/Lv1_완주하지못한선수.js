// https://school.programmers.co.kr/learn/courses/30/lessons/42576

// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant 와 완주한 선수들의 이름이 담긴 배열 completion 이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

const participant = ["leo", "kiki", "eden"];
const completion = ["eden", "kiki"]; // "leo"
// const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
// const completion = ["josipa", "filipa", "marina", "nikola"]; // "vinko"
// const participant = ["mislav", "stanko", "mislav", "ana"];
// const completion = ["stanko", "ana", "mislav"]; // "mislav"

// 1.
function solution(participant, completion) {
    participant.sort();
    completion.sort();

    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}

console.log(solution(participant, completion));

// 2.
function solution2(participant, completion) {
    const map = new Map();

    for (let i = 0; i < participant.length; i++) {
        const a = participant[i];
        const b = completion[i];

        // if (map.has(a)) {
        //     map.set(a, map.get(a) + 1);
        // } else {
        //     map.set(a, 1);
        // }

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for (const [key, value] of map) {
        if (value > 0) return key;
    }
}

console.log(solution2(participant, completion));
