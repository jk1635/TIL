# Install Python

## Python 개발 환경 구축 (Anaconda3)

- 관리자 권한으로 실행

```bash

Anaconda Prompt(Anconda3)

> conda create -n [원하는 폴더명] python=3.9
# Creating a new virtual environment. Not specifying python version? Newest one!

> conda --version
conda 4.9.2

> python --version
Python 3.8.5

(base) C:\Users\JYK> conda activate [폴더명] # Entering into the virtual environment.
(algorithm) C:\Users\JYK> python --version
Python 3.9.5


> conda list # list all libraries installed in an environment.
> deactivate [폴더명] # Closing and getting out of it.

> conda env list # list all existing virtual environments.
> conda env remove -n [원하는 폴더명] # Remove the environment and all packages in it.
```

참고 https://www.edwith.org/python4ai/joinLectures/47074 1-3
