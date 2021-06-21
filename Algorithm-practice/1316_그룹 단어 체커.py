# case 수
n = int(input())
string_list = []

for _ in range(n):
    input_string = input()
    string_list.append(input_string)

count = 0

for string in string_list:
    record = []
    record.append(string[0])
    for i in range(1, len(string)):
        if string[i] not in record:
            record.append(string[i])
        else:
            if string[i] != string[i-1]:
                # print_list.append('no')
                break
    else:
        # print_list.append('yes')
        count += 1

print(count)