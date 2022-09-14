const navLinks = document.querySelectorAll(".nav-link-1");
const main = document.querySelector("main");

let plantillaPerfil = `  <section class="profile ">
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
            <h5 class="card-title">Turno con Nombre Odontologo</h5>
            <p class="card-text">El dia 00, del mes 00, del año 0000; a las 00:00:00</p>
            <a href="#" class="btn btn-danger">Cancelar turno</a>
          </div>
        </div>
        <div class="card col-md-7 mb-3">
          <div class="card-body">
            <h5 class="card-title">Turno con Nombre Odontologo</h5>
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

let plantillaTurnoNuevo = `  <section class="newTurn">
    <div class="container">
      <h1 class="mt-5 ">Nuevo Turno</h1>
      <div class="row mt-3">
        <div class="col-md-7 mb-3">
          <form action="">
            <label for=" startDate">Seleccione la fecha en que desea el turno:</label>
            <input id="startDate" class="form-control" type="date" value="" />
          </form>
        </div>
        <div class="card col-md-7 mb-3">
          <div class="card-body">
            <h5 class="card-title">Turno con Nombre Odontologo</h5>
            <p class="card-text">El dia 00, del mes 00, del año 0000; a las 00:00:00</p>
            <a href="#" class="btn btn-primary">Agendar turno</a>
          </div>
        </div>
        <div class="card col-md-7 mb-3">
          <div class="card-body">
            <h5 class="card-title">Turno con Nombre Odontologo</h5>
            <p class="card-text">El dia 00, del mes 00, del año 0000; a las 00:00:00</p>
            <a href="#" class="btn btn-primary">Agendar turno</a>
          </div>
        </div>
      </div>
  </section>`;

let listaPlantillasMain = [
  plantillaPerfil,
  plantillaVerTurnos,
  plantillaTurnoNuevo,
];

// Esta funcion tiene toda la funcionalidad de la seccion de Mi Perfil
// Cada que se renderice la seccion se debe correr esta funcion
function perfil() {
  const listaBotonesEdicion = document.querySelectorAll(".edit");
  const listaPropiedadesUsuario =
    document.querySelectorAll("#propiedadUsuario");
  const botonesGuardar = document.querySelectorAll(".botonGuardar");
  const camposDir = document.querySelector(".dir-oculto");
  const plantillaDirecciones = `<div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Provincia:
              </label>
              <input class="form-control me-3" id="propiedadDireccion " type="text" value="Provincia"
                aria-label="Disabled input example">
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3">
              <label for="exampleFormControlInput1" class="form-label me-3">
                Localidad:
              </label> <input class="form-control me-3" id="propiedadDireccion" type="text" value="Localidad"
                aria-label="Disabled input example dir-oculto">
            </div>
            <div class="col-md-7 d-flex align-items-center mb-3"> <label for="exampleFormControlInput1"
                class="form-label me-3">Calle: </label> <input class="form-control me-3 " id="propiedadDireccion"
                type="text" value="Calle" aria-label="Disabled input example"> </div>
            <div class="col-md-7 d-flex align-items-center mb-3"> <label for="exampleFormControlInput1"
                class="form-label me-3">Numero: </label> <input class="form-control me-3 " id="propiedadDireccion"
                type="text" value="Numero" aria-label="Disabled input example"> </div>`;

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
        camposDir.innerHTML += plantillaDirecciones;
        btn.setAttribute("disabled", "true");
      }
    });
  });
  console.log(camposDir);
}

// corro la funcion perfil para que se funcione en la primera carga de la pagina
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
