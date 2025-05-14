// Funciones del menu
document.getElementById('link-home').onclick = () => window.location.href = '../Home/home.html';
document.getElementById('link-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('link-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
document.getElementById('link-gastronomia').onclick = () => window.location.href = '../Restaurante/restaurante.html';
document.getElementById('link-ubicacion').onclick = () => window.location.href = '../ubicacion/ubicacion.html';
document.getElementById('link-contacto').onclick = () => window.location.href = '../Contacto/contacto.html';

//Boton administrador
document.getElementById('btn-administrador').onclick = (e) => {
  e.preventDefault(); // Evita que el enlace haga scroll arriba
  window.location.href = '../InicioSesion/inicioAdmin.html'; 
};

//Boton cliente
document.getElementById('btn-cliente').onclick = (e) => {
  e.preventDefault(); // Evita que el enlace haga scroll arriba
  window.location.href = '../InicioSesion/iniciosesion.html'; 
};
