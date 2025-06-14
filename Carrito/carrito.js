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

  function cargarCarritoDesdeStorage() {
    const itemsGuardados = JSON.parse(sessionStorage.getItem('carrito')) || [];
    listaCarrito.innerHTML = '';

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

  // Eventos
  iconCarrito.addEventListener('click', () => {
    const estaVisible = carritoLateral.classList.contains('mostrar');
    if (estaVisible) {
      cerrarCarritoFunc();
    } else {
      cargarCarritoDesdeStorage();
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
