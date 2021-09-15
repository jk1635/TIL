import itertools
import math


def p_cnt(array, net):
    # 소수 카운터
    # 소수의 목록이 담긴 에라토스테네스의 체 net와 이번에 만든 permutation list(숫자 조합)을 담으면 리스트를 돌면서 소수의 갯수를 출력한다.
    p = 0
    for i in array:
        if net[i]:
            p += 1
    return p


def solution(numbers):  # numbers = "011"이라고 가정
    # str을 list()로 문자열을 전부 분해해서 리스트 원소로 담아준다 -> ["0", "1", "1"]
    numlist = list(numbers)
    l = len(numbers)  # length (permutation을 1개~length개 까지 반복으로 돌리기 위해서 변수로 지정함)

    plist = []  # permutation list
    # 반복횟수는 range(n)이지만 다음줄에서 i+1을 적기 귀찮아서 여기에 1씩 더해준 값을 넣었다.
    for i in range(1, l+1):
        permu = list(
            map(int, map(''.join, itertools.permutations(numlist, i))))
	# 반복문을 돌려서 numlist 원소를 이용한 permutations를 만들고 "".join을 통해서 만들어진 각 permutation 문자열 한줄로 만들고 인트형으로 변경해준다. ["1", "0", "1"] -> "101" -> 101
        plist.append(permu)
	# 이렇게 만든 숫자들을 plist 내부에 넣어준다. 아래 print 구문을 해주면 현재 plist의 원소들이 보여진다. 반복문 직후의 리스트 모습
    print(plist)
    # [[[0, 1, 1]<-3P1, [1, 1, 10, 11, 10, 11]<-3P2, [11, 11, 101, 110, 101, 110]<-3P3 ] map(int, permutations)를 해서 앞이 0인경우는 두자리수나 한자리수로 담긴다. "011", "001" -> 11, 1


    plist = sorted(list(set(sum(plist, []))))
    # sum(iterable, []) => 2차원 배열을 1차원으로 변환 -> set로 중복되는 숫자 제거 -> list로 변경해서 정렬
    print(plist)  # [0, 1, 10, 11, 101, 110]

    ## 에라토스테네스의 체
    # 이 plist에서 가장 큰 숫자를 선택한다. 문제가 요구하는건 이번에 나온 순열 중 가장 큰수까지만 소수 여부를 검사하면 되기 때문
    maxnum = plist[-1]
    net = [0, 0] + [1] * (maxnum - 1)  # [0] + [0] + [1] * (maxnum -1)
    # [0]~[maxnum] 인덱스를 담기위해서는 최고로 큰 수보다 인덱스가 1 더 큰 list를 만들어야한다.
    # 만드는 방법은 [1=false] * (maxnum + 1) -> (인덱스가 0부터 시작하기 때문), net[0], net[1] = 0, 0 으로 초기화 하는 방법도 있고
    # 또는 숫자 0,1은 무조건 false기 때문에 0값을 넣은 뒤 나머지를 모두 true로 세팅한 뒤 제거하는 방법이 있다. => [0, 0] + [1] * (maxnum - 1)
    # 위의 두 줄이 만드는 코드는 똑같은 리스트인데 아래 방법을 쓰면 한줄에 다 표현할 수 있어서 저 방법을 사용했다.
    
    # for i in range(2, int(math.sqrt(maxnum))+1):
    #     for j in range(2*i, len(net), i):
    #             net[j] = 0
    # 2부터 int(루트(최고로 큰 숫자) + 1)까지 반복을 돌면서 그 배수들을 소수에서 제거하는 에라토스테네스 함수
    not_prime = [j for i in range(2, int(math.sqrt(maxnum)+1)) for j in range(2*i, len(net), i)]
    for i in not_prime:
        net[i]=0
    # 리스트 컴프리헨션을 쓰면 위 함수는 이렇게 만들어질것 같다.

    return p_cnt(plist, net)
print(solution("011"))