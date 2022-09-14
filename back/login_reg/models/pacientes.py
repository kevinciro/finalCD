from login_reg.config.mysqlconnection import connectToMySQL
from flask import flash  # mandar mensajes a la plantilla
import re  # Importamos expresiones regulares
import login_reg.security

# Expresion regular para una contraseña que tenga 1 digito, 1 minuscula, 1 mayuscula y 1 caracter especial
PASSWORD_REGEX = re.compile(r'(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$')


class Paciente:

    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.dni = data['dni']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls, formulario):
        query = "INSERT INTO odontologia.pacientes(first_name, last_name, dni, password) VALUES (%(first_name)s, %(last_name)s, %(dni)s, %(password)s)"
        nuevoId = connectToMySQL('odontologia').query_db(query, formulario)
        return nuevoId

    @classmethod

    def get_all(cls):
        query = "SELECT * FROM odontologia.pacientes"
        results = connectToMySQL('odontologia').query_db(query)  # Lista de diccionarios
        pacientes = []
        for paciente in results:
            pacientes.append(
                cls(paciente))  # cls(receta) -> Instancia de receta, Agregamos la instancia a mi lista de odontologia
        return pacientes

    @classmethod
    def get_by_id(cls, formulario):  # recibir formulario_receta
        query = "SELECT * FROM odontologia.pacientes WHERE id = %(id)s"  # LEFT JOIN users
        result = connectToMySQL('odontologia').query_db(query, formulario)  # recibimos una lista
        if bool(result):
            paciente = cls(result[0])  # Creamos una instancia de receta
            return paciente
        return []

    @classmethod
    def get_by_dni(cls, formulario):  # recibir formulario_receta
        query = "SELECT * FROM odontologia.pacientes WHERE dni = %(dni)s"
        result = connectToMySQL('odontologia').query_db(query, formulario)
        print(result)
        paciente = cls(result[0])
        return paciente

    @classmethod
    def update(cls, formulario):  # Recibir el formulario. OJO con t odo y el ID de la receta
        query = "UPDATE odontologia.pacientes SET first_name = %(first_name)s, last_name = %(last_name)s, dni = %(dni)s WHERE id = %(id)s"
        result = connectToMySQL('odontologia').query_db(query, formulario)
        return result

    @classmethod
    def delete(cls, formulario):  # Recibe formulario con id de receta a borrar
        query = "DELETE FROM odontologia.pacientes WHERE id = %(id)s"
        result = connectToMySQL('odontologia').query_db(query, formulario)
        return result

    @staticmethod
    def valida_paciente(formulario):
        # formulario = {
        #    first_name:    "Elena",
        #    last_name:     "De Troya",
        #    email:         "elena@codingdojo.com",
        #    password:      "password123",
        #    confirm_password:      "password123",
        # }
        es_valido = True

        # Validar que mi nombre tenga más de 2 caracteres
        if len(formulario['first_name']) < 3:
            flash('Nombre debe de tener al menos 3 caracteres', 'registro_paciente')
            es_valido = False

        if len(formulario['last_name']) < 3:
            flash('Apellido debe de tener al menos 3 caracteres', 'registro_paciente')
            es_valido = False

        if len(formulario['password']) < 8 and not PASSWORD_REGEX.match(formulario['password']):
            flash('Contraseña debe tener al menos 7 caracteres', 'registro_paciente')
            es_valido = False

        # if formulario['password'] != formulario['confirm_password']:
        #     flash('Contraseñas no coiniciden', 'registro_paciente')
        #     es_valido = False

        # Consultar si YA existe el correo
        query = "SELECT * FROM pacientes WHERE dni = %(dni)s"
        results = connectToMySQL('odontologia').query_db(query, formulario)
        if len(results) >= 1:
            flash('Paciente registrado previamente', 'registro_paciente')
            es_valido = False

        return es_valido
