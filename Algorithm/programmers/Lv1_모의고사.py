# 1-1.
def solution(answers):
    student1 = [1, 2, 3, 4, 5]
    student2 = [2, 1, 2, 3, 2, 4, 2, 5,]
    student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    count1=0
    count2=0
    count3=0
    
    for i in range(len(answers)):
        if answers[i] == student1[i%5]:
            count1 += 1
        if answers[i] == student2[i%8]:
            count2 += 1
        if answers[i] == student3[i%10]:
            count3 += 1
        
    score = max(count1,count2,count3)
    answer = []
    
    if score == count1:
        answer.append(1)
    if score == count2:
        answer.append(2)    
    if score == count3:
        answer.append(3)
        
    return answer

# 1-2.
def solution(answers):
    student1 = [1, 2, 3, 4, 5]
    student2 = [2, 1, 2, 3, 2, 4, 2, 5,]
    student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    count = [0, 0, 0]
    
    for i in range(len(answers)):
        if answers[i] == student1[i%5]:
            count[0] += 1
        if answers[i] == student2[i%8]:
            count[1] += 1
        if answers[i] == student3[i%10]:
            count[2] += 1
        
    score = max(count)
    answer = []
    
    if score == count[0]:
        answer.append(1)
    if score == count[1]:
        answer.append(2)    
    if score == count[2]:
        answer.append(3)
        
    return answer

# 2.
def solution(answers):
    pattern1 = [1,2,3,4,5]
    pattern2 = [2,1,2,3,2,4,2,5]
    pattern3 = [3,3,1,1,2,2,4,4,5,5]
    score = [0, 0, 0]
    result = []

    for idx, answer in enumerate(answers):
        if answer == pattern1[idx%len(pattern1)]:
            score[0] += 1
        if answer == pattern2[idx%len(pattern2)]:
            score[1] += 1
        if answer == pattern3[idx%len(pattern3)]:
            score[2] += 1

    for idx, s in enumerate(score):
        if s == max(score):
            result.append(idx+1)

    return result