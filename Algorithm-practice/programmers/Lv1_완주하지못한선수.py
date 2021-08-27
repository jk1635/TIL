'''
문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.
'''

# 1-1.
def solution(participant, completion):
    participant.sort()
    completion.sort()
    for i in range(len(completion)):
        if participant[i] != completion[i]: # 일치하지 않으면 participant의 i번째 요소 리턴
            return participant[i]

    return  participant[-1]; # 일치하는 것이 없으면 참가자의 마지막 요소 반환

print(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))

# 1-2.
participant = ["leo", "kiki", "eden"]
completion = ["eden", "kiki"]
participant.sort()
completion.sort()

for i in range(len(completion)):
    if participant[i] != completion[i]:
        print (participant[i])
    else:
        print(participant[-1]);

# 2. hash - 해시는 Key-value쌍으로 데이터를 저장하는 자료구조
def solution(participant, completion):
    answer = ''
    temp = 0
    dic = {}
    for part in participant:
        dic[hash(part)] = part
        temp += int(hash(part))
    for com in completion:
        temp -= hash(com)
    answer = dic[temp]

    return answer

print(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))

# 3. collections.Counter
import collections

def solution(participant, completion):
    answer = collections.Counter(participant) - collections.Counter(completion)
    return list(answer.keys())[0]

print(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))

# 4. zip
def solution(participant, completion):
    participant.sort()
    completion.sort()
    for p,c in zip(participant, completion):
        if p != c:
            return p
    return participant.pop()

print(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))

# 5.
def solution(participant, completion):
    answer = ''
    dictionary = dict()
    # print(dictionary)

    for p in participant:
        if p not in dictionary:
            dictionary[p] = 1
        else:
            dictionary[p] += 1
    # print(dictionary)

    for c in completion:
        dictionary[c] -= 1
        if dictionary[c] == 0:
            del dictionary[c]
    # print(dictionary)
    print(list(dictionary.items())[0][0])

    # for key, val in dictionary.items():
    #     if val == 1:
    #         answer = key
    # answer = list(dictionary.items())[0]
    return answer

print(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))

# 6.
def solution(participant, completion):
    for i in completion:
        participant.remove(i) # 시간초과지만 이런 방법도 된다. remove가 오래 걸린다.
        
    return print(participant[0])

print(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))