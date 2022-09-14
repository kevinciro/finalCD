const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link, linkIndex) => {
  link.addEventListener("click", (event) => {
    // Este ciclio interno es para que la seccion activa se resalte en el nav
    navLinks.forEach(function (linkA) {
      if (linkA.classList.contains("active")) {
        linkA.classList.remove("active");
        link.classList.add("active");
      }
    });
  });
});
