num = int(input())

for _ in range(num): # _는 굳이 변수 선언을 할 필요가 없어서 안하겠다
    scores = list(map(int, input().split()))

    student_count = scores[0]
    score_list = scores[1:]

    avg = sum(score_list) / student_count

    cnt = 0          # 평균이 넘는 학생수 세려고
    for i in score_list:
        if i > avg:
            cnt += 1 # 평균보다 높은 것만

    per = (cnt / student_count) * 100
    print(f'{per:.3f}%')    # f-string