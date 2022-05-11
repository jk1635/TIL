# 재귀함수와 스택

def DFS(x):  # 매개변수 x
    if x > 0:  # x가 0보다 클때까지만
        # print(x, end=' ')  # 3 2 1
        DFS(x-1)  # 자기 자신을 호출 # 2,3,4,5,6,7,8.
        print(x, end=' ')  # 1 2 3


if __name__ == '__main__':
    n = int(input())
    DFS(n)
    # 1. DFS(3) 매개변수 x에 input값 3 할당, 복귀주소 main-line12 (지역변수가 있다면 스택에 함께 저장된다.)
    # 9. 매개변수 지역변수 복귀주소 메모리 할당 해제되면서 main의 line12으로 복귀 및 프로그램 작동 종료

    # 2. DFS(2) 호출 - 매개변수 x에 2 할당 복귀주소 DFS(3)-line6
    # 3. DFS(1) 호출 - 매개변수 x에 1 할당 복귀주소 DFS(2)-line6
    # 4. DFS(0) 호출 - 매개변수 x에 0 할당 복귀주소 DFS(0)-line6
    # 5. DFS(0) 자기 할 일 다하고, 거짓이라 스택에 있는 내용도 지워진다.
    # 6. DFS(1) line6 복귀 line7 => 1 출력 종료
    # 7. DFS(2) line6 복귀 line7 => 2 출력 종료
    # 8. DFS(3) line6 복귀 line7 => 3 출력 종료
