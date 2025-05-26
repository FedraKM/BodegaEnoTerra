// Funciones del menu
document.getElementById('link-home').onclick = () => window.location.href = '../Home/home.html';
document.getElementById('link-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('link-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
document.getElementById('link-gastronomia').onclick = () => window.location.href = '../Restaurante/restaurante.html';
document.getElementById('link-ubicacion').onclick = () => window.location.href = '../ubicacion/ubicacion.html';
document.getElementById('link-contacto').onclick = () => window.location.href = '../Contacto/contacto.html';

// Íconos
document.getElementById('icon-usuario').onclick = () => window.location.href = '../InicioSesion/iniciosesion.html';

// Botón "Enviar"
document.getElementById('btn-enviar-reserva').onclick = (e) => {
  e.preventDefault();

  const formulario = document.querySelector('.formulario');

  if (formulario.checkValidity()) {
    // Oculta el popup de reserva
    document.getElementById('popupFormulario').style.display = 'none';

    // Muestra modal personalizado
    document.getElementById('modal').style.display = 'block';
  } else {
    formulario.reportValidity();
  }
};

// Botón cerrar modal
document.getElementById('btn-cerrar').onclick = () => {
  // Oculta el modal
  document.getElementById('modal').style.display = 'none';
};

//Funcionamiento formulario
document.addEventListener('DOMContentLoaded', () => {
  const botonReservar = document.querySelector('.reservar-btn');
  const popup = document.getElementById('popupFormulario');
  const cerrarBtn = document.querySelector('.cerrar-popup');

  botonReservar.addEventListener('click', () => {
    popup.style.display = 'block';
  });

  cerrarBtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // Cierra el popup si se hace clic fuera del formulario
  window.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
});

//Abrir y cerrar menú en el celular
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('mostrar');
});