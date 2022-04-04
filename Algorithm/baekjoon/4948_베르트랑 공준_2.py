while True:
    n = int(input())

    if n == 0:
        break


    def get_prime_number_under_n(n):
        prime_count = 0
        # i = 소수 후보
        # n이 10이면, [2, 3, 4, 5, 6, 7, 8, 9, 10] (2 이상 n+1 미만)
        for i in range(2, n + 1):
            # i = 3 / j = [2]
            # i = 4 / j = [2, 3]
            # i = 7 / j = [2 ~ 6]
            # i = 10 / j = [2 ~ 9]
            for j in range(2, i):
                if i == j:
                    continue
                if i % j == 0:
                    break
            else:
                # 소수 확정!!!
                prime_count += 1
        return prime_count


    print(get_prime_number_under_n(2 * n) - get_prime_number_under_n(n))