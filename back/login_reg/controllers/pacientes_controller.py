from flask import render_template, redirect, session, request, flash, make_response, \
    jsonify  # importaciones de módulos de flask
from login_reg import app
from login_reg.models.pacientes import Paciente
from flask_bcrypt import Bcrypt
from login_reg.security.token import generate_token_paciente
from flask_jwt_extended import jwt_required, get_jwt_identity

from flask_cors import CORS
CORS(app)


bcrypt = Bcrypt(app)  # inicializando instancia de Bcrypt


@app.route('/pacientes/login', methods=['POST'])
def login_paciente():
    dni = request.json['dni']
    password = request.json['password']

    formulario = {
        "dni": dni,
    }
    paciente = Paciente.get_by_dni(formulario)

    if not paciente:
        return make_response('could not verify', 401)

    token = generate_token_paciente(password, paciente)

    return token


@app.route('/pacientes/new', methods=['POST'])
def post_paciente():
    if not Paciente.valida_paciente(request.json):
        app.logger.error("Datos invalidos")
        return make_response("Datos invalidos", 401)

    pwd = bcrypt.generate_password_hash(request.json['password'])  # Me encripta el password

    paciente = {
        "first_name": request.json['first_name'],
        "last_name": request.json['last_name'],
        "dni": request.json['dni'],
        "password": pwd
    }

    pacienteDTO = {
        "first_name": request.json['first_name'],
        "last_name": request.json['last_name'],
        "dni": request.json['dni']
    }

    id = Paciente.save(paciente)  # Guardando odontologo y recibo el ID del nuevo registro

    session['Paciente_id'] = id  # Guardando en sesion el identificador
    app.logger.info(f"Se creo al odontologo con id = {id}")
    return make_response(jsonify(pacienteDTO), 200)


@app.route('/pacientes', methods=['GET'])
@jwt_required()
def get_all_pacientes():
    pacientes = Paciente.get_all()

    pacientesDTO = []
    for i in range(len(pacientes)):
        pacienteDTO = {
            "first_name": pacientes[i].first_name,
            "last_name": pacientes[i].last_name,
            "dni": pacientes[i].dni
        }
        pacientesDTO.append(pacienteDTO)
    app.logger.info(f"Se consultaron todos los pacientes")
    return make_response(jsonify(pacientesDTO), 200)


@app.route('/pacientes/<int:dni>', methods=['GET'])
@jwt_required()
def get_paciente_by_dni(dni):
    formulario = {
        "dni": int(dni)
    }

    paciente = Paciente.get_by_dni(formulario)

    if not paciente:
        app.logger.error(f"Paciente con id = {id} no encontrado")
        return make_response("Paciente no encontrado", 400)

    pacienteDTO = {
        "first_name": paciente.first_name,
        "last_name": paciente.last_name,
        "dni": paciente.dni
    }
    app.logger.info(f"Se consulto al paciente con id = {id}")
    return make_response(jsonify(pacienteDTO), 200)


@app.route('/pacientes/update/<int:id>', methods=['PUT'])
@jwt_required()
def update_paciente(id):
    formulario = {
        "id": int(id),
        "first_name": request.json['first_name'],
        "last_name": request.json['last_name'],
        "dni": request.json['dni'],
    }

    formularioGet = {
        "id": int(id),
    }

    if not Paciente.get_by_id(formularioGet):
        app.logger.error(f"Paciente con id = {id} no encontrado")
        return make_response("Paciente no encontrado", 400)

    # if not Odontologo.valida_odontologo(formulario):
    #     return make_response("Datos invalidos", 404)

    Paciente.update(formulario)
    app.logger.info(f"Se actualizo al paciente con id = {id}")
    return make_response("OK", 204)


@app.route('/pacientes/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_paciente(id):
    formulario = {
        "id": int(id)
    }

    if not Paciente.get_by_id(formulario):
        app.logger.error(f"Paciente con id = {id} no encontrado")
        return make_response("Paciente no encontrado", 400)

    Paciente.delete(formulario)
    app.logger.info(f"Se elimino al paciente con id = {id}")
    return make_response("OK", 204)
