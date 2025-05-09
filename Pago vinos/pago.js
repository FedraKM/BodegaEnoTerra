// Funciones del menu
document.getElementById('link-home').onclick = () => window.location.href = '../Home/home.html';
document.getElementById('link-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('link-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
document.getElementById('link-ubicacion').onclick = () => window.location.href = '../ubicacion/ubicacion.html';
document.getElementById('link-contacto').onclick = () => window.location.href = '../Contacto/contacto.html';

// Íconos
document.getElementById('icon-usuario').onclick = () => window.location.href = '../InicioSesion/iniciosesion.html';

//Incio sesion
document.getElementById('iniciarSesion').onclick = () => window.location.href = '../InicioSesion/iniciosesion.html';

//Actualización de pantalla de compra
document.addEventListener('DOMContentLoaded', () => {
    // Obtener carrito guardado
    const carritoGuardado = sessionStorage.getItem('carrito');
    const productosEnCarrito = carritoGuardado ? JSON.parse(carritoGuardado) : [];

    const contenedorResumen = document.querySelector('.resumen');

    let sumaSubtotal = 0;

    // Limpiar productos previos si existen
    contenedorResumen.querySelectorAll('.producto').forEach(producto => producto.remove());

    // Agregar productos al resumen
    productosEnCarrito.forEach(item => {
        const cantidad = item.cantidad;
        const precioUnitario = parseFloat(item.precio); // Asegurarse de que el precio sea un número
        const totalProducto = cantidad * precioUnitario;

        sumaSubtotal += totalProducto;

        const productoHTML = document.createElement('div');
        productoHTML.classList.add('producto');

        productoHTML.innerHTML =
            `<div class="imagen-cantidad">
        <img src="${item.imagen}" alt="${item.nombre}">
        <span class="cantidad">${cantidad}</span>
      </div>
      <div>
        <p><strong>${item.nombre}</strong></p>
        <p>Caja (6u)</p>
      </div>
      <p class="precio">$${totalProducto.toLocaleString('es-AR', { minimumFractionDigits: 2 })}</p>`;

        const lugarParaInsertar = contenedorResumen.querySelector('.codigo-descuento');
        contenedorResumen.insertBefore(productoHTML, lugarParaInsertar);
    });

    // Calcular impuestos (21% del subtotal)     
    const impuestos = sumaSubtotal * 0.21;

    // Actualizar los textos del resumen
    const textoSubtotal = document.getElementById('subtotal-texto');
    const textoTotal = document.getElementById('total-texto');

    const textoImpuestos = contenedorResumen.querySelector('.impuestos');

    if (textoSubtotal) {
        textoSubtotal.textContent = `$${sumaSubtotal.toLocaleString('es-AR', { minimumFractionDigits: 2 })}`;
    }

    if (textoTotal) {
        textoTotal.textContent = `$${(sumaSubtotal + impuestos).toLocaleString('es-AR', { minimumFractionDigits: 2 })}`; // Incluir impuestos en el total
    }

    if (textoImpuestos) {
        textoImpuestos.textContent = `Incluye $${impuestos.toLocaleString('es-AR', { minimumFractionDigits: 2 })} de impuestos`;
    }
});

//lleva a la pagina de commpra-realizada.html
const botonPagar = document.querySelector('.pagar-ahora');

// Le agregamos el evento
botonPagar.addEventListener('click', () => {
    window.location.href = '../compra-realizada/compra-realizada.html';
});