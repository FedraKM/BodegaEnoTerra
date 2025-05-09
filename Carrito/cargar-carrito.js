fetch('../Carrito/carrito.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('contenedor-carrito').innerHTML = html;

    // ELEMENTOS DEL CARRITO
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
      const productos = listaCarrito.querySelectorAll('.item-carrito');
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

    function guardarCarritoEnStorage() {
      const nuevosItems = [];
      listaCarrito.querySelectorAll('.item-carrito').forEach(producto => {
        const nombre = producto.querySelector('strong').textContent;
        const imagen = producto.querySelector('img').src;
        const cantidad = parseInt(producto.querySelector('.cantidad').textContent);
        const precioTexto = producto.querySelector('.precio-item').textContent;
        const precioUnitario = parseFloat(precioTexto.replace('$', '').replace(/\./g, '')) / cantidad;

        nuevosItems.push({ nombre, imagen, cantidad, precio: precioUnitario });
      });

      sessionStorage.setItem('carrito', JSON.stringify(nuevosItems));
    }

    function crearItemCarrito({ nombre, imagen, cantidad, precio }) {
      const item = document.createElement('li');
      item.classList.add('item-carrito');
      item.innerHTML = `
        <img src="${imagen}" alt="" class="img-carrito">
        <div class="info-carrito">
          <strong>${nombre}</strong>
          <p class="detalle">Caja (6u)</p>
          <div class="acciones-carrito">
            <div class="control-cantidad">
              <img src="../Imagenes/menos.png" class="btn-menos">
              <span class="cantidad">${cantidad}</span>
              <img src="../Imagenes/mas.png" class="btn-mas">
            </div>
            <div class="precio-y-eliminar">
              <span class="precio-item">$${(precio * cantidad).toLocaleString('es-AR')}</span>
              <img src="../Imagenes/multiple.png" class="btn-eliminar">
            </div>
          </div>
        </div>
      `;

      // Eventos individuales
      item.querySelector('.btn-mas').addEventListener('click', () => {
        cantidad++;
        item.querySelector('.cantidad').textContent = cantidad;
        item.querySelector('.precio-item').textContent = `$${(precio * cantidad).toLocaleString('es-AR')}`;
        actualizarTotal();
        guardarCarritoEnStorage();
      });

      item.querySelector('.btn-menos').addEventListener('click', () => {
        if (cantidad > 1) {
          cantidad--;
          item.querySelector('.cantidad').textContent = cantidad;
          item.querySelector('.precio-item').textContent = `$${(precio * cantidad).toLocaleString('es-AR')}`;
          actualizarTotal();
          guardarCarritoEnStorage();
        }
      });

      item.querySelector('.btn-eliminar').addEventListener('click', () => {
        item.remove();
        actualizarTotal();
        guardarCarritoEnStorage();
      });

      listaCarrito.appendChild(item);
    }

    function restaurarCarritoDesdeStorage() {
      const items = JSON.parse(sessionStorage.getItem('carrito')) || [];
      listaCarrito.innerHTML = '';
      items.forEach(crearItemCarrito);
      actualizarTotal();
    }

    function abrirCarrito() {
      overlay.style.display = 'block';
      carritoLateral.classList.add('mostrar');
    }

    function cerrarCarritoFunc() {
      overlay.style.display = 'none';
      carritoLateral.classList.remove('mostrar');
    }

    // Mostrar el carrito al hacer clic en el ícono
    iconCarrito.addEventListener('click', () => {
      const estaVisible = carritoLateral.classList.contains('mostrar');
      if (estaVisible) {
        cerrarCarritoFunc();
      } else {
        restaurarCarritoDesdeStorage();
        abrirCarrito();
      }
    });

    overlay.addEventListener('click', cerrarCarritoFunc);
    cerrarCarrito.addEventListener('click', cerrarCarritoFunc);
    if (btnSeguir) btnSeguir.addEventListener('click', cerrarCarritoFunc);

    if (btnComprar) {
      btnComprar.addEventListener('click', () => {
        guardarCarritoEnStorage();
        window.location.href = '../Detalle de producto/compra.html';
      });
    }

    // Restaurar al cargar
    restaurarCarritoDesdeStorage();
  })
  .catch(error => console.error('Error al cargar el carrito:', error));
