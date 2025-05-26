//Funciones del menu
document.getElementById('link-home').onclick = () => window.location.href = '../Home/index.html';
document.getElementById('link-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('link-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
document.getElementById('link-gastronomia').onclick = () => window.location.href = '../Restaurante/restaurante.html';
document.getElementById('link-ubicacion').onclick = () => window.location.href = '../ubicacion/ubicacion.html';
document.getElementById('link-contacto').onclick = () => window.location.href = '../Contacto/contacto.html';

//Iconos
document.getElementById('icon-usuario').onclick = () => window.location.href = '../InicioSesion/iniciosesion.html';

// Botón "Registrarse"
document.getElementById('btn-registrarse').onclick = (e) => {
  e.preventDefault();

  const formulario = document.querySelector('form');
  const pass = document.getElementById("contrasena").value;
  const rePass = document.getElementById("re-contrasena").value;

  if (!formulario.checkValidity()) {
    formulario.reportValidity();
    return;
  }

  if (pass !== rePass) {
    mostrarModal("Las contraseñas no coinciden.");
    return;
  }

  // Si todo está bien
  document.getElementById('modal').style.display = 'block';
};

// Botón cerrar modal success
document.getElementById('btn-cerrar-success').onclick = () => {
  // Oculta el modal
  document.getElementById('modal').style.display = 'none';
  
  // Redirige al home
  window.location.href = '../Home/index.html';
};

// Botón cerrar modal de error
document.getElementById('btn-cerrar-error').onclick = () => {
  document.getElementById('modal-error').style.display = 'none';
};

//Link Iniciar Sesión
document.getElementById('link-iniciar-sesion').onclick = (e) => {
  e.preventDefault(); // Evita que el enlace haga scroll arriba
  window.location.href = '../InicioSesion/iniciosesion.html'; 
};

// Mostrar/Ocultar contraseña principal
const togglePassword = document.getElementById("toggle-password");
if (togglePassword) {
  togglePassword.addEventListener("click", function () {
    const passwordField = document.getElementById("contrasena");
    this.textContent = passwordField.type === "password" ? "🙈" : "👁️";
    passwordField.type = passwordField.type === "password" ? "text" : "password";
  });
}

// Mostrar/Ocultar confirmar contraseña
const toggleRePassword = document.getElementById("toggle-repassword");
if (toggleRePassword) {
  toggleRePassword.addEventListener("click", function () {
    const rePasswordField = document.getElementById("re-contrasena");
    this.textContent = rePasswordField.type === "password" ? "🙈" : "👁️";
    rePasswordField.type = rePasswordField.type === "password" ? "text" : "password";
  });
}


// Función para mostrar el modal con mensaje personalizado
function mostrarModal(mensaje) {
  document.getElementById("mensaje-modal").textContent = mensaje;
  document.getElementById("modal-error").style.display = "block";
}