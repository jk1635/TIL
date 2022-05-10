'''
최소, 최대 

N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

예제 입력
5
20 10 35 30 7

예제 출력
7 35
'''

# 1.
n = int(input())
a = list(map(int, input().split()))
print(min(a), max(a))

# 2.
n = int(input())
a = list(map(int, input().split()))
a.sort()
print(a[0], a[-1])
