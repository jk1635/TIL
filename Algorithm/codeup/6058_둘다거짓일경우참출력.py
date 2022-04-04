# 두 값의 True / False 값이 모두 False 일 때만 True 를 출력하고,
# 그 외의 경우에는 False 를 출력한다.
# 입력 예시 0 0
# 출력 예시 True

a, b = input().split()
c= bool(int(a))
d= bool(int(b))

print( not (c or d) )

a, b = input().split()
c= bool(int(a))
d= bool(int(b))

print( c==False and d==False )