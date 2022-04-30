'''
소수 구하기

M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.

출력
한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.

예제 입력 1 
3 16

예제 출력 1 
3
5
7
11
13
'''

# 1.
m, n = map(int, input().split())

a = []
b = []

for i in range(1, n):
    for j in range(2, i+1):
        if i == j:
            a.append(i)
        elif i % j == 0:
            break

for i in range(1, m):
    for j in range(2, i+1):
        if i == j:
            b.append(i)
        elif i % j == 0:
            break

c = sorted(set(a) - set(b))

for d in c:
    print(d)

# 2. 에라토스테네스의 체
m, n = map(int, input().split())

check = [0] * (n+1)
ans = []

# print(check)
for i in range(2, n+1):
    if check[i] == 0:
        for j in range(i, n+1, i):
            check[j] = 1
        if i >= m:
            ans.append(i)
# print(ans) # [3, 5, 7, 11, 13]
for i in ans:
    print(i)
