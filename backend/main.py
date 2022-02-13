from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

@app.route('/')
def index():
    return(" hello bb ")



if (__name__) == "__main__" :
    app.run()