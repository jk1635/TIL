# 1만큼씩 줄이면서 카운트다운 수가 0이 될 때까지 한 줄에 1개씩 출력한다.
# 입력 예시 5
# 출력 예시
# 4
# 3
# 2
# 1
# 0

a=int(input())

while a != 0:
    a = a-1
    print(a)