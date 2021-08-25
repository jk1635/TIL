a, b, v = map(int, input().split())
day = 0
if (v - b) % (a - b) != 0:
    day = ((v - b) // (a - b)) + 1
else:
    day = ((v - b) // (a - b))
print(day)