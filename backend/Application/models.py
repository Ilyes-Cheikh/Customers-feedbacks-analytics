from Application.__init__ import db,ma
import datetime
from sqlalchemy.orm import relationship
#CATEGORIE 
class Categorie (db.Model):
    
    id_categorie = db.Column(db.Integer , primary_key=True)
    nom_categorie = db.Column (db.String(100), nullable=False)
    produits = db.relationship('Produit', backref='categorie')
    
    def __init__ (self, id_categorie ,nom_categorie):
        self.id_categorie= id_categorie
        self.nom_categorie = nom_categorie
   
      
class CategorieSchema(ma.Schema):
    class Meta:
        fields = ('id_categorie', 'nom_categorie')


categorie_schema = CategorieSchema()
categories_schema = CategorieSchema(many=True)


#PRODUIT
class Produit (db.Model):
    
    id_produit = db.Column(db.Integer , primary_key=True)
    nom_produit = db.Column (db.String(100), nullable=False)
    description = db.Column (db.Text, nullable=False)
    image = db.Column (db.String(150), nullable=False)
    categorie_id = db.Column(db.Integer, db.ForeignKey("categorie.id_categorie"), nullable=False)
    prix_produit = db.Column(db.Float, nullable=False)
    stock = db.Column(db.Integer)
    date_produit = db.Column(db.DateTime, default= datetime.datetime.now)
    


    def __init__ (self, nom_produit, description, image, categorie_id, prix_produit, stock):
        self.nom_produit = nom_produit
        self.description= description
        self.image = image
        self.categorie_id = categorie_id
        self.prix_produit= prix_produit
        self.stock = stock
      
class ProduitSchema(ma.Schema):
    class Meta:
        fields = ('id_produit', 'nom_produit', 'description', 'image', 'categorie_id' ,'prix_produit' ,'stock')


produit_schema = ProduitSchema()
produits_schema = ProduitSchema(many=True)


#USER
class User(db.model):
    user_id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)
        


#COMMENTS
class Comments(db.model):
