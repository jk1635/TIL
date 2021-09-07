# 정수(0 ~ 100) 1개를 입력받아 0부터 그 수까지 순서대로 출력해보자.
# 0부터 그 수까지 줄을 바꿔 한 개씩 출력한다.

# 1.
n= int(input())

for i in range(n+1):
    print(i)

# 2.
n = int(input())

while i <= n:
    print(i)
    i += 1