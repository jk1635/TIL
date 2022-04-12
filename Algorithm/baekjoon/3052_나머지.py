'''
나머지

두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다. 
수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

첫째 줄부터 열번째 줄 까지 숫자가 한 줄에 하나씩 주어진다. 이 숫자는 1,000보다 작거나 같고, 음이 아닌 정수이다.
첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.
'''

a = [] # a를 생성한다.

for i in range(10):
    n = int(input()) # n을 입력받는다.
    a.append(n % 42) # 입력받은 n을 42로 나눈 나머지를 리스트 a에 저장한다.
    
a = set(a) # 리스트 a를 set()으로 집합자료형{}으로 만들어준다. set은 중복 제거를 위한 필터 역할이다.
print(len(a)) # len으로 a의 길이(요소의 전체 개수)를 출력한다.

'''
cf. set()
Set items are unordered, unchangeable, and do not allow duplicate values.
'''

set1 = {"apple", "banana", "cherry"}
set2 = {1, 1, 5, 7, 9, 3}
set3 = {True, False, False}

print(set1, set2, set3)
print(len(set1))

# {'banana', 'cherry', 'apple'} {1, 3, 5, 7, 9} {False, True}
# # 3