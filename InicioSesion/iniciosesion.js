// Funciones del menu
document.getElementById('link-home').onclick = () => window.location.href = '/index.html';
document.getElementById('link-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('link-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
document.getElementById('link-gastronomia').onclick = () => window.location.href = '../Restaurante/restaurante.html';
document.getElementById('link-ubicacion').onclick = () => window.location.href = '../ubicacion/ubicacion.html';
document.getElementById('link-contacto').onclick = () => window.location.href = '../Contacto/contacto.html';

// Botón "Iniciar Sesión"
document.getElementById('btn-iniciar-sesion').onclick = (e) => {
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
  window.location.href = '/index.html';
};

//Link Registro
document.getElementById('link-registro').onclick = (e) => {
    e.preventDefault(); // Evita que el enlace haga scroll arriba
    window.location.href = '../Registro/registro.html'; 
};

//Link olvido
document.getElementById('link-olvido').onclick = (e) => {
  e.preventDefault(); // Evita que el enlace haga scroll arriba
  window.location.href = '../Recuperar Contraseña/recuperarContrasena.html'; 
};

//Contrasena
const inputPassword = document.getElementById("contrasena");
const togglePassword = document.getElementById("toggle-password");

togglePassword.onclick = () => {
  const tipoActual = inputPassword.getAttribute("type");
  if (tipoActual === "password") {
    inputPassword.setAttribute("type", "text");
    togglePassword.textContent = "🙈"; // Cambia el ícono cuando se muestra
  } else {
    inputPassword.setAttribute("type", "password");
    togglePassword.textContent = "👁️"; // Vuelve al ícono original
  }
};


//Abrir y cerrar menú en el celular
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('mostrar');
});