# 1.
def solution(msg):
    answer = []
    dic = {}

    for i in range(26):
        dic[chr(65+i)] = i+1

    w, c = 0, 0
    while True:
        c += 1
        if c == len(msg):
            answer.append(dic[msg[w:c]])
            break
        if msg[w:c+1] not in dic:
            dic[msg[w:c+1]] = len(dic) + 1
            answer.append(dic[msg[w:c]])
            w = c

    return answer

# 2-1.
def solution(msg):
    dic = dict()
    lst = []
    [lst.append(chr(i)) for i in range(ord('A'), ord('Z')+1)]
    for idx, char in enumerate(lst):
        dic[char] = idx+1
    idx = 0
    maxIdx = 26
    length = 0
    answer = []
    while True:
        length += 1
        if not msg[idx:idx+length] in dic:
            answer.append(dic[msg[idx:idx+length-1]])
            maxIdx += 1
            dic[msg[idx:idx+length]] = maxIdx
            idx += length-1
            length = 0
        else:
            if idx+length-1 == len(msg):
                answer.append(dic[msg[idx:idx+length-1]])
                break
    return answer

# 2-2.
def solution(msg):
    dic = dict()
    # 사전
    lst = []
    [lst.append(chr(i)) for i in range(ord('A'), ord('Z')+1)] # ['A','B' ...., 'Z']
    for idx, char in enumerate(lst): # enum idx값 0, 1,2 과 char(임의로 지어줌) 'A', 'B' --> idx = 0 char = 'A'
        dic[char] = idx+1 # dic[char] = idx + 1
    idx = 0
    # 사전 lst 변수로 생성해서 반복문으로 dic 딕셔너리 변수에 넣어둠, 끝 인덱스를 maxIdx 변수로 표시
    maxIdx = 26 # 숫자로 끝 인덱스
    ##################################################
    length = 0 # idx = 문자열 인덱스, length = 문자열 길이
    answer = []
    # 최소 문자열 1개
    while True: # 무한 반복
        length += 1 # 문자열 길이 length 증가 (while문 반복 시작할 때 최소 문1을 만들어 주기 위해 반복문 앞에 0으로 초기화하고 첫줄에 += 1)
        if not msg[idx:idx+length] in dic: # idx:idx+length에 해당하는 문자가 사전에 없을 경우를 적어둔건데 좀 지저분해서
            # if dic.get(msg[idx:idx+length] == None: # 위 아래 코드 동일 / 있을 때 value 나오고 없으면 None출력
            answer.append(dic[msg[idx:idx+length-1]]) # 정답 함수에 append 'K' = 11 [11]
            maxIdx += 1
            dic[msg[idx:idx+length]] = maxIdx # 딕셔너리에 넣어줌
            idx += length-1 # idx값을 이동한만큼 옮겨주는데 -1 (KAKAO) K 검색해서 K값을 11을 정답에 넣고 그다음에 KA 사전에서 KA값을 사전에 넣고 A KA길이가 -1 idx 위치를 옆으로 밀어줌
            # [K][A]/->[K][A][O] len = 3 , idx = 2     KAO가 사전에 들어가면 O부터 시작해야함
            # [K][A][K][A]/->[O] len-1 = 2, idx = 4
            length = 0 # KAO가 초기화 되니까 0으로 바꿔줌
        else:
            # 만약 단어가 있다면....
            if idx+length-1 == len(msg):
                answer.append(dic[msg[idx:idx+length-1]])
                break
    return answer