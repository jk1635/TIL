a, b = list(map(int,input().split()))

a_list = []
b_list = []

    # 약수
for i in range(1, a+1):
    if a % i == 0:
        a_list.append(i)

for i in range(1, b+1):
    if b % i == 0:
        b_list.append(i)

공약수 = []

for 에이 in a_list:
    for 삐이 in b_list:
        if 에이 == 삐이:
            공약수.append(에이)

최대공약수 = max(공약수)
최소공배수 = (a//최대공약수)*(b//최대공약수)*최대공약수