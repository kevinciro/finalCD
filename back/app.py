from login_reg import app
from login_reg.controllers import odontologos_controller
from login_reg.controllers import pacientes_controller
from login_reg.controllers import turnos_controller
from login_reg.controllers import administradores_controller

if __name__ == '__main__':
    app.run()
    app.debug = True
