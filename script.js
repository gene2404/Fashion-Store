function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

function cerrarMenu() {
    document.getElementById("menu").classList.remove("active");
}

document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Mensaje enviado correctamente");
});