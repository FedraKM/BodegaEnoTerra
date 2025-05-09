document.addEventListener("DOMContentLoaded", function () {
  const btnBuscar = document.getElementById("icon-buscar");
  const contenedorBusqueda = document.getElementById("barra-busqueda-container");

  btnBuscar.addEventListener("click", function (event) {
    event.stopPropagation();

    // Si ya existe, no la vuelve a crear
    if (document.querySelector(".search-bar")) {
      document.querySelector(".search-bar").style.display = "flex";
      return;
    }

    // Cargar dinámicamente la barra de búsqueda desde HTML
    fetch("../Busqueda/busqueda.html")
      .then(response => response.text())
      .then(data => {
        contenedorBusqueda.innerHTML = data;

        const searchBar = document.querySelector(".search-bar");
        const closeBtn = document.querySelector(".close-btn");

        searchBar.style.display = "flex";

        // Cerrar con la X
        closeBtn.addEventListener("click", () => {
          searchBar.remove();
        });

        // Cerrar al hacer click fuera
        document.addEventListener("click", function docClick(e) {
          if (!searchBar.contains(e.target) && e.target !== btnBuscar) {
            searchBar.remove();
            document.removeEventListener("click", docClick);
          }
        });
      })
      .catch(error => {
        console.error("Error al cargar la barra de búsqueda:", error);
      });
  });
});
