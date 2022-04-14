'''
A+B

두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
각 테스트 케이스마다 "Case #x: A + B = C" 형식으로 출력한다.
x는 테스트 케이스 번호이고 1부터 시작하며, C는 A+B이다.

입력
5
1 1
2 3
3 4
9 8
5 2

출력
Case #1: 1 + 1 = 2
Case #2: 2 + 3 = 5
Case #3: 3 + 4 = 7
Case #4: 9 + 8 = 17
Case #5: 5 + 2 = 7
'''

T = int(input())

for i in range(1, T+1):
  A, B = map(int, input().split())
  C = A + B
  print("Case #%d: %d + %d = %d" %(i, A, B, C))