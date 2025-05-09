//Funciones del menu
document.getElementById('link-home').onclick = () => window.location.href = '../Home/home.html';
document.getElementById('link-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('link-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
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
  window.location.href = '../Home/home.html';
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

//Funcionamiento de carrito
document.addEventListener('DOMContentLoaded', () => {
  const carritoLateral = document.getElementById('carrito-lateral');
  const listaCarrito = document.getElementById('lista-carrito');
  const totalCarrito = document.getElementById('total-carrito');
  const overlay = document.getElementById('overlay');
  const cerrarCarrito = document.getElementById('cerrar-carrito');
  const iconCarrito = document.getElementById('icon-carrito');
  const btnSeguir = document.querySelector('.btn-seguir');
  const btnComprar = document.querySelector('.btn-comprar');

  function actualizarTotal() {
    let total = 0;
    const productos = document.querySelectorAll('.item-carrito');
    const mensajeVacio = document.getElementById('carrito-vacio');
    const carritoFooter = document.querySelector('.carrito-footer');

    productos.forEach(producto => {
      const precioTexto = producto.querySelector('.precio-item').textContent;
      const precio = parseFloat(precioTexto.replace('$', '').replace(/\./g, ''));
      total += precio;
    });

    totalCarrito.textContent = `$${total.toLocaleString('es-AR')}`;

    if (productos.length === 0) {
      mensajeVacio.style.display = 'block';
      carritoFooter.style.display = 'none';
      listaCarrito.style.display = 'none';
    } else {
      mensajeVacio.style.display = 'none';
      carritoFooter.style.display = 'block';
      listaCarrito.style.display = 'block';
    }
  }

  function abrirCarrito() {
    overlay.style.display = 'block';
    carritoLateral.classList.add('mostrar');
  }

  function cerrarCarritoFunc() {
    overlay.style.display = 'none';
    carritoLateral.classList.remove('mostrar');
  }

  // Esta función carga desde sessionStorage
  function cargarCarritoDesdeStorage() {
    const itemsGuardados = JSON.parse(sessionStorage.getItem('carrito')) || [];
    listaCarrito.innerHTML = ''; // Limpia el carrito antes de rellenar

    itemsGuardados.forEach(({ nombre, imagen, cantidad, precio }) => {
      const item = document.createElement('li');
      item.classList.add('item-carrito');
      item.innerHTML = `
        <img src="${imagen}" alt="" class="img-carrito">
        <div class="info-carrito">
          <strong>${nombre}</strong>
          <p class="detalle">Caja (6u)</p>
          <div class="acciones-carrito">
            <div class="control-cantidad">
              <span class="cantidad">${cantidad}</span>
            </div>
            <div class="precio-y-eliminar">
              <span class="precio-item">$${(precio * cantidad).toLocaleString('es-AR')}</span>
            </div>
          </div>
        </div>
      `;
      listaCarrito.appendChild(item);
    });

    actualizarTotal();
  }

  iconCarrito.addEventListener('click', () => {
    const estaVisible = carritoLateral.classList.contains('mostrar');
    if (estaVisible) {
      cerrarCarritoFunc();
    } else {
      cargarCarritoDesdeStorage(); // Carga los productos al abrir
      abrirCarrito();
    }
  });

  overlay.addEventListener('click', cerrarCarritoFunc);
  cerrarCarrito.addEventListener('click', cerrarCarritoFunc);
  
  if (btnSeguir) {
    btnSeguir.addEventListener('click', () => {
      window.location.href = '../Vinos/vinos.html'; 
    });
  }

  if (btnComprar) {
    btnComprar.addEventListener('click', () => {
      window.location.href = '../Detalle de producto/compra.html'; 
    });
  }
});

// --- BARRA DE BÚSQUEDA ---
document.addEventListener("DOMContentLoaded", function () {
  const btnBuscar = document.getElementById("icon-buscar");
  const searchBar = document.querySelector(".search-bar");
  const closeBtn = document.querySelector(".close-btn");

  // Alternar visibilidad al hacer clic en el icono de búsqueda
  btnBuscar.addEventListener("click", function (event) {
    event.stopPropagation();
    if (searchBar.style.display === "flex") {
      searchBar.style.display = "none";
    } else {
      searchBar.style.display = "flex";
    }
  });

  // Cerrar al hacer clic en el botón "X"
  closeBtn.addEventListener("click", function () {
    searchBar.style.display = "none";
  });

  // Cerrar al hacer clic fuera de la barra de búsqueda
  document.addEventListener("click", function (event) {
    if (searchBar.style.display === "flex" && !searchBar.contains(event.target) && event.target !== btnBuscar) {
      searchBar.style.display = "none";
    }
  });

  // Prevenir cierre si se hace clic dentro de la barra
  searchBar.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});


