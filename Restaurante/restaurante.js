// Funciones del menu
document.getElementById('link-home').onclick = () => window.location.href = '../Home/home.html';
document.getElementById('link-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('link-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
document.getElementById('link-ubicacion').onclick = () => window.location.href = '../ubicacion/ubicacion.html';
document.getElementById('link-contacto').onclick = () => window.location.href = '../Contacto/contacto.html';

// Íconos
document.getElementById('icon-usuario').onclick = () => window.location.href = '../InicioSesion/iniciosesion.html';

//Boton reservar
document.getElementById('btn-reservar').addEventListener('click', function(e) {
  e.preventDefault(); // Evita el comportamiento por defecto del <a>
  window.location.href = '../Reservas/reservas.html'; // Redirige
});