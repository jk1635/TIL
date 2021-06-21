sug = int(input())
box = 0
while True:
    if (sug % 5) == 0:
        box = box + (sug//5)
        print(box)
        break
    sug = sug-3  # 3kg를 뺌
    box += 1
    if sug < 0:
        print("-1")
        break