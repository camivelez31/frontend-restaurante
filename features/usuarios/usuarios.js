const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "../login/login.html";
}

const mensajeSesion = document.getElementById("mensaje-sesion");
const botonValidar = document.getElementById("btn-validar");

botonValidar.addEventListener("click", () => {
  if (token) {
    mensajeSesion.textContent = "Sesión activa con token JWT.";
  } else {
    mensajeSesion.textContent = "No hay sesión activa.";
  }
});

document.getElementById("logout-btn").addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "../login/login.html";
});