//funciones del menu
document.getElementById('link-home').onclick = () => window.location.href = 'index.html';
document.getElementById('link-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('link-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
document.getElementById('link-gastronomia').onclick = () => window.location.href = '../Restaurante/restaurante.html';
document.getElementById('link-ubicacion').onclick = () => window.location.href = '../ubicacion/ubicacion.html';
document.getElementById('link-contacto').onclick = () => window.location.href = '../Contacto/contacto.html';

//Iconos
document.getElementById('icon-usuario').onclick = () => window.location.href = '../InicioSesion/iniciosesion.html';

//Boton comprar
const botones = document.querySelectorAll('.comprar-btn');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    window.location.href = '../Pago vinos/pago.html';
  });
});

//Boton envios
document.addEventListener("DOMContentLoaded", () => {
  const botonTiempos = document.querySelector(".ver-tiempos");
  botonTiempos.addEventListener("click", () => {
      window.location.href = "../Tiempo de envio/envio.html";
  });
});

//Abrir y cerrar menú en el celular
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('mostrar');
});