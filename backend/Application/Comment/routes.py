from flask import Blueprint,jsonify,request,Response
from Application.models import Comment,comment_schema,comments_schema
from Application.__init__ import db,bcrypt

#Creating the blueprint
comment = Blueprint('comment',__name__)

@comment.route('/comment/get', methods =['GET'])
def get_comments():
    comments= Comment.query.all()
    results = comments_schema.dump(comments)
    return jsonify(results)




@comment.route('/comment/add' , methods=['POST'])
def add_categorie():  
    comment_text = request.form.get('comment_text')
    user_id = request.form.get('user_id')
    produit_id = request.form.get('produit_id')
    comment_to_add = Comment(comment_text=comment_text,user_id=user_id,produit_id=produit_id)
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