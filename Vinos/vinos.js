// Funciones del menu
document.getElementById('link-home').onclick = () => window.location.href = '/index.html';
document.getElementById('link-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('link-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
document.getElementById('link-gastronomia').onclick = () => window.location.href = '../Restaurante/restaurante.html';
document.getElementById('link-ubicacion').onclick = () => window.location.href = '../ubicacion/ubicacion.html';
document.getElementById('link-contacto').onclick = () => window.location.href = '../Contacto/contacto.html';

// Íconos
document.getElementById('icon-usuario').onclick = () => window.location.href = '../InicioSesion/iniciosesion.html';

/*----ICONOS----*/
//Carrito lateral
document.addEventListener('DOMContentLoaded', () => {
  const botonesAgregar = document.querySelectorAll('.agregar-carrito');
  const carritoLateral = document.getElementById('carrito-lateral');
  const listaCarrito = document.getElementById('lista-carrito');
  const totalCarrito = document.getElementById('total-carrito');
  const overlay = document.getElementById('overlay');
  const cerrarCarrito = document.getElementById('cerrar-carrito');
  const iconCarrito = document.getElementById('icon-carrito');
  const btnSeguir = document.querySelector('.btn-seguir');
  const btnComprar = document.querySelector('.btn-comprar');

  // FUNCIÓN GLOBAL PARA ACTUALIZAR TOTAL Y VISIBILIDAD
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

    // Mostrar/ocultar según haya productos
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

  //Se guarda los productos para comunicarlo en otras paginas
  function guardarCarritoEnStorage() {
    const nuevosItems = [];
    document.querySelectorAll('.item-carrito').forEach(producto => {
      const nombre = producto.querySelector('strong').textContent;
      const imagen = producto.querySelector('img').src;
      const cantidad = parseInt(producto.querySelector('.cantidad').textContent);
      const precioTexto = producto.querySelector('.precio-item').textContent;
      const precioUnitario = parseFloat(precioTexto.replace('$', '').replace(/\./g, '')) / cantidad;
  
      nuevosItems.push({ nombre, imagen, cantidad, precio: precioUnitario });
    });
  
    sessionStorage.setItem('carrito', JSON.stringify(nuevosItems));
  }

  //Se guarda lo que se recibe de otras paginas
  function restaurarCarritoDesdeStorage() {
    const carritoGuardado =  sessionStorage.getItem('carrito');
    if (carritoGuardado) {
      const items = JSON.parse(carritoGuardado);
      items.forEach(producto => {
        const item = document.createElement('li');
        item.classList.add('item-carrito');
        const precioTotal = producto.precio * producto.cantidad;

        item.innerHTML = `
          <img src="${producto.imagen}" alt="" class="img-carrito">
          <div class="info-carrito">
            <strong>${producto.nombre}</strong>
            <p class="detalle">Caja (6u)</p>
            <div class="acciones-carrito">
              <div class="control-cantidad">
                <img src="../Imagenes/menos.png" class="btn-menos">
                <span class="cantidad">${producto.cantidad}</span>
                <img src="../Imagenes/mas.png" class="btn-mas">
              </div>
              <div class="precio-y-eliminar">
                <span class="precio-item">$${precioTotal.toLocaleString('es-AR')}</span>
                <img src="../Imagenes/multiple.png" class="btn-eliminar">
              </div>
            </div>
          </div>
        `;

        listaCarrito.appendChild(item);

        item.querySelector('.btn-mas').addEventListener('click', () => {
          producto.cantidad++;
          item.querySelector('.cantidad').textContent = producto.cantidad;
          item.querySelector('.precio-item').textContent = `$${(producto.precio * producto.cantidad).toLocaleString('es-AR')}`;
          actualizarTotal();
          guardarCarritoEnStorage();
        });

        item.querySelector('.btn-menos').addEventListener('click', () => {
          if (producto.cantidad > 1) {
            producto.cantidad--;
            item.querySelector('.cantidad').textContent = producto.cantidad;
            item.querySelector('.precio-item').textContent = `$${(producto.precio * producto.cantidad).toLocaleString('es-AR')}`;
            actualizarTotal();
            guardarCarritoEnStorage();
          }
        });

        item.querySelector('.btn-eliminar').addEventListener('click', () => {
          item.remove();
          actualizarTotal();
          guardarCarritoEnStorage();
        });
      });

      actualizarTotal();
    }
  }

  //Abrir carrito con overlay
  function abrirCarrito() {
    overlay.style.display = 'block';
    carritoLateral.classList.add('mostrar');
  }

  //Cerrar carrito con overlay
  function cerrarCarritoFunc() {
    overlay.style.display = 'none';
    carritoLateral.classList.remove('mostrar');
  }

  // Botón "Agregar carrito"
  botonesAgregar.forEach(boton => {
    boton.addEventListener('click', () => {
      const producto = boton.closest('.producto');
      const nombre = producto.querySelector('h3').innerHTML;
      const precioTexto = producto.querySelector('.precio-descuento').textContent;
      const imagen = producto.querySelector('img').src;
      const precioUnitario = parseFloat(precioTexto.replace('$', '').replace('.', ''));

      let cantidad = 1;

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
              <span class="precio-item">$${precioUnitario.toLocaleString('es-AR')}</span>
              <img src="../Imagenes/multiple.png" class="btn-eliminar">
            </div>
          </div>
        </div>
      `;

      listaCarrito.appendChild(item);
      abrirCarrito();
      actualizarTotal();
      guardarCarritoEnStorage(); //

      // Eventos: sumar, restar y eliminar
      item.querySelector('.btn-mas').addEventListener('click', () => {
        cantidad++;
        item.querySelector('.cantidad').textContent = cantidad;
        item.querySelector('.precio-item').textContent = `$${(precioUnitario * cantidad).toLocaleString('es-AR')}`;
        actualizarTotal();
        guardarCarritoEnStorage();
      });

      item.querySelector('.btn-menos').addEventListener('click', () => {
        if (cantidad > 1) {
          cantidad--;
          item.querySelector('.cantidad').textContent = cantidad;
          item.querySelector('.precio-item').textContent = `$${(precioUnitario * cantidad).toLocaleString('es-AR')}`;
          actualizarTotal();
          guardarCarritoEnStorage();
        }
      });

      item.querySelector('.btn-eliminar').addEventListener('click', () => {
        item.remove();
        actualizarTotal();
        guardarCarritoEnStorage();
      });
    });
  });

  // Cierre y fondo oscuro
  overlay.addEventListener('click', cerrarCarritoFunc);
  cerrarCarrito.addEventListener('click', cerrarCarritoFunc);
  if (btnSeguir) btnSeguir.addEventListener('click', cerrarCarritoFunc);

  //Boton comprar
  if (btnComprar) {
    btnComprar.addEventListener('click', () => {
      // Guardar el carrito en localStorage por si lo necesitás después
      guardarCarritoEnStorage();
      
      // Redirigir a la página de compra
      window.location.href = '../Detalle de producto/compra.html'; // Cambiá esta ruta según tu estructura
    });
  }

  // Ícono carrito
  iconCarrito.addEventListener('click', () => {
    const estaVisible = carritoLateral.classList.contains('mostrar');
    if (estaVisible) {
      cerrarCarritoFunc();
    } else {
      abrirCarrito();
      actualizarTotal(); // Ahora sí se ejecuta correctamente
    }
  });

  // Restaurar carrito al cargar la página
  restaurarCarritoDesdeStorage();
});

//Abrir y cerrar menú en el celular
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('mostrar');
});