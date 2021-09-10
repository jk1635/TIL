from collections import deque

def solution(priorities, location):
    answer = 0
    d = deque((v, i) for i, v in enumerate(priorities))

    while d:
        nowlist = d.popleft()
        if len(d) != 0:
            if nowlist[0] < max(d)[0]:
                d.append(nowlist)
            else:
                answer += 1
                if nowlist[1] == location:
                    break
        else:
            answer += 1
            if nowlist[1] == location:
                break

    return answer

# print(solution([1, 1, 9, 1, 1, 1], 0))