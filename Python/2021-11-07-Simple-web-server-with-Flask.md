## Simple web server with Flask

### 웹서버 기본

```python
# 서버 실행하는 부분
from flask import Flask
app = Flask(__name__)

# 주소 만드는 부분
@app.route("/") # 서버에 접속할 수 있는 url을 만든다.
def hello(): # app.route("/")의 url을 실행할 함수
  return "hello world"

# flask 서버를 실행시켜주는 부분
if __name__ == "__main__": # 파일 이름이 main일때만 app.run() 실행
  app.run()
```

cf. @는 decorator
