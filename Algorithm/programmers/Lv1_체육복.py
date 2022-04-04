# 1.
def solution(n, lost, reserve):
    reserve_n = list(set(reserve)-set(lost))
    lost_n = list(set(lost)-set(reserve))
    # 중복될 경우를 대비해 중복제거
    answer = n-len(lost_n)
    for i in lost_n:
        if i - 1 in reserve_n:
            answer += 1
            reserve_n.remove(i - 1)
        elif i + 1 in reserve_n:
            answer += 1
            reserve_n.remove(i + 1)
    return answer

# 2.
def solution(n, lost, reserve):
    _reserve = list(set(reserve)-set(lost))
    _lost = list(set(lost)-set(reserve))
    
    for r in _reserve:
        f = r - 1
        b = r + 1
        if f in _lost:
            _lost.remove(f)
        elif b in _lost:
            _lost.remove(b)
    return n - len(_lost)