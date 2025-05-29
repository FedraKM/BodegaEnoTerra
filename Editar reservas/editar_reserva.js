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

//Reservas (esto es un ejemplo, hay que integrarlo con base de datos)
const reservas = [
  {
    nombre: "Juan Pérez",
    experiencia: "Degustación",
    fechaHora: "2025-06-01 11:30",
    cantidad: 2,
    estado: "Confirmada",
    contacto: "juan@email.com",
  },
  {
    nombre: "María Gómez",
    experiencia: "Almuerzo",
    fechaHora: "2025-06-02 14:30",
    cantidad: 4,
    estado: "Pendiente",
    contacto: "maria@email.com",
  },
  // Agrega más reservas aquí o carga dinámicamente
];

function cargarReservas() {
  const tbody = document.getElementById("lista-reservas");
  tbody.innerHTML = "";

  reservas.forEach((reserva, index) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${reserva.nombre}</td>
      <td>${reserva.experiencia}</td>
      <td>${reserva.fechaHora}</td>
      <td>${reserva.cantidad}</td>
      <td>${reserva.estado}</td>
      <td>${reserva.contacto}</td>
      <td>
        <button onclick="editarReserva(${index})">Editar</button>
        <button onclick="eliminarReserva(${index})">Eliminar</button>
      </td>
    `;

    tbody.appendChild(fila);
  });
}

function editarReserva(id) {
  alert(`Editar reserva #${id + 1}`);
  // Aquí podrías abrir un modal para editar la reserva
}

function eliminarReserva(id) {
  if (confirm("¿Seguro que quieres eliminar esta reserva?")) {
    reservas.splice(id, 1);
    cargarReservas();
  }
}

window.onload = cargarReservas;
