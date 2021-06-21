a = ['c=','c-','dz=','d-','lj','nj','s=','z=']
b = input()

for i in a:
    b = b.replace(i,'x') # a와 일치하는 알파벳은 x로 변경

print(len(b))