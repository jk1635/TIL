n = int(input())

a = 0
b = 1
sum = 0

for i in range(0, n): # 0번째부터 n번째까지
  # print(sum, end=" ") # 줄바꿈 안함 # 0 1 1 2 3 5 8 13 21 34 55
  a = b
  b = sum
  sum = a + b

print(sum)