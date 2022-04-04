# 2개의 실수(f1, f2)가 공백으로 구분되어 입력된다.
# f1을 f2로 나눈 결과를 소숫점 이하 넷째 자리에서 반올림하여 소숫점 세 번째 자리까지 출력한다.
# 입력 예시 10.0 3.0
# 출력 예시 3.333

a,b=input().split()
a=float(a)
b=float(b)
c=a/b
print('%.3f'%c)

a,b=input().split()
a=float(a)
b=float(b)
c=a/b
print(format(c,".3f"))

# 두 실수값을 나누기한 값을 c에 저장한 뒤,
# 파이썬의 포매팅 코드(%0.3f)를 사용하여서 소수점 3번째까지 출력해준다