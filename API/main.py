import os
from flask import Flask, request, jsonify
from mysql import connector
from dotenv import load_dotenv

load_dotenv()

_pw = os.getenv('API_PW')

app = Flask(__name__)

def connect():
    """connects to the sql server
       returns the connection object"""
    try:
        # connection to the mysql server running on local host
        cnx = connector.connect(
            host="localhost", database="MyDB", user="app-api",
            password=_pw,
            )
        return cnx
    except:
        # for when the MySql server is down or unable to connect
        print("error connecting to sql server")
        exit()

@app.route("/add-item", methods=['POST'])
def post():
    data = request.form
    

@app.route("/get-all-data", methods=['GET'])
def get():
    cnx = connect()
    query = (
        "SELECT * FROM fridge_1;"
    )

    cursor =cnx.cursor()
    cursor.execute(query)

    try :
        result = list(cursor)
    except:
        cursor.close()
        cnx.close()

        return None, 404
    
    data = {}

    for row in result:
        data[row[0]] = {
            "ItemName": row[1],
            "ExpDate": row[2],
        }

    cursor.close()
    cnx.close()

    return data, 200

app.run(host="0.0.0.0", port=5000, debug=True)
