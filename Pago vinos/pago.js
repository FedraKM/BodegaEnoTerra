// Funciones del menu
document.getElementById('link-home').onclick = () => window.location.href = '../Home/home.html';
document.getElementById('link-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('link-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
document.getElementById('link-ubicacion').onclick = () => window.location.href = '../ubicacion/ubicacion.html';
document.getElementById('link-contacto').onclick = () => window.location.href = '../Contacto/contacto.html';

// Íconos
document.getElementById('icon-usuario').onclick = () => window.location.href = '../InicioSesion/iniciosesion.html';
document.getElementById('icon-buscar').onclick = () => window.location.href = '../Busqueda/busqueda.html';
document.getElementById('icon-carrito').onclick = () => window.location.href = '../Detalle de producto/compra.html';

//Incio sesion
document.getElementById('iniciarSesion').onclick = () => window.location.href = '../InicioSesion/iniciosesion.html';

//lleva a la pagina de commpra-realizada.html
const botonPagar = document.querySelector('.pagar-ahora');

// Le agregamos el evento
botonPagar.addEventListener('click', () => {
    window.location.href = '../compra-realizada/compra-realizada.html';
});