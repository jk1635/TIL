# Sort Tuples in Increasing Order

## key 값에 따른 tuple 정렬

### Example

1. 첫번째 index key로 오름차순 정렬

```python
# Input
t = [(2, 5), (1, 2), (4, 4), (2, 3)]
n = 0

# Output
[(1, 2), (2, 3), (2, 5), (4, 4)]
```

2. 세번째 index key로 오름차순 정렬

```python
# Input
t = [(23, 45, 20), (25, 44, 39), (89, 40, 23)]
n = 2

# Output
[(23, 45, 20), (89, 40, 23), (25, 44, 39)]
```

### Practice

1. lambda, sort 사용

```python
t = [(2, 5), (1, 2), (4, 4), (2, 3)]
n = 0

t.sort(key=lambda x : x[n])

print(t)
```

2. sorted 사용

```python
# get the last key.
def last(x):
    return x[n]

# function to sort the tuple
def sort_tuple(tuples):
    return sorted(tuples, key=last)

t = [(23, 45, 20), (25, 44, 39), (89, 40, 23)]
n = 2

print(sort_tuple(t))
```

[source](https://www.geeksforgeeks.org/python-sort-tuples-increasing-order-key/)
