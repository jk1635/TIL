n = int(input())

dots = []

for _ in range(n):
    dots.append(list(map(int,input().split())))

for i in range(len(dots)-1, 0, -1):
    for j in range(i):
        if dots[j][1] > dots[j+1][1]:
            temp = dots[j]
            dots[j] = dots[j+1]
            dots[j+1] = temp

# print(dots)

for i in range(len(dots)-1, 0, -1):
    for j in range(i):
        if dots[j][1] == dots[j+1][0]:
            if dots[j][0] > dots[j+1][0]:
                temp = dots[j]
                dots[j] = dots[j+1]
                dots[j+1] = temp


for dot in dots:
    print(dot)
