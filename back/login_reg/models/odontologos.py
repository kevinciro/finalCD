from login_reg.config.mysqlconnection import connectToMySQL
from flask import flash  # mandar mensajes a la plantilla
import re  # Importamos expresiones regulares

# crear una expresión regular para verificar que tengamos el email con formato correcto
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
# Expresion regular para una contraseña que tenga 1 digito, 1 minuscula, 1 mayuscula y 1 caracter especial
PASSWORD_REGEX = re.compile(r'(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$')


class Odontologo:

    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.registration_number = data['registration_number']
        self.password = data['password']
        self.dni = data['dni']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def save(cls, formulario):
        query = "INSERT INTO odontologia.odontologos(first_name, last_name, registration_number, password, dni) VALUES (%(first_name)s, %(last_name)s, %(registration_number)s, %(password)s, %(dni)s)"
        nuevoId = connectToMySQL('odontologia').query_db(query, formulario)
        return nuevoId

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM odontologos"
        results = connectToMySQL('odontologia').query_db(query)  # Lista de diccionarios
        odontologos = []
        for odontologo in results:
            odontologos.append(
                cls(odontologo))  # cls(receta) -> Instancia de receta, Agregamos la instancia a mi lista de odontologia
        return odontologos

    @classmethod
    def get_by_id(cls, formulario):  # recibir formulario_receta
        query = "SELECT * FROM odontologia.odontologos WHERE id = %(id)s"  # LEFT JOIN users
        result = connectToMySQL('odontologia').query_db(query, formulario)  # recibimos una lista
        if bool(result):
            odontologo = cls(result[0])  # Creamos una instancia de receta
            return odontologo
        return []

    @classmethod
    def get_by_dni(cls, formulario):  # recibir formulario_receta
        query = "SELECT * FROM odontologia.odontologos WHERE dni = %(dni)s"  # LEFT JOIN users
        result = connectToMySQL('odontologia').query_db(query, formulario)  # recibimos una lista
        odontologo = cls(result[0])  # Creamos una instancia de receta
        return odontologo

    @classmethod
    def get_by_registration_number(cls, formulario):  # recibir formulario_receta
        query = "SELECT * FROM odontologia.odontologos WHERE registration_number = %(registration_number)s"  # LEFT JOIN users
        result = connectToMySQL('odontologia').query_db(query, formulario)  # recibimos una lista
        odontologo = cls(result[0])  # Creamos una instancia de receta
        return odontologo

    @classmethod
    def update(cls, formulario):  # Recibir el formulario. OJO con t odo y el ID de la receta
        query = "UPDATE odontologia.odontologos SET first_name = %(first_name)s, last_name = %(last_name)s, registration_number = %(registration_number)s WHERE id=%(id)s"
        result = connectToMySQL('odontologia').query_db(query, formulario)
        return result

    @classmethod
    def delete(cls, formulario):  # Recibe formulario con id de receta a borrar
        query = "DELETE FROM odontologia.odontologos WHERE id = %(id)s"
        result = connectToMySQL('odontologia').query_db(query, formulario)
        return result

    @staticmethod
    def valida_odontologo(formulario):
        es_valido = True

        # Validar que mi nombre tenga más de 2 caracteres
        if len(formulario['first_name']) < 3:
            flash('Nombre debe de tener al menos 3 caracteres', 'registro')
            es_valido = False

        if len(formulario['last_name']) < 3:
            flash('Apellido debe de tener al menos 3 caracteres', 'registro')
            es_valido = False

        if len(formulario['password']) < 8 and not PASSWORD_REGEX.match(formulario['password']):
            flash('Contraseña debe tener al menos 6 caracteres', 'registro')
            es_valido = False

        # if formulario['password'] != formulario['confirm_password']:
        #     flash('Contraseñas no coiniciden', 'registro')
        #     es_valido = False

        # Consultar si YA existe el correo
        query = "SELECT * FROM Odontologos WHERE registration_number = %(registration_number)s"
        results = connectToMySQL('odontologia').query_db(query, formulario)
        if len(results) >= 1:
            flash('Odontologo registrado previamente', 'registro')
            es_valido = False

        return es_valido
