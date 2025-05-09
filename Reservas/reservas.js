// Funciones del menú
document.getElementById('link-home').onclick = () => window.location.href = '../Home/home.html';
document.getElementById('link-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('link-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
document.getElementById('link-ubicacion').onclick = () => window.location.href = '../Ubicacion/ubicacion.html';
document.getElementById('link-contacto').onclick = () => window.location.href = '../Contacto/contacto.html';

// Íconos
document.getElementById('icon-usuario').onclick = () => window.location.href = '../InicioSesion/iniciosesion.html';

// Botones de reserva
const btnAlmuerzo = document.getElementById("link-almuerzos");
  const btnDegustacion = document.getElementById("link-degustaciones");

  const formAlmuerzo = document.getElementById("formularioAlmuerzo");
  const formDegustacion = document.getElementById("formularioDegustacion");

  const cerrarBtns = document.querySelectorAll(".cerrar-popup");

  btnAlmuerzo.addEventListener("click", () => {
    formAlmuerzo.style.display = "block";
    formDegustacion.style.display = "none";
  });

  btnDegustacion.addEventListener("click", () => {
    formDegustacion.style.display = "block";
    formAlmuerzo.style.display = "none";
  });

  cerrarBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      formAlmuerzo.style.display = "none";
      formDegustacion.style.display = "none";
    });
  });