# 팩토리얼

# 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.

# 예제 입력 1
# 10
# 예제 출력 1
# 3628800

# 예제 입력 2
# 0
# 예제 출력 2
# 1

def factorial(x):
    if x > 0:
        return x * factorial(x-1)
    else:
        return 1


n = int(input())
print(factorial(n))
