'''
비밀지도
네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다. 그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야 한다. 다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다.

지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다. 지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
"지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.
'''

# 1-1. Bitwise Operation
def solution(n, arr1, arr2):
    answer = []
    for i,j in zip(arr1,arr2): # arr1과 arr2를 zip()으로 묶기
        a12 = str(bin(i|j)[2:]) # i OR j를 bin()을 통해 2진수로 바꿔준 후, string으로 변환. index slicing을 통해 불필요한 앞의 2자리 삭제 
        if len(a12) < n:
            a12 = '0'*(n-len(a12))+a12 # n보다 길이가 작을 경우 0을 붙여준다.
        a12=a12.replace('1','#') # 1은 #으로
        a12=a12.replace('0',' ') # 0은 공백으로
        answer.append(a12)
    return answer

# 1-2. rjust
def solution(n, arr1, arr2):
    answer = []
    for i,j in zip(arr1,arr2):
        a12 = str(bin(i|j)[2:])
        a12=a12.rjust(n,'0') # rjust를 이용하여 0을 붙여준다.
        a12=a12.replace('1','#')
        a12=a12.replace('0',' ')
        answer.append(a12)
    return answer

# 2. re
import re

def solution(n, arr1, arr2):
    answer = ["#"]*n
    for i in range(0, n):
        answer[i] = str(bin(arr1[i]|arr2[i]))[2:]
        answer[i] = re.sub('1', '#', '0'*(n-len(answer[i]))+answer[i])
        answer[i] = re.sub('0', ' ', answer[i])
    return answer