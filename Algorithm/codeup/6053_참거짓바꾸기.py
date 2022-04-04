# 정수값이 입력될 때, 그 불 값을 반대로 출력하는 프로그램을 작성해보자.
# 참, 거짓의 논리값 인 불(boolean) 값을 다루어주는 예약어는 not, and, or 이 있고,
# 불 값들 사이의 논리(not, and, or) 연산 결과도 마찬가지로
# True 또는 False 의 불 값으로 계산 된다.
# 입력 예시 1
# 출력 예시 False

a = bool(int(input()))
print(not a)

# 위와 같은 명령문의 경우 input( ), int( ), bool( ) 순서로 한 번에 한 단계씩
# 계산/처리/평가된다.