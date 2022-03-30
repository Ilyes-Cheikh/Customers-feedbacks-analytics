from flask import Flask , request, jsonify, json, Response
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import datetime
from flask_marshmallow import Marshmallow
from flask_cors import CORS




UPLOAD_FOLDER = '..\\frontend\\public\\uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}


ma = Marshmallow()
cors = CORS()
db = SQLAlchemy()
def create_app():

        app = Flask(__name__)
        app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
        app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:123456@localhost/pcd'
        app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
        db.init_app(app)
        ma.init_app(app)
        cors.init_app(app)

        from Application.Produit.routes import produit
        from Application.Categorie.routes import categorie
        app.register_blueprint(produit)
        app.register_blueprint(categorie)
        
        @app.route('/')
        def index():
                 return(" hello new  world")
 
        return app









 


