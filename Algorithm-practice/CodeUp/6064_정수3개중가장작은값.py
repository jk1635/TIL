# 입력된 세 정수 a, b, c 중 가장 작은 값을 출력하는 프로그램을 작성해보자.
# 예를 들어 (a if a>b else b) if ((a if a>b else b)>c) else c 와 같은 계산식은
# a, b, c 의 값 중 가장 큰 값으로 계산된다.
# 입력 예시 3 -1 5
# 출력 예시 -1

a, b, c = input().split()
a = int(a)  #변수 a에 저장되어있는 값을 정수로 바꾸어 다시 변수 a에 저장
b = int(b)
c = int(c)

d = a if a<b else b
e = d if d<c else c

print(e)