const API_URL = "http://127.0.0.1:8000";

const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "../login/login.html";
}

const clientesContainer = document.getElementById("clientes-container");

async function obtenerClientes() {

  try {

    const response = await fetch(`${API_URL}/clientes/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error("No autorizado");
    }

    const clientes = await response.json();

    clientesContainer.innerHTML = "";

    if (clientes.length === 0) {

      clientesContainer.innerHTML = `
        <div class="empty-state">
          <h2>No hay clientes registrados</h2>
        </div>
      `;

      return;
    }

    clientes.forEach(cliente => {

      clientesContainer.innerHTML += `
        <article class="cliente-card">

          <h3>${cliente.nombre}</h3>

          <div class="cliente-info">

            <p>
              <strong>Correo:</strong>
              ${cliente.correo}
            </p>

            <p>
              <strong>Teléfono:</strong>
              ${cliente.telefono}
            </p>

            <p>
              <strong>ID:</strong>
              ${cliente.id}
            </p>

          </div>

        </article>
      `;
    });

  } catch (error) {

    clientesContainer.innerHTML = `
      <div class="empty-state">
        <h2>Error cargando clientes</h2>
      </div>
    `;

    console.error(error);
  }
}

obtenerClientes();

document
.getElementById("logout-btn")
.addEventListener("click", () => {

  localStorage.removeItem("token");

  window.location.href = "../login/login.html";
});