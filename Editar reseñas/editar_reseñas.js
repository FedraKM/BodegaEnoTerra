//Funciones del menu
document.getElementById('link-dashboard').onclick = () => window.location.href = '../Panel%20administrador/panel.html';
document.getElementById('link-productos').onclick = () => window.location.href = '../Editar%20productos/editar_productos.html';
document.getElementById('link-experiencias').onclick = () => window.location.href = '/Editar%20experiencias/editar_experiencia.html#';
document.getElementById('link-reservas').onclick = () => window.location.href = '/Editar%20reservas/editar_reservas.html';
document.getElementById('link-reseñas').onclick = () => window.location.href = '/Editar%20reseñas/editar_reseñas.html';
document.getElementById('link-configuracion').onclick = () => window.location.href = '/Configuración%20Admin/configuracionAdmin.html';
document.getElementById('link-salir').onclick = () => window.location.href = '/index.html';

// Ícono USUARIO
document.getElementById('icon-usuario').onclick = () => window.location.href = '../Perfil%20Administrador/perfilAdmin.html';

//integrar base de datos
let reseñas = [
    {
        cliente: "Ana Martínez",
        experiencia: "Degustación",
        comentario: "¡Me encantó! Excelente atención.",
        fecha: "2025-05-20",
        respuesta: ""
    },
    {
        cliente: "Carlos López",
        experiencia: "Almuerzo",
        comentario: "Comida deliciosa.",
        fecha: "2025-05-22",
        respuesta: ""
    },
    {
        cliente: "Pedro Núñez",
        experiencia: "Degustación",
        comentario: "Buen ambiente.",
        fecha: "2025-05-19",
        respuesta: ""
    }
];

function cargarReseñas(lista = reseñas) {
    const tbody = document.getElementById("lista-reseñas");
    tbody.innerHTML = "";

    lista.forEach((reseña, index) => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
      <td>${reseña.cliente}</td>
      <td>${reseña.experiencia}</td>
      <td>${reseña.comentario}</td>
      <td>${reseña.fecha}</td>
      <td>
        ${reseña.respuesta || `<input type="text" id="respuesta-${index}" placeholder="Escribir respuesta...">
        <button onclick="responderReseña(${index})">Enviar</button>`}
      </td>
      <td>
        <button onclick="eliminarReseña(${index})">Eliminar</button>
      </td>
    `;

        tbody.appendChild(fila);
    });
}

function responderReseña(id) {
    const input = document.getElementById(`respuesta-${id}`);
    const respuesta = input.value.trim();
    if (respuesta === "") {
        alert("Escribe una respuesta.");
        return;
    }
    reseñas[id].respuesta = respuesta;
    cargarReseñas();
}

function eliminarReseña(id) {
    if (confirm("¿Eliminar esta reseña?")) {
        reseñas.splice(id, 1);
        cargarReseñas();
    }
}

function filtrarReseñas() {
    const filtroExp = document.getElementById("filtro-experiencia").value;
    const filtroCliente = document.getElementById("filtro-cliente").value.toLowerCase();
    const fechaInicio = document.getElementById("fecha-inicio").value;
    const fechaFin = document.getElementById("fecha-fin").value;

    let filtradas = reseñas.filter(r => {
        const coincideExp = !filtroExp || r.experiencia === filtroExp;
        const coincideCliente = !filtroCliente || r.cliente.toLowerCase().includes(filtroCliente);
        const fechaReseña = new Date(r.fecha);
        const coincideInicio = !fechaInicio || fechaReseña >= new Date(fechaInicio);
        const coincideFin = !fechaFin || fechaReseña <= new Date(fechaFin);
        return coincideExp && coincideCliente && coincideInicio && coincideFin;
    });

    cargarReseñas(filtradas);
}

function ordenarPorFecha() {
    reseñas.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    cargarReseñas();
}

window.addEventListener("DOMContentLoaded", () => {
    cargarReseñas(reseñas);
});
