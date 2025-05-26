// Navegación de menú
document.getElementById('link-home').onclick = () => window.location.href = 'index.html';
document.getElementById('link-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('link-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
document.getElementById('link-gastronomia').onclick = () => window.location.href = '../Restaurante/restaurante.html';
document.getElementById('link-ubicacion').onclick = () => window.location.href = '../ubicacion/ubicacion.html';
document.getElementById('link-contacto').onclick = () => window.location.href = '../Contacto/contacto.html';

// Íconos
document.getElementById('icon-usuario').onclick = () => window.location.href = '../InicioSesion/iniciosesion.html';

// Función para actualizar el resumen de compra
function actualizarResumenCompra() {
  const carritoGuardado = sessionStorage.getItem('carrito');
  const productosEnCarrito = carritoGuardado ? JSON.parse(carritoGuardado) : [];

  const contenedorResumen = document.querySelector('.resumen');
  if (!contenedorResumen) return;

  let sumaSubtotal = 0;

  contenedorResumen.querySelectorAll('.producto').forEach(producto => producto.remove());

  productosEnCarrito.forEach(item => {
    const cantidad = item.cantidad;
    const precioUnitario = parseFloat(item.precio);
    const totalProducto = cantidad * precioUnitario;

    sumaSubtotal += totalProducto;

    const productoHTML = document.createElement('div');
    productoHTML.classList.add('producto');
    productoHTML.innerHTML = `
      <div class="imagen-cantidad">
        <img src="${item.imagen}" alt="${item.nombre}">
        <span class="cantidad">${cantidad}</span>
      </div>
      <div>
        <p><strong>${item.nombre}</strong></p>
        <p>Caja (6u)</p>
      </div>
      <p class="precio">$${totalProducto.toLocaleString('es-AR', { minimumFractionDigits: 2 })}</p>
    `;

    const lugarParaInsertar = contenedorResumen.querySelector('.codigo-descuento');
    if (lugarParaInsertar) contenedorResumen.insertBefore(productoHTML, lugarParaInsertar);
  });

  const impuestos = sumaSubtotal * 0.21;

  document.getElementById('subtotal-texto').textContent = `$${sumaSubtotal.toLocaleString('es-AR', { minimumFractionDigits: 2 })}`;
  document.getElementById('total-texto').textContent = `$${(sumaSubtotal + impuestos).toLocaleString('es-AR', { minimumFractionDigits: 2 })}`;

  const impuestosElement = contenedorResumen.querySelector('.impuestos');
  if (impuestosElement) impuestosElement.textContent = `Incluye $${impuestos.toLocaleString('es-AR', { minimumFractionDigits: 2 })} de impuestos`;
}

// Inicialización al cargar documento
document.addEventListener('DOMContentLoaded', () => {
  actualizarResumenCompra();

  // Gestión de métodos de pago
  const pagoTarjetaCheckbox = document.getElementById('pago-tarjeta');
  const mercadoPagoCheckbox = document.getElementById('mercado-pago');
  const inputsTarjeta = document.querySelectorAll('.pago-tarjeta input, .pago-tarjeta select');
  const pagoTarjetaDiv = document.querySelector('.pago-tarjeta');
  const pagoCuerpoDiv = document.querySelector('.pago-cuerpo');

  function actualizarEstadoInputs() {
    const metodoSeleccionado = document.querySelector('input[name="metodo-pago"]:checked');
    if (!metodoSeleccionado) return;

    const headerTarjeta = document.getElementById('header-tarjeta');
    const headerMercado = document.getElementById('header-mercado');

    if (metodoSeleccionado.id === 'pago-tarjeta') {
        // Activar inputs de tarjeta
        inputsTarjeta.forEach(input => {
          input.disabled = false;
          input.required = true;
        });
        pagoTarjetaDiv.style.display = 'block';
        pagoCuerpoDiv.style.display = 'none';

        // Estilos visuales
        headerTarjeta.classList.add('metodo-activo');
        headerTarjeta.classList.remove('metodo-inactivo');
        headerMercado.classList.add('metodo-inactivo');
        headerMercado.classList.remove('metodo-activo');

      } else if (metodoSeleccionado.id === 'mercado-pago') {
        // Desactivar inputs de tarjeta
        inputsTarjeta.forEach(input => {
          input.disabled = true;
          input.required = false;
          input.value = '';
        });
        pagoTarjetaDiv.style.display = 'none';
        pagoCuerpoDiv.style.display = 'block';

        // Estilos visuales
        headerMercado.classList.add('metodo-activo');
        headerMercado.classList.remove('metodo-inactivo');
        headerTarjeta.classList.add('metodo-inactivo');
        headerTarjeta.classList.remove('metodo-activo');
      }
  }

  pagoTarjetaCheckbox?.addEventListener('change', actualizarEstadoInputs);
  mercadoPagoCheckbox?.addEventListener('change', actualizarEstadoInputs);
  actualizarEstadoInputs();

});

// Botón pagar con validación de carrito y formulario
document.querySelector('.pagar-ahora')?.addEventListener('click', () => {
  const carritoGuardado = sessionStorage.getItem('carrito');
  const productosEnCarrito = carritoGuardado ? JSON.parse(carritoGuardado) : [];

  if (productosEnCarrito.length === 0) {
    alert('Tu carrito está vacío. Agregá productos antes de continuar con el pago.');
    return;
  }

  const camposObligatorios = document.querySelectorAll('.formulario input[required], .formulario select[required]');
  const formularioCompleto = Array.from(camposObligatorios).every(campo => campo.value.trim() !== '');

  if (!formularioCompleto) {
    alert('Por favor, completá todos los campos obligatorios antes de continuar.');
    return;
  }

  if (!confirm('¿Confirmás tu compra?')) return;

  // Limpiar carrito, actualizar otras vistas y redirigir
  sessionStorage.removeItem('carrito');

  // Disparar evento para actualizar carrito lateral (si está abierto)
  window.dispatchEvent(new Event('carritoActualizado'));

  window.location.href = '../compra-realizada/compra-realizada.html';
});

// Botón 'Cancelar compra'
document.querySelector('.cancelar-compra')?.addEventListener('click', () => {
  if (!confirm('¿Deseas cancelar la compra?')) return;

  // Limpiar carrito
  sessionStorage.removeItem('carrito');

  // Mostrar modal con mensaje personalizado
  document.getElementById('mensaje-modal').textContent = 'La compra ha sido cancelada con éxito.';
  document.getElementById('modal').style.display = 'flex';
});

// Botón 'Aceptar' en el modal
document.getElementById('btn-cerrar-success')?.addEventListener('click', () => {
  // Redirigir al home
  window.location.href = 'index.html';
});


// Exponer función global para otros scripts
window.actualizarResumenCompra = actualizarResumenCompra;

//Abrir y cerrar menú en el celular
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('mostrar');
});