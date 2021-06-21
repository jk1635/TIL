import math

array = [i for i in range(123456 * 2 + 1)]

for i in range(2, int(math.sqrt(123456 * 2)) + 1):
    if array[i] != 0:
        for j in range(i*2, 123456 * 2 + 1, i):
            array[j] = 0

prime_list = sorted(list(set(array)))

while True:
    n = int(input())
    if n == 0:
        break

    count = 0
    for prime in prime_list:
        if prime > n and prime <= 2*n:
            count += 1
    print(count)