'''
가장 큰 수

선생님은 현수에게 숫자 하나를 주고, 해당 숫자의 자릿수들 중 m개의 숫자를 제거하
여 가장 큰 수를 만들라고 했습니다. 여러분이 현수를 도와주세요.(단 숫자의 순서는
유지해야 합니다)
만약 5276823 이 주어지고 3개의 자릿수를 제거한다면, 7823이 가장 큰 숫자가 됩니다.

- 입력설명
첫째 줄에 숫자(길이는 1000을 넘지 않습니다)와 제가해야할 자릿수의 개수가 주어집니다.

- 출력설명
가장 큰 수를 출력합니다.

- 입력예제 1
5276823 3

- 출력예제 1
7823

- 입력예제 2
9977252641 5

- 출력예제 2
99776
'''

# STACK
# Last IN, First OUT

# 파이썬에서는 다음과 같이 스택을 구현
# pop은 list 뒤의 값을 삭제
# append는 list 뒤에 값을 추가

num, m = map(int, input().split())
num = list(map(int, str(num)))
stack = []

# stack이 비어있으면 while문은 바로 거짓이 된다. 비어있지 않으면 참
for x in num:
    while stack and m > 0 and stack[-1] < x:
        stack.pop()  # 뒤의 값 삭제
        m -= 1  # 1개 pop 했으니까 m을 하나 줄인다. # m은 제거할 수 있는 숫자의 개수
    stack.append(x)
# 제거할 수 있는 횟수가 남았을 때
if m != 0:  # m이 0이 아닐 때 stack을 갱신
    stack = stack[:-m]  # 제일 앞에서부터 -m 이전까지 제거 (m개의 자료를 제거)
                        # m=2가 됐다면, [9, 9, 7, 7, 6, 4, 1]을 [:-2]까지 제거, [9, 9, 7, 7, 6]
# 1. join 사용
res = ''.join(map(str, stack))
print(res)
# 2. for 사용
# for x in stack:
#     print(x, end='')
