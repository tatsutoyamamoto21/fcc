import os
import datetime
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
    try :
        name = data['ItemName']
        exp = data['ExpDate']
        best_before = data['IsBestBefore']

    except KeyError:
        return "invalid request", 400
    
    cnx = connect()
    cursor = cnx.cursor()
    query = (
        "INSERT INTO fridge_1 (ItemName, ExpDate, IsBestBefore) "
        f"VALUES ('{name}', '{exp}', '{best_before}');"
    )
    cursor.execute(query)
    cnx.commit()
    cursor.close()
    cnx.close()


    return "ok", 200
    

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
    
    for i in range(len(result)):
        result[i] = list(result[i])
        result[i][2] = result[i][2].strftime("%Y-%m-%d")

    data = {"data": result}

    cursor.close()
    cnx.close()

    return data, 200

@app.route("/delete-item/<int:key_id>", methods=['DELETE'])
def delete(key_id):
    cnx = connect()
    cursor = cnx.cursor()
    query = (
        f"DELETE FROM fridge_1 WHERE ItemID = {key_id};"
    )
    try :
        cursor.execute(query)
        cnx.commit()
    except:
        print("faild to delete")
        cursor.close()
        cnx.close()

        return "failed", 404
    cursor.close()
    cnx.close()

    return "ok", 200

@app.route("/edit-item", methods=['PUT'])
def edit():
    cnx = connect()
    cursor = cnx.cursor()
    data = request.form
    try :
        key_id = data['ItemID']
        name = data['ItemName']
        exp = data['ExpDate']
        best_before = data['IsBestBefore']

    except KeyError:
        return "invalid request", 400

    query = (
        f"UPDATE fridge_1 SET ItemName = '{name}', ExpDate = '{exp}', IsBestBefore = '{best_before}' WHERE ItemID = {key_id};"
    )
    try :
        cursor.execute(query)
        cnx.commit()
    except:
        print("faild to edit")
        cursor.close()
        cnx.close()

        return "failed", 404
    cursor.close()
    cnx.close()

    return "ok", 200

app.run(host="0.0.0.0", port=5000, debug=True)
