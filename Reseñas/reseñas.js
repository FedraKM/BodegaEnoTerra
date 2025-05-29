// Funciones del menu
document.getElementById('link-home').onclick = () => window.location.href = '/index.html';
document.getElementById('link-vinos').onclick = () => window.location.href = '../Vinos/vinos.html';
document.getElementById('link-enoturismo').onclick = () => window.location.href = '../Enoturismo/enoturismo.html';
document.getElementById('link-gastronomia').onclick = () => window.location.href = '../Restaurante/restaurante.html';
document.getElementById('link-ubicacion').onclick = () => window.location.href = '../ubicacion/ubicacion.html';
document.getElementById('link-contacto').onclick = () => window.location.href = '../Contacto/contacto.html';

// Ícono USUARIO
document.getElementById('icon-usuario').onclick = () => window.location.href = '../InicioSesion/iniciosesion.html';

// reseñas
let valoracionSeleccionada = 0;
const estrellas = document.querySelectorAll(".estrella");

// Contador de caracteres en tiempo real
document.getElementById("comentario").addEventListener("input", () => {
    const contador = document.getElementById("comentario").value.length;
    document.getElementById("contador").textContent = contador;
});

// Hover y selección de estrellas
estrellas.forEach(estrella => {
    estrella.addEventListener("mouseover", () => {
        const valor = parseInt(estrella.getAttribute("data-valor"));
        estrellas.forEach(e => {
            if (parseInt(e.getAttribute("data-valor")) <= valor) {
                e.classList.add("hover");
            } else {
                e.classList.remove("hover");
            }
        });
    });

    estrella.addEventListener("mouseout", () => {
        estrellas.forEach(e => e.classList.remove("hover"));
    });

    estrella.addEventListener("click", () => {
        valoracionSeleccionada = parseInt(estrella.getAttribute("data-valor"));
        estrellas.forEach(e => e.classList.remove("seleccionada"));
        estrellas.forEach(e => {
            if (parseInt(e.getAttribute("data-valor")) <= valoracionSeleccionada) {
                e.classList.add("seleccionada");
            }
        });
    });
});

function agregarReseña() {
    const nombre = document.getElementById('nombre').value.trim();
    const comentario = document.getElementById('comentario').value.trim();
    const fotoInput = document.getElementById('foto');
    const file = fotoInput.files[0];

    if (!nombre || !comentario) {
        alert("Por favor completá nombre y comentario.");
        return;
    }

    if (valoracionSeleccionada === 0) {
        alert("Por favor seleccioná una valoración.");
        return;
    }

    const fecha = new Date();
    const fechaFormateada = fecha.toLocaleDateString('es-AR');

    const reseñas = JSON.parse(localStorage.getItem("reseñas")) || [];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const nuevaReseña = {
                nombre,
                comentario,
                valoracion: valoracionSeleccionada,
                imagen: e.target.result,
                fecha: fechaFormateada,
            };
            reseñas.push(nuevaReseña);
            localStorage.setItem("reseñas", JSON.stringify(reseñas));
            mostrarReseñas();
        };
        reader.readAsDataURL(file);
    } else {
        const nuevaReseña = {
            nombre,
            comentario,
            valoracion: valoracionSeleccionada,
            imagen: null,
            fecha: fechaFormateada,
        };
        reseñas.push(nuevaReseña);
        localStorage.setItem("reseñas", JSON.stringify(reseñas));
        mostrarReseñas();
    }

    // Limpiar formulario
    document.getElementById('nombre').value = '';
    document.getElementById('comentario').value = '';
    fotoInput.value = '';
    document.getElementById('preview').innerHTML = '';
    document.getElementById('contador').textContent = '0';

    valoracionSeleccionada = 0;
    estrellas.forEach(e => e.classList.remove("seleccionada"));
}


function mostrarReseñas() {
    const contenedor = document.getElementById("lista-reseñas");
    contenedor.innerHTML = "";
    const reseñas = JSON.parse(localStorage.getItem("reseñas")) || [];

    reseñas.slice().reverse().forEach((reseña, index) => { 
        const item = document.createElement("div");
        item.className = "item-reseña";
        

        item.innerHTML = `
            <strong>${reseña.nombre}</strong> <em>${reseña.fecha}</em>
            <p>${reseña.comentario}</p>
            ${reseña.imagen ? `<img src="${reseña.imagen}" class="imagen-reseña">` : ''}
            <div class="valoracion">${"★".repeat(reseña.valoracion)}${"☆".repeat(5 - reseña.valoracion)}</div>
            <!-- <button class="btn-eliminar" data-index="${index}">X</button> -->
        `;

        contenedor.appendChild(item);

        setTimeout(() => {
            item.classList.add("visible");
        }, 100 * index);
    });

    // Agregar evento a botones eliminar
    /*document.querySelectorAll('.btn-eliminar').forEach(boton => {
        boton.addEventListener('click', e => {
            const idx = e.target.getAttribute('data-index');
            eliminarReseña(idx);
        });
    });*/
}

/*function eliminarReseña(indice) {
    const reseñas = JSON.parse(localStorage.getItem("reseñas")) || [];
    reseñas.splice(indice, 1);
    localStorage.setItem("reseñas", JSON.stringify(reseñas));
    mostrarReseñas();
}*/

// Cargar reseñas guardadas al cargar la página
mostrarReseñas();

// Preview de la imagen subida
const fotoInput = document.getElementById('foto');
const previewDiv = document.getElementById('preview');

fotoInput.addEventListener('change', () => {
    const file = fotoInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = e => {
            previewDiv.innerHTML = `<img src="${e.target.result}" style="max-width: 200px; max-height: 200px; border-radius: 10px; margin-top: 10px;">`;
        };
        reader.readAsDataURL(file);
    } else {
        previewDiv.innerHTML = '';
    }
});

//Abrir y cerrar menú en el celular
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('mostrar');
});