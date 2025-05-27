// Funciones del menu
document.getElementById('link-home').onclick = () => window.location.href = '/index.html';
document.getElementById('link-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('link-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
document.getElementById('link-gastronomia').onclick = () => window.location.href = '../Restaurante/restaurante.html';
document.getElementById('link-ubicacion').onclick = () => window.location.href = '../ubicacion/ubicacion.html';
document.getElementById('link-contacto').onclick = () => window.location.href = '../Contacto/contacto.html';

// Íconos
document.getElementById('icon-usuario').onclick = () => window.location.href = '../InicioSesion/iniciosesion.html';

//Boton reservar
function cargarCssDinamico(ruta) {
  if (!document.querySelector(`link[href="${ruta}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = ruta;
    document.head.appendChild(link);
  }
}

function cargarFormularioReserva(tipoReserva) {
  fetch("formularioReserva.html")
    .then(response => response.text())
    .then(html => {
      // Insertar el contenido del formulario
      document.getElementById("contenedorFormulario").innerHTML = html;

      // Actualizar título según tipo
      document.getElementById("titulo-formulario").textContent =
        tipoReserva === "degustacion"
          ? "Reserva de Degustación"
          : "Reserva de Almuerzo";

      // Mostrar popup
      const popup = document.querySelector(".popup-reserva");
      popup.style.display = "block";

      // Botón de cerrar popup
      popup.querySelector(".cerrar-popup-reserva").addEventListener("click", () => {
        popup.style.display = "none";
      });

      // Definir horarios permitidos
      const horariosDegustacion = ["10:30", "11:30"];
      const horariosAlmuerzo = ["12:30", "13:00", "13:30", "14:00"];

      // Obtener el select de hora
      const selectHora = popup.querySelector("#hora");

      // Limpiar opciones previas
      selectHora.innerHTML = "";

      // Cargar opciones según tipo
      const horarios = tipoReserva === "degustacion" ? horariosDegustacion : horariosAlmuerzo;

      horarios.forEach(hora => {
        const option = document.createElement("option");
        option.value = hora;
        option.textContent = hora;
        selectHora.appendChild(option);
      });

      //'Seleccione una hora'
      const placeholder = document.createElement("option");
      placeholder.value = "";
      placeholder.textContent = "Seleccione una hora";
      placeholder.disabled = true;
      placeholder.selected = true;
      selectHora.appendChild(placeholder);

      // Listener para envío del formulario
      const formulario = popup.querySelector(".formulario");
      formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        if (formulario.checkValidity()) {
          // Oculta el popup de reserva
          popup.style.display = "none";

          // Muestra el modal personalizado
          document.getElementById("modal").style.display = "block";
        } else {
          // Muestra errores nativos si falta completar algo
          formulario.reportValidity();
        }
      });
    });
}

// Asignar eventos a los botones de reserva (al cargarse la página)
document.getElementById("btnDegustacion").addEventListener("click", () => cargarFormularioReserva("degustacion"));
document.getElementById("btnAlmuerzo").addEventListener("click", () => cargarFormularioReserva("almuerzo"));

// Botón cerrar modal
document.getElementById("btn-cerrar").onclick = () => {
  document.getElementById("modal").style.display = "none";
};

//Abrir y cerrar menú en el celular
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('mostrar');
});