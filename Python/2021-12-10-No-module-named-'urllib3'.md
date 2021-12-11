# ModuleNotFoundError: No module named 'urllib3'

## PROBLEM

1차 에러

```bash
ModuleNotFoundError: No module named 'requests'

> pip install requests
```

2차 에러

```bash
ModuleNotFoundError: No module named 'urllib3'

> pip install urllib3
```

실행 결과

```bash
ModuleNotFoundError: No module named 'urllib3'
```

## SOLUTION

requests installation이나 의존성이 손상되었을 가능성이 있다.<br/>
> Most likely something got corrupted in your requests installation or it's dependencies. 
```bash
pip uninstall urllib3
pip install --no-cache-dir -U urllib3
pip uninstall chardet
pip install --no-cache-dir -U chardet
```

참고 : [stackoverflow](https://stackoverflow.com/questions/48435769/modulenotfounderror-no-module-named-urllib3-exceptions-urllib3-is-not-a-pa)
