def d(n):
    next = n
    for value in list(str(n)):
        next += int(value)
    return next

excep = []
for count in range(10001):
    excep.append(d(count))

excep.sort()

for count_2 in range(1,10000):
    if count_2 in excep:
            continue
    else:
        print(count_2)