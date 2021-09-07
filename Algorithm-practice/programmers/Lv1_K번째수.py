# 1.
def solution(array, commands):
    answer = []

    for i in range(len(commands)):
        arr_list = array[commands[i][0]-1:commands[i][1]]
        arr_list.sort()

        answer.append(arr_list[commands[i][2]-1])
    
    return answer

# 2.
def solution(array, commands):
    return list(map(lambda x:sorted(array[x[0]-1:x[1]])[x[2]-1], commands))
