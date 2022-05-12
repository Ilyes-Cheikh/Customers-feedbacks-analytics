from flask import Blueprint,jsonify,request,Response
from Application.models import Achat,achat_schema,achats_schema
from Application.__init__ import db

#Creating the blueprint
achat = Blueprint('achat',__name__)


#Routes
@achat.route('/achat/get', methods =['GET'])
def get_achats():
    achats= Achat.query.all()
    results = achats_schema.dump(achats)
    return jsonify(results)




@achat.route('/achat/add' , methods=['POST'])
def add_achat():  
    user_id = request.form.get('user_id')
    prix_Total_Achat=request.form.get('prix_Total_Achat')
    achat_to_add = Achat(user_id=user_id,prix_Total_Achat=prix_Total_Achat)
    db.session.add(achat_to_add)
    db.session.commit()
    return achat_schema.jsonify(achat_to_add)

@achat.route('/achat/delete/<id>' , methods=['DELETE'] )
def delete_achat(id):
    achat_to_delete = Achat.query.get(id)
    db.session.delete(achat_to_delete)
    db.session.commit()
    return "object deleted successfully !"

@achat.route('/achat/update/<id>', methods=['PUT'])
def update_achat(id):
    achat_to_update=Achat.query.get(id)
    user_id = request.form.get('user_id')
    prix_Total_Achat=request.form.get('prix_Total_Achat')
    achat_to_update.user_id=user_id
    achat_to_update.prix_Total_Achat=prix_Total_Achat

    db.session.commit()
    return achat_schema.jsonify(achat_to_update)