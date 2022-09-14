function pacienteDireccion() {
  const listaBotonesEdicion = document.querySelectorAll(".edit");
  const listaPropiedadesUsuario =
    document.querySelectorAll("#propiedadUsuario");
  const botonesGuardar = document.querySelectorAll(".botonGuardar");
  const camposDir = document.querySelector(".dir-oculto");

  // para cada boton de edicion (de lapiz) se hace un listener
  listaBotonesEdicion.forEach((btn, btnIndex) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      // Se activan los botones de guardar y cancelar
      botonesGuardar.forEach((btnG) => {
        btnG.removeAttribute("disabled");
      });
      // Si no es el campo de la direccion, se activa el campo para editar
      if (!listaPropiedadesUsuario[btnIndex].classList.contains("direccion")) {
        listaPropiedadesUsuario[btnIndex].removeAttribute("disabled");
        listaPropiedadesUsuario[btnIndex].removeAttribute("readonly");
        btn.setAttribute("disabled", "true");
      } else {
        // Si es el campo de la direccion se renderizan campos para editar la direccion y se desactiva el boton de edicion

        btn.setAttribute("disabled", "true");
      }
    });
  });
  console.log(camposDir);
}

const pacienteHelper = {
  plantillaBuscarPacientes: `  <section class="getPacientes">
    <div class="container">
      <h1 class="mt-5">
        Buscar Pacientes
      </h1>

      <div class="row mt-3">
        <div class="col-md-7 mb-3">
          <form id="getPacienteNombre" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <label class="control-label me-3" for="id">Nombre:</label>
              <input type="text" class="form-control me-3" id="nombre" placeholder="Nombre y/o apellido del paciente"
                name="id" required />
            </div>
            <button type="submit" class="btn btn-primary" id="btnGetPacienteNombre">Buscar</button>
          </form>
        </div>
        <div class="col-md-7 mb-3">
          <form id="getPacienteDNI" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <label class="control-label me-3" for="id">DNI:</label>
              <input type="text" class="form-control me-3" id="dni" placeholder="DNI del paciente" name="id" required />
            </div>
            <button type="submit" class="btn btn-primary" id="btnGetPacienteDNI">Buscar</button>
          </form>
        </div>
        <div class="col-md-7 mb-3">
          <form id="getTodosPacientes" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <button type="submit" class="btn btn-primary" id="btnGetPacientes">Buscar Todos</button>
          </form>
        </div>
        <div class="col-md-30 mb-3">
          <div id="div_pacientes_table">
            <div class="row col-md-6 table-responsive" style="width: 100%;">
              <table id="pacientesTable" class="table table-striped">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Direccion</th>
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

  plantillaCrearPaciente: `  <section class="newPaciente">
    <div class="container mt-10">
      <div class="row">
        <div class="col-md-5">
          <h1 class="d-flex mt-5">
            Registrar paciente
          </h1>
          <form action="" id="formularioRegistro">
            <div class="mb-3r mt-4">
              <label for="nombre" class="form-label">Nombre*</label>
              <input type="text" class="form-control" id="nombre" placeholder="Ingrese su nombre"
                required>
            </div>
            <div class="mb-3r mt-4">
              <label for="apellido" class="form-label">Apellido*</label>
              <input type="text" class="form-control" id="apellido" placeholder="Ingrese su apellido"
                required>
            </div>
            <div class="mb-3r mt-4">
              <label for="dni" class="form-label">DNI*</label>
              <input type="text" class="form-control" id="dni" placeholder="Ingrese su DNI"
                required>
            </div>
            <div class="mb-3 mt-3">
              <label for="password" class="form-label">Contraseña*</label>
              <input type="password" class="form-control" id="password"
                placeholder="Ingrese su contraseña" required>
            </div>
            <div class="mb-3r mt-4">
              <label for="provincia" class="form-label">Provincia</label>
              <input type="text" class="form-control" id="provincia"
                placeholder="Ingrese la provincia donde vive">
            </div>
            <div class="mb-3r mt-4">
              <label for="localidad" class="form-label">Localidad</label>
              <input type="text" class="form-control" id="localidad"
                placeholder="Ingrese la localidad donde vive">
            </div>
            <div class="mb-3r mt-4">
              <label for="calle" class="form-label">Calle</label>
              <input type="text" class="form-control" id="calle"
                placeholder="Ingrese la calle donde vive">
            </div>
            <div class="mb-3r mt-4">
              <label for="numero" class="form-label">Numero</label>
              <input type="text" class="form-control" id="numero"
                placeholder="Ingrese el numero donde vive">
            </div>

            <div class="mb-3 mt-4">
              <button class="btn btn-primary me-3" type="submit">Registrar usuario</button>
          </form>
        </div>

        <div class="mb-3">
          <p class="mensaje">
            La informacion marcada con * es obligatoria.
          </p>
        </div>

        <div id="response" style="display:none; margin-top:10px">
        </div>

      </div>
    </div>
    </div>
  </section>`,

  plantillaActualizarPaciente: `  <section class="putPaciente">
    <div class="container">
      <h1 class="mt-5">
        Actualizar Paciente
      </h1>

      <div class="row mt-3">
        <div class="col-md-7 mb-3">
          <form id="getPacienteDNI" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <label class="control-label me-3" for="dni">DNI:</label>
              <input type="text" class="form-control me-3" id="dni" placeholder="DNI del paciente" name="id" required />
            </div>
            <button type="submit" class="btn btn-primary" id="btnGetPacienteDNI">Buscar</button>
          </form>
        </div>
        <div class="col-md-10 mb-3">
          <form action="" class="mb-3" id="formPaciente">
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Nombre:
              </label>
              <input class="form-control me-3 nombre" id="propiedadUsuario" type="text" value="Nombre"
                aria-label="Disabled input example" disabled readonly>
              <button type="submit" class="edit">
                <img src="../static/img/edit.png" alt="Agregar Tarea">
              </button>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1 apellido" class="form-label me-3">Apellido: </label>
              <input class="form-control me-3" id="propiedadUsuario" type="text" value="Apellido"
                aria-label="Disabled input example" disabled readonly>
              <button type="submit" class="edit">
                <img src="../static/img/edit.png" alt="Agregar Tarea">
              </button>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Direccion: </label>
              <input class="form-control me-3 direccion" id="propiedadUsuario" type="text"
                value="Provincia, Localidad, Calle, numero" aria-label="Disabled input example" disabled readonly>
              <button type="submit" class="edit">
                <img src="../static/img/edit.png" alt="Agregar Tarea">
              </button>
            </div>

            <div class="dir-oculto">

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

  plantillaEliminarPaciente: `  <section class="deletePaciente">
    <div class="container">
      <h1 class="mt-5">
        Eliminar Paciente
      </h1>

      <div class="row mt-3">
        <div class="col-md-7 mb-3">
          <form id="getPacienteDNI" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <label class="control-label me-3" for="dni">DNI:</label>
              <input type="text" class="form-control me-3" id="dni" placeholder="DNI del paciente" name="id" required />
            </div>
            <button type="submit" class="btn btn-primary" id="btnGetPacienteDNI">Buscar</button>
          </form>
        </div>
        <div class="col-md-10 mb-3">
          <form action="" class="mb-3" id="formPaciente">
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Nombre:
              </label>
              <input class="form-control me-3 " id="propiedadUsuario" type="text" value="Nombre"
                aria-label="Disabled input example" disabled readonly>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Apellido: </label>
              <input class="form-control me-3" id="propiedadUsuario" type="text" value="Apellido"
                aria-label="Disabled input example" disabled readonly>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Direccion: </label>
              <input class="form-control me-3 direccion" id="propiedadUsuario" type="text"
                value="Provincia, Localidad, Calle, numero" aria-label="Disabled input example" disabled readonly>
            </div>

            <button type="button" class="btn btn-danger">
              Eliminar paciente
            </button>
          </form>
          <div id="response" style="display:none; margin-top:10px">
          </div>
        </div>
      </div>
    </div>
  </section>`,

  URL: "http://localhost:5000/",

  getPacientes: function () {
    const formularioTodos = document.querySelector("#getTodosPacientes");

    formularioTodos.addEventListener("submit", function (event) {
      event.preventDefault();

      const url = URL + "pacientes";
      const settings = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      };

      fetch(url, settings)
        .then((response) => response.json())
        .then((data) => {
          var table = document.getElementById("pacientesTable");
          table.innerHTML = `<thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>dni</th>
                  </tr>
                </thead>`;
          for (paciente of data) {
            //por cada odontologo armaremos una fila de la tabla
            var pacienteRow = table.insertRow();

            //armamos cada columna de la fila
            pacienteRow.innerHTML =
              '<td class="td_nombre">' +
              paciente.first_name +
              "</td>" +
              '<td class="td_apellido">' +
              paciente.last_name +
              "</td>" +
              '<td class="td_dni">' +
              paciente.dni +
              "</td>";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });

    const formularioDNI = document.querySelector("#getPacienteDNI");
    formularioDNI.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = {
        dni: document.querySelector("#dni").value,
      };

      const url = URL + "pacientes/" + formData.dni;
      const settings = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      };

      fetch(url, settings)
        .then((response) => response.json())
        .then((data) => {
          let paciente = data;
          var table = document.getElementById("pacientesTable");
          table.innerHTML = `<thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>dni</th>
                  </tr>
                </thead>`;
          var pacienteRow = table.insertRow();

          //armamos cada columna de la fila
          pacienteRow.innerHTML =
            '<td class="td_nombre">' +
            paciente.first_name +
            "</td>" +
            '<td class="td_apellido">' +
            paciente.last_name +
            "</td>" +
            '<td class="td_dni">' +
            paciente.dni +
            "</td>";
        })
        .catch((error) => {
          var table = document.getElementById("pacientesTable");
          table.innerHTML = `<thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>DNI</th>
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

  postPaciente: function () {
    const formularioRegistro = document.querySelector("#formularioRegistro");

    formularioRegistro.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = {
        first_name: document.querySelector("#nombre").value,
        last_name: document.querySelector("#apellido").value,
        dni: parseInt(document.querySelector("#dni").value),
        password: document.querySelector("#password").value,
      };

      const url = URL + "pacientes/new";
      const settings = {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
          "Content-type": "application/json; charset=UTF-8",
        },
      };

      fetch(url, settings)
        .then((response) => response.json())
        .then((data) => {
          let errorAlert =
            '<div class="alert alert-success alert-dismissible fade show">' +
            "<strong>Paciente creado satisfactoriamente</strong>" +
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

  updatePaciente: function () {
    const formularioMatricula = document.querySelector("#getPacienteDNI");

    formularioMatricula.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = {
        dni: document.querySelector("#dni").value,
      };
      const url = URL + "pacientes/" + formData.dni;
      const settings = {
        method: "GET",
      };

      fetch(url, settings)
        .then((response) => response.json())
        .then((data) => {
          let plantillaActualizarPaciente = `  <section class="putPaciente">
    <div class="container">
      <h1 class="mt-5">
        Actualizar Paciente
      </h1>

      <div class="row mt-3">
        <div class="col-md-7 mb-3">
          <form id="getPacienteDNI" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <label class="control-label me-3" for="dni">DNI:</label>
              <input type="text" class="form-control me-3" id="dni" placeholder="DNI del paciente" name="id" required />
            </div>
            <button type="submit" class="btn btn-primary" id="btnGetPacienteDNI">Buscar</button>
          </form>
        </div>
        <div class="col-md-10 mb-3">
          <form action="" class="mb-3" id="formPaciente">
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Nombre:
              </label>
              <input class="form-control me-3 nombre" id="propiedadUsuario" type="text" value=${data.nombre}
                aria-label="Disabled input example" disabled readonly>
              <button type="submit" class="edit">
                <img src="../static/img/edit.png" alt="Agregar Tarea">
              </button>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1 " class="form-label me-3">Apellido: </label>
              <input class="form-control me-3 apellido" id="propiedadUsuario" type="text" value=${data.apellido}
                aria-label="Disabled input example" disabled readonly>
              <button type="submit" class="edit">
                <img src="./img/edit.png" alt="Agregar Tarea">
              </button>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Direccion: </label>
              <input class="form-control me-3 direccion" id="propiedadUsuario" type="text"
                value=${direccion} aria-label="Disabled input example" disabled readonly>
              <button type="submit" class="edit">
                <img src="./img/edit.png" alt="Agregar Tarea">
              </button>
            </div>

            <div class="dir-oculto">

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
          main.innerHTML = plantillaActualizarPaciente;
          pacienteDireccion();

          const formularioActualizacion =
            document.querySelector("#formPaciente");
          let dirOculto = document.querySelector(".dir-oculto");
          const listaBotonesEdicion = document.querySelectorAll(".edit");

          console.log(listaBotonesEdicion);
          listaBotonesEdicion[listaBotonesEdicion.length - 1].addEventListener(
            "click",
            (event) => {
              event.preventDefault();
              const plantillaDirecciones = `<div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Provincia:
              </label>
              <input class="form-control me-3 provincia" id="propiedadDireccion " type="text" value=${data.domicilio.provincia}
                aria-label="Disabled input example">
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Localidad:
              </label> <input class="form-control me-3 localidad" id="propiedadDireccion" type="text" value=${data.domicilio.localidad}
                aria-label="Disabled input example dir-oculto">
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3"> <label for="exampleFormControlInput1"
                class="form-label me-3">Calle: </label> <input class="form-control me-3 calle" id="propiedadDireccion"
                type="text" value=${data.domicilio.calle} aria-label="Disabled input example"> </div>
            <div class="col-md-7 d-flex align-items-center mb-3"> <label for="exampleFormControlInput1"
                class="form-label me-3">Numero: </label> <input class="form-control me-3 numero" id="propiedadDireccion"
                type="text" value=${data.domicilio.numero} aria-label="Disabled input example"> </div>`;

              dirOculto.innerHTML += plantillaDirecciones;
            }
          );
          formularioActualizacion.addEventListener("submit", function (event) {
            event.preventDefault();

            let dirOculto = document.querySelector(".dir-oculto");

            if (dirOculto.innerHTML === "\n\n            ") {
              var formDataPut = {
                nombre: document.querySelector(".nombre").value,
                apellido: document.querySelector(".apellido").value,
                domicilio: {
                  calle: data.domicilio.calle,
                  numero: data.domicilio.numero,
                  localidad: data.domicilio.localidad,
                  provincia: data.domicilio.provincia,
                },
              };
            } else {
              var formDataPut = {
                nombre: document.querySelector(".nombre").value,
                apellido: document.querySelector(".apellido").value,
                domicilio: {
                  calle: document.querySelector(".calle").value,
                  numero: document.querySelector(".numero").value,
                  localidad: document.querySelector(".localidad").value,
                  provincia: document.querySelector(".provincia").value,
                },
              };
            }

            console.log(formDataPut);

            const urlPut = URL + "pacientes/update/" + formData.dni;
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
                plantillaActualizarPaciente = `  <section class="putPaciente">
    <div class="container">
      <h1 class="mt-5">
        Actualizar Paciente
      </h1>

      <div class="row mt-3">
        <div class="col-md-7 mb-3">
          <form id="getPacienteDNI" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <label class="control-label me-3" for="dni">DNI:</label>
              <input type="text" class="form-control me-3" id="dni" placeholder="DNI del paciente" name="id" required />
            </div>
            <button type="submit" class="btn btn-primary" id="btnGetPacienteDNI">Buscar</button>
          </form>
        </div>
        <div class="col-md-10 mb-3">
          <form action="" class="mb-3" id="formPaciente">
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Nombre:
              </label>
              <input class="form-control me-3 nombre" id="propiedadUsuario" type="text" value="Nombre"
                aria-label="Disabled input example" disabled readonly>
              <button type="submit" class="edit">
                <img src="./img/edit.png" alt="Agregar Tarea">
              </button>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1 " class="form-label me-3">Apellido: </label>
              <input class="form-control me-3 apellido" id="propiedadUsuario" type="text" value="Apellido"
                aria-label="Disabled input example" disabled readonly>
              <button type="submit" class="edit">
                <img src="./img/edit.png" alt="Agregar Tarea">
              </button>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Direccion: </label>
              <input class="form-control me-3 direccion" id="propiedadUsuario" type="text"
                value="Provincia, Localidad, Calle, numero" aria-label="Disabled input example" disabled readonly>
              <button type="submit" class="edit">
                <img src="./img/edit.png" alt="Agregar Tarea">
              </button>
            </div>

            <div class="dir-oculto">

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
                main.innerHTML = plantillaActualizarPaciente;
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

  deletePaciente: function () {
    const formularioMatricula = document.querySelector("#getPacienteDNI");

    formularioMatricula.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = {
        dni: document.querySelector("#dni").value,
      };
      const url = URL + "/pacientes/buscar/" + formData.dni;
      const settings = {
        method: "GET",
      };

      fetch(url, settings)
        .then((response) => response.json())
        .then((data) => {
          let direccion = `${data.domicilio.provincia},${data.domicilio.localidad},${data.domicilio.calle},${data.domicilio.numero}`;
          plantillaEliminarPaciente = `  <section class="deletePaciente">
    <div class="container">
      <h1 class="mt-5">
        Eliminar Paciente
      </h1>

      <div class="row mt-3">
        <div class="col-md-7 mb-3">
          <form id="getPacienteDNI" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <label class="control-label me-3" for="dni">DNI:</label>
              <input type="text" class="form-control me-3" id="dni" placeholder="DNI del paciente" name="id" required />
            </div>
            <button type="submit" class="btn btn-primary" id="btnGetPacienteDNI">Buscar</button>
          </form>
        </div>
        <div class="col-md-10 mb-3">
          <form action="" class="mb-3" id="formPaciente">
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Nombre:
              </label>
              <input class="form-control me-3 " id="propiedadUsuario" type="text" value=${data.nombre}
                aria-label="Disabled input example" disabled readonly>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Apellido: </label>
              <input class="form-control me-3" id="propiedadUsuario" type="text" value=${data.apellido}
                aria-label="Disabled input example" disabled readonly>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Direccion: </label>
              <input class="form-control me-3 direccion" id="propiedadUsuario" type="text"
                value=${direccion} aria-label="Disabled input example" disabled readonly>
            </div>

            <button type="submit" class="btn btn-danger">
              Eliminar paciente
            </button>
          </form>
          <div id="response" style="display:none; margin-top:10px">
          </div>
        </div>
      </div>
    </div>
  </section>`;
          main.innerHTML = plantillaEliminarPaciente;

          const formularioActualizacion =
            document.querySelector("#formPaciente");

          console.log(formularioActualizacion);
          formularioActualizacion.addEventListener("submit", function (event) {
            event.preventDefault();
            const formDataDel = {};

            const urlDel = URL + "pacientes/" + formData.dni;
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
                plantillaEliminarPaciente = `  <section class="deletePaciente">
    <div class="container">
      <h1 class="mt-5">
        Eliminar Paciente
      </h1>

      <div class="row mt-3">
        <div class="col-md-7 mb-3">
          <form id="getPacienteDNI" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <label class="control-label me-3" for="dni">DNI:</label>
              <input type="text" class="form-control me-3" id="dni" placeholder="DNI del paciente" name="id" required />
            </div>
            <button type="submit" class="btn btn-primary" id="btnGetPacienteDNI">Buscar</button>
          </form>
        </div>
        <div class="col-md-10 mb-3">
          <form action="" class="mb-3">
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Nombre:
              </label>
              <input class="form-control me-3 " id="propiedadUsuario" type="text" value="Nombre"
                aria-label="Disabled input example" disabled readonly>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Apellido: </label>
              <input class="form-control me-3" id="propiedadUsuario" type="text" value="Apellido"
                aria-label="Disabled input example" disabled readonly>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Direccion: </label>
              <input class="form-control me-3 direccion" id="propiedadUsuario" type="text"
                value="Provincia, Localidad, Calle, numero" aria-label="Disabled input example" disabled readonly>
            </div>

            <button type="button" class="btn btn-danger">
              Eliminar paciente
            </button>
          </form>
          <div id="response" style="display:none; margin-top:10px">
          </div>
        </div>
      </div>
    </div>
  </section>`;
                main.innerHTML = plantillaEliminarPaciente;
                let errorAlert1 =
                  '<div class="alert alert-success alert-dismissible fade show">' +
                  "<strong>Paciente eliminado satisfactoriamente</strong>" +
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
