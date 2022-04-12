# 중첩 반복문 (이중 for문)

for i in range(5):
    for j in range(5):
        print(j, end=' ')
    print() # 줄바꿈

'''
0 1 2 3 4
0 1 2 3 4
0 1 2 3 4
0 1 2 3 4
0 1 2 3 4
'''

for i in range(5):
    print('i:', i, sep='', end=' - ')
    for j in range(5):
        print('j:', j, sep='', end=' ') # 줄바꿈 안함
    print() # 줄바꿈

'''
i:0 - j:0 j:1 j:2 j:3 j:4
i:1 - j:0 j:1 j:2 j:3 j:4
i:2 - j:0 j:1 j:2 j:3 j:4
i:3 - j:0 j:1 j:2 j:3 j:4
i:4 - j:0 j:1 j:2 j:3 j:4
'''

for i in range(5):
    for j in range(5):
        print('*', end= ' ') # j가 5바퀴 도니까 *을 5개 찍는다.
    print()

'''
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
'''

for i in range(5):
    for j in range(i + 1): # 처음에 i는 0이기 때문에 +1을 한다.
        print('*', end=' ')
    print()

'''
* 
* *
* * *
* * * * 
* * * * * 
'''

for i in range(5):
    for j in range(5 - i):
        print('*', end=' ')
    print()

'''
* * * * *
* * * *
* * *
* *
*
'''