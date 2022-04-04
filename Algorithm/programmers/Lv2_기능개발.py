# 1-1.
def solution(progresses, speeds):
    answer = []
    time = 1
    count = 0
    for i in range(len(progresses)):
        if i == 0 and progresses[i]+speeds[i]*time >= 100:
            count += 1
            answer.append(count)
        elif i > 0 and progresses[i]+speeds[i]*time >= 100:
            count += 1
            answer[-1] += 1 
        while progresses[i]+speeds[i]*time < 100:
            time += 1
            if progresses[i]+speeds[i]*time >= 100:
                count = 1
                answer.append(count)
                break

    return answer

# 1-2.
def solution(progresses, speeds):
    answer = []
    time = 0
    count = 0
    while len(progresses)> 0:
        if (progresses[0] + time*speeds[0]) >= 100:
            progresses.pop(0)
            speeds.pop(0)
            count += 1
        else:
            if count > 0:
                answer.append(count)
                count = 0
            time += 1
    answer.append(count)

    return answer

# 2. zip
import math

def solution(progresses, speeds):
    answer = []
    start = 0
    completeDays = list()
    for _prog, _spds in zip(progresses, speeds):
        completeDays.append(math.ceil((100 - _prog)/_spds))
    for i in range(len(completeDays)):
        if completeDays[start] < completeDays[i]:
            answer.append(i - start)
            start = i
    answer.append(len(completeDays) - start)
    
    return answer

# 3. zip, ceil
from math import ceil

def solution(progresses, speeds):
    answer = []
    start = 0
    completeDays = list()
    for _prog, _spds in zip(progresses, speeds):
        completeDays.append(math.ceil((100 - _prog)/_spds))
    for i in range(len(completeDays)):
        if completeDays[start] < completeDays[i]:
            answer.append(i - start)
            start = i
    answer.append(len(completeDays) - start)
    
    return answer

# 4. ceil
from math import ceil

def solution(progresses, speeds):
    daysLeft = list(map(lambda x: (ceil((100 - progresses[x]) / speeds[x])), range(len(progresses))))
    count = 1
    retList = []

    for i in range(len(daysLeft)):
        try:
            if daysLeft[i] < daysLeft[i + 1]:
                retList.append(count)
                count = 1
            else:
                daysLeft[i + 1] = daysLeft[i]
                count += 1
        except IndexError:
            retList.append(count)

    return retList