import mimetypes
from flask import Flask , request, jsonify, json, Response
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import datetime
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from base64 import b64encode
import base64
import os
from werkzeug.utils import secure_filename


app = Flask(__name__)
ma = Marshmallow(app)
CORS(app)
<<<<<<< HEAD
UPLOAD_FOLDER = '::\\frontend\\public\\uploads'
=======
UPLOAD_FOLDER = '..\\frontend\\public\\uploads'
>>>>>>> d53e8de52386b845506cd70aa31db19ecbffc6e0
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:s41565383h@localhost/sri'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

class Produit (db.Model):
    id_produit = db.Column(db.Integer , primary_key=True)
    nom_produit = db.Column (db.String(100), nullable=False)
    description = db.Column (db.Text, nullable=False)
    image = db.Column (db.String(150), nullable=False)
    mimetype = db.Column (db.Text)
    prix_produit = db.Column(db.Float, nullable=False)
    stock = db.Column(db.Integer)
    date_produit = db.Column(db.DateTime, default= datetime.datetime.now)
    def __init__ (self, nom_produit, description, image, mimetype, prix_produit, stock):
        self.nom_produit = nom_produit
        self.description= description
        self.image = image
        self.mimetype = mimetype
        self.prix_produit= prix_produit
        self.stock = stock
      
class ProduitSchema(ma.Schema):
    class Meta:
        fields = ('id_produit', 'nom_produit', 'description', 'image', 'mimetype' ,'prix_produit' ,'stock')


produit_schema = ProduitSchema()
produits_schema = ProduitSchema(many=True)

@app.route('/')
def index():

   return(" hello world")
 
@app.route('/get', methods =['GET'])
def get_produits():
    produits= Produit.query.all()
    results = produits_schema.dump(produits)
    return jsonify(results)


@app.route('/get/<id>' , methods = ['GET'])
def get_produit(id):
    produit_to_get = Produit.query.get(id)
    return produit_schema.jsonify(produit_to_get)


@app.route('/add' , methods=['POST'])
def add_produit():
    file = request.files['image']
    if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    
    
    mimetype = file.mimetype
    nom_produit = request.form.get('nom_produit')
    description = request.form.get('description')
    prix_produit = request.form.get('prix_produit')
    stock = request.form.get('stock') 
    produit = Produit(nom_produit=nom_produit,description=description, image=filename, mimetype=mimetype ,prix_produit=prix_produit,stock=stock)
    db.session.add(produit)
    db.session.commit()
    return produit_schema.jsonify(produit)



@app.route('/delete/<id>' , methods=['DELETE']) 
def delete_produit(id):
    produit_to_delete = Produit.query.get(id)
    db.session.delete(produit_to_delete)
    db.session.commit()
    return "article deleted successfully !"

@app.route('/update/<id>', methods=['PUT'])
def update_produit(id):
    produit_to_update=Produit.query.get(id)
    file = request.files['image']
    if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    

    mimetype = file.mimetype
    nom_produit = request.form.get('nom_produit')
    description = request.form.get('description')
    prix_produit = request.form.get('prix_produit')
    stock = request.form.get('stock') 
    produit_to_update.image = filename
    produit_to_update.mimetype=mimetype
    produit_to_update.nom_produit=nom_produit
    produit_to_update.description = description
    produit_to_update.prix_produit= prix_produit
    produit_to_update.stock = stock
    db.session.commit()
    return produit_schema.jsonify(produit_to_update)


if (__name__) == "__main__" :
       app.run()