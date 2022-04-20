'''
회문 문자열 검사

N개의 문자열 데이터를 입력받아 앞에서 읽을 때나 뒤에서 읽을 때나 같은 경우(회문 문자열)
이면 YES를 출력하고 회문 문자열이 아니면 NO를 출력하는 프로그램을 작성한다.
단 회문을 검사할 때 대소문자를 구분하지 않습니다.
- 입력설명
첫 줄에 정수 N(1<=N<=20)이 주어지고, 그 다음 줄부터 N개의 단어가 입력된다.
각 단어의 길이는 100을 넘지 않는다.
- 출력설명
각 줄에 해당 문자열의 결과를 YES 또는 NO로 출력한다.
- 입력예제 1
5
level
moon
abcba
soon
gooG
- 출력예제 1
#1 YES
#2 NO
#3 YES
#4 NO
#5 YES
'''

# 1. 다음과 같이 코딩해야 한다.
n = int(input())
for i in range(n):  # 5바퀴
    s = input()
    s = s.upper()  # 대문자로 변경
    size = len(s)
    print(s[-3])
    # 사이즈의 길이를 나누기 2 level ll(0번과 4번) ee(1번과 3번) v(2번)는 안해도 된다. 0 1 2 3 4 or -5 -4 -3 -2 -1
    for j in range(size//2):
        if s[j] != s[-1-j]:  # 처음의 j는 0
            print("#%d NO" % (i+1))  # 케이스 넘버 찍힌다. i는 0부터 돌기 때문에 i+1
            break
    else:
        print("#%d YES" % (i+1))

# 2. 참고 (파이썬스러운)
n = int(input())
for i in range(n):  # 5바퀴
    s = input()
    s = s.upper()  # 대문자로 변경
    # print(s[::-1]) # level LEVEL moon NOOM abcba ABCBA soon NOOS gooG GOOG
    if s == s[::-1]:  # reverse 하는 코드
        print("#%d YES" % (i+1))
    else:  # 그렇지 않으면
        print("#%d NO" % (i+1))
