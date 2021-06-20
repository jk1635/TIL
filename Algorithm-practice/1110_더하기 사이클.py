n = origin = int(input())
count = 0
while True:
    a = n // 10
    b = n % 10
    c = a + b
    count += 1
    n = int(str(n % 10) + str(c % 10))
    if(n == origin):
        break

print(count)