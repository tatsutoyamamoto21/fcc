from flask import Flask, request, jsonify
from mysql import connector


app = Flask(__name__)

def connect():
    """connects to the sql server
       returns the connection object"""
    try:
        # connection to the mysql server running on local host
        cnx = connector.connect(
            host="localhost", database="", user="",
            password="",
            )
        return cnx
    except:
        # for when the MySql server is down or unable to connect
        print("error connecting to sql server")
        exit()

@app.route("/")
def post():
    pass

@app.route("/get-all-data")
def get():
    pass

app.run(host="0.0.0.0", port=5000, debug=True)

