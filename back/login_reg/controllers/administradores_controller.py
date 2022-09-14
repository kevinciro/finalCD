from flask import session, request, make_response, jsonify
from login_reg import app
from login_reg.models.administradores import Administrador
from flask_bcrypt import Bcrypt
from login_reg.security.token import generate_token_admin
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_cors import CORS
CORS(app)

bcrypt = Bcrypt(app)  # inicializando instancia de Bcrypt


@app.route('/administradores/login', methods=['POST'])
def login_administrador():
    dni = request.json['dni']
    password = request.json['password']

    formulario = {
        "dni": dni,
    }
    administrador = Administrador.get_by_dni(formulario)

    if not administrador:
        return make_response('could not verify', 401)

    token = generate_token_admin(password, administrador)

    return token


@app.route('/administradores/new', methods=['POST'])
def post_administrador():
    if not Administrador.valida_paciente(request.json):
        app.logger.error("Datos invalidos")
        return make_response("Datos invalidos", 401)

    pwd = bcrypt.generate_password_hash(request.json['password'])  # Me encripta el password

    administrador = {
        "first_name": request.json['first_name'],
        "last_name": request.json['last_name'],
        "dni": request.json['dni'],
        "password": pwd
    }

    administradorDTO = {
        "first_name": request.json['first_name'],
        "last_name": request.json['last_name'],
        "dni": request.json['dni']
    }

    id = Administrador.save(administrador)  # Guardando odontologo y recibo el ID del nuevo registro

    app.logger.info(f"Se creo al odontologo con id = {id}")
    return make_response(jsonify(administradorDTO), 200)


@app.route('/administradores', methods=['GET'])
@jwt_required()
def get_all_administradores():
    administradores = Administrador.get_all()

    administradoresDTO = []
    for i in range(len(administradores)):
        administradorDTO = {
            "first_name": administradores[i].first_name,
            "last_name": administradores[i].last_name,
            "dni": administradores[i].dni
        }
        administradoresDTO.append(administradorDTO)
    app.logger.info(f"Se consultaron todos los administradores")
    return make_response(jsonify(administradoresDTO), 200)


@app.route('/administradores/<int:id>', methods=['GET'])
@jwt_required()
def get_administrador_by_id(id):
    formulario = {
        "id": int(id)
    }

    administrador = Administrador.get_by_id(formulario)

    if not administrador:
        app.logger.error(f"Admin con id = {id} no encontrado")
        return make_response("Admin no encontrado", 400)

    administradorDTO = {
        "first_name": administrador.first_name,
        "last_name": administrador.last_name,
        "dni": administrador.dni
    }
    app.logger.info(f"Se consulto al administrador con id = {id}")
    session['administrador_id'] = id
    return make_response(jsonify(administradorDTO), 200)


@app.route('/administradores/update/<int:id>', methods=['PUT'])
@jwt_required()
def update_administrador(id):
    formulario = {
        "id": int(id),
        "first_name": request.json['first_name'],
        "last_name": request.json['last_name'],
        "dni": request.json['dni'],
    }

    formularioGet = {
        "id": int(id),
    }

    if not Administrador.get_by_id(formularioGet):
        app.logger.error(f"Administrador con id = {id} no encontrado")
        return make_response("administrador no encontrado", 400)

    # if not Odontologo.valida_odontologo(formulario):
    #     return make_response("Datos invalidos", 404)

    Administrador.update(formulario)
    app.logger.info(f"Se actualizo al administrador con id = {id}")
    return make_response("OK", 204)


@app.route('/administradores/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_administrador(id):
    formulario = {
        "id": int(id)
    }

    if not Administrador.get_by_id(formulario):
        app.logger.error(f"Paciente con id = {id} no encontrado")
        return make_response("Paciente no encontrado", 400)

    Administrador.delete(formulario)
    app.logger.info(f"Se elimino al administrador con id = {id}")
    return make_response("OK", 204)