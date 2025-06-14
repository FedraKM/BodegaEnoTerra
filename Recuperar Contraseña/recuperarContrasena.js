// Funciones del menú
document.getElementById('link-home').onclick = () => window.location.href = '/index.html';
document.getElementById('link-nosotros').onclick = () => window.location.href = '../Nosotros/nosotros.html'
document.getElementById('link-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('link-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
document.getElementById('link-gastronomia').onclick = () => window.location.href = '../Restaurante/restaurante.html';
document.getElementById('link-ubicacion').onclick = () => window.location.href = '../ubicacion/ubicacion.html';
document.getElementById('link-contacto').onclick = () => window.location.href = '../Contacto/contacto.html';

// Iconos
document.getElementById('icon-usuario').onclick = () => window.location.href = '../InicioSesion/iniciosesion.html';

// Botón "Recuperar Contraseña"
document.getElementById('btn-recuperar-contrasena').onclick = (e) => {
  e.preventDefault();

  const formulario = document.querySelector('form');

  if (formulario.checkValidity()) {
    // Mostrar modal personalizado
    document.getElementById('modal').style.display = 'block';
  } else {
    formulario.reportValidity();
  }
};

// Botón cerrar modal
document.getElementById('btn-cerrar').onclick = () => {
  // Oculta el modal
  document.getElementById('modal').style.display = 'none';
  
  // Redirige
  window.location.href = '../InicioSesion/iniciosesion.html';
};

// Link "Iniciar sesión"
document.getElementById('link-iniciar-sesion').onclick = (e) => {
  e.preventDefault();
  window.location.href = '../InicioSesion/iniciosesion.html';
};

//Abrir y cerrar menú en el celular
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('mostrar');
});