from flask import Blueprint,jsonify,request,Response
from Application.models import Categorie,categorie_schema,categories_schema
from Application.__init__ import db

#Creating the blueprint
categorie = Blueprint('categorie',__name__)


#Routes
@categorie.route('/categorie/get', methods =['GET'])
def get_categories():
    categories= Categorie.query.all()
    results = categories_schema.dump(categories)
    return jsonify(results)



@categorie.route('/categorie/add' , methods=['POST'])
def add_categorie():  
    id_categorie = request.form.get('id_categorie')
    nom_categorie = request.form.get('nom_categorie')
    categorie_to_add = Categorie(id_categorie=id_categorie, nom_categorie=nom_categorie)
    db.session.add(categorie_to_add)
    db.session.commit()
    return categorie_schema.jsonify(categorie_to_add)

@categorie.route('/categorie/delete/<id>' , methods=['DELETE'] )
def delete_categorie(id):
    categorie_to_delete = Categorie.query.get(id)
    db.session.delete(categorie_to_delete)
    db.session.commit()
    return "object deleted successfully !"

@categorie.route('/categorie/update/<id>', methods=['PUT'])
def update_categorie(id):
    categorie_to_update=Categorie.query.get(id)
    nom_categorie = request.form.get('nom_categorie')
    categorie_to_update.nom_categorie=nom_categorie
    db.session.commit()
    return categorie_schema.jsonify(categorie_to_update)