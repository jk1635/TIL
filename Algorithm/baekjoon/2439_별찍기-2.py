# 별 찍기 - 2

# 입력
# 5

# 출력
#     *
#    **
#   ***
#  ****
# *****

N = int(input())

for i in range(1, N + 1):
    print(' '*(N - i) + '*' * i)