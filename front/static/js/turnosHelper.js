function parsearFecha(fecha) {
  // La fecha ingresada es de la forma "yyyy-MM-dd" y se desea de la forma "dd-MM-yyyy"
  let anio = fecha.slice(0, 4);
  let mes = fecha.slice(5, 7);
  let dia = fecha.slice(8, 10);
  return `${dia}-${mes}-${anio}`;
}

const turnosHelper = {
  plantillaBuscarTurnos: `  <section class="getTurnos">
    <div class="container">
      <h1 class="mt-5">
        Buscar Turnos
      </h1>

      <div class="row mt-3">
        <div class="col-md-15 mb-3">
          <form id="getTurnoDNIPaciente" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <label class="control-label me-2" for="dni">DNI:</label>
              <input type="text" class="form-control me-3" id="dni" placeholder="DNI del paciente" name="id" required />
            </div>
            <button type="submit" class="btn btn-primary" id="btnGetTurnoDNIPaciente">Buscar</button>
          </form>
        </div>
        <div class="col-md-15 mb-3">
          <form id="getTurnoMatricula" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <label class="control-label me-2" for="matricula">Matricula:</label>
              <input type="text" class="form-control me-3" id="matricula" placeholder="Marticula del odontologo" name="id"
                required />
            </div>
            <button type="submit" class="btn btn-primary" id="btnGetTurnoMatricula">Buscar</button>
          </form>
        </div>
        <div class="col-md-7 mb-3">
          <!-- <form id="getTurnoFecha" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <label class="control-label me-3" for="id">Fecha:</label>
              <input type="date" class="form-control me-3" id="id" name="id" required />
            </div>
            <button type="submit" class="btn btn-primary" id="btnGetTurnoFecha">Buscar</button>
          </form> -->
        </div>
        <div class="col-md-7 mb-3">
          <form id="getTodosTurnos" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center" id="formTurnos">
              <button type="submit" class="btn btn-primary" id="btnGetPacientes">Buscar Todos</button>
          </form>
        </div>
        <div class="col-md-30 mb-3">
          <div id="div_turno_table">
            <div class="row col-md-6 table-responsive" style="width:100%;">
              <table id="turnosTable" class="table table-striped">
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Odontologo</th>
                    <th>Paciente</th>
                  </tr>
                </thead>
                <tbody id="pacientesTableBody mb-3">

                </tbody>
              </table>
              <div id="response" style="display:none; margin-top:10px">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`,

  plantillaCrearTurno: `  <section class="newTurno">
    <div class="container mt-10">
      <div class="row">
        <div class="col-md-5">
          <h1 class="d-flex mt-5">
            Registrar turno
          </h1>
          <form action="" id="formularioRegistro">
            <div class="mb-3r mt-4">
              <label for="matricula" class="form-label">Matricula:</label>
              <input type="text" class="form-control" id="matricula"
                placeholder="Matricula del odontologo" required>
            </div>
            <div class="mb-3r mt-4">
              <label for="dni" class="form-label">DNI: </label>
              <input type="text" class="form-control" id="dni" placeholder="DNI del paciente"
                required>
            </div>
            <div class="mb-3r mt-4">
              <label for="fecha" class="form-label">Fecha: </label>
              <input type="date" class="form-control" id="fecha" required>
            </div>
            <div class="mb-3 mt-3">
              <label for="hora" class="form-label">hora: </label>
              <input type="text" class="form-control mb-3" id="hora"
                placeholder="hora del turno 00:00:00 - 23:59:59" required>
            </div>

            <button class="btn btn-primary me-3 mb-3" type="submit">Registrar turno</button>
          </form>

          <div id="response" style="display:none; margin-top:10px">
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>`,

  plantillaActualizarTurno: `  <section class="putTurno">
    <div class="container">
      <h1 class="mt-5">
        Actualizar turno
      </h1>

      <div class="row mt-3">
        <div class="col-md-7 mb-3">
        </div>
        <div class="col-md-7 mb-3">
          <form id="getTurno" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <input type="text" class="form-control me-3" id="dni" placeholder="DNI del paciente" name="dni" required />
              <input type="text" class="form-control me-3" id="matricula" placeholder="Matricula del odontologo" name="id"
                required />
            </div>
            <button type="submit" class="btn btn-primary" id="btnGetAdministradorDNI">Buscar</button>
          </form>
        </div>
        <div class="col-md-10 mb-3">
          <form action="" class="mb-3" id="formTurno">
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Hora:
              </label>
              <input class="form-control me-3 hora" id="propiedadUsuario" type="text" value="Hora 00:00:00 - 23:59:59"
                aria-label="Disabled input example" disabled readonly>
                              <button type="submit" class="edit">
                <img src="./img/edit.png" alt="Agregar Tarea">
              </button>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Fecha:
              </label>
              <input class="form-control me-3 fecha" id="propiedadUsuario" type="date" value="Fecha">
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
            <label for="exampleFormControlInput1" class="form-label me-3">Paciente: </label>
              <input class="form-control me-3 dni" id="propiedadUsuario" type="text" value="DNI Paciente"
                aria-label="Disabled input example" disabled readonly>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Odontologo: </label>
              <input class="form-control me-3 matricula" id="propiedadUsuario" type="text" value="Matricula Odontologo"
                aria-label="Disabled input example" disabled readonly>
            </div>
            <button class="btn btn-primary botonGuardar" type="submit" disabled>
              Guardar
            </button>
            <button class="btn btn-primary botonGuardar " type="submit" disabled>
              Cancelar
            </button>
          </form>
          <div id="response" style="display:none; margin-top:10px">
          </div>
        </div>
      </div>
    </div>
  </section>`,

  plantillaEliminarTurno: `  <section class="deleteTurno">
    <div class="container">
      <h1 class="mt-5">
        Eliminar Turno
      </h1>

      <div class="row mt-3">
        <div class="col-md-7 mb-3">
          <form id="getTurno" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <input type="text" class="form-control me-3" id="dni" placeholder="DNI del paciente" name="id" required />
              <input type="text" class="form-control me-3" id="matricula" placeholder="Matricula del odontologo" name="id"
                required />
            </div>
            <button type="submit" class="btn btn-primary" id="btnGetAdnimistradorDNI">Buscar</button>
          </form>
        </div>
        <div class="col-md-10 mb-3">
          <form action="" class="mb-3" id="formTurno">
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Fecha:
              </label>
              <input class="form-control me-3 " id="propiedadUsuario" type="text" value="Fecha"
                aria-label="Disabled input example" disabled readonly>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Hora:
              </label>
              <input class="form-control me-3 " id="propiedadUsuario" type="text" value="Hora"
                aria-label="Disabled input example" disabled readonly>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Paciente: </label>
              <input class="form-control me-3" id="propiedadUsuario" type="text" value="Nombre Paciente"
                aria-label="Disabled input example" disabled readonly>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Odontologo: </label>
              <input class="form-control me-3" id="propiedadUsuario" type="text" value="Nombre Odontologo"
                aria-label="Disabled input example" disabled readonly>
            </div>

            <button type="button" class="btn btn-danger">
              Eliminar Turno
            </button>
          </form>
          <div id="response" style="display:none; margin-top:10px">
          </div>
        </div>
      </div>
    </div>
  </section>`,

  getTurnos: function () {
    const formularioTodos = document.querySelector("#getTodosTurnos");

    formularioTodos.addEventListener("submit", function (event) {
      event.preventDefault();

      const url = URL + "turnos";
      const settings = {
        method: "GET",
      };

      fetch(url, settings)
        .then((response) => response.json())
        .then((data) => {
          var table = document.getElementById("turnosTable");
          table.innerHTML = `<thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Odontologo</th>
                    <th>Paciente</th>
                  </tr>
                </thead>`;
          for (turno of data) {
            //por cada odontologo armaremos una fila de la tabla
            var turnoRow = table.insertRow();

            let nombrePaciente = `${turno.pacienteDTO.nombre} ${turno.pacienteDTO.apellido}`;
            let nombreOdontologo = `${turno.odontologoDTO.nombre} ${turno.odontologoDTO.apellido}`;

            console.log(nombrePaciente);
            console.log(nombreOdontologo);

            //armamos cada columna de la fila
            turnoRow.innerHTML =
              '<td class="td_fecha">' +
              turno.fechaTurno +
              "</td>" +
              '<td class="td_hora">' +
              turno.horaTurno +
              "</td>" +
              '<td class="td_nombreOdontologo">' +
              nombreOdontologo +
              "</td>" +
              '<td class="td_nombrePaciente">' +
              nombrePaciente +
              "</td>";

            console.log(data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });

    const formularioDNI = document.querySelector("#getTurnoDNIPaciente");
    formularioDNI.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = {
        dni: document.querySelector("#dni").value,
        Authorization: "",
        "Content-type": "application/json; charset=UTF-8",
      };

      const url = URL + "tunos/dni/" + formData.dni;
      const settings = {
        method: "GET",
        Authorization: "",
        "Content-type": "application/json; charset=UTF-8",
      };

      fetch(url, settings)
        .then((response) => response.json())
        .then((data) => {
          let turno = data;
          var table = document.getElementById("turnosTable");
          table.innerHTML = `<thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Odontologo</th>
                    <th>Paciente</th>
                  </tr>
                </thead>`;
          var turnoRow = table.insertRow();
          let nombrePaciente = `${turno.pacienteDTO.nombre} ${turno.pacienteDTO.apellido}`;
          let nombreOdontologo = `${turno.odontologoDTO.nombre} ${turno.odontologoDTO.apellido}`;

          //armamos cada columna de la fila
          turnoRow.innerHTML =
            '<td class="td_fecha">' +
            turno.fecha +
            "</td>" +
            '<td class="td_hora">' +
            turno.hora +
            "</td>" +
            '<td class="td_nombreOdontologo">' +
            nombreOdontologo +
            "</td>" +
            '<td class="td_nombrePaciente">' +
            nombrePaciente +
            "</td>";

          console.log(data);
        })
        .catch((error) => {
          var table = document.getElementById("turnosTable");
          table.innerHTML = `<thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Odontologo</th>
                    <th>Paciente</th>
                  </tr>
                </thead>`;
          let errorAlert =
            '<div class="alert alert-danger alert-dismissible fade show">' +
            "<strong> Error intente nuevamente</strong>" +
            '<button type="button" class="btn-close" data-bs-dismiss="alert"></button> </div>';
          document.querySelector("#response").innerHTML = errorAlert;
          document.querySelector("#response").style.display = "block";
        });
    });

    const formularioMatricula = document.querySelector("#getTurnoMatricula");
    formularioMatricula.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = {
        matricula: document.querySelector("#matricula").value,
      };

      const url = URL + "tunos/matricula/" + formData.matricula;
      const settings = {
        method: "GET",
        Authorization: "",
        "Content-type": "application/json; charset=UTF-8",
      };

      fetch(url, settings)
        .then((response) => response.json())
        .then((data) => {
          let turno = data;
          var table = document.getElementById("turnosTable");
          table.innerHTML = `<thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Odontologo</th>
                    <th>Paciente</th>
                  </tr>
                </thead>`;
          var turnoRow = table.insertRow();
          let nombrePaciente = `${turno.pacienteDTO.nombre} ${turno.pacienteDTO.apellido}`;
          let nombreOdontologo = `${turno.odontologoDTO.nombre} ${turno.odontologoDTO.apellido}`;

          //armamos cada columna de la fila
          turnoRow.innerHTML =
            '<td class="td_fecha">' +
            turno.fecha +
            "</td>" +
            '<td class="td_hora">' +
            turno.hora +
            "</td>" +
            '<td class="td_nombreOdontologo">' +
            nombreOdontologo +
            "</td>" +
            '<td class="td_nombrePaciente">' +
            nombrePaciente +
            "</td>";

          console.log(data);
        })
        .catch((error) => {
          var table = document.getElementById("turnosTable");
          table.innerHTML = `<thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Odontologo</th>
                    <th>Paciente</th>
                  </tr>
                </thead>`;
          let errorAlert =
            '<div class="alert alert-danger alert-dismissible fade show">' +
            "<strong> Error intente nuevamente</strong>" +
            '<button type="button" class="btn-close" data-bs-dismiss="alert"></button> </div>';
          document.querySelector("#response").innerHTML = errorAlert;
          document.querySelector("#response").style.display = "block";
        });
    });
  },

  postTurno: function () {
    const formularioRegistro = document.querySelector("#formularioRegistro");

    formularioRegistro.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = {
        matriculaOdontologo: document.querySelector("#matricula").value,
        dniPaciente: document.querySelector("#dni").value,
        fechaTurno: parsearFecha(document.querySelector("#fecha").value),
        horaTurno: document.querySelector("#hora").value,
      };

      const url = URL + "turnos/new";
      const settings = {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Authorization: "",
          "Content-type": "application/json; charset=UTF-8",
        },
      };

      console.log(JSON.stringify(formData));

      fetch(url, settings)
        .then((response) => response.json())
        .then((data) => {
          let errorAlert =
            '<div class="alert alert-success alert-dismissible fade show">' +
            "<strong>Turno creado satisfactoriamente</strong>" +
            '<button type="button" class="btn-close" data-bs-dismiss="alert"></button> </div>';
          document.querySelector("#response").innerHTML = errorAlert;
          document.querySelector("#response").style.display = "block";
          formularioRegistro.reset();
        })
        .catch((error) => {
          let errorAlert =
            '<div class="alert alert-danger alert-dismissible fade show">' +
            "<strong> Error intente nuevamente</strong>" +
            '<button type="button" class="btn-close" data-bs-dismiss="alert"></button> </div>';
          document.querySelector("#response").innerHTML = errorAlert;
          document.querySelector("#response").style.display = "block";
        });
    });
  },

  // pensar bien el update, para que solo se puedan modificar fecha y hora.
  updateTurno: function () {
    const formulario = document.querySelector("#getTurno");

    formulario.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = {
        dni: document.querySelector("#dni").value,
        matricula: document.querySelector("#matricula").value,
      };
      const url =
        URL + "turnos/buscar/" + formData.matricula + "/" + formData.dni;
      const settings = {
        method: "GET",
      };

      fetch(url, settings)
        .then((response) => response.json())
        .then((data) => {
          let nombrePaciente = `${data.pacienteDTO.nombre} ${data.pacienteDTO.apellido}`;
          let nombreOdontologo = `${data.odontologoDTO.nombre} ${data.odontologoDTO.apellido}`;

          let plantillaActualizarTurno = `  <section class="putTurno">
    <div class="container">
      <h1 class="mt-5">
        Actualizar turno
      </h1>

      <div class="row mt-3">
        <div class="col-md-7 mb-3">
        </div>
        <div class="col-md-7 mb-3">
          <form id="getTurno" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <input type="text" class="form-control me-3" id="id" placeholder="DNI del paciente" name="dni" required />
              <input type="text" class="form-control me-3" id="matricula" placeholder="Matricula del odontologo" name="id"
                required />
            </div>
            <button type="submit" class="btn btn-primary" id="btnGetAdministradorDNI">Buscar</button>
          </form>
        </div>
        <div class="col-md-10 mb-3">
          <form action="" class="mb-3" id="formTurno">
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Hora:
              </label>
              <input class="form-control me-3 hora" id="propiedadUsuario" type="text" value=${data.horaTurno}
                aria-label="Disabled input example" disabled readonly>
                              <button type="submit" class="edit">
                <img src="./img/edit.png" alt="Agregar Tarea">
              </button>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Fecha:
              </label>
              <input class="form-control me-3 fecha" id="propiedadUsuario" type="date" value=${data.fechaTurno}>
            </div>
                    <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Paciente: </label>
              <input class="form-control me-3 dni" id="propiedadUsuario" type="text" value="${nombrePaciente}"
                aria-label="Disabled input example" disabled readonly>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Odontologo: </label>
              <input class="form-control me-3 matricula" id="propiedadUsuario" type="text" value="${nombreOdontologo}"
                aria-label="Disabled input example" disabled readonly>
            </div>
            <button class="btn btn-primary botonGuardar" type="submit" disabled>
              Guardar
            </button>
            <button class="btn btn-primary botonGuardar " type="submit" disabled>
              Cancelar
            </button>
          </form>
          <div id="response" style="display:none; margin-top:10px">
          </div>
        </div>
      </div>
    </div>
  </section>`;
          main.innerHTML = plantillaActualizarTurno;

          perfil();

          const formularioActualizacion = document.querySelector("#formTurno");

          formularioActualizacion.addEventListener("submit", function (event) {
            event.preventDefault();

            var formDataPut = {
              dniPaciente: formData.dni,
              matriculaOdontologo: formData.matricula,
              fechaTurno: parsearFecha(document.querySelector(".fecha").value),
              horaTurno: document.querySelector(".hora").value,
            };

            console.log(formData);
            console.log(formDataPut);

            const urlPut =
              URL + "turnos/update/" + formData.matricula + "/" + formData.dni;
            const settingsPut = {
              method: "PUT",
              body: JSON.stringify(formDataPut),
              headers: {
                Authorization: "",
                "Content-type": "application/json; charset=UTF-8",
              },
            };

            fetch(urlPut, settingsPut)
              .then((response) => response)
              .then((data1) => {
                plantillaActualizarTurno = `  <section class="putTurno">
    <div class="container">
      <h1 class="mt-5">
        Actualizar turno
      </h1>

      <div class="row mt-3">
        <div class="col-md-7 mb-3">
        </div>
        <div class="col-md-7 mb-3">
          <form id="getTurno" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <input type="text" class="form-control me-3" id="id" placeholder="DNI del paciente" name="dni" required />
              <input type="text" class="form-control me-3" id="matricula" placeholder="Matricula del odontologo" name="id"
                required />
            </div>
            <button type="submit" class="btn btn-primary" id="btnGetAdministradorDNI">Buscar</button>
          </form>
        </div>
        <div class="col-md-10 mb-3">
          <form action="" class="mb-3" id="formTurno">
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Hora:
              </label>
              <input class="form-control me-3 hora" id="propiedadUsuario" type="text" value="Hora 00:00:00 - 23:59:59"
                aria-label="Disabled input example" disabled readonly>
                              <button type="submit" class="edit">
                <img src="./img/edit.png" alt="Agregar Tarea">
              </button>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Fecha:
              </label>
              <input class="form-control me-3 fecha" id="propiedadUsuario" type="date" value="Fecha">
            </div>
                    <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Paciente: </label>
              <input class="form-control me-3 dni" id="propiedadUsuario" type="text" value="DNI Paciente"
                aria-label="Disabled input example" disabled readonly>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Odontologo: </label>
              <input class="form-control me-3 matricula" id="propiedadUsuario" type="text" value="Matricula Odontologo"
                aria-label="Disabled input example" disabled readonly>
            </div>
            <button class="btn btn-primary botonGuardar" type="submit" disabled>
              Guardar
            </button>
            <button class="btn btn-primary botonGuardar " type="submit" disabled>
              Cancelar
            </button>
          </form>
          <div id="response" style="display:none; margin-top:10px">
          </div>
        </div>
      </div>
    </div>
  </section>`;
                main.innerHTML = plantillaActualizarTurno;
                let errorAlert1 =
                  '<div class="alert alert-success alert-dismissible fade show">' +
                  "<strong>Datos actualizados satisfactoriamente</strong>" +
                  '<button type="button" class="btn-close" data-bs-dismiss="alert"></button> </div>';
                document.querySelector("#response").innerHTML = errorAlert1;
                document.querySelector("#response").style.display = "block";
              })
              .catch((error1) => {
                let errorAlert =
                  '<div class="alert alert-danger alert-dismissible fade show">' +
                  "<strong> Error intente nuevamente</strong>" +
                  '<button type="button" class="btn-close" data-bs-dismiss="alert"></button> </div>';
                document.querySelector("#response").innerHTML = errorAlert;
                document.querySelector("#response").style.display = "block";
                console.log(error1);
              });
          });
        })
        .catch((error) => {
          let errorAlert =
            '<div class="alert alert-danger alert-dismissible fade show">' +
            "<strong> Error intente nuevamente</strong>" +
            '<button type="button" class="btn-close" data-bs-dismiss="alert"></button> </div>';
          document.querySelector("#response").innerHTML = errorAlert;
          document.querySelector("#response").style.display = "block";
          console.log(error);
        });
    });
  },

  deleteTurno: function () {
    const formulario = document.querySelector("#getTurno");

    formulario.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = {
        dni: document.querySelector("#dni").value,
        matricula: document.querySelector("#matricula").value,
      };
      const url =
        URL + "/turnos/buscar/" + formData.matricula + "/" + formData.dni;
      const settings = {
        method: "GET",
      };

      fetch(url, settings)
        .then((response) => response.json())
        .then((data) => {
          let nombrePaciente = `${data.pacienteDTO.nombre} ${data.pacienteDTO.apellido}`;
          let nombreOdontologo = `${data.odontologoDTO.nombre} ${data.odontologoDTO.apellido}`;
          let plantillaEliminarTurno = `  <section class="deleteTurno">
    <div class="container">
      <h1 class="mt-5">
        Eliminar Turno
      </h1>

      <div class="row mt-3">
        <div class="col-md-7 mb-3">
          <form id="getTurno" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <input type="text" class="form-control me-3" id="dni" placeholder="DNI del paciente" name="id" required />
              <input type="text" class="form-control me-3" id="matricula" placeholder="Matricula del odontologo" name="id"
                required />
            </div>
            <button type="submit" class="btn btn-primary" id="btnGetAdnimistradorDNI">Buscar</button>
          </form>
        </div>
        <div class="col-md-10 mb-3">
          <form action="" class="mb-3" id="formTurno">
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Fecha:
              </label>
              <input class="form-control me-3 " id="propiedadUsuario" type="text" value="${data.fechaTurno}"
                aria-label="Disabled input example" disabled readonly>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Hora:
              </label>
              <input class="form-control me-3 " id="propiedadUsuario" type="text" value="${data.horaTurno}"
                aria-label="Disabled input example" disabled readonly>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Paciente: </label>
              <input class="form-control me-3" id="propiedadUsuario" type="text" value="${nombrePaciente}"
                aria-label="Disabled input example" disabled readonly>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Odontologo: </label>
              <input class="form-control me-3" id="propiedadUsuario" type="text" value="${nombreOdontologo}"
                aria-label="Disabled input example" disabled readonly>
            </div>

            <button type="submit" class="btn btn-danger">
              Eliminar Turno
            </button>
          </form>
          <div id="response" style="display:none; margin-top:10px">
          </div>
        </div>
      </div>
    </div>
  </section>`;
          main.innerHTML = plantillaEliminarTurno;

          const formularioActualizacion = document.querySelector("#formTurno");

          console.log(formularioActualizacion);
          formularioActualizacion.addEventListener("submit", function (event) {
            event.preventDefault();
            const formDataDel = {};

            const urlDel =
              URL + "turnos/" + formData.matricula + "/" + formData.dni;
            const settingsDel = {
              method: "DELETE",
              body: JSON.stringify(formDataDel),
              headers: {
                Authorization: "",
                "Content-type": "application/json; charset=UTF-8",
              },
            };

            fetch(urlDel, settingsDel)
              .then((response) => response)
              .then((data1) => {
                plantillaEliminarTurno = `  <section class="deleteTurno">
    <div class="container">
      <h1 class="mt-5">
        Eliminar Turno
      </h1>

      <div class="row mt-3">
        <div class="col-md-7 mb-3">
          <form id="getTurno" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <input type="text" class="form-control me-3" id="dni" placeholder="DNI del paciente" name="id" required />
              <input type="text" class="form-control me-3" id="matricula" placeholder="Matricula del odontologo" name="id"
                required />
            </div>
            <button type="submit" class="btn btn-primary" id="btnGetAdnimistradorDNI">Buscar</button>
          </form>
        </div>
        <div class="col-md-10 mb-3">
          <form action="" class="mb-3" id="formTurno">
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Fecha:
              </label>
              <input class="form-control me-3 " id="propiedadUsuario" type="text" value="Fecha"
                aria-label="Disabled input example" disabled readonly>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Hora:
              </label>
              <input class="form-control me-3 " id="propiedadUsuario" type="text" value="Hora"
                aria-label="Disabled input example" disabled readonly>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Paciente: </label>
              <input class="form-control me-3" id="propiedadUsuario" type="text" value="Nombre Paciente"
                aria-label="Disabled input example" disabled readonly>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Odontologo: </label>
              <input class="form-control me-3" id="propiedadUsuario" type="text" value="Nombre Odontologo"
                aria-label="Disabled input example" disabled readonly>
            </div>

            <button type="input" class="btn btn-danger">
              Eliminar Turno
            </button>
          </form>
          <div id="response" style="display:none; margin-top:10px">
          </div>
        </div>
      </div>
    </div>
  </section>`;
                main.innerHTML = plantillaEliminarTurno;
                let errorAlert1 =
                  '<div class="alert alert-success alert-dismissible fade show">' +
                  "<strong>Turno eliminado satisfactoriamente</strong>" +
                  '<button type="button" class="btn-close" data-bs-dismiss="alert"></button> </div>';
                document.querySelector("#response").innerHTML = errorAlert1;
                document.querySelector("#response").style.display = "block";
                console.log(data1);
              })
              .catch((error1) => {
                let errorAlert =
                  '<div class="alert alert-danger alert-dismissible fade show">' +
                  "<strong> Error intente nuevamente</strong>" +
                  '<button type="button" class="btn-close" data-bs-dismiss="alert"></button> </div>';
                document.querySelector("#response").innerHTML = errorAlert;
                document.querySelector("#response").style.display = "block";
                console.log(error1);
              });
          });
        })
        .catch((error) => {
          let errorAlert =
            '<div class="alert alert-danger alert-dismissible fade show">' +
            "<strong> Error intente nuevamente</strong>" +
            '<button type="button" class="btn-close" data-bs-dismiss="alert"></button> </div>';
          document.querySelector("#response").innerHTML = errorAlert;
          document.querySelector("#response").style.display = "block";
          console.log(error);
        });
    });
  },
};
