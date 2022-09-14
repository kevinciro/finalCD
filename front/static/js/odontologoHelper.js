const odontologoHelper = {
  plantillaBuscarOdontologos: `      <section class="getOdontologos">
    <div class="container">
      <h1 class="mt-5">
        Buscar Odontologos
      </h1>

      <div class="row mt-3">

        <!--<div class="col-md-7 mb-3">
            <form id="getOdo" class="d-flex align-items-center">
              <div class="form-group d-flex align-items-center">
                <label class="control-label me-3" for="matricula">Nombre:</label>
                <input type="text" class="form-control me-3" id="id" placeholder="Nombre y/o apellido del odontologo"
                  name="id" required />
              </div>
              <button type="submit" class="btn btn-primary" id="btnGetOdontologoNombre">Buscar</button>
            </form>
          </div>
          <div class="col-md-7 mb-3"> -->
        <form id="getOdontologoMatricula" class="d-flex align-items-center">
          <div class="form-group d-flex align-items-center">
            <label class="control-label me-3" for="matricula">Matricula:</label>
            <input type="text" class="form-control me-3" id="matricula" placeholder="Matricula del odontologo "
              name="id" required />
          </div>
          <button type="submit" class="btn btn-primary" id="btnGetOdontologoMatricula">Buscar</button>
        </form>
        <div class="col-md-7 mb-3">
          <form id="getTodosPacientes" class="d-flex align-items-center">
              <button type="submit" class="btn btn-primary mt-3" id="btnGetPacientes">Buscar Todos</button>
          </form>
        </div>
        <div class="col-md-7 mb-3">
          <div id="div_odontologo_table">
            <div class="row table-responsive">
              <table id="odontologoTable" class="table table-striped">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Matricula</th>
                  </tr>
                </thead>
                <tbody id="odontologosTableBody mb-3">

                </tbody>
              </table>
              <div id="response" style="display:none; margin-top:10px">
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
    </div>
  </section>`,

  plantillaCrearOdontologo: `  <section class="putOdontologo">
    <div class="container mt-10">
      <div class="row">
        <div class="col-md-5">
          <h1 class="d-flex mt-5">
            Registrar odontologo
          </h1>
          <form action="" id="formularioRegistro">
            <div class="mb-3r mt-4">
              <label for="nombre" class="form-label">Nombre*</label>
              <input type="text" class="form-control" id="nombre" placeholder="Ingrese el nombre"
                required>
            </div>
            <div class="mb-3r mt-4">
              <label for="apellido" class="form-label">Apellido*</label>
              <input type="text" class="form-control" id="apellido" placeholder="Ingrese el apellido"
                required>
            </div>
            <div class="mb-3r mt-4">
              <label for="dni" class="form-label">DNI*</label>
              <input type="number" class="form-control" id="dni" placeholder="Ingrese el DNI"
                required>
            </div>
            <div class="mb-3 mt-3">
              <label for="password" class="form-label">Contraseña*</label>
              <input type="password" class="form-control" id="password"
                placeholder="Ingrese la contraseña" required>
            </div>
            <div class="mb-3r mt-4">
              <label for="matricula" class="form-label">Matricula*</label>
              <input type="number" class="form-control mb-3" id="matricula"
                placeholder="Ingrese la matricula del odontologo" required>
            </div>

            <button class="btn btn-primary me-3 mb-3" type="submit">Registrar usuario</button>
          </form>

          <div class="mb-3 d-flex justify-content-center">
            <p class="mensaje">
              La informacion marcada con * es obligatoria.
            </p>
            
          </div>
            <div id="response" style="display:none; margin-top:10px">
            </div>
        </div>
      </div>
    </div>
    </div>
  </section>`,

  plantillaActualizarOdontologo: `  <section class="updateOdontologo">
    <div class="container">
      <h1 class="mt-5">
        Actualizar odontologo
      </h1>

      <div class="row mt-3">
        <div class="col-md-7 mb-3">
          <form id="getOdontologoMatricula" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <label class="control-label me-3" for="matricula">Matricula:</label>
              <input type="text" class="form-control me-3" id="matricula" placeholder="Matricula del odontologo" name="matricula" required />
            </div>
            <button type="submit" class="btn btn-primary" id="btnGetOdontologoMatricula">Buscar</button>
          </form>
        </div>
        <div class="col-md-10 mb-3">
          <form class="mb-3" id="formOdontologo">
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="nombre" class="form-label me-3">
                Nombre:
              </label>
              <input class="form-control me-3 nombre" id="propiedadUsuario" type="text" value="Nombre"
                aria-label="Disabled input example" disabled readonly>
              <button type="submit"  class="edit">
                <img src="../static/img/edit.png" alt="Agregar Tarea">
              </button>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="apellido" class="form-label me-3">Apellido: </label>
              <input class="form-control me-3 apellido" id="propiedadUsuario" type="text" value="Apellido"
                aria-label="Disabled input example" disabled readonly>
              <button type="submit" class="edit">
                <img src="../static/img/edit.png" alt="Agregar Tarea">
              </button>
            </div>
              <!-- <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="dni" class="form-label me-3">DNI: </label>
              <input class="form-control me-3 dni" id="propiedadUsuario " type="text" value="0000000000"
                aria-label="Disabled input example" disabled readonly>
              <button type="submit" class="edit">
                <img src="../static/img/edit.png" alt="Agregar Tarea">
              </button>
            </div> -->
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="matricula" class="form-label me-3">Matricula: </label>
              <input class="form-control me-3 matricula" id="propiedadUsuario " type="text" value="0000000"
                aria-label="Disabled input example" disabled readonly>
              <button type="submit" class="edit">
                <img src="../static/img/edit.png" alt="Agregar Tarea">
              </button>
            </div>

            <button class="btn btn-primary botonGuardar" name="formOdontologo" type="submit">
              Guardar
            </button>
            <button class="btn btn-primary botonGuardar " type="submit" >
              Cancelar
            </button>
          </form>
            <div id="response" style="display:none; margin-top:10px">
            </div>
        </div>
      </div>
    </div>
  </section>`,

  plantillaEliminarOdontologo: `  <section class="deleteOdontologo">
    <div class="container">
      <h1 class="mt-5">
        Eliminar Odontologo
      </h1>

      <div class="row mt-3">
        <div class="col-md-7 mb-3">
          <form id="getOdontologoMatricula" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <label class="control-label me-3" for="id">Matricula:</label>
              <input type="text" class="form-control me-3" id="matricula" placeholder="Matricula" name="id" required />
            </div>
            <button type="submit" class="btn btn-primary" id="btnGetOdontologoMatricula">Buscar</button>
          </form>
        </div>
        <div class="col-md-10 mb-3">
          <form action="" class="mb-3">
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Nombre:
              </label>
              <input class="form-control me-3 nombre" id="propiedadUsuario" type="text" value="Nombre"
                aria-label="Disabled input example" disabled readonly>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Apellido: </label>
              <input class="form-control me-3 apellido" id="propiedadUsuario" type="text" value="Apellido"
                aria-label="Disabled input example" disabled readonly>
            </div>
            <!-- <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">DNI: </label>
              <input class="form-control me-3 dni" id="propiedadUsuario" type="text" value="0000000000"
                aria-label="Disabled input example" disabled readonly>
            </div> -->
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1 matricula" class="form-label me-3">Matricula: </label>
              <input class="form-control me-3 direccion" id="propiedadUsuario" type="text" value="00000000"
                aria-label="Disabled input example" disabled readonly>
            </div>

            <button type="submit" class="btn btn-danger">
              Eliminar odontologo
            </button>
          </form>
            <div id="response" style="display:none; margin-top:10px">
            </div>
        </div>
      </div>
    </div>
  </section>`,

  URL: "http://localhost:5000/",

  getOdontologos: function () {
    const formularioTodos = document.querySelector("#getTodosPacientes");

    formularioTodos.addEventListener("submit", function (event) {
      event.preventDefault();

      const url = URL + "odontologos";
      const settings = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      };

      fetch(url, settings)
        .then((response) => response.json())
        .then((data) => {
          var table = document.getElementById("odontologoTable");
          table.innerHTML = `<thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Matricula</th>
                  </tr>
                </thead>`;
          for (odontologo of data) {
            //por cada odontologo armaremos una fila de la tabla
            var odontologoRow = table.insertRow();

            //armamos cada columna de la fila
            odontologoRow.innerHTML =
              '<td class="td_nombre">' +
              odontologo.first_name +
              "</td>" +
              '<td class="td_apellido">' +
              odontologo.last_name +
              "</td>" +
              '<td class="td_matricula">' +
              odontologo.registration_number +
              "</td>";
            console.log(data);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });

    const formularioMatricula = document.querySelector(
      "#getOdontologoMatricula"
    );
    formularioMatricula.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = {
        matricula: document.querySelector("#matricula").value,
      };

      const url = URL + "odontologos/registration_number/" + formData.matricula;
      const settings = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      };

      fetch(url, settings)
        .then((response) => response.json())
        .then((data) => {
          let odontologo = data;
          var table = document.getElementById("odontologoTable");
          table.innerHTML = `<thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Matricula</th>
                  </tr>
                </thead>`;
          var odontologoRow = table.insertRow();

          //armamos cada columna de la fila
          odontologoRow.innerHTML =
            '<td class="td_nombre">' +
            odontologo.first_name +
            "</td>" +
            '<td class="td_apellido">' +
            odontologo.last_name +
            "</td>" +
            '<td class="td_matricula">' +
            odontologo.registration_number +
            "</td>";
        })
        .catch((error) => {
          var table = document.getElementById("odontologoTable");
          table.innerHTML = `<thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Matricula</th>
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

  postOdontologo: function () {
    const formularioRegistro = document.querySelector("#formularioRegistro");

    formularioRegistro.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = {
        first_name: document.querySelector("#nombre").value,
        last_name: document.querySelector("#apellido").value,
        registration_number: parseInt(
          document.querySelector("#matricula").value
        ),
        dni: parseInt(document.querySelector("#dni").value),
        password: document.querySelector("#password").value,
      };

      const url = URL + "odontologos/new";
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
          setTimeout(() => {
            window.location.reload();
            addEventListener("");
            console.log(document.querySelector("main"));
          }, 3000);
          let errorAlert =
            '<div class="alert alert-success alert-dismissible fade show">' +
            "<strong>Odontologo creado satisfactoriamente</strong>" +
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

  updateOdontologo: function () {
    const formularioMatricula = document.querySelector(
      "#getOdontologoMatricula"
    );

    formularioMatricula.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = {
        matricula: document.querySelector("#matricula").value,
      };
      const url = URL + "odontologos/registration_number/" + formData.matricula;
      const settings = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
          "Content-type": "application/json; charset=UTF-8",
        },
      };

      fetch(url, settings)
        .then((response) => response.json())
        .then((data) => {
          plantillaActualizarOdontologo = `  <section class="updateOdontologo">
    <div class="container">
      <h1 class="mt-5">
        Actualizar odontologo
      </h1>

      <div class="row mt-3">
        <div class="col-md-7 mb-3">
          <form id="getOdontologoMatricula" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <label class="control-label me-3" for="matricula">Matricula:</label>
              <input type="text" class="form-control me-3" id="matricula" placeholder="Matricula del odontologo" name="matricula" required />
            </div>
            <button type="submit" class="btn btn-primary" id="btnGetOdontologoMatricula">Buscar</button>
          </form>
        </div>
        <div class="col-md-10 mb-3">
          <form class="mb-3" id="formOdontologo">
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="nombre" class="form-label me-3">
                Nombre:
              </label>
              <input class="form-control me-3 nombre" id="propiedadUsuario" type="text" value=${
                data.first_name
              }
                aria-label="Disabled input example" disabled readonly>
              <button type="submit"  class="edit">
                <img src="../static/img/edit.png" alt="Agregar Tarea">
              </button>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="apellido" class="form-label me-3">Apellido: </label>
              <input class="form-control me-3 apellido" id="propiedadUsuario" type="text" value=${
                data.last_name
              }
                aria-label="Disabled input example" disabled readonly>
              <button type="submit" class="edit">
                <img src="../static/img/edit.png" alt="Agregar Tarea">
              </button>
            </div>
              <!--  <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="dni" class="form-label me-3">DNI: </label>
              <input class="form-control me-3 dni" id="propiedadUsuario " type="text" value=${toString(
                data.dni
              )}
                aria-label="Disabled input example" disabled readonly>
              <button type="submit" class="edit">
                <img src="../static/img/edit.png" alt="Agregar Tarea">
              </button>
            </div> -->
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="matricula" class="form-label me-3">Matricula: </label>
              <input class="form-control me-3 matricula" id="propiedadUsuario" type="text" value=${
                data.registration_number
              }
                aria-label="Disabled input example" disabled readonly>
              <button type="submit" class="edit">
                <img src="../static/img/edit.png" alt="Agregar Tarea">
              </button>
            </div>
            <button class="btn btn-primary botonGuardar" name='formOdontologo' type="submit">
              Guardar
            </button>
            <button class="btn btn-primary botonGuardar " type="submit">
              Cancelar
            </button>
          </form>

            <div id="response" style="display:none; margin-top:10px">
            </div>
        </div>
      </div>
    </div>
  </section>`;
          main.innerHTML = plantillaActualizarOdontologo;
          perfil();

          const formularioActualizacion =
            document.querySelector("#formOdontologo");
          formularioActualizacion.addEventListener("submit", function (event) {
            event.preventDefault();
            const formDataPut = {
              first_name: document.querySelector(".nombre").value,
              last_name: document.querySelector(".apellido").value,
              registration_number: parseInt(
                document.querySelector(".matricula").value
              ),
            };

            const urlPut = URL + "odontologos/update/" + formData.matricula;
            const settingsPut = {
              method: "PUT",
              body: JSON.stringify(formDataPut),
              headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token"),
                "Content-type": "application/json; charset=UTF-8",
              },
            };

            fetch(urlPut, settingsPut)
              .then((response) => response)
              .then((data1) => {
                plantillaActualizarOdontologo = `  <section class="updateOdontologo">
    <div class="container">
      <h1 class="mt-5">
        Actualizar odontologo
      </h1>

      <div class="row mt-3">
        <div class="col-md-7 mb-3">
          <form id="getOdontologoMatricula" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <label class="control-label me-3" for="matricula">Matricula:</label>
              <input type="text" class="form-control me-3" id="matricula" placeholder="Matricula del odontologo" name="matricula" required />
            </div>
            <button type="submit" class="btn btn-primary" id="btnGetOdontologoMatricula">Buscar</button>
          </form>
        </div>
        <div class="col-md-10 mb-3">
          <form class="mb-3" id="formOdontologo">
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="nombre" class="form-label me-3">
                Nombre:
              </label>
              <input class="form-control me-3 nombre" id="propiedadUsuario" type="text" value="Nombre"
                aria-label="Disabled input example" disabled readonly>
              <button type="submit"  class="edit">
                <img src="../static/img/edit.png" alt="Agregar Tarea">
              </button>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="apellido" class="form-label me-3">Apellido: </label>
              <input class="form-control me-3 apellido" id="propiedadUsuario" type="text" value="Apellido"
                aria-label="Disabled input example" disabled readonly>
              <button type="submit" class="edit">
                <img src="../static/img/edit.png" alt="Agregar Tarea">
              </button>
            </div>
              <!-- <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="dni" class="form-label me-3">DNI: </label>
              <input class="form-control me-3 dni" id="propiedadUsuario " type="text" value="0000000000"
                aria-label="Disabled input example" disabled readonly>
              <button type="submit" class="edit">
                <img src="../static/img/edit.png" alt="Agregar Tarea">
              </button>
            </div> -->
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="matricula" class="form-label me-3">Matricula: </label>
              <input class="form-control me-3 matricula" id="propiedadUsuario " type="text" value="0000000"
                aria-label="Disabled input example" disabled readonly>
              <button type="submit" class="edit">
                <img src="../static/img/edit.png" alt="Agregar Tarea">
              </button>
            </div>

            <button class="btn btn-primary botonGuardar" name="formOdontologo" type="submit">
              Guardar
            </button>
            <button class="btn btn-primary botonGuardar " type="submit" >
              Cancelar
            </button>
          </form>
            <div id="response" style="display:none; margin-top:10px">
            </div>
        </div>
      </div>
    </div>
  </section>`;
                main.innerHTML = plantillaActualizarOdontologo;
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

  deleteOdontologo: function () {
    const formularioMatricula = document.querySelector(
      "#getOdontologoMatricula"
    );

    formularioMatricula.addEventListener("submit", function (event) {
      event.preventDefault();
      const formData = {
        matricula: document.querySelector("#matricula").value,
      };
      const url = URL + "odontologos/registration_number/" + formData.matricula;
      const settings = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
          "Content-type": "application/json; charset=UTF-8",
        },
      };

      fetch(url, settings)
        .then((response) => response.json())
        .then((data) => {
          plantillaEliminarOdontologo = `  <section class="deleteOdontologo">
    <div class="container">
      <h1 class="mt-5">
        Eliminar Odontologo
      </h1>

      <div class="row mt-3">
        <div class="col-md-7 mb-3">
          <form id="getOdontologoMatricula" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <label class="control-label me-3" for="id">Matricula:</label>
              <input type="text" class="form-control me-3" id="matricula" placeholder="Matricula" name="id" required />
            </div>
            <button type="submit" class="btn btn-primary" id="btnGetOdontologoMatricula">Buscar</button>
          </form>
        </div>
        <div class="col-md-10 mb-3">
          <form id="formOdontologo" class="mb-3">
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Nombre:
              </label>
              <input class="form-control me-3 nombre" id="propiedadUsuario" type="text" value=${data.first_name}
                aria-label="Disabled input example" disabled readonly>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Apellido: </label>
              <input class="form-control me-3 apellido" id="propiedadUsuario" type="text" value=${data.last_name}
                aria-label="Disabled input example" disabled readonly>
            </div>
            <!-- <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">DNI: </label>
              <input class="form-control me-3 dni" id="propiedadUsuario" type="text" value=${data.dni}
                aria-label="Disabled input example" disabled readonly>
            </div> -->
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1 matricula" class="form-label me-3">Matricula: </label>
              <input class="form-control me-3 direccion" id="propiedadUsuario" type="text" value=${data.registration_number}
                aria-label="Disabled input example" disabled readonly>
            </div>

            <button type="submit" class="btn btn-danger">
              Eliminar odontologo
            </button>
          </form>
            <div id="response" style="display:none; margin-top:10px">
            </div>
        </div>
      </div>
    </div>
  </section>`;
          main.innerHTML = plantillaEliminarOdontologo;

          const formularioActualizacion =
            document.querySelector("#formOdontologo");
          formularioActualizacion.addEventListener("submit", function (event) {
            event.preventDefault();
            const formDataDel = {};

            const urlDel = URL + "odontologos/" + formData.matricula;
            const settingsDel = {
              method: "DELETE",
              body: JSON.stringify(formDataDel),
              headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token"),
                "Content-type": "application/json; charset=UTF-8",
              },
            };

            fetch(urlDel, settingsDel)
              .then((response) => response)
              .then((data1) => {
                plantillaEliminarOdontologo = `  <section class="deleteOdontologo">
    <div class="container">
      <h1 class="mt-5">
        Eliminar Odontologo
      </h1>

      <div class="row mt-3">
        <div class="col-md-7 mb-3">
          <form id="getOdontologoMatricula" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <label class="control-label me-3" for="id">Matricula:</label>
              <input type="text" class="form-control me-3" id="matricula" placeholder="Matricula" name="id" required />
            </div>
            <button type="submit" class="btn btn-primary" id="btnGetOdontologoMatricula">Buscar</button>
          </form>
        </div>
        <div class="col-md-10 mb-3">
          <form action="" class="mb-3">
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Nombre:
              </label>
              <input class="form-control me-3 nombre" id="propiedadUsuario" type="text" value="Nombre"
                aria-label="Disabled input example" disabled readonly>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Apellido: </label>
              <input class="form-control me-3 apellido" id="propiedadUsuario" type="text" value="Apellido"
                aria-label="Disabled input example" disabled readonly>
            </div>
            <!-- <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">DNI: </label>
              <input class="form-control me-3 dni" id="propiedadUsuario" type="text" value="0000000000"
                aria-label="Disabled input example" disabled readonly>
            </div> -->
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1 matricula" class="form-label me-3">Matricula: </label>
              <input class="form-control me-3 direccion" id="propiedadUsuario" type="text" value="00000000"
                aria-label="Disabled input example" disabled readonly>
            </div>

            <button type="submit" class="btn btn-danger">
              Eliminar odontologo
            </button>
          </form>
            <div id="response" style="display:none; margin-top:10px">
            </div>
        </div>
      </div>
    </div>
                  </section>`;
                main.innerHTML = plantillaEliminarOdontologo;
                let errorAlert1 =
                  '<div class="alert alert-success alert-dismissible fade show">' +
                  "<strong>Odontologo eliminado satisfactoriamente</strong>" +
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
