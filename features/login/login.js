const API_URL = "http://127.0.0.1:8000";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = e.target[0].value;
  const password = e.target[1].value;

  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        username,
        password
      })
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.access_token);
      alert("Login exitoso 🔐");

      // redirige a clientes
      window.location.href = "../clientes/clientes.html";
    } else {
      alert("Error en login");
    }

  } catch (error) {
    console.error(error);
    alert("Error conectando con el servidor");
  }
});