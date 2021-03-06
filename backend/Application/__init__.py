from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import datetime
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from datetime import datetime, timedelta, timezone
from flask_jwt_extended import JWTManager


UPLOAD_FOLDER = '..\\frontend\\public\\uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}


ma = Marshmallow()
cors = CORS()
db = SQLAlchemy()
bcrypt = Bcrypt()
jwt = JWTManager()
def create_app():

        app = Flask(__name__)
        app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
        app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:ilyes11071999@localhost/pcd'
        app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
        app.config["JWT_SECRET_KEY"] = "pcd"
        app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=24)
        db.init_app(app)
        ma.init_app(app)
        cors.init_app(app)
        bcrypt.init_app(app)
        jwt.init_app(app)
        with app.app_context():
                from Application.APIs.Produit.routes import produit
                from Application.APIs.Categorie.routes import categorie
                from Application.APIs.User.routes import user
                from Application.APIs.Comment.routes import comment
                from Application.APIs.Achat.routes import achat
                from Application.APIs.DetailAchat.routes import detailachat

                app.register_blueprint(produit)
                app.register_blueprint(categorie)
                app.register_blueprint(user)
                app.register_blueprint(comment)
                app.register_blueprint(achat)
                app.register_blueprint(detailachat)


        @app.route('/')
        def index():
                 return("This Server is running correctly !")
 
        return app









 


