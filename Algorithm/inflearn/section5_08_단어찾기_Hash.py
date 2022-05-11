'''
단어 찾기

현수는 영어로 시는 쓰는 것을 좋아합니다.
현수는 시를 쓰기 전에 시에 쓰일 단어를 미리 노트에 적어둡니다.
이번에는 N개의 단어를 노트에 적었는데 시에 쓰지 않은 단어가 하나 있다고 합니다.
여러분이 찾아 주세요.

- 입력설명
첫 번째 줄에 자연수 N(3<=N<=100)이 주어진다.
두 번째 줄부터 노트에 미리 적어놓은 N개의 단어가 주어지고,
이어 바로 다음 줄부터 시에 쓰인 N-1개의 단어가 주어진다.

- 출력설명
첫 번째 줄에 시에 쓰지 않은 한 개의 단어를 출력한다.

- 입력예제 1
5
big
good
sky
blue
mouse
sky
good
mouse
big

- 출력예제 1
blue
'''

n = int(input())
p = dict()

for i in range(n):
    word = input()
    p[word] = 1

for i in range(n-1):  # 실제 시에 쓰인 단어들
    word = input()
    p[word] = 0  # 0으로 체크된 것은 시에 쓰인 단어들

for key, val in p.items():  # dictionary는 key value 동시 접근 가능 # p가 dictionary # 하나하나 접근
    # print(key, val)
    '''
    big 0
    good 0
    sky 0
    blue 1
    mouse 0
    '''
    if val == 1:
        print(key)  # blue
        break

# print(p)  # {'big': 0, 'good': 0, 'sky': 0, 'blue': 1, 'mouse': 0}
