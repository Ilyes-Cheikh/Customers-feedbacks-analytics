from enum import unique
from Application.__init__ import db,ma
import datetime
from sqlalchemy.orm import relationship
#CATEGORIE 
class Categorie (db.Model):
    __table_args__ = {'extend_existing': True}
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
    __table_args__ = {'extend_existing': True}
    id_produit = db.Column(db.Integer , primary_key=True)
    nom_produit = db.Column (db.String(100), nullable=False)
    description = db.Column (db.Text, nullable=False)
    image = db.Column (db.String(150), nullable=False)
    categorie_id = db.Column(db.Integer, db.ForeignKey("categorie.id_categorie"), nullable=False)
    prix_produit = db.Column(db.Float, nullable=False)
    stock = db.Column(db.Integer)
    date_produit = db.Column(db.DateTime, default= datetime.datetime.now)
    comments = db.relationship('Comment', backref='Produit')
    detailachats = db.relationship('DetailAchat', backref='Produit')



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
class User (db.Model):
    __table_args__ = {'extend_existing': True}
    user_id = db.Column(db.Integer , primary_key=True)
    username = db.Column (db.String(100), nullable=False ,  unique=True)
    email =db.Column (db.String(100), nullable=False , unique=True)
    password = db.Column (db.String(100), nullable=False)
    address =  db.Column (db.String(150), nullable=False)
    mobile = db.Column (db.String(100), nullable=False)
    comments = db.relationship('Comment', backref='User')
    achats = db.relationship('Achat', backref='User')    
    

    def __init__ (self,username,email,password,address,mobile):
        self.username=username
        self.email = email
        self.password = password
        self.address = address
        self.mobile=mobile
      
class UserSchema(ma.Schema):
    class Meta:
        fields = ('user_id', 'username', 'email', 'password','address','mobile')


user_schema = UserSchema()
users_schema = UserSchema(many=True)

#COMMENTS
class Comment (db.Model):
    
    comment_id = db.Column(db.Integer , primary_key=True)
    comment_text = db.Column (db.String(100), nullable=False)
    comment_label = db.Column (db.String(10) , nullable=False)
    produit_id = db.Column(db.Integer, db.ForeignKey("produit.id_produit"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.user_id"), nullable=False)


    def __init__ (self,comment_text ,comment_label, produit_id, user_id):
        self.comment_text=comment_text
        self.comment_label=comment_label 
        self.produit_id=produit_id
        self.user_id = user_id
        
      
class CommentSchema(ma.Schema):
    class Meta:
        fields = ('comment_id', 'comment_text','comment_label', 'produit_id', 'user_id')


comment_schema = CommentSchema()
comments_schema = CommentSchema(many=True)

#Achats
class Achat (db.Model):
    __table_args__ = {'extend_existing': True}
    achat_id = db.Column(db.Integer , primary_key=True)
    date_Achat = db.Column(db.DateTime, default= datetime.datetime.now)
    prix_Total_Achat = db.Column(db.Float, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.user_id"), nullable=False)
    detailachats = db.relationship('DetailAchat', backref='Achat')

    def __init__ (self , prix_Total_Achat, user_id):
        self.prix_Total_Achat=prix_Total_Achat
        self.user_id = user_id
class AchatSchema(ma.Schema):
    class Meta:
        fields = ('achat_id', 'date_Achat','prix_Total_Achat', 'user_id')


achat_schema = AchatSchema()
achats_schema = AchatSchema(many=True)

#DetailAchat
class DetailAchat (db.Model):
    __table_args__ = {'extend_existing': True}
    detailachat_id = db.Column(db.Integer , primary_key=True, nullable=False)
    achat_id = db.Column(db.Integer ,db.ForeignKey("achat.achat_id"), nullable=False)
    quantite = db.Column(db.Integer, nullable=False)
    id_produit = db.Column(db.Integer, db.ForeignKey("produit.id_produit"), nullable=False)
    def __init__ (self , achat_id, quantite,id_produit):
        self.achat_id=achat_id
        self.quantite = quantite
        self.id_produit = id_produit
class DetailAchatSchema(ma.Schema):
    class Meta:
        fields = ('detailachat_id','achat_id', 'quantite','id_produit')


detailachat_schema = DetailAchatSchema()
detailachats_schema = DetailAchatSchema(many=True)

class JoinDetailAchatSchema(ma.Schema):
    class Meta:
        fields = ('detailachat_id','achat_id', 'quantite','id_produit',"date_Achat","prix_Total_Achat","nom_produit","user_id","prix_produit")
joindetailachat_schema = JoinDetailAchatSchema()
joindetailachats_schema = JoinDetailAchatSchema(many=True)