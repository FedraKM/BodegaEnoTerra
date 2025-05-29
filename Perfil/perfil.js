// Funciones del menu
document.getElementById('link-home').onclick = () => window.location.href = '/index.html';
document.getElementById('link-nosotros').onclick = () => window.location.href = '../Nosotros/nosotros.html'
document.getElementById('link-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('link-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
document.getElementById('link-gastronomia').onclick = () => window.location.href = '../Restaurante/restaurante.html';
document.getElementById('link-ubicacion').onclick = () => window.location.href = '../ubicacion/ubicacion.html';
document.getElementById('link-contacto').onclick = () => window.location.href = '../Contacto/contacto.html';

// Simulación de obtención de datos desde localStorage
const datosDiv = document.getElementById('datos-usuario');
const usuario = JSON.parse(localStorage.getItem("usuarioActual"));

if (!usuario) {
  // Si no hay usuario, volver a inicio de sesión
  /*window.location.href = "../InicioSesion/iniciosesion.html";*/
} else {
  datosDiv.innerHTML = `
    <img src="${usuario.fotoPerfil || '../Imagenes/usuario-logueado.png'}" style="width:100px; border-radius:50%;">
    <p><strong>Nombre:</strong> ${usuario.nombre}</p>
    <p><strong>Email:</strong> ${usuario.email}</p>
    <p><strong>Teléfono:</strong> ${usuario.telefono || 'No registrado'}</p>
  `;
}

document.getElementById('cerrar-sesion').onclick = () => {
  localStorage.removeItem("usuarioActual");
  window.location.href = "/index.html";
};

//Abrir y cerrar menú en el celular
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('mostrar');
});