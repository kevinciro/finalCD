from flask import render_template, redirect, session, request, flash, make_response, jsonify  # importaciones de módulos de flask
from flask_jwt_extended import jwt_required

from login_reg import app
from login_reg.models.pacientes import Paciente
from login_reg.models.odontologos import Odontologo
from login_reg.models.turnos import Turno


@app.route('/turnos/new', methods=['POST'])
@jwt_required()
def post_turno():
    # body = {
    #   "duration_min": 20,
    #   "active": 1,
    #   "date": 1231231,
    #   "odontologo_id": "1",
    #   "paciente_id": "1",
    # }

    es_valido, mensaje = Turno.valida_turno(request.form)

    if not es_valido:
        return make_response(mensaje, 404)

    # falta el campo de la hora
    turno = {
        # duracion debe ser mayor a cero
        "duration_min": request.json['duration_min'],
        # la cita debe crearse activa
        "active": request.json['active'],
        # la fecha debe ser posterior a la actual
        "date": request.json['date'],
        "odontologo_id": request.json['odontologo_id'],
        "paciente_id": request.json['paciente_id'],
    }

    formPaciente = {
        "id": turno["paciente_id"]
    }

    formOdontologo = {
        "id": turno["odontologo_id"]
    }

    paciente = Paciente.get_by_id(formPaciente)

    if not paciente:
        return make_response("Paciente no encontrado", 404)

    odontologo = Odontologo.get_by_id(formOdontologo)

    if not odontologo:
        return make_response("Odontologo no encontrado", 404)

    turnoDTO = {
        "duration_min": request.json['duration_min'],
        "active": request.json['active'],
        "date": request.json['date'],
        "fname_odontologo": odontologo.first_name,
        "lname_odontologo": odontologo.last_name,
        "fname_paciente": paciente.first_name,
        "lname_paciente": paciente.last_name,
    }

    id = Turno.save(turno)  # Guardando odontologo y recibo el ID del nuevo registro

    app.logger.info(f"Se creo el turno con id = {id}")
    return make_response(jsonify(turnoDTO), 200)


@app.route('/turnos', methods=['GET'])
@jwt_required()
def get_all_turnos():
    turnos = Turno.get_all()
    print(turnos)
    turnosDTO = []
    for i in range(len(turnos)):
        turnoDTO = {
            "duration_min": turnos[i].duration_min,
            "active": turnos[i].active,
            "date": turnos[i].date,
            "fname_odontologo": turnos[i].fname_odontologo,
            "lname_odontologo": turnos[i].lname_odontologo,
            "fname_paciente": turnos[i].fname_paciente,
            "lname_paciente": turnos[i].lname_paciente,
        }

        turnosDTO.append(turnoDTO)
    app.logger.info(f"Se consultaron todos los turnos")
    return make_response(jsonify(turnosDTO), 200)


@app.route('/turnos/<int:id>', methods=['GET'])
@jwt_required()
def get_turno_by_id(id):
    formulario = {
        "id": int(id)
    }

    turno = Turno.get_by_id(formulario)

    if not turno:
        app.logger.error(f"Turno con id = {id} no encontrado")
        return make_response("Paciente no encontrado", 400)

    turnoDTO = {
        "duration_min": turno.duration_min,
        "active": turno.active,
        "date": turno.date,
        "fname_odontologo": turno.fname_odontologo,
        "lname_odontologo": turno.lname_odontologo,
        "fname_paciente": turno.fname_paciente,
        "lname_paciente": turno.lname_paciente,
    }
    app.logger.info(f"Se consulto al paciente con id = {id}")
    return make_response(jsonify(turnoDTO), 200)


@app.route('/turnos/update/<int:id>', methods=['PUT'])
@jwt_required()
def update_turno(id):
    formulario = {
        "id": int(id),
        "duration_min": request.json['duration_min'],
        "active": request.json['active'],
        "date": request.json['date'],
        "odontologo_id": request.json['odontologo_id'],
        "paciente_id": request.json['paciente_id'],
    }

    formularioGet = {
        "id": int(id),
    }

    if not Turno.get_by_id(formularioGet):
        app.logger.error(f"Turno con id = {id} no encontrado")
        return make_response("Turno no encontrado", 400)

    # if not Odontologo.valida_odontologo(formulario):
    #     return make_response("Datos invalidos", 404)

    Turno.update(formulario)
    app.logger.info(f"Se actualizo el turno con id = {id}")
    return make_response("OK", 204)


@app.route('/turnos/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_turno(id):
    formulario = {
        "id": int(id)
    }

    if not Turno.get_by_id(formulario):
        app.logger.error(f"Tuno con id = {id} no encontrado")
        return make_response("Turno no encontrado", 400)

    Turno.delete(formulario)
    app.logger.info(f"Se elimino el turno con id = {id}")
    return make_response("OK", 204)
