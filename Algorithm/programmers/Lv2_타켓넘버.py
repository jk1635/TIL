# 1.
def dfs(array, numbers, target, size):
    answer = 0 
    if len(array) == size: 
        if sum(array) == target: 
            return 1
        else: 
            return 0
    else:
        A = numbers.pop(0)
        for i in [1, -1]:
            array.append(A * i)
            answer += dfs(array, numbers, target, size)
            array.pop()
        numbers.append(A)
        return answer 

def solution(numbers, target):
    answer = 0
    answer += dfs([numbers[0]], numbers[1:], target, len(numbers))
    answer += dfs([-numbers[0]], numbers[1:], target, len(numbers))

    return answer

# 2.
def solution(numbers, target):
    sup= [0]
    for i in numbers:
        sub = []
        for j in sup : 
            sub.append(j+i)
            sub.append(j-i)
        sup = sub

    return sup.count(target)

# 3.
def solution(numbers, target):
    answer = 0
    current_list = [numbers[0], -numbers[0]]

    for i in range(1, len(numbers)):
        next_number = numbers[i]
        next_list = []
        for num in current_list:
            next_list.append(num + next_number)
            next_list.append(num - next_number)

        current_list = next_list

    for num in current_list:
        if num == target:
            answer += 1

    return answer

# print(solution([1, 1, 1, 1, 1], 3))