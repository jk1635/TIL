# 유클리드 호제법

a, b = map(int, input().split())

# a  b  r
# 32 12 8
# 12 8  4
# 8  4  0

def euclidean(a, b):
    r = a % b
    if r == 0:
        return b
    return euclidean(b, r)

print(euclidean(a, b))

# a, b = map(int, input().split())
# a = list(map(int, input().split()))
