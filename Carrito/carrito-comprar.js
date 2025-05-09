//funcionalidad del carrito en la página de compra
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
        <td>$${precioTotal.toLocaleString('es-AR')}</td>`;

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