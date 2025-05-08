//Funciones del menu
document.getElementById('link-home').onclick = () => window.location.href = '../Home/home.html';
document.getElementById('link-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('link-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
document.getElementById('link-ubicacion').onclick = () => window.location.href = '../ubicacion/ubicacion.html';
document.getElementById('link-contacto').onclick = () => window.location.href = '../Contacto/contacto.html';

//Iconos
document.getElementById('icon-usuario').onclick = () => window.location.href = '../InicioSesion/iniciosesion.html';
document.getElementById('icon-buscar').onclick = () => window.location.href = '../Busqueda/busqueda.html';
document.getElementById('icon-carrito').onclick = () => window.location.href = '../Detalle de producto/compra.html';

//Boton "Registrarse"
document.getElementById('btn-registrarse').onclick = (e) => {
  e.preventDefault();
  
  const formulario = document.querySelector('form');

  if (formulario.checkValidity()) {
      // Redirigir después del mensaje
      window.location.href = '../Home/home.html'; 

      // Mostrar mensaje de sesión iniciada
      alert("Se ha registrado correctamente");
  } else {
      // Mostrar validación nativa del navegador
      formulario.reportValidity();
  }
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

// Validar coincidencia de contraseñas al enviar
document.querySelector("form").addEventListener("submit", function (e) {
  const pass = document.getElementById("contrasena").value;
  const rePass = document.getElementById("re-contrasena").value;
  if (pass !== rePass) {
    e.preventDefault();
    alert("Las contraseñas no coinciden.");
  }
});

