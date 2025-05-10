// Funciones del menu
document.getElementById('link-home').onclick = () => window.location.href = '../Home/home.html';
document.getElementById('link-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('link-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
document.getElementById('link-ubicacion').onclick = () => window.location.href = '../ubicacion/ubicacion.html';
document.getElementById('link-contacto').onclick = () => window.location.href = '../Contacto/contacto.html';

// Íconos
document.getElementById('icon-usuario').onclick = () => window.location.href = '../InicioSesion/iniciosesion.html';
document.getElementById('icon-carrito').onclick = () => window.location.href = '../Detalle de producto/compra.html';

//bootn volver al inicio
document.getElementById('boton-volver').onclick = () => window.location.href = '../Home/home.html';

document.querySelector('.pagar-ahora').onclick = () => {
    window.location.href = 'compra-realizada.html';
  };
