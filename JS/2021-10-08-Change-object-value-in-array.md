## How to change value of object

```jsx
const students = [
    {
        name: "john",
        major: "business",
    },
    {
        name: "ellie",
        major: "statistics",
    },
    {
        name: "jennifer",
        major: "visual design",
    },
];

/* ellie의 전공을 computer science로 바꾸기 */

for (let i = 0; i < students.length; i++) {
    if (students[i].name === "ellie") {
        students[i].major = "computer science";
    }
}

/* students 정보를 출력해 제대로 수정되었는지 확인 */

for (let i = 0; i < students.length; i++) {
    document.write(`${students[i].name}'s major: ${students[i].major}`, "<br>");
}
```
