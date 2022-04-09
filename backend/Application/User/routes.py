from flask import Blueprint,jsonify,request,Response
from Application.models import User,user_schema,users_schema
from Application.__init__ import db, bcrypt

#Creating the blueprint
user = Blueprint('user',__name__)

@user.route('/user/get', methods =['GET'])
def get_users():
    users= User.query.all()
    results = users_schema.dump(users)
    return jsonify(results)


@user.route('/user/get/<id>' , methods =['GET'])
def get_user_by_id(id):
    user=User.query.get(id)
    return user_schema.jsonify(user)

@user.route('/user/add' , methods=['POST'])
def add_categorie():  
    username = request.form.get('username')
    email = request.form.get('email')
    password = request.form.get('password')
    address = request.form.get('address')
    mobile = request.form.get('mobile')
    hashed_password=bcrypt.generate_password_hash(password).decode('utf-8') 
    user_to_add = User(username=username,email=email,password=hashed_password,address=address,mobile=mobile)
    db.session.add(user_to_add)
    db.session.commit()
    return user_schema.jsonify(user_to_add)

@user.route('/user/delete/<id>' , methods=['DELETE'] )
def delete_user(id):
    user_to_delete = User.query.get(id)
    db.session.delete(user_to_delete)
    db.session.commit()
    return "object deleted successfully !"

@user.route('/user/update/<id>', methods=['PUT'])
def update_user(id):
    user_to_update=User.query.get(id)
    username= request.form.get('username')
    email= request.form.get('email')
    address= request.form.get('address')
    mobile= request.form.get('mobile')
    password = request.form.get('password')
    if username is not None:
        user_to_update.username=username
    if email is not None:
         user_to_update.email=email
    if password is not None:
         hashed_password=bcrypt.generate_password_hash(password).decode('utf-8') 
         user_to_update.password=hashed_password
    if address is not None:
        user_to_update.address=address
    if mobile is not None:
         user_to_update.mobile=mobile
        
    db.session.commit()
    return user_schema.jsonify(user_to_update)