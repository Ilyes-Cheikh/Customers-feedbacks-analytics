from flask import Blueprint,jsonify,request,Response,json
from Application.models import Comment,comment_schema,comments_schema,User,commentjoinusers_schema
from Application.__init__ import db,bcrypt
from Application.APIs.Comment.utils import predict


#Creating the blueprint
comment = Blueprint('comment',__name__)

@comment.route('/comment/get', methods =['GET'])
def get_comments():
    comments= Comment.query.all()
    results = comments_schema.dump(comments)
    return jsonify(results)


@comment.route('/comment/get/byidproduit/<id>', methods =['GET'])
def get_stat_by_idproduit(id):
    total_number_of_comments= len(Comment.query.filter_by(produit_id = id).all())
    number_of_positive_comments = len(Comment.query.filter_by(produit_id = id , comment_label = "positive").all())
    if total_number_of_comments != 0 : 
      satisfaction_rate = number_of_positive_comments / number_of_positive_comments
    else : satisfaction_rate = 0 
    result={"comments_number" : total_number_of_comments, "satisfaction_rate" : satisfaction_rate }
    return result
import json



  
@comment.route('/comment/getbyproduit/<id_produit>', methods =['GET'])
def get_comments_by_idproduit(id_produit):
    comments_to_get = Comment.query.filter_by(produit_id=id_produit)
    return comments_schema.jsonify(comments_to_get)



@comment.route('/comment/add' , methods=['POST'])
def add_comment():  
    comment_text = request.form.get('comment_text')
    user_id = request.form.get('user_id')
    produit_id = request.form.get('produit_id')
    comment_label = predict(comment_text)
    comment_to_add = Comment(comment_text=comment_text,comment_label=comment_label,user_id=user_id,produit_id=produit_id)
    db.session.add(comment_to_add)
    db.session.commit()
    return comment_schema.jsonify(comment_to_add)

@comment.route('/comment/delete/<id>' , methods=['DELETE'] )
def delete_comment(id):
    comment_to_delete = Comment.query.get(id)
    db.session.delete(comment_to_delete)
    db.session.commit()
    return "object deleted successfully !"

@comment.route('/comment/update/<id>', methods=['PUT'])
def update_comment(id):
    comment_to_update=Comment.query.get(id)
    comment_text= request.form.get('comment_text')
    comment_to_update.comment_text=comment_text
    db.session.commit()
    return comment_schema.jsonify(comment_to_update)



@comment.route('/comment/get/joinuser/<id>', methods=['GET'] )
def get_commentjoinuser_byidproduit(id):
    comments = Comment.query.join(User, Comment.user_id == User.user_id)\
                                .add_columns(Comment.comment_id,Comment.comment_text,Comment.user_id, User.username, User.email)\
                                .all()

    results = commentjoinusers_schema.dump(comments)
    return jsonify(results)
