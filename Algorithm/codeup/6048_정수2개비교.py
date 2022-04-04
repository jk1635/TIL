# a가 b보다 작은 경우 True 를, 그렇지 않은 경우 False 를 출력한다.
# 비교/관계연산자 < (less than sign) 는
# 왼쪽의 값이 오른쪽 값 보다 작은 경우 True(참)로 계산하고,
# 그 외의 경우에는 False(거짓)로 계산한다.
# 비교/관계연산자는 <, >, <=, >=, ==(같다), !=(다르다) 6개가 있다.

a, b = input().split()
a = int(a)
b = int(b)
if (a < b):
	print("True")
else: 
	print("False")

# 모범 답안

a, b = input().split()
a = int(a)
b = int(b)
print(a<b)

# 입력 예시 1 9
# 출력 예시 True