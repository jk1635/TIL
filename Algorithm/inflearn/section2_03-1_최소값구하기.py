# 최소값 구하기

a = [5, 3, 7, 9, 2, 5, 2, 6]
min = float('inf')  # 초기값은 무한대
for i in range(len(a)):  # 처음 수는 무조건 무한대보다 작다. (참)
    if a[i] < min:
        min = a[i]
print(min)
