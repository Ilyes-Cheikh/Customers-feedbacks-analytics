from flask import Blueprint,jsonify,request,Response
from Application.models import Achat, DetailAchat,Produit,detailachat_schema,detailachats_schema,joindetailachats_schema
from Application.__init__ import db

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker



#Creating the blueprint
detailachat = Blueprint('detailachat',__name__)

@detailachat.route('/detailachat/get', methods =['GET'])
def get_detailachats():
    detailachats= DetailAchat.query.all()
    results = detailachats_schema.dump(detailachats)
    return jsonify(results)


@detailachat.route('/detailachat/getbyachat/<achat_id>' , methods = ['GET'])
def get_datailachat_byachatId(achat_id):
    datailachat_to_get = DetailAchat.query.filter_by(achat_id=achat_id)
    return detailachats_schema.jsonify(datailachat_to_get)



@detailachat.route('/detailachat/add' , methods=['POST'])
def add_detailachat():  
    achat_id = request.form.get('achat_id')
    quantite=request.form.get('quantite')
    id_produit=request.form.get('id_produit')

    
    detailachat_to_add = DetailAchat(achat_id=achat_id,quantite=quantite,id_produit=id_produit)
    db.session.add(detailachat_to_add)
    db.session.commit()
    return detailachat_schema.jsonify(detailachat_to_add)

@detailachat.route('/detailachat/delete/<id>' , methods=['DELETE'] )
def delete_detailachat(id):
    detailachat_to_delete = DetailAchat.query.get(id)
    db.session.delete(detailachat_to_delete)
    db.session.commit()
    return "object deleted successfully !"

@detailachat.route('/detailachat/update/<id>', methods=['PUT'])
def update_detailachat(id):
    detailachat_to_update=DetailAchat.query.get(id)
    achat_id = request.form.get('achat_id')
    quantite=request.form.get('quantite')
    id_produit=request.form.get('id_produit')
    detailachat_to_update.achat_id=achat_id
    detailachat_to_update.quantite=quantite
    detailachat_to_update.id_produit=id_produit


    db.session.commit()
    return detailachat_schema.jsonify(detailachat_to_update)

@detailachat.route('/detailachat/getall', methods =['GET'])
def get_achat_join_detailachat():
    detailachats = DetailAchat.query.join(Achat, DetailAchat.achat_id == Achat.achat_id)\
                                .add_columns(DetailAchat.detailachat_id,DetailAchat.achat_id,Achat.user_id, Achat.date_Achat, Achat.prix_Total_Achat,DetailAchat.id_produit,DetailAchat.quantite)\
                                .join(Produit, DetailAchat.id_produit==Produit.id_produit)\
                                .add_columns(Produit.nom_produit,Produit.prix_produit)\
                                .all()

    results = joindetailachats_schema.dump(detailachats)
    return jsonify(results)
