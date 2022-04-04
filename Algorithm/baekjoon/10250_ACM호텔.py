t = int(input())
h, w, n = map(int, input().split())

a = (n % h)*100 + (n // h)+1

if n % h == 0:
    a = h*100 + (n // h)

print(a)
