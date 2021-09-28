# 1부터 해당숫자까지 포함하여 3, 6, 9가 있는 숫자의 개수를 출력
# 33, 369와 같이 3, 6, 9가 두개 이상 포함되어 있어도 박수는 한 번만 친다.

n = int(input())
count = 0
for i in range(1, n+1):
    count += str(i).count('3')+str(i).count('6')+str(i).count('9')
print(count)