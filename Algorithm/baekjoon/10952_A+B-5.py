# A+B를 출력하는 프로그램을 작성하시오.
# 입력의 마지막에는 0 두 개가 들어온다.

# 예제 입력
# 1 1
# 2 3
# 3 4
# 9 8
# 5 2
# 0 0

# 예제 출력
# 2
# 5
# 7
# 17
# 7

while True:
    a, b = map(int, input().split())
    if a == 0 and b == 0:
        break
    else:
        print(a+b)
