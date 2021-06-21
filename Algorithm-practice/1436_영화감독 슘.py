n = int(input())
a = 666

while(n):      # n > 0이면 탈출
    if '666' in str(a):
        n -= 1
    a += 1

print(a - 1)