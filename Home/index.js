// Funciones del menu
document.getElementById('link-home').onclick = () => window.location.href = '../Home/index.html';
document.getElementById('link-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('link-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
document.getElementById('link-gastronomia').onclick = () => window.location.href = '../Restaurante/restaurante.html';
document.getElementById('link-ubicacion').onclick = () => window.location.href = '../ubicacion/ubicacion.html';
document.getElementById('link-contacto').onclick = () => window.location.href = '../Contacto/contacto.html';

// Ícono USUARIO
document.getElementById('icon-usuario').onclick = () => window.location.href = '../InicioSesion/iniciosesion.html';

// Botones principales
document.getElementById('btn-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
document.getElementById('btn-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('btn-experiencias').onclick = () => window.location.href = '../Restaurante/restaurante.html';

// Menú celular
document.getElementById('menu-toggle').addEventListener('click', () => {
  const menu = document.getElementById('menu');
  const body = document.body;

  menu.classList.toggle('active');
  body.classList.toggle('no-scroll');
});

// Acciones del menú móvil
document.getElementById('movil-home').onclick = () => window.location.href = '../Home/index.html';
document.getElementById('movil-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('movil-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
document.getElementById('movil-gastronomia').onclick = () => window.location.href = '../Restaurante/restaurante.html';
document.getElementById('movil-ubicacion').onclick = () => window.location.href = '../ubicacion/ubicacion.html';
document.getElementById('movil-contacto').onclick = () => window.location.href = '../Contacto/contacto.html';