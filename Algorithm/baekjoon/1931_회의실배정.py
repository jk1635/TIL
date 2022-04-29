'''
예제 입력 1
11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14
예제 출력 1
4
'''
n = int(input())
meeting = []

for i in range(n):
    s, e = map(int, input().split())
    meeting.append((s, e))
    # print(meeting)
    # 끝나는 시간(두번째 요소)으로 오름차순으로 sort # [(1, 4), (3, 5), (0, 6), (5, 7), (3, 8), (5, 9), (6, 10), (8, 11), (8, 12), (2, 13), (12, 14)]
    meeting.sort(key=lambda x: x[1])
    # meeting.sort(key=lambda x: (x[1],x[0])) # [(1, 4), (3, 5), (0, 6), (5, 7), (3, 8), (5, 9), (6, 10), (8, 11), (8, 12), (2, 13), (12, 14)]
    # print(meeting)

end_time = 0
cnt = 0

for s, e in meeting:
    if s >= end_time:
        end_time = e
        cnt += 1
print(cnt)
