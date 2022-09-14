from login_reg.config.mysqlconnection import connectToMySQL
from flask import flash  # mandar mensajes a la plantilla
from datetime import datetime


class Turno:

    def __init__(self, data):
        self.id = data['id']
        self.duration_min = data['duration_min']
        self.active = data['active']
        self.date = data['date']
        self.hour = data['hour']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.odontologo_id = data['odontologo_id']
        self.paciente_id = data['paciente_id']

        self.fname_odontologo = data['fname_odontologo']
        self.lname_odontologo = data['lname_odontologo']
        self.fname_paciente = data['fname_paciente']
        self.lname_paciente = data['lname_paciente']

    @classmethod
    def save(cls, formulario):
        query = "INSERT INTO odontologia.turnos (duration_min, active, date, hour, odontologo_id, paciente_id) VALUES ( %(duration_min)s, %(active)s, %(date)s, %(hour)s, %(odontologo_id)s, %(paciente_id)s )"
        nuevoId = connectToMySQL('odontologia').query_db(query, formulario)
        return nuevoId

    @classmethod
    def get_all(cls):
        query = "SELECT t.*, p.first_name as fname_paciente, p.last_name as lname_paciente, o.first_name as fname_odontologo, o.last_name as lname_odontologo FROM odontologia.turnos AS t INNER JOIN pacientes AS p ON t.paciente_id = p.id INNER JOIN odontologos AS o ON o.id = t.odontologo_id;"  # LEFT JOIN users
        results = connectToMySQL('odontologia').query_db(query)  # Lista de diccionarios
        turnos = []
        for turno in results:
            turnos.append(
                cls(turno))  # cls(receta) -> Instancia de receta, Agregamos la instancia a mi lista de odontologia
        return turnos

    @classmethod
    def get_by_id(cls, formulario):  # recibir formulario_receta
        query = "SELECT t.*, p.first_name as fname_paciente, p.last_name as lname_paciente, o.first_name as fname_odontologo, o.last_name as lname_odontologo FROM odontologia.turnos AS t INNER JOIN pacientes AS p ON t.paciente_id = p.id INNER JOIN odontologos AS o ON o.id = t.odontologo_id WHERE t.id = %(id)s;"  # LEFT JOIN users
        result = connectToMySQL('odontologia').query_db(query, formulario)  # recibimos una lista
        if bool(result):
            turno = cls(result[0])  # Creamos una instancia de receta
            return turno
        return []

    @classmethod
    def update(cls, formulario):  # Recibir el formulario. OJO con todo y el ID de la receta
        query = "UPDATE turnos SET duration_min = %(duration_min)s, active = %(active)s, date = %(date)s, hour = %(hour)s, odontologo_id = %(odontologo_id)s, paciente_id = %(paciente_id)s WHERE id = %(id)s"
        result = connectToMySQL('odontologia').query_db(query, formulario)

        return result

    @classmethod
    def delete(cls, formulario):  # Recibe formulario con id de receta a borrar
        query = "DELETE FROM turnos WHERE id = %(id)s"
        result = connectToMySQL('odontologia').query_db(query, formulario)
        return result

    @staticmethod
    def valida_turno(formulario):
        es_valido = True
        mensaje = ""

        if len(formulario['duration_min']) < 20:
            mensaje = "La duracion debe ser de 20 minutos"
            es_valido = False

        if not len(formulario['active']):
            mensaje = "El turno debe crearse activo"
            es_valido = False

        if formulario['date'] == "":
            mensaje = "Debe ingresar una fecha para el turno"
            es_valido = False

        if datetime.today().date() > formulario['date'].date():
            mensaje = "La fecha debe ser valida"
            es_valido = False

        return es_valido, mensaje
