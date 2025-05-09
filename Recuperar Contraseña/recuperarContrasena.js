// Funciones del menú
document.getElementById('link-home').onclick = () => window.location.href = '../Home/home.html';
document.getElementById('link-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('link-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
document.getElementById('link-ubicacion').onclick = () => window.location.href = '../ubicacion/ubicacion.html';
document.getElementById('link-contacto').onclick = () => window.location.href = '../Contacto/contacto.html';

// Iconos
document.getElementById('icon-usuario').onclick = () => window.location.href = '../InicioSesion/iniciosesion.html';
document.getElementById('icon-buscar').onclick = () => window.location.href = '../Busqueda/busqueda.html';
document.getElementById('icon-carrito').onclick = () => window.location.href = '../Detalle de producto/compra.html';

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
  
  // Redirige al home
  window.location.href = '../Home/home.html';
};

// Link "Iniciar sesión"
document.getElementById('link-iniciar-sesion').onclick = (e) => {
  e.preventDefault();
  window.location.href = '../InicioSesion/iniciosesion.html';
};
