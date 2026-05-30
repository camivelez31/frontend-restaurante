const API_URL = "https://backend-restaurante-qfth.onrender.com";

const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "../login/login.html";
}

const pedidosContainer = document.getElementById("pedidos-container");

async function obtenerPedidos() {
  try {
    const response = await fetch(`${API_URL}/pedidos/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error("Error obteniendo pedidos");
    }

    const pedidos = await response.json();

    pedidosContainer.innerHTML = "";

    if (pedidos.length === 0) {
      pedidosContainer.innerHTML = `
        <div class="empty-state">
          <h2>No hay pedidos registrados</h2>
        </div>
      `;
      return;
    }

    pedidos.forEach((pedido) => {
      pedidosContainer.innerHTML += `
        <article class="pedido-card">
          <h3>Pedido #${pedido.id}</h3>

          <div class="pedido-info">
            <p><strong>Cliente ID:</strong> ${pedido.cliente_id ?? "No disponible"}</p>
            <p><strong>Mesa ID:</strong> ${pedido.mesa_id ?? "No disponible"}</p>
            <p><strong>Total:</strong> ${pedido.total ?? "No disponible"}</p>
            <p><strong>Estado:</strong> <span class="estado">${pedido.estado ?? "Registrado"}</span></p>
          </div>
        </article>
      `;
    });

  } catch (error) {
    pedidosContainer.innerHTML = `
      <div class="empty-state">
        <h2>Error cargando pedidos</h2>
        <p>Verifica que el backend esté encendido y que exista el endpoint /pedidos.</p>
      </div>
    `;

    console.error(error);
  }
}

obtenerPedidos();

document.getElementById("logout-btn").addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "../login/login.html";
});