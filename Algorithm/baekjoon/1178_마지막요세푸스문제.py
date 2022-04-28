# 요세푸스 문제와 동일
# 메모리 제한 128MB

# N과 K가 주어지면, 마지막으로 남는 사람의 번호를 구하는 프로그램을 작성하시오.

# 예제 입력 1
# 7 3

# 예제 출력 1
# 4

# 1. 메모리 초과
import sys
from collections import deque

n, k = map(int, sys.stdin.readline().split())
dq = list(range(1, n+1))
dq = deque(dq)

while dq:
    for _ in range(k-1):
        cur = dq.popleft()
        dq.append(cur)
    dq.popleft()
    if len(dq) == 1:
        print(dq[0])
        break
