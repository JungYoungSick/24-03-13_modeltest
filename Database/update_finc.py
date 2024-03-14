from flask_mysqldb import Mysql


def update_func(data):
  cur = Mysql.connection.cursor()
  try:
    # 데이터베이스에서 업데이트 할 레코드를 쿼리하여 가져옴
    cur.execute("UPDATE alldata SET Label =%s WHERE userID = %s", (data['new_label'], data['user_id']))
  
  except Exception as e:
    # 예외 발생 시 롤백
    Mysql.connection.rollback()
    print("An error occurred",e)
  finally:
    cur.close()