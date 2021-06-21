a, b = map(int, input().split())

def gcd(a, b) : # 최대공약수
    if b==0:
        return a
    else :
        return gcd(b,a%b)

def lcm(a, b) : # 최소공배수
    g = gcd(a,b)
    return int(g*(a/g)*(b/g))

print(gcd(a,b))
print(lcm(a,b))


# import math
#
# a, b = map(int, input().split())
# print(math.gcd(a, b))
# print(math.lcm(a, b))
