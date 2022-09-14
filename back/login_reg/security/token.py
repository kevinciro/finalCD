from flask import jsonify, make_response
from login_reg import app
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token

bcrypt = Bcrypt(app)  # inicializando instancia de Bcrypt


def generate_token_paciente(password, paciente):
    # se valida la contraseña y si coincide se genera el token
    if bcrypt.check_password_hash(paciente.password, password):
        # El paciente tendra un token con un identity que terminara siempre en paciente
        token = create_access_token(identity=str(paciente.dni) + "paciente")
        return jsonify({"token": token, "paciente_id": paciente.id})
    # si no coinciden las contraseñas se responde con error de datos
    return make_response('could not verify', 401)


def generate_token_odontologo(password, odontologo):
    # se valida la contraseña y si coincide se genera el token
    if bcrypt.check_password_hash(odontologo.password, password):
        # El odontologo tendra un token con un identity que terminara siempre en odontologo
        token = create_access_token(identity=str(odontologo.dni) + "odontologo")
        return jsonify({"token": token, "paciente_id": odontologo.id})
    # si no coinciden las contraseñas se responde con error de datos
    return make_response('could not verify', 401)


def generate_token_admin(password, administrador):
    # se valida la contraseña y si coincide se genera el token
    if bcrypt.check_password_hash(administrador.password, password):
        # El administrador tendra un token con un identity que terminara siempre en administrador
        token = create_access_token(identity=str(administrador.dni) + "administrador")
        return jsonify({"token": token, "paciente_id": administrador.id})
    # si no coinciden las contraseñas se responde con error de datos
    return make_response('could not verify', 401)
