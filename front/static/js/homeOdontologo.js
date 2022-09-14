const navLinks = document.querySelectorAll(".nav-link-1");
const main = document.querySelector("main");

let plantillaPerfil = `    <section class="profile ">
      <div class="container">
        <h1 class="mt-5 ">Perfil</h1>
        <div class="row mt-3">
          <form action="" class="mb-3">
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Nombre:
              </label>
              <input class="form-control me-3 " id="propiedadUsuario" type="text" value="Nombre"
                aria-label="Disabled input example" disabled readonly>
              <button type="submit" class="edit">
                <img src="../static/img/edit.png" alt="Agregar Tarea">
              </button>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Apellido: </label>
              <input class="form-control me-3" id="propiedadUsuario" type="text" value="Apellido"
                aria-label="Disabled input example" disabled readonly>
              <button type="submit" class="edit">
                <img src="../static/img/edit.png" alt="Agregar Tarea">
              </button>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">DNI: </label>
              <input class="form-control me-3" id="propiedadUsuario" type="text" value="0000000000"
                aria-label="Disabled input example" disabled readonly>
              <button type="submit" class="edit">
                <img src="../static/img/edit.png" alt="Agregar Tarea">
              </button>
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">Matricula: </label>
              <input class="form-control me-3" id="propiedadUsuario" type="text" value="0000000000"
                aria-label="Disabled input example" disabled readonly>
              <button type="submit" class="edit">
                <img src="../static/img/edit.png" alt="Agregar Tarea">
              </button>
            </div>


        </div>

        <button class="btn btn-primary botonGuardar" type="submit" disabled>
          Guardar
        </button>
        <button class="btn btn-primary botonGuardar " type="submit" disabled>
          Cancelar
        </button>
        <button type="button" class="btn btn-danger">
          Eliminar perfil
        </button>
        </form>
      </div>
      </div>
    </section>`;
let plantillaVerTurnos = `  <section class="myTurns">
    <div class="container">
      <h1 class="mt-5 ">Mis Turnos</h1>
      <div class="row mt-3">
        <div class="card col-md-7 mb-3">
          <div class="card-body">
            <h5 class="card-title">Turno con el paciente Nombre Paciente</h5>
            <p class="card-text">El dia 00, del mes 00, del año 0000; a las 00:00:00</p>
            <a href="#" class="btn btn-danger">Cancelar turno</a>
          </div>
        </div>
        <div class="card col-md-7 mb-3">
          <div class="card-body">
            <h5 class="card-title">Turno con el paciente Nombre Paciente</h5>
            <p class="card-text">El dia 00, del mes 00, del año 0000; a las 00:00:00</p>
            <a href="#" class="btn btn-danger">Cancelar turno</a>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-primary mb-3">
        Agendar un nuevo turno
      </button>
    </div>
  </section>`;
let plantillaTurnoNuevo = `  <section class="newTurns">
    <div class="container">
      <h1 class="mt-5">
        Nuevo Turno
      </h1>
      <div class="row mt-3">
        <div class="card col-md-7 mb-3">
          <form action="">
            <label for=" startDate" class="mt-3">
              Seleccione la fecha para el turno:
            </label>
            <input id="startDate" class="form-control mb-3" type="date" value="" required>

            <label for="exampleFormControlInput1" class="form-label">
              Escriba la hora para el turno (ejemplo 14:30:00):
            </label>
            <input type="text" class="form-control mb-3" id="exampleFormControlInput1" placeholder="00:00:00 - 23:59:59" required>

            <button type="button" class="btn btn-primary mb-3">
              Agendar nuevo turno
            </button>

          </form>
        </div>
      </div>
    </div>
  </section> `;
let plantillaBuscarPacientes = `  <section class="getPacientes">
    <div class="container">
      <h1 class="mt-5">
        Buscar Pacientes
      </h1>

      <div class="row mt-3">
        <div class="col-md-7 mb-3">
          <form id="getPacienteNombre" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <label class="control-label me-3" for="id">Nombre:</label>
              <input type="text" class="form-control me-3" id="id" placeholder="Nombre y/o apellido del paciente"
                name="id" required />
            </div>
            <button type="submit" class="btn btn-primary" id="btnGetPacienteNombre">Buscar</button>
          </form>
        </div>
        <div class="col-md-7 mb-3">
          <form id="getPacienteDNI" class="d-flex align-items-center">
            <div class="form-group d-flex align-items-center">
              <label class="control-label me-3" for="id">DNI:</label>
              <input type="text" class="form-control me-3" id="id" placeholder="DNI del paciente" name="id" required />
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
          <div id="div_odontologo_table">
            <div class="row col-md-6 table-responsive">
              <table id="pacientesTable" class="table table-striped">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>DNI</th>
                    <th>Direccion</th>
                  </tr>
                </thead>
                <tbody id="pacientesTableBody mb-3">

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;

let listaPlantillasMain = [
  plantillaPerfil,
  plantillaVerTurnos,
  plantillaTurnoNuevo,
  plantillaBuscarPacientes,
];

function perfil() {
  const listaBotonesEdicion = document.querySelectorAll(".edit");
  const listaPropiedadesUsuario =
    document.querySelectorAll("#propiedadUsuario");
  const botonesGuardar = document.querySelectorAll(".botonGuardar");

  // para cada boton de edicion (de lapiz) se hace un listener
  listaBotonesEdicion.forEach((btn, btnIndex) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      // Se activan los botones de guardar y cancelar
      botonesGuardar.forEach((btnG) => {
        btnG.removeAttribute("disabled");
      });
      listaPropiedadesUsuario[btnIndex].removeAttribute("disabled");
      listaPropiedadesUsuario[btnIndex].removeAttribute("readonly");
      btn.setAttribute("disabled", "true");
      // se desactiva el boton de edicion
      btn.setAttribute("disabled", "true");
    });
  });
}

perfil();

// Selecciona el campo a mostrar y añade el html al main
navLinks.forEach((link, linkIndex) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    // Este ciclio interno es para que la seccion activa se resalte en el nav
    navLinks.forEach(function (linkA) {
      if (linkA.classList.contains("active")) {
        linkA.classList.remove("active");
        link.classList.add("active");
      }
    });
    // Aqui se selecciona el html de la seccion a mostrar
    if (linkIndex < navLinks.length) {
      main.innerHTML = listaPlantillasMain[linkIndex];
      if (linkIndex === 0) {
        perfil();
      }
    }
  });
});

// Dando funcionalidad al boton si del modal para salir
let botonModalSalir = document.querySelector(".salir");
botonModalSalir.addEventListener("click", (event) => {
  event.preventDefault();
  sessionStorage.clear();
  window.location.href = "./index.html";
});
