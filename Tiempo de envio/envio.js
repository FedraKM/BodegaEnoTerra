// Funciones del menu
document.getElementById('link-home').onclick = () => window.location.href = '../Home/home.html';
document.getElementById('link-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('link-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
document.getElementById('link-gastronomia').onclick = () => window.location.href = '../Restaurante/restaurante.html';
document.getElementById('link-ubicacion').onclick = () => window.location.href = '../ubicacion/ubicacion.html';
document.getElementById('link-contacto').onclick = () => window.location.href = '../Contacto/contacto.html';

// Íconos
document.getElementById('icon-usuario').onclick = () => window.location.href = '../InicioSesion/iniciosesion.html';

//Acordeon funcionamiento
const botones = document.querySelectorAll(".acordeon-btn");

  botones.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const respuesta = btn.nextElementSibling;
      respuesta.style.display = (respuesta.style.display === "block") ? "none" : "block";
    });
  });