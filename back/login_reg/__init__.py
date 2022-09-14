from flask import Flask
import logging
from flask_jwt_extended import JWTManager
# logging.basicConfig(filename='record.log', format='%(asctime)s %(levelname)s %(name)s %(threadName)s : %(message)s')
from datetime import timedelta

app = Flask(__name__)

app.secret_key = 'llave secreta'

# Setup the Flask-JWT-Extended extension
app.config["JWT_COOKIE_SECURE"] = False
app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this in your code!
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
jwt = JWTManager(app)