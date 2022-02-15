from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:ilyes11071999@localhost/PCD'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Produit (db.Model):
    id_produit = db.Column(db.Integer , primary_key=True)
    nom_produit = db.Column (db.String(100))
    description = db.Column (db.Text())
    image = db.Column()
    prix_produit = db.Column(db.Flaot)
    stock = db.Column(db.Integer)
    date_produit = db.Column(db.DateTime, default= datetime.datetime.now)
    def __init__ (self, nom_produit, description, prix_produit, stock):
        self.nom_produit = nom_produit
        self.description= description
        self.stock = stock
        self.prix_produit= prix_produit


@app.route('/')
def index():
    return(" hello bb ")



if (__name__) == "__main__" :
    app.run()