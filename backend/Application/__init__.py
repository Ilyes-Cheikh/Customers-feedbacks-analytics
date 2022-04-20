from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import datetime
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_bcrypt import Bcrypt



UPLOAD_FOLDER = '..\\frontend\\public\\uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}


ma = Marshmallow()
cors = CORS()
db = SQLAlchemy()
bcrypt = Bcrypt()
def create_app():

        app = Flask(__name__)
        app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
        app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:s41565383h@localhost/pcd'
        app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
        db.init_app(app)
        ma.init_app(app)
        cors.init_app(app)
        bcrypt.init_app(app)
        with app.app_context():
                from Application.Produit.routes import produit
                from Application.Categorie.routes import categorie
                from Application.User.routes import user
                from Application.Comment.routes import comment
                app.register_blueprint(produit)
                app.register_blueprint(categorie)
                app.register_blueprint(user)
                app.register_blueprint(comment)
        @app.route('/')
        def index():
                 return(" hello new  world")
 
        return app









 


