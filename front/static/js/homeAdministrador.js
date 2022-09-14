// const odontologoHelper = require("./odontologoHelper");
const dropdownItems = document.querySelectorAll(".dropdown-item");
const navLinks = document.querySelectorAll(".nav-link-1");
const main = document.querySelector("main");
const URL = "http://localhost:5000/";

let plantillaPerfil = `    <section class="profile ">
      <h1>Bienvenido</h1>
    </section>`;

let listaPlantillasDropDown = [
  pacienteHelper.plantillaBuscarPacientes,
  pacienteHelper.plantillaCrearPaciente,
  pacienteHelper.plantillaActualizarPaciente,
  pacienteHelper.plantillaEliminarPaciente,
  odontologoHelper.plantillaBuscarOdontologos,
  odontologoHelper.plantillaCrearOdontologo,
  odontologoHelper.plantillaActualizarOdontologo,
  odontologoHelper.plantillaEliminarOdontologo,
  turnosHelper.plantillaBuscarTurnos,
  turnosHelper.plantillaCrearTurno,
  turnosHelper.plantillaActualizarTurno,
  turnosHelper.plantillaEliminarTurno,
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
    if (linkIndex === 0) {
      main.innerHTML = plantillaPerfil;
      perfil();
    }
    if (linkIndex < navLinks.length - 1) {
      dropdownItems.forEach((dropdownItem, dropdownItemIndex) => {
        dropdownItem.addEventListener("click", (event) => {
          event.preventDefault();
          main.innerHTML = listaPlantillasDropDown[dropdownItemIndex];
          if (dropdownItemIndex === 0) {
            pacienteHelper.getPacientes();
          }
          if (dropdownItemIndex === 1) {
            pacienteHelper.postPaciente();
          }
          if (dropdownItemIndex === 2) {
            pacienteHelper.updatePaciente();
          }
          if (dropdownItemIndex === 3) {
            pacienteHelper.deletePaciente();
          }
          if (dropdownItemIndex === 4) {
            odontologoHelper.getOdontologos();
          }
          if (dropdownItemIndex === 5) {
            odontologoHelper.postOdontologo();
          }
          if (dropdownItemIndex === 6) {
            odontologoHelper.updateOdontologo();
          }
          if (dropdownItemIndex === 7) {
            odontologoHelper.deleteOdontologo();
          }
          if (dropdownItemIndex === 8) {
            turnosHelper.getTurnos();
          }
          if (dropdownItemIndex === 9) {
            turnosHelper.postTurno();
          }
          if (dropdownItemIndex === 10) {
            turnosHelper.updateTurno();
          }
          if (dropdownItemIndex === 11) {
            turnosHelper.deleteTurno();
          }
        });
      });
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
