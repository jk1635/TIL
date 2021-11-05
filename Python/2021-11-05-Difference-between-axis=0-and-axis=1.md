# Difference between axis=0 and axis=1

```python
+------------+---------+--------+
|            |  A      |  B     |
+------------+---------+---------
|      0     | 0.626386| 1.52325|----axis=1----->
+------------+---------+--------+
             |         |
             | axis=0  |
             ↓         ↓
```

## axis example

데이터를 생성한다.

```python
import pandas as pd

data_dict = {'name': ['KIM','LEE','PARK','NEUMAN','GLAS'],
            'sex': ['M','F','F','F','M'],
            'height': ['188','167','164','173','186'],
            'weight': ['82','63','58','69','95']}

df = pd.DataFrame(data_dict)
df
```

```
	name	sex	height	weight
0	KIM	M	188	82
1	LEE	F	167	63
2	PARK	F	164	58
3	NEUMAN	F	173	69
4	GLAS	M	186	95
```

### `axis=0` (instead of axis='index')

각 열의 모든 행에 대해서 작동한다. 행방향, 행을 따라 동작, 책을 위로 쌓아 정리. (Axis 0 will act on all the ROWS in each COLUMN.)

```python
# axis=0 `row`
df.drop([1, 2, 3], axis=0)
```

```
	name	sex	height	weight
0	KIM	M	188	82
4	GLAS	M	186	95
```

### `axis=1` (instead of axis='columns')

각 행의 모든 열에 대해서 작동한다. 열방향, 열을 따라 동작, 책을 옆으로 정리. (Axis 1 will act on all the COLUMNS in each ROW.)

```python
# axis=1 `column`
df.drop(['name', 'sex'], axis=1)
```

```
	height	weight
0	188	82
1	167	63
2	164	58
3	173	69
4	186	95
```

## 2차원 행렬의 axis

2차원 행렬을 생성한다.

```python
import numpy as np

array = np.random.randint(10, size=(5,3))
print(array)
```

```
[[8 2 5]
 [2 3 0]
 [0 1 5]
 [0 1 6]
 [9 2 0]]
```

### `axis=0`

(5, 3) 행렬 중 5를 모두 더한다.

```python
print(np.sum(array, axis=0))

# [19  9 16]
```

### `axis=1`

(5, 3) 행렬 중 3을 모두 더한다.

```python
print(np.sum(array, axis=1))

# [15  5  6  7 11]
```

## 3차원 행렬의 axis

3차원 행렬을 생성한다.

```python
array3 = np.random.randint(10, size=(5,3,2))
print(array3)
print(array3.shape)
```

```
[[[3 3]
  [3 2]
  [8 1]]

 [[6 9]
  [5 7]
  [3 8]]

 [[3 6]
  [5 3]
  [7 2]]

 [[8 3]
  [3 4]
  [2 9]]

 [[9 9]
  [3 6]
  [8 0]]]

(5, 3, 2)
```

### `axis=0`

(5, 3, 2) 행렬 중 5를 모두 더한다.

```python
print(np.sum(array3, axis=0))
print(np.sum(array3, axis=0).shape)
```

```
[[29 30]
 [19 22]
 [28 20]]

(3, 2)
```

### `axis=1`

(5, 3, 2) 행렬 중 3을 모두 더한다.

```python
print(np.sum(array3, axis=1))
print(np.sum(array3, axis=1).shape)
```

```
[[14  6]
 [14 24]
 [15 11]
 [13 16]
 [20 15]]

(5, 2)
```

### `axis=2`

(5, 3, 2) 행렬 중 2를 모두 더한다.

```python
print(np.sum(array3, axis=2))
print(np.sum(array3, axis=2).shape)
```

```
[[ 6  5  9]
 [15 12 11]
 [ 9  8  9]
 [11  7 11]
 [18  9  8]]

(5, 3)
```

참고 : [source](https://stackoverflow.com/questions/22149584/what-does-axis-in-pandas-mean)