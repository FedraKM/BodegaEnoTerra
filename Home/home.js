// Funciones del menu
document.getElementById('link-home').onclick = () => window.location.href = '../Home/home.html';
document.getElementById('link-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('link-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
document.getElementById('link-gastronomia').onclick = () => window.location.href = '../Restaurante/restaurante.html';
document.getElementById('link-ubicacion').onclick = () => window.location.href = '../ubicacion/ubicacion.html';
document.getElementById('link-contacto').onclick = () => window.location.href = '../Contacto/contacto.html';

// Ícono USUARIO
document.getElementById('icon-usuario').onclick = () => window.location.href = '../InicioSesion/iniciosesion.html';

// Botones principales
document.getElementById('btn-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
document.getElementById('btn-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('btn-experiencias').onclick = () => window.location.href = '../Restaurante/restaurante.html';
document.getElementById('btn-historia').onclick = () => window.location.href = '../Nosotros/nosotros.html';

//Carrusel Galeria
let indice = 0;
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");

// Crear dots dinámicos
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("activo");
  dot.addEventListener("click", () => mostrarSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function mostrarSlide(nuevoIndice) {
  slides.forEach((slide, i) => {
    slide.classList.remove("activo");
    dots[i].classList.remove("activo");
    if (i === nuevoIndice) {
      slide.classList.add("activo");
      dots[i].classList.add("activo");
    }
  });
  indice = nuevoIndice;
}

function moverSlide(direccion) {
  let nuevoIndice = indice + direccion;
  if (nuevoIndice < 0) nuevoIndice = slides.length - 1;
  if (nuevoIndice >= slides.length) nuevoIndice = 0;
  mostrarSlide(nuevoIndice);
}

// Autoplay
setInterval(() => {
  moverSlide(1);
}, 4000);

//Galería
document.getElementById('galeria-home').onclick = () => {
  window.location.href = '../Galería/galeria.html';
};

//Carrusel reseñas
// Obtener reseñas desde localStorage o array vacío si no hay
const reseñas = JSON.parse(localStorage.getItem('reseñas')) || [];

// Variables para índice y elementos del DOM
let indiceActual = 0;

const sliderContenido = document.getElementById('slider-contenido');
const reseñasDotsContainer = document.getElementById('slider-dots');

// Función para mostrar una reseña según índice
function mostrarReseña(indice) {
  if (reseñas.length === 0) {
    sliderContenido.innerHTML = `<p>No hay reseñas disponibles.</p>`;
    return;
  }

  // Ocultar con fade out
  sliderContenido.classList.add('oculto');

  setTimeout(() => {
    const reseña = reseñas[indice];
    sliderContenido.innerHTML = `
      <strong>${reseña.nombre}</strong>
      <p>${reseña.comentario}</p>
      ${reseña.imagen ? `<img src="${reseña.imagen}" class="imagen-reseña">` : ''}
      <div class="valoracion">${"★".repeat(reseña.valoracion)}${"☆".repeat(5 - reseña.valoracion)}</div>
    `;

    sliderContenido.classList.remove('oculto');

    // Generar/actualizar dots
    generarDots();
  }, 300);
}

// Mostrar la primera reseña al cargar
mostrarReseña(indiceActual);

// Ir a la página de reseñas al hacer clic en el slider
document.getElementById('reseñas-home').onclick = () => {
  window.location.href = '../Reseñas/reseñas.html';
};

// Autoplay automático
let autoplay = setInterval(() => {
  if (reseñas.length === 0) return;

  indiceActual = (indiceActual + 1) % reseñas.length;
  mostrarReseña(indiceActual);
}, 4000);

// Función para reiniciar autoplay cuando se hace clic manualmente
function reiniciarAutoplay() {
  clearInterval(autoplay);
  autoplay = setInterval(() => {
    if (reseñas.length === 0) return;

    indiceActual = (indiceActual + 1) % reseñas.length;
    mostrarReseña(indiceActual);
  }, 4000);
}

// Función para generar los dots de navegación
function generarDots() {
  reseñasDotsContainer.innerHTML = '';
  reseñas.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === indiceActual) dot.classList.add('activo');

    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      indiceActual = i;
      mostrarReseña(indiceActual);
      reiniciarAutoplay();
    });

    reseñasDotsContainer.appendChild(dot);
  });
}

//Abrir y cerrar menú en el celular
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('mostrar');
});
