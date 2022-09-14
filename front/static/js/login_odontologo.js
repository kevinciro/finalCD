const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    //event.preventDefault();
    // Este ciclio interno es para que la seccion activa se resalte en el nav
    navLinks.forEach(function (linkA) {
      if (linkA.classList.contains("active")) {
        linkA.classList.remove("active");
        link.classList.add("active");
      }
    });
  });
});

const URL = "http://localhost:5000/";
const formularioLogin = document.querySelector("#formularioLogin");

console.log(formularioLogin);

formularioLogin.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {
    dni: parseInt(document.querySelector("#dni").value),
    password: document.querySelector("#password").value,
  };

  const url = URL + "odontologos/login";
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
      formularioLogin.reset();
      sessionStorage.setItem("odontologo_id", data.paciente_id);
      sessionStorage.setItem("token", data.token);
      window.location.href = "./odontologoHome.html";
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
