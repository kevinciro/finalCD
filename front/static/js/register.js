const btnCancelar = document.querySelector(".cancelar");

btnCancelar.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.href = "./login.html";
});

const URL = "http://localhost:5000/";
const formularioRegistro = document.querySelector("#formularioRegistro");

console.log(formularioRegistro);

formularioRegistro.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {
    first_name: document.querySelector("#first_name").value,
    last_name: document.querySelector("#last_name").value,
    dni: parseInt(document.querySelector("#dni").value),
    password: document.querySelector("#password").value,
  };

  const url = URL + "pacientes/new";
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
