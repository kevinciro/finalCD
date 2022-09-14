from flask import render_template, redirect, session, request, flash, make_response, \
    jsonify  # importaciones de módulos de flask
from flask_jwt_extended import jwt_required
from login_reg import app
from login_reg.models.odontologos import Odontologo
from flask_bcrypt import Bcrypt
from login_reg.security.token import generate_token_odontologo
from flask_cors import CORS
CORS(app)

bcrypt = Bcrypt(app)  # inicializando instancia de Bcrypt


@app.route('/odontologos/login', methods=['POST'])
def login_odontologo():
    dni = request.json['dni']
    password = request.json['password']

    formulario = {
        "dni": dni,
    }
    odontologo = Odontologo.get_by_dni(formulario)

    if not odontologo:
        return make_response('could not verify', 401)

    token = generate_token_odontologo(password, odontologo)

    return token


@app.route('/odontologos/new', methods=['POST'])
def post_odontologo():
    # body = {
    #   "first_name": "Elena",
    #   "last_name": "De Troya",
    #   "registration_number": "12345341",
    #   "dni": 1231231,
    #   "password": "123456",
    # }

    # if not Odontologo.valida_odontologo(request.json):
    #     app.logger.error("Datos invalidos")
    #     return make_response("Datos invalidos", 404)

    pwd = bcrypt.generate_password_hash(request.json['password'])  # Me encripta el password

    odontologo = {
        "first_name": request.json['first_name'],
        "last_name": request.json['last_name'],
        "registration_number": request.json['registration_number'],
        "dni": request.json['dni'],
        "password": pwd
    }

    odontologoDTO = {
        "first_name": request.json['first_name'],
        "last_name": request.json['last_name'],
        "registration_number": request.json['registration_number'],
        "dni": request.json['dni']
    }

    id = Odontologo.save(odontologo)  # Guardando odontologo y recibo el ID del nuevo registro

    session['Odontologo_id'] = id # Guardando en sesion el identificador
    app.logger.info(f"Se creo al odontologo con id = {id}")
    return make_response(jsonify(odontologoDTO), 200)


@app.route('/odontologos', methods=['GET'])
@jwt_required()
def get_all_odontologos():
    odontologos = Odontologo.get_all()

    odontologosDTO = []
    for i in range(len(odontologos)):
        odontologoDTO = {
            "first_name": odontologos[i].first_name,
            "last_name": odontologos[i].last_name,
            "registration_number": odontologos[i].registration_number
        }
        odontologosDTO.append(odontologoDTO)
    app.logger.info(f"Se consultaron todos los odontologos")
    return make_response(jsonify(odontologosDTO), 200)


@app.route('/odontologos/<int:id>', methods=['GET'])
@jwt_required()
def get_odontologo_by_id(id):
    formulario = {
        "id": int(id)
    }

    odontologo = Odontologo.get_by_id(formulario)

    if not odontologo:
        app.logger.error(f"Odontologo con id = {id} no encontrado")
        return make_response("Odontologo no encontrado", 400)

    odontologoDTO = {
        "first_name": odontologo.first_name,
        "last_name": odontologo.last_name,
        "registration_number": odontologo.registration_number
    }
    app.logger.info(f"Se consulto al odontologo con id = {id}")
    return make_response(jsonify(odontologoDTO), 200)


@app.route('/odontologos/registration_number/<int:registration>', methods=['GET'])
@jwt_required()
def get_odontologo_by_registration_number(registration):
    formulario = {
        "registration_number": int(registration)
    }

    odontologo = Odontologo.get_by_registration_number(formulario)

    if not odontologo:
        app.logger.error(f"Odontologo con id = {id} no encontrado")
        return make_response("Odontologo no encontrado", 400)

    odontologoDTO = {
        "first_name": odontologo.first_name,
        "last_name": odontologo.last_name,
        "registration_number": odontologo.registration_number
    }
    app.logger.info(f"Se consulto al odontologo con id = {id}")
    return make_response(jsonify(odontologoDTO), 200)


@app.route('/odontologos/update/<int:registration>', methods=['PUT'])
@jwt_required()
def update_odontologo(registration):
    formularioGet = {
        "registration_number": int(registration),
    }

    odontologo = Odontologo.get_by_registration_number(formularioGet)

    if not odontologo:
        app.logger.error(f"Odontologo con id = {id} no encontrado")
        return make_response("Odontologo no encontrado", 400)

    # if not Odontologo.valida_odontologo(formulario):
    #     return make_response("Datos invalidos", 404)

    formulario = {
        "id":odontologo.id,
        "first_name": request.json['first_name'],
        "last_name": request.json['last_name'],
        "registration_number": request.json['registration_number'],
    }

    Odontologo.update(formulario)
    app.logger.info(f"Se actualizo al odontologo con id = {id}")
    return make_response("OK", 204)


@app.route('/odontologos/<int:registration>', methods=['DELETE'])
@jwt_required()
def delete_odontologo(registration):
    formularioGet = {
        "registration_number": registration,
    }

    odontologo = Odontologo.get_by_registration_number(formularioGet)
    print(odontologo)

    if not odontologo:
        app.logger.error(f"Odontologo con id = {id} no encontrado")
        return make_response("Odontologo no encontrado", 400)

    formulario = {
        "id": odontologo.id
    }

    Odontologo.delete(formulario)
    app.logger.info(f"Se elimino al odontologo con id = {id}")
    return make_response("OK", 204)

