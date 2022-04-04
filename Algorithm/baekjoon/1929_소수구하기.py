m, n = map(int, input().split())

a = []
b = []

for i in range(1,n):
    for j in range(2, i+1):
        if i == j:
            a.append(i)
        elif i % j == 0:
            break

for i in range(1,m):
    for j in range(2, i+1):
        if i == j:
            b.append(i)
        elif i % j == 0:
            break

c = sorted(set(a) - set(b))

for d in c:
    print(d)
