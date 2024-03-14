from flask import Flask
app = Flask(__name__)


# MariaDB에 연결 필요.
import delete_func
# 플라스크 라우트에 함수 연결
@app.route("/")
def delete():
  # 삭제할 데이터의 userID를 매개변수로 전달하여 delete_func 함수 호출
  delete_func('example_userID')
  return "Record deleted successfilly."