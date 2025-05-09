//funciones del menu
document.getElementById('link-home').onclick = () => window.location.href = '../Home/home.html';
document.getElementById('link-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('link-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
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

//funcionalidad del carrito
document.addEventListener('DOMContentLoaded', () => {
  const tablaCarrito = document.querySelector('.tabla-carrito tbody');
  const totalFinal = document.querySelector('.total-final span');

  function actualizarTotalCompra() {
    let total = 0;
    document.querySelectorAll('.tabla-carrito tbody tr').forEach(row => {
      const precio = parseFloat(row.querySelector('.precio-descuento').textContent.replace('$', '').replace(/\./g, ''));
      const cantidad = parseInt(row.querySelector('.cantidad').textContent);
      total += precio * cantidad;
      row.querySelector('td:last-child').textContent = `$${(precio * cantidad).toLocaleString('es-AR')}`;
    });

    totalFinal.textContent = `$${total.toLocaleString('es-AR')} ARS`;
  }

  function cargarProductosDesdeStorage() {
    const carritoGuardado = sessionStorage.getItem('carrito');
    if (!carritoGuardado) return;

    const productos = JSON.parse(carritoGuardado);
    tablaCarrito.innerHTML = ''; // Limpia cualquier contenido inicial

    productos.forEach(producto => {
      const precioTotal = producto.precio * producto.cantidad;

      const row = document.createElement('tr');
      row.innerHTML = `
        <td>
          <div class="vino-info">
            <img src="${producto.imagen}" alt="${producto.nombre}" class="vino-img">
            <div class="vino-detalle">
              <h3>${producto.nombre}</h3>
              <p>Caja (6u)</p>
            </div>
          </div>
        </td>
        <td>
          <p><s>$${(producto.precio * 1.43).toLocaleString('es-AR')}</s></p>
          <p class="precio-descuento">$${producto.precio.toLocaleString('es-AR')}</p>
        </td>
        <td>
          <button class="cantidad-btn btn-restar">-</button>
          <span class="cantidad">${producto.cantidad}</span>
          <button class="cantidad-btn btn-sumar">+</button>
        </td>
        <td>$${precioTotal.toLocaleString('es-AR')}</td>
      `;

      tablaCarrito.appendChild(row);

      // Eventos de suma y resta
      const btnSumar = row.querySelector('.btn-sumar');
      const btnRestar = row.querySelector('.btn-restar');
      const cantidadSpan = row.querySelector('.cantidad');

      btnSumar.addEventListener('click', () => {
        producto.cantidad++;
        cantidadSpan.textContent = producto.cantidad;
        guardarCambios(producto.nombre, producto.cantidad);
        actualizarTotalCompra();
      });

      btnRestar.addEventListener('click', () => {
        if (producto.cantidad > 1) {
          producto.cantidad--;
          cantidadSpan.textContent = producto.cantidad;
          guardarCambios(producto.nombre, producto.cantidad);
          actualizarTotalCompra();
        }
      });
    });

    actualizarTotalCompra();
  }

  function guardarCambios(nombre, nuevaCantidad) {
    const carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];
    const actualizado = carrito.map(p => {
      if (p.nombre === nombre) p.cantidad = nuevaCantidad;
      return p;
    });
    sessionStorage.setItem('carrito', JSON.stringify(actualizado));
  }

  cargarProductosDesdeStorage();
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
