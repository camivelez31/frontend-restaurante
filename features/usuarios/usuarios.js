console.log("Feature usuarios cargada correctamente.");

const botonUsuarios = document.getElementById("btn-cargar-usuarios");
const usuariosLista = document.getElementById("usuarios-lista");

botonUsuarios.addEventListener("click", () => {
  usuariosLista.innerHTML = `
    <p>Feature de usuarios creada correctamente.</p>
    <p>Luego se conectará con el backend usando JWT.</p>
  `;
});