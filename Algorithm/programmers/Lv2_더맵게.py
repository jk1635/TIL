# 1.sort (시간초과)
def solution(scoville, K):
    answer = 0

    scoville.sort()
    scoville.reverse()
    
    while scoville[-1] < K:
        if len(scoville)>1:
            answer += 1
            first = scoville.pop()
            second = scoville[-1]
            if first > second:
                scoville[-1] = first * 2 + second
            else:
                scoville[-1] = first + second * 2
            scoville.sort(reverse=True)
        else:
            return -1
    return answer

# 2. heapq
import heapq

def solution(scoville, K):
    heapq.heapify(scoville)
    answer = 0
    while scoville[0] < K:
        try:
            mix = heapq.heappop(scoville) + (heapq.heappop(scoville) * 2)
        except IndexError:
            return -1
            
        heapq.heappush(scoville, mix)
        answer += 1
    return answer

# 3. heapq
import heapq

def solution(scoville, k):
    heapq.heapify(scoville)
    i = 0
    while scoville[0] < k:
        if len(scoville) > 1:
            heapq.heappush(scoville, heapq.heappop(scoville) + (heapq.heappop(scoville) * 2))
            i += 1
        else:
            return -1
    return i

# 4. heapq
import heapq

def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)

    while scoville[0] < K and len(scoville) > 1:
        answer += 1
        first = heapq.heappop(scoville)
        second = heapq.heappop(scoville)
        new = first + (second * 2)
        heapq.heappush(scoville, new)

    return answer if scoville[0] >= K else -1