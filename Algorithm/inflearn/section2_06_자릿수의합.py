'''
자릿수의 합

N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고,
그 합이 최대인 자연수를 출력하는 프로그램을 작성하세요.
각 자연수의 자릿수의 합을 구하는 함수를 def digit_sum(x)를 꼭 작성해서 프로그래밍 하세요.

- 입력설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
각 자연수의 크기는 10,000,000를 넘지 않는다.

- 출력설명
자릿수의 합이 최대인 자연수를 출력한다.
자릿수의 합이 같을 경우 입력순으로 먼저인 숫자를 출력합니다.

- 입력예제 1
3
125 15232 97

- 출력예제 1
97
'''

# 1. 정수형 받아서 몫과 나머지로 정수처리하는 방식

n = int(input())
a = list(map(int, input().split()))


def digit_sum(x):
    sum = 0
    while x > 0:  # 125 참 # 12 참 # 1 참 # 0 거짓 break
        sum += x % 10  # 5가 sum에 누적 # 2가 sum에 누적 # 1 누적
        x = x//10  # 12 # 1 # 1//10 = 0
    return sum


max = -2147000000  # c++은 정수형(4byte)은 2^31 -1(0이 있으니까 -1)까지 저장된다, 음수는 2^-31.
for x in a:
    tot = digit_sum(x)
    if tot > max:
        max = tot
        res = x
print(res)

# 2-1. sting 처리하는 방식

n = int(input())
a = list(map(int, input().split()))


def digit_sum(x):
    sum = 0
    for i in str(x):
        sum += int(i)
    return sum


max = -2147000000
for x in a:
    tot = digit_sum(x)
    if tot > max:
        max = tot
        res = x
print(res)

# 2-2.

n = int(input())
a = list(map(int, input().split()))


def digit_sum(x):
    sum = 0
    for i in str(x):
        print(i, end=' ')
    print()


max = -2147000000
for x in a:
    tot = digit_sum(x)

'''
1 2 5 
1 5 2 3 2 
9 7 
'''
