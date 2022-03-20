from Application.__init__ import db,ma
import datetime

#CATEGORIE 
class Categorie (db.Model):
    id_categorie = db.Column(db.Integer , primary_key=True)
    nom_categorie = db.Column (db.String(100), nullable=False)

    
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
    catId = db.Column(db.Integer, db.ForeignKey("Categorie.id_categorie"), nullable=False)
    prix_produit = db.Column(db.Float, nullable=False)
    stock = db.Column(db.Integer)
    date_produit = db.Column(db.DateTime, default= datetime.datetime.now)
    
    def __init__ (self, nom_produit, description, image, catId, prix_produit, stock):
        self.nom_produit = nom_produit
        self.description= description
        self.image = image
        self.catId = catId
        self.prix_produit= prix_produit
        self.stock = stock
      
class ProduitSchema(ma.Schema):
    class Meta:
        fields = ('id_produit', 'nom_produit', 'description', 'image', 'categorie' ,'prix_produit' ,'stock')


produit_schema = ProduitSchema()
produits_schema = ProduitSchema(many=True)