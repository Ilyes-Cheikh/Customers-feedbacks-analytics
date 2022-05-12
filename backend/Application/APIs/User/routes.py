from os import access
from flask import Blueprint, flash,jsonify,request,Response,json
from numpy import identity
from Application.models import User,user_schema,users_schema
from Application.__init__ import db, bcrypt
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import unset_jwt_cookies
from flask_jwt_extended import get_jwt,get_jwt_identity

#Creating the blueprint
user = Blueprint('user',__name__)

@user.route('/user/get', methods =['GET'])
def get_users():
    users= User.query.all()
    results = users_schema.dump(users)
    return jsonify(results)


@user.route('/user/get/<id>' , methods =['GET'])
def get_userbyId(id):
    user=User.query.get(id) 
    return user_schema.jsonify(user)

@user.route('/user/register' , methods=['POST' , 'GET'])
def add_user():  
    username = request.form.get('username')
    email = request.form.get('email')
    password = request.form.get('password')
    address = request.form.get('address')
    mobile = request.form.get('mobile')
    existing_username = User.query.filter_by(username=username).first()
    existing_email =  User.query.filter_by(email=email).first()
    if existing_username is None and existing_email is None:
            hashed_password=bcrypt.generate_password_hash(password).decode('utf-8') 
            user_to_add = User(username=username,email=email,password=hashed_password,address=address,mobile=mobile)
            db.session.add(user_to_add)
            db.session.commit()
            return ("Cet utilisateur a été ajouté avec succès !")
    elif existing_username and existing_email is None:
        return jsonify({"erreur" :"Le nom d'utilisateur existe déjà !"}) , 401
    elif existing_email and existing_username is None:
        return jsonify({"erreur" :"L'email existe déjà !"}) , 401
    elif existing_username and existing_email:
        return jsonify({'erreur' :"Le nom d'utilisateur et l'email existent déjà !"}) , 401

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


@user.route('/token' , methods=['POST'])
def create_token():
    email=request.form.get('email')
    password=request.form.get('password')
    user = User.query.filter_by(email=email).one_or_none()
    if not user or not bcrypt.check_password_hash(user.password, password):
        return jsonify({"msg" : "Email et/ou mot de passe incorrect(s) !"}) ,401
    access_token = create_access_token(identity=user.user_id)
    return jsonify(access_token=access_token) 



@user.route("/logout", methods=["POST"])
def logout():
    response = jsonify({"message": "Déconnexion réussie"})
    unset_jwt_cookies(response)
    return response


@user.after_request
def refresh_expiring_jwts(response):
    try:
        exp_timestamp = get_jwt()["exp"]
        now = datetime.now(timezone.utc)
        target_timestamp = datetime.timestamp(now + timedelta(minutes=30))
        if target_timestamp > exp_timestamp:
            access_token = create_access_token(identity=get_jwt_identity())
            data = response.get_json()
            if type(data) is dict:
                data["access_token"] = access_token 
                response.data = json.dumps(data)
        return response
    except (RuntimeError, KeyError):
        # Case where there is not a valid JWT. Just return the original respone
        return response


@user.route('/profile')
@jwt_required()
def my_profile():
    current_user_id = get_jwt_identity()
    current_user = User.query.get(current_user_id)
    return user_schema.jsonify(current_user) , 200
 