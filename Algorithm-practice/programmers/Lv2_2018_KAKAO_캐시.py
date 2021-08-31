'''
지도개발팀에서 근무하는 제이지는 지도에서 도시 이름을 검색하면 해당 도시와 관련된 맛집 게시물들을 데이터베이스에서 읽어 보여주는 서비스를 개발하고 있다.
이 프로그램의 테스팅 업무를 담당하고 있는 어피치는 서비스를 오픈하기 전 각 로직에 대한 성능 측정을 수행하였는데, 제이지가 작성한 부분 중 데이터베이스에서 게시물을 가져오는 부분의 실행시간이 너무 오래 걸린다는 것을 알게 되었다.
어피치는 제이지에게 해당 로직을 개선하라고 닦달하기 시작하였고, 제이지는 DB 캐시를 적용하여 성능 개선을 시도하고 있지만 캐시 크기를 얼마로 해야 효율적인지 몰라 난감한 상황이다.
어피치에게 시달리는 제이지를 도와, DB 캐시를 적용할 때 캐시 크기에 따른 실행시간 측정 프로그램을 작성하시오.
'''
# 1.
def solution(cacheSize, cities): 
    time = 0 
    cache = [] # 캐시가 없을 경우 
    if cacheSize == 0: 
        return len(cities) * 5 
    for city in cities: 
        # cache hit 
        if city.lower() in cache:
            cache.remove(city.lower()) 
            cache.append(city.lower()) # 해당 도시를 리스트의 맨 뒤로 보내기 
            time += 1 
        # cache miss 
        else: 
            if len(cache) == cacheSize:cache.pop(0) # LRU 알고리즘으로 캐시 교체 
            cache.append(city.lower()) 
            time += 5 
            
    return time

# 2. deque
def solution(cacheSize, cities):
    import collections
    cache = collections.deque(maxlen=cacheSize)
    time = 0
    for i in cities:
        s = i.lower()
        if s in cache:
            cache.remove(s)
            cache.append(s)
            time += 1
        else:
            cache.append(s)
            time += 5
    return time