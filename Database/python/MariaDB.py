from flask import Flask
from flask_mysqldb import MySQL

app = Flask(__name__)

# MariaDB 연결 설정
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '1216'
app.config['MYSQL_DB'] ='Model'
app.config['MYSQL_PORT'] = 3307

mysql = MySQL(app)

@app.route("/")
def users():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM alldata")
    rv = cur.fetchall()
    return str(rv)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=app.config['MYSQL_PORT'], debug=True)