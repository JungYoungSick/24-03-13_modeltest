from flask_mysqldb import Mysql

def delete_func(data):
  cur = Mysql.connection.cursor()
  try:
    # 데이터베이스에서 삭제할 레코드를 쿼리하여 가져옴
    cur.execute("DELETE FROM alldata WHERE userID = %s", (data,))
    # 변경사항 커밋
    Mysql.connection.commit()
    print(f"Record with userID {data} deleted successfully")
  except Exception as e:
    # 예외 발생 시 롤백
    Mysql.connection.rollback()
    print("An error occurred:", e)
  
  finally:
    # 커서 및 데이터베이스 연결 닫기
    cur.close()